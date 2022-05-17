import React from "react";

import styles from "./index.module.scss";

interface EntryType {
  title: string;
  content?: string | React.ReactElement;
  imgPath?: string;
  customComponent?: React.ReactElement | React.ReactElement[];
}

interface Props {
  entry: EntryType;
}

export default function Entry({
  entry: { title, content, imgPath, customComponent },
}: Props): React.ReactElement {
  return (
    <div className={styles.entry}>
      <div className={styles.title}>{title}</div>
      {content && <div className={styles.content}>{content}</div>}
      {imgPath && <img src={imgPath} />}
      {customComponent}
    </div>
  );
}

export { EntryType };
