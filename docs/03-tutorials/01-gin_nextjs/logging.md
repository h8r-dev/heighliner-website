---
title: Logging
sidebar_position: 6
---

:::info

Make sure you have followed [configure hosts](/docs/tutorials/gin_nextjs/create_application#configure-hosts) before continuing.

:::

You can use `hln logs [appName]` command to view the logs of your applications. It will list all business services and pods of your application. Select one interactively and the logs wiil be printed on your screen.

```shell
hln logs gin-next-app
```

And select the pod you want to view logs:

```
Select a service to get logs from

  gin-next-app-frontend
> gin-next-app-backend

Press q to quit.
Select a service to get logs from

> gin-next-app-backend-6b946f8645-8czt8

Press q to quit.

[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.
 - using env:   export GIN_MODE=release
 - using code:  gin.SetMode(gin.ReleaseMode)

[GIN-debug] GET    /metrics                  --> github.com/penglongli/gin-metrics/ginmetrics.(*Monitor).Use.func1 (4 handlers)
[GIN-debug] GET    /api/swagger/*any         --> github.com/swaggo/gin-swagger.CustomWrapHandler.func1 (5 handlers)
[GIN-debug] GET    /name                     --> gin-sample/server.(*commonServer).GetNameHandler-fm (5 handlers)
[GIN-debug] GET    /health                   --> gin-sample/server.(*commonServer).HealthHandler-fm (5 handlers)
...
```

If you need logs of your infra components, `Gin-Nextjs` stack using `Loki` and `Grafana` to store and query logs. After application has been created, you can access `Grafana` at: [grafana.h8r.site](http://grafana.h8r.site)


![alt](/img/tutorial/01-gin-next/login-grafana.png)

:::info
get Grafana credentials with `hln status [appName]` command
:::

You can get any of Kubernetes pod and containers logs at: Explore/loki section in Grafana dashboard:

![alt](/img/tutorial/01-gin-next/grafana-logs.png)
