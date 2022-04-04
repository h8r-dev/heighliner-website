---
title: Installation
sidebar_position: 1
---


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

## 2. Install Kubernetes Cluster

- Installed [kubectl](https://kubernetes.io/docs/tasks/tools/) command-line tool.
- Have a [kubeconfig](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/) file and set `KUBECONFIG` env (default location is `~/.kube/config`).

<Tabs
className="unique-tabs"
defaultValue="kind"
values={[
{label: 'Kind', value: 'kind'},
{label: 'Minikube', value: 'minikube'},
{label: 'AWS', value: 'aws'},
{label: 'Azure', value: 'azure'},
{label: 'Aliyun', value: 'aliyun'},
{label: 'Tencent', value: 'tencent'},
]}>

<TabItem value="kind">

Follow [this guide](https://kind.sigs.k8s.io/docs/user/quick-start/#installation) to install kind.

Then spins up a kind cluster:

```shell script
cat <<EOF | kind create cluster --image=kindest/node:v1.23.5 --config=-
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
  kubeadmConfigPatches:
  - |
    kind: InitConfiguration
    nodeRegistration:
      kubeletExtraArgs:
        node-labels: "ingress-ready=true"
  extraPortMappings:
  - containerPort: 80
    hostPort: 80
    protocol: TCP
  - containerPort: 443
    hostPort: 443
    protocol: TCP
EOF
```

Install ingress controller to enable service route：

```shell script
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/kind/deploy.yaml
```

</TabItem>

<TabItem value="minikube">

Follow the minikube [installation guide](https://minikube.sigs.k8s.io/docs/start/).

Then spins up a minikube cluster

```shell script
minikube start
```

Install ingress to enable service route:

```shell script
minikube addons enable ingress
```

</TabItem>

</Tabs>


## 3. Install Heighliner Server