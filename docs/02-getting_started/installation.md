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

## 2. Install Kubernetes

Install _kubectl_ first by following the [instructions](https://kubernetes.io/docs/tasks/tools/).

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

Follow [kind installation guide](https://kind.sigs.k8s.io/docs/user/quick-start/#installation) to install `kind` command-line tool.

Then spins up a kind cluster:

```shell
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

Install ingress controller to enable ingress routing:

```shell
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/kind/deploy.yaml
```

</TabItem>

<TabItem value="minikube">

Follow the minikube [installation guide](https://minikube.sigs.k8s.io/docs/start/).

Then spins up a minikube cluster

```shell
minikube start
```

Install ingress controller to enable ingress routing:

```shell
minikube addons enable ingress
```

</TabItem>

<TabItem value="aws">
</TabItem>
<TabItem value="azure">
</TabItem>
<TabItem value="aliyun">
</TabItem>
<TabItem value="tencent">
</TabItem>

</Tabs>

Check if the cluster is ready:

```shell
kubectl version
```

Output:

```shell
Client Version: version.Info{Major:"1", Minor:"23", GitVersion:"v1.23.4", GitCommit:"e6c093d87ea4cbb530a7b2ae91e54c0842d8308a", GitTreeState:"clean", BuildDate:"2022-02-16T12:30:48Z", GoVersion:"go1.17.6", Compiler:"gc", Platform:"darwin/amd64"}
Server Version: version.Info{Major:"1", Minor:"22", GitVersion:"v1.22.6", GitCommit:"f59f5c2fda36e4036b49ec027e556a15456108f0", GitTreeState:"clean", BuildDate:"2022-01-19T17:26:47Z", GoVersion:"go1.16.12", Compiler:"gc", Platform:"linux/amd64"}
```

## 3. Install Buildkit Service

Create buildkitd deployment:  

```shell
cat <<EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: buildkitd
  name: buildkitd
spec:
  replicas: 1
  selector:
    matchLabels:
      app: buildkitd
  template:
    metadata:
      labels:
        app: buildkitd
    spec:
      containers:
        - name: buildkitd
          image: moby/buildkit:master
          args:
            - --addr
            - unix:///run/buildkit/buildkitd.sock
            - --addr
            - tcp://0.0.0.0:1234
          readinessProbe:
            exec:
              command:
                - buildctl
                - debug
                - workers
            initialDelaySeconds: 5
            periodSeconds: 30
          livenessProbe:
            exec:
              command:
                - buildctl
                - debug
                - workers
            initialDelaySeconds: 5
            periodSeconds: 30
          securityContext:
            privileged: true
          ports:
            - containerPort: 1234
---
apiVersion: v1
kind: Service
metadata:
  labels:
    app: buildkitd
  name: buildkitd
spec:
  ports:
    - port: 1234
      protocol: TCP
  selector:
    app: buildkitd
EOF
```

Make sure the buildkitd is running:

```shell
kubectl get deployment buildkitd
```

Output:

```shell
NAME        READY   UP-TO-DATE   AVAILABLE   AGE
buildkitd   1/1     1            1           4m26s
```

## 4. Create Github Token

Create a [GitHub personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with these scopes selected:
`repo`, `workflow`, `write:packages`, `delete:packages`, `admin:org`, `user`, `delete_repo`.

import useBaseUrl from '@docusaurus/useBaseUrl';

<div
  style={{
    maxWidth: 700,
    height: 'auto',
    marginBottom: 100,
    marginTop: 0,
  }}
>
<img src={useBaseUrl('/img/docs/github_token_perm.png')} />
</div>
