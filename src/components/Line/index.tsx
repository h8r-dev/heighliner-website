/**
 * Render a line
 */

import React from "react";

import styles from './index.module.css'

export enum Direction {
  ROW = 'row',
  COLUMN = 'column',
}
export interface LineProps {
  index: number,
  direction: Direction,
  dotsCount: number,
}
export function Line({
  index,
  direction,
  dotsCount,
}: LineProps) {
  const dots = new Array(dotsCount).fill(0)
  const marginProperty = direction === Direction.COLUMN ? 'marginBottom' : 'marginRight'
  return (
    <div
      className={styles.line}
      style={{
        flexDirection: direction,
      }}
    >
      <img src={require('@site/static/img/line-end.png').default} alt="line end" />
      {
        dots.map((dot: number, idx: number) => (
          <div
            key={`${index}-${idx}`}
            className={styles.dot}
            style={{
              [marginProperty]: 2,
            }}
          />
        ))
      }
    </div>
  )
}
