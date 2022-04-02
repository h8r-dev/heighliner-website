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
  <TabItem value="macos" label="MacOS" default>

Homebrew:

```bash
brew install h8r-dev/tap/heighliner
hln version
```

Or use the install script:

```bash
curl -L https://dl.h8r.io/hln/install.sh | sh
./bin/hln version
```

Or download binaries: [Github Release](https://github.com/h8r-dev/heighliner/releases)

  </TabItem>
  <TabItem value="linux" label="Linux">

Use the install script:

```bash
curl -L https://dl.h8r.io/hln/install.sh | sh
./bin/hln version
```

Or download binaries: [Github Release](https://github.com/h8r-dev/heighliner/releases)

  </TabItem>
  <TabItem value="windows" label="Windows">

Download binaries: [Github Release](https://github.com/h8r-dev/heighliner/releases)

  </TabItem>
</Tabs>
