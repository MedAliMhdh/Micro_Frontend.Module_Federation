const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CommonsChunkPlugin = require("webpack.optimize.CommonsChunkPlugin");
const remotes = require(`./remotes.json`);

module.exports = {
  mode: "development",
  devServer: {
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ModuleFederationPlugin({
      name: "Shell",
      filename: "remoteEntry.js",
      remotes,
      shared: [
        {
          react: {
            singleton: true,
          },
          "react-dom": {
            singleton: true,
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
