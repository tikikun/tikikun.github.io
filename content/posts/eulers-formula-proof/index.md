---
title: "Euler's Formula Proof"
date: 2024-05-01T15:32:17+07:00
draft: false
tags: [ai,math]
categories: []
---
Euler's formula understanding is fundamental to the understanding of Rotary Positional Embedding (RoPE) implementation in model like LLaMA. Below is the proof of Euler's formula that is used in my blog again and again for referrence purpose. 

Euler's formula, often expressed as 
$$ 
e^{ix} = \cos(x) + i\sin(x) 
$$

is a fundamental result in complex analysis and connects trigonometric functions with the exponential function. It was discovered by Leonhard Euler in the 18th century. Here’s a proof using Taylor series expansions:

### Proof by Taylor Series

1. **Exponential Function**:
   The Taylor series expansion for \( e^z \) around 0 is:
   $$
   e^z = \sum_{n=0}^{\infty} \frac{z^n}{n!}
   $$

   When \( z = ix \) (with \( i \) being the imaginary unit and \( x \) a real number), the series becomes:
   $$
   e^{ix} = \sum_{n=0}^{\infty} \frac{(ix)^n}{n!}
   $$

2. **Cosine and Sine Functions**:
   The Taylor series expansions for cosine and sine functions are:
   $$
   \cos(x) = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!}
   $$
   $$
   \sin(x) = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!}
   $$

3. **Substitute and Compare**:
   We rewrite the series for \( e^{ix} \), separating even and odd powers of \( x \):
   $$
   e^{ix} = \sum_{n=0}^{\infty} \frac{i^n x^n}{n!}
   $$

   Split this into even \( n \) (which contributes to the real part) and odd \( n \) (which contributes to the imaginary part):
   $$
   e^{ix} = \left(\sum_{k=0}^{\infty} \frac{i^{2k} x^{2k}}{(2k)!}\right) + \left(\sum_{k=0}^{\infty} \frac{i^{2k+1} x^{2k+1}}{(2k+1)!}\right)
   $$
   Since \( i^{2k} = (-1)^k \) and \( i^{2k+1} = i(-1)^k \), we get:
   $$
   e^{ix} = \left(\sum_{k=0}^{\infty} (-1)^k \frac{x^{2k}}{(2k)!}\right) + i\left(\sum_{k=0}^{\infty} (-1)^k \frac{x^{2k+1}}{(2k+1)!}\right)
   $$

   These are exactly the Taylor series expansions for \( \cos(x) \) and \( \sin(x) \) respectively. Hence:
   $$
   e^{ix} = \cos(x) + i\sin(x)
   $$

This proof highlights the beautiful relationship between the exponential function and trigonometric functions when extended into the complex plane.
