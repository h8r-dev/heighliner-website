---
title: Remix App
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
Make sure you have followed [the installation guide](/docs/getting_started/installation) before continuing.
:::

[Remix](https://remix.run/) is a **full stack** web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience. 

This stack is based on [Remix Indie Stack](https://github.com/remix-run/indie-stack) and optimized by Heighliner core team. Currently the stack includes below core features:

- **Integrated infrastructure features:**
  - [GitHub Actions](https://github.com/features/actions) for deploy on merge to production and staging environments
  - Deploy to Kubernetes cluster with [ArgoCD](https://argoproj.github.io/cd/) and scale up effort-less

- **Application level features:**
  - Production-ready [SQLite Database](https://sqlite.org)
  - Email/Password Authentication with [cookie-based sessions](https://remix.run/docs/en/v1/api/remix#createcookiesessionstorage)
  - Database ORM with [Prisma](https://prisma.io)
  - Styling with [Tailwind](https://tailwindcss.com/)
  - End-to-end testing with [Cypress](https://cypress.io)
  - Local third party request mocking with [MSW](https://mswjs.io)
  - Unit testing with [Vitest](https://vitest.dev) and [Testing Library](https://testing-library.com)
  - Code formatting with [Prettier](https://prettier.io)
  - Linting with [ESLint](https://eslint.org)
  - Static Types with [TypeScript](https://typescriptlang.org)

Through this tutorial, you will experience all above exciting features in a Remix app.

What's more, the whole stack will be spinned up in just **few minutes**.

## Create a Spring+Vue App
```shell
hln up java-hello-world -s spring-vue -i
```
![create-application](/img/docs/tutorial/spring-vue/create-application.png)

Output looks like this:
![output](/img/docs/tutorial/spring-vue/create-output.png)

## Setting hosts
:::info
Below is assuming you don't own a real domain name and use `h8r.site` as your domain name.
In production, we recommend setting your DNS record to the public ingress IP.
:::
:::tip
if you are using `h8r.site` as your host, you can skip this step. because it is dns resolvable to 127.0.0.1.
:::

Get your ingress ip:
<Tabs>
  <TabItem value="localhost" label="Kind/Minikube" default>

  ```shell
  127.0.0.1
  ```

  </TabItem>
  <TabItem value="cloud" label="Cloud" >

  ```shell
  kubectl -n ingress-nginx get svc ingress-nginx-controller -o=jsonpath='{.status.loadBalancer.ingress[0].ip}'
  ```

  </TabItem>
</Tabs>

Add hosts to your localhost(replace `<ingress-ip>` with above result):
```
<ingress-ip> argocd.h8r.site
<ingress-ip> grafana.h8r.site
<ingress-ip> alert.h8r.site
<ingress-ip> prometheus.h8r.site
<ingress-ip> nocalhost.h8r.site
<ingress-ip> java-hello-world-backend.h8r.site
<ingress-ip> java-hello-world-frontend.h8r.site
```

:::tip
if you are using vpn(eg: clashX\Shadowsocks), you need to close the vpn.
:::

## Vue App
View your vue app site [java-hello-world-frontend.h8r.site](http://java-hello-world-frontend.h8r.site)

![vue-app](/img/docs/tutorial/spring-vue/vue-app.png)

## SpringBoot App
View your springBoot app Swagger UI [java-hello-world-backend.h8r.site/swagger-ui/index.html#](http://java-hello-world-backend.h8r.site/swagger-ui/index.html#)

![springboot-app](/img/docs/tutorial/spring-vue/springboot-app.png)

## ArgoCD App
View your ArgoCD dashboard [argocd.h8r.site](http://argocd.h8r.site/)

![argo-cd](/img/docs/tutorial/spring-vue/argocd-app.png)

## Git Repository
View your git repository in GitHub

![git-repo](/img/docs/tutorial/spring-vue/git-repository.png)

## Cleanup
```shell
hln down java-hello-world
```
