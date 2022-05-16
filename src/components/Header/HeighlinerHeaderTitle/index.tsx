import React from "react";

import styles from "./index.module.scss";

interface Props {
  title: string;
}

export default function ({ title }: Props): React.ReactElement {
  return <h1 className={styles.title}>{title}</h1>;
}
