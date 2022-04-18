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
defaultValue="container"
values={[
{label: 'Container', value: 'container'},
{label: 'Binary', value: 'binary'},
]}>

<TabItem value="container">

You can run buildkit as a container using Docker.

Connect to remote machine:

```shell
ssh $USER@$REMOTE_IP
```

Start the buildkitd container:

```shell
docker run -d --name hln-buildkitd --privileged --network=host docker.io/moby/buildkit:latest
```

Make sure your buildkitd container is running:

```shell
$ docker ps
CONTAINER ID   IMAGE                   COMMAND       CREATED          STATUS          PORTS     NAMES
ba8ed1984dfc   moby/buildkit:latest    "buildkitd"   44 minutes ago   Up 44 minutes             hln-buildkitd
```

In **local** machine, set envs:

```shell
export DOCKER_HOST=ssh://$USER@$REMOTE_IP
export BUILDKIT_HOST=docker-container://hln-buildkitd
```

</TabItem>

<TabItem value="binary">

You can run buildkit binary directly.

Connect to remote machine with root user:

```shell
ssh root@$REMOTE_IP
```

Download the latest version of [Buildkit](https://github.com/moby/buildkit/releases) and extract it.

```shell
nohup ./bin/buildkitd --addr tcp://127.0.0.1:1234 > ~/buildkit.log 2>&1 &
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
