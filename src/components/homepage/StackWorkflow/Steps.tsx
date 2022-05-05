import React from "react";

import styles from "./index.module.scss";
import Step, { StepProps } from "./Step";
import {
  hlnListStacks,
  hlnSpinUp,
  hlnStatus,
} from './asciiData'

const terminals: StepProps[] = [
  {
    title: 'Select',
    asciiData: hlnListStacks,
  },
  {
    title: 'Spin Up',
    asciiData: hlnSpinUp,
  },
  {
    title: 'Enjoy',
    asciiData: hlnStatus,
  },
];

export default function Steps(): React.ReactElement {
  return (
    <div className={styles.stepsWrap}>
      {terminals.map((terminal) =>
        <Step
          key={terminal.title}
          title={terminal.title}
          asciiData={terminal.asciiData}
        />
      )}
    </div>
  )
}
