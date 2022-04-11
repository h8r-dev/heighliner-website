---
title: BuildKit
---

## BuildKit In Heighliner

Heighliner uses Dagger which uses BuildKit to run concurrent, cache-efficient DAG workflow.

## Use BuildKit Via Local Docker

If you have Docker installed in your local machine, then `hln` CLI will use it by default.

## Use Remote BuildKit

If you don't want to run BuildKit locally, then try the follow steps to use remote BuildKit.

Start buildkit in remote machine:

```shell
ssh root@$REMOTE_IP
nohup buildkitd --addr tcp://127.0.0.1:1234 > ~/buildkit.log 2>&1 &
```

In local machine, start a SSH tunnel to remote machine:

```shell
ssh -L 1235:127.0.0.1:1234 $USER@$REMOTE_IP -N
```

Set env:

```shell
export BUILDKIT_HOST=tcp://127.0.0.1:1235
```

Then you can use `hln` and `dagger` as usual.
