const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let conf = {
  mode: "development",
  entry: {
    bundle: "./src/js/script.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    publicPath: "/dist",
  },
  devServer: {
    overlay: true,
    watchContentBase: true,
  },
  plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: [/\.css$/i, /\.s[ac]ss$/i],
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
};

module.exports = (env, options) => {
  console.log(options);
  let production = options.mode === "production";
  conf.devtool = production ? "source-map" : "cheap-module-source-map";
  return conf;
};
