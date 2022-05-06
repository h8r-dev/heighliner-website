import React, { useRef } from "react";
import { useEffect, useState } from "react";

import ZeroSVG from "/static/img/homepage/slogansection/zero.svg";

import styles from "./index.module.scss";

interface Props {
  startPoint?: number;
  endPoint: number;
  interval: number;
  minuend: number;
}

export default function AutoDownCounter({
  startPoint,
  endPoint,
  interval,
  minuend,
}: Props): React.ReactElement {
  const [counter, setCounter] = useState(startPoint);
  const counterRef = useRef(counter);
  useEffect(() => {
    const timer = setInterval(() => {
      if (counterRef.current > endPoint) {
        const newCounter = counterRef.current - minuend;
        counterRef.current = newCounter;
        setCounter(newCounter);
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <span className={styles.autoDownCounterText}>
      {/* {counter > endPoint ? (
        counter
      ) : ( */}
        <div className={styles.zeroEffect}>
          {/*<ZeroSVG />*/}
          {/* <img src={require('@site/static/img/zero.webp').default} alt="zero"/> */}
          Zero
        </div>
      {/* )} */}
    </span>
  );
}
