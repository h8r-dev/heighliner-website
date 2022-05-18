import React, { ReactElement } from "react";

import styles from "./index.module.scss";

interface Props {
  title?: string;
  items: string[] | ReactElement[];
}

export default function ({ title, items }: Props): React.ReactElement {
  return (
    <div className={styles.listWrap}>
      {title && <p className={styles.title}>{title}</p>}
      <ul className={styles.list}>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
