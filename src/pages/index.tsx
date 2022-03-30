import React from "react";
import Layout from "@theme/Layout";

import { SloganSection } from "../components/homepage/SloganSection";
import { HighlinerDetail } from "../components/homepage/HeighlinerDetail";
import { HeighlinerFeatures } from "../components/homepage/HeighlinerFeatures";
import { WhyHeighliner } from "../components/homepage/WhyHeighliner";
import { StackWorkflow } from "../components/homepage/StackWorkflow";
import { Innovation } from "../components/homepage/Innovation";
import { JoinCommunity } from "../components/homepage/JoinCommunity";

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Hello from heighliner`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <SloganSection />
        <HighlinerDetail />
        <WhyHeighliner />
        <HeighlinerFeatures />
        <StackWorkflow />
        <Innovation />
        <JoinCommunity />
      </main>
    </Layout>
  )
}
