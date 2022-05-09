---
title: How to Create A New Stack
sidebar_position: 3
---

We will create a `spring-vue` stack clone in this tutorial.

## Clone stacks repo

Clone the stacks repo and create `spring-vue2` folder:

```shell
git clone https://github.com/h8r-dev/stacks.git
export STACKS_REPO=$PWD/stacks
cd stacks/official-stack
mkdir -p spring-vue2
```

## Create spring boot project

Create a new spring boot project.
You can use [IDEA](https://www.jetbrains.com/help/idea/spring-boot.html) or [start.spring.io](https://start.spring.io/) to generate a new Spring project.

## Create new framework and copy template files

create new spring framework

```shell
mkdir $STACKS_REPO/chain/components/framework/spring2
mkdir $STACKS_REPO/chain/components/framework/spring2/template

cp -r <your spring boot project> $STACKS_REPO/chain/components/framework/spring2/template/
```

## Create Spring module

Save the following CUE file as `$STACKS_REPO/chain/components/framework/spring2/input.cue`:

```cue
package spring2

import (
  "universe.dagger.io/docker"
)

#Input: {
  name:  string // application name
  image: docker.#Image
}
```

Save the following CUE file as `$STACKS_REPO/chain/components/framework/spring2/output.cue`:

```cue
package spring2

import (
  "universe.dagger.io/docker"
)

#Output: {
  image:   docker.#Image
  success: bool | *true
}
```

Save the following CUE file as `$STACKS_REPO/chain/components/framework/spring2/spring.cue`:

```cue
package spring2

import (
  "universe.dagger.io/docker"
  "dagger.io/dagger/core"
)

#Instance: {
  input: #Input
  _file: core.#Source & {
    path: "template" // the spring boot scaffold
  }
  do: docker.#Copy & {
    "input":  input.image
    contents: _file.output
    dest:     "/scaffold/\(input.name)"
  }
  output: #Output & {
    image: do.output
  }
}
```

## Create a new stack

create spring-vue2 stack

```shell
mkdir $STACKS_REPO/official-stack/spring-vue2
```

Save the following file as `$STACKS_REPO/official-stack/spring-vue2/cue.mods`:

```go
module github.com/h8r-dev/stacks/offcial-stacks/spring-vue

cue 0.4.0

require (
  github.com/h8r-dev/stacks/chain v0.0.0
)

replace github.com/h8r-dev/stacks/chain => ../../chain
```

Save the following file as `$STACKS_REPO/official-stack/spring-vue2/schemas/schema.yaml`:

```yaml
parameters:
  - title: kubeConfig
    description: Path to your kubeconfig file
    key: KUBECONFIG
    type: "path"
    default: ~/.kube/config
    required: true
  - title: githubToken
    description: Your github access token
    key: GITHUB_TOKEN
    type: "secret"
    required: true
  - title: organization
    description: Which github organization do you want to use(Can be set as personal github id)?
    key: ORGANIZATION
    required: true
```

Save the following file as `$STACKS_REPO/official-stack/spring-vue2/plans/plan.cue`:

```cue
package main

dagger.#Plan & {
  client: {
    ...
  }

  actions: {
    ...
    _scaffold: scaffoldfactory.#Instance & {
      input: scaffoldfactory.#Input & {
        scm:                 "github"
        organization:        client.env.ORGANIZATION
        personalAccessToken: client.env.GITHUB_TOKEN
        repository: [
          // this is vue project
          {
            name:      client.env.APP_NAME + "-frontend"
            type:      "frontend"
            framework: "vue"
            ci:        "github"
            registry:  "github"
          },
          // this is spring boot project
          {
            name:      client.env.APP_NAME + "-backend"
            type:      "backend"
            framework: "spring"
            ci:        "github"
            registry:  "github"
            deployTemplate: {
              helmStarter: "spring-boot"
            }
          },
          // this is helm repo
          {
            name:      client.env.APP_NAME + "-deploy"
            type:      "deploy"
            framework: "helm"
          },
        ]
        addons: [
          // if you want to use other addons, add them here
          ...
        ]
      }
    }

    _git: scmfactory.#Instance & {
      ...
    }

    up: {
      ...
    }
  }
}
```

Vendor dependencies:

```shell
cd $STACKS_REPO
# This will install all dependencies for each stack under the official-stack folder
make vendor
```

That's it！Now you have a spring-vue2 stack.

## Run your stack

Follow [installation guide](/docs/getting_started/installation) to install the tools and cluster.

Then run your stack:

```shell
hln up -i --dir $STACKS_REPO/official-stack/spring-vue2
```
