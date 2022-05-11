---
title: Remote Debug
sidebar_position: 1
---

Your app created via Heighliner stacks will have Remote Debug solution.
By default, we will use Nocalhost to setup remote development environment and support remote debugging.

## Nocalhost Dashboard

In Heighliner, a stack will normally setup the Nocalhost server.
You can get the Nocalhost dashboard url via `hln status <app>` command.

## Nocalhost DevSpace

In Heighliner, a stack will normally create DevSpaces for team members based on given Github organization.
Each team member will have his own DevSpace.
You need to provide your own GITHUB_TOKEN when creating the application.
Then you can get the Nocalhost DevSpace url and instructions via `hln dev <app>` command.
