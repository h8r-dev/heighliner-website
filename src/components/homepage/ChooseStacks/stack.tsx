import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";

import styles from "./index.module.scss";

interface Props {
  name: string;
  decoratedIcon: string;
  firstIcon: string;
  secondIcon?: string;
  link: string;
  showMiddleCubes: boolean;
}

export default function Stack(props: Props): React.ReactElement {
  return (
    <div className={styles.stackWrap}>
      <img className={styles.decoratedIcon} src={props.decoratedIcon}></img>
      <div className={styles.stackName}>{props.name}</div>
      <div className={styles.iconAndLink}>
        <div className={styles.iconWrapper}>
          <div className={clsx(styles.frameworkIcon, styles.firstIcon)}>
            <img src={props.firstIcon}></img>
          </div>
          {props.secondIcon && (
            <div className={clsx(styles.frameworkIcon, styles.secondIcon)}>
              <img src={props.secondIcon}></img>
            </div>
          )}
        </div>
        <Link to={props.link} className={styles.link}>
          <span>查看文档</span>
        </Link>
        <Link to={props.link} className={styles.linkIcon}>
          <img src={require('@site/static/img/homepage/choosestacks/goDocument.webp').default} alt="" />
        </Link>
      </div>
    </div>
  );
}
