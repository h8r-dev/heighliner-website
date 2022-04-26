import React from "react";
import clsx from "clsx";

import styles from "./index.module.css";

interface Props {
  title: string;
  imgPath: string;
  description: string;
}

export default function Feature({
  title,
  imgPath,
  description,
}: Props): React.ReactElement {
  return (
    <div className={clsx(styles.flexContain, styles.featureContain)}>
      <div className={styles.featureTitle}>{title}</div>
      <img src={imgPath} alt="with heighliner" />
      <div className={styles.featureDescription}>{description}</div>
    </div>
  );
}
