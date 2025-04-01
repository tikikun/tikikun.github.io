---
title: "The Stark Reality of Ai's Reasoning Ability"
date: 2025-04-01T15:03:13+07:00
draft: false
tags: []
categories: []
images: [./images/ai-gen.webp]
---

!()[images/ai-gen.webp]

I need to vent and share something that’s blown my mind today. I just came across [this paper](https://arxiv.org/abs/2503.21934v1) evaluating state-of-the-art LLMs (like O3-MINI, Claude 3.7, etc.) on the 2025 USA Mathematical Olympiad (USAMO) problems. And let me tell you—this is *wild*. 

First off, here’s a quick breakdown of what they did:

- They tested six top-tier LLMs on **six proof-based math problems** from the 2025 USAMO.
- Each model attempted every problem four times, and solutions were graded by **expert human judges** using standardized rubrics.
- The "Ours" column in Table 1 shows the actual scores given by humans. For comparison, two LLMs (O3-MINI and Claude 3.7) were also tasked with grading the solutions automatically.

### The Results?  
The highest average score achieved by **any model** was **less than 5%** out of a possible 42 points. Yes, you read that right: **5%.**  

Here’s the kicker: not only could these models not solve the problems properly, but they also failed miserably at grading their own work. When O3-MINI and Claude 3.7 tried grading the solutions, they consistently **overestimated** their quality by a factor of up to **20x** compared to human graders. So not only can these models not solve rigorous math proofs, but they’re also clueless about how bad their answers are.

---

### What’s Most Shocking  

These models have been trained on **all the math data you can imagine**—IMO problems, USAMO archives, textbooks, papers, you name it. They’ve seen it all. And yet, their performance is abysmal. Here’s why this is such a gut punch:

1. **Logical Failures Everywhere**: The models made frequent unjustified leaps in reasoning, skipped critical steps, or outright assumed things without proof. For example, one model labeled important steps as “trivial” even when they were crucial to the solution.
   
2. **Lack of Creativity**: Unlike humans who can adapt strategies when stuck, the models kept trying the same flawed approaches repeatedly. Even FLASH-THINKING, which attempted multiple strategies, only scratched the surface of each one without reaching a valid conclusion.

3. **Grading Failures**: Automated grading by LLMs inflated scores dramatically, showing that current models aren’t even reliable for evaluating their own work. This raises serious concerns about deploying AI for high-stakes applications where correctness matters.

---

### Why This Matters  

This isn’t just about math competitions—it’s about the broader implications for AI development. If LLMs struggle so badly with tasks requiring deep logical reasoning and creativity, we’re looking at **major obstacles** in fields like:

- Formal verification
- Scientific research
- Advanced engineering
- Legal reasoning

And honestly, it feels like there’s some kind of ceiling here—a fundamental gap between what we think we can train into these models and what they’re actually capable of. Despite all the hype around LLMs solving complex problems, this study shows that we’re still far from achieving true mathematical reasoning in AI.

---

### Final Thoughts  

I knew LLMs had limitations, but seeing numbers like **5%** slapped onto a page really drives it home. These systems are incredibly powerful tools, but they’re nowhere near replacing human-level reasoning in domains that demand rigor and precision.  

So yeah, this has left me shaken. Where do we go from here? How do we bridge this gap? Or is this just an inherent limitation of current architectures? I’d love to hear everyone’s thoughts because this feels like a pivotal moment in understanding the boundaries of AI.
