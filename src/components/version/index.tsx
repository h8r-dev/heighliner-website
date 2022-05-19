/**
 * Show build info for current release.
 */
import React from "react";
import { usePluginData } from "@docusaurus/useGlobalData";

import clsx from "clsx";
import styles from "./index.module.scss";


export default function VersionInfo() {
  const { CommitHash, BuildTime } = usePluginData(
    "store-git-commit-info-plugin"
  ) as { [index: string]: string };

  return (
    <div className={styles.versionWrapper}>
      <div className="card margin-horiz--md">
        <div className="card__header">
          <h4>Heighliner Version Information</h4>
        </div>
        <div className="card__body">
          <p>Commit Hash: {CommitHash}</p>
          <p>Build Time: {BuildTime}</p>
        </div>
      </div>
    </div>
  );
}
