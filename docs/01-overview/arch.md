---
title: Architecture
sidebar_position: 2
---

Before effectively using Heighliner, it is necessary to understand the overall architecture.
It is also necessary to understand the components being provided to you and how to use them.
The section below provides some useful description and links to build up this understanding.

From a high-level view, Heighliner contains the following components:

## Heighliner Stack

Heighliner Stack is a collection of orchestrated plans to one-click setup the development environment.
You can choose a specific language and framework (Go-Gin, Spring, React, etc) to write your app code.
Then Heighliner Stack do the rest -- it will orchestrate the infrastructure setup which optimize for your apps with cloud native best practices.

A stack comes with inputs/outputs interfaces to interact with users.
For example, you can specify your own Github token, kubeconfig, cloud credentials.
After a stack is used to setup the environment, it will provide outputs like the public DNS name of your app, monitoring dashboards, login credentials, etc.

For more details and examples, please refer to the [Stacks](/docs/core_features/stacks/overview) page.

## Heighliner StackHub

StackHub stores the Heighliner Stacks and provides a searchable interface to find the right stack for your app.
We provide a default StackHub hosted on the cloud to store the default stacks.
When you use the CLI/UI to use the default stacks, they are availabe to you.

For more info, please refer to the [StackHub](/docs/core_features/stacks/stackhub) page.

## Heighliner CLI

Heighliner CLI provides the best local experience to work with stacks.
It walks users through the process of using Heighliner Stacks to setup environments for their apps.
It can be used to search and download stacks, manages secrets, provide interactive input based on stack schema.

With Heighliner CI, you can also do IaC style GitOps workflow.

For more details and examples, please refer to the [hln CLI](/docs/cli/hln/overview) page.

## Heighliner Server

Heighliner Server provides services to streamline development workflow.
There are necessary services that cannot be achieved at the client side.
For example, you will need a service to allocate sub-domains for your apps, distribute TLS certs, etc.
In order to achieve this, Heighliner Server supports such features to simplify the development process.

## Kubernetes

Kubernetes is the service infrastructure platform to orchestrate service deployments.

## Dagger

Dagger is the execution engine for infra stack orchestration.

## Terraform

Terraform is the infrastructure provisiniong and managing infra resources.
