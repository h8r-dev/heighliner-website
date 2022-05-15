export default function UrlLoader() {
  return {
    configureWebpack(config, isServer, utils) {
      const { getJSLoader } = utils;
      return {
        module: {
          rules: [
            {
              test: /\.cast$/,
              use: [getJSLoader(isServer), "url-loader"],
            },
          ],
        },
      };
    },
  };
}
