/**
 * Asciinema Player component
 */

import React, { useRef, useEffect } from "react";
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

import "asciinema-player/dist/bundle/asciinema-player.css"

// import styles from "./index.module.scss";

export interface AsciinemaPlayerProps {
  asciiData: string,
  className?: string,
}

export default function AsciinemaPlayer({ asciiData, className = '' }: AsciinemaPlayerProps) {
  const asciinemaRef = useRef(null)

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      import('asciinema-player').then(player => {
        const isBase64Data: boolean = !asciiData.startsWith('http')
        const source: string = isBase64Data ? `data:text/plain;base64,${asciiData}` : asciiData
        player.create(source, asciinemaRef.current, {
          loop: true,
          autoPlay: true,
          terminalFontSize: '14px',
          fit: false,
          theme: 'asciinema',
          rows: 19,
        })
      })
    }
  }, [])

  return (
    <div ref={asciinemaRef} className={className}></div>
  )
}
