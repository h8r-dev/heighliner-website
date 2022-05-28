---
title: CI/CD and GitOps
sidebar_position: 3
---

## View Your GitHub Repos

Once your application is ready, two repositories are created under your GitHub account:

![repos-cd](/img/docs/getting-started/sample-repos.png)

Besides, Heighliner set up a GitHub Action to your remix application code to handle CI jobs, you can view `.github/workflows/docker-publish.yml` file for more details.

## GitOps with ArgoCD

[ArgoCD](https://argoproj.github.io/cd/) is a declarative, GitOps continuous delivery tool for Kubernetes. The remix stack uses ArgoCD to deploy new releases of your remix application.

Get your ArgoCD credentials:

```shell
hln status hello-world
```

Visit your ArgoCD dashboard at [argocd.h8r.site](http://argocd.h8r.site/):

![argo-cd](/img/docs/getting-started/sample-argocd.png)

## Make Some Changes To Code

Now, you could make some changes to your remix source code, here, we update `app/routes/index.tsx` file with below code:

```html title="app/routes/index.tsx"
<h1 className="text-center text-6xl font-extrabold text-white">
  Powered by Heighliner!
</h1>
```

and push the updates to `main` branch, then, you could release your updates with a git tag, such as: `v0.1.1` (a `v` prefix for your tag is required), check GitHub Actions of your `hello-world` repository, you will get this:

![github-ci](/img/docs/getting-started/sample-ci.png)

After a while, going back to your remix application at [hello-world.h8r.site](http://hello-world.h8r.site), you will notice your changes deployed:

![updated](/img/docs/getting-started/sample-updated.png)

Return to [argocd.h8r.site](http://argocd.h8r.site/), you will also find that image tag of remix application pod updated and match with your git tag:

![argocd-updated](/img/docs/getting-started/sample-argocd-updated.png)

Underneath, Heighliner connects Argocd, Github Action and your remix application code together. you are being benefit from **GitOps** with no effort-less.
