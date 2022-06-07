---
id: intro
title: Introduction
sidebar_position: 1
---

Heighliner(/’haɪlaɪnər/) is a modern developer tool that deliver your application stack as code.
You can codify low level details into human-readable configuration files that you can version, reuse, and share.
You can even import existing stacks to build more advanced stacks.

We provide and maintain official stacks to provide out-of-the-box experience for common use cases.
Your development environment can be spinned up in one click.
This will help you build apps easily and quickly using state-of-the-art cloud native stacks.

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

- **Stack as Code (SaC)**:
    Your entire application stack can be codified.
    You can version, reuse, and share your stacks.
    You can even import existing stacks to build more advanced stacks.
    You can compose it in a way that optimizes for your environments, including Helm chart, CI/CD pipelines, logging and monitoring, security and access control, etc.
    We also provide official stacks to provide cloud native best practice out of the box.
- **Seamless workflow**:
    Without Heighliner, we have seen people install and configure various tools (e.g. Argocd, Grafana, Nocalhost, API Gateway) on Kubernetes over and over again.
    It fragments their development time and makes them painful to connect the dots.
    With Heighliner, you can enjoy the seamless workflow for developing your apps, integrated with open source tooling.
    You can do everything on a single platform: writing code, building and testing, managing CI/CD pipelines, viewing logs and metrics.
- **Declarative program**:
    Traditional tools ask you to program workflow step by step.
    [This method doesn't work at scale](https://www.usenix.org/publications/loginonline/prodspec-and-annealing-intent-based-actuation-google-production).
    Developers often get lost in an overwhelming amount of code.
    We need a new solution to meet the growing business requirements -- a declarative system to describe the desired goals.
    You can just compose the application architecture in high level and Heighliner will handle the heavy-lifting.
- **Multi-cloud and no vendor lock-in**:
    Heighliner is open source, vendor neutral, cloud agnostic.
    With a multi-cloud, pluggable architecture, Heighliner can adapt your apps to any cloud platforms.
    Your code remains the same across cloud providers (AWS, Azure, etc.) while Heighliner integrates with them intelligently.
    You can truly build once and run anywhere.

## What's Next

- Learn about Heighliner [concepts](/docs/overview/concepts) and [architecture](./arch.md).
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
## To engage  
**Sign up your account**  
- create your ID
- password  