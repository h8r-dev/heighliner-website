import React from "react";
import Layout from "@theme/Layout";

import { SloganSection } from "../components/homepage/SloganSection";
import { HighlinerDetail } from "../components/homepage/HeighlinerDetail";
import { HeighlinerFeatures } from "../components/homepage/HeighlinerFeatures";
import { WhyHeighliner } from "../components/homepage/WhyHeighliner";
import { StackWorkflow } from "../components/homepage/StackWorkflow";

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
      </main>
    </Layout>
  );
}
