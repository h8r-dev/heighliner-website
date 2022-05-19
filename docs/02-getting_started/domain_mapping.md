---
title: Domain Mapping
sidebar_position: 9
---

By default `h8r.site` will resolve to `127.0.0.1` which is the kind cluster's ingress IP.

If your domain is not `h8r.site`, run:

```shell
sudo hln domain-mapping <app-name> --domain=<your-domain>
```

If your ingress IP is not `127.0.0.1`, run:

```shell
sudo hln domain-mapping <app-name> --ip=<your-ingress-ip>
```

If you own your custom domain and have a public ingress IP, just point your domain to that IP.
