/**
 * Lay out cards in flexbox
 */

import React, { ReactElement } from "react";

import styles from "./index.module.scss";

interface Props {
  children: ReactElement | ReactElement[];
}

export default function ({ children }: Props): React.ReactElement {
  return <div className={styles.cardWrapper}>{children}</div>;
}
