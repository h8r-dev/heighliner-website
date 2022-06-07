---
title: Remote Debug
sidebar_position: 1
---

Your app created via Heighliner stacks will have Remote Debug solution.
By default, we will use Nocalhost to setup remote development environment and support remote debugging.

## Nocalhost Dashboard

In Heighliner, a stack will normally setup the Nocalhost server.
You can get the Nocalhost dashboard url, default user account and passwords via `hln status <app>` command.

![alt](/img/core-features/04-remote-dev/nocalhost-dashboard.png)

## Development

### Install Nocalhost VS Code Extension  
1. Open VS Code and go to Extensions view.   
1. Input `Nocalhost` in the search box.  
1. Select the Nocalhost Extension, and click the `Install` button.  

![alt](/img/core-features/04-remote-dev/vs-nocalhost-install.png)

### Login to Nocalhost Server  

![alt](/img/core-features/04-remote-dev/nocalhost-login.gif)

### Install Application
1. Click on the 🚀 icon.  
1. Select the application that you want to install.

![alt](/img/core-features/04-remote-dev/nocalhost-install-app.gif)

### Remote Development  
1. Select the workload that you want to develop.  
1. Right-click the workload and and select `Remote Run`.  
1. Nocalhost will automatically enter the `DevMode` and launch application on the remote cluster.  
1. Use the url `http://<namespace>.<app>.h8r.site/api` to access your application.

Get namespace:
![alt](/img/core-features/04-remote-dev/nocalhost-namespace.png)

Remote Run:
![alt](/img/core-features/04-remote-dev/nocalhost-remote-run.gif)

### Remote Debug  
1. Select the workload that you want to debug.  
1. Right-click the workload and and select `Remote Debug`.  
1. Nocalhost will automatically install the dependencies on the first debug.  
1. Nocalhost will automatically enter the `DevMode` and start remote debugging.  

![alt](/img/core-features/04-remote-dev/nocalhost-remote-debug.gif)


[More info about Remote Debug by Nocalhost](https://nocalhost.dev/docs/guides/debug/vscode-debug)
