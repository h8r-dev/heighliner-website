/**
 * Slogan section of homepage
 */

import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import { customFields } from "@site/docusaurus.config";

import styles from "./index.module.css";

import WhiteHeighlinerSvg from "@site/static/img/homepage/white-heighliner.svg";
import { Video } from "@site/src/components/Video";

function handleRequestAccess() {
  console.log("request access from popover");
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
          <main className={styles.wrap}>
            <div className={styles.sloganTextWrap}>
              <h1>0 configuration to </h1>
              <h1>build modern Cloud</h1>
              <h1>App</h1>
            </div>
            <div className={styles.actionsGroup}>
              <button
                onClick={handleRequestAccess}
                className={styles.requestAccess}
              >
                Request Early Access
              </button>
              <Link
                className={clsx(
                  "button button--lg button--secondary",
                  styles.quickstart
                )}
                to={customFields.quickStartUrl as string}
              >
                Quick Start
              </Link>
            </div>
            <div className={styles.video}>
              <Video
                poster="/img/homepage/video-poster.png"
                src="https://dl.h8r.io/Heighliner-Introduction-English.mp4"
              ></Video>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
