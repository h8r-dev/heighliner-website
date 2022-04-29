/**
 * Create by ze.zhang on 2022.4.27
 */
import React from 'react';

import styles from "./index.module.css";
import clsx from "clsx";

export function Community() {
  return (
    <div>
      <div className={clsx("homepage-section-title", styles.title)}>Community Collaboration</div>
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
            <div>“Cloud native stack</div>
            <div>Heighliner Could amaze me</div>
            <div>everyday”</div>
          </div>
          <div className={styles.introduce}>
            <img
              src={require('@site/static/img/homepage/community/hongchao-photo.webp').default}
              alt="Hongchao Deng"
              className={styles.personPhoto}
            />
            <div className={styles.personDesc}>
              <div className={styles.personName}>Hongchao Deng</div>
              <div className={styles.personTitle}>CTO, Heighliner</div>
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
            <div>“Cloud native stack</div>
            <div>Heighliner Could amaze me</div>
            <div>everyday”</div>
          </div>
          <div className={styles.introduce}>
            <img
              src={require('@site/static/img/homepage/community/solomon-photo.webp').default}
              alt="Solomon Hykes"
              className={styles.personPhoto}
            />
            <div className={styles.personDesc}>
              <div className={styles.personName}>Solomon Hykes</div>
              <div className={styles.personTitle}>Founder, Dagger</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

