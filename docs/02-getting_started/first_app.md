---
title: Your First App
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

:::info

Make sure you have followed [the installation guide](/docs/getting_started/installation) before continuing.

:::

<iframe width="560" height="315" src="https://www.youtube.com/embed/eHcGZYJEqfk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## List all stacks

List all Heighliner stacks:

```shell
hln list stacks
```

Output:

```shell
NAME      VERSION  DESCRIPTION
gin-next  0.0.1
sample    0.0.1
gin-vue   0.0.1
```

## Create your application

Create your application interactively:

```shell
hln up -s sample -i
```

Input the values one by one according to the promt:

> Note: APP_NAME should obey the rules in [DNS1123](https://datatracker.ietf.org/doc/html/rfc1123)

![alt](/img/docs/interactive-prompt.png)

:::tip

If `hln up` command failed due to unexpected network problems, feel free to **rerun** it again.

:::

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
> Note: replace APP_NAME with your previous input

```txt
<ingress-ip> argocd.h8r.infra
<ingress-ip> ${APP_NAME}-frontend.h8r.application
<ingress-ip> grafana.h8r.infra
<ingress-ip> alert.h8r.infra
<ingress-ip> prometheus.h8r.infra
```

Check the status of your application:

```shell
hln status
```

Output:

![alt](/img/docs/todo.jpg)

Congrats! You have crated your first application with `hln` successfully. All of the cloud-native infrastructure have been set up properly. Click the Github url and dashboard links to see the effects.

**Github** repos:

![alt](/img/docs/github-repos.png)

Check your **ArgoCD** dashboard at [argocd.h8r.infra](http://argocd.h8r.infra):

![alt](/img/docs/getting-started/argocd.png)

## Clean up

```shell
hln down
```
