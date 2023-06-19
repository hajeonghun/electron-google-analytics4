const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "cheap-module-source-map",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../lib"),
    publicPath: "./",
    clean: true,
  },
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
    // splitChunks: {
    //   chunks: "all",
    // },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
