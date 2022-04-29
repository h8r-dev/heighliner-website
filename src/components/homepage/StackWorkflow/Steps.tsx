import React, {useEffect} from "react";
import BrowserOnly from '@docusaurus/BrowserOnly';

import styles from "./index.module.scss";
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

            /**
             * judge dom is visible
             * @param ele dom
             * return boolean
             */
            function isEleVisible(ele) {
              var {top, right, bottom, left} = ele.getBoundingClientRect()
              var w = window.innerWidth
              var h = window.innerHeight
              if (bottom < 0 || top > h) {
                return false
              }
              if (right < 0 || left > w) {
                return false
              }
              return true
            }

            window.terminals.map(item => {
              let {id, asciiData} = item;
              let dom = document.getElementById(id);
              let renderFlag = false;
              window.addEventListener('scroll', () => {
                if (isEleVisible(dom) && !renderFlag) {
                  if (dom && LibComponent) {
                    renderFlag = true;
                    LibComponent.create(`data:text/plain;base64,${asciiData}`, dom, {
                      loop: true,
                      autoPlay: true,
                      terminalFontSize: '14px',
                      fit: false,
                      theme: 'asciinema',
                      rows: 19,
                    })
                  }
                }
              })
            })
          })
          return <></>;
        }}
      </BrowserOnly>
    </div>
  );
}
