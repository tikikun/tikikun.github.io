---
title: "Gemma 4 E2B & Per-Layer Embeddings (PLE) — Research Notes"
date: 2026-04-06T00:00:00+07:00
draft: false
tags: [ai]
categories: [ai]
---

> Source: [google/gemma-4-E2B-it on HuggingFace](https://huggingface.co/google/gemma-4-E2B-it)  
> Code: [transformers/models/gemma4/modeling_gemma4.py](https://github.com/huggingface/transformers/blob/main/src/transformers/models/gemma4/modeling_gemma4.py)

---

## 1. Why E2B is Faster Than a Normal 5B Model

The name is the key. **"E" stands for "Effective" parameters**, not total.

| Model | Effective Params | Total Params (with embeddings) |
|-------|-----------------|-------------------------------|
| E2B   | **2.3B**        | 5.1B                          |
| E4B   | **4.5B**        | 8B                            |

Inference speed is gated by **compute-heavy parameters** (2.3B), not total weight count (5.1B). The remaining ~2.8B lives in embedding tables that cost almost nothing to use — they're just array index lookups, no matrix multiplications.

So compared to a standard dense 5B model where all 5B parameters participate in heavy compute (attention, FFN), E2B only runs **2.3B parameters through actual computation**.

---

## 2. The Gemma 4 Model Family

| Model        | Architecture | Total Params | Active/Effective Params | Why Fast                          |
|--------------|-------------|-------------|------------------------|-----------------------------------|
| **E2B**      | Dense        | 5.1B        | **2.3B effective**     | PLE trick (see below)             |
| **E4B**      | Dense        | 8B          | **4.5B effective**     | PLE trick                         |
| **26B A4B**  | **MoE**      | 25.2B       | **3.8B active**        | Only 8 of 128 experts fire per token |
| **31B**      | Dense        | 30.7B       | 30.7B                  | No tricks, full compute           |

> **E2B is NOT MoE.** It's a genuinely small dense transformer. The "few effective params" is not sparsity/routing — the core transformer really is 2.3B. PLE bolts on extra parameters cheaply on top.

---

## 3. What is Per-Layer Embedding (PLE)?

### Normal Transformer (e.g. Qwen, LLaMA)

One embedding table. Runs **once** at the start:

```
token_ids → [embedding table] → hidden_states (seq_len × hidden_dim)
     ↓
  Layer 1 (attention + FFN)
     ↓
  Layer 2 (attention + FFN)
     ↓
     ...
  Layer N
     ↓
  output
```

The token `"cat"` is looked up once. That fixed vector flows through all layers getting transformed.

### E2B with PLE

There's still the initial lookup, but **each transformer layer also receives a fresh, layer-specific token vector** injected after attention + FFN.

```
token_ids → [main embedding] → hidden_states
          → [ONE big PLE lookup] → split into N layer slices

Layer 1:  attention → FFN → [gated injection of ple_slice_1] → residual add
Layer 2:  attention → FFN → [gated injection of ple_slice_2] → residual add
...
Layer 35: attention → FFN → [gated injection of ple_slice_35] → residual add
```

The token IDs **never disappear** — they're stored as integers from the start and reused for all lookups.

---

## 4. Why the Embedding Tables Are So Large (~2.8B extra params)

Two compounding factors:

1. **Vocabulary size: 262,144 tokens** — roughly 8× larger than typical models (LLaMA uses ~32K). Needed for 140+ languages + multimodal tokens (image/audio).
2. **35 decoder layers** — each gets its own embedding slice.

```
2.8B / (262,144 × 35) ≈ 305 dims per PLE vector per layer
```

But because it's all just array lookups (`table[token_id]`), these 2.8B parameters cost almost nothing at runtime — no compute, just memory reads.

---

## 5. Exact Implementation (from source code)

### Step 1 — One big lookup upfront

Google's implementation is smart: rather than doing 35 separate lookups inside the layer loop, they do **one giant lookup before the loop starts**.

```python
# embed_tokens_per_layer shape: (vocab_size, num_layers × per_layer_dim)
# Single lookup gives ALL layers' embeddings at once
per_layer_inputs = embed_tokens_per_layer[input_ids]
# reshape to: (batch, seq_len, num_layers, per_layer_dim)
```

### Step 2 — Blend PLE with main embedding projection

The per-layer input is not just the raw PLE lookup. It's **combined with a projection of the main embedding**:

```python
def project_per_layer_inputs(inputs_embeds, per_layer_inputs):
    # Project main embedding down to per-layer space
    per_layer_projection = per_layer_model_projection(inputs_embeds)
    per_layer_projection = reshape(..., num_layers, per_layer_dim)
    per_layer_projection = layer_norm(per_layer_projection)

    # Combine: raw token identity + initial embedding perspective
    return (per_layer_projection + per_layer_inputs) * 2**-0.5  # scale by 1/√2
```

So `per_layer_input` = **(PLE lookup + main embedding projected)** × 0.707

### Step 3 — Gated injection inside each decoder block

This is the most surprising part. It's **not a simple addition** — it's a **GLU-style gate**:

```python
# At the END of each transformer layer (after attention + FFN):

residual = hidden_states
hidden_states = per_layer_input_gate(hidden_states)   # project hidden DOWN to per_layer_dim
hidden_states = act_fn(hidden_states)                  # activate → becomes a gate
hidden_states = hidden_states * per_layer_input        # element-wise multiply with PLE slice
hidden_states = per_layer_projection(hidden_states)    # project back UP to hidden_dim
hidden_states = rms_norm(hidden_states)
hidden_states = residual + hidden_states               # residual add
```

The **current evolved hidden state controls how much of each PLE dimension gets injected**. If a given dimension of `per_layer_input` isn't relevant at this point in the computation, the gate suppresses it.

### Full Data Flow

```
input_ids
   │
   ├──→ embed_tokens(input_ids)           → inputs_embeds (main embedding)
   │
   └──→ embed_tokens_per_layer(input_ids) → shape (batch, seq, 35, 305)
              │
              └── project_per_layer_inputs(inputs_embeds, ...)
                        │
                        ▼
              per_layer_inputs: (batch, seq, 35, 305)
              [blend of PLE lookup + main embedding projection, scaled 1/√2]

Loop over layers i = 0..34:
   hidden = attention(hidden)
   hidden = ffn(hidden)
   gate   = act_fn(W_gate @ hidden)          # shape: (batch, seq, 305)
   inject = gate * per_layer_inputs[:,:,i,:] # element-wise multiply
   hidden = hidden + W_proj @ inject         # project up + residual
```

---

## 6. Why This Works

- **Normal model**: The initial embedding must encode everything useful for all 35 layers in one vector. That's a lot of pressure.
- **PLE**: Each layer gets a **layer-specific refresh** of token identity information — "at layer 15, here's what token #42 means *at this depth*."
- The **gating** makes it adaptive: the current hidden state decides how much of the token identity refresh to absorb. Unlike a plain residual add, irrelevant dimensions get suppressed.

---

## 7. Comparison with Other Efficiency Techniques

| Model          | Company        | Technique                                     |
|----------------|---------------|-----------------------------------------------|
| Gemma 4 E2B/E4B | Google        | **PLE** — per-layer token embedding injection |
| Gemma 4 26B A4B | Google        | **MoE** — sparse expert routing               |
| Phi-3/4 Mini   | Microsoft     | Data quality — small model, massive curated data |
| MobileLLM      | Meta          | Layer weight sharing                          |
| OpenELM        | Apple         | Non-uniform layer widths                      |
| MiniCPM        | Tsinghua      | Embedding scaling + WSD LR schedule           |
| **ALBERT**     | **Google (2019)** | **Factorized embeddings** — closest prior work |

PLE is essentially unique to Google's Gemma 3n/4 E-series. No other major production model uses it as of early 2025.

---

## 8. Related Reading

| Resource | Why Read It |
|----------|------------|
| [ALBERT paper (2019)](https://arxiv.org/abs/1909.11942) | Closest academic ancestor — factorized embedding parameterization |
| [Transformer Circuits (Anthropic, 2021)](https://transformer-circuits.pub/2021/framework/index.html) | Residual stream theory — why injecting at multiple depths makes sense |
| [Universal Transformers (2018)](https://arxiv.org/abs/1807.03819) | Per-layer conditioning signals, conceptually similar |
| [Gemma 3n Developer Guide](https://developers.googleblog.com/en/gemma-3n-developer-guide/) | Where PLE was first publicly described |
| [HuggingFace Gemma 4 model card](https://huggingface.co/google/gemma-4-E2B-it) | Best plain-English description of PLE |
| [modeling_gemma4.py](https://github.com/huggingface/transformers/blob/main/src/transformers/models/gemma4/modeling_gemma4.py) | Ground truth — actual implementation |

> **Note:** There is no standalone peer-reviewed paper on PLE yet. It exists only in Google's model cards, blog posts, and the HuggingFace Transformers source code.

---

## 9. Key Takeaways

1. **E2B has 5.1B total params but only 2.3B effective** — the gap is PLE embedding tables
2. **PLE is not MoE** — it's a dense model with a clever embedding trick
3. **The big vocab (262K) × 35 layers** is why the embedding tables are so large
4. **Implementation is smarter than expected**: one giant lookup upfront, not 35 separate lookups
5. **Combination is a GLU-style gate**: the hidden state controls how much PLE info flows in per layer
6. **No one else is doing this yet** — PLE is a Google-proprietary technique as of early 2025
