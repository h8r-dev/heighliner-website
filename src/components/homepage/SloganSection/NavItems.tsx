import React, { useState } from "react";
import siteConfig from "@generated/docusaurus.config";
import Link from "@docusaurus/Link";

import HamburgerSVG from "/img/homepage/slogansection/hamburger.svg";
import CrossSVG from "/img/homepage/slogansection/cross.svg";
import { ToggleStatus } from "@site/src/utils/CommonEnum";

import styles from "./index.module.scss";

export default function NavItems(): React.ReactElement {
  const [toggle, setToggle] = useState(ToggleStatus.Closed);
  const [slideClass, setSlideClass] = useState<typeof styles>({});

  function handleToggle() {
    switch (toggle) {
      case ToggleStatus.Closed:
        setToggle(ToggleStatus.Opening);
        setSlideClass(styles.slideIn);
        break;
      case ToggleStatus.Opening:
        setToggle(ToggleStatus.Closed);
        setSlideClass(styles.slideOut);
        break;
    }
  }

  return (
    <div className={styles.navItemsWrap}>
      <button className={styles.hamburger} onClick={() => handleToggle()}>
        <HamburgerSVG
          style={{
            display: toggle === ToggleStatus.Closed ? "inline" : "none",
          }}
        />
        <CrossSVG
          style={{
            display: toggle === ToggleStatus.Opening ? "inline" : "none",
          }}
        />
      </button>
      <ul className={styles.navItems}>
        <li>
          <Link to={siteConfig.customFields.docsUrl as string}>Docs</Link>
        </li>
        <li>
          <Link to={siteConfig.customFields.blogUrl as string}>Blog</Link>
        </li>
        <li>
          <Link to={siteConfig.customFields.githubUrl as string}>GitHub</Link>
        </li>
      </ul>
      <div className={styles.toggleNavItems}>
        <ul className={slideClass}>
          <li>
            <Link to={siteConfig.customFields.docsUrl as string}>Docs</Link>
          </li>
          <li>
            <Link to={siteConfig.customFields.blogUrl as string}>Blog</Link>
          </li>
          <li>
            <Link to={siteConfig.customFields.githubUrl as string}>GitHub</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
