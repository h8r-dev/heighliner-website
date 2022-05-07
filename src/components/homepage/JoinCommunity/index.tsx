/**
 * Create by ze.zhang on 2022.4.27
 */
import React from "react";
import clsx from "clsx";

import {customFields} from "@site/docusaurus.config";
import styles from './index.module.css';

interface IconType {
  src: string,
  alt: string,
  link?: string,
  qrCode?: string
}

const iconList: IconType[] = [
  {
    src: require('@site/static/img/homepage/joincommunity/github.webp').default,
    alt: 'github',
    link: customFields.githubUrl as string
  },
  {
    src: require('@site/static/img/homepage/joincommunity/discourd.webp').default,
    alt: 'discord',
    link: customFields.discordUrl as string
  },
  {
    src: require('@site/static/img/homepage/joincommunity/wechat.webp').default,
    alt: 'wechat',
    qrCode: require('@site/static/img/heighliner-wechat-channel.jpeg').default,
  },
]

export function JoinCommunity() {

  function hendleClick(link: (string | undefined)) {
    link && window.open(link)
  }

  return (
    <div>
      <div className={styles.title}>
        Join the community
      </div>
      <div className={styles.iconWrapper}>
        {
          iconList.map((item: IconType) => {
            let {src, alt, link, qrCode} = item;
            return (
              <div className={styles.icon} key={alt}>
                <img src={src} alt={alt} onClick={() => hendleClick(link)}/>
                {
                  qrCode && (
                    <div className={styles.qrcodeWrapper}>
                      <img src={qrCode}/>
                    </div>
                  )
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
