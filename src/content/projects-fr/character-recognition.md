---
title: "Reconnaissance de caractères — KNN vs. CNN"
summary: "Une étude comparative entre K plus proches voisins et un réseau de neurones convolutif pour la reconnaissance de caractères manuscrits."
date: "2025"
featured: false
collaborators: ["Siham Larbi"]
technologies:
  - Python
  - KNN
  - CNN
  - Machine Learning
links:
  - label: "Rapport (PDF)"
    url: "/documents/rapport-character-recognition.pdf"
  - label: "Colab — KNN"
    url: "https://colab.research.google.com/drive/1cBHU_dhdKLigD5qXURLS0nL-VRUej9R4?usp=sharing"
  - label: "Colab — CNN"
    url: "https://colab.research.google.com/drive/1fLe75D3sn-UEmDuK7Ws-w-VQCAevm9NR?usp=sharing"
---

## Objectif

Comparer une approche classique de machine learning (K plus proches voisins) à une approche de deep learning (CNN) sur une même tâche de reconnaissance de caractères, pour construire une intuition sur la pertinence de chaque paradigme selon le coût.

## Périmètre technique

- Classificateur KNN avec métrique de distance et taille de voisinage ajustées.
- Réseau convolutif entraîné sur le même jeu de données de caractères.
- Comparaison directe de la précision et analyse des erreurs entre les deux approches.

## Résultats

La comparaison complète, avec les chiffres de précision et les cas d'erreur pour les deux modèles, est disponible dans le rapport et les notebooks liés.
