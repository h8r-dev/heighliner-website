import React from "react";

import styles from "./index.module.scss";

interface Props {
  entry: {
    title: string;
    content?: string | React.ReactElement;
    imgPath?: string;
  };
}

export default function Entry({
  entry: { title, content, imgPath },
}: Props): React.ReactElement {
  return (
    <div className={styles.entry}>
      <div className={styles.title}>{title}</div>
      {content && <div className={styles.content}>{content}</div>}
      {imgPath && <img src={imgPath} />}
    </div>
  );
}
