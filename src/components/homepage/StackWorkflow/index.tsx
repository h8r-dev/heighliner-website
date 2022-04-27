/**
 * stack workflow displayed on homepage
 */

import React from "react";
import clsx from "clsx";

import { Direction } from "@site/src/components/Line";

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
      <ul className={clsx("container", styles.workflow)}>
        <li className={styles.workflowImage}>
          <img
            src={
              require("@site/static/img/homepage/workflow/workflow@3x.webp")
                .default
            }
            alt="workflow"
          />
        </li>
        <li className={styles.separator}>
          <NerveCell />
          <Line />
          <NerveCell />
          <Line />
          <NerveCell />
        </li>
        <li className={styles.workflowText}>
          <Steps />
        </li>
      </ul>
    </div>
  );
}
