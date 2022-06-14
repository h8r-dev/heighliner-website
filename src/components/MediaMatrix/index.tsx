import React from "react";

import styles from "./index.module.scss";

import siteConfig from "@generated/docusaurus.config";

export default function (): React.ReactElement {
  return (
    <div className={styles.mediaMatrix}>
      <ul>
        <li>
          <div className={styles.wechat}>
            <img
              src={require("/img/page/contact-us/WeChat@3x.png").default}
              alt="without Heighliner"
            />
            <div className={styles.qrCodes}>
              <div className={styles.pairs}>
                <div className={styles.pair}>
                  <img
                    src="/img/page/contact-us/wechatPersonalAccount@3x.png"
                    alt="Without Heighliner"
                  />
                  <p>Join Heighliner's User Group on WeChat.</p>
                </div>
                <div className={styles.pair}>
                  <img
                    src="/img/page/contact-us/wechatOfficialAccount@3x.png"
                    alt="Without Heighliner"
                  />
                  <p>Follow Heighliner's WeChat Official Account.</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href={siteConfig.customFields.twitterUrl as string}>
            <img
              src={require("/img/page/contact-us/Twitter@3x.png").default}
              alt="without Heighliner"
            />
          </a>
        </li>
        <li>
          <a href={siteConfig.customFields.linkedInUrl as string}>
            <img
              src={require("/img/page/contact-us/LinkedIn@3x.png").default}
              alt="without Heighliner"
            />
          </a>
        </li>
        <li>
          <a href={siteConfig.customFields.discordUrl as string}>
            <img
              src={require("/img/page/contact-us/Discord@3x.png").default}
              alt="without Heighliner"
            />
          </a>
        </li>
        <li>
          <a href={siteConfig.customFields.githubUrl as string}>
            <img
              src={require("/img/page/contact-us/GitHub@3x.png").default}
              alt="without Heighliner"
            />
          </a>
        </li>
        <li>
          <a href={siteConfig.customFields.youTubeUrl as string}>
            <img
              src={require("/img/page/contact-us/YouTube@3x.png").default}
              alt="without Heighliner"
            />
          </a>
        </li>
        <li>
          <a href={siteConfig.customFields.bilibiliUrl as string}>
            <img
              src={require("/img/page/contact-us/Bilibili@3x.png").default}
              alt="without Heighliner"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
