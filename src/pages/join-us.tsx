/**
 * Create by ze.zhang on 2022.5.13
 */
import React from "react";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";

import siteConfig from "@generated/docusaurus.config";
import {Footer} from "../components/homepage/Footer";

import styles from "../css/join-us.module.scss";

export const list = [
  {
    title: 'Sr. Manager, Developer Relations(Remote, United States)',
    desc: 'We are seeking a manager based in the Americas to build and lead the team of Developer Advocates.',
    item: [
      {
        itemTitle: "As the leader of Developer Relations team, you will:",
        itemList: [
          "Recruit, hire, develop and retain Developer Advocates based in the North ",
          "Recruit, hire, develop and retain Developer Advocates based in the North ",
          "Recruit, hire, develop and retain Developer Advocates based in the North America nd retain Developer Advocates based in the North America",
          "Recruit, hire, develop and retain Developer Advocates based in the North America"
        ]
      }
    ]
  },
  {
    title: 'Sr. Manager, Developer Relations(Remote, United States)',
    desc: 'We are seeking a manager based in the Americas to build and lead the team of Developer Advocates.',
    item: [
      {
        itemTitle: "As the leader of Developer Relations team, you will:",
        itemList: [
          "Recruit, hire, develop and retain Developer Advocates based in the North ",
          "Recruit, hire, develop and retain Developer Advocates based in the North ",
          "Recruit, hire, develop and retain Developer Advocates based in the North America nd retain Developer Advocates based in the North America",
          "Recruit, hire, develop and retain Developer Advocates based in the North America"
        ]
      }
    ]
  },
  {
    title: 'Sr. Manager, Developer Relations(Remote, United States)',
    desc: 'We are seeking a manager based in the Americas to build and lead the team of Developer Advocates.',
    item: [
      {
        itemTitle: "As the leader of Developer Relations team, you will:",
        itemList: [
          "Recruit, hire, develop and retain Developer Advocates based in the North ",
          "Recruit, hire, develop and retain Developer Advocates based in the North ",
          "Recruit, hire, develop and retain Developer Advocates based in the North America nd retain Developer Advocates based in the North America",
          "Recruit, hire, develop and retain Developer Advocates based in the North America"
        ]
      }
    ]
  }
]

export default function AboutUs(): JSX.Element {
  return (
    <main className={styles.joinUs}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.pageTitle}>Join Heighliner and build the future of Cloud Native</div>
        <div className={styles.pageTitleSecond}>About Heighliner</div>
        <div className={styles.pageDesc}>
          Heighliner is a modern app development platform.
          It aims to help developers to build apps easily and quickly using state-of-the-art cloud native stacks.
          You can use Heighliner to spin up the development environment,
          and then can focus on writing the business code without worrying build and deploy.
        </div>
        <div className={styles.pageDesc}>
          The core team of Heighliner comes from
          &nbsp;<a href="https://nocalhost.dev" target="_blank">https://nocalhost.dev</a>
          &nbsp;<a href="https://kubevela.io" target="_blank">https://kubevela.io</a> .
        </div>
        <div className={styles.pageDesc}>
          We are a young team, advocating freedom and openness,
          and have gathered a group of small partners who are full of curiosity,
          love open source, and dream of using technology to change the world.
          We aim to use the most advanced cloud-native open source technology,
          so that users don't need to care about infrastructure,
          get a better development experience and the advantages of multi-cloud delivery,
          cost reduction and efficiency improvement.
        </div>
        {
          list.map(i => {
            let {title, desc, item} = i;
            return (
              <div className={styles.hc}>
                <div className={styles.hcTitle}>{title}</div>
                <div className={styles.hcDesc}>{desc}</div>
                {
                  item.map(j => {
                    let {itemTitle, itemList} = j;
                    return (
                      <>
                        <div className={styles.hcItemTitle}>{itemTitle}</div>
                        {
                          itemList.map(h => <div className={styles.hcItemDesc}>· {h}</div>)
                        }
                      </>
                    )
                  })
                }
                <div className={styles.hcEmail}>Send us an email to apply this position:
                  <a href={"mailto:" + siteConfig.customFields.email}> {siteConfig.customFields.email}</a>
                </div>
              </div>
            )
          })}
        {
          list.map((i, index) => {
            let {title} = i;
            return (
              <div className={styles.hcBox}>
                <div className={styles.hcBoxTitle}>{title}</div>
                <Link to={`./hc-detail?index=${index}`}>
                  <div className={styles.hcBoxApply}>
                    <img src={require('@site/static/img/join-us/apply.webp').default} alt=""/>
                    <span>Apply here</span>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </div>
      <Footer/>
    </main>
  );
}
