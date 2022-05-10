---
title: CI/CD
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Your app created via Heighliner stacks will have CI/CD setup.
By default, we use Github action to trigger continous integration (CI) pipelines, and ArgoCD for GitOps continuous delivery (CD).

## Github Action

In Heighliner, a stack will normally create different repos for different frameworks, e.g. frontend, backend, deploy.
Each repo will have CI workflow specified.
The type of CI is specified in the [repo config](https://github.com/h8r-dev/stacks/blob/main/official-stack/gin-next/plans/plan.cue):

<div
  style={{
    maxWidth: 600,
    height: 'auto',
    marginBottom: 50,
    marginTop: 50,
  }}
>
<img src={useBaseUrl('/img/docs/features/repo_ci.png')} />
</div>

This will create a Github Action workflow that will build and publish a container image.

You can get the repo url via `hln status <app>`. Then you can check the github action in `.github/workflows/` folder.

## ArgoCD

In Heighliner, the Github repos created by the stack will be categoried into two types:

- business code: e.g. frontend, backend, database...
- deployment code: the repo that contains the helm chart, kubernetes resources, and deployment scripts.

A stack will do GitOps style continuous delivery for each business code repo.
Each repo will have a corresponding ArgoCD Application setup.

You can get the ArgoCD dashboard url via `hln status <app>`. Then you can check the ArgoCD applications like below:


![alt](/img/docs/getting-started/argocd-details.png)
