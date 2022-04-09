---
title: Gin+VUE Stack
sidebar_position: 1
---

## Setup

Clone the stacks repo:

```shell
git clone git@github.com:h8r-dev/stacks.git
cd stacks
git submodule init && git submodule update
```

Set environment variables:

```shell
export KUBECONFIG="$HOME/.kube/config"
export APP_NAME="orders"
export GITHUB_TOKEN=[Github personal access token]
export ORGANIZATION=[organization name or github id]
```

Create the Gin+VUE app:

```shell
cd gin-vue
hof mod vendor cue
dagger project init
dagger project update
```

## Up

```shell
dagger do up --log-format plain -p ./plans
```

## Test

## Status

## Logs

## Metrics

## Scale

## Remote Development

## Down

```shell
dagger do down --log-format plain -p ./plans
```
