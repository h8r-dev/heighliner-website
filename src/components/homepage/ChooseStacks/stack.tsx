import React from "react";

import LinkSVG from "/static/img/homepage/choosestacks/link.svg";

import styles from "./index.module.scss";
import clsx from "clsx";

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
      <div className={clsx(styles.frameworkIcon, styles.firstIcon)}>
        <img src={props.firstIcon}></img>
      </div>
      {props.secondIcon && (
        <div className={clsx(styles.frameworkIcon, styles.secondIcon)}>
          <img src={props.secondIcon}></img>
        </div>
      )}
      <a href={props.link} className={styles.link}>
        <span>
          Read the document
        </span>
        <img src={require('/static/img/homepage/choosestacks/link@3x.webp').default} />
      </a>
    </div>
  );
}
