import React from "react";

import styles from "./index.module.scss";

interface Props {
  classObject: typeof styles;
}

export default function Rail({ classObject }: Props): React.ReactElement {
  return (
    <img
      src={require("/static/img/homepage/whyheighliner/rail@3x.webp").default}
      className={classObject}
    />
  );
}
