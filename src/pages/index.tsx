/**
 * Homepage
 */

import React, { useEffect } from "react";

import Head from "@docusaurus/Head";
import { usePluginData } from "@docusaurus/useGlobalData";

import { SloganSection } from "../components/homepage/SloganSection";
import { WhyHeighliner } from "../components/homepage/WhyHeighliner";
import { StackWorkflow } from "../components/homepage/StackWorkflow";
import { ChooseStack } from "../components/homepage/ChooseStacks";
import { JoinCommunity } from "../components/homepage/JoinCommunity";
import { ConnectAny } from "../components/homepage/ConnectAny";
import { Community } from "@site/src/components/homepage/Community";
import { Footer } from "../components/homepage/Footer";

import styles from "./index.module.scss";
import Version from "../components/Version";

export default function Home(): JSX.Element {
  const { CommitHash, BuildTime } = usePluginData(
    "store-git-commit-info-plugin"
  ) as { [index: string]: string };

  console.group("Version Information");
    console.log("Commit Hash: " + CommitHash);
    console.log("Build time: " + BuildTime);
    console.groupEnd();

  // const { CommitHash, BuildTime } = useGlobalData();

  // useEffect(() => {
    
  // }, [CommitHash, BuildTime]);

  return (
    <main className={styles.homepageWrapper}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minium-scale=1.0, user-scalable=no"
        />
      </Head>
      <SloganSection />
      <WhyHeighliner />
      <div className={styles.tableMask}>
        <StackWorkflow />
        <ChooseStack />
        <ConnectAny />
      </div>
      <Community />
      <JoinCommunity />
      <Footer />
    </main>
  );
}
