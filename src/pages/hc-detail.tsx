/**
 * Create by ze.zhang on 2022.5.13
 */
import React, {useEffect, useState} from "react";

import {Footer} from "../components/homepage/Footer";
import HeighlinerHeader from "../components/Header/HeighlinerHeader";
import HeighlinerHeaderBg from "../components/Header/HeighlinerHeaderBg";

import siteConfig from "@generated/docusaurus.config";
import styles from "../css/hc-detail.module.scss";
import {list} from "@site/src/pages/join-us";

export default function HcDetail(): JSX.Element {
  let [index, setIndex] = useState<string>('');

  useEffect(() => {
    let index: string = window.location.href.split("?")[1].split('=')[1];
    setIndex(index);
  }, [])

  return (
    <>
      <HeighlinerHeaderBg>
        <HeighlinerHeader/>
      </HeighlinerHeaderBg>
      <div className={styles.joinUs}>
        <div className={styles.wrapper}>
          {
            index &&
            <div className={styles.hc}>
              <div className={styles.hcTitle}>{list[index].title}</div>
              <div className={styles.hcDesc}>{list[index].desc}</div>
              {
                list[index].item.map((j, i) => {
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
      </div>
      <Footer/>
    </>
  );
}
