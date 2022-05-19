/**
 * Create by ze.zhang on 2022.5.13
 */
import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";

import PageWrapper from "../components/PageWrapper/index";

import siteConfig from "@generated/docusaurus.config";
import styles from "../css/join-us.module.scss";

export const list = [
  {
    title: 'Sr. Manager, Developer Relations (Remote, United States)',
    desc: 'We are seeking a manager based in the Americas to build and lead the team of Developer Advocates.',
    icon: require("@site/static/img/join-us/icon1.webp").default,
    item: [
      {
        itemTitle: "As the leader of the Developer Relations team, you will:",
        itemList: [
          "Recruit, hire, develop and retain Developer Advocates based in the North America",
          "Collaborate to improve the relations between developers, industry partners and Heighliner",
          "Share our approach to community and advocacy with others in the industry through content like blogs, videos and presentations at summits.",
          "Identify and advance community collaboration opportunities"
        ]
      },
      {
        itemTitle: "You are a great fit for this role if:",
        itemList: [
          "You love open source and Cloud Native",
          "You have a passion for building talent via mentorship and/or through direct management",
          "You are a strong communicator and advocate for your people",
          "You know about DevOps and Cloud Native",
          "You know any of these: Heighliner, Dagger, CUE, Terraform, Nocalhost, KubeVela, Kubernetes",
          "You have experience managing a team or working as a Developer Advocate or similar role",
          "5+ years of experience in technology"
        ]
      }
    ]
  },
  {
    title: 'Developer Advocate (Remote, United States)',
    desc: 'Developer Advocates are responsible for the relationship between developers, communities, partners and Heighliner.',
    icon: require("@site/static/img/join-us/icon2.webp").default,
    item: [
      {
        itemTitle: "As a Developer Advocate, you will:",
        itemList: [
          "Collaborate to improve the relations between developers, industry partners and Heighliner",
          "Share our approach to community and advocacy with others in the industry through content like blogs, videos and presentations at summits.",
          "Identify and advance community collaboration opportunities",
          "Operate our Twitter, Discord, YouTube accounts",
          "Organize community meetups",
          "Talk with our users,fans and partners to gather any useful information"
        ]
      },
      {
        itemTitle: "You are a great fit for this role if:",
        itemList: [
          "You love open source and Cloud Native",
          "You are a strong communicator and advocate for your people",
          "You know about DevOps and Cloud Native",
          "You know any of these: Heighliner, Dagger, CUE, Terraform, Nocalhost, KubeVela, Kubernetes",
          "2+ years of experience in technology"
        ]
      },

    ]
  },
  {
    title: 'Backend Engineer (Remote, United States)',
    desc: 'Backend Engineers are responsible for the building of our reliable high-performance Heighliner Engine and Platform',
    icon: require("@site/static/img/join-us/icon3.webp").default,
    item: [
      {
        itemTitle: "As a Backend Engineer, you will:",
        itemList: [
          "Design and code the core features of Heighliner Engine and Platform",
          "Review peers' PR to improve the quality",
          "Make amazing Heighliner stacks that simplify development of cloud apps",
          "Write tech blogs and participate meetups to share the tech ideas"
        ]
      },
      {
        itemTitle: "You are a great fit for this role if:",
        itemList: [
          "You love open source and Cloud Native.",
          "You are familiar with golang, Java, Python, Node",
          "You know about DevOps and Cloud Native",
          "You are familiar with : Heighliner, Dagger, CUE, Terraform, Nocalhost, KubeVela, Kubernetes",
          "2+ years of experience in backend engineering"
        ]
      }
    ]
  }
]

export default function AboutUs(): JSX.Element {
  return (
    <PageWrapper title="Join us at Heighliner">
      <div className={styles.wrapper}>
        <div className={clsx(styles.pageTitle, styles.pcTitle)}>Join Heighliner and build the future of Cloud Native
        </div>
        <div className={clsx(styles.pageTitle, styles.mobileTitle)}>Join Us</div>
        <div className={styles.pageTitleSecond}>About Heighliner</div>
        <div className={styles.pageDesc}>
          Heighliner is a modern app development platform.
          It aims to help developers to build apps easily and quickly using state-of-the-art cloud native stacks.
          You can use Heighliner to spin up the development environment,
          and then can focus on writing the business code without worrying build and deploy.
        </div>
        <div className={styles.pageDesc}>
          The core team of Heighliner comes from <a href="https://nocalhost.dev" target="_blank">https://nocalhost.dev</a>
          , <a href="https://kubevela.io" target="_blank">https://kubevela.io</a>.
        </div>
        <div className={styles.pageDesc}>
          We are a young team, advocating freedom and openness,
          and have gathered a group of small partners who are full of curiosity,
          love open source, and dream of using technology to change the world.
          We aim to use the most advanced cloud-native open source technology,
          so that users don't need to care about the infrastructure,
          get a better development experience and the advantages of multi-cloud delivery,
          cost reduction and efficiency improvement.
        </div>
        <div className={clsx(styles.pageTitle, styles.pcTitle, styles.pcPositionTitle)}>Opening Position:</div>
        {
          list.map((i, index) => {
            let {title, desc, item, icon} = i;
            return (
              <div className={styles.hc} key={title}>
                <img src={icon} alt="" className={styles.hcIcon}/>
                <div className={styles.hcTitle} index={index}>{title}</div>
                <div className={styles.hcDesc}>{desc}</div>
                {
                  item.map(j => {
                    let {itemTitle, itemList} = j;
                    return (
                      <div key={itemTitle} className={styles.itemWrapper}>
                        <div className={styles.hcItemTitle}>{itemTitle}</div>
                        {
                          itemList.map(h => <div className={styles.hcItemDesc} key={h}>· {h}</div>)
                        }
                      </div>
                    )
                  })
                }
                <div className={styles.hcEmail}>Send us an email to apply this position:
                  <a href={"mailto:" + siteConfig.customFields.email}> {siteConfig.customFields.email}</a>
                </div>
              </div>
            )
          })}
        <div className={clsx(styles.positionTitle, styles.mobileTitle)}>OUR OPENING POSITIONS</div>
        {
          list.map((i, index) => {
            let {title} = i;
            return (
              <div className={styles.hcBox} key={index}>
                <div className={styles.hcBoxTitle}>{title}</div>
                <Link to={`/hc-detail?index=${index}`}>
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
    </PageWrapper>
  );
}
