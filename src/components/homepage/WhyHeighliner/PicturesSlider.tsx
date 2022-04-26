import { limitInRange } from "@site/src/utils/MathPlus";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./index.module.css";

export default function PicturesSlider(): React.ReactElement {
  const [isDown, setIsDown] = useState(false);
  const isDownRef = useRef(isDown);

  const [poleLeft, setPoleLeft] = useState<number>(795);
  const poleLeftRef = useRef(poleLeft);

  const [upperLayerWidth, setUpperLayerStyle] = useState<number>(795);
  const upperLayerWidthRef = useRef(upperLayerWidth);

  const [startPosX, setStartPosX] = useState(0);
  const startPosXRef = useRef(startPosX);

  const imgEl = useRef(null);
  const upperLayerRef = useRef(null);

  function handleMouseDown(event) {
    event.preventDefault();

    isDownRef.current = true;
    setIsDown(true);

    // Get the starting position of cursor
    setStartPosX(event.clientX);
    startPosXRef.current = event.clientX;
  }

  function handleMouseUpOrLeave() {
    isDownRef.current = false;
    setIsDown(false);
  }

  function handleMouseMove(event) {
    const imgWidth = imgEl.current.width;
    if (
      isDownRef.current &&
      upperLayerWidthRef.current >= 0 &&
      upperLayerWidthRef.current <= imgWidth
    ) {
      // Calculate the movement of pole and upperLayer
      const deltaX = startPosXRef.current - event.clientX;
      const poleMovement = limitInRange(
        0,
        imgWidth,
        poleLeftRef.current - deltaX
      );
      const upperLayerMovement = limitInRange(
        0,
        imgWidth,
        upperLayerWidthRef.current - deltaX
      );

      // Set the element's new position
      setPoleLeft(poleMovement);
      setUpperLayerStyle(upperLayerMovement);
      setStartPosX(event.clientX);

      // Update position
      startPosXRef.current = event.clientX;
      poleLeftRef.current = poleMovement;
      upperLayerWidthRef.current = upperLayerMovement;
    }
  }

  return (
    <div
      className={styles.layerContain}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.underLayer}>
        <img
          src={
            require("@site/static/img/homepage/whyheighliner/chaos.png").default
          }
          alt="with heighliner"
          className={styles.layerImg}
        />
      </div>
      <div
        className={styles.upperLayer}
        style={{width: upperLayerWidth}}
        ref={upperLayerRef}
      >
        <img
          src={
            require("@site/static/img/homepage/whyheighliner/clip@3x.webp")
              .default
          }
          className={styles.layerImg}
          alt="with heighliner"
          ref={imgEl}
        />
      </div>
      <span
        className={styles.pole}
        style={{ left: poleLeft }}
        onMouseDown={handleMouseDown}
      ></span>
    </div>
  );
}
