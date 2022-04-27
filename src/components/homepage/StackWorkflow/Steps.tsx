import React from "react";

import styles from "./index.module.css";
import Step from "./Step";

const terminals = [
  { title: "Select" },
  { title: "Spin Up" },
  { title: "Enjoy" },
];

export default function Steps(): React.ReactElement {
  return (
    <div className={styles.stepsWrap}>
      {terminals.map((terminal) => 
        <Step title={terminal.title} />
      )}
    </div>
  );
}
