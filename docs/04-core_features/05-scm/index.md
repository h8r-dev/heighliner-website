---
title: Source Code Management (SCM)
sidebar_position: 1
---

Your app created via Heighliner stacks will have SCM setup.
By default, we will create Github repos and generate scaffold templates.

## Github Repositories

In Heighliner, a stack will normally create different repos for different frameworks, e.g. frontend, backend, deploy.
You can get the urls of the repos via `hln status <app>` command.

These repositories are automatically initialized with predefined framework scaffolds.
You can see this example of [gin-next repo config](https://github.com/h8r-dev/stacks/blob/main/official-stack/gin-next/plans/plan.cue).
You can also check the [framework scaffold generation code](https://github.com/h8r-dev/stacks/tree/main/chain/factory/scaffoldfactory).
