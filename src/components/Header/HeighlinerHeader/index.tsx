import React, { useState } from "react";
import clsx from "clsx";

import WhiteHeighlinerSvg from "/img/component/HeighlinerHeader/white-heighliner.svg";
import PurpleHeighlinerSVG from "/img/component/HeighlinerHeader/purple-heighliner.svg";

import styles from "./index.module.scss";
import NavItems from "./NavItems";

export default function HeighlinerHeader(): React.ReactElement {
  const [headerBg, setHeaderBg] = useState<string>("");

  return (
    <header className={styles[headerBg]}>
      <nav className={clsx(styles.navbar, "container")}>
        <div className={styles.logoWrap}>
          <img
            src={
              require("@site/static/img/homepage/slogansection/purple-logo@3x.webp")
                .default
            }
            alt="with heighliner"
          />
          <WhiteHeighlinerSvg className={styles.whiteHeighliner} />
          <PurpleHeighlinerSVG className={styles.purpleHeighliner} />
        </div>
        <NavItems setHeaderBg={setHeaderBg} />
      </nav>
    </header>
  );
}
