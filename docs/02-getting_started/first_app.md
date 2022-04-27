---
title: Your First App
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::info

Make sure you have followed [the installation guide](/docs/getting_started/installation) before continuing.

:::

<iframe width="560" height="315" src="https://www.youtube.com/embed/eHcGZYJEqfk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## List all stacks

List all Heighliner stacks:

```shell
hln list stacks
```

Output:

```shell
NAME      VERSION  DESCRIPTION
nextjs    v0.0.1
gin-next  v0.0.1
gin-vue   v0.0.1
```

## Create your application

Create your application interactively:

```shell
hln up -s nextjs -i
```

Input the values one by one according to the promt to setup your application.

:::tip

If `hln up` command failed due to unexpected network problems, feel free to **rerun** it again.

:::

The output will look like the following:

<div
  style={{
    maxWidth: 1000,
    height: 'auto',
    marginBottom: 30,
    marginTop: 30,
  }}
>
<img src={useBaseUrl('/img/docs/dagger_output.png')} />
</div>

Check the status of your application:

```shell
hln status
```

Congrats! You have crated your application with `hln` successfully. Click the github url to start developing your new application. All of the Cloud-Native infrastructure and CI/CD pipelines have been set up properly. Feel free to click these links and input the account password of each component to see its dashboard.

## Clean up

```shell
hln down
```
