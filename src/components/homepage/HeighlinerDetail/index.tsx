/**
 * Highliner stack details displayed on homepage
 */

import clsx from "clsx";
import React from "react";

// import { Player, BigPlayButton, ControlBar, LoadingSpinner } from 'video-react'
// import "video-react/dist/video-react.css"; // import css

import styles from './index.module.css'
import { SectionTitleIcon } from "../SectionTitleIcon";

export function HeighlinerDetail(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <div className="heighliner-detail-section container">
        <h1 className={clsx('homepage-section-title', styles.title)}>
          <SectionTitleIcon />
          What is Heighliner stack?
        </h1>
        <div className={styles.detail}>
          <div className={styles.content}>
            {/* <Player
              playsInline
              poster='/img/homepage/video-poster.png'
              src='/videos/intro-video-demo.mp4'
            >
              <LoadingSpinner />
              <BigPlayButton position="center" />
              <ControlBar
                className={styles.videoControlBar}
                autoHide
              />
            </Player> */}
          </div>
        </div>
      </div>
    </div>
  )
}
