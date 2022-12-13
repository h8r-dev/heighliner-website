/**
 * Create by ze.zhang on 2022.4.27
 */
import React from "react";
import clsx from "clsx";

import siteConfig from "@generated/docusaurus.config";
import styles from './index.module.css';

import { isWeixin } from "@site/src/utils/Environment";
import FadeIn from "../../Animation/FadeIn";

enum JoinCommunityMethod {
  WECHAT = 'wechat',
  GITHUB = 'github',
  DISCORD = 'discord'
}

interface IconType {
  src: string,
  alt: JoinCommunityMethod,
  link?: string,
  qrCode?: string
}

const iconList: IconType[] = [
  {
    src: require('@site/static/img/homepage/joincommunity/github.webp').default,
    alt: JoinCommunityMethod.GITHUB,
    link: siteConfig.customFields.githubUrl as string
  },
  {
    src: require('@site/static/img/homepage/joincommunity/discourd.webp').default,
    alt: JoinCommunityMethod.DISCORD,
    link: siteConfig.customFields.discordUrl as string
  },
  {
    src: require('@site/static/img/homepage/joincommunity/wechat.webp').default,
    alt: JoinCommunityMethod.WECHAT,
    qrCode: require('@site/static/img/heighliner-wechat-channel.jpeg').default,
    link: siteConfig.customFields.wechat as string
  },
]

export function JoinCommunity() {
  function hendleClick(item: IconType) {
    let { alt, link } = item;
    if ((alt !== JoinCommunityMethod.WECHAT) || isWeixin()) {
      link && window.open(link)
    }
  }

  return (
    <div>
      <FadeIn>
        <div className={clsx("homepage-section-title", styles.title)}>
          加入社区
        </div>
      </FadeIn>
      <FadeIn>
        <div className={styles.iconWrapper}>
          {
            iconList.map((item: IconType) => {
              let { src, alt, link, qrCode } = item;
              return (
                <div className={styles.icon} key={alt}>
                  <img src={src} alt={alt} onClick={() => hendleClick(item)} />
                  {
                    qrCode && !isWeixin() && (
                      <div className={styles.qrcodeWrapper}>
                        <img src={qrCode} />
                      </div>
                    )
                  }
                </div>
              )
            })
          }
        </div>
      </FadeIn>
    </div>
  )
}
