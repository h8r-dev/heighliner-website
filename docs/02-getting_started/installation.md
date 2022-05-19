---
title: Installation
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Step 1. Install hln CLI

<Tabs>
  <TabItem value="macos" label="MacOS" default>

[HomeBrew](https://brew.sh):

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

**Preconditions: **

1. Install _kubectl_ first by following [the Kubernetes documentation](https://kubernetes.io/docs/tasks/tools/).
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


:::tip
Ports 80 and 443 may not be exposed under ubuntu. Please change ports 80 and 443 and specify the port number when accessing the application URL.
:::

Create a kind cluster from the config and install ingress controller:

```shell
kind create cluster --image=kindest/node:v1.23.5 --config=kind.yaml
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
```

(Optional) If you can't access the Google Container Registry, create kind cluster and ingress-nginx using:

```shell
kind create cluster --image=kindest/node:v1.23.5 --config=kind.yaml
kubectl apply -f https://raw.githubusercontent.com/h8r-dev/stacks/main/scripts/internal/ingress-nginx/deploy.yaml
```

</TabItem>

<!-- <TabItem value="minikube">

Install _minikube_ command-line tool by following [the minikube installation guide](https://minikube.sigs.k8s.io/docs/start/).

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

Create a cluster and install ingress controller:

```shell
minikube start --cpus=4 --memory=8g --kubernetes-version=v1.23.5
minikube addons enable ingress
```

> If command returns: The "docker" driver should not be used with root privileges. You can add `--force` flag.

Expose ingress port using minikube tunnel:

```shell
sudo minikube tunnel
```

</TabItem> -->

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

hln provides a command to install dependent tools and services:

```shell
hln init
```

This command will install the following tools and resources:

- _dagger_, _nhctl_, _terraform_ CLI tools under ~/.hln/bin/
- _heighliner_ namespace
- _buildkit_ deployment and service on Kubernetes cluster

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
