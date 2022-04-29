---
title: Gin+Nextjs App
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info

Make sure you have followed [the installation guide](/docs/getting_started/installation) before continuing.

:::

## Quickstart

Set environment variables:

```shell
export APP_NAME="orders"
export GITHUB_TOKEN=[Github personal access token]
export ORGANIZATION=[organization name or github id]
```

Create your app using gin-next stack:

```shell
hln up -s=gin-next
```

Output:
TODO

Once it is done, you can check the status of your application:

```shell
hln status
```

Output:
TODO

## See the Results

Get your ingress IP:

<Tabs
className="unique-tabs"
defaultValue="cloud"
values={[
{label: 'Cloud', value: 'cloud'},
{label: 'Kind/Minikube', value: 'local'},
]}>

<TabItem value="local">

```shell
127.0.0.1
```

</TabItem>

<TabItem value="cloud">

```shell
kubectl -n ingress-nginx get svc ingress-nginx-controller -o=jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

</TabItem>

</Tabs>

Put the following lines into your `/etc/hosts` (replace <ingress-ip\> with above result):

```txt
<ingress-ip> argocd.h8r.infra
<ingress-ip> orders-frontend.h8r.application
<ingress-ip> orders-backend.h8r.application
<ingress-ip> grafana.h8r.infra
<ingress-ip> alert.h8r.infra
<ingress-ip> prometheus.h8r.infra
```

Check your ArgoCD dashboard at [argocd.h8r.infra](http://argocd.h8r.infra):
TODO
