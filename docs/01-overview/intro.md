---
id: intro
title: Introduction
sidebar_position: 1
---

Heighliner is a modern app development platform.
It aims to help developers to build apps easily and quickly using state-of-the-art cloud native stacks.
Your development environment can be spinned up in one click, and then you can focus on building your apps.

import { Video } from '@site/src/components/Video';

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

## Why Heighliner

- **Smart platform**:
    Heighliner sets up the development environment which fits your apps intelligently.
    It configures the infrastructure stacks to optimize for your apps, e.g. Helm chart, container builds, app-centric monitoring, security and access control, etc.
    You can enjoy the best practice out of the box which comes from our years of industrial experience.
- **Seamless workflow**:
    Without Heighliner, we have seen people install and configure various tools (e.g. Argocd, Grafana, Nocalhost, API Gateway) on Kubernetes over and over again.
    It fragments their development time and makes them painful to connect the dots.
    With Heighliner, you can enjoy the seamless workflow for developing your apps, integrated with open source tooling.
    You can do everything on a single platform: writing code, building and testing, managing CI/CD pipelines, viewing logs and metrics.
- **Declarative setup**:
    Traditional tools ask you to define workflow step by step.
    [This method doesn't work at scale](https://www.usenix.org/publications/loginonline/prodspec-and-annealing-intent-based-actuation-google-production).
    Developers often get lost with complex, overwhelming details.
    We need a new solution to meet the growing business requirements -- a declarative system to describe the desired goals.
    You can just compose the application architecture in high level and Heighliner will handle the heavy-lifting.
- **Multi-cloud and no vendor lock-in**:
    Heighliner is open source, vendor neutral, cloud agnostic.
    With a multi-cloud, pluggable architecture, Heighliner can adapt your apps to any cloud platforms.
    Your code remains the same across cloud providers (AWS, Azure, etc.) while Heighliner integrates with them intelligently.
    You can truly build once and run anywhere.

## Features

- Popular languages and frameworks support: Go-Gin, Spring, Remix, Nextjs, Vue.
- Automated setup of GitHub repositories and scaffolds for app, deploy, and infra code.
- Automated setup of CI pipelines on GitHub Action.
- Automated setup of Dockerfiles for container builds.
- AUtomated setup of ArgoCD pipelines to deploy application and its infra dependencies.
- Automated setup of Helm charts for Kubernetes ingress, services, and workloads, RBAC roles, etc.
- Automated setup of logs, metrics, monitoring dashboards based on Prometheus + Grafana + Loki stack.
- Automated setup of remote development environment with Nocalhost.
- Automated setup of middleware services (e.g. MySQL, Redis, Kafka).
- Public DNS names to access your app, logging/monitoring dashboards, Nocalhost services, etc.
- Health checking and analysis of your app.
- SSO integration (OIDC, OAuth2, LDAP, GitHub, Google).
- CLI for interactive control and CI automation.
- Dashboard UI which provides real-time view and interactive experience managing your stacks and apps.
- Secure, integrated secret management.
- Extensible core engine to customize your own stacks and plugins.

## What's Next

- Learn about Heighliner [concepts](/docs/overview/concepts) and [platform architecture](./arch.md).
- [Install and setup Heighliner](/docs/getting_started/installation).
- Get hands-on with [the quickstart tutorials](/docs/getting_started/first_app).
- Learn about [how Heighliner compares to other tools and services](./comparison.md).

## Community

- Start [contributing code](/docs/development/contributing)
- [Join community channels](/contact-us)

## Development Status

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

Heighliner is in <Highlight color="#eb34ba">Alpha</Highlight> stage and being actively developed.
Our releases can be found [here](https://github.com/h8r-dev/heighliner/releases).
