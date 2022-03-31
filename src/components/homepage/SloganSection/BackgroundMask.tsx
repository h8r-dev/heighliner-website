/**
 * Background mask on slogan section
 */

import React from "react";

import styles from './index.module.css'

export function BackgroundMask() {
  return (
    <div className={styles.backgroundMask}>
      <img src={`/img/homepage/slogan-bg-mask.svg`} alt="background mask image" />
    </div>
  )
}
