/**
 * Create by ze.zhang on 2022.5.12
 */
import React from "react";
import clsx from "clsx";

import PageWrapper from "../../components/PageWrapper";
import styles from "./index.module.scss";

interface Item {
  title: string,
  content: string,
  url?: string
}

const list: Item[] = [
  {
    title: "开源",
    content: "我们构建和使用有助于构建最佳实践和标准的开源项目。",
  },
  {
    title: "工程师文化",
    content: "我们系统思考，关注项目质量，不断打磨用户体验。"
  },
  {
    title: "创新",
    content: "我们一直在寻找新的想法并打破规则来创造更好的产品。",
  },
  {
    title: "拥抱社区",
    content: "我们积极拥抱社区合作，并为像Nocalhost、Dagger等项目做出贡献。",
  },
  {
    title: "改善用户体验",
    content: "我们非常关注开发者体验，并通过采用最佳实践来改进它。",
  },
]

const imglist: Item[] = [
  {
    url: require("@site/static/img/about-us/image-left.webp").default,
    title: "目标",
    content: "我们开发了Heighliner，这是一款开发者工具，可以让您将应用程序堆栈作为代码进行构建。"
  },
  {
    url: require("@site/static/img/about-us/image-right.webp").default,
    title: "愿景",
    content: "Heighliner的愿景是利用云计算，使之适用于每一位开发者！"
  }
]

export default function Index(): JSX.Element {
  return (
    <PageWrapper title="About us">
      <div className={styles.contentWrapper}>
        <div className={styles.pageTitle}>
          开发者的云平台
        </div>
        <div className={styles.pageDesc}>
          开发者必须面对复杂的大型云平台，这些平台对于学习曲线和大规模操作都有很高的要求。这是因为主要的云服务提供商专注于企业市场。我们相信云平台应该面向开发者。因此，我们开发了Heighliner，这是一个云原生开发工具，可以让您将应用程序堆栈作为代码构建。我们希望赋予开发者快速构建应用程序的能力，就像LAMP堆栈所实现的那样。
        </div>
        <div className={styles.pageTitle}>
         我们是谁
        </div>
        <div className={styles.pageDesc}>
          我们是一群对云原生应用开发充满热情的软件工程师组成的团队。我们坚信开源社区所带来的价值。过去，我们一直在开源项目中工作，如KubeVela和Nocalhost（它们都是CNCF项目）。现在我们希望将云平台推向下一个阶段，使其成为开发者的平台。
        </div>
        <div className={styles.flexWrapper}>
          {
            list.map(item => {
              let { title, content } = item;
              return (
                <div className={styles.itemWrapper} key={title}>
                  <span className={styles.itemTitle}>{title}</span>
                  <div className={styles.itemContent}>{content}</div>
                </div>
              )
            })
          }
        </div>
        <div className={styles.imageAndDesc}>
          {
            imglist.map(item => {
              let { url, title, content } = item;
              return (
                <div className={styles.imgWrapper} key={title}>
                  <img src={url} alt={styles.itemTitle} />
                  <div className={clsx(styles.imgTitle, styles.pageTitle)}>{title}</div>
                  <div className={clsx(styles.imgContent, styles.pageDesc)}>{content}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </PageWrapper>
  );
}
