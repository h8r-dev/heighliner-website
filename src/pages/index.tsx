/**
 * Homepage
 */

import React from "react";

import Head from '@docusaurus/Head'

import { SloganSection } from "../components/homepage/SloganSection";
import { HeighlinerDetail } from "../components/homepage/HeighlinerDetail";
import { HeighlinerFeatures } from "../components/homepage/HeighlinerFeatures";
import { WhyHeighliner } from "../components/homepage/WhyHeighliner";
import { StackWorkflow } from "../components/homepage/StackWorkflow";
import { Innovation } from "../components/homepage/Innovation";
import { JoinCommunity } from "../components/homepage/JoinCommunity";
import { Footer } from "../components/homepage/Footer";

import { Redirect } from '@docusaurus/router';
import { customFields } from "@site/docusaurus.config";

import styles from './index.module.scss'

export default function Home(): JSX.Element {
  // return <Redirect to={customFields.docsUrl as string} />
  return (
    <main className={styles.homepageWrapper}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minium-scale=1.0, user-scalable=no" />
      </Head>
      <SloganSection />
      {/* <HeighlinerDetail /> */}
      <WhyHeighliner />
      <HeighlinerFeatures />
      <StackWorkflow />
      <Innovation />
      <JoinCommunity />
      <Footer />
    </main>
  )
}
