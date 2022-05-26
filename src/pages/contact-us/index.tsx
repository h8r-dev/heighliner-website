import React from "react";
import siteConfig from "@generated/docusaurus.config";

import Entries, { EntriesType } from "../../components/Entries";
import PageWrapper from "../../components/PageWrapper";
import styles from "./index.module.scss";

const entries: EntriesType = [
  {
    content:
      "Got questions? Have feedback? " +
      "Here are a couple of official channels to get in touch with us.",
  },
  {
    title: "Open an issue on GitHub",
    content: (
      <>
        Create an issue on our{" "}
        <a href={siteConfig.customFields.githubUrl as string} target="_blank">
          Github repo
        </a>
        .
      </>
    ),
  },
  {
    title: "Join Heighliner User Group on Discord",
    content: (
      <>
        Join our{" "}
        <a href={siteConfig.customFields.discordUrl as string} target="_blank">
          Discord channel
        </a>
      </>
    ),
  },
  {
    title: "Follow Heighliner's Twitter",
    content: (
      <>
        Follow us on{" "}
        <a href={siteConfig.customFields.twitterUrl as string}>Twitter</a>
      </>
    ),
  },
  {
    title: "Join Heighliner User Group on WeChat",
    imgPath: require("/img/page/contact-us/HeightLinerWeChat.jpg").default,
  },
  {
    title: "Follow Heighliner's WeChat Official Account",
    imgPath: require("/img/page/contact-us/WeChatChannel.png").default,
  },
  {
    title: "Email",
    content: (
      <>
        If you have any questions, don't hesitate to contact us at contact{" "}
        <a href={"mailto:" + siteConfig.customFields.contactEmail}>
          {siteConfig.customFields.contactEmail}
        </a>
      </>
    ),
  },
];

export default function Index(): React.ReactElement {
  return (
    <PageWrapper title="Contact us">
      {/* <Entries entries={entries} /> */}
      <iframe
        src="https://cdn.forms-content.sg-form.com/73f88cd2-dccb-11ec-8e46-52816f0f79c2"
        className={styles.sendgrid}
      />
    </PageWrapper>
  );
}
