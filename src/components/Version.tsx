import React, { useEffect } from "react";
import { usePluginData } from "@docusaurus/useGlobalData";

export default function FriendsComponent() {
  const { CommitHash, BuildTime } = usePluginData(
    "store-git-commit-info-plugin"
  ) as { [index: string]: string };

  useEffect(() => {
    console.group("Version Information");
    console.log("Commit Hash: " + CommitHash);
    console.log("Build time: " + BuildTime);
    console.groupEnd();
  }, []);

  return (
    <>
      <div>CommitHash: {CommitHash}</div>
      <div>BuildTime: {BuildTime}</div>
    </>
  );
}
