import React, { useRef, useEffect } from "react";
import "asciinema-player/dist/bundle/asciinema-player.css"
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

import styles from "./index.module.scss";

export interface StepProps {
  title: string
  asciiData: string,
  id: string
}

export default function Step({ title, id, asciiData }: StepProps): React.ReactElement {
  const terminalRef = useRef(null)
  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      import('asciinema-player').then(player => {
        player.create(`data:text/plain;base64,${asciiData}`, terminalRef.current, {
          loop: true,
          autoPlay: true,
          terminalFontSize: '14px',
          fit: false,
          theme: 'asciinema',
          rows: 19,
        })
      })
    }
  }, [])

  return (
    <div className={styles.stepWrap}>
      <div className={styles.stepTitle}>{title}</div>
      <div ref={terminalRef} className={styles.terminal} id={id}/>
    </div>
  );
}
