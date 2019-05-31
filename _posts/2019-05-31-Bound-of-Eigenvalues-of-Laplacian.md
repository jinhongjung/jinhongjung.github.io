---
layout: post
title: "Bounds of Eigenvalues of Laplacian Matrix"
date: 2019-05-31
categories: [Spectral Graph Theory]
author: Jinhong Jung
---

** This is a test post **

In this post, we will prove the bounds of eigenvalues of Laplacian matrix which is frequently appeared in spectral graph analysis. 
More specifically, those bounds are described as follows:


>  Let $\alpha_{1}, \cdots, \alpha_{n}$ be the eigenvalues of $\mathcal{A}=\mathbf{D}^{-\frac{1}{2}}\mathbf{A}\mathbf{D}^{-\frac{1}{2}}$, and $\beta_{1}, \cdots, \beta_{n}$ be those of symmetric normalized Laplacian matrix $\mathcal{L}^{sym}$.  \\
> Then, $-1 \leq \alpha_{1} \leq \cdots \leq \alpha_{n} \leq 1$, and $0 = \beta_{1} \leq \cdots \leq \beta_{n} \leq 2$.

## Definition of Symmetric Normalized Laplacian Matrix
Given symmetric adjacency matrix $\mathbf{A} \in \mathbb{R}^{n \times n}$, the symmetric normalized Laplacian matrix $\mathcal{L}^{sym}$ is defined as follows:

$$
\mathcal{L}^{sym} = \mathbf{D}^{-\frac{1}{2}}\mathcal{L}\mathbf{D}^{-\frac{1}{2}} = 
\mathbf{I} - \mathbf{D}^{-\frac{1}{2}}\mathbf{A}\mathbf{D}^{-\frac{1}{2}} = 
\mathbf{I} - \mathcal{A}
$$

where $\mathbf{I}$ is an identity matrix, and $\mathbf{D}$ is a diagonal degree matrix.


## Proof

Note that $\mathcal{L}^{sym} = \mathbf{I} - \mathcal{A}$ is positive semidefinite, i.e., 

$$
\mathbf{x}^{\top}(\mathbf{I} - \mathcal{A})\mathbf{x} \geq 0 \Leftrightarrow
1 \geq \frac{\mathbf{x}^{\top}\mathcal{A}\mathbf{x}}{\mathbf{x}^{\top}\mathbf{x}} = 
R(\mathcal{A}, \mathbf{x})
$$

where $R(\mathcal{A}, \mathbf{x})$ is called Reighley quotient.


## References
