/**
 * Display image card
 */

import React, { CSSProperties } from "react";

interface Props {
  path: string;
  style?: CSSProperties;
}

export default function ({ path, style }: Props): React.ReactElement {
  return <img src={path} style={style} alt="with heighliner" />;
}
