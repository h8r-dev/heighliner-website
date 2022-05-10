---
title: Stack Format
sidebar_position: 1
---

A stack follows specific format to interact with Heighliner platform.
You can take a look at the [stacks repo](https://github.com/h8r-dev/stacks/) to see how it works.
In the following we will explain the format in details.

## metadata.yaml

This file defines the metadata of the stack. It contains the following information:

| Field | Description |
| --- | ----------- |
| name | The name of the current stack |
| version | The version of the current stack |
| owner.name | The name of the owner of the current stack |
| owner.contact | The contact information of the owner of the current stack |
| description | A brief description of the current stack |
| tags | A list of tags to index and search the stack |

## schemas/

This directory contains the schemas exposed to users. It can be used to render input forms and validate user inputs.

Here is an example:

```yaml
parameters:
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

## plans/

This directory contains the execution plans.
hln will run the `up` action against this folder.

## test/

This directory contains the testing code to verify the current stack.
See [this guide](/docs/core_features/stack/stack_testing) for more details.

## cue.mods

This file defines the cue modules that it depends on.
Heighliner will automatically fetch the CUE modules before executing the plans.
