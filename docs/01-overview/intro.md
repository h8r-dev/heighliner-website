---
id: intro
title: Introduction
sidebar_position: 1
---

Heighliner is a modern app development platform.
It aims to help developers to build apps easily and quickly using state-of-the-art cloud native stacks.
You can use Heighliner to spin up the development environment, and then can focus on writing the business code without worrying build and deploy.

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
    All you need is an IDE (e.g. VSCode) to write code and a browser to interact with.
- **Declarative setup**:
    Traditional tools ask you to define workflow step by step.
    [This method doesn't work at scale](https://www.usenix.org/publications/loginonline/prodspec-and-annealing-intent-based-actuation-google-production).
    People often get overwhelmed and lost with too many complex details.
    We need a new solution to meet the growing business requirements and complexities.
    Thus, we designed a declarative system to replace procedural workflow.
    You define the desired goals and Heighliner will make it to the end.
    You can enjoy the simplicity while Heighliner handles the heavy-lifting.
- **Multi-cloud and no vendor lock-in**:
    Heighliner is open source, vendor neutral, cloud agnostic.
    With a multi-cloud, pluggable architecture, Heighliner can adapt your apps to major cloud platforms.
    Your code remains the same across multiple cloud providers while Heighliner adapts to them intelligently.
    You can truly build once and run anywhere.

## Features

- Popular languages and frameworks support: Go-Gin, Spring, Express, Django, Rails, React, Vue.
- Automated setup of Github repositories and scaffolds for app, deploy, and infra code.
- Automated setup of CI pipelines on Github Action.
- Automated setup of Dockerfiles for container builds.
- AUtomated setup of ArgoCD pipelines to deploy application and its infra dependencies.
- Automated setup of Helm charts for Kubernetes ingress, services, and workloads, RBAC roles, etc.
- Automated setup of logs, metrics, monitoring dashboards based on Prometheus + Grafana + Loki stack.
- Automated setup of remote development environment with Nocalhost.
- Automated setup of middleware services (e.g. MySQL, Redis, Kafka).
- Public DNS names to access your app, logging/monitoring dashboards, Nocalhost services, etc.
- Health status analysis of your app.
- SSO integration (OIDC, OAuth2, LDAP, GitHub, Google).
- CLI for interactive control and CI automation.
- Dashboard UI which provides real-time view and interactive experience managing your stacks and apps.
- Secure, integrated secret management.
- Extensible core engine to customize your own stacks and plugins.

## What's Next

- [Install and setup Heighliner](/docs/getting_started/installation).
- Explore use cases with [hands-on tutorials](/docs/tutorials/gin_vue).
- Learn about [Heighliner Platform Architecture](./arch.md).
- Learn about [how Heighliner compares to other tools and services](./comparison.md).

## Community

- Learn how to [develop Heighliner locally](/docs/development/develop_h8r)
- Start [contributing code](/docs/development/contributing)
- [Contact us](/contact-us)

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

Heighliner is <Highlight color="#eb34ba">Pre-Alpha</Highlight> and being actively developed by the community.
Our releases can be found [here](https://github.com/h8r-dev/heighliner/releases).
