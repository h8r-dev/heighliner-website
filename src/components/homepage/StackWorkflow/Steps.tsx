import React, {useEffect} from "react";
import BrowserOnly from '@docusaurus/BrowserOnly';

import styles from "./index.module.css";
import Step, {StepProps} from "./Step";
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
  useEffect(() => {
    window.terminals = terminals;
  }, [])
  return (
    <div className={styles.stepsWrap}>
      {terminals.map((terminal) =>
        <Step
          key={terminal.title}
          title={terminal.title}
          id={terminal.id}
        />
      )}
      <BrowserOnly>
        {() => {
          window.addEventListener('load', () => {
            const LibComponent = require('asciinema-player');
            window.terminals.map(item => {
              let {id, asciiData} = item;
              let dom = document.getElementById(id);
              if (dom && LibComponent) {
                LibComponent.create(`data:text/plain;base64,${asciiData}`, dom, {
                  loop: true,
                  autoPlay: true,
                  terminalFontSize: '14px',
                  fit: false,
                  theme: 'monokai',
                  rows: 19,
                  terminalFontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
                })
              }
            })
          })
          return <></>;
        }}
      </BrowserOnly>
    </div>
  );
}
