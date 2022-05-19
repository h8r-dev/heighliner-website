import React from "react";

import styles from "./index.module.scss";
import DownLoadLink from "@site/src/components/Link/DownLoadLink";

interface DownloadList {
  icon: string,
  downloadUrl: string
}

const downloadList: DownloadList[] = [
  {
    icon: require('@site/static/resources/downloadIcon1.webp').default,
    downloadUrl: require('/static/resources/primayLogo.zip').default,
  },
  {
    icon: require('@site/static/resources/downloadIcon2.webp').default,
    downloadUrl: require('/static/resources/verticalLogo.zip').default,
  },
  {
    icon: require('@site/static/resources/downloadIcon3.webp').default,
    downloadUrl: require('/static/resources/logo.zip').default,
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
              <DownLoadLink
                path={downloadUrl}
              />
            </div>
          )
        })
      }
    </div>
  );
}
