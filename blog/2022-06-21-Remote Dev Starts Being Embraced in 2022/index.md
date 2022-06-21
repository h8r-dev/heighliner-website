---
slug: Remote Dev Starts Being Embraced in 2022
title: Remote Dev Starts Being Embraced in 2022
authors: [hongchao-deng]
tags: [Heighliner, Cloud Native, Stack]
---


>本文的中文版发布在微信公众号，点击 [《2022，云上开发的新纪元》](https://mp.weixin.qq.com/s/wTYTjHM34DNKXFnVNjhQkg)即可阅读，期待您的订阅～

## Remote Dev Buzz on Social Media

A recent tweet from Kelsey Hightower once again made a lot of buzz on social media. His tweet underlined that the limitation of local resources and the complexity of external dependencies have made remote development trending.

![Kelsey Hightower](kh.png)

Short as the tweet is, it has great repercussions for the developer community. Hundreds of people followed up on Twitter complaining about local development.

![cq](corey.png)

Coincidentally, @swyx from Temporal also published [an article](https://dx.tips/the-end-of-localhost) recently about "The Death of Localhost".

![the death](the-death-of-localhost.png)

Why do all the tech leaders start to promote **remote development**? In this article we will analyze the history of such technology and what the future looks like.


## More Developer Tools Moving to Cloud

![moving](inner_loop_3.png)

Software development lifecycle (SDLC) is conventionally divided into two processes: the **inner loop** and the **outer loop**. The inner loop includes coding, testing, building until git push. The outer loop covers the rest of the steps from git push to a release of the software. 

In the past, it was mostly local tools that the developers used in the inner loop phase, because network latency could reduce the development efficiency and developers want fast feedback.

However, this boundary is gradually breaking down with more developer tools being cloud-enabled. That is because developers spend most of their time not on writing code, but finding the correct solutions. If a cloud service can help them find a better solution more quickly, then 100ms latency is anything but a problem. Today there are a couple of cloud-enabled examples:

* **Github Copilot** autocompletes your code using AI powered analysis and predictions. It is so intelligent that many developers said they searched StackOverflow less after using it.
* **Sourcegraph** provides cloud-enabled code search. Developers say that they do a better job of searching for theircode with Sourcegraph than what they do locally.
* **Cloud Shell** is an online terminal that contains the common utilities for its cloud provider (e.g. awscli). It makes it easier for users to learn and experience the cloud.


## Brand new experience on Cloud 

In the inner loop, the hardest part for users is setting up the dev environment. Because it is time consuming, if not too hard to achieve, to install complex microservice dependencies, and configure numerous infrastructure components. What's more, for developers working on open source or agile schedule, it is their first time engaging in a project, which means setting up a dev environment is nothing but a trouble. Last but not least, even if developers have successfully setup the environment in local, there is still a very large gap between the local and production environment -- that means more troubles and failures in production releases.

To boost dev efficiency, more and more companies are moving dev  environments to the cloud:

* **Bigcos** : Big companies like Google、FB、Etsy、Tesla、Shopify spin up a development environment according to the needs of developers so that the whole process (coding, testing, building, git pushing, releasing of the software) could be done on cloud.
* **Small and medium-sized enterprises (SMEs)**：More and more SMES are buying services offered by companies like Github Codespace、Gitpod、StackBlitz、Okteto to manage cloud dev environments.
* **In-house solutions based on open source projects**: Projects like Nocalhost provide a cloud-native remote development experience based on containers. It has helped a number of enterprises build in-house management platforms for dev environments.

![ymqd](ymqd.png)

Providing developers the seamless workflow for onboarding application development, without the painful process of setting up dev environments, is a proven track to boost dev efficiency. It is becoming a trend adopted by more and more companies.

Today, an ideal cloud-native dev experience should be like this:

* **One-click deploy**：The entire environment stack is predefined, and developers can self-service to spin up the environment quickly. In this way, users can enjoy developing apps after a few clicks of choosing programming frameworks and backend services like MySQL, Redis, Prometheus.
* **Cattle, not pet**: Dev environments should be cattle, not pet. Every single environment can be codified, reproducible, and immutable.
* **On-dema**: The workflow is designed on a developer-centric basis, allowing developers to spin up environments on demand by forking a branch. Once the development is finished, branch is merged to main, the environment will be deleted automatically.
* **Integrated experience**: Build higher level IDE based on VSCode, Jetbrains which fit the developer use cases. For example, making it easy to share the environment, create an issue by clicking IDE, and split traffic using GUI, and so on.

![flow](flowchart.png)

At Heighliner we envision this and want to make it a reality. We build projects and cloud services to provide a seamless cloud dev experience. 

If you are interested in Heighliner, Dagger, Nocalhost, or any other cloud native projects,
you are welcome to:

- join our [Discord channel](https://discord.gg/WphTbdVHFA)
- contact us via [community channels](https://heighliner.dev/contact-us).
- provide us feedback at [heighliner github issues](https://github.com/h8r-dev/heighliner/issues)