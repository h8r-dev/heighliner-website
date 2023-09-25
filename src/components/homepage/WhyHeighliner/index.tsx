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
            深圳氦三科技
          </h1>
        </FadeIn>
        <FadeIn>
          <p
            className={clsx(
              styles.caption,
            )}
          >
            He3（氦三科技）是一家专注于制作开发者喜爱的工具的创业公司。
            我们希望通过好用的工具来提升开发者的工作效率，让每一个开发者快乐编程，高效工作。
            创始人是由腾讯和阿里的高级专家组成的明星团队，深耕云原生和开发者工具领域多年，拥有丰富的技术积累和行业经验。
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
