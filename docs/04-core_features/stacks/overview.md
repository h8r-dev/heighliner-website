---
title: Overview
sidebar_position: 1
---

## What Is Stack?

Heighliner Stack is a collection of orchestrated plans to one-click setup the development environment. You can choose a specific language and framework (Go-Gin, Spring, React, etc) to write your app code. Then Heighliner Stack do the rest -- it will orchestrate the infrastructure setup which optimize for your apps with cloud native best practices.

## How Does Stack Work?

Under the hood, Heighliner Stack uses Dagger to orchestrate and execute infrastructure setup plans. Dagger is a distributed build system that can run concurrently, cache-efficient DAG workflow.

A stack comes with inputs/outputs interfaces to interact with users. For example, you can specify your own Github token, kubeconfig, cloud credentials. After a stack is used to setup the environment, it will provide outputs like the public DNS name of your app, monitoring dashboards, login credentials, etc.

## Available Stacks
