---
title: BuildKit
---

## BuildKit In Heighliner

Heighliner uses Dagger which uses BuildKit to run concurrent, cache-efficient DAG workflow.

## Use BuildKit Via Local Docker

If you have Docker installed in your local machine, then `hln` CLI will use it by default.

## Use Remote BuildKit

If you don't want to run BuildKit locally, then you can use remote BuildKit instead.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
className="unique-tabs"
defaultValue="kubernetes"
values={[
{label: 'Kubernetes', value: 'kubernetes'},
{label: 'Binary', value: 'binary'},
]}>

<TabItem value="kubernetes">

You can run buildkit as a pod.  

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

Forward local port `1234` to buildkitd:

```shell
kubectl port-forward service/buildkitd 1234:1234
```

Set env:

```shell
export BUILDKIT_HOST=tcp://127.0.0.1:1234
```

</TabItem>

<TabItem value="binary">

You can run buildkit binary directly.

Connect to remote machine as **root** user:

```shell
ssh root@$REMOTE_IP
```

Download the latest version of [Buildkit](https://github.com/moby/buildkit/releases):

```shell
# This is just an example for linux
wget https://github.com/moby/buildkit/releases/download/v0.10.1/buildkit-v0.10.1.linux-amd64.tar.gz
tar zxvf buildkit-v0.10.1.linux-amd64.tar.gz
export PATH="$PWD/bin/:$PATH"
```

Start buildkitd in the background:

```shell
nohup buildkitd --addr tcp://127.0.0.1:1234 > ~/buildkit.log 2>&1 &
```

Make sure your buildkitd is running.

```shell
# ps -aux | grep buildkitd
root       22953  1.3  0.5 739188 42940 pts/1    Sl   17:03   0:00 ./bin/buildkitd --addr tcp://127.0.0.1:1234
root       23000  0.0  0.0   6432   736 pts/1    S+   17:03   0:00 grep --color=auto buildkitd
```

In **local** machine, start a SSH tunnel to remote machine:

```shell
ssh -L 1235:127.0.0.1:1234 $USER@$REMOTE_IP -N
```

Set env:

```shell
export BUILDKIT_HOST=tcp://127.0.0.1:1235
```

</TabItem>

</Tabs>

Then `hln` will talk to the remote BuildKit instead of local Docker daemon whenever you use `hln` features.

Refer to [Dagger Customizing Buildkit documentation](https://docs.dagger.io/1223/custom-buildkit/) for more details.
