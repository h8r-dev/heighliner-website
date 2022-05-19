import clsx from "clsx";
import React from "react";

import Feature from "./Feature";
import styles from "./index.module.scss";

const features = [
  {
    title: "neutral",
    img: require("/static/img/homepage/whyheighliner/neutral@3x.webp").default,
    description:
      "No vendor lock-in. Heighliner is suitable for all Cloud Provider",
  },
  {
    title: "flexible",
    img: require("/static/img/homepage/whyheighliner/flexible@3x.webp").default,
    description:
      "Cloud or on-premise, as you wish. No friction for developer and team",
  },
  {
    title: "open",
    img: require("/static/img/homepage/whyheighliner/open@3x.webp").default,
    description: "The core engine and modules are all open source",
  },
  {
    title: "extensible",
    img: require("/static/img/homepage/whyheighliner/extensible@3x.webp").default,
    description:
      "Based on an open core, everyone can build custom stacks on Heighliner",
  },
];

export default function Features(): React.ReactElement {
  return (
    <div className={clsx('container', styles.featuresContain)}>
      {features.map((feature) => (
        <Feature
          key={feature.title}
          title={feature.title}
          imgPath={feature.img}
          description={feature.description}
        />
      ))}
    </div>
  );
}
