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

![alt](/img/docs/stacks-list.png)

## Create your application

Create your application interactively:

```shell
hln up -s sample -i
```

Input the values one by one according to the promt:

![alt](/img/docs/interactive-prompt.png)

:::tip

If `hln up` command failed due to unexpected network problems, feel free to **rerun** it again.

:::

After you start running it, it would look like:

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

Output:

![alt](/img/docs/todo.jpg)

Congrats! You have crated your first application with `hln` successfully. All of the cloud-native infrastructure have been set up properly. Click the Github url and dashboard links to see the effects.

**Github:**

![alt](/img/docs/github-repos.png)

**ArgoCD:**

![alt](/img/docs/todo.jpg)

## Clean up

```shell
hln down
```
