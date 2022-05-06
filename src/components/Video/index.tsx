/**
 * Video component, based on video-react
 */

import React, {useState, useRef} from "react";

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
  const [play, setPlay] = useState<boolean>(false);
  let player = useRef(null);
  return (
    // use id becase add the weight
    <div id={styles.vidioWrapper}>
      <Player
        playsInline
        poster={poster}
        src={src}
        preload="metadata"
        onPlay={() => {setPlay(true)}}
        ref={player}
      >
        <LoadingSpinner/>
        <BigPlayButton position="center" style={{display: "none"}}/>
        <ControlBar
          className={styles.videoControlBar}
          autoHide
        />
      </Player>
      {
        !play &&
        <div className={styles.startVideo}
             onClick={() => {
               player.current.play()
             }}
        />
      }
    </div>
  )
}
