---
title: "Ai in a Flash Ai and the Matrix"
date: 2024-04-27T12:41:24+07:00
draft: false
tags: [ai]
categories: []
---

Ha! Got you there, not this matrix, the matrix I am talking about is this one.

<p class="ql-left-displayed-equation" style="line-height: 96px;">
  <span class="ql-right-eqno"> &nbsp; </span><span class="ql-left-eqno"> &nbsp; </span><img loading="lazy" decoding="async" src="https://e6dvmuqwy4e.exactdn.com/wp-content/ql-cache/quicklatex.com-8d6bdc63ca8882eb6c53f4ad5f6ce585_l3.svg" height="96" width="216" class="ql-img-displayed-equation " alt="&#92;&#91; &#65;&#32;&#61;&#32;&#92;&#98;&#101;&#103;&#105;&#110;&#123;&#98;&#109;&#97;&#116;&#114;&#105;&#120;&#125; &#97;&#95;&#123;&#49;&#49;&#125;&#32;&#38;&#32;&#97;&#95;&#123;&#49;&#50;&#125;&#32;&#38;&#32;&#92;&#99;&#100;&#111;&#116;&#115;&#32;&#38;&#32;&#97;&#95;&#123;&#49;&#110;&#125;&#32;&#92;&#92; &#97;&#95;&#123;&#50;&#49;&#125;&#32;&#38;&#32;&#97;&#95;&#123;&#50;&#50;&#125;&#32;&#38;&#32;&#92;&#99;&#100;&#111;&#116;&#115;&#32;&#38;&#32;&#97;&#95;&#123;&#50;&#110;&#125;&#32;&#92;&#92; &#92;&#118;&#100;&#111;&#116;&#115;&#32;&#38;&#32;&#92;&#118;&#100;&#111;&#116;&#115;&#32;&#38;&#32;&#92;&#100;&#100;&#111;&#116;&#115;&#32;&#38;&#32;&#92;&#118;&#100;&#111;&#116;&#115;&#32;&#92;&#92; &#97;&#95;&#123;&#109;&#49;&#125;&#32;&#38;&#32;&#97;&#95;&#123;&#109;&#50;&#125;&#32;&#38;&#32;&#92;&#99;&#100;&#111;&#116;&#115;&#32;&#38;&#32;&#97;&#95;&#123;&#109;&#110;&#125; &#92;&#101;&#110;&#100;&#123;&#98;&#109;&#97;&#116;&#114;&#105;&#120;&#125; &#92;&#93;" title="Rendered by QuickLaTeX.com" />
</p>

Boring? But this is the fundamental thing that will connect you to &#8220;Neural Network&#8221; which is the building block of Artificial Intelligence and the like, surprisingly. I will show you how in the section below. But hey, hold on there! Let&#8217;s me tell what you the important thing first.

## What is Neural Network? {.wp-block-heading}

First let&#8217;s screw the complicated medical intuition, let&#8217;s just look at this cool image.<figure class="wp-block-image aligncenter size-full">

<img loading="lazy" decoding="async" width="540" height="360" src="https://e6dvmuqwy4e.exactdn.com/wp-content/uploads/2024/04/image-1.jpg?strip=all&lossy=1&ssl=1" alt="" class="wp-image-204" srcset="https://e6dvmuqwy4e.exactdn.com/wp-content/uploads/2024/04/image-1.jpg?strip=all&lossy=1&ssl=1 540w, https://blog.alandao.net/wp-content/uploads/2024/04/image-1-300x200.jpg 300w" sizes="(max-width: 540px) 100vw, 540px" /> <figcaption class="wp-element-caption">How a brain looks like</figcaption></figure> 

Welp, one thing you can conclude from this cool image is that maybe, just maybe, the brain is a complex structure of interconnected tissues or something. Okay, that is good enough, we will call it the **Neural Network**.

But how exactly this is relevant to matrix or like AI or anything at all ??? Just think about it.

The brain is the most complicated part of the species named **Human** which considers themself **sentient** and have extremely complicated behaviors thinking and invented, discovered quite complicated things like science, rocket,&#8230; and so on. So in fact, the brain posses something we call **intelligence**.

## What is Artificial Intelligence {.wp-block-heading}

But thing is, human is quite hard to create, in fact you need almost 20 years of education for a baby to be productive and contributing to society on average. So, to overcome that we invented something called **Artificial Intelligence** which is in a nutshell, just trying to mimic the brain and intelligence to some degree.

But to do that we came up with a thing called **Neural Network** but, welp, the neural network in math does not contain meat and tissues.

## What is Neural Network again, but in Math {.wp-block-heading}

