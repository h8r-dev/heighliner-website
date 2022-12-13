/**
 * Slogan section of homepage
 */

import React, { useState } from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import siteConfig from "@generated/docusaurus.config";

import { Video } from "@site/src/components/Video";

import styles from "./index.module.scss";
import AutoDownCounter from "./AutoDownCounter";
import HeighlinerHeader from "../../Header/HeighlinerHeader";

export function SloganSection(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundMask} />
      <div className={styles.container}>
        <div className="slogan-section container">
          <div className={styles.verticallyFullOfScreen}>
            <HeighlinerHeader />
          </div>
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
                </h1>
                <h1>
                  应用技术栈
                </h1>
                <h1>运行在任何的云上</h1>
              </div>
              <div className={styles.actionsGroup}>
                <Link
                  className={clsx("button button--lg", styles.requestAccess)}
                  to={siteConfig.customFields.newsletterUrl as string}
                >
                  Heighliner Newsletter
                </Link>
                <Link
                  className={clsx("button button--lg button--secondary", styles.quickstart)}
                  to={siteConfig.customFields.quickStartUrl as string}
                >
                  快速开始
                </Link>
              </div>
            </main>
            <div className={styles.video}>
              <Video
                poster="/img/video/white-border@3x.webp"
                src="https://dl.h8r.io/Heighliner-Introduction-English.mp4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
