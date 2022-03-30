/**
 * Show `join the community` content
 */

import clsx from "clsx";
import React from "react";
import Link from "@docusaurus/Link";

import styles from './index.module.css'

export function JoinCommunity() {
  return (
    <div className={styles.wrapper}>
      <img src={require('@site/static/img/homepage/join-community-bg.png').default} alt="bg" />
      <div className={styles.content}>
        <div className={styles.title}>Join the community</div>
        <Link
          className={clsx('button button--lg button--secondary', styles.btn)}
          to="/docs/quickstart"
        >
          Quick Start
        </Link>
      </div>
    </div>
  )
}
