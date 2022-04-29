import React, { useRef, useEffect } from "react";

import * as AsciinemaPlayer from 'asciinema-player';
import "asciinema-player/dist/bundle/asciinema-player.css"

import styles from "./index.module.css";

export interface StepProps {
  title: string,
  asciiData: string,
}

export default function Step({ title, asciiData }: StepProps): React.ReactElement {
  const elemRef = useRef(null)

  useEffect(() => {
    const elem = elemRef.current
    AsciinemaPlayer.create(`data:text/plain;base64,${asciiData}`, elem, {
      loop: true,
      autoPlay: true,
      terminalFontSize: '14px',
      fit: false,
      theme: 'monokai',
      rows: 19,
      terminalFontFamily: "sans-serif"
    })
  }, [])

  return (
    <div className={styles.stepWrap}>
      <div className={styles.stepTitle}>{title}</div>
      <div ref={elemRef} className={styles.terminal}>
      </div>
    </div>
  );
}
