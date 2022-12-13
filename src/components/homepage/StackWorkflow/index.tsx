/**
 * stack workflow displayed on homepage
 */

import React from "react";
import clsx from "clsx";

import styles from "./index.module.scss";
import NerveCell from "./NerveCell";
import Line from "./Line";
import Steps from "./Steps";
import FadeIn from "../../Animation/FadeIn";

export function StackWorkflow(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <img
        src={
          require("@site/static/img/homepage/whyheighliner/slogan-wave-3.webp")
            .default
        }
        alt="wave"
        className={styles.wavePic}
      />
      <FadeIn>
        <h1
          className={clsx(
            "homepage-section-title",
            styles.title,
          )}
        >
          开发者优先体验
        </h1>
      </FadeIn>
      <FadeIn>
        <ul
          className={clsx(
            styles.workflow,
          )}
        >
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
          <li>
            <Steps />
          </li>
        </ul>
      </FadeIn>
    </div>
  );
}
