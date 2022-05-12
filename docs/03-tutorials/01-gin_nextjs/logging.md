---
title: Logging
sidebar_position: 6
---

:::info

Make sure you have followed [configure hosts](/docs/tutorials/gin_nextjs/create_application#configure-hosts) before continuing.

:::

`Gin-Nextjs` stack using `Loki` and `Grafana` for store and query logs, After application has been created, you can access `Grafana` at: [grafana.h8r.site](http://grafana.h8r.site)


![alt](/img/tutorial/01-gin-next/login-grafana.png)

:::info
get Grafana credentials with `hln status` command
:::

You can get any of Kubernetes pod and containers logs at: Explore/loki section in Grafana dashboard:

![alt](/img/tutorial/01-gin-next/grafana-logs.png)