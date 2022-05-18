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

<div
  style={{
    marginBottom: 50,
    marginTop: 50,
  }}
>

<iframe width="560" height="315" src="https://www.youtube.com/embed/e64HegGHPJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

Ever want to have a Vercel-style experience when creating your nextjs app?
But without the limitation to a specific vendor?
In this doc, we will show you how you can go from nothing to a full stack app in an instant.

<div
  style={{
    maxWidth: 800,
    height: 'auto',
    marginBottom: 50,
    marginTop: 50
  }}
>
  <Video
    poster="/img/homepage/video-poster.png"
    src="https://dl.h8r.io/Heighliner-Introduction-English.mp4"
  ></Video>
</div>

## (Optional) Chinese users

For Chinese users who may have network access problems, please run this:

```shell
export NETWORK_TYPE=internal
```

## Step 1. Create your application

Create your application interactively:

```shell
hln up hello-world -s sample -i
```

Input the values one by one according to the prompt:

```shell
Path to your kubeconfig file (required):

> ~/.kube/config

Which github organization do you want to use(Can be set as personal github id)? (required):

> [organization name or github id]

Which domain do you want to use?:

> h8r.site
```

Then it will start executing the setup instructions. Output looks like:

![alt](/img/docs/getting-started/stack_output.png)

:::tip

If `hln up` command failed due to unexpected network problems, feel free to **rerun** it again.

:::

## Step 2. Get application status

```shell
hln status hello-world
```

Output looks like:

```shell
Heighliner application hello-world is ready! access URL: hello-world.h8r.site

There are 1 services have been deployed:
● hello-world-frontend
   ● access URL: hello-world.h8r.site
   ● source code: https://github.com/lyzhang1999/hello-world-frontend

There are 1 addons have been deployed:
● argocd
   ● access URL: argocd.h8r.site
   ● credential: [Username: admin Password: N0KXEibv1iNeYALy]
```

Congrats! You have created your first application with `hln` successfully. All of the cloud-native architecture have been set up properly.
Click the GitHub url and dashboard links to see the effects.

## Step 3. Set domain routing

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
    127.0.0.1 argocd.<your-domain>
    127.0.0.1 hello-world.<your-domain>
    ```

</TabItem>

<TabItem value="cloud">

Get your public ingress IP:

```shell
kubectl -n ingress-nginx get svc ingress-nginx-controller -o=jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

Set domain routing:

- If you are using `h8r.site`, Put the following lines into your `/etc/hosts` (replace <ingress-ip\> with above result):

  ```txt
  <ingress-ip> argocd.h8r.site
  <ingress-ip> hello-world.h8r.site
  ```

- If you are using your own domain name, set your domain DNS record to the above ingress IP.

</TabItem>
</Tabs>

## Step 4. See your app in action

### ArgoCD

Check your **ArgoCD** dashboard at [argocd.h8r.site](http://argocd.h8r.site):
> Note: get argocd credentials with `hln status` command

<div
  style={{
    maxWidth: 800,
    height: 'auto',
    marginBottom: 30,
    marginTop: 30,
  }}
>
  <img src={useBaseUrl('/img/docs/getting-started/argocd-home.png')} />
</div>

You can check the k8s resources for the application:

![alt](/img/docs/getting-started/argocd-details.png)

### Nextjs app

View you nextjs app at [hello-world.h8r.site](http://hello-world.h8r.site):

![alt](/img/docs/getting-started/sample-application.png)

### GitHub repos

You can also check your repos on **GitHub**:

<div
  style={{
    maxWidth: 800,
    height: 'auto',
    marginBottom: 30,
    marginTop: 30,
  }}
>
  <img src={useBaseUrl('/img/docs/getting-started/github_repos.png')} />
</div>

### Clean up

:::tip

If you want to delete created github packages at the same time, use `hln down hello-world --delete-packages` instead.

:::

```shell
hln down hello-world
```
