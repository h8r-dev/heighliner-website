---
title: Core Concepts
sidebar_position: 2
---

For users of Heighliner, there are certain concepts which are central to its design and functionality.
We will explain these core concepts in the following.

## Stack

A stack is a collection of execution plans to one-command setup the development environment.
The plan is written as a [CUE](https://cuelang.org/) program.
The benefits of CUE is that it is a declarative language and expose high level APIs to abstract away the underlying implementation.

A stack comes with inputs/outputs interfaces to interact with.
For example, you can specify your own GitHub token, kubeconfig, etc.
After you specify the input and execute the plan, it will produce outputs like the public DNS name of your app.

Here's an example:

```cue
package github

import (
  "dagger.io/dagger"
  "universe.dagger.io/bash"
  "universe.dagger.io/docker"
  "dagger.io/dagger/core"
  "strings"
)

#Instance: {
  input: #Input

  _file: core.#Source & {
    path: "terraform"
  }

  _copy: docker.#Copy & {
    "input":  input.image
    contents: _file.output
    dest:     "/terraform"
  }

  src: core.#Source & {
    path: "."
  }

  do: bash.#Run & {
    env: {
      GITHUB_TOKEN:        input.personalAccessToken
      GITHUB_ORGANIZATION: input.organization
      VISIBILITY:          input.visibility
      // for terraform
      TF_VAR_github_token:  input.personalAccessToken
      TF_VAR_organization:  input.organization
      TF_VAR_namespace:     "default"
      TF_VAR_secret_suffix: strings.ToLower(input.organization)
    }
    // for terraform backend
    mounts: kubeconfig: {
      dest:     "/kubeconfig"
      contents: input.kubeconfig
    }
    always:  true
    "input": _copy.output
    workdir: "/scaffold"
    script: {
      directory: src.output
      filename:  "create-github-repo.sh"
    }
  }
  output: #Output & {
    image: do.output
  }
}

#Input: {
  organization:        string
  personalAccessToken: dagger.#Secret
  image:               docker.#Image
  visibility:          string
  kubeconfig:          dagger.#Secret
}

#Output: {
  image:   docker.#Image
  success: bool | *true
}
```

For users, you can choose a specific stack (e.g. Go-Gin, Spring, Remix), and Heighliner will orchestrate the environment setup.
It will automatically optimize for your apps with cloud native best practice.

For more details and examples, please refer to the [Stack page](/docs/core_features/stack/).

## Application

An application is a collection of services, secrets, and resources that are instantiated by a stack.
It includes things like Github repos, CI/CD pipelines, deployments, ingress routing, monitoring dashboards, middlewares, etc.
These are all encoded in stacks and orchestrated by Heighliner.

## Service

A service is a tightly-coupled component unit that serves for a single purpose.
For example, frontend service, backend service, database service, prometheus service, etc.

## Component

A component is a definition unit that defines a series of behaviors to achieve a single purpose.
For example, a spring framework component, a prometheus component.
It will be used to create a service.
