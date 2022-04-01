/**
 * Cloud innovation of homepage
 */

import React, { useState, useEffect } from "react";
import debounce from 'lodash.debounce'
import clsx from "clsx";

import { SectionTitleIcon } from "../SectionTitleIcon";
import styles from './index.module.css'
import { DescriptionItem } from "./DescriptionItem";

const descItems: any[] = [
  {
    index: 1,
    logo: require('@site/static/img/homepage/heighliner-innovation-logo.png').default,
    title: 'Heighliner',
    desc: 'Architecture provisioning',
  },
  {
    index: 2,
    logo: require('@site/static/img/homepage/k8s-logo.png').default,
    title: 'Kubernetes',
    desc: 'Cluster provisioning',
  },
  {
    index: 3,
    logo: require('@site/static/img/homepage/terraform-logo.png').default,
    title: 'Terraform',
    desc: 'Infrastructure provisioning',
  },
]

const baseDotsCount = 130

export function Innovation(): React.ReactElement {
  const [dotsCount, setDotsCount] = useState(baseDotsCount)

  function handleResize() {
    const { innerWidth } = window
    const base = 1440
    if (innerWidth > base || innerWidth < 1200) return
    const rest = base - innerWidth
    setDotsCount(parseInt(baseDotsCount - rest / 4, 10))
  }
  const debouncedHandleResize = debounce(handleResize, 500)

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', debouncedHandleResize)
    return () => window.removeEventListener('resize', debouncedHandleResize)
  }, [])

  return (
    <div className={styles.wrapper}>
      <h1 className={clsx('homepage-section-title', styles.title)}>
        <SectionTitleIcon />
        Cloud Innovation for Developers
      </h1>
      <div className={clsx('container', styles.content)}>
        <div className={styles.desc}>
          {
            descItems.map((item: any, index: number) => (
              <DescriptionItem {...item} dotsCount={dotsCount} key={index} />
            ))
          }
        </div>
        <div className={styles.architecture}>
          <img src={require('@site/static/img/homepage/innovation.png').default} alt="innovation" />
        </div>
      </div>
    </div>
  )
}
