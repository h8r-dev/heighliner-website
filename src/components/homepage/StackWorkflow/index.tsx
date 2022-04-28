/**
 * stack workflow displayed on homepage
 */

import React from "react";
import clsx from "clsx";

import styles from "./index.module.css";
import NerveCell from "./NerveCell";
import Line from "./Line";
import Steps from "./Steps";

export function StackWorkflow(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <h1 className={clsx("homepage-section-title", styles.title)}>
        How stack works?
      </h1>
      <ul className={clsx(styles.workflow)}>
        <li className={styles.workflowImage}>
          <img src={require("@site/static/img/homepage/workflow/workflow2.webp").default} alt="workflow"/>
        </li>
        <li className={styles.separator}>
          <NerveCell />
          <Line />
          <NerveCell />
          <Line />
          <NerveCell />
        </li>
        <li>
          <Steps />
        </li>
      </ul>
    </div>
  );
}
