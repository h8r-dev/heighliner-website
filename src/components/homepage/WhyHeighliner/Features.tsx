import clsx from "clsx";
import React from "react";

import Feature from "./Feature";
import styles from "./index.module.scss";

const features = [
  {
    title: "中立地",
    img: require("/static/img/homepage/whyheighliner/neutral@3x.webp").default,
    description:
      "没有厂商锁定。 Heighliner 适用于所有云提供商",
  },
  {
    title: "灵活地",
    img: require("/static/img/homepage/whyheighliner/flexible@3x.webp").default,
    description:
      "云端或本地，随您所愿。开发人员和团队没有摩擦",
  },
  {
    title: "开源",
    img: require("/static/img/homepage/whyheighliner/open@3x.webp").default,
    description: "核心引擎和模块全部开源",
  },
  {
    title: "可扩展",
    img: require("/static/img/homepage/whyheighliner/extensible@3x.webp").default,
    description:
      "基于开放核心，每个人都可以在 Heighliner 上构建自定义堆栈",
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
