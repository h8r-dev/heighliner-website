import React from "react";

import AsciinemaPlayer from "@site/src/components/Asciinema";

import styles from "./index.module.scss";

export interface StepProps {
  title: string;
  castFileUrl: URL;
}

export default function Step({
  castFileUrl,
  title,
}: StepProps): React.ReactElement {
  return (
    <div className={styles.stepWrap}>
      <div className={styles.stepTitle}>{title}</div>
      <AsciinemaPlayer className={styles.terminal} castFileUrl={castFileUrl} />
    </div>
  );
}
