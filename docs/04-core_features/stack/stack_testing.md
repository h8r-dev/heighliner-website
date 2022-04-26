---
title: Stack Testing
sidebar_position: 2
---

Stack testing is based on [ginkgo framework](https://onsi.github.io/ginkgo/).
Each test is an e2e test that verifies the given stack is running correctly.

## Test Folder In Stack

Each stack has a `test/` folder that contains the testing code to verify the current stack.
You can take a look at [gin-vue test](https://github.com/h8r-dev/stacks/tree/main/gin-vue/test) to learn more details of how to test.

### Pre-requisites

Install ginkgo:

```shell
go install -mod=mod github.com/onsi/ginkgo/v2/ginkgo
go get github.com/onsi/gomega/...
```

This fetches Ginkgo and installs the ginkgo executable under `$GOBIN` - you'll want that on your `$PATH`. It also fetches the core Gomega matcher library and its set of supporting libraries.

Install hln by following [the previous instructions](/docs/getting_started/installation).

## Set up the environment variables

Before running the tests, you need to run the stack, which requires some arguments passed by environment variables.
For example, if you are tesing gin-vue stack, according to `client.filesystem.env` in the stack, you should set:

```shell
export KUBECONFIG=~/.kube/config
export APP_NAME=test-app
export ORGANIZATION=<your-github-org>
export GITHUB_TOKEN=<your-github-token>
```

## Run

Then you can run the stack:

```shell
cd $STACK_DIR # Go to the gin-vue stack directory
hln up
```

Then run the e2e tests:

```shell
cd test/ # Go to the test directory
ginkgo
```

Clean up your app

```shell
cd .. # Go to the gin-vue stack directory
hln down
```
