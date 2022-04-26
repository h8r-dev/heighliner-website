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

Then create a cluster (we recommend using 8 cores and 16Gb mem):

```shell
minikube start --cpus=8 --memory=16384 --kubernetes-version=v1.23.5
```

Install ingress controller on the cluster:

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

Install ingress controller on the cluster:

```shell
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml
```

</TabItem>

</Tabs>

Check if the cluster is ready:

```shell
kubectl version
```

Output:

```shell
Client Version: version.Info{Major:"1", Minor:"23", GitVersion:"v1.23.4", GitCommit:"e6c093d87ea4cbb530a7b2ae91e54c0842d8308a", GitTreeState:"clean", BuildDate:"2022-02-16T12:30:48Z", GoVersion:"go1.17.6", Compiler:"gc", Platform:"darwin/amd64"}
Server Version: version.Info{Major:"1", Minor:"23", GitVersion:"v1.23.5", GitCommit:"c285e781331a3785a7f436042c65c5641ce8a9e9", GitTreeState:"clean", BuildDate:"2022-03-24T22:10:16Z", GoVersion:"go1.17.8", Compiler:"gc", Platform:"linux/arm64"}
```

## 3. Install Buildkit Service

Save the following as `buildkit.yaml`:

```yaml
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
          image: moby/buildkit:v0.10.1
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
```

Create the Buildkit service:

```shell
kubectl create -f buildkit.yaml
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
