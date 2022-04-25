---
title: Gin+Nextjs Stack
sidebar_position: 1
---

:::info

Make sure you have followed [the installation guide](/docs/getting_started/installation) before continuing.

:::

## Quickstart

Make sure your cluster has ingress controller:

```shell
kubectl wait --namespace ingress-nginx --for=condition=ready pod --selector=app.kubernetes.io/component=controller --timeout=90s
```

Prepare kubeconfig for the runner:

```shell
kubectl config view --flatten --minify | sed -e 's?server: https://127.0.0.1:[0-9]*?server: https://kubernetes.default.svc?' > ./kubeconfig
```

Clone the stacks repo:

```shell
git clone git@github.com:h8r-dev/stacks.git
cd stacks/gin-next
```

Set environment variables:

```shell
export BUILDKIT_HOST=tcp://127.0.0.1:1234
export KUBECONFIG=$PWD/kubeconfig
export APP_NAME="orders"
export GITHUB_TOKEN=[Github personal access token]
export ORGANIZATION=[organization name or github id]
export CLOUD_PROVIDER=kind
```

Create a tunnel to buildkit service:

```shell
kubectl port-forward service/buildkitd 1234:1234
```

Open another terminal, create your app:

```shell
hof mod vendor cue && \
dagger project update && \
dagger do up -p ./plans --log-format plain
```

## Verify

Get your ingress IP first:

```shell
kubectl -n ingress-nginx get svc ingress-nginx-controller -o=jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

Put the following lines into your `/etc/hosts` (replace <ingress-ip\> with above result):

```txt
<ingress-ip> argocd.h8r.infra
<ingress-ip> orders-frontend.h8r.application
<ingress-ip> orders-backend.h8r.application
<ingress-ip> grafana.h8r.infra
<ingress-ip> alert.h8r.infra
<ingress-ip> prometheus.h8r.infra
```
