/**
 * stack workflow displayed on homepage
 */

import React from "react";
import clsx from "clsx";

import styles from './index.module.css'
import { SectionTitleIcon } from "../SectionTitleIcon";

export function StackWorkflow(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <h1 className={clsx('homepage-section-title', styles.title)}>
        <SectionTitleIcon />
        How stack works?
      </h1>
      <ul className={styles.workflow}>
        <li className={styles.workflowImage}>
          <img
            src={require('@site/static/img/workflow.png').default}
            alt="workflow image"
          />
        </li>
        <li className={styles.workflowText}>
          <ul className="workflowTextSegments">
            <li>
              <div className="contentTitle">Get a Stack</div>
              <div className="content">Pull a stack from StackHub or customize one like assemble blocks.</div>
            </li>
            <li>
              <div className="contentTitle">Create an app</div>
              <div className="content">Simply specify several parameters to create a full stack application base on that Stack.</div>
            </li>
            <li>
              <div className="contentTitle">Spin up</div>
              <div className="content">Heighliner spins up all the tools to support the whole DevOps process automatically.</div>
            </li>
            <li>
              <div className="contentTitle">Enjoy</div>
              <div className="content">Code and ship! Never mind the complicated tools or configuration.</div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
