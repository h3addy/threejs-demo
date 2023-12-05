const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // mode: "development",
  entry: {
    index: "./src/index.js",
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: "Caching",
  //   }),
  // ],
  // devtool: "inline-source-map",
  // devServer: {
  //   static: "./dist",
  // },
  output: {
    filename: "webpack-numbers.js",
    path: path.resolve(__dirname, "dist"),
    globalObject: "this",
    library: {
      name: "webpackNumbers",
      type: "umd",
    },
    clean: true,
    publicPath: "/",
  },
  externals: {
    lodash: {
      commonjs: "lodash",
      commonjs2: "lodash",
      amd: "lodash",
      root: "_",
    },
  },
  // optimization: {
  //   moduleIds: "deterministic",
  //   runtimeChunk: "single",
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: "vendors",
  //         chunks: "all",
  //       },
  //     },
  //   },
  // },
};
