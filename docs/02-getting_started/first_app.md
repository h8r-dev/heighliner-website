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

Ever want to have a Vercel-style experience when creating your nextjs app?
But without the limitation to a specific vendor?
In this doc, we will show you how to create a nextjs app in Vercel style with an open source, cloud native stack.

## List all stacks

List all default stacks:

```shell
hln list stacks
```

Output:

```shell
NAME      VERSION  DESCRIPTION
sample    0.0.1
gin-next  0.0.1
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

> organization name or github id
```

Then it will start executing the setup instructions. Output looks like:

![alt](/img/docs/stack_output.png)

:::tip

If `hln up` command failed due to unexpected network problems, feel free to **rerun** it again.

:::

Get application status:

```shell
hln status
```

Output looks like:

![alt](/img/docs/hln_status_output.png)

Congrats! You have created your first application with `hln` successfully. All of the cloud-native architecture have been set up properly.
Click the GitHub url and dashboard links to see the effects.

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

Check your **ArgoCD** dashboard at [argocd.h8r.site](http://argocd.h8r.site), Get argocd credentials with `hln status` command:

![alt](/img/docs/getting-started/argocd-screenshot.png)

View you frontend application at [hello-world-frontend.h8r.site](http://hello-world-frontend.h8r.site):

![alt](/img/docs/getting-started/sample-application.png)

You can also check your repos on **Github**:

![alt](/img/docs/github-repos.png)

## Clean up

```shell
hln down
```
