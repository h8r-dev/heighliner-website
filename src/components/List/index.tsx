import React, { ReactElement } from "react";

import styles from "./index.module.scss";

interface Props {
  items: string[] | ReactElement[];
}

export default function ({ items }: Props): React.ReactElement {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}
