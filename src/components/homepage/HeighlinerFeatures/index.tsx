/**
 * Heighliner features displayed on homepage
 */

import React from "react";
import clsx from "clsx";

import styles from './index.module.css'
import { FeatureItem } from "./FeatureItem";

const allFeatures: any[][] = [
  [
    {
      title: 'Neutral',
      imgSrc: require('@site/static/img/feature-neutral.png').default,
      description: 'No vendor lock-in. Heighliner is suitable for all Cloud Provider'
    },
    {
      title: 'Flexible',
      imgSrc: require('@site/static/img/feature-flexible.png').default,
      description: 'Cloud or on-premise, as you wish. No friction for developer and team',
    },
  ],
  [
    {
      title: 'Open',
      imgSrc: require('@site/static/img/feature-open.png').default,
      description: 'The core engine and modules are all open source',
    },
    {
      title: 'Extensible',
      imgSrc: require('@site/static/img/feature-extensible.png').default,
      description: 'Based on a open core, everyone can build custom stacks on Heighliner',
    },
  ],
]

export function HeighlinerFeatures(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      {
        allFeatures.map((features: any[], idx: number) => (
          <div className={styles.row} key={idx}>
            {
              features.map((feature: any, index: number) => (
                <FeatureItem
                  key={index}
                  title={feature.title}
                  imgSrc={feature.imgSrc}
                  description={feature.description}
                />
              ))
            }
          </div>
        ))
      }
    </div>
  )
}
