---
title: State Management
sidebar_position: 1
---

Heighliner maintains specific application state in a storage backend (e.g. K8s ConfigMap).
The state contains necessary information for the lifecycle management of the application, e.g. K8s resources and Terraform state.
With such information we can provide features like health checking, getting the logs and metrics, deleting the application resources.

## ConfigMap backend

In this section we will explain how the ConfigMap backend works.

### Where is the state stored for an app?

Heighliner application state will be stored in a configmap of the `heighliner` namespace.
The name of configmap is the same as the name of application.
All configmaps storing state will be tagged a label `heighliner.dev/config-type=heighliner`.

### How does hln work with the state?

- When running `hln up` to deploy a heighliner application, information about the application, namely state, will be saved to a configmap of K8s cluster.
- When running `hln status`, hln will present the state in a human-readable form.
- When running `hln down`, hln will use information provided by the state to delete the application resources.
