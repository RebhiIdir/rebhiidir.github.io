---
title: "Handwritten Digit Generation with a GAN"
summary: "A generative adversarial network trained to produce handwritten digits from the MNIST dataset."
date: "2025"
featured: true
collaborators: ["Siham Larbi"]
technologies:
  - Python
  - TensorFlow
  - GAN
  - Generative AI
links:
  - label: "Report"
    url: "https://docs.google.com/document/d/1LbzA2kdtLbRaRL8ZNzMOdLX7rp927d9jFMn3xxDDGVk/edit?usp=sharing"
  - label: "Colab"
    url: "https://colab.research.google.com/drive/1hyJz0T_4PCdgl1j8UsC1HEyioZEvrNfo?usp=sharing"
---

## Objective

Implement a generative adversarial network capable of producing convincing handwritten digits, trained on the MNIST dataset.

## Technical scope

- Generator and discriminator networks built with TensorFlow.
- Adversarial training loop with alternating generator/discriminator updates.
- Qualitative evaluation of generated digit samples over training.

## Results

The trained generator produces recognizable handwritten digits from random noise — a first hands-on introduction to generative modeling, ahead of the Master's thesis work on diffusion models.

## Research connection

An early stepping stone toward the thesis: this project was the first hands-on encounter with generative models, later extended to diffusion-based generation and its detection.
