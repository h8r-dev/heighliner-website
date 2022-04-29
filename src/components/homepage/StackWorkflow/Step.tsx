import React from "react";

import "asciinema-player/dist/bundle/asciinema-player.css"
import styles from "./index.module.scss";

export interface StepProps {
  title: string
  asciiData: string,
  id: string
}

export default function Step({ title, id }: StepProps): React.ReactElement {

  return (
    <div className={styles.stepWrap}>
      <div className={styles.stepTitle}>{title}</div>
      <div className={styles.terminal} id={id}/>
    </div>
  );
}
