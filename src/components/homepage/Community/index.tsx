/**
 * Create by ze.zhang on 2022.4.27
 */
import React from 'react';

import QuoteSVG from '@site/static/img/homepage/community/quote.svg'

import styles from "./index.module.css";
import FadeIn from '../../Animation/FadeIn';

export function Community() {
  return (
    <FadeIn>
      <div>
        {/* not use enum bacause only two card*/}
        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <div className={styles.logoWrapper}>
              <img
                src={require('@site/static/img/homepage/community/community-title-left.webp').default}
                alt="Heighliner Logo"
                className={styles.leftLogo}
              />
            </div>
            <div className={styles.desc}>
              <div className={styles.quoteIcon}>
                <QuoteSVG />
              </div>
              通过使用 Dagger，我们显着提高了开发速度。它现代、简单且对开发人员友好！更重要的是，我们相信开源给我们带来的长期价值：即使跨越大陆和国界，也能一起构建有趣的东西。
            </div>
            <div className={styles.introduce}>
              <div
                className={styles.personPhoto}
              >
                <img
                  src={require('@site/static/img/homepage/community/hongchao-photo.webp').default}
                  alt="Hongchao Deng"
                />
              </div>

              <div className={styles.personDesc}>
                <div className={styles.personName}>邓洪超</div>
                <div className={styles.personTitle}>CTO, Heighliner</div>
                <div className={styles.personTitle}>联合主席, CNCF App-Delivery TAG</div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.logoWrapper}>
              <img
                src={require('@site/static/img/homepage/community/community-title-right.webp').default}
                alt="Heighliner Logo"
                className={styles.rightLogo}
              />
            </div>
            <div className={styles.desc}>
              <div className={styles.quoteIcon}>
                <QuoteSVG />
              </div>
              Heighliner 是一个非常令人兴奋的项目。开发人员设置现代云堆栈仍然太难，而 Heighliner 可以让它变得更容易。由于它在底层使用 Dagger，开发人员可以自定义堆栈的各个方面。这是两全其美的。
            </div>
            <div className={styles.introduce}>
              <div
                className={styles.personPhoto}
              >
                <img
                  src={require('@site/static/img/homepage/community/solomon-photo.webp').default}
                  alt="Solomon Hykes"
                />
              </div>
              <div className={styles.personDesc}>
                <div className={styles.personName}>Solomon Hykes</div>
                <div className={styles.personTitle}>创始人, Dagger</div>
                <div className={styles.personTitle}>Docker</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

