---
title: Core Concepts
sidebar_position: 2
---

For users of Heighliner, there are certain concepts which are central to its design and functionality.
Below is a list of the core concepts and their definitions.

## Stack

A Stack is a collection of orchestrated plans to one-click setup the development environment.
You can choose a specific language and framework (Go-Gin, Spring, React, etc) to write your app code.
Then Heighliner Stack do the rest -- it will orchestrate the infrastructure setup which optimize for your apps with cloud native best practices.

A stack comes with inputs/outputs interfaces to interact with users.
For example, you can specify your own Github token, kubeconfig, cloud credentials.
After a stack is used to setup the environment, it will provide outputs like the public DNS name of your app, monitoring dashboards, login credentials, etc.

For more details and examples, please refer to the [Stacks](/docs/core_features/stacks/overview) page.

## Project

A project is a collection of development resources for an application.
It includes the Heighliner specific config, imported stacks, user inputs and secrets, and application resources.

## Application

An application is a group of services that are deployed together.
In Heighliner, users create applications via stacks and then enjoy the simplicity of cloud-native development.
