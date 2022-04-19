---
title: Comparison
sidebar_position: 4
---

Across all app development platforms, Heighliner has a unique focus on cloud-native developer-experience and has many out-of-the-box features.

We've also studied other app development platforms and would like to share our insights on the comparison, hopefully helping you navigate through the prismatic choices out there.

## Helm

Helm is a CLI tool to manage Kubernetes resources and provides Golang-based templating.

Compared to Helm, Heighliner has a more robust templating engine and a more robust CLI:

- Heighliner uses CUE for templating which can provide typed schema that Golang template can not.
- Heighliner manages more than Kubernetes resources, e.g. CI/CD pipelines, secrets, etc.

Besides, Heighliner has best practices built-in to bootstrap app development which Helm doesn't have.

## Infrastructure as Code Tools (Terraform, Pulumi, CDK)

IaC tools focus on generality and flexiblity. It tries to adapt to all cloud providers and all tooling.

Compared to IaC tools, Heighliner focuses on cloud-native developer experience and has many out-of-the-box features.
You can use Heighliner to bootstrap app development. Heighliner will select the infra tools and services based on best practices.
Under the hood, Heighliner uses Terraform to provision infrastructure resources.

## Heroku

Heroku is a cloud-based platform for deploying and managing applications.
It also has built-in support for languages like Node.js, Ruby, Python, Go, Java, etc.

Compared to Heroku, Heighliner is more customizable and open:

- You can easily extend Heighliner platform features using Dagger and Terraform.
- Heighliner focus on using open-source, cloud-native projects. Heroku is a closed-source platform.

## Nocalhost

Nocalhost is a cloud-native development tool based on IDE (VSCode, Intellij).
It creates a tunnel between local IDE and Kubernetes so that developers can build, test, and debug applications inside Kubernetes.

Heighliner covers the full lifecycle of app development, including boostraping, setting up CI/CD pipeline, deployment strategies (canary, blue/green), etc.
Nocalhost is part of Heighliner platform to provide remote development features.

## In-house Dev Platforms

Most organizations start by building in-house development platforms on Kubernetes through custom scripts and tools.
This is simple and effective, but it is not scalable and flexible.
As the number of application and infrastructure stack increases, the cost of maintaining these platforms becomes expensive, error-prone, and unmanageable.

Heighliner can replace in-house development platforms with many benefits: more features, more reliable, more flexible, and easier to maintain.
Heighliner has built-in support for poular languages and frameworks.
You can also extend your languages or infra stacks with Heighliner.
It's an open source and community driven project that can be used by any organization.
