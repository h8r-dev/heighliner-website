/**
 * Highliner stack details displayed on homepage
 */

import React from "react";
import clsx from "clsx";

import styles from './index.module.css'
import { SectionTitleIcon } from "../SectionTitleIcon";

export function HeighlinerDetail(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <div className="heighliner-detail-section container">
        <h1 className={clsx('homepage-section-title', styles.title)}>
          <SectionTitleIcon />
          What is Heighliner stack?
        </h1>
        <div className={styles.detail}>
          <div className={styles.content}>
          </div>
        </div>
      </div>
    </div>
  )
}
