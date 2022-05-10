---
title: Usage
sidebar_position: 2
---

hln has two categories of capabilities: stack management and application management.

## Manage stacks

The [`hln list stacks`](commands/hln_list_stacks) command will list all available stacks. You can choose one and use [`hln up`](commands/hln_up) command with `-s <stack>` flag to create your application with that stack.

You can also use the [`hln down`](commands/hln_down) to take down your application and clean up the resources of it.

## Develop applications

The [`hln status`](commands/hln_status) command could print application's information. While [`hln metrics`](commands/hln_metrics) could show more details about your applications running status. Run [`hln logs`](commands/hln_logs) and the logs of your application will be printed out.

See [manual of hln](commands/hln) to get more information. Browse around and read the details of commands to learn how to use them.
