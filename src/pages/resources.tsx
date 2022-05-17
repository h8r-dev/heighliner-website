import React from "react";

import Entries, { EntriesType } from "../components/Entries";
import HeighlinerHeader from "../components/Header/HeighlinerHeader";
import HeighlinerHeaderBg from "../components/Header/HeighlinerHeaderBg";
import HeighlinerHeaderTitle from "../components/Header/HeighlinerHeaderTitle";
import { Footer } from "../components/homepage/Footer";
import List from "../components/List";

const items = [
  (<span>
    Heighliner Introduction Sliders:
    <a href="https://dl.h8r.io/heighliner-introduction-slides.pdf">View</a>
  </span>),
  (
    <span>
      Brand &#38; Design:
      <a href="https://dl.h8r.io/brand.zip" download="Brand">Download</a>
    </span>
  )
]

const entries: EntriesType = [
  {
    title: "Resources Download Center",
    customComponent: <List items={items}/>
  }
];

export default function (): React.ReactElement {
  return (
    <>
      <HeighlinerHeaderBg>
        <HeighlinerHeader />
        <HeighlinerHeaderTitle title="Resources"/>
      </HeighlinerHeaderBg>
      <Entries entries={entries} />
      <Footer />
    </>
  );
}
