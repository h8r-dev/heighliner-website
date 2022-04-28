import clsx from "clsx";
import React from "react";

import styles from "./index.module.scss";
import Stack from "./stack";

const stacks = [
  {
    name: "Gin-Next",
    decoratedIcon: require("/static/img/homepage/choosestacks/pink@3x.webp").default,
    firstIcon: require("/static/img/homepage/choosestacks/Gin@3x.webp").default,
    secondIcon: require("/static/img/homepage/choosestacks/Nextjs@3x.webp").default,
    link: "https://heighliner.dev/docs/overview/intro",
  },
  {
    name: "Spring-Vue",
    decoratedIcon: require("/static/img/homepage/choosestacks/green@3x.webp").default,
    firstIcon: require("/static/img/homepage/choosestacks/Spring@3x.webp").default,
    secondIcon: require("/static/img/homepage/choosestacks/Vue@3x.webp").default,
    link: "https://heighliner.dev/docs/overview/intro",
  },
  {
    name: "Gin-Vue",
    decoratedIcon: require("/static/img/homepage/choosestacks/blue@3x.webp").default,
    firstIcon: require("/static/img/homepage/choosestacks/Gin@3x.webp").default,
    secondIcon: require("/static/img/homepage/choosestacks/Vue@3x.webp").default,
    link: "https://heighliner.dev/docs/overview/intro",
  },
  {
    name: "Remix",
    decoratedIcon: require("/static/img/homepage/choosestacks/blue@3x.webp").default,
    firstIcon: require("/static/img/homepage/choosestacks/Remix@3x.webp").default,
    link: "https://heighliner.dev/docs/overview/intro",
  },
];

export function ChooseStack(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <img 
        src={require("/static/img/homepage/choosestacks/toprighcubes@3x.webp").default}
        alt="with heighliner"
        className={styles.topRightCubes}
      />
      <img 
        src={require("/static/img/homepage/choosestacks/downleftcubes@3x.webp").default}
        alt="with heighliner"
        className={styles.downLeftCubes}
      />
      <h1 className={clsx("homepage-section-title")}>
        Start from a dedicated stack
      </h1>
      <div className={styles.stacksWrap}>
        <img 
          src={require("/static/img/homepage/choosestacks/middlecubes@3x.webp").default}
          alt="with heighliner"
        />
        {stacks.map((stack) => (
          <Stack
            key={stack.name}
            name={stack.name}
            decoratedIcon={stack.decoratedIcon}
            firstIcon={stack.firstIcon}
            secondIcon={stack.secondIcon}
            link={stack.link}
          />
        ))}
      </div>
    </div>
  );
}
