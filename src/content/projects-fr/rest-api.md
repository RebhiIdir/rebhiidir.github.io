---
title: "API REST — Gestion d'un cabinet médical"
summary: "Une API REST en Java/Spring pour gérer patients, rendez-vous et dossiers médicaux, avec authentification JWT et intégration serveur complète."
date: "2025"
featured: true
collaborators: ["Siham Larbi"]
technologies:
  - Java
  - Spring
  - JAX-RS
  - MySQL
  - JWT
  - REST
links:
  - label: "GitHub"
    url: "https://github.com/RebhiIdir/ProjetWebServiceREST.git"
---

## Objectif

Développer un service web RESTful complet pour la gestion d'un cabinet médical : patients, rendez-vous et dossiers médicaux, avec accès authentifié et une séparation claire des responsabilités.

## Périmètre technique

- Backend Java avec une couche API RESTful (JAX-RS/Spring).
- Endpoints pour les dossiers patients, la prise de rendez-vous et la gestion des fichiers médicaux.
- Intégration MySQL pour la persistance.
- Authentification par JWT pour sécuriser les endpoints.
- Intégration côté serveur et tests des endpoints via Postman.

## Résultats

L'API expose un ensemble fonctionnel d'endpoints couvrant tout le cycle de vie patient/rendez-vous/dossier, testé de bout en bout avec Postman, avec authentification appliquée sur les routes protégées.

## Améliorations possibles

Couverture de tests automatisés, documentation OpenAPI, permissions par rôle (médecin/secrétaire/admin), et une instance publique déployée.
