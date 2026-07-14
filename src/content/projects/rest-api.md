---
title: "Medical Office REST API"
summary: "A Java/Spring REST API for managing patients, appointments, and medical records, with JWT authentication and full server-side integration."
date: "2025"
featured: true
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

## Objective

Build a complete RESTful web service for managing a medical office: patients, appointments, and medical records, with authenticated access and a clean separation of concerns.

## Technical scope

- Java backend with a RESTful API layer (JAX-RS/Spring).
- Endpoints for patient records, appointment scheduling, and medical file management.
- MySQL database integration for persistence.
- JWT-based authentication for secured endpoints.
- Server-side integration and endpoint testing via Postman.

## Results

The API exposes a working set of endpoints for the full patient/appointment/record lifecycle, tested end to end with Postman, with authentication enforced on protected routes.

## Improvements

Possible next steps: automated test coverage, OpenAPI documentation, role-based permissions (doctor/receptionist/admin), and a deployed public instance.
