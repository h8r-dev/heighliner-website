/**
 * stack workflow displayed on homepage
 */

import React from "react";
import clsx from "clsx";

import styles from './index.module.css'
import { SectionTitleIcon } from "../SectionTitleIcon";
import { Line, Direction } from "@site/src/components/Line";

const workflowSteps: any[] = [
  {
    icon: require('@site/static/img/homepage/step-1.png').default,
    title: 'Get a Stack',
    desc: 'Pull a stack from StackHub or customize one like assemble blocks.',
    bottom: 157,
  },
  {
    icon: require('@site/static/img/homepage/step-2.png').default,
    title: 'Create an app',
    desc: 'Simply specify several parameters to create a full stack application base on that Stack.',
    bottom: 248,
  },
  {
    icon: require('@site/static/img/homepage/step-3.png').default,
    title: 'Spin up',
    desc: 'Heighliner spins up all the tools to support the whole DevOps process automatically.',
    bottom: 188,
  },
  {
    icon: require('@site/static/img/homepage/step-4.png').default,
    title: 'Enjoy',
    desc: 'Code and ship! Never mind the complicated tools or configuration.',
    bottom: 0,
  },
]

const lines: number[] = [45, 60, 50, 0]

export function StackWorkflow(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <h1 className={clsx('homepage-section-title', styles.title)}>
        <SectionTitleIcon />
        How stack works?
      </h1>
      <ul className={clsx('container', styles.workflow)}>
        <li className={styles.workflowImage}>
          <img src={require('@site/static/img/workflow.png').default} alt="workflow image" />
        </li>
        <li className={styles.separator}>
          {
            lines.map((dotsCount: number, index: number) => (
              <Line key={index} index={index} dotsCount={dotsCount} direction={Direction.COLUMN} />
            ))
          }
        </li>
        <li className={styles.workflowText}>
          <ul className={styles.workflowSteps}>
            {
              workflowSteps.map((step: any) => (
                <li style={{ marginBottom: step.bottom }}>
                  <div className={styles.step}>
                    <div className={styles.stepIcon}>
                      <img src={step.icon} alt="step icon" />
                    </div>
                    <div className={styles.stepText}>
                      <div className={styles.stepTitle}>{step.title}</div>
                      <div className={styles.stepDesc}>{step.desc}</div>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
        </li>
      </ul>
    </div>
  )
}
