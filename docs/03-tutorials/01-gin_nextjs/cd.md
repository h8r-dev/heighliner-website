---
title: CD
sidebar_position: 5
---

:::info

Make sure you have followed [configure hosts](/docs/tutorials/gin_nextjs/create_application#configure-hosts) before continuing.

:::

`Gin-Nextjs` stack using `Argo CD` for `Continuous Delivery`, which takes a `GitOps` way. This means any changes of helm chart repository will be applied by Argo CD automatically. After application has been created, you can access `Argo CD` dashboard at: [argocd.h8r.site](http://argocd.h8r.site)

:::info
get Argo CD credentials with `hln status [appName]` command
:::


![alt](/img/tutorial/01-gin-next/login-argocd.png)

