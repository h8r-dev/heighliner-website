/**
 * A docusaurus plugin to store release info and generate `/version` route.
 */

const CommitHash = COMMIT_HASH;
const BuildTime = BUILD_TIME;

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
