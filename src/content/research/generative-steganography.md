---
title: "Detecting Generative Steganography in Diffusion Models"
summary: "Master's thesis: can steganalysis still tell a clean image from one carrying a hidden message once the message is embedded during diffusion-based generation itself?"
status: "Master's thesis, defended 2026"
date: "2026"
featured: true
tags:
  - Steganalysis
  - Diffusion Models
  - Generative AI
  - Computer Vision
  - Deep Learning
image: "/images/research-pipeline.svg"
links:
  - label: "Download the full thesis (PDF, FR)"
    url: "/documents/memoire-rebhi-larbi-steganographie-generative.pdf"
  - label: "GitHub — DStegan"
    url: "https://github.com/RebhiIdir/DStegan.git"
  - label: "Kaggle notebook — NS-DSer baseline"
    url: "https://www.kaggle.com/code/idirrebhi/nsdser"
---

## Summary

"Détection de stéganographie issue de modèles génératifs : distinction entre images stéganographiées et images synthétiques" — a Master's thesis (Systèmes Informatiques Intelligents, Université Mouloud Mammeri de Tizi-Ouzou) co-authored with Siham Larbi, supervised by M. Samy Sadi and Mlle. Hedir Tassadit.

Diffusion models such as Stable Diffusion made it possible to embed a secret message directly during image generation, rather than hiding it inside a pre-existing cover image. This thesis asks whether current steganalysis tools can still separate a clean generated image from one that secretly carries a message — and where exactly that detection breaks down.

## Context

The rise of diffusion-based generative AI enabled **DM-GIS** (Diffusion Model-based Generative Image Steganography): a secret message is encoded directly into the latent noise that seeds the generation process, so there is no longer a "modified cover" to compare against — the image was suspicious from the very first denoising step. This sits at the crossroads of computer vision, steganalysis, generative AI, and trustworthy AI.

## Research question

Classical steganalysis looks for traces of tampering in the pixel or frequency domain of an existing image. **NS-DSer**, the current reference steganalyzer, instead inverts the diffusion trajectory to recover the latent noise and tests whether its statistical distribution still looks Gaussian. This works well against naive embedding, but techniques explicitly designed to preserve the Gaussian distribution of the noise — like the **Gaussian Shading** watermark — camouflage the hidden signal almost perfectly. The thesis investigates how far detection can be pushed against these distribution-preserving methods, and what, if anything, still leaks through.

## Methodology

1. **Baseline reproduction** — re-implement NS-DSer end to end on Stable Diffusion 2.1: PF-ODE inversion with a Heun discrete scheduler, v-prediction-to-epsilon conversion, and a 10-feature statistical vector (spatial + DCT domain) extracted from the recovered noise.
2. **Reference evaluation** — test the baseline on two embedding techniques with very different properties: **Message Concealment (MC)**, a direct/naive embedding, and **mas-GRDH**, a distribution-preserving technique.
3. **Extension 1 — CNN** — train a convolutional network directly on the latent noise residuals, to see whether learned spatial patterns beat hand-crafted statistics.
4. **Extension 2 — alternative classifiers and features** — test Logistic Regression, XGBoost, SVM (RBF), ExtraTrees and a stacking ensemble on the 10-feature space, then augment it with **RPCM** descriptors (phase correlation / inter-channel spatial dependencies) recovered after the VAE decoder.
5. **Evaluation protocol** — 2,000 samples per technique (1,000 cover / 1,000 stego), accuracy, F1-score and ROC-AUC as the main metrics, with a train/test split fixed carefully to avoid data leakage.

## Results

| Method | Technique tested | Accuracy | Notes |
|---|---|---|---|
| NS-DSer (baseline) | Message Concealment (MC) | **99.52%** | AUC-ROC 1.0 — consistent with the original paper; validates the re-implementation |
| NS-DSer (baseline) | mas-GRDH | **≈52%** | Near chance level — confirms the theoretical indetectability of distribution-preserving embedding |
| CNN (Extension 1) | mas-GRDH | **≈50%** | Learned spatial features don't help either; the signal is buried in generation noise |
| Logistic Regression / XGBoost | mas-GRDH | **≈52.5%** | On the 10-feature statistical space |
| Stacking ensemble | mas-GRDH | **46.0%** (AUC 0.43) | Overfits the noise, fails to generalize |
| **Tabular + RPCM features** (penalized Logistic Regression) | mas-GRDH | **57.0%** (F1 0.552, ROC-AUC 0.550) | Best result of the study — a faint but consistent signal above chance |

The contrast is stark: naive embedding (MC) is caught almost perfectly, while a well-designed distribution-preserving technique (mas-GRDH) pushes every method tested — including deep learning — down to near-random performance. The one configuration that broke through this ceiling combined tabular noise statistics with RPCM descriptors, suggesting that inter-channel phase correlations retain a small residual trace of the hidden message even after the VAE decoder.

## Perspectives

- Evaluate the inversion pipeline on **real photographs** rather than only synthetic images, to separate sensor noise from generation noise.
- Test generalization across **other diffusion architectures** (Midjourney, DALL·E 3), beyond Stable Diffusion.
- Shift the defensive paradigm from *detection* to **sanitization**: instead of trying to spot the hidden channel, neutralize it preventively — for instance with a short diffusion/denoising cycle plus a quaternion-based micro-perturbation (Adversarial Diffusion Sanitization, inspired by Frants & Agaian).

## Downloads & reproducibility

The full pipeline, notebooks, and generated datasets are public. The environment isn't a one-click reproduction (hardware-specific dependencies), but every step is documented and browsable:

- **GitHub** — [github.com/RebhiIdir/DStegan](https://github.com/RebhiIdir/DStegan.git)
- **Kaggle** — [NS-DSer baseline notebook](https://www.kaggle.com/code/idirrebhi/nsdser)
- **Google Colab** — [mas-GRDH dataset generation](https://colab.research.google.com/drive/1VayTd9MSf_RxZmBAg9sTLwXmzXzBpSDL?usp=sharing)
- **Google Colab** — [CNN extension & UNet hooks](https://colab.research.google.com/drive/1r7A-xs2FrWvubkwBnHGWmOcWfun3WmaE?usp=sharing)
- **Google Colab** — [Gaussian Shading test data generation](https://colab.research.google.com/drive/1O4siaNVnEL5UEvyOH_7e1hvkTKlUGgGp?usp=sharing)
- **Datasets** — [cover and stego images (Google Drive)](https://drive.google.com/drive/folders/13-byY7SyrEgkCZvn-GYbNgRFf3-3WUAf?usp=sharing)
