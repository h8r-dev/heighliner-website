import React from "react";

import styles from "./index.module.css";

interface Props {
  title: string;
}

export default function Step({ title }: Props): React.ReactElement {
  return (
    <div className={styles.stepWrap}>
      <div className={styles.stepTitle}>{title}</div>
      <div className={styles.terminal}></div>
    </div>
  );
}
