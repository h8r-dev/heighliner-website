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

- **Integrated infrastructure level features:**
  - [GitHub Actions](https://github.com/features/actions) for deploy on merge to production and staging environments
  - Deploy to Kubernetes cluster with [ArgoCD](https://argoproj.github.io/cd/) and scale up effort-less
  - Monitor your application with [Prometheus](https://prometheus.io/)
  - Visualize collected **metrics** and **logs** of your application with [Grafana](https://grafana.com/)
  - Develop in cloud-native environment with [Nocalhost](https://nocalhost.dev/)

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

Through this tutorial, you will experience all above exciting features in a Remix app with just **one command**.

What's more, the whole stack will be spinned up in just **few minutes**.

Let's begin traveling!

## Create A New Remix Application

```shell
hln up remix-note-app -s remix -i
```

The command `hln up` is the **only command** that will be typed by you, which means the command will do all of the things.

Option `-s` specify the chosen stack, here it's remix, option `-i` will enter interactive mode, you need to input several required parameters step by step, for more details about
parameters or error printed, you could view [Installation Guide](/docs/getting_started/installation)

![remix-hln-up](/img/docs/tutorial/remix/remix-hln-up.png)

When `hln up` command completed successfully, the output should be like this:

![output](/img/docs/tutorial/remix/remix-note-app-output.png)

If you don't get output like this or some error printed on screen, feel free to give us a feed back at [Heighliner Issue](https://github.com/h8r-dev/stacks/issues), thanks.

## What Happend Just Now?

The `hln up` command will set up a several of components that preconfigured in [remix stack](https://github.com/h8r-dev/stacks/blob/main/official-stack/remix/plans/plan.cue). Range from infrastructure level to application level, below is a full list:

:::tip
To be able to access your applications created by Heighliner, make sure you have set your local hosts, or you could follow instructions from [Setting Local Hosts](#setting-local-hosts)
:::

#### 1. Two Git Repositories

Firstly, two Git repositories are created on your GitHub organization, one repository contains whole [Remix Indie Stack](https://github.com/remix-run/indie-stack) source code and another repository contains [Helm](https://helm.sh/) charts source code which will be pulled and deployed by ArgoCD. For more Helm details, you can view [Helm docs](https://helm.sh/docs/).

![git-repo](/img/docs/tutorial/remix/remix-note-app-repos.png)

You could view `.github/workflows/docker-publish.yml` file from your `remix-note-app` repository, which is added by Heighliner stacks engine to set up a **CI** pipeline.

#### 2. A Online Running Remix Application

You could view your remix application site at [remix-note-app.h8r.site](https://remix-note-app.h8r.site) like this:

![remix-app](/img/docs/tutorial/remix/remix-note-app-app.png)

#### 3. A ArgoCD Application

[ArgoCD](https://argoproj.github.io/cd/) is a declarative, GitOps continuous delivery tool for Kubernetes. The remix stack uses ArgoCD to deploy new releases of your remix application, Heighliner stacks engine connects them together automatically and handles all tough configuration tasks.

You could view your ArgoCD dashboard at [argocd.h8r.site](http://argocd.h8r.site/) like this:

![argo-cd](/img/docs/tutorial/remix/remix-note-app-argocd.png)

#### 4. A Prometheus Application

[Prometheus](https://prometheus.io/) is an open-source monitoring framework, it provides out-of-the-box monitoring capabilities for the Kubernetes. The remix stack uses Prometheus to collect monitoring metrics.

You could view your Prometheus dashboard at [prometheus.h8r.site](http://prometheus.h8r.site) like this:

![prometheus-dashboard](/img/tutorial/01-gin-next/prometheus.png)

#### 5. A Grafana Application

[Grafana](https://grafana.com/) is a multi-platform open source analytics and interactive visualization web application. The remix stack heavily uses Grafana to visualize all collected metrics and logs from infrastructure and your own applications.

You could view your Grafana dashboard at [grafana.h8r.site](http://grafana.h8r.site) like this:

![grafana-dashboard](/img/tutorial/01-gin-next/application-monitoring.png)

#### 6. A Nocalhost Application

[Nocalhost](https://nocalhost.dev/) is an open-source **IDE plugin** for cloud-native applications development. The remix stack uses Nocalhost to make **Develop In Cloud** come true. Underneath, Nocalhost will set up an isolated development space in Kubernetes for every developer.

![nocalhost-dashboard](/img/tutorial/01-gin-next/nocalhost.png)

## Setting Local Hosts
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
<ingress-ip> remix-note-app.h8r.site
```

:::tip
if you are using vpn(eg: clashX\Shadowsocks), you need to close the vpn.
:::

## Make Some Changes To Application

## Cleanup

```shell
hln down remix-note-app
```

The `hln down` command will delete all resources created by `hln up`, such as Git repositories, Kubernetes deployments, databases.
