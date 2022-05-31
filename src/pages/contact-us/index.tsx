import React from "react";

import PageWrapper from "@site/src/components/PageWrapper";
import MediaMatrix from "@site/src/components/MediaMatrix";

import SendGridForm from "./SendGridForm";
import styles from "./index.module.scss";
import Title from "./Title";

export default function (): React.ReactElement {
  return (
    <PageWrapper
      title="Contact us"
      customSecondaryBottom={<MobileContactUsSection />}
    >
      <SendGridForm />
    </PageWrapper>
  );
}

function MobileContactUsSection() {
  return (
    <div className={styles.mobileContactUsSection}>
      <img src="/img/page/contact-us/wave@3x.webp" alt="without Heighliner" />
      <div className={styles.content}>
        <Title />
        <MediaMatrix />
      </div>
    </div>
  );
}
