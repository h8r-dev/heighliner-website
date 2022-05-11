---
title: Stack Testing
sidebar_position: 2
---

Stack testing is based on [ginkgo framework](https://onsi.github.io/ginkgo/).
Each test is an e2e test that verifies the given stack is running correctly.

Each stack has a `test/` folder that contains the testing code to verify the current stack.
You can take a look at [sample stack](https://github.com/h8r-dev/stacks/tree/main/official-stack/sample) to see the code in details.

## Install ginkgo

Install ginkgo:

```shell
go install -mod=mod github.com/onsi/ginkgo/v2/ginkgo
go get github.com/onsi/gomega/...
```

This fetches Ginkgo and installs the ginkgo executable under `$GOBIN` - you'll want that on your `$PATH`. It also fetches the core Gomega matcher library and its set of supporting libraries.

## Install hln

Install hln by following [the previous instructions](/docs/getting_started/installation).

## Setup repo

In this example, we will use the stacks repo:

```shell
git clone https://github.com/h8r-dev/stacks.git
export STACK_REPO=$PWD/stacks
```

## Set up the environment variables

Before testing the stack, you need to specify the inputs for the stack.
For example, if you are tesing sample stack, you should set the following environment variables:

```shell
export KUBECONFIG=~/.kube/config
export APP_NAME=test-app
export ORGANIZATION=<your-github-org>
export GITHUB_TOKEN=<your-github-token>
```

## Run

First create an appl from the stack:

```shell
cd $STACK_REPO/official-stack/sample
hln up my-app
```

Then run the e2e tests:

```shell
cd test/ # Go to the test directory
ginkgo
```

Clean up your app

```shell
cd .. # Go to the gin-vue stack directory
hln down my-app
```
