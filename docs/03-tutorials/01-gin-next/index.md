---
title: Gin+Nextjs Stack
---

## What does the Gin+Nextjs Stack consist of?

1. APP: application framework, inculding: 
    1. [Gin framework](https://gin-gonic.com/) as backend
    1. [Nextjs framework](https://nextjs.org/) as frontend
1. SCM: Using [GitHub](https://github.com) to store source code
1. App Definition: Defining applications with [helm](https://helm.sh/) 
1. CI: Building docker image with [GitHub Action](https://docs.github.com/en/actions)
1. Docker Registry: Using [GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages) to store docker image
1. CD: Using [Argo CD](https://argo-cd.readthedocs.io/) for `GitOps` continuous delivery
1. Logging: Using [Loki](https://grafana.com/oss/loki/) to store logs
1. Monitoring: Using [Prometheus](https://prometheus.io/) to store metrics
1. Dashboard: Visualization using [Grafana](https://grafana.com/)
1. Remote Develop: Using [Nocalhost](https://nocalhost.dev) to develop inside container