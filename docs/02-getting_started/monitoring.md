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

<!-- Go to [Requestbin](https://requestbin.com/) and create a Request Bin. It's a webhook which we can send our alerts to.

![requebin](/img/docs/getting-started/requestbin-url.png)

Copy it's url `https://eomgiarz3c3oyab.m.pipedream.net` and go back to the grafana dashboard, select the Alerting tab (Bell icon) at the left hand side. Click Contact points > New contact point in turn. Take a name like My Request Bin. Select Contact point type as Webhook, paste the url of the request bin we have copied.

![contact-point](/img/docs/getting-started/contact-point.png)

Then click Test button to send a predefined notification. Go to your request bin page and check that you have received the test message. Then you can Save the contact point. Go to Notification policies, create a new policy. Set matching labels as alertname = remix-app-alert select request bin as contact point.

Now every thing is done. Your application's alert messages will be sent to the request bin. -->

Go to the grafana dashboard, select the Alerting tab (Bell icon) at the left hand side. In alert rules, find the alert rule group called hln-alerts. It has one rule called remix-app-alert.

![remix-app-alert](/img/docs/getting-started/remix-app-alert.png)

You can visit your application's [error](http://hello-world.h8r.site/error) page to make a 500 error intentionally, which will trigger the alert rule created by hln stack.

![remix-error](/img/docs/getting-started/remix-app-error.png)

Wait a minute and go back to the alert rules page. Refresh it and you will find the remix-app-alert rule is firing now.

![remix-error](/img/docs/getting-started/remix-app-alert-firing.png)

Congrats. You have finished exploring the monitoring section.
