---
title: How to Create A New Stack
sidebar_position: 3
---

## Starter Stack

Clone the stacks repo and use the sample stack as a starter:

```shell
git clone https://github.com/h8r-dev/stacks.git
cp -r stacks/sample my-stack
cd my-stack/
```

## Define Actions

Under `plans/` folder, define actions ([example](https://github.com/h8r-dev/stacks/blob/main/gin-vue/plans/plan.cue)) to setup your environment:

```cue
dagger.#Plan & {
  client: {
    filesystem: {
      // ...
    }
    env: {
      // ...
    }
  }
  actions: {
    deps: docker.#Build & {
      // ...
    }
    test: bash.#Run & {
      // ...
    }
    build: {
      run: bash.#Run & {
         // ...
      }
      contents: core.#Subdir & {
        // ...
      }
    }
    deploy: netlify.#Deploy & {
      // ...
    }
  }
}
```

Refer to [Core Actions](https://docs.dagger.io/1222/core-actions-reference/) and [CUE libraries](https://github.com/h8r-dev/stacks/tree/main/cuelib) for more information.

## Define Inputs

Under `schemas/` folder, define input schema ([example](https://github.com/h8r-dev/stacks/blob/main/gin-vue/schemas/schema.yaml)) to interact with users.

Create a file first:

```shell
touch schema.yaml
```

Then, add the schema to the file:

```yaml
parameters:
  - title: application name
    description: Name of your application
    key: APP_NAME
    default: gin-vue
    required: true
  - title: kubeconfig
    description: Path to your kubeconfig file
    key: KUBECONFIG
    type: "path"
    default: ~/.kube/config
    required: true
  - title: github personal access token
    description: Your github access token
    key: GITHUB_TOKEN
    type: "secret"
    required: true
```

## Run It Using hln

After you have created your stack, run it using hln:

```shell
hln up -i --dir my-stack/
```

Input any values that you want to pass to your stack.
