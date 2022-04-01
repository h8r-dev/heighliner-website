/**
 * Footer of homepage.
 */

import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { themeConfig } from "@site/docusaurus.config";

import ExternalLinkIcon from '@site/static/img/external-link.svg'

import styles from './index.module.css'

export function Footer() {
  return (
    <div className={styles.outerWrap}>
      <div className={clsx('container', styles.wrapper)}>
        <div className={styles.logo}>
          <img src={require('@site/static/img/homepage/yellow-logo.png').default} alt="footer logo" />
        </div>
        <div className={styles.linksWrap}>
          <ul className={styles.links}>
            {
              themeConfig.footer.links.map((linkItem: any, index: number) => (
                <li key={index}>
                  <span className={styles.title}>{linkItem.title}</span>
                  <ul>
                    {
                      linkItem.items.map((link: string, idx: number) => {
                        const to: string = link.to || link.href
                        return (
                          <li key={idx}>
                            <Link to={to}>{link.label}</Link>
                            { to.startsWith('http') && <ExternalLinkIcon style={{ marginLeft: 5 }} /> }
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
      <div className={styles.copyright}>{themeConfig.footer.copyright}</div>
    </div>
  )
}
