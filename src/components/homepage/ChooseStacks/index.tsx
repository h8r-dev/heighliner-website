import clsx from "clsx";
import React from "react";

import { customFields } from "@site/docusaurus.config";

import styles from "./index.module.scss";
import Stack from "./stack";

const stacks = [
  {
    name: "Gin-Next",
    decoratedIcon: require("/static/img/homepage/choosestacks/pink@3x.webp").default,
    firstIcon: require("/static/img/homepage/choosestacks/Gin@3x.webp").default,
    secondIcon: require("/static/img/homepage/choosestacks/Nextjs@3x.webp").default,
    link: customFields.ginNextStackUrl as string,
  },
  {
    name: "Spring-Vue",
    decoratedIcon: require("/static/img/homepage/choosestacks/green@3x.webp").default,
    firstIcon: require("/static/img/homepage/choosestacks/Spring@3x.webp").default,
    secondIcon: require("/static/img/homepage/choosestacks/Vue@3x.webp").default,
    link: customFields.sprintVueStackUrl as string,
  },
  {
    name: "Gin-Vue",
    decoratedIcon: require("/static/img/homepage/choosestacks/blue@3x.webp").default,
    firstIcon: require("/static/img/homepage/choosestacks/Gin@3x.webp").default,
    secondIcon: require("/static/img/homepage/choosestacks/Vue@3x.webp").default,
    link: customFields.ginVueStackUrl as string,
  },
  {
    name: "Remix",
    decoratedIcon: require("/static/img/homepage/choosestacks/red@3x.webp").default,
    firstIcon: require("/static/img/homepage/choosestacks/Remix@3x.webp").default,
    link: customFields.remixStackUrl as string,
  },
];

export function ChooseStack(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <h1 className={clsx("homepage-section-title", styles.title)}>
        Start from a dedicated stack
      </h1>
      <div className={styles.stacksWrap}>
        {stacks.map((stack, index) => (
          <Stack
            key={stack.name}
            name={stack.name}
            decoratedIcon={stack.decoratedIcon}
            firstIcon={stack.firstIcon}
            secondIcon={stack.secondIcon}
            link={stack.link}
            showMiddleCubes={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
