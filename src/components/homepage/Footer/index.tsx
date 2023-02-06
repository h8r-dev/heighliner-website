/**
 * Footer of homepage.
 */

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import siteConfig from "@generated/docusaurus.config";

import WhiteHeighlinerSvg from "@site/static/img/homepage/white-heighliner.svg";

import styles from './index.module.scss'

export function Footer() {
  const [showBeianInfo, setShowBeianInfo] = useState(false)
  const footer: any = siteConfig.themeConfig.footer

  useEffect(() => {
    if (window.location.host.endsWith('heighliner.cn')) {
      setShowBeianInfo(true)
    }
  }, [])

  return (
    <div className={styles.outerWrap}>
      <div className={clsx('container', styles.wrapper)}>
        <div className={styles.logo}>
          <div className={styles.logoWrap}>
            <img
              src={
                require("@site/static/img/homepage/slogansection/purple-logo@3x.webp")
                  .default
              }
              alt="heighliner"
            />
            <WhiteHeighlinerSvg />
          </div>
        </div>
        <div className={styles.linksWrap}>
        </div>
      </div>
      <div className={styles.copyright}>
        <span>{footer.copyright} <a style={{ color: '#fff' }} href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">粤ICP备2022019117号</a></span>
        <span style={{
          marginLeft: 10,
          display: showBeianInfo ? 'inline-block' : 'none',
        }}>
        </span>
      </div>
    </div>
  )
}
