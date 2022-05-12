import React, { useEffect, useRef, useState } from "react";
import { isMobile, isTablet } from "react-device-detect";

import { limitInRange } from "@site/src/utils/MathPlus";

import styles from "./index.module.scss";
import Rail from "./Rail";

interface SlideStyle {
  left?: number;
  width?: number;
  transition?: string;
}

export default function PicturesSlider(): React.ReactElement {
  const layerContain = useRef(null);

  const [hasTriggerScrollSlide, setHasTriggerScrollSlide] =
    useState<boolean>(false);
  const hasTriggerScrollSlideRef = useRef(hasTriggerScrollSlide);

  const [polePivotStyles, setPolePivotStyles] = useState<SlideStyle>({});
  const polePivotStylesRef = useRef(polePivotStyles);

  const [upperLayerStyles, setUpperLayerStyles] = useState<SlideStyle>({});
  const upperLayerStylesRef = useRef(upperLayerStyles);

  // The number to width from pole pivot to the left edge.
  const [polePivotLeft, setPolePivotLeft] = useState<number>(0);
  const polePivotLeftRef = useRef(polePivotLeft);

  const [isPress, setIsPress] = useState(false);
  const isPressRef = useRef(isPress);

  const [startPosX, setStartPosX] = useState(0);
  const startPosXRef = useRef(startPosX);

  const upperLayerImgEl = useRef(null);
  const upperLayerRef = useRef(null);

  // Sliding pole during page scroll
  useEffect(() => {
    const GoldenSectionRatio = 0.618;
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.3, 0.5, GoldenSectionRatio],
    };

    const scrollSlidePole: IntersectionObserverCallback = (entries) => {
      if (hasTriggerScrollSlideRef.current) return;

      const [entry] = entries;
      const intersectionRatio = entry.intersectionRatio;

      // Set the picture slide width according to intersectionRatio
      const slideWidth = upperLayerImgEl.current.width * intersectionRatio;
      const _polePivotStyles = {
        left: slideWidth - polePivotLeftRef.current,
        transition: "left 2s ease-in-out",
      };
      setPolePivotStyles(_polePivotStyles);
      polePivotStylesRef.current = _polePivotStyles;

      const _upperLayerStyles = {
        width: slideWidth,
        transition: "width 2s ease-in-out",
      };
      setUpperLayerStyles(_upperLayerStyles);
      upperLayerStylesRef.current = _upperLayerStyles;

      // Cancel the scroll slide
      if (intersectionRatio >= GoldenSectionRatio) {
        setHasTriggerScrollSlide(true);
        hasTriggerScrollSlideRef.current = true;
      }
    };

    const observer = new IntersectionObserver(scrollSlidePole, options);
    if (layerContain.current) {
      observer.observe(layerContain.current);
    }

    // Relieve the IntersectionObserver
    return () => {
      if (layerContain.current) {
        observer.unobserve(layerContain.current);
      }
    };
  }, [layerContain]);

  function handlePoleImgLoad(event) {
    const offset = event.target.width >> 1;
    setPolePivotLeft(offset);
    polePivotLeftRef.current = offset;

    const _polePivotStyles = {
      left: -offset,
    };
    setPolePivotStyles(_polePivotStyles);
    polePivotStylesRef.current = _polePivotStyles;
  }

  function handleMouseDown(event) {
    if (event.type === "mousedown") {
      event.preventDefault();
    }

    isPressRef.current = true;
    setIsPress(true);

    // Get the starting position of cursor
    if (isMobile) {
      event.clientX = event.touches[0].clientX;
    }
    setStartPosX(event.clientX);
    startPosXRef.current = event.clientX;
  }

  function handleMouseUpOrLeave() {
    isPressRef.current = false;
    setIsPress(false);
  }

  function handleMouseMove(event) {
    const imgWidth = upperLayerImgEl.current.width;
    if (isPressRef.current) {
      // Compatibility with mobile environment.
      if (isMobile) {
        event.clientX = event.touches[0].clientX;
      }
      // Calculate the movement of pole and upperLayer
      const deltaX = startPosXRef.current - event.clientX;
      const poleMovement = limitInRange(
        -polePivotLeftRef.current,
        imgWidth - polePivotLeftRef.current,
        polePivotStylesRef.current.left - deltaX
      );
      const upperLayerMovement = limitInRange(
        0,
        imgWidth,
        upperLayerStylesRef.current.width - deltaX
      );

      // Update position
      setStartPosX(event.clientX);
      startPosXRef.current = event.clientX;

      // Update the element's new position
      const _polePivotStyles = {
        left: poleMovement,
        transition: "none",
      };
      setPolePivotStyles(_polePivotStyles);
      polePivotStylesRef.current = _polePivotStyles;

      const _upperLayerStyles = {
        width: upperLayerMovement,
        transition: "none",
      };
      setUpperLayerStyles(_upperLayerStyles);
      upperLayerStylesRef.current = _upperLayerStyles;

      return false;
    }
  }

  return (
    <div
      className={styles.layerWrap}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      onMouseMove={handleMouseMove}
      onTouchEnd={handleMouseUpOrLeave}
      onTouchCancel={handleMouseUpOrLeave}
      onTouchMove={handleMouseMove}
    >
      <div className={styles.layerContain} ref={layerContain}>
        <div className={styles.underLayer}>
          <img
            src={
              require("@site/static/img/homepage/whyheighliner/chaos@3x.webp")
                .default
            }
            alt="with heighliner"
            className={styles.layerImg}
          />
        </div>
        <div
          className={styles.upperLayer}
          style={upperLayerStyles}
          ref={upperLayerRef}
        >
          <img
            src={
              require("@site/static/img/homepage/whyheighliner/chip@3x.webp")
                .default
            }
            className={styles.layerImg}
            alt="with heighliner"
            ref={upperLayerImgEl}
          />
        </div>
        <Rail classObject={styles.above} />
        <Rail classObject={styles.below} />
        <img
          src={
            require("/static/img/homepage/whyheighliner/pole@3x.webp").default
          }
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          style={polePivotStyles}
          className={styles.pole}
          onLoad={handlePoleImgLoad}
        />
      </div>
    </div>
  );
}
