---
title: hln CLI
sidebar_position: 1
---

## What is hln?

_hln_ is a command-line interface (CLI) that you can use to create your application from a particular [stack](/docs/core_features/stack/).

_hln_ CLI has the ability of searching and downloading stacks from [stackhub](docs/overview/arch#heighliner-stackhub), creating application from a particular stack, and managing lifecycle of an application.

## How does hln work?

With the help of _hln_ CLI, all you need to do is to choose a stack and specify inputs such as your application name, the kubeconfig of your cluster, etc. Then you can spin up your application with a single command `hln up -i`.

Under the hood, _hln_ relies on two core concepts, [stack](/docs/core_features/stack/) and [dagger](https://dagger.io/). Stack is the sketch of your application architecture. Dagger is the execution engine of our stack.
