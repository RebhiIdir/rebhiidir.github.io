---
title: "NS-DSer Pipeline — Engineering Notes"
summary: "Implementation notes on reproducing the NS-DSer steganalysis pipeline on dual-GPU Kaggle hardware: PF-ODE inversion, feature extraction, and the classifier that reached 99.52% accuracy."
status: "Engineering note"
date: "2026"
featured: false
tags:
  - Diffusion Models
  - Machine Learning
  - Research
links:
  - label: "Kaggle notebook"
    url: "https://www.kaggle.com/code/idirrebhi/nsdser"
  - label: "GitHub — DStegan"
    url: "https://github.com/RebhiIdir/DStegan.git"
---

## Summary

Companion engineering note to the [main thesis page](/research/generative-steganography): a closer look at how the NS-DSer baseline was actually implemented and debugged, on Kaggle's dual T4 GPU runtime, ahead of the comparative study against mas-GRDH and Gaussian Shading.

## Problem

NS-DSer detects steganography by inverting a generated image back to the latent noise that produced it, then checking whether that noise still looks like a clean Gaussian sample. The input is a batch of Stable Diffusion 2.1 generations (cover and stego); the output is a binary classification (clean vs. carrying a hidden message) plus a 10-dimensional statistical feature vector per image. The difficulty is entirely in the inversion step: any numerical drift there corrupts the recovered noise and makes the downstream statistics meaningless.

## Method

- **Hardware split** — VAE on `cuda:1`, UNet on `cuda:0`, to fit both models comfortably on Kaggle's dual T4 setup.
- **Inversion** — PF-ODE (probability flow ODE) inversion using a `HeunDiscreteScheduler` over 20 steps, converting the model's v-prediction output back to epsilon-prediction at each step.
- **Feature extraction** — a 10-feature statistical vector per image combining spatial-domain and DCT-domain statistics of the recovered noise, serialized to JSONL for downstream training.
- **Classifier** — an FLD Ensemble (50 Fisher Linear Discriminant estimators, each trained on a random feature subset), matching the original NS-DSer paper's design.

## Debugging notes

Three issues accounted for most of the early gap with the paper's reported numbers:

- **Sigma indexing** — an off-by-one in how noise schedule sigmas were indexed during inversion, silently corrupting the recovered noise for a subset of steps.
- **v-prediction conversion** — Stable Diffusion 2.1 predicts velocity (v), not noise (ε) directly; the conversion formula needed to be applied consistently at every inversion step, not just the first.
- **Data leakage** — an early train/test split leaked cover/stego pairs generated from the same seed across both sets, inflating accuracy artificially. Fixing the split to separate by generation seed brought results back in line with the paper.

## Results

- **Message Concealment (MC):** 99.52% accuracy, AUC-ROC 1.0 — matching the original NS-DSer paper closely enough to validate the re-implementation.
- **mas-GRDH:** ≈52% accuracy — consistent with the paper's own report of near-chance performance against distribution-preserving embedding.

Full comparative results (including the CNN extension and the RPCM-augmented features) are on the [main research page](/research/generative-steganography).
