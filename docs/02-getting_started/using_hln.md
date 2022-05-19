---
title: Using hln
sidebar_position: 5
---

## What is hln?

_hln_ is a command-line interface (CLI) that you can use to create your application from a particular [stack](/docs/core_features/stack/).

_hln_ CLI has the ability of searching and downloading stacks from [stackhub](/docs/overview/arch#heighliner-stackhub), creating application from a particular stack, and managing lifecycle of an application.

## How does hln work?

With the help of _hln_ CLI, all you need to do is to choose a stack and specify inputs such as your application name, the kubeconfig of your cluster, etc. Then you can spin up your application with a single command `hln up -i`.

Under the hood, _hln_ relies on two core concepts, [stack](/docs/core_features/stack/) and [dagger](https://dagger.io/). Stack is the sketch of your application architecture. Dagger is the execution engine of our stack.

## Stack input from hln

### 1. Input from Env

Inputs can be directly set via environment variables.
hln will pass the inputs to the stack execution.

hln will set two env by default:

- KUBECONFIG:
    If this env is not set, it will set to `~/.kube/config` by default.
- APP_NAME:
    This is automaticaly set to the `<app>` from the arguments. For example, `hln up my-app`, `APP_NAME=my-app`.

### 2. Interactive input

`hln up -i` will parse stack input schema and prompt for interactive input.
The inputs will be set as env to pass to the stack execution.

If a input is set from the env, then `hln up -i` won't prompt this field for interative input.
