/**
 * Show `join the community` content
 */

import clsx from "clsx";
import React from "react";
import Link from "@docusaurus/Link";
import { customFields } from "@site/docusaurus.config";

import JoinCommunityBgSvg from '@site/static/img/homepage/join-community-bg.svg'
import JoinCommunityLogoSvg from '@site/static/img/homepage/join-community-logo-img.svg'
import styles from './index.module.css'

export function JoinCommunity() {
  return (
    <div className={styles.wrapper}>
      <JoinCommunityBgSvg className={styles.bg} />
      <div className={styles.content}>
        <JoinCommunityLogoSvg />
        <div className={styles.title}>Join the community</div>
        <Link
          className={clsx('button button--lg button--secondary', styles.btn)}
          to={customFields.quickStartUrl as string}
        >
          Quick Start
        </Link>
      </div>
    </div>
  )
}
