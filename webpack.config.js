/* eslint-disable node/no-unpublished-require */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {TsconfigPathsPlugin} = require("tsconfig-paths-webpack-plugin");
const {NetlifyPlugin} = require("netlify-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin(),
    new NetlifyPlugin({
      redirects: [
        {
          from: "/*",
          to: "/index.html",
          status: 200,
          force: false,
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        include: [path.resolve(__dirname, "src")],
        exclude: /node_modules/,
        options: {
          loader: "tsx",
          target: "es2015",
        },
      },
      {
        test: /\.s|[ac]ss$/i,
        use: [
          this.mode === "development"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: resPath => resPath.includes(".module."),
                localIdentName:
                  this.mode === "development"
                    ? "[path][name]__[local]--[hash:base64:5]"
                    : "[hash:base64:8]",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
    plugins: [new TsconfigPathsPlugin()],
  },
  performance: {
    maxAssetSize: 5000000,
    maxEntrypointSize: 5000000,
  },
};
