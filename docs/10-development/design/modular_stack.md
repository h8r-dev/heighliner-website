---
title: Modular, Declarative Stack Design
---

## Problem

Currently, each stack is written as a Dagger Plan

```cue
dagger.#Plan & {
  client: {
    filesystem: {
      "...": read: contents: dagger.#FS
      "...": write: contents: actions.up.outputYaml.output
    }
    commands: kubeconfig: {
      name: "cat"
      args: ["\(env.KUBECONFIG)"]
      stdout: dagger.#Secret
    }
    env: {
      KUBECONFIG:   string
      ...
    }
  }

  actions: {
    up: {
      outputYaml: output: string
      
      installIngress: {...}

      installNocalhost: {
        ingressIP: installIngress.output.IP
      }
      ...
    }
  }
}
```

The problem with this design is that it is hard to compose Stacks.
For example, I want to compose two Stacks, one is deploying serverless apps and
another is installing middleware software like nginx, into one stack.
Currently there is no way to put two Dagger plans into one Dagger plan.

## Proposal

To make composition of Stacks, we need to redesign a Stack to be a module.
We can run a Stack module using `hln`, and a Stack can import other Stacks as modules.

Here is what a Stack module would look like:

```cue
input: {
  env: {
    KUBECONFIG: string
  }
  commands: {
    kubeconfig: {
      name: "cat"
      args: ["\(env.KUBECONFIG)"]
      stdout: h8r.#Secret
    }
  }
  files: {
    "...": read: contents: h8r.#FS
    "...": write: contents: actions.up.outputYaml.output
  }

  // This is the fields that we will read directly from `app.yaml`
  config: {
    image: string
    deploy: {
      cmd: [...string]
      port: int
    }
  }
}

output: {
  // This is the fields that we will write to `.hln/output.yaml`
  local: {
    ingressIP: string
    ingressPort: int
    ingressHost: string
    ingressURL: string
  }
}

up: {
  installIngress: {
    name: input.config.name
  }
  installNocalhost: {
    ingressIP: installIngress.IP
  }
}
```

Basically, a stack is a module that has `input` and `output`, and does a bunch of stuff under the hood.

### How does it work to run a Stack

When we run `hln up` for a stack, it basically renders it into a Dagger Plan.
The `input` and `output` will be rendered into `client` sections,
and `up` will be rendered into `actions` sections.

A special case is that we can keep `input.config` as is and fill it with fields from `app.yaml`.

### Reusing Stacks

Let's say you have two stacks with the above format, called `serverlessapp` and `middleware`.
You can compose them in the following way:

```cue
import (
  "serverlessapp"
  "middleware"
)

input: {
  serverlessapp.input
  middleware.input
}

output: {
  url: up.installServerlessApp.output.url
}


up: {
  installMiddleware: middleware.up
  installServerlessApp: {
    wait: installMiddleware.output.ready
    up: serverlessapp.up
    output: {
      url: up.output.url
    }
  }
}

```

When we run `hln up` for this plan, only the above plan will be rendered to a Dagger plan.
Both `serverlessapp` and `middleware` will be served as modules.
