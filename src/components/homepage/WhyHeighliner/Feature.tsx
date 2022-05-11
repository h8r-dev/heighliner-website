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
    <>
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
      <div className={clsx(styles.featureContain, styles.md)}>
        <img
          src={imgPath}
          alt="with heighliner"
          className={styles.featureImg}
        />
        <div className={styles.featureContent}>
          <div className={styles.featureTitle}>{title}</div>
          <div className={styles.featureDescription}>{description}</div>
        </div>
      </div>
    </>
  );
}
