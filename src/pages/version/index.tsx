/**
 * Show build info for current release.
 */
import React from "react";
import { usePluginData } from "@docusaurus/useGlobalData";

import styles from "./index.module.scss";
import PageWrapper from "@site/src/components/PageWrapper";

interface Version {
  CommitHash: string;
  BuildTime: { [index: string]: string };
}

export default function Version() {
  const { CommitHash, BuildTime } = usePluginData(
    "store-git-commit-info-plugin"
  ) as Version;

  return (
    <div className={styles.versionWrapper}>
      <div className="card margin-horiz--md">
        <div className="card__header">
          <h4>Heighliner Version Information</h4>
        </div>
        <div className="card__body">
          <p>Commit Hash: {CommitHash}</p>
          <p>Build Time:</p>
          <ul>
            <li>UTC: {BuildTime.UTC}</li>
            <li>Shanghai: {BuildTime.AsiaShanghai}</li>
            <li>NewYork: {BuildTime.NewYork}</li>
            <li>Log Angeles: {BuildTime.LogAngeles}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
