/* eslint-disable node/no-unpublished-require */
const {merge} = require("webpack-merge");
const config = require("./webpack.config");
const path = require("path");

module.exports = merge(config, {
  mode: "development",
  devtool: "eval-source-map",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    minimize: false,
  },
  devServer: {
    port: process.env.PORT,
    hot: true,
    open: true,
    host: "localhost",
    liveReload: true,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
});
