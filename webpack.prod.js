/* eslint-disable node/no-unpublished-require */
const path = require("path");
const {EsbuildPlugin} = require("esbuild-loader");
const {merge} = require("webpack-merge");
const config = require("./webpack.config");

module.exports = merge(config, {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].js",
    assetModuleFilename: "assets/[name][ext]",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    minimize: this.mode === "development" ? false : true,
    minimizer: [
      new EsbuildPlugin({
        target: "es6",
        css: true,
      }),
    ],
  },
});
