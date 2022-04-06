/**
 * Homepage
 */

import React from "react";

import { SloganSection } from "../components/homepage/SloganSection";
import { HeighlinerDetail } from "../components/homepage/HeighlinerDetail";
import { HeighlinerFeatures } from "../components/homepage/HeighlinerFeatures";
import { WhyHeighliner } from "../components/homepage/WhyHeighliner";
import { StackWorkflow } from "../components/homepage/StackWorkflow";
import { Innovation } from "../components/homepage/Innovation";
import { JoinCommunity } from "../components/homepage/JoinCommunity";
import { Footer } from "../components/homepage/Footer";

export default function Home(): JSX.Element {
  return (
    <main>
      <SloganSection />
      <HeighlinerDetail />
      <WhyHeighliner />
      <HeighlinerFeatures />
      <StackWorkflow />
      <Innovation />
      <JoinCommunity />
      <Footer />
    </main>
  )
}
