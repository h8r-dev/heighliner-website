/**
 * Create by ze.zhang on 2022.4.27
 */
import React from "react";
import {customFields} from "@site/docusaurus.config";

import styles from './index.module.css';

interface IconType {
  src: string,
  alt: string,
  link?: string,
}

const iconList: IconType[] = [
  {
    src: require('@site/static/img/homepage/joincommunity/github.webp').default,
    alt: 'github',
    link: customFields.githubUrl as string
  },
  // annotate discord and wechat link
  // {
  //   src: require('@site/static/img/homepage/joincommunity/discourd.webp').default,
  //   alt: 'discord',
  // },
  // {
  //   src: require('@site/static/img/homepage/joincommunity/wechat.webp').default,
  //   alt: 'wechat',
  // },
]

export function JoinCommunity() {

  function hendleClick(link: (string | undefined)) {
    link && window.open(link)
  }

  return (
    <div>
      <div className={styles.title}>Join the community</div>
      <div className={styles.iconWrapper}>
        {
          iconList.map((item: IconType, key: number) => {
            let {src, alt, link} = item;
            return (
              <div className={styles.icon} key={key}>
                <img src={src} alt={alt} onClick={() => hendleClick(link)}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
