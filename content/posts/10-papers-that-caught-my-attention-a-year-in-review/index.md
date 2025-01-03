---
title: "🎄10 Papers That Caught My Attention: a Year in Review"
date: 2024-12-21T09:13:03+07:00
draft: false
tags: [ai, papers, science, arxiv]
categories: [ai]
images: [images/santa-clause.png]
---

![AI Santa](images/santa-clause.png)

## 2024 the year of paper
In 2024, over 100 papers are published daily on arXiv, a staggering amount that's impossible to read all of. However, I've come across a few fascinating AI papers—some less mainstream but with solid ideas—grouped into three main categories of interest.
- Emergence compressive behavior
- Distribution matching
- Alternative

I will share what I learned by providing a short explanation (not just summary) of each paper, as well as give some of my general view on each category.

_Keep in mind, some of the paper inside the same category does not even cite each other. This only offers my own "point of view" since it is relevant to my research direction and interest_

## Overview of 2024 AI Papers: A Snapshot
![AI Santa](images/arxiv-stat.png)
2024 eyed a staggering amount of papers related to LLM (mostly transformer decoder), multimodality, generative AI, ... 

The day we first published (20 Oct 2024) [Ichigo](https://arxiv.org/abs/2410.15316), there are also ~700 papers published alongside us on the same day on in CnL (Computation and Language) category on arxiv.

Right now as of today in Dec, it is around ~1000 papers on a daily basis for CS category, most of which is AI/robotics related papers.

There are no lack of papers to read, so we might as well get started on these 10 papers, and 3 categories from mine.

---
## Emergence Compressive Behavior

This category explores how the "internal states" or "hidden states" of large language models (LLMs) are inherently redundant and sparse. By leveraging the model's own ability—particularly the transformer decoder's capacity—we can generate a compressed version of these internal states for reusability. Essentially, this process mimics a form of compression within the model itself.

Below are the 4 papers I find quite interesting in this regard.

### 1. In-Context Learning Creates Task Vectors

![ICL task vector](images/icl-task-vector.png)
Arxiv link: https://arxiv.org/abs/2310.15916

**Explanation:** This paper demonstrates that when you prompt a model to perform a task, the LLM (a transformer decoder, in this case) generates an internal state. Specifically, the final token of a query like "Apple -> Red, Lime -> Green, Corn ->" during inference creates a "task vector" at layer \( L \) in the forward pass. The task vector is an intermediate hidden state between decoder blocks. Remarkably, if you extract this task vector and perform inference on it in isolation—without including the prior context before "->"—the model can still generate outputs as if it had access to the full context window. For instance, in the example provided, the model can predict "Yellow" as the correct output without needing the full sequence.

### 2. Mixture of Parrots: Experts improve memorization more than reasoning

![Mixture of Parrots](images/mixture-of-parrot.png)
Arxiv link: https://arxiv.org/abs/2410.19034

**Explanation:** This paper explores the core strengths and weaknesses of Mixture-of-Experts (MoE) models. Few tests and benchmarks have been conducted, but the most prominent insight is that the number of **active parameters** is crucial to an LLM model's ability to perform reasoning tasks. The key result is shown in the chart above: with the same number of **total parameters**, MoE models can perform on par with dense LLM models in memorization tasks. However, MoE models with the same **total parameters** but fewer **active parameters** lag behind in terms of reasoning.

### 3. Task Vectors are Cross-Modal

![Task Vectors](images/task-vector-cross-modal.png)
Arxiv link: https://arxiv.org/abs/2410.22330 

**Explanation:** This paper follows up task vector paper with an interesting insight. In multimodal LLM model, the decoder will generate **nearly the same** task vectors when prompted with an **image instruction** compared to prompted with **normal text**. Hence, the task vector, or task function is a robust and universal way to describe task in decoder model. This has many implications for developing multimodal model. (And probably explain why [Ichigo](https://arxiv.org/abs/2410.15316) can convert so well with new sound tokens).

### 4. Compressed Chain of Thought: Efficient Reasoning Through Dense Representations

![Compressed CoT](images/compressed-cot.png)
Arxiv link: https://arxiv.org/abs/2412.13171


**Explanation:** This paper attempts to "compress" Chain-of-Thought (CoT) by selecting important hidden states of specific tokens rather than using the entire hidden states of all tokens during CoT generation. By doing so, they train a model to predict only the **important** hidden states within the CoT process and decode based solely on these, instead of the entire text-based CoT, which is inefficient. This approach achieves nearly the same performance as the full-text version.

---
## Distribution Matching
This year marked the release of [FLUX](https://github.com/black-forest-labs/flux) model, which is a wildly successful successor to **Stable Diffusion** model family. This model has proven how flow matching can achieve result that is way beyond what diffusion model can do.

BFL did not provide an official report about FLUX but since it is so successful a lot of people have writings about that already, you can check that up online. Because that has been done, I will provide other papers that is not directly relevant but useful to learn about Flow matching topic.

### 5. Flow Matching for Generative Modeling

![Flow matching](images/flow-matching.png)
Arxiv link: https://arxiv.org/abs/2210.02747

**Explanation:** It is hard to simplify the explanation for this paper, but it will provide very foundational understanding on how we are able to and can do flow matching for generative model. It introduces two vital concepts `Conditional Flow Matching` and `Optimal Transport` and relevant proofs. Essentially it provides a way to find out the **vector field** that can provide a path to transform your **input** into **target** without any time-dependent process like diffusion (where you add random noise backwards). The image is an example on how optimal transport can provide a much faster way to travel to the target vs diffusion, with very early emergent features from a few steps.

### 6. F5-TTS: A Fairytaler that Fakes Fluent and Faithful Speech with Flow Matching

![F5-TTS](images/f5tts.png)
Arxiv link: https://arxiv.org/abs/2410.06885

**Explanation:** This is a very straight-forward and effective implementation of flow matching in OT scenario. The model employs a Diffusion Transformer (DiT) to essentially train a "vector field" generator by matching the generated field with Optimal Transport field. Because we can generate the vector field on input sample, we can use an **ODE solver** to figure out the target prediction. By doing so, we can make the model to "generate voice" by transform the original noise into "conditioned" output.

_Note: F5TTS model quality is very high compared to its size, you can check out more about that in my previous blog post [⚡Ultra Compact Text-to-Speech: A Quantized F5TTS](https://alandao.net/posts/ultra-compact-text-to-speech-a-quantized-f5tts/)_ 

### 7. Flow Matching for Conditional Text Generation in a Few Sampling Steps

![FlowSeq](images/flowseq.png)
Paper link: https://aclanthology.org/2024.eacl-short.33/ (idk why they do not release on arxiv)

**Explanation:** One might ask if it is just on continuous space how you can do it for discrete codes? This paper did this thing using codebook lookup mechanism that resembling vector quantization for output. The implementation also is kept simple and straight forward.

---
## Alternative
There are other observations that I cannot classify into a single category in this post. Those papers will belong here.

### 8. Scaling Laws for Precision

![Scaling Laws for Precision](images/scaling.png)
Arxiv link: https://arxiv.org/abs/2411.04330

**Explanation:** This papers follow relatively similar vibe of Chinchilla scaling paper. However, instead of compute, the main target of analysis is "precision". Precision here is data type precision during training and calculation. The paper shows evidence that with lower precision (3bit 4bit) the model will not be able to effectively "learn" and even perform worse. With the contemporaneous landscape of "extreme quantization" like 1.5-bit or 2-bit quantization, this result is very critical.

### 9. Round and Round We Go! What makes Rotary Positional Encodings useful? 

![RoPE](images/rope.png)
Arxiv link: https://arxiv.org/abs/2410.06205

**Explanation:** This paper provides multiple analyses of how RoPE affects the training and inference processes of LLM models. It highlights insights that can simplify the development of longer-context-length models by separating the frequency usage of RoPE into positional and semantic components.

### 10. Chameleon: Mixed-Modal Early-Fusion Foundation Models

![Chameleon](images/chameleon.png)
Arxiv link: https://arxiv.org/abs/2405.09818

**Explanation:** I think I have mentioned this multiple times this year, to me, it is just extremely natural way to do multimodality. To train a multimodal model, you just need to discretize the model and train it in an exact same way that you train any other text LLM model.

Beyond this I also have an older blog post : https://alandao.net/posts/multi-modal-tokenizing-with-chameleon/ to further explain this paper.

---
## Honorable mention
### 11. Ichigo: Mixed-Modal Early-Fusion Realtime Voice Assistant

![](images/ichigo.png)
Arxiv link: https://arxiv.org/abs/2410.15316

**Explanation:** Well this is my paper that I worked on with Bach and Rex from Homebrew Research. We have employed Chameleon, but we have proven that mass scale pretraining and architecture change is not needed. We have also proven that cross modality instruction can make the model to adapt to a new modality with mostly just prompting and tried many other interesting things.

This is the first research paper we have done at our company and with friends! It is very memorable so I just want to do some shameless self-promotion plug on my own blog, but hey! hope you enjoy it!

You can check out more at official blog post from the company: https://homebrew.ltd/blog/llama-learns-to-talk

## Conclusion
Those are the papers that I think some are not mainstream, some not even popular, but can offer you insight into other papers or works that is done in 2024. Hope you enjoy the list!
