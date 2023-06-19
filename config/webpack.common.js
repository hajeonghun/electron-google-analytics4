const path = require("path");

module.exports = {
  target: 'node',
  entry: `${path.resolve(__dirname, "../src")}/index.ts`,
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src/"),
    },
    extensions: [".js", ".ts", ".json"],
  },
};
