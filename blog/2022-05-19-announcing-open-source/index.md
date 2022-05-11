---
slug: announcing-open-source
title: Announcing Heighliner‘s Open Source
authors: [zhenwei]
tags: [Heighliner, Cloud Native, Stack]
---

We are thrilled to announce that Heighliner released its first alpha version today. Many thanks to our team members, investors and industry partners for their efforts and support.

Special thanks to our angel round investor XVC. As a leading VC based in China, XVC provides not only money, but also deep thinkings. The team is passinate and pragmatic. They stand by the startup as a partner, offering advices and support in many ways.

Heighliner provides a Stack-as-code way to build cloud-native applications easily. With dedicated stacks, developers can setup a full life-cycle DevOps flow based on Kubernetes in minutes by one command. We've made all of our code and documentation open source on [GitHub](https://github.com/h8r-dev), collaborating with developers around the world.


## Developing cloud applications has been too complicated

The complexity of application architecture multiplies as the business grows. Also DevOps and cloud-native tools grow rapidly, which means developers have to keep learning too many tools to write business code. We have seen people install and configure various tools (e.g. Argocd, Grafana, Nocalhost, API Gateway) on Kubernetes over and over again. It fragments their development time and makes them painful to connect the dots. 

Documentes of stack and architecture has been always outdated and incomprehensible, which is why problems keep cropping up when the flow changes. Stack as code persists the flow as structured runnable code, making changes predictable and evaluable. Like IaC(Infrastructure as code) orchestrates infrastructures, SaC(Stack as code) orchestrates DevOps tools, delivery flows, operation policies, service catalogs, etc.


## Introduce out-of-the-box best practices: Heighliner stacks

Unlike IaC, which recommends every team has its own plan, Heighliner believes many teams could use same stack to build applications on best practices. 

While the tools are powerful and easy to use, choosing and connecting them is confusing developeres. Making tools to talk each other has become the new problem. Heighliner stacks solved this problem by codifying the connections as best practices. 

You needn't worry about the difficulty of making a stack. We've provided some dedicated stacks that can be used out-of-the-box([Get more information here](https://github.com/h8r-dev/stacks)).  The stacks cover almost all of the life-cycle of a cloud native application, from debugging to tracing, from building to monitoring. Heighliner stacks connect a variety of tools(such as Prometheus,Nocalhost,Helm etc.) and setup the whole flow in minutes even without any configuration. 

Leveraging the power of Dagger(a new project built by ex-founder of Docker) and CUE(a new configuration language developed by Google), every stack is modular and easy to assemble. That means, following our guide([How to make a stack](https://heighliner.dev/docs/core_features/stack/write_stack)), you can make one easily for your team.

In addition, through cooperating with Dagger and CUE on community, there are more and more tool-bindings and integrations. Based on which, assembling stacks is becoming easier.


## Making developers more productive, we are on the way!

We are a developer team who cares about developer experience. Nocalhost, which we built before in Tencent Cloud, has siginificantly improved efficiency in coding-testing loop. However, there are still many factors of inefficiency in various aspects of development, which is why we build Heighliner. 

Leveraging the power of DevOps tools and Cloud platforms, Heighliner will keep focusing on developer experience.

## We are hearing

If you're interested in what we're doing, talk to us!

- GitHub: [https://github.com/h8r-dev/heighliner](https://github.com/h8r-dev/heighliner)
- Discord: [https://discord.gg/WphTbdVHFA](https://discord.gg/WphTbdVHFA)
- Wechart ID: heighliner