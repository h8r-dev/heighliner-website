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
    title: "Open Source",
    content: "We build and use open source projects that help build the best practices and standards.",
  },
  {
    title: "Engineer Culture",
    content: "We think systematically, care about the quality of projects, keep polishing user experience."
  },
  {
    title: "Innovation",
    content: "We are always looking for new ideas and break the rules to create better products.",
  },
  {
    title: "Embrace Community",
    content: "We embrace community collaboration and contribute to projects like Nocalhost, Dagger, and more.",
  },
  {
    title: "Improve Experience",
    content: "We care about developer experience and improve it by using best practices.",
  },
]

const imglist: Item[] = [
  {
    url: require("@site/static/img/about-us/image-left.webp").default,
    title: "What we do",
    content: "We build Heighliner, a developer tool that lets you build application stack as code."
  },
  {
    url: require("@site/static/img/about-us/image-right.webp").default,
    title: "Vision",
    content: "The vision of Heighliner is to leverage the cloud and make it for every developer!"
  }
]

export default function AboutUs(): JSX.Element {
  return (
    <PageWrapper title="About us">
      <div className={styles.contentWrapper}>
        <div className={styles.pageTitle}>
        A Cloud For Developers
        </div>
        <div className={styles.pageDesc}>
        Developers have to face the complex, large clouds that impose steep learning curves and massive operations.
        This is because major cloud providers focused on enterprises.
        We believe the cloud should be made for developers.
        Therefore, we build Heighliner, a cloud-native developer tool that lets you build application stack as code.
        We want to empower developers to build apps quickly in a similar way to what LAMP stack achieves.
        </div>
        <div className={styles.pageTitle}>
          Who are we?
        </div>
        <div className={styles.pageDesc}>
          We are a group of software engineers who are passionate about cloud native app development.
          We believe in the value that the open source community brings.
          In the past, we have been working on open source projects like KubeVela and Nocalhost (both are CNCF projects).
          Now we want to take the cloud to the next step and make it a platform for developers.
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
