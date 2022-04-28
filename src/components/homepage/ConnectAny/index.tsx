/**
 * Create by ze.zhang on 2022.4.27
 */
import React from 'react';

import styles from './index.module.css';

export function ConnectAny() {
  return (
    <div>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>
          Connect <span className={styles.any}>any</span> preferred Tools and platform
        </div>
      </div>
      <div className={styles.imgWrapper}>
        <img
          src={require('@site/static/img/homepage/connectany/connect-any-5.webp').default}
          alt="Connect Any"
          className={styles.connectAny}
        />
      </div>
    </div>
  )
}


