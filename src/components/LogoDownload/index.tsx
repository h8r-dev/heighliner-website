import React from "react";

import styles from "./index.module.scss";

interface DownloadList {
  icon: string,
  downloadUrl: string
}

const downloadList: DownloadList[] = [
  {
    icon: require('@site/static/resources/downloadIcon1.webp').default,
    downloadUrl: '/resources/primayLogo.zip'
  },
  {
    icon: require('@site/static/resources/downloadIcon2.webp').default,
    downloadUrl: '/resources/verticalLogo.zip'
  },
  {
    icon: require('@site/static/resources/downloadIcon3.webp').default,
    downloadUrl: '/resources/logo.zip'
  },
]

export default function LogoDownload(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      {
        downloadList.map((p, index) => {
          let {icon, downloadUrl} = p;
          return (
            <div className={styles.itemWrapper} key={index}>
              <img src={icon} alt=""/>
              <a href={downloadUrl} target="_blank">Download</a>
            </div>
          )
        })
      }
    </div>
  );
}
