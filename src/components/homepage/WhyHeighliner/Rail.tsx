import React from "react";

import styles from "./index.module.scss";

interface Props {
  classObject: typeof styles;
  style?: object
}

export default function Rail({ classObject, style }: Props): React.ReactElement {
  return (
    <img
      src={require("/static/img/homepage/whyheighliner/rail@3x.webp").default}
      className={classObject}
      style={style}
    />
  );
}
