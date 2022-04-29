import React from "react";
import clsx from "clsx";

import styles from "./index.module.scss";

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
    <div className={styles.featureContain}>
      <div className={styles.featureTitle}>{title}</div>
      <img
        src={imgPath}
        alt="with heighliner"
        style={{ width: 150, height: 150 }}
        className={styles.featureImg}
      />
      <div className={styles.featureDescription}>{description}</div>
    </div>
  );
}
