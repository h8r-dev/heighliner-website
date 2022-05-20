---
title: Create Application
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info

Make sure you have followed [the installation guide](/docs/getting_started/installation) before continuing.

:::

## (Optional) Chinese users

Chinese users may have network access problems, please run first:

```shell
export NETWORK_TYPE=china_network
```

## Step1. Create Gin+Nextjs application

Create your application interactively:

```shell
hln up gin-next-app -s gin-next -i
```
Input the values one by one according to the prompt:

```
Path to your kubeconfig file (required):

> ~/.kube/config

Which github organization do you want to use(Can be set as personal github id)? (required):

> [organization name or your github id, e.g. lyzhang1999]

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

```shell
🎉 Heighliner application gin-next-app is ready! access URL: http://gin-next-app.h8r.site

There are 2 services have been deployed:
● gin-next-app-frontend
  ● access URL: http://gin-next-app.h8r.site
  ● resource code: https://github.com/coding-org03/gin-next-app-frontend

● gin-next-app-backend
  ● access URL: http://gin-next-app.h8r.site/api
  ● resource code: https://github.com/coding-org03/gin-next-app-backend

There are 4 addons have been deployed:
● argocd
  ● access URL: http://argocd.h8r.site
  ● credential: [Username: admin Password: 22ecFIk7Qm5sciM-]

● nocalhost
  ● access URL: http://nocalhost.h8r.site
  ● credential: [Username: admin@admin.com Password: 123456]

● prometheus-stack
  ● access URL: http://grafana.h8r.site
  ● credential: [Username: admin Password: prom-operator]
  ● prometheus URL: http://prometheus.h8r.site [Username: admin Password: heighliner123!], alertManager URL: http://alert.h8r.site [Username: admin Password: heighliner123!]

● loki
```

Congrats! You have created your first application with `hln` successfully. All of the cloud-native architecture have been set up properly.
Click the GitHub url and dashboard links to see the effects.

## Step2. (Optional) Set Domain Routing

<Tabs
className="unique-tabs"
defaultValue="local"
values={[
{label: 'Kind', value: 'local'},
{label: 'Cloud', value: 'cloud'},
]}>

<TabItem value="local">

- If you are using `h8r.site`, you don't have to do anything.
- If you are using your own domain name, put the following lines into your `/etc/hosts`:

    ```txt
    127.0.0.1 gin-next-app.<your-domain>
    127.0.0.1 argocd.<your-domain>
    127.0.0.1 nocalhost.<your-domain>
    127.0.0.1 grafana.<your-domain>
    127.0.0.1 prometheus.<your-domain>
    127.0.0.1 alert.<your-domain>
    ```

</TabItem>

<TabItem value="cloud">

Get your public ingress IP:

```shell
kubectl -n ingress-nginx get svc ingress-nginx-controller -o=jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

Step2. Set domain routing:

- If you are using `h8r.site`, Put the following lines into your `/etc/hosts` (replace <ingress-ip\> with above result):

  ```txt
  <ingress-ip> gin-next-app.<your-domain>
  <ingress-ip> argocd.<your-domain>
  <ingress-ip> nocalhost.<your-domain>
  <ingress-ip> grafana.<your-domain>
  <ingress-ip> prometheus.<your-domain>
  <ingress-ip> alert.<your-domain>
  ```

- If you are using your own domain name, set your domain DNS record to the above ingress IP.

</TabItem>
</Tabs>

## Step3. Access application

### Nextjs app

View you nextjs app at [gin-next-app.h8r.site](http://gin-next-app.h8r.site):

![alt](/img/tutorial/01-gin-next/sample-application.png)

### Gin app

View you Gin app at [gin-next-app.h8r.site/api](http://gin-next-app.h8r.site/api):

![alt](/img/tutorial/01-gin-next/gin-application.png)



