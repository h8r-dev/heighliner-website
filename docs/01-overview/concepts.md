---
title: Core Concepts
sidebar_position: 2
---

For users of Heighliner, there are certain concepts which are central to its design and functionality.
We will explain these core concepts in the following:

## Stack

A Stack is a collection of orchestrated plans to one-command setup the development environment.
You can choose a specific language and framework (Go-Gin, Spring, React, etc), then Heighliner Stack will orchestrate the infrastructure setup.
These are automatically optimized for your apps with cloud native best practices.

A stack comes with inputs/outputs interfaces to interact with users.
For example, you can specify your own Github token, kubeconfig, cloud credentials.
After a stack is used to setup the environment, it will provide outputs like the public DNS name of your app, monitoring dashboards, login credentials, etc.

For more details and examples, please refer to the [Stack page](/docs/core_features/stack/).

## Project

A project is a collection of development resources for an application.
It includes the Heighliner specific config, imported stacks, user inputs and secrets, and application resources.

## Application

An application is a group of services that are deployed together.
In Heighliner, users create applications via stacks and then enjoy the simplicity of cloud-native development.
