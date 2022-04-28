---
title: Installation
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## 1. Install hln CLI

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

## 2. Install Kubernetes

Install _kubectl_ first by following [the Kubernetes documentation](https://kubernetes.io/docs/tasks/tools/).

Then choose one of the following methods to install a Kubernetes cluster:

<Tabs
className="unique-tabs"
defaultValue="kind"
values={[
{label: 'Kind', value: 'kind'},
{label: 'Minikube', value: 'minikube'},
{label: 'AWS', value: 'aws'},
{label: 'Azure', value: 'azure'},
{label: 'Alibaba', value: 'aliyun'},
{label: 'Tencent', value: 'tencent'},
]}>

<TabItem value="kind">

Install _kind_ command-line tool by following [the kind installation guide](https://kind.sigs.k8s.io/docs/user/quick-start/#installation)

We recommend setting Docker Resources to 8 cores and 16Gb mem:

<div
  style={{
    maxWidth: 800,
    height: 'auto',
    marginBottom: 30,
    marginTop: 30,
  }}
>
<img src={useBaseUrl('/img/docs/docker_resources.png')} />
</div>

Save the following configuration as `kind.yaml`:

```yaml
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
```

Create a kind cluster from the config:

```shell
kind create cluster --image=kindest/node:v1.23.5 --config=kind.yaml
```

Install ingress controller on the cluster:

```shell
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
```

</TabItem>

<TabItem value="minikube">

Install _minikube_ command-line tool by following [the minikube installation guide](https://minikube.sigs.k8s.io/docs/start/).

Then create a cluster (we recommend using 4 cores and 8Gb memory):

```shell
minikube start --cpus=4 --memory=8g --kubernetes-version=v1.23.5
```

Install ingress controller on the cluster:

```shell
minikube addons enable ingress
```

Expose ingress port using minikube tunnel:

```shell
sudo minikube tunnel
```

</TabItem>

<TabItem value="aws">
</TabItem>
<TabItem value="azure">
</TabItem>
<TabItem value="aliyun">
</TabItem>
<TabItem value="tencent">

Install ingress controller on the cluster:

```shell
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml
```

Make sure ingress controller is ready:

```shell
kubectl wait --namespace ingress-nginx --for=condition=ready pod --selector=app.kubernetes.io/component=controller --timeout=90s
```

</TabItem>

</Tabs>

## 3. Install Heighliner dependencies

hln provides a command to install dependent tools and services:

```shell
hln init
```

This command will install the following tools and services:

- _dagger_, _nhctl_, _terraform_ CLI tools under ~/.hln/bin/
- _heighliner_ namespace
- _buildkit_ deployment and service on Kubernetes cluster

## 4. Create Github Token

Create a [GitHub personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with these scopes selected:
`repo`, `workflow`, `write:packages`, `delete:packages`, `admin:org`, `user`, `delete_repo`.

<div
  style={{
    maxWidth: 700,
    height: 'auto',
    marginBottom: 30,
    marginTop: 30,
  }}
>
<img src={useBaseUrl('/img/docs/github_token_perm.png')} />
</div>

Then set the token as _GITHUB_TOKEN_ environment variable:

```shell
export GITHUB_TOKEN=<your-fresh-token>
```
