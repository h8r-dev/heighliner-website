---
title: Gin+Nextjs Stack
sidebar_position: 1
---

:::info

Make sure you have followed [the installation guide](/docs/getting_started/installation) before continuing.

:::

## Quickstart

Prepare kubeconfig for the runner:

```shell
kubectl config view --flatten --minify | sed -e 's?server: https://127.0.0.1:[0-9]*?server: https://kubernetes.default.svc?' > ~/.kube/kind
```

Clone the stacks repo:

```shell
git clone git@github.com:h8r-dev/stacks.git
cd stacks/gin-next
```

Set environment variables:

```shell
export BUILDKIT_HOST=tcp://127.0.0.1:1234
export KUBECONFIG=$HOME/.kube/kind
export APP_NAME="orders"
export GITHUB_TOKEN=[Github personal access token]
export ORGANIZATION=[organization name or github id]
export CLOUD_PROVIDER=kind
```

Create your app:

```shell
hof mod vendor cue && \
dagger project update && \
dagger do up -p ./plans --log-format plain
```

## Verify

Put the following lines into your `/etc/hosts`:

```txt
127.0.0.1 argocd.h8r.infra
127.0.0.1 orders-frontend.h8r.application
127.0.0.1 orders-backend.h8r.application
127.0.0.1 grafana.h8r.infra
127.0.0.1 alert.h8r.infra
127.0.0.1 prometheus.h8r.infra
```
