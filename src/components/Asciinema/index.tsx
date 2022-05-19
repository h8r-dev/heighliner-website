/**
 * Asciinema Player component
 */

import React, { useRef, useEffect } from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

import "asciinema-player/dist/bundle/asciinema-player.css";

export interface AsciinemaPlayerProps {
  castFileUrl: URL;
  className?: string;
}

export default function AsciinemaPlayer({
  castFileUrl,
  className = "",
}: AsciinemaPlayerProps) {
  const asciinemaRef = useRef(null);

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      import("asciinema-player").then((player) => {
        player.create(castFileUrl, asciinemaRef.current, {
          loop: true,
          autoPlay: true,
          terminalFontSize: "14px",
          fit: false,
          theme: "asciinema",
          rows: 19,
        });
      });
    }
  }, []);

  return <div ref={asciinemaRef} className={className}></div>;
}
