import React from "react";

import Feature from "./Feature";
import styles from "./index.module.css";

const features = [
  {
    title: "nautral",
    imgSrc: require("@site/static/img/homepage/whyheighliner/neutral@3x.webp")
      .default,
    description:
      "No vendor lock-in. Heighliner is suitable for all Cloud Provider",
  },
  {
    title: "flexible",
    imgSrc: require("@site/static/img/homepage/whyheighliner/flexible@3x.webp")
      .default,
    description:
      "Cloud or on-premise, as you wish. No friction for developer and team",
  },
  {
    title: "open",
    imgSrc: require("@site/static/img/homepage/whyheighliner/open@3x.webp")
      .default,
    description: "The core engine and modules are all open source",
  },
  {
    title: "extensible",
    imgSrc:
      require("@site/static/img/homepage/whyheighliner/extensible@3x.webp")
        .default,
    description:
      "Based on a open core, everyone can build mod/stack upon Heighliner",
  },
];

export default function Features(): React.ReactElement {
  return (
    <div className={styles.flexContain}>
      {features.map((feature) => 
        <Feature
          key={feature.title}
          title={feature.title}
          imgPath={feature.imgSrc}
          description={feature.description}
        />
      )}
    </div>
  );
}
