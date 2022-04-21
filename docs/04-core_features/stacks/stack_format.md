---
title: Stack Format
sidebar_position: 2
---

A stack follows specific format to interact with Heighliner platform.
You can take a look at the [gin-vue stack](https://github.com/h8r-dev/stacks/tree/main/gin-vue) to see how it works.
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

## plans/

This directory contains the execution plans to setup the development environment. We will run `dagger` on this folder.

## test/

This directory contains the testing code to verify the current stack.
You can take a look at [gin-vue test](https://github.com/h8r-dev/stacks/tree/main/gin-vue/test) to learn more details of how to test.

## cue.mods

Each stack can be used as a CUE module for other stacks. You can compose stacks together to create a higher-level stack.
So each stack can define the CUE modules it depends on. Some can be other stacks, and others can be pure CUE libraries.
Heighliner will automatically fetch the CUE modules before executing the plans.
