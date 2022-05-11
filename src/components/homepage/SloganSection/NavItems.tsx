import React, { useState } from "react";
import siteConfig from "@generated/docusaurus.config";
import Link from "@docusaurus/Link";

import HamburgerSVG from "/img/homepage/slogansection/hamburger.svg";
import CrossSVG from "/img/homepage/slogansection/cross.svg";
import { ToggleStatus } from "@site/src/utils/CommonEnum";

import styles from "./index.module.scss";

interface Props {
  setWhiteHeader: React.Dispatch<any>;
}

const NavLinks: { readonly name: string; readonly link: string }[] = [
  {
    name: "Docs",
    link: siteConfig.customFields.docsUrl as string,
  },
  {
    name: "Blog",
    link: siteConfig.customFields.blogUrl as string,
  },
  {
    name: "GitHub",
    link: siteConfig.customFields.githubUrl as string,
  },
];

export default function NavItems({
  setWhiteHeader,
}: Props): React.ReactElement {
  const [toggle, setToggle] = useState(ToggleStatus.Closed);
  const [slideClass, setSlideClass] = useState<typeof styles>({});

  function handleToggle() {
    switch (toggle) {
      case ToggleStatus.Closed:
        setToggle(ToggleStatus.Opening);
        setSlideClass(styles.slideIn);
        setWhiteHeader(styles.whiteHeader);
        break;
      case ToggleStatus.Opening:
        setToggle(ToggleStatus.Closed);
        setSlideClass(styles.slideOut);
        setWhiteHeader({});
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
        {NavLinks.map(({ name, link }) => (
          <li key={name}>
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>
      <div className={styles.toggleNavItems}>
        <ul className={slideClass}>
          {NavLinks.map(({ name, link }) => (
            <li key={name}>
              <Link to={link}>
                {name}
                <div className={styles.arrow}></div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
