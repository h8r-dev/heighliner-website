---
title: CD
sidebar_position: 5
---

:::info

Make sure you have followed [configure hosts](/docs/tutorials/gin-next/create_application#configure-hosts) before continuing.

:::

`Gin-Nextjs` stack using `Argo CD` for `Continuous Delivery`, After application has been created, you can access `Argo CD` at: [argocd.h8r.site](http://argocd.h8r.site)

![alt](/img/tutorial/01-gin-next/login-argocd.png)

:::info
get Argo CD credentials with `hln status` command
:::

Any changes with helm chart repository will be applied by `GitOps` way.