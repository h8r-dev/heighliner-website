/**
 * Slogan section of homepage
 */

import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import { customFields } from "@site/docusaurus.config";

import styles from './index.module.css'

import BlueLogoSvg from '@site/static/img/homepage/blue-logo.svg'
import WhiteHeighlinerSvg from '@site/static/img/homepage/white-heighliner.svg'

function handleRequestAccess() {
  console.log('request access from popover')
}

export function SloganSection(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundMask} />
      <div className={styles.container}>
        <div className="slogan-section container">
          <header>
            <nav className={styles.navbar}>
              <div className={styles.logoWrap}>
                <BlueLogoSvg style={{ marginRight: 10 }} />
                <WhiteHeighlinerSvg />
              </div>
              <ul className={styles.navItems}>
                <li>
                  <Link to={customFields.docsUrl as string}>Docs</Link>
                </li>
                <li>
                  <Link to={customFields.blogUrl as string}>Blog</Link>
                </li>
                <li>
                  <Link to={customFields.githubUrl as string}>Github</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main className={styles.wrap}>
            <div className={styles.sloganTextWrap}>
              <h1>Spin up your</h1>
              <h1>cloud-native</h1>
              <h1>stack in <em>minutes</em></h1>
            </div>
            <div className={styles.actionsGroup}>
              <button
                onClick={handleRequestAccess}
                className={styles.requestAccess}
              >
                Request Early Access
              </button>
              <Link
                className={clsx('button button--lg button--secondary', styles.quickstart)}
                to={customFields.quickStartUrl as string}
              >
                Quick Start
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
