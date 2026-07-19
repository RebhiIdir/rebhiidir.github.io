---
title: "Détection de stéganographie issue de modèles génératifs"
summary: "Mémoire de master : la stéganalyse peut-elle encore distinguer une image saine d'une image portant un message caché, quand ce message est intégré directement lors de la génération par diffusion ?"
status: "Mémoire de master, soutenu en 2026"
date: "2026"
featured: true
collaborators: ["Siham Larbi"]
tags:
  - Stéganalyse
  - Modèles de diffusion
  - IA générative
  - Vision par ordinateur
  - Deep Learning
image: "/images/research-pipeline.svg"
links:
  - label: "Télécharger le mémoire complet (PDF)"
    url: "/documents/memoire-rebhi-larbi-steganographie-generative.pdf"
  - label: "GitHub — DStegan"
    url: "https://github.com/RebhiIdir/DStegan.git"
  - label: "Notebook Kaggle — baseline NS-DSer"
    url: "https://www.kaggle.com/code/idirrebhi/nsdser"
---

## Résumé

"Détection de stéganographie issue de modèles génératifs : distinction entre images stéganographiées et images synthétiques" — mémoire de master (Systèmes Informatiques Intelligents, Université Mouloud Mammeri de Tizi-Ouzou), co-rédigé avec Siham Larbi, sous la direction de M. Samy Sadi et Mlle Hedir Tassadit.

Les modèles de diffusion comme Stable Diffusion permettent désormais d'intégrer un message secret directement pendant la génération de l'image, plutôt que de le cacher dans une image déjà existante. Ce mémoire pose une question simple mais difficile : les outils de stéganalyse actuels peuvent-ils encore distinguer une image générée saine d'une image portant secrètement un message — et où cette détection échoue-t-elle exactement ?

## Contexte

L'essor de l'IA générative par diffusion a rendu possible la **DM-GIS** (stéganographie générative basée sur les modèles de diffusion) : un message secret est encodé directement dans le bruit latent qui amorce le processus de génération. Il n'y a donc plus de "cover" modifiée à comparer — l'image est suspecte dès la première étape de débruitage. Ce travail se situe au croisement de la vision par ordinateur, de la stéganalyse et de l'IA générative.

## Problématique

La stéganalyse classique cherche des traces de manipulation dans le domaine spatial ou fréquentiel d'une image existante. **NS-DSer**, le stéganalyseur de référence actuel [Zhu et al., 2026], inverse plutôt la trajectoire de diffusion pour retrouver le bruit latent et teste si sa distribution statistique ressemble encore à une gaussienne. Cette approche fonctionne bien contre un embedding naïf, mais des techniques conçues spécifiquement pour préserver la distribution gaussienne du bruit — comme le watermark **Gaussian Shading** — camouflent presque parfaitement le signal caché. Le mémoire étudie jusqu'où la détection peut être poussée contre ces techniques préservant la distribution, et ce qui, éventuellement, laisse encore une trace.

## Méthodologie

1. **Reproduction de la baseline** — ré-implémentation complète de NS-DSer sur Stable Diffusion 2.1 : inversion PF-ODE avec un scheduler Heun discret, conversion v-prediction vers epsilon, et extraction d'un vecteur statistique à 10 caractéristiques (domaines spatial et DCT) à partir du bruit reconstruit.
2. **Évaluation de référence** — test de la baseline sur deux techniques d'embedding aux propriétés très différentes : **Message Concealment (MC)**, un embedding direct/naïf, et **mas-GRDH**, une technique préservant la distribution.
3. **Extension 1 — CNN** — entraînement d'un réseau convolutif directement sur les résidus de bruit latent, pour voir si des motifs spatiaux appris font mieux que des statistiques manuelles.
4. **Extension 2 — classificateurs et features alternatifs** — test de la régression logistique, XGBoost, SVM (RBF), ExtraTrees et d'un ensemble par stacking sur l'espace de features à 10 dimensions, puis enrichissement avec des descripteurs **RPCM** (corrélation de phase / dépendances spatiales inter-canaux) récupérés après le décodeur VAE.
5. **Protocole d'évaluation** — 2000 échantillons par technique (1000 covers / 1000 stegos), précision, F1-score et ROC-AUC comme métriques principales, avec un split train/test conçu soigneusement pour éviter les fuites de données.

