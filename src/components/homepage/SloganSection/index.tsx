/**
 * Slogan section of homepage
 */

import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import { customFields } from "@site/docusaurus.config";

import styles from "./index.module.scss";

import WhiteHeighlinerSvg from "@site/static/img/homepage/white-heighliner.svg";
import { Video } from "@site/src/components/Video";
import AutoDownCounter from "./AutoDownCounter";

export function SloganSection(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundMask} />
      <div className={styles.container}>
        <div className="slogan-section container">
          <header>
            <nav className={styles.navbar}>
              <div className={styles.logoWrap}>
                <img
                  src={
                    require("@site/static/img/homepage/slogansection/purple-logo@3x.webp")
                      .default
                  }
                  style={{ marginRight: 18, width: 51, height: 33 }}
                  alt="with heighliner"
                />
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
                  <Link to={customFields.githubUrl as string}>GitHub</Link>
                </li>
              </ul>
            </nav>
          </header>
          <div className={styles.contentWrap}>
            <main className={styles.wrap}>
              <div className={styles.sloganTextWrap}>
                <h1>
                  <AutoDownCounter
                    startPoint={3000}
                    endPoint={0}
                    interval={1}
                    minuend={5}
                  />{" "}
                  configuration to{" "}
                </h1>
                <h1>build modern Cloud</h1>
                <h1>App</h1>
              </div>
              <div className={styles.actionsGroup}>
                <Link
                  className={clsx("button button--lg", styles.requestAccess)}
                  to={customFields.newsletterUrl as string}
                >
                  Request Early Access
                </Link>
                <Link
                  className={clsx("button button--lg button--secondary", styles.quickstart)}
                  to={customFields.quickStartUrl as string}
                >
                  Quick Start
                </Link>
              </div>
            </main>
            <div className={styles.video}>
              <Video
                poster="/img/vidio-photo-2.webp"
                src="https://dl.h8r.io/Heighliner-Introduction-English.mp4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
