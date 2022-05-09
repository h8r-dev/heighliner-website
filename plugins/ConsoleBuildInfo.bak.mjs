/**
 * A docusaurus plugin to store release info and generate `/version` route.
 */

const CommitHash = "f631de31b6b226145e06eef0381bf8dcf1ca5a3e";
const BuildTime = "Mon May  9 15:04:18 CST 2022";

export default function storeGitCommitInfoPlugin(context, opts) {
  return {
    name: "store-git-commit-info-plugin",
    async contentLoaded({content, actions}) {
      const { setGlobalData, addRoute } = actions;
      // Create commit hash and build time as global data
      setGlobalData({ CommitHash, BuildTime })

      // Add the '/version' routes
      addRoute({
        path: '/version',
        component: '@site/src/components/Version.tsx',
        exact: true,
      });
    },
  }
}
