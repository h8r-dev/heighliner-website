---
title: Set Domain Routing
sidebar_position: 4
---

To be enable to access all applications deployed in Kubernetes cluster by Heighliner,
you will have to set domain routing for those applications.

This guide will cover configs for both local and cloud Kubernetes clusters.

## For Local Kubernetes Cluster

### Kind

- If you are using default `h8r.site` domain, there is nothing to do, you can skip and begin visiting you applications.

- If you are using your own domain, append the following lines to your `/etc/hosts` file:

    ```txt
      127.0.0.1 hello-world-app.<your-domain>
      127.0.0.1 argocd.<your-domain>
      127.0.0.1 grafana.<your-domain>
      127.0.0.1 prometheus.<your-domain>
      127.0.0.1 alert.<your-domain>
    ```

## For Cloud Kubernetes Cluster

You can only access your applications from an ingress IP address, which you can get by copying and running below command:

```shell
kubectl -n ingress-nginx get svc ingress-nginx-controller -o=jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

Then you get the ingress ip, you can set domain routing as below:

- If you are using `h8r.site`, append following lines to your `/etc/hosts` file (replace <ingress-ip\> with your ingress ip):

  ```txt
  <ingress-ip> hello-world-app.h8r.site
  <ingress-ip> argocd.h8r.site
  <ingress-ip> grafana.h8r.site
  <ingress-ip> prometheus.h8r.site
  <ingress-ip> alert.h8r.site
  ```

- If you are using your own domain name, set your domain DNS record to the above ingress IP.
