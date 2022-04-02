---
title: Architecture
sidebar_position: 2
---

Before effectively using Heighliner, it is necessary to understand the overall architecture.
It is also necessary to understand the components being provided to you and how to use them.
The section below provides some useful description and links to build up this understanding.

From a high-level view, Heighliner contains the following components:

## Heighliner Stack

Heighliner Stack is a collection of orchestrated plans to setup the development environment.
You can choose a specific language and framework (Go-Gin, Spring, React, etc) to build your app.
Then Heighliner Stack will orchestrate the infrastructure setup to optimize your app development experience.

A stack comes with inputs/outputs interfaces to interact with users.
For example, you can specify your own Github token, kubeconfig, cloud credentials.
After a stack is used to setup the environment, it will provide outputs like the public DNS name of your app, monitoring dashboards, login credentials, etc.

For more details and example, please refer to the [Stacks](/docs/core_features/stacks/overview) section.

## Heighliner CLI

Heighliner CLI is a command line interface that is used to build and deploy applications.

## Heighliner Service

Heighliner Service is a service that is used to build and deploy applications.

## Dagger

## Kubernetes

## Terraform
