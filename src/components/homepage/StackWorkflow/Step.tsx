import React from "react";

import AsciinemaPlayer from "@site/src/components/Asciinema";

import styles from "./index.module.scss";

export interface StepProps {
  title: string
  asciiData: string,
}

export default function Step({ title, asciiData }: StepProps): React.ReactElement {
  return (
    <div className={styles.stepWrap}>
      <div className={styles.stepTitle}>{title}</div>
      <AsciinemaPlayer asciiData={asciiData} className={styles.terminal} />
    </div>
  );
}
