---
title: Gin+Vue Stack
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

- 检查前置条件
- 自动创建 Github 仓库和初始化 Helm Chart：包含 go-gin 框架的后端仓库，vue.js 的前端仓库以及 Helm 仓库
- 部署应用，支持 Ingress 访问(h8r.app)
- 创建并配置 Infra 层应用，包括 Nocalhost、Loki、Prometheus、Grafana、Alertmanager，支持 Ingress 访问(h8r.io)
- 使用 Github Organization 创建 Nocalhost 用户，初始化应用、集群、开发空间
- Nocalhost 一键开发和调试
