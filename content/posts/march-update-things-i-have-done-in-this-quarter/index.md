---
title: "March Update Things I Have Done in This Quarter"
date: 2025-03-15T09:05:26+07:00
draft: false
tags: []
categories: []
images: [./images/alphamaze.gif]
---
This quarter, I focused on launching two major projects:  

## AlphaMaze  
AlphaMaze is a two-stage training framework that enhances large language models with visual reasoning for maze navigation. It combines Supervised Fine-Tuning (SFT) with Group Relative Policy Optimization (GRPO) to help models build an internal "mental map" of their environment.  

Find out more:  
- Paper: [arXiv:2502.14669](https://arxiv.org/abs/2502.14669)  
- Code: [GitHub - janHQ/visual-thinker](https://github.com/janhq/visual-thinker)  
- Live Demo: [alphamaze.menlo.ai](https://alphamaze.menlo.ai/)  

![](./images/alphamaze.gif)  

## PoseLess  
PoseLess is a vision-based robot control framework that maps 2D images to joint angles without explicit pose estimation. By leveraging tokenized visual inputs and a transformer-based decoder, it enables zero-shot generalization and cross-morphology transfer from robots to human hands.  

Find out more:  
- Paper: [arXiv:2503.07111](https://arxiv.org/abs/2503.07111)  
- Code: [GitHub - janHQ/poseless](https://github.com/janhq/poseless)  

Both projects have received positive feedback from the AI and robotics community. Stay tuned for future works!
