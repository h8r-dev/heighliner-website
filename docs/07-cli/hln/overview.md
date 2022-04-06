---
title: Overview
sidebar_position: 1
---

## What Is `hln`?

`hln` is a Command-line interface (CLI) that you can use to generate your application from a particular [stack](https://heighliner.cloud/docs/core_features/stacks/overview).

`hln` CLI has the ability of searching and downloading stacks from [stackhub](../../01-overview/arch.md#heighliner-stackhub), creating project with particular satck and executing the project you just created.

## How Does `hln` Work?

With the help of `hln` CLI, what you need to do is choose the stack you want to use and prepare some extra items such as your application name, the kubeconfig of your cluster, etc. Then you can spin up your application with a single command `hln up -i` and provide the input values interactively. Wait several minutes and everything will be done by `hln`. 

Under the hood, `hln` relies on two core concepts, [stack](https://heighliner.cloud/docs/core_features/stacks/overview) and [dagger](https://dagger.io/). Stack is the sketch of your application, which describes what does your application look like. Dagger is the executing engine of our stack. It read the stack firstly, fill your customize input values in it and generate your real application.

## Available Commands

See [Avaliable Commands](commands/hln.md)