## Résultats

| Méthode | Technique testée | Précision | Remarques |
|---|---|---|---|
| NS-DSer (baseline) | Message Concealment (MC) | **99,52 %** | AUC-ROC 1.0 — cohérent avec l'article original ; valide la ré-implémentation |
| NS-DSer (baseline) | mas-GRDH | **≈52 %** | Proche du hasard — confirme l'indétectabilité théorique de l'embedding préservant la distribution |
| CNN (Extension 1) | mas-GRDH | **≈50 %** | Les features spatiales apprises n'aident pas non plus ; le signal est noyé dans le bruit de génération |
| Régression logistique / XGBoost | mas-GRDH | **≈52,5 %** | Sur l'espace de features statistiques à 10 dimensions |
| Ensemble par stacking | mas-GRDH | **46,0 %** (AUC 0,43) | Sur-apprend le bruit, ne généralise pas |
| **Features tabulaires + RPCM** (régression logistique pénalisée) | mas-GRDH | **57,0 %** (F1 0,552, ROC-AUC 0,550) | Meilleur résultat de l'étude — un signal faible mais constant au-dessus du hasard |

Le contraste est net : l'embedding naïf (MC) est détecté presque parfaitement, tandis qu'une technique bien conçue préservant la distribution (mas-GRDH) ramène toutes les méthodes testées — y compris le deep learning — à des performances proches du hasard. La seule configuration ayant dépassé ce plafond combine statistiques tabulaires du bruit et descripteurs RPCM, suggérant que les corrélations de phase inter-canaux conservent une trace résiduelle infime du message caché, même après le décodeur VAE.

## Perspectives

- Évaluer le pipeline d'inversion sur des **photographies réelles** plutôt que sur des images uniquement synthétiques, pour séparer le bruit du capteur du bruit de génération.
- Tester la généralisation à **d'autres architectures de diffusion** (Midjourney, DALL·E 3), au-delà de Stable Diffusion.
- Passer d'un paradigme défensif de *détection* à une **sanitisation** : plutôt que de chercher à repérer le canal caché, le neutraliser préventivement — par exemple via un court cycle de diffusion/débruitage combiné à une micro-perturbation à base de quaternions (Adversarial Diffusion Sanitization, inspiré de Frants & Agaian).

## Téléchargements et reproductibilité

Le pipeline complet, les notebooks et les jeux de données générés sont publics. L'environnement n'est pas reproductible en un clic (dépendances liées au matériel), mais chaque étape est documentée et consultable :

- **GitHub** — [github.com/RebhiIdir/DStegan](https://github.com/RebhiIdir/DStegan.git)
- **Kaggle** — [notebook baseline NS-DSer](https://www.kaggle.com/code/idirrebhi/nsdser)
- **Google Colab** — [génération du dataset mas-GRDH](https://colab.research.google.com/drive/1VayTd9MSf_RxZmBAg9sTLwXmzXzBpSDL?usp=sharing)
- **Google Colab** — [extension CNN et hooks UNet](https://colab.research.google.com/drive/1r7A-xs2FrWvubkwBnHGWmOcWfun3WmaE?usp=sharing)
- **Google Colab** — [génération des données de test Gaussian Shading](https://colab.research.google.com/drive/1O4siaNVnEL5UEvyOH_7e1hvkTKlUGgGp?usp=sharing)
- **Datasets** — [images cover et stego (Google Drive)](https://drive.google.com/drive/folders/13-byY7SyrEgkCZvn-GYbNgRFf3-3WUAf?usp=sharing)

## Références

- J. Zhu, Z. Chen, J. Liu, L. Yang, Y. Zhou, W. Luo, et X. Xie, « Rethinking Security of Diffusion-based Generative Steganography », arXiv:2602.10219, février 2026.
