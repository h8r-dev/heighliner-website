/**
 * Show build info for current release.
 */

import React, { useEffect } from "react";
import { usePluginData } from "@docusaurus/useGlobalData";

export default function VersionInfo() {
  const { CommitHash, BuildTime } = usePluginData(
    "store-git-commit-info-plugin"
  ) as { [index: string]: string };

  return (
    <div>
      <h1>Commit Hash: {CommitHash}</h1>
      <hr />
      <h1>Build Time: {BuildTime}</h1>
    </div>
  )
}
