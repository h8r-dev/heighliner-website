import React from "react";
import Entries from "../components/Entries";

import PageWrapper from "../components/PageWrapper";

const entries: {
  title: string;
  content?: string | React.ReactElement;
  imgPath?: string;
}[] = [
  {
    title: "Contact us",
    content:
      "Got questions? Have feedback? " +
      "Here are a couple of official channels to get in touch with us.",
  },
  {
    title: "Commit an issue on GitHub",
    content: (
      <>
        Create an issue on our <strong>Github repo</strong>.
      </>
    ),
  },
  {
    title: "Join Heighliner User Group on Discord",
    content: (
      <>
        Join our <strong>Discord channel</strong>
      </>
    ),
  },
  {
    title: "Join Heighliner User Group on WeChat",
    imgPath: require("/img/page/contact-us/WeChatOfficeAccount.png").default,
  },
  {
    title: "Follow Heighliner's WeChat Channel",
    imgPath: require('/img/page/contact-us/WeChatChannel.png').default,
  },
  {
    title: "Email",
    content:
      "If you have any questions, don't hesitate to contact us at contact@h8r.io",
  },
];

export default function ContactUs(): React.ReactElement {
  return (
    <PageWrapper title="Contact us">
      <Entries entries={entries} />
    </PageWrapper>
  );
}
