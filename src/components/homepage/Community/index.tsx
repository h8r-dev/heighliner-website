/**
 * Create by ze.zhang on 2022.4.27
 */
import React from 'react';

import QuoteSVG from '@site/static/img/homepage/community/quote.svg'

import styles from "./index.module.css";

export function Community() {
  return (
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
              <QuoteSVG/>
            </div>
            We have significantly increased our development speed by using
            Dagger. It is modern, simple, and developer friendly! More
            important, we believe in the long term value that open source
            brings us: building interesting things together even across
            continents and borders.
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
              <div className={styles.personName}>Hongchao Deng</div>
              <div className={styles.personTitle}>CTO, Heighliner</div>
              <div className={styles.personTitle}>Co-Chair, CNCF App-Delivery TAG</div>
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
              <QuoteSVG/>
            </div>
            <div style={{visibility: 'hidden'}}> 
              {/** Waiting for Solomon */}
              Heighliner is a great project that produces modern stacks for developers.
              I'm inspired to see the community thriving around Dagger and containers.
            </div>
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
              <div className={styles.personTitle}>Founder, Dagger</div>
              <div className={styles.personTitle}>Also known for founding Docker</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

