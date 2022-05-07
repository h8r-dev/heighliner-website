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
            Why Heighliner stack?
          </h1>
          <p className={styles.caption}>
            A Heighliner stack is a pre-configured portfolio of cloud-native
            tools. It makes sure cloud native applications are developed and
            deployed with best practices. Based on convention over configuration,
            it significantly reduces the overhead of building cloud-native
            applications.
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
