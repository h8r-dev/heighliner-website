/**
 * Description item of cloud innovation section
 */

import React from "react";

import { Line, Direction } from "@site/src/components/Line";
import styles from './index.module.css'

export interface DescriptionItemProps {
  logo: string,
  title: string,
  desc: string,
  index: number,
  dotsCount: number,
}
export function DescriptionItem({
  index,
  logo,
  title,
  desc,
  dotsCount,
}: DescriptionItemProps) {

  const imgStyle = index === 1 ? { width: 30, marginLeft: -4 } : {}

  return (
    <div className={styles.descItem}>
      <div>
        <span>
          <img style={imgStyle} className={styles.descItemImg} src={logo} alt="product logo" />
        </span>
        <span className={styles.descItemTitle}>{title}</span>
      </div>
      <div className={styles.descItemDesc}>{desc}</div>
      <Line index={index} dotsCount={dotsCount} direction={Direction.ROW} />
    </div>
  )
}
