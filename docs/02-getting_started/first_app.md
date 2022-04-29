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

```shell
Name of your application (required):

> hello-world

Path to your kubeconfig file (required):

> ~/.kube/config

Which github organization do you want to use? (required):

> my-org
```

Then it will start executing the setup instructions. Output looks like:

![alt](/img/docs/stack_output.png)

:::tip

If `hln up` command failed due to unexpected network problems, feel free to **rerun** it again.

:::

Congrats! You have crated your first application with `hln` successfully. All of the cloud-native infrastructure have been set up properly.
Click the Github url and dashboard links to see the effects.

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
> Note: replace APP_NAME with your previous input (e.g. 'orders')

```txt
<ingress-ip> argocd.h8r.site
<ingress-ip> hello-world-frontend.h8r.site
```

Check your **ArgoCD** dashboard at [argocd.h8r.infra](http://argocd.h8r.infra):

![alt](/img/docs/getting-started/argocd-screenshot.png)

You can also check if your repos on **Github**:

![alt](/img/docs/github-repos.png)

## Clean up

```shell
hln down
```
