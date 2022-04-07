/**
 * Why Heighliner displayed on homepage
 */

import React from "react";
import clsx from "clsx";

import styles from './index.module.css'
import { SectionTitleIcon } from "../SectionTitleIcon";

export function WhyHeighliner(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h1 className={clsx('homepage-section-title', styles.title)}>
          <SectionTitleIcon />
          Why Heighliner stack?
        </h1>
        <p className={styles.caption}>
          A Heighliner stack is a pre-configured portfolio of cloud-native tools.
          It makes sure cloud native applications are developed and deployed with best practices.
          Based on convention over configuration, it significantly reduces the overhead of building cloud-native applications.
        </p>
        <main className={styles.compare}>
          <div className={styles.withoutH8r}>
            <div className={styles.imgCaption}>Without Heighliner Stack</div>
            <img src={require('@site/static/img/homepage/without-h8r.png').default} alt="without heighliner" />
          </div>
          <div className={styles.withH8r}>
            <div className={styles.imgCaption}>With Heighliner Stack</div>
            <img src={require('@site/static/img/homepage/with-h8r.png').default} alt="with heighliner" />
          </div>
        </main>
      </div>
    </div>
  )
}
