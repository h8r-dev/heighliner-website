---
title: Domain Mapping
sidebar_position: 9
---

By default `h8r.site` will resolve to `127.0.0.1` (ingress IP of the kind cluster).

If your ingress IP is not `127.0.0.1`, run:

```shell
sudo hln domain-mapping <app-name> --ip=<your-ingress-ip>
```

If you own your custom domain, just point your domain to your ingress IP.
