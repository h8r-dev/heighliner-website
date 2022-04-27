/**
 * Create by ze.zhang on 2022.4.27
 */
import React from "react";

import styles from './index.module.css';

interface IconType {
  src: string,
  alt: string,
}

const iconList: IconType[] = [
  {
    src: require('@site/static/img/homepage/heighliner-innovation-logo.png').default,
    alt: 'github'
  },
  {
    src: require('@site/static/img/homepage/k8s-logo.png').default,
    alt: 'discord',
  },
  {
    src: require('@site/static/img/homepage/terraform-logo.png').default,
    alt: 'wechat',
  },
]

export function JoinCommunity() {
  return (
    <div >
      <div className={styles.title}>Join the community</div>
      <div className={styles.iconWrapper}>
        {
          iconList.map(item => {
            let {src, alt} = item;
            return <img src={src} alt={alt} className={styles.icon}/>
          })
        }
      </div>
    </div>
  )
}
