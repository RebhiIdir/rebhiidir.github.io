---
title: "Smart Lighting IoT System"
summary: "A connected-object network that automates lighting based on environmental conditions, with real-time monitoring in Grafana."
date: "2025"
featured: true
technologies:
  - IoT
  - ESP32
  - Raspberry Pi
  - Grafana
  - Sensors
links:
  - label: "GitHub"
    url: "https://github.com/RebhiIdir/Projet-IoT.git"
  - label: "Slides"
    url: "https://docs.google.com/presentation/d/1W_NDFf9VynZPt3ZIlj9AXkWTM9l_bB_JQX5AR2c8Ps0/edit?usp=sharing"
---

## Objective

Design a network of connected devices that automatically manages lighting according to environmental conditions, with real-time supervision of the captured data.

## Technical scope

- Sensor nodes built on ESP32 microcontrollers.
- A Raspberry Pi acting as the local hub/gateway.
- Real-time data capture and transmission from devices to the monitoring stack.
- Dashboarding and analysis of environmental and lighting data in Grafana.

## Results

The system automates lighting decisions from live environmental readings and exposes the captured data through real-time Grafana dashboards for monitoring.

## Improvements

Possible next steps: alerting on abnormal readings, improved communication reliability, historical trend charts, and a publicly deployed dashboard.
