/**
 * Link used for downloading certain file under `/static`.
 */

import React from "react";

import styles from "./index.module.scss";

interface Props {
  path: string;
}

export default function ({ path }: Props): React.ReactElement {
  return (
    <a href={path} download className={styles.download}>
      <span>Download</span>
    </a>
  );
}
