/**
 * Why Heighliner displayed on homepage
 */

import React from "react";
import clsx from "clsx";

import styles from "./index.module.scss";
import PicturesSlider from "./PicturesSlider";
import Features from "./Features";

export function WhyHeighliner(): React.ReactElement {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={clsx(styles.content)}>
          <h1 className={clsx("homepage-section-title", styles.title)}>
            Deliver Stack-as-Code
          </h1>
          <p className={styles.caption}>
            Heighliner is a modern developer tool that deliver your application stack as code.
            It codifies the best practices of developing and deploying cloud native applications.
            Based on convention over configuration, Heighliner stacks significantly reduce the overhead of building cloud-native applications.
            With Heighliner, you can version, reuse, and share your app stacks.
            You can even compose existing stacks to build more advanced stacks.
          </p>
          <main className={styles.main}>
            <PicturesSlider/>
            <Features/>
          </main>
        </div>
      </div>
    </>
  );
}
