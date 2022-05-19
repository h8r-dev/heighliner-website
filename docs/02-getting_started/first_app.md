---
title: Your First App
sidebar_position: 2
---

:::info
Make sure you have followed [the installation guide](/docs/getting_started/installation) before continuing.
:::

This tutorial will guide you through to create a [Remix](https://remix.run/) application in 2 minutes.

## 1. Create your application

`hln up` is the only command you will execute,  it will handle all tough create, configuration and connect tasks:

````mdx-code-block
<details>
  <summary>Mirror for Chinese users.</summary>

  For Chinese users who may have network access problems, please run below command to tell us that you want to fetch resources from China mirror:

  ```shell
  export NETWORK_TYPE=internal
  ```
</details>
````

```shell
hln up hello-world -s sample -i
```

You will be prompted to input your `kubeconfig` file path and `GitHub personal access token`, which generated from earlier installation process.

Let it running and wait for about 2 minutes, your screen should display below output content:

````mdx-code-block
<details>
  <summary>Successfull Output</summary>

  ```shell
  Heighliner application hello-world is ready! access URL: http://hello-world.h8r.site

  There are 1 services have been deployed:
  ● hello-world
    ● access URL: http://hello-world.h8r.site
    ● resource code: https://github.com/<your-github-account>/hello-world

  There are 3 addons have been deployed:
  ● argocd
    ● access URL: http://argocd.h8r.site
    ● credential: [Username: admin Password: yKu7CdYol57tIGzG]

  ● prometheus-stack
    ● access URL: http://grafana.h8r.site
    ● credential: [Username: admin Password: prom-operator]
    ● prometheus URL: http://prometheus.h8r.site [Username: admin Password: heighliner123!]
    ● alertManager URL: http://alert.h8r.site [Username: admin Password: heighliner123!]

  ● loki

  Congrats! Application is ready!
  ```
</details>
````

That's all! You just deployed **5** applications, let's try to access them.

## 2. Enable Access

To be enable to access your deployed applications, you must set domain routing rules firstly, you could follow [Set Domain Routing](/docs/getting_started/set_domain_routing) guide to config.

Congratulations, your application is now available at: [hello-world.h8r.site](http://hello-world.h8r.site).

For more internal details, you could open:

````mdx-code-block
<details>
  <summary>More internal details</summary>

  There are 5 applications deployed:

  1. A remix application based on [Remix Indie Stack](https://github.com/remix-run/indie-stack).
  2. A ArgoCD application to do continuous deployment.
  3. A Prometheus application will collect metrics and monitor your remix application.
  5. A Loki application to collect logs from whole stack.
  4. A Grafana application to visualize collected metrics and logs from whole stack.


  Besides, two extra repositories should have created under your GitHub account:

  1. A repository named `hello-world`, which contains your remix application source code, you could develop
  further to meet your own needs.
  2. A repository named `hello-world-deploy`, which contains source code for deployment, you should not modify it manually,
  and always keep it **private**.

</details>
````

Next, let's explore our applications.
