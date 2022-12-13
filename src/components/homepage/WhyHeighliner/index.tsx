/**
 * Why Heighliner displayed on homepage
 */

import React from "react";
import clsx from "clsx";

import styles from "./index.module.scss";
import PicturesSlider from "./PicturesSlider";
import Features from "./Features";
import PicturesSliderInMobile from "./PicturesSliderInMobile";
import FadeIn from "../../Animation/FadeIn";

export function WhyHeighliner(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.content)}>
        <FadeIn>
          <h1
            className={clsx(
              "homepage-section-title",
              styles.title,
            )}
          >
            交付堆栈即代码
          </h1>
        </FadeIn>
        <FadeIn>
          <p
            className={clsx(
              styles.caption,
            )}
          >
            Heighliner 是一种现代开发人员工具，可交付您的应用程序
            堆叠为代码。它编纂了开发和管理的最佳实践
            部署云原生应用程序。基于约定
            配置， Heighliner 堆栈显着减少的开销
            构建云原生应用程序。使用 Heighliner，您可以对版本、
            重用并共享您的应用程序堆栈。您甚至可以组合现有的堆栈
            构建更高级的堆栈。
          </p>
        </FadeIn>
        <main className={styles.main}>
          <div className={styles.pictureSliderInMobile}>
            <PicturesSliderInMobile />
          </div>
          <div className={styles.pictureSlider}>
            <PicturesSlider />
          </div>
          <FadeIn>
            <Features />
          </FadeIn>
        </main>
      </div>
    </div>
  );
}
