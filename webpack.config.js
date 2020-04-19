const path = require("path");
const MinifyBabelPlugin = require("babel-minify-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const assets = path.resolve(__dirname, "public", "assets");
const resources = path.resolve(__dirname, "src", "resources");

module.exports = {
  entry: {
    app: `${resources}/index.js`,
  },
  output: {
    path: `${assets}/`,
    filename: "js/bundle.js",
  },
  mode: "development",
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin()],
  },
  plugins: [
    new MinifyBabelPlugin(),
    new MiniCssExtractPlugin({
      filename: `css/bundle.css`,
      chunkFilename: "css/bundle.css",
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ["default", { discardComments: { removeAll: true } }],
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: `${assets}/css/`,
            },
          },
          "css-loader",
        ],
      },
    ],
  },
};
