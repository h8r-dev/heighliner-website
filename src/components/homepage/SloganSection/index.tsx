/**
 * Slogan section of homepage
 */

import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";

import styles from './index.module.css'
import { BackgroundMask } from "./BackgroundMask";
import { WaveBottom } from "./WaveBottom";

function handleRequestAccess() {
  console.log('request access from popover')
}

export function SloganSection(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <BackgroundMask />
      <div className={styles.mask}>
        <div className="slogan-section container">
          {/* <header>
            <nav>
              <div className="left">
                <img className="logo" src="img/logo.svg" alt="logo" />
              </div>
              <div className="right">
                <ul>
                  <li>Docs</li>
                  <li>Blog</li>
                  <li>GitHub</li>
                </ul>
              </div>
            </nav>
          </header> */}
          <main className={styles.wrap}>
            <div className={styles.sloganTextWrap}>
              <h1>Spin up your</h1>
              <h1>cloud-navtive</h1>
              <h1>stack in <em>minutes</em></h1>
            </div>
            <div className={styles.actionsGroup}>
              <button
                onClick={handleRequestAccess}
                className={styles.requestAccess}
              >
                Request Early Access
              </button>
              <Link className={clsx('button button--lg button--secondary', styles.quickstart)} to="/docs/quickstart">Quick Start</Link>
            </div>
          </main>
        </div>
        <WaveBottom />
      </div>
    </div>
  )
}
