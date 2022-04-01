/**
 * Single feature item
 */

import React from "react";
import styles from './index.module.css'

export interface FeatureItemProps {
  imgSrc: string,
  title: string,
  description: string,
}
export function FeatureItem({
  imgSrc,
  title,
  description,
}: FeatureItemProps) {
  return (
    <div className={styles.item}>
      <img src={imgSrc} alt="feature" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
