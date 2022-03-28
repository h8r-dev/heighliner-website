---
id: intro
title: Introduction
sidebar_position: 1
---

Heighliner is a modern app development platform.
It aims to help developers to build apps easily and quickly using the state-of-the-art cloud native stacks.
Use Heighliner to spin up the development environment.
Then you can focus on writing the business code without worrying build and deploy.
The code doesn't even need to exist on your local machine -- All you need is an IDE to develop.

## Why Heighliner

- **Smart platform**:
    Heighliner sets up the development environment which fits your apps intelligently.
    It configures the infrastructure stacks to optimize for your apps, e.g. Helm chart, container builds, app-centric monitoring dashboards, security and access control, etc.
    You can enjoy the cloud native best practices out of the box.
- **Seamless workflow**:
    Without Heighliner, we have seen people install and use various tools (e.g. Argocd, Grafana, Nocalhost, API Gateway) on Kubernetes.
    It fragments their development time and makes them painful to connect the tools to the apps.
    With Heighliner, you can focus on your business code while enjoying the seamless workflow, integrated with open source cloud native tools.
    You can see and manage the logs, metrics, CI/CD pipelines, image scannning results on a single platform.
    All of these are provided automatically while you work on writing the app.
- **Declarative setup**:
    Traditional tools ask you how to achieve the operations.
    This doesn't work at scale. People get confused and lost with too many complex details.
    Heighliner as a modern tool asks you what to achieve.
    You define the end goals and Heighliner will make it to the end.
    You can enjoy the simplicity of declarative APIs while Heighliner handles the low-level complex details.
- **Multi-cloud and no vendor lock-in**:
    Heighliner is open source, vendor neutral, platform agnostic.
    With a multi-cloud, pluggable architecture, Heighliner can adapt your apps to all major clouds.
    Your code remains the same across cloud providers while Heighliner does the heavy lifting.
    You can truly build once and run anywhere.

## Features

- Support for popular programming languages and frameworks: Go-Gin, Spring, Laravel, Express, Django, Rails, React, Vue.
- Automated setup of Github repositories and scaffolds for app, deploy, and infra code.
- Automated setup of CI/CD pipelines on Github Action and Gitlab Pipeline.
- Automated setup of cloud native infra tools: Nginx, Nocalhost, Loki, Prometheus, Grafana, Alertmanager.
- Automated setup of dashboard configuration for your app's logs, metrics, traces.
- Automated setup of Nocalhost configuration for remotely developing your app.
- Automated DNS names for your app, logging/monitoring dashboards, Nocalhost service.
- Ability to deploy to multiple clusters to achieve high availability.
- Health status analysis of your app.
- SSO integration (OIDC, OAuth2, LDAP, GitHub, GitLab).
- Multi-tenancy and RBAC policies for authorization.
- CLI for interactive control and CI automation.
- Dashboard UI which provides real-time view and interactive experience managing your stacks and apps.
- Secure, integrated secret management.
- Parallel, cacheable workflow execution.
- Extensible core design to customize your own stack, plugin, etc.

## How Heighliner Works For

- **Developers**:
    You can develop your apps easily and quickly using Heighliner.
    Once you create an app, we will assign it a public DNS name.
    It will have all the sane defaults for infra setup so you can just go straight and run it.
- **Operators**
    Heighliner provides good abstraction between developers and operators.
    Operators can codify automation of complex operations using CUE language.
    The abstractions will expose high level APIs which transform to developer-friendly UI/CLI interactions.
    Once the stack is setup, it will keep track of all the nitty-gritty details of the stack.
    It will expose the metrics/traces to operators to uncover any issues as early as possible.

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
