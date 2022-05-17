/**
 * Footer of homepage.
 */

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import siteConfig from "@generated/docusaurus.config";

import WhiteHeighlinerSvg from "@site/static/img/homepage/white-heighliner.svg";

import styles from './index.module.css'

export function Footer() {
  const [showBeianInfo, setShowBeianInfo] = useState(false)
  const footer: any = siteConfig.themeConfig.footer

  useEffect(() => {
    if (window.location.host === 'heighliner.cn') {
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
          <ul className={styles.links}>
            {
              footer.links.map((linkItem: any, index: number) => (
                <li key={index}>
                  <span className={styles.title}>{linkItem.title}</span>
                  <ul>
                    {
                      linkItem.items.map((link: any, idx: number) => {
                        const to: string = link.to || link.href
                        return (
                          <li key={idx} className={styles.linkItem}>
                            <Link to={to}>{link.label}</Link>
                            {/*{ to.startsWith('http') && <ExternalLinkIcon style={{ marginLeft: 5 }} /> }*/}
                          </li>
                        )
                      })
                    }
                  </ul>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <span>{footer.copyright}</span>
        <span style={{ marginLeft: 10, display: showBeianInfo ? 'inline-block': 'none' }}>
          <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">粤ICP备2022019117号</a>
        </span>
      </div>
    </div>
  )
}
