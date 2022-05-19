/**
 * A docusaurus plugin to store release info and generate `/version` route.
 */

const CommitHash = COMMIT_HASH;

const BuildTime = {
  UTC: BUILD_TIME_IN_UTC,
  AsiaShanghai: BUILD_TIME_IN_ASIA_SHANGHAI,
  NewYork: BUILD_TIME_IN_NEW_YORK, // East America, mostly is used
  LogAngeles: BUILD_TIME_IN_LOG_ANGELES, 
}

export default function storeGitCommitInfoPlugin(context, opts) {
  return {
    name: "store-git-commit-info-plugin",
    async contentLoaded({ content, actions }) {
      const { setGlobalData, addRoute } = actions;
      // Create commit hash and build time as global data
      setGlobalData({ CommitHash, BuildTime });

      // Add the '/version' routes
      addRoute({
        path: "/version",
        component: "@site/src/pages/version",
        exact: true,
      });
    },
  };
}
