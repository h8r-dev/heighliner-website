/**
 * Create by ze.zhang on 2022.5.12
 */
import React from "react";
import clsx from "clsx";

import PageWrapper from "../components/PageWrapper/index";
import styles from "../css/about-us.module.scss";

interface Item {
  title: string,
  content: string,
  url?: string
}

const list: Item[] = [
  {
    title: "Software engineers",
    content: "Heighliner is a company mainly composed of software engineers. "
  },
  {
    title: "Engineer culture",
    content: "Engineer culture drives everyone thinking technically, caring about quality of product, keeping to polish user experience."
  },
  {
    title: "Improving Experience",
    content: "We are dedicated to improving the developer experience for the cloud native community."
  },
  {
    title: "Core members",
    content: "Our core members come from Nocalhost(CNCF Sandbox Project) and KubeVela(CNCF Sandbox Project). "
  },
  {
    title: "Open source",
    content: "Engineer culture drives everyone thinking technically, caring about quality of product, keep"
  },
]

const imglist: Item[] = [
  {
    url: require("@site/static/img/about-us/image-left.webp").default,
    title: "What we do",
    content: "We innovatively introduced the new concept: Stack. With a stack, every tech team can build up a comprehensive and efficient workflow by pre-configured toolkit for the full life cycle of cloud-native applications. What is Heighliner Stack"
  },
  {
    url: require("@site/static/img/about-us/image-right.webp").default,
    title: "Vision",
    content: "The vision of Heighliner is that leveraging cloud power, everyone can build future applications."
  }
]

export default function AboutUs(): JSX.Element {
  return (
    <PageWrapper title="About us">
      <div className={styles.contentWrapper}>
        <div className={styles.pageTitle}>
          About Heighliner
        </div>
        <div className={styles.pageDesc}>
          Heighliner is The cloud-native application development platform that empowers organizations and
          developers to minimize the complexity of building up delivery flow for cloud-native applications.
        </div>
        <div className={styles.pageTitle}>
          Who are we?
        </div>
        <div className={styles.pageDesc}>
          Heighliner is The cloud-native application development platform that empowers organizations and
          developers to minimize the complexity of building up delivery flow for cloud-native applications.
        </div>
        <div className={styles.flexWrapper}>
          {
            list.map(item => {
              let {title, content} = item;
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
              let {url, title, content} = item;
              return (
                <div className={styles.imgWrapper} key={title}>
                  <img src={url} alt={styles.itemTitle}/>
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
