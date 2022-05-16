import React from "react";

import styles from "./index.module.scss";

interface Props {
  children?: React.ReactElement | React.ReactElement[]
}

export default function HeighlinerHeader({ children }: Props): React.ReactElement {
  return (
    <div className={styles.BgWrapper}>
      <img
        src={
          require("/img/component/HeighlinerHeader/header-background.webp")
          .default
        }
        alt="with heighliner"
        />
      <div className={styles.main}>
        {children}
      </div>
    </div>
  );
}
