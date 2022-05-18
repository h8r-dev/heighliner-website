import React from "react";

import Entries, { EntriesType } from "../components/Entries";
import List from "../components/List";
import PageWrapper from "../components/PageWrapper";
import LogoDownload from "@site/src/components/LogoDownload";

import styles from "../css/resources.module.scss";

const items = [
  <span>
    Heighliner Introduction Sliders:{" "}
    <a href="https://dl.h8r.io/heighliner-introduction-slides.pdf">View</a>
  </span>,
  <span>
    Brand &#38; Design:{" "}
    <a href="https://dl.h8r.io/brand.zip" download="Brand">
      Download
    </a>
  </span>,
];

const entries: EntriesType = [
  {
    title: "Resources Download Center",
    customComponent: <List items={items}/>
  },
  {
    title: "LOGO Download",
    customComponent: <LogoDownload/>
  }
];

export default function (): React.ReactElement {
  return (
    <PageWrapper title="Resources">
      <div className={styles.resources}>
        <Entries entries={entries} />
      </div>
    </PageWrapper>
  );
}
