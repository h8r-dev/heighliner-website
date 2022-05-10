---
title: Stack
---

## What is Stack?

A stack is a collection of execution plans to one-command setup the development environment.
The plan is written as a [CUE](https://cuelang.org/) program.
The benefits of CUE is that it is a declarative language and expose high level APIs to abstract away the underlying implementation.

## How Does Stack Work?

Under the hood, Heighliner Stack uses [Dagger](https://docs.dagger.io/) to orchestrate and execute underlying plans.
Dagger is a distributed build system that can run concurrent, cache-efficient DAG workflow.

A stack comes with inputs/outputs interfaces to interact with.
For example, you can specify your own GitHub token, kubeconfig, etc.
After you specify the input and execute the plan, it will produce outputs like the public DNS name of your app.

For users, you can choose a specific stack (e.g. Go-Gin, Spring, Remix), and Heighliner will orchestrate the environment setup.
It will automatically optimize for your apps with cloud native best practice.
