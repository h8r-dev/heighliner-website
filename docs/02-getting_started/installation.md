---
title: Installation
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

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
    poster="/img/docs/getting-started/quickstart-poster.jpeg"
    src="https://dl.h8r.io/heighliner-quickstart-english.mp4"
  ></Video>
</div>

## Step 1. Install hln CLI

<Tabs>
  <TabItem value="macos" label="MacOS" default>

Install `hln` with [HomeBrew](https://brew.sh):

```bash
brew install h8r-dev/tap/heighliner
hln version
```

Or use the install script:

```bash
curl -L https://dl.h8r.io/hln/install.sh | sh
./bin/hln version
sudo mv bin/hln /usr/local/bin/hln
```

Or download binaries: [GitHub Release](https://github.com/h8r-dev/heighliner/releases)

  </TabItem>
  <TabItem value="linux" label="Linux">

Use the install script:

```bash
curl -L https://dl.h8r.io/hln/install.sh | sh
./bin/hln version
sudo mv bin/hln /usr/local/bin/hln
```

Or download binaries: [GitHub Release](https://github.com/h8r-dev/heighliner/releases)

  </TabItem>
</Tabs>

## Step 2. Install Kubernetes

Install the following Kubernetes tools:

1. Install _kubectl_ by following [the Kubernetes documentation](https://kubernetes.io/docs/tasks/tools/).
2. Install _kind_ (v0.12.0+) command-line tool by following [the kind installation guide](https://kind.sigs.k8s.io/docs/user/quick-start/#installation)
3. Install _Docker Desktop_ (v4.5.0+) or _Docker_ by following [the docker installation guide](https://docs.docker.com/desktop/#download-and-install)

Then choose one of the following methods to install a Kubernetes cluster:

<Tabs
className="unique-tabs"
defaultValue="kind"
values={[
{label: 'Kind', value: 'kind'},
{label: 'Cloud', value: 'cloud'},
]}>

<TabItem value="kind">

(Optional) We recommend setting Docker Resources to 4 cores and 8Gb mem:
<details>
  <summary>Docker Desktop Settings</summary>
  <div
    style={{
      maxWidth: 1000,
      height: 'auto',
      marginBottom: 30,
      marginTop: 30,
    }}
  >
    <img src={useBaseUrl('/img/docs/docker_resources.png')} />
  </div>
</details>

Save the following configuration as `kind.yaml`:

```yaml title="kind.yaml"
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

Create a kind cluster from the config and install ingress controller:

<Tabs>
  <TabItem value="int" label="International" default>

```shell
kind create cluster --image=kindest/node:v1.23.5 --config=kind.yaml
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
```

  </TabItem>
  <TabItem value="china" label="China">

```shell
kind create cluster --image=kindest/node:v1.23.5 --config=kind.yaml
kubectl apply -f https://raw.githubusercontent.com/h8r-dev/stacks/main/scripts/internal/ingress-nginx/deploy.yaml
```

  </TabItem>
</Tabs>

</TabItem>

<TabItem value="cloud">

You can also choose one of the following cloud providers for hosted k8s services:

- [AWS EKS](https://aws.amazon.com/eks/)
- [Azure AKS](https://azure.microsoft.com/en-us/services/kubernetes-service/#overview)
- [Google GKE](https://cloud.google.com/kubernetes-engine)
- [Alibaba ACK](https://www.aliyun.com/product/kubernetes)
- [Tencent TKE](https://cloud.tencent.com/product/tke)
- [DigitalOcean Kubernetes](https://www.digitalocean.com/products/kubernetes)

Once a cluster is created, you can check if the ingress controller is installed by running the following command:

```shell
kubectl wait --namespace ingress-nginx --for=condition=ready pod --selector=app.kubernetes.io/component=controller --timeout=90s
```

If it is OK, the output should look like:

```shell
pod/ingress-nginx-controller-55c69f5f55-vzcqp condition met
```

If it is not, you can install it by running the following command:

```shell
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml
```

For more info about installing the ingress controller, see [the ingress-nginx installation guide](https://kubernetes.github.io/ingress-nginx/deploy/).

</TabItem>

</Tabs>

## Step 3. Install Heighliner dependencies

```shell
hln init
```

If it is successful, it should output:

```shell
...
Waiting buildkitd to be ready...
buildkitd is ready!
```

## Step 4. Create GitHub Token

Create a [GitHub personal access token](https://github.com/settings/tokens) with these scopes selected:
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
