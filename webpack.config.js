const path = require("path");
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  entry: "./src/resources/js/index.js",
  output: {
    path: path.resolve(__dirname, "public", "assets","js"),
    filename: "bundle.js",
  },
  mode: "development",
  plugins: [
    new MinifyPlugin()
  ]
};
