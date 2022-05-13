import React from "react";

import styles from "./index.module.scss";

export default function PicturesSliderInMobile(): React.ReactElement {
  return (
    <div className={styles.layerWrap}>
      <div className={styles.layerContain}>
        <img
          src={
            require("@site/static/img/homepage/whyheighliner/chip@3x.webp")
              .default
          }
          className={styles.layerImg}
          alt="with heighliner"
        />
      </div>
    </div>
  );
}