Well you cannot bring tissues into math, obviously, but you can bring the concepts over! So let&#8217;s start with the basics:

  * You need it to be interconnected
  * You need it to carry informations (say a number or something)
  * You need information to change during the &#8220;connections&#8221; happening

And so something like this has been invented by AI researcher below.<figure class="wp-block-image aligncenter size-large">

<img loading="lazy" decoding="async" width="652" height="278" src="https://e6dvmuqwy4e.exactdn.com/wp-content/uploads/2024/04/Example_FCN.drawio-1.svg" alt="" class="wp-image-208" /> <figcaption class="wp-element-caption">A sample &#8220;Fully Connected Layers&#8221; &#8211; neural network</figcaption></figure> 

Each of the small round node inside the chart is called a &#8220;cell&#8221; each cell is connected to each other by a line, on the line has some values (that will be multiplied by the value of the cell). The calculation process will go from left to right.

Also, you can see, it fulfilled the requirements above:

  * Cell is inter-connected with each other
  * Inside each cell it has a value (0.1, 0.2&#8230;etc)
  * Information is changed during the connecting step (You can see 0.1 is transformed into 0.5 because there is a value of 5 in the line connects the two cells)

So we have an probably &#8220;approximation&#8221; of the said &#8220;neurons&#8221; inside human brain, but in a mathematical way now.

## So what does it have to do with &#8220;The Matrix&#8221; {.wp-block-heading}

### Forward Pass {.wp-block-heading}

As can be seen from above during the &#8220;travel&#8221; (or **forward pass** per AI term) the value is changed based on the tiny number resides inside the thin line? so what is it? is there a formula or something and how does it look like, all of those can be summarized below.<figure class="wp-block-image aligncenter size-large">

<img loading="lazy" decoding="async" width="571" height="277" src="https://e6dvmuqwy4e.exactdn.com/wp-content/uploads/2024/04/Example_FCN_matmul.drawio.svg" alt="" class="wp-image-209" /> </figure> 

So what we learnt from the chart and formula above? It looks neat and very organized, maybe it has some rules?

  * We have 2 input values : [x1,x2]
  * We have 4 output values [y1,y2,y3,y4]
  * The number of calculations need to be done must be equal to the number of output value (4 times y1,2,3,4= &#8230;)
  * The number of summarizations must match the number of input values (2 times, x1 multiply something and + x2 multiply something)

### The Matrix {.wp-block-heading}

With the rule above, it will look weirdly similar, how exactly something looks so random and connected in a mesh together can have such clear rule (output, input, number of calculations etc&#8230; all known).

  * Can we have more generalized way to do the calculation for **neural network**
  * Can we not calculate node by node?
  * Can we parallelize it so that it&#8217;s calculated faster (right now it seems line by line)

In mathematics we have the exact thing just for that, down to every single line of calculation, it&#8217;s called **matrix theory (or matrix math)**. This blog is written for whoever already has some background in math at university/high school so I will just remind shortly.

  * If you have two matrices, A and B, where matrix A is of size **m x p** (where m is the number of rows and n is the number of columns), and matrix B is of size **p x n**,
  * The resulting matrix C, from the dot product A * B, will have the size **m x n**.

Look familiar ? In this case we can infer from the above chart and fill some information here?

  * A = \[x1,x2\] (the size is **1 x 2**)
  * C = \[y1, y2, y3, y4\] (the size is **1 x 4**)
  * Last one is the missing piece? B needs to be having the size of **p x n** (w11, w12&#8230;. and so on)

I have written out everything by that logic below.

First let&#8217;s declar vectors and matrix

<p class="ql-left-displayed-equation" style="line-height: 22px;">
  <span class="ql-right-eqno"> &nbsp; </span><span class="ql-left-eqno"> &nbsp; </span><img loading="lazy" decoding="async" src="https://e6dvmuqwy4e.exactdn.com/wp-content/ql-cache/quicklatex.com-c45e352c479107f8db045bf723a23b7b_l3.svg" height="22" width="143" class="ql-img-displayed-equation " alt="&#92;&#91; &#92;&#116;&#101;&#120;&#116;&#123;&#76;&#101;&#116;&#32;&#125;&#32;&#65;&#32;&#61;&#32;&#92;&#98;&#101;&#103;&#105;&#110;&#123;&#98;&#109;&#97;&#116;&#114;&#105;&#120;&#125;&#32;&#120;&#95;&#49;&#32;&#38;&#32;&#120;&#95;&#50;&#32;&#92;&#101;&#110;&#100;&#123;&#98;&#109;&#97;&#116;&#114;&#105;&#120;&#125;&#44; &#92;&#93;" title="Rendered by QuickLaTeX.com" />
</p>

<p class="ql-left-displayed-equation" style="line-height: 42px;">
  <span class="ql-right-eqno"> &nbsp; </span><span class="ql-left-eqno"> &nbsp; </span><img loading="lazy" decoding="async" src="https://e6dvmuqwy4e.exactdn.com/wp-content/ql-cache/quicklatex.com-ffb0cc8f00d5218b98da88da38ce56ef_l3.svg" height="42" width="221" class="ql-img-displayed-equation " alt="&#92;&#91; &#66;&#32;&#61;&#32;&#92;&#98;&#101;&#103;&#105;&#110;&#123;&#98;&#109;&#97;&#116;&#114;&#105;&#120;&#125; &#119;&#95;&#123;&#49;&#49;&#125;&#32;&#38;&#32;&#119;&#95;&#123;&#49;&#50;&#125;&#32;&#38;&#32;&#119;&#95;&#123;&#49;&#51;&#125;&#32;&#38;&#32;&#119;&#95;&#123;&#49;&#52;&#125;&#32;&#92;&#92; &#119;&#95;&#123;&#50;&#49;&#125;&#32;&#38;&#32;&#119;&#95;&#123;&#50;&#50;&#125;&#32;&#38;&#32;&#119;&#95;&#123;&#50;&#51;&#125;&#32;&#38;&#32;&#119;&#95;&#123;&#50;&#52;&#125; &#92;&#101;&#110;&#100;&#123;&#98;&#109;&#97;&#116;&#114;&#105;&#120;&#125;&#44; &#92;&#93;" title="Rendered by QuickLaTeX.com" />
</p>

<p class="ql-left-displayed-equation" style="line-height: 22px;">
  <span class="ql-right-eqno"> &nbsp; </span><span class="ql-left-eqno"> &nbsp; </span><img loading="lazy" decoding="async" src="https://e6dvmuqwy4e.exactdn.com/wp-content/ql-cache/quicklatex.com-a60186bfdc41a559c8d87c304d90b8e8_l3.svg" height="22" width="163" class="ql-img-displayed-equation " alt="&#92;&#91; &#67;&#32;&#61;&#32;&#92;&#98;&#101;&#103;&#105;&#110;&#123;&#98;&#109;&#97;&#116;&#114;&#105;&#120;&#125;&#32;&#121;&#95;&#49;&#32;&#38;&#32;&#121;&#95;&#50;&#32;&#38;&#32;&#121;&#95;&#51;&#32;&#38;&#32;&#121;&#95;&#52;&#32;&#92;&#101;&#110;&#100;&#123;&#98;&#109;&#97;&#116;&#114;&#105;&#120;&#125; &#92;&#93;" title="Rendered by QuickLaTeX.com" />
</p>

Let&#8217;s do the Matrix Multiplication from matrix theory math!

<p class="ql-left-displayed-equation" style="line-height: 13px;">
  <span class="ql-right-eqno"> &nbsp; </span><span class="ql-left-eqno"> &nbsp; </span><img loading="lazy" decoding="async" src="https://e6dvmuqwy4e.exactdn.com/wp-content/ql-cache/quicklatex.com-5a14ae526772596a1403e08f1d864233_l3.svg" height="13" width="78" class="ql-img-displayed-equation " alt="&#92;&#91; &#65;&#32;&#92;&#99;&#100;&#111;&#116;&#32;&#66;&#32;&#61;&#32;&#67; &#92;&#93;" title="Rendered by QuickLaTeX.com" />
</p>

<p class="ql-left-displayed-equation" style="line-height: 42px;">
  <span class="ql-right-eqno"> &nbsp; </span><span class="ql-left-eqno"> &nbsp; </span><img loading="lazy" decoding="async" src="https://e6dvmuqwy4e.exactdn.com/wp-content/ql-cache/quicklatex.com-35872aafb00c5123e7652f855697d6e3_l3.svg" height="42" width="402" class="ql-img-displayed-equation " alt="&#92;&#91; &#92;&#98;&#101;&#103;&#105;&#110;&#123;&#98;&#109;&#97;&#116;&#114;&#105;&#120;&#125; &#120;&#95;&#49;&#32;&#38;&#32;&#120;&#95;&#50; &#92;&#101;&#110;&#100;&#123;&#98;&#109;&#97;&#116;&#114;&#105;&#120;&#125; &#92;&#99;&#100;&#111;&#116; &#92;&#98;&#101;&#103;&#105;&#110;&#123;&#98;&#109;&#97;&#116;&#114;&#105;&#120;&#125; &#119;&#95;&#123;&#49;&#49;&#125;&#32;&#38;&#32;&#119;&#95;&#123;&#49;&#50;&#125;&#32;&#38;&#32;&#119;&#95;&#123;&#49;&#51;&#125;&#32;&#38;&#32;&#119;&#95;&#123;&#49;&#52;&#125;&#32;&#92;&#92; &#119;&#95;&#123;&#50;&#49;&#125;&#32;&#38;&#32;&#119;&#95;&#123;&#50;&#50;&#125;&#32;&#38;&#32;&#119;&#95;&#123;&#50;&#51;&#125;&#32;&#38;&#32;&#119;&#95;&#123;&#50;&#52;&#125; &#92;&#101;&#110;&#100;&#123;&#98;&#109;&#97;&#116;&#114;&#105;&#120;&#125; &#61; &#92;&#98;&#101;&#103;&#105;&#110;&#123;&#98;&#109;&#97;&#116;&#114;&#105;&#120;&#125; &#121;&#95;&#49;&#32;&#38;&#32;&#121;&#95;&#50;&#32;&#38;&#32;&#121;&#95;&#51;&#32;&#38;&#32;&#121;&#95;&#52; &#92;&#101;&#110;&#100;&#123;&#98;&#109;&#97;&#116;&#114;&#105;&#120;&#125; &#92;&#93;" title="Rendered by QuickLaTeX.com" />
</p>

How can we populate value of C, of course through the use of calculations below

<p class="ql-left-displayed-equation" style="line-height: 95px;">
  <span class="ql-right-eqno"> &nbsp; </span><span class="ql-left-eqno"> &nbsp; </span><img loading="lazy" decoding="async" src="https://e6dvmuqwy4e.exactdn.com/wp-content/ql-cache/quicklatex.com-d10324f69f6e6228423e2050d11c501b_l3.svg" height="95" width="181" class="ql-img-displayed-equation " alt="&#92;&#91; &#92;&#98;&#101;&#103;&#105;&#110;&#123;&#97;&#108;&#105;&#103;&#110;&#101;&#100;&#125; &#121;&#95;&#49;&#32;&#38;&#61;&#32;&#120;&#95;&#49;&#32;&#92;&#99;&#100;&#111;&#116;&#32;&#119;&#95;&#123;&#49;&#49;&#125;&#32;&#43;&#32;&#120;&#95;&#50;&#32;&#92;&#99;&#100;&#111;&#116;&#32;&#119;&#95;&#123;&#50;&#49;&#125;&#44;&#32;&#92;&#92; &#121;&#95;&#50;&#32;&#38;&#61;&#32;&#120;&#95;&#49;&#32;&#92;&#99;&#100;&#111;&#116;&#32;&#119;&#95;&#123;&#49;&#50;&#125;&#32;&#43;&#32;&#120;&#95;&#50;&#32;&#92;&#99;&#100;&#111;&#116;&#32;&#119;&#95;&#123;&#50;&#50;&#125;&#44;&#32;&#92;&#92; &#121;&#95;&#51;&#32;&#38;&#61;&#32;&#120;&#95;&#49;&#32;&#92;&#99;&#100;&#111;&#116;&#32;&#119;&#95;&#123;&#49;&#51;&#125;&#32;&#43;&#32;&#120;&#95;&#50;&#32;&#92;&#99;&#100;&#111;&#116;&#32;&#119;&#95;&#123;&#50;&#51;&#125;&#44;&#32;&#92;&#92; &#121;&#95;&#52;&#32;&#38;&#61;&#32;&#120;&#95;&#49;&#32;&#92;&#99;&#100;&#111;&#116;&#32;&#119;&#95;&#123;&#49;&#52;&#125;&#32;&#43;&#32;&#120;&#95;&#50;&#32;&#92;&#99;&#100;&#111;&#116;&#32;&#119;&#95;&#123;&#50;&#52;&#125;&#46; &#92;&#101;&#110;&#100;&#123;&#97;&#108;&#105;&#103;&#110;&#101;&#100;&#125; &#92;&#93;" title="Rendered by QuickLaTeX.com" />
</p>

## Conclusions {.wp-block-heading}

You have seen that the **forward pass** in **neural network** which is simply a process to pass a bunch of number into different **layers** and how it can be converted back to matrix math 100%.

Why this is important? Because nowadays all of the computations in AI, literally everything, is written in GPU, which is a hardware to do just one thing very, very well that is to do matrix multiplication (matmul). By converting all the issues in AI back to matrix math, we can, in fact develop AI much faster.

Due to above reasons, your matrix math became the pillar for AI and machine learning in general. In order to make AI faster, more efficient, we just need to figure out one single thing.

&#8220;How to to do matmul faster?&#8221;


