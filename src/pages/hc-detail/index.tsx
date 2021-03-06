/**
 * Create by ze.zhang on 2022.5.13
 */
import React, {useEffect, useState} from "react";

import PageWrapper from "../../components/PageWrapper";

import siteConfig from "@generated/docusaurus.config";
import styles from "./index.module.scss";
import {hcList} from "@site/src/pages/join-us/index";

export default function Index(): JSX.Element {
  let [index, setIndex] = useState<string>('');

  useEffect(() => {
    let index: string = window.location.href.split("?")[1].split('=')[1];
    setIndex(index);
  }, [])

  return (
    <PageWrapper title="Join us">
      <div className={styles.wrapper}>
        {
          index &&
          <div className={styles.hc}>
            <div className={styles.hcTitle}>{hcList[index].title}</div>
            <div className={styles.hcDesc}>{hcList[index].desc}</div>
            {
              hcList[index].item.map((j, i) => {
                let {itemTitle, itemList} = j;
                return (
                  <div key={i}>
                    <div className={styles.hcItemTitle}>{itemTitle}</div>
                    {
                      itemList.map((h, i) => <div key={i} className={styles.hcItemDesc}>· {h}</div>)
                    }
                  </div>
                )
              })
            }
            <div className={styles.hcEmail}>Send us an email to apply this position:
              <a href={"mailto:" + siteConfig.customFields.email}> {siteConfig.customFields.email}</a>
            </div>
          </div>
        }
      </div>
    </PageWrapper>
  );
}
