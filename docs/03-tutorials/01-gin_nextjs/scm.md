---
title: SCM
sidebar_position: 2
---

`Gin-Nextjs` stack will create three GitHub private repositories under GitHub organizations or users:
1. Gin framework repository
1. Nextjs framework repository
1. Helm chart repository

Gin framework and Nextjs framework repository is business code, helm chart repository is use for deploy application and infra components such as Prometheus, Nocalhost, Loki, Grafana.

### Gin framework repository

Gin framework repository layout looks like: 

![alt](/img/tutorial/01-gin-next/gin-layout.png)

### Nextjs framework repository

Nextjs framework repository layout is look like: 

![alt](/img/tutorial/01-gin-next/gin-layout.png)

### Helm chart repository

Helm chart framework repository layout is look like: 

![alt](/img/tutorial/01-gin-next/deploy-layout.png)

:::danger
GITHUB_TOKEN will store in helm chart repository for pulling docker image from GitHub package, Do not public this repository.
:::