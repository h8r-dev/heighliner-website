---
title: Monitoring
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Metrics of your application

Once your hello-world application is ready, use the following command to get application monitoring information:

```
hln metrics hello-world
```

And the output looks like this:

```
Use this cridential to login the monitoring dashboards of hello-world:
  Username: admin
  Password: prom-operator

Application hello-world has 1 available dashboard(s):
NAME                       URL
Remix Application Metrics  http://grafana.h8r.site/d/AA_8_pu7k/remix-application-metrics
```

## See the dashboards

Open the link of grafana [dashboard](http://grafana.h8r.site/d/AA_8_pu7k/remix-application-metrics) in your favorite browser and login with the cridentials printed above.

![remix-dashboard](/img/docs/getting-started/remix-dashboard.png)

This graph shows how many times your application has been visited. Now go to your [hello-world](http://hello-world.h8r.site) application's homepage and refresh a lot of times to make some requests. Then go back to dashboard page, wait a minute and refresh it. You will see the steep slope in your dashboard, which is caused by the requests we just made.

![remix-dashboard](/img/docs/getting-started/remix-dashboard-bend.png)

## Trigger an alert

Go to [Requestbin](https://requestbin.com/) and create a Request Bin. It's a webhook which we can send our alerts to.

![requebin](/img/docs/getting-started/requestbin-url.png)

Make a file with the name `amcfg.yaml`, paste the following content into that file.

```yaml title="amcfg.yaml"
apiVersion: monitoring.coreos.com/v1alpha1
kind: AlertmanagerConfig
metadata:
  name: hln-config
  labels:
    alertmanagerConfig: hln
spec:
  route:
    receiver: 'hln-receiver'
  receivers:
  - name: 'hln-receiver'
    webhookConfigs:
    - url: <your_reuqestbin_url>
```

Switch the placeholder `<your_requestbin_url>` with the real url of your requestbin and run the following command:

```
kubectl apply -f amcfg.yaml
```

Now the requestbin is the notifications' receiver. We can trigger the alert and alertmanager will send notifications automatically. You can visit your application's [error](http://hello-world.h8r.site/error) page to make a 500 error intentionally, which will trigger the alert rule created by hln stack.

![remix-error](/img/docs/getting-started/remix-app-error.png)

Wait a minute and go back to your requestbin dashboard. You will receive a notification that the alert rule has been triggered.

![alert-notifications](/img/docs/getting-started/alert-notifications.png)

Congrats. You have finished exploring the monitoring section.
