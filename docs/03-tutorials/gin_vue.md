---
title: Gin+Vue Stack
sidebar_position: 2
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/eHcGZYJEqfk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

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

## Web

```shell
hln web
```

![alt](/img/docs/ginvue-app-web.png)

## Status

## Logs

## Metrics

## Scale

## Remote Development

## Down

## Full list of capabilities
