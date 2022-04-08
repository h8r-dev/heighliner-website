---
title: Comparison
sidebar_position: 4
---

Across all app development platforms, Heighliner has a unique focus on cloud-native developer-experience and has many out-of-the-box features.

We've also studied other app development platforms and would like to share our insights on the comparison, hopefully helping you navigate through the prismatic choices out there.

## Helm

Helm is a CLI tool to manage Kubernetes resources and provides Golang-based templating.

Compared to Helm, Heighliner has a more robust templating engine and a more robust CLI:

- Heighliner uses CUE to manage templating which providers schema that Golang template cannot.
- Heighliner manages more than Kubernetes resources, e.g. CI/CD pipelines, secrets, etc.

Besides, Heighliner has best practices built-in to bootstrap app development, which is not available in Helm.

## Heroku

Heroku is a cloud-based platform for deploying and managing applications.
It also has built-in support for languages like Node.js, Ruby, Python, Go, Java, etc.

Compared to Heroku, Heighliner is more customizable and open:

- You can easily extend Heighliner platform features using Dagger and Terraform.
- Heighliner focus on using open-source, cloud-native projects. Heroku is a closed-source platform.

## Ansible Playbook

