---
title: Release application
sidebar_position: 9
---

`Gin-Nextjs` stack using `GitHub Releases` to release application, when you finished frontend or backend code, all you need to do is create a GitHub releases.

![alt](/img/tutorial/01-gin-next/github-release.png)

After that, it will trigger `GitHub Action` to build a new docker image and modify helm chart `values.yaml` file's image tag in repository.

![alt](/img/tutorial/01-gin-next/github-action-release.png)

![alt](/img/tutorial/01-gin-next/github-action-release-modify-helm.png)

Finally, `Argo CD` will deploy new version of application automatically.

![alt](/img/tutorial/01-gin-next/login-argocd.png)

Now, you can access new release of application at: [gin-next-app-frontend.h8r.site](http://gin-next-app-frontend.h8r.site)

![alt](/img/tutorial/01-gin-next/release-application.png)