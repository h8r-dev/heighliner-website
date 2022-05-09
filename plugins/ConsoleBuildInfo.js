// const webpack = require("webpack");

const CommitHash = COMMIT_HASH;
const BuildTime = BUILD_TIME;

async function storeGitCommitInfoPlugin(context, opts) {
  console.log(context, opts);
  return {
    name: "store-git-commit-info-plugin",
    async contentLoaded({content, actions}) {
      const {setGlobalData, addRoute} = actions;
      // Create commit global data
      setGlobalData({CommitHash, BuildTime})

      // Add the '/version' routes
      addRoute({
        path: '/version',
        component: '@site/src/components/Version.tsx',
        exact: true,
      });
    },
  }
}

module.exports = storeGitCommitInfoPlugin;
