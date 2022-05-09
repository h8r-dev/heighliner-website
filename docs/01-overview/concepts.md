---
title: Core Concepts
sidebar_position: 2
---

For users of Heighliner, there are certain concepts which are central to its design and functionality.
We will explain these core concepts in the following.

## Stack

A stack is a collection of execution plans to one-command setup the development environment.
The plan is written as a [CUE](https://cuelang.org/) program.
The benefits of CUE is that it is a declarative language and expose high level APIs to abstract away the underlying implementation.

A stack comes with inputs/outputs interfaces to interact with.
For example, you can specify your own GitHub token, kubeconfig, etc.
After you specify the input and execute the plan, it will produce outputs like the public DNS name of your app.

For users, you can choose a specific stack (e.g. Go-Gin, Spring, Remix), and Heighliner will orchestrate the environment setup.
It will automatically optimize for your apps with cloud native best practice.

For more details and examples, please refer to the [Stack page](/docs/core_features/stack/).

## Project

A project is a collection of development resources for an application.
It includes the Heighliner specific config, imported stacks, user inputs and secrets, application resources.

## Application

An application is a group of services that are deployed together.
User creates an application from stacks using Heighliner CLI/UI.
