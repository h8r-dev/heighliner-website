/**
 * Video component, based on video-react
 */

import React from "react";

import { Player, BigPlayButton, ControlBar, LoadingSpinner } from 'video-react'
import "video-react/dist/video-react.css"; // import css

import styles from './index.module.scss'

export interface VideoProps {
  poster: string
  src: string
}

export function Video({
  poster,
  src,
}: VideoProps): React.ReactElement {
  return (
    // use id becase add the weight
    <div id={styles.vidioWrapper}>
      <Player
        playsInline
        poster={poster}
        src={src}
      >
        <LoadingSpinner />
        <BigPlayButton position="center" />
        <ControlBar
          className={styles.videoControlBar}
          autoHide
        />
      </Player>
    </div>
  )
}
