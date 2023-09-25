/**
 * Homepage
 */

import React from "react";

import Head from "@docusaurus/Head";

import { SloganSection } from "../components/homepage/SloganSection";
import { WhyHeighliner } from "../components/homepage/WhyHeighliner";
import { StackWorkflow } from "../components/homepage/StackWorkflow";
import { ChooseStack } from "../components/homepage/ChooseStacks";
import { JoinCommunity } from "../components/homepage/JoinCommunity";
import { ConnectAny } from "../components/homepage/ConnectAny";
import { Community } from "@site/src/components/homepage/Community";
import { Footer } from "../components/homepage/Footer";

import styles from "./index.module.scss";

export default function Home(): JSX.Element {
  return (
    <main className={styles.homepageWrapper}>
      {/*<Head>*/}
      {/*  <meta*/}
      {/*    name="viewport"*/}
      {/*    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"*/}
      {/*  />*/}
      {/*</Head>*/}
      <SloganSection />
      <WhyHeighliner />
      <JoinCommunity />

      {/*<div className={styles.tableMask}>*/}
      {/*  <StackWorkflow />*/}
      {/*  <ChooseStack />*/}
      {/*  <ConnectAny />*/}
      {/*</div>*/}
      <Community />


      <Footer />
    </main>
  );
}
