import React from "react";

import hlnListStacksCast from "/static/cast/hlnListStacks.cast";
import hlnSpinUpCast from "/static/cast/hlnSpinUp.cast";
import hlnStatusCast from "/static/cast/hlnStatus.cast";

import styles from "./index.module.scss";
import Step, { StepProps } from "./Step";

const terminals: StepProps[] = [
  {
    title: "选择",
    castFileUrl: hlnListStacksCast,
  },
  {
    title: "启动",
    castFileUrl: hlnSpinUpCast,
  },
  {
    title: "使用",
    castFileUrl: hlnStatusCast,
  },
];

export default function Steps(): React.ReactElement {
  return (
    <div className={styles.stepsWrap}>
      {terminals.map((terminal) => (
        <Step
          key={terminal.title}
          title={terminal.title}
          castFileUrl={terminal.castFileUrl}
        />
      ))}
    </div>
  );
}
