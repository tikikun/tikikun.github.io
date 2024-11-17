---
title: "The Hidden Cost of LLM Training: Why Optimizers Gulp Down Vram"
date: 2024-07-20T21:00:53+07:00
draft: false
tags: [ai]
categories: []
images: [images/just_how_you_feel_out_of_memory.jpg]
---

## The Error of Death
Have you been constantly battling with VRAM usage in fine-tuning LLMs, and constantly struggling with the below error?

```
RuntimeError: CUDA error: out of memory..
```

The above is the destroyer of joy, the sudden stop of happiness, and the most dreadful error you might have faced as someone trying to train an AI model, or more specifically, an LLM (because I assume it's the most VRAM-intensive among the bunch).

![CUDA OOM](images/just_how_you_feel_out_of_memory.jpg)

## What Is Eating Up VRAM in My Training Pipeline?
Technically speaking, when you train an AI model, you will need to have enough VRAM for whatever you have "allocated" to memory.

But hey, look, this is 2024, and everyone has too much on their plates already! No one will code the entire training pipeline, including optimizer, parameters, etc., from scratch for no purpose. Hence, I will cut to the chase now and tell you what the culprits are that, most of the time, eat up VRAM during the training/fine-tuning process.

During most LLM training/fine-tuning, there are three main things that will cost you your dear VRAM:
- **Model weights**: The number of parameters—7B, 13B, and so on.
- **Intermediate activations**: Activations of layers during a forward pass.
- **Optimizer state**: The most commonly used optimizer is AdamW and its variants.

The above list looks intuitive for the first two items—obviously, you need to store model weights and activations to at least train a model. But what about the optimizer?

I have realized a lot of people actually skip this part because Adam and AdamW optimizers have been in practice for so long that people just keep using them without knowing the exact impact or their memory footprint at all, simply accepting that LLM training will cost a lot of VRAM. And maybe...?

![The more you buy, the more you save](images/FxYV7J8aIAEXMG9.png)

Well, jokes aside, you can do something about it, like quantize the weights, choose a smaller model, etc. But today, I will tilt your attention to a different thing: the optimizer, and in this case, AdamW!

## What Exactly Is AdamW, and What Is It Allocating?
AdamW (Adam with Weight Decay) is an extension of the popular Adam optimizer, designed to address some of the shortcomings of standard Adam, particularly in the context of large neural networks like LLMs. To understand why AdamW can be so memory-intensive, let's break down what it's actually doing and storing in memory.

### The Basics of Adam
Adam (Adaptive Moment Estimation) maintains two moving averages for each parameter in the model:

1. The first moment estimate (mean of gradients).
2. The second moment estimate (uncentered variance of gradients).

These moving averages allow Adam to adapt the learning rate for each parameter individually, which can lead to faster convergence and better performance, especially for problems with sparse gradients.

### AdamW's Additional Complexity
AdamW builds on Adam by decoupling the weight decay from the gradient update. This seemingly small change can lead to better generalization, especially for large models. However, it comes at a cost in terms of memory usage.

### Memory Footprint of AdamW
For each parameter in your model, AdamW needs to store (aside from the model weights and activations, of course):

1. The first moment estimate (m).
2. The second moment estimate (v).

This means that for a model with **N parameters**, AdamW effectively needs to store an extra **2N parameters** (and probably some more) for the update, because each parameter needs to have 2 values in the optimizer.

Visually, m and v should carry as many values as the weights.

![mvstate](images/mvstate.png)

The m and v states will be used to calculate the adaptive rate at which each parameter will be updated. Or, you can understand it as being fused together to make a "direction vector" for the gradient to optimize more effectively.

### Example:
Let's say you have to train a Bfloat16 model with 7B parameters. You will incur:
- Model weights: ~16GB.
- Optimizer states: ~32GB (m and v).
- Activations: Depending on batch size (assuming it's just zero for simplicity).

Total VRAM: ~48GB.

Let's say you have a decent budget and your GPU is an A6000 ($5000 GPU). Without allocating any space to store activations, you have already run out of space since the A6000 only has 48GB of VRAM—you are dead in the water already.

## What to Do?
QLoRA and LoRA are nice, but what do you do if you still want to fully fine-tune with VRAM limitations?

Understanding the nature of the optimizer's memory footprint can give us some options:

### Option 1: Modify the Optimizer (AdamW)
If you pay close attention, you can do something to the optimizer. You can reduce the resolution or the number of values you decide to save. For example:

In the paper [Adam-mini](https://arxiv.org/pdf/2406.16793), they proposed:

![Adam-mini](images/vram.png)

By averaging out the v-value calculation in a grid style, they achieved a much smaller impact on the VRAM of the v-state. The original image now looks something like this:

![Adam-mini](images/reduced_v.png)

In theory, you can choose to modify the optimizer state calculation in a different way and see the results for yourself—even removing the v-state entirely!

### Option 2: Quantize the Optimizer
If you're quantizing the weights, you end up with "QLoRA." But what if you're just quantizing the optimizer?

That's another option. In fact, there is a dedicated section for this here: [8-bit optimizers](https://huggingface.co/docs/bitsandbytes/main/en/optimizers).

Basically, you can:
- Keep the model as full parameters.
- Quantize the optimizer to 8-bit.

It may take more time to converge, or the loss may decrease more slowly, but you can keep the output training weights in full FP16 with a significant reduction in VRAM usage.

### Option 3: Combine Options 1 and 2
You can start with the quantized version of the optimizer (Option 2) and try to implement the VRAM reduction techniques (like Adam-mini) from Option 1. This way, you gain VRAM reductions through both quantization and optimizer modifications.

### Option 4: Use a Different Optimizer
There are many other optimizers, like the Lion optimizer. For example: [Lion](https://huggingface.co/docs/bitsandbytes/main/en/reference/optim/lion).

## Conclusion
You can reduce VRAM usage by using the four options above without resorting to LoRA, QLoRA, or buying more GPUs just yet. Training an AI model is inherently a stochastic optimization process. By understanding it, you can also control the requirements and make trade-offs to make your training possible without resorting to quality-destroying methods like quantizing model weights. Sometimes, you may even experience faster convergence with a different or custom optimizer (as in the Adam-mini case). So, more VRAM ≠ better. 
