---
title: Installation
sidebar_position: 1
---

Requirements:

- Installed [kubectl](https://kubernetes.io/docs/tasks/tools/) command-line tool.
- Have a [kubeconfig](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/) file and set `KUBECONFIG` env (default location is `~/.kube/config`).

## 1. Install `hln` CLI

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="script" label="MacOS" default>

Homebrew:

```bash
brew install h8r-dev/tap/hln
```

Alternatively, you can use this one liner:

```bash
curl -L https://dl.h8r.io/hln/install.sh | sh
```

You can download binaries of all releases from [Github Release](https://github.com/h8r-dev/heighliner/releases).

  </TabItem>
  <TabItem value="homebrew" label="Linux">

You can download binaries of all releases from [Github Release](https://github.com/h8r-dev/heighliner/releases).

  </TabItem>
  <TabItem value="github_release" label="Windows">

You can download binaries of all releases from [Github Release](https://github.com/h8r-dev/heighliner/releases).

  </TabItem>
</Tabs>
