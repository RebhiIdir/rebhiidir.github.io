---
title: "Système IoT d'éclairage intelligent"
summary: "Un réseau d'objets connectés automatisant l'éclairage selon les conditions environnementales, avec supervision en temps réel via Grafana."
date: "2025"
featured: true
collaborators: ["Siham Larbi"]
technologies:
  - IoT
  - ESP32
  - Raspberry Pi
  - Grafana
  - Capteurs
links:
  - label: "GitHub"
    url: "https://github.com/RebhiIdir/Projet-IoT.git"
  - label: "Slides"
    url: "https://docs.google.com/presentation/d/1W_NDFf9VynZPt3ZIlj9AXkWTM9l_bB_JQX5AR2c8Ps0/edit?usp=sharing"
---

## Objectif

Concevoir un réseau d'objets connectés gérant automatiquement l'éclairage selon les conditions environnementales, avec supervision en temps réel des données capturées.

## Périmètre technique

- Nœuds capteurs construits sur microcontrôleurs ESP32.
- Un Raspberry Pi faisant office de hub/passerelle local.
- Capture et transmission des données en temps réel des dispositifs vers la stack de supervision.
- Tableaux de bord et analyse des données environnementales et d'éclairage dans Grafana.

## Résultats

Le système automatise les décisions d'éclairage à partir des relevés environnementaux en direct et expose les données capturées via des tableaux de bord Grafana en temps réel.

## Améliorations possibles

Alertes sur relevés anormaux, fiabilité de communication améliorée, graphiques de tendances historiques, et un tableau de bord déployé publiquement.
