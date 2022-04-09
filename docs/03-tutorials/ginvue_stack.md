---
title: Gin+VUE Stack
sidebar_position: 1
---

## Prerequisites

- A k8s cluster with public accessible endpoint, version 1.21+, capable to provision `LoadBalancer` type services.

## Quickstart

Clone the stacks repo:

```shell
git clone git@github.com:h8r-dev/stacks.git
cd stacks
git submodule init && git submodule update
```

Set environment variables:

```shell
export KUBECONFIG="~/.kube/config"
export APP_NAME="orders"
export GITHUB_TOKEN=[Github personal access token]
export ORGANIZATION=[organization name or github id]
```

Create the Gin+VUE app:

```shell
dagger project init
dagger project update
dagger do up -p ./plans
```
