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
    id: 'Select'
  },
  {
    title: 'Spin Up',
    asciiData: hlnSpinUp,
    id: 'Spin Up',
  },
  {
    title: 'Enjoy',
    asciiData: hlnStatus,
    id: 'Enjoy',
  },
];

export default function Steps(): React.ReactElement {
  return (
    <div className={styles.stepsWrap}>
      {terminals.map((terminal) =>
        <Step
          key={terminal.title}
          title={terminal.title}
          id={terminal.id}
          asciiData={terminal.asciiData}
        />
      )}
    </div>
  )
}
