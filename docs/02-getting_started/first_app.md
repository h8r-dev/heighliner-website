---
title: Your First App
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

:::info
Make sure you have followed [the installation guide](/docs/getting_started/installation) before continuing.
:::

Ever want to enjoy the simple experience of hosted app platform like [Vercel](https://vercel.com/)?
But without the limitation to specific vendors?

In this tutorial you will create a [Remix](https://remix.run/) app in Vercel style in 2 minutes using Heighliner.

## Create Your App

You only need to run this single command:

````mdx-code-block
<details>
  <summary>Network speedup for users in China</summary>

  For users in China, run the following command:

  ```shell
  export NETWORK_TYPE=china_network
  ```

  This will tell Heighliner to fetch resources from mirrors in China.
</details>
````

```shell
hln up hello-world -s sample -i
```

It will prompt you to input config values interactively:

<div
  style={{
    maxWidth: 600,
    height: 'auto',
    marginBottom: 20,
    marginTop: 20,
  }}
>
<img src={useBaseUrl('/img/docs/getting-started/hln_input.png')} />
</div>

After you completed the input, it will run for about 2 minutes. If it is successful, the output will look like:

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

Congrats! You have created your first app using Heighliner.

## See Your App In Action

Your app is live at [hello-world.h8r.site](http://hello-world.h8r.site):

<div
  style={{
    maxWidth: 800,
    height: 'auto',
    marginBottom: 20,
    marginTop: 20,
  }}
>
<img src={useBaseUrl('/img/docs/getting-started/sample-application.png')} />
</div>

The sample stack of Heighliner automatically creates a full set of tools and services for your app:
Github repos, Helm charts, CI/CD pipelines, domain routing, monitoring and alerting rules, etc.

## What's Next

- Discover how to [continuously deliver your app](/docs/getting_started/cicd)
- Discover how to [monitor your app](/docs/getting_started/monitoring)
