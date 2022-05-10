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

### How does hln work with the state?
