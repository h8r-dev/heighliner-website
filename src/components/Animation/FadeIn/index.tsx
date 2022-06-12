import React, { ReactElement, useEffect, useRef, useState } from "react";
import clsx from "clsx";

import styles from "./index.module.scss";

interface Props {
  children: ReactElement | ReactElement[];
}

export default function ({ children }: Props): React.ReactElement {
  const eleRef = useRef();
  const [triggerFadeIn, setTriggerFadeIn] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.map((entry) => {
        if (entry.isIntersecting && entry.target === eleRef.current) {
          setTriggerFadeIn(true);
          observer.disconnect(); // Release observer to reduce optimization debt.
        }
      });
    };

    const options = {
      rootMargin: "-200px",
    };

    observer = new IntersectionObserver(observerCallback, options);
    observer.observe(eleRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={eleRef}
      className={clsx(styles.wrap, triggerFadeIn && styles.fadeIn)}
    >
      {children}
    </div>
  );
}
