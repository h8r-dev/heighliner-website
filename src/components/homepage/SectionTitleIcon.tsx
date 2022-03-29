/**
 * Preceeding icon of section title
 */

import React from "react";

export function SectionTitleIcon(): React.ReactElement {
  return (
    <img
      style={{ width: 80 }}
      src={require('@site/static/img/section-title-icon.png').default}
      alt="icon"
    />
  )
}
