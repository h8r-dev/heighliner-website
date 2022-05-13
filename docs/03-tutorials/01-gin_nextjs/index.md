---
title: Gin+Nextjs Stack
---

## What does the Gin+Nextjs Stack consist of?

1. APP: application framework, inculding: 
    1. [Gin framework](https://gin-gonic.com/) as backend
    1. [Nextjs framework](https://nextjs.org/) as frontend
1. SCM: Using [GitHub](https://github.com) to manage source code
1. App Definition: Defining applications with [helm](https://helm.sh/) 
1. CI: Building docker images with [GitHub Action](https://docs.github.com/en/actions)
1. Docker Registry: Using [GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages) to store docker images
1. CD: Using [Argo CD](https://argo-cd.readthedocs.io/) for `GitOps` continuous delivery
1. Logging: Using [Loki](https://grafana.com/oss/loki/) to store logs
1. Monitoring: Using [Prometheus](https://prometheus.io/) to collect metrics
1. Dashboard: Visualizing by [Grafana](https://grafana.com/) dashboards
1. Remote Development: Using [Nocalhost](https://nocalhost.dev) to develop inside cluster