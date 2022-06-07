const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: ["./src/app/App.tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules[\/\\](?!@iq[\/\\](ui|utils))/,
        loader: 'ts-loader',
        options: {
          allowTsInNodeModules: true,
        },
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2|png|ico)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/app/index.html",
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
  ],
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "bundle.[contenthash].js",
    publicPath: "/",
    clean: true,
  },
  devServer: {
    static: path.join(__dirname, "build"),
    historyApiFallback: true,
  },
};
