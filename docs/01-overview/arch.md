---
title: Architecture
sidebar_position: 3
---

Before effectively using Heighliner, it is necessary to understand the overall architecture.
It is also necessary to understand the components being provided to you and how to use them.
The section below provides some useful description and links to build up this understanding.

From a high-level view, Heighliner contains the following components:

## Heighliner CLI

Heighliner CLI provides the best local experience to work with Heighliner [stacks]((/docs/overview/concepts#stack)).
It walks users through the process of using Heighliner Stacks to setup environments for their apps.
It can be used to search and download stacks, manages secrets, provide interactive input based on stack schema.

With Heighliner CI, you can also do IaC style GitOps workflow.

For more details and examples, please refer to the [hln CLI](/docs/cli/hln/overview) page.

## Heighliner Server

Heighliner Server provides services to streamline development workflow.
There are necessary services that cannot be achieved at the client side.
For example, you will need a service to allocate sub-domains for your apps, distribute TLS certs, etc.
In order to achieve this, Heighliner Server supports such features to simplify the development process.

## Heighliner StackHub

StackHub stores Heighliner [stacks](/docs/overview/concepts#stack) and provides a searchable interface to find the right stack for your app.
We provide a default StackHub hosted on the cloud to store the default stacks.
When you use the CLI/UI to use the default stacks, they are availabe to you.

For more info, please refer to the [StackHub](/docs/core_features/stacks/stackhub) page.

## Kubernetes

[Kubernetes](https://kubernetes.io/docs/home/) is an open source container orchestration engine for automating deployment, scaling, and management of containerized applications.
We use it to orchestrate service deployments.
This is our platform base where we deploy services and integrate with other cloud services.

## Dagger

[Dagger](https://docs.dagger.io/) is a portable devkit for CICD.
We use it as the execution engine for stack orchestration.
While having contributed some of the libraries to Dagger upstream, We have extend it with our own CUE modules to compose cloud-native tooling and infrastructure.

## Terraform

[Terraform](https://www.terraform.io/intro) is an infrastructure as code tool that lets you define both cloud and on-prem resources.
We use it to provision and manage the infrastructure resources.
In our use case, Terraform is one layer down from Dagger: After Terraform provisions a resource, Dagger will execute the CUE modules to interact with it, e.g. deploy a service, setup configuration, etc.
