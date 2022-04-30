import React from "react";

export default function NerveCell(): React.ReactElement {
  return (
    <img
      src={require("/static/img/homepage/workflow/nervecell@3x.webp").default}
      alt="with heightliner"
      style={{ width: 18, height: 15 }}
    />
  );
}
