import React, { useRef, useState } from "react";
import styles from "./index.module.css";

export default function PicturesSlider(): React.ReactElement {
  const [isDown, setIsDown] = useState(false);
  const isDownRef = useRef(isDown);
  const [poleStyle, setPoleStyle] = useState({left: 0});
  const poleStyleRef = useRef(poleStyle);

  const [startPosX, setStartPosX] = useState(0);
  const startPosXRef = useRef(startPosX);

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
    if (isDownRef.current) {
      console.log(event);

      // Calculate the new positon of cursor
      const newPosX = startPosXRef.current - event.clientX;

      // Update the startPosX
      setStartPosX(newPosX);
      startPosXRef.current = newPosX;

      // Set the element's new position
      setPoleStyle({left: event.target.offsetLeft - newPosX});
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
        ></img>
      </div>
      <div className={styles.upperLayer}>
        <img
          src={
            require("@site/static/img/homepage/whyheighliner/clip@3x.webp")
              .default
          }
          className={styles.layerImg}
          alt="with heighliner"
        ></img>
        <span className={styles.pole} style={poleStyle} onMouseDown={handleMouseDown}></span>
      </div>
    </div>
  );
}
