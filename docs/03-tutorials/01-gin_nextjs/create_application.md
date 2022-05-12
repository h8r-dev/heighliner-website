---
title: Create Application
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info

Make sure you have followed [the installation guide](/docs/getting_started/installation) before continuing.

:::

## Create your application

Create your application interactively:

```shell
hln up gin-next-app -s gin-next -i
```

> Note: gin-next-app is what we call application name.It should obey the rules in [DNS1123](https://datatracker.ietf.org/doc/html/rfc1123)

Input the values one by one according to the promt:

```
Path to your kubeconfig file (required):

> ~/.kube/config

Which github organization do you want to use(Can be set as personal github id)? (required):

> [organization name or github id, e.g. lyzhang1999]

Which domain do you want to use?:

> [default: h8r.site]

```

Then it will start executing the setup instructions. Output looks like:

![alt](/img/docs/getting-started/stack_output.png)

:::tip

If `hln up` command failed due to unexpected network problems, feel free to **rerun** it again.

:::

Get application status:

```shell
hln status gin-next-app
```

Output looks like:

```
Heighliner application gin-next-app is ready!
You can access argocd on argocd.h8r.site [Username: admin Password: MWE2mQdeGVJq8XMC]

There are 5 applications deployed by argocd:
1: gin-next-app-backend
   gin-next-app-backend has been deployed to k8s cluster, you can access it by k8s Service url: gin-next-app-backend.h8r.site
   gin-next-app-backend's source code resides on github repository: https://github.com/lyzhang1999/gin-next-app-backend

2: gin-next-app-frontend
   gin-next-app-frontend has been deployed to k8s cluster, you can access it by k8s Service url: gin-next-app-frontend.h8r.site
   gin-next-app-frontend's source code resides on github repository: https://github.com/lyzhang1999/gin-next-app-frontend

3: loki

4: nocalhost
   credential: [Username: admin Password: 123456]

5: prometheus
   credential: [Username: admin Password: prom-operator]
```

Congrats! You have created your first application with `hln` successfully. All of the cloud-native architecture have been set up properly.
Click the GitHub url and dashboard links to see the effects.

## Configure hosts

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
<ingress-ip> gin-next-app-frontend.h8r.site
<ingress-ip> gin-next-app-backend.h8r.site
<ingress-ip> nocalhost.h8r.site
<ingress-ip> grafana.h8r.site
<ingress-ip> alert.h8r.site
<ingress-ip> prometheus.h8r.site
```

> If you are using custom domain, please add the above domain name to the DNS

## Access application

### Nextjs app

View you nextjs app at [gin-next-app-frontend.h8r.site](http://gin-next-app-frontend.h8r.site):

![alt](/img/docs/getting-started/sample-application.png)

### Gin app

View you Gin app at [gin-next-app-backend.h8r.site](http://gin-next-app-backend.h8r.site):

![alt](/img/tutorial/01-gin-next/gin-application.png)



