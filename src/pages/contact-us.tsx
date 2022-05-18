import React from "react";
import Entries, { EntriesType } from "../components/Entries";

import PageWrapper from "../components/PageWrapper";

import siteConfig from "@generated/docusaurus.config";

const entries: EntriesType = [
  {
    title: "Contact us",
    content:
      "Got questions? Have feedback? " +
      "Here are a couple of official channels to get in touch with us.",
  },
  {
    title: "Open an issue on GitHub",
    content: (
      <>
        Create an issue on our <a href={siteConfig.customFields.githubUrl as string} target="_blank">Github repo</a>.
      </>
    ),
  },
  {
    title: "Join Heighliner User Group on Discord",
    content: (
      <>
        Join our <a href={siteConfig.customFields.discordUrl as string} target="_blank">Discord channel</a>
      </>
    ),
  },
  {
    title: "Join Heighliner User Group on WeChat",
    imgPath: require("/img/page/contact-us/HeightLinerWeChat.jpg").default,
  },
  {
    title: "Follow Heighliner's WeChat Official Account",
    imgPath: require('/img/page/contact-us/WeChatChannel.png').default,
  },
  {
    title: "Email",
    content:
      (
        <>
          If you have any questions, don't hesitate to contact us at contact <a href={"mailto:" + siteConfig.customFields.email}>{siteConfig.customFields.email}</a>
        </>
      )
  },
];

export default function ContactUs(): React.ReactElement {
  return (
    <PageWrapper title="Contact us">
      <Entries entries={entries} />
    </PageWrapper>
  );
}
