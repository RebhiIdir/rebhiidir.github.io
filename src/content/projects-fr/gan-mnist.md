---
title: "Génération de chiffres manuscrits avec un GAN"
summary: "Un réseau antagoniste génératif entraîné pour produire des chiffres manuscrits à partir du dataset MNIST."
date: "2025"
featured: true
collaborators: ["Siham Larbi"]
technologies:
  - Python
  - TensorFlow
  - GAN
  - IA générative
links:
  - label: "Rapport (PDF)"
    url: "/documents/rapport-gan-mnist.pdf"
  - label: "Colab"
    url: "https://colab.research.google.com/drive/1hyJz0T_4PCdgl1j8UsC1HEyioZEvrNfo?usp=sharing"
---

## Objectif

Implémenter un réseau antagoniste génératif capable de produire des chiffres manuscrits convaincants, entraîné sur le dataset MNIST.

## Périmètre technique

- Réseaux générateur et discriminateur construits avec TensorFlow.
- Boucle d'entraînement adversarial avec mises à jour alternées générateur/discriminateur.
- Évaluation qualitative des échantillons générés au fil de l'entraînement.

## Résultats

Le générateur entraîné produit des chiffres manuscrits reconnaissables à partir de bruit aléatoire — une première approche concrète de la modélisation générative, avant le travail de mémoire sur les modèles de diffusion.

## Lien avec la recherche

Une première étape vers le mémoire : ce projet a été le premier contact concret avec les modèles génératifs, prolongé ensuite vers la génération par diffusion et sa détection.
