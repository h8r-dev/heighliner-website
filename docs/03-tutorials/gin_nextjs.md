---
title: Gin+Nextjs App
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info

Make sure you have followed [the installation guide](/docs/getting_started/installation) before continuing.

:::

## Setup

Set environment variables:

```shell
export APP_NAME="orders"
export GITHUB_TOKEN=[GitHub personal access token]
export ORGANIZATION=[organization name or github id]
```

## Create your application

Create your app using gin-next stack:

```shell
hln up -s=gin-next
```

Output:
![alt](/img/docs/tutorial/gin_next/stack_output.png)

Once it is done, you can check the status of your application:

```shell
hln status
```

Output:

```shell
Application:
  Name: orders

CD:
  URL: argocd.h8r.site
  Credential:
    Username: xxxxx
    Password: xxxxx

Repositories:
  Name: orders-backend
  URL: https://github.com/hongchao-org/orders-backend

  Name: orders-deploy
  URL: https://github.com/hongchao-org/orders-deploy

  Name: orders-frontend
  URL: https://github.com/hongchao-org/orders-frontend

ArgoApps:
  Name: orders-backend
  Name: orders-frontend
  Name: loki
  Name: nocalhost
  Credential:
    Username: xxxxx
    Password: xxxxx
  Name: prometheus
  Credential:
    Username: xxxxx
    Password: xxxxx
```

## See the effects

Get your ingress IP:

<Tabs
className="unique-tabs"
defaultValue="local"
values={[
{label: 'Kind/Minikube', value: 'local'},
{label: 'Cloud', value: 'cloud'},
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
<ingress-ip> argocd.h8r.site
<ingress-ip> hello-world-frontend.h8r.site
```

Check your repos on **GitHub**. It would look like:

![alt](/img/docs/tutorial/gin_next/github_repo.png)