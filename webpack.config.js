const path = require("path").resolve(__dirname, "dist");

module.exports = {
  entry: "./index.ts",
  output: {
    filename: "bundle.js",
    path
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devtool: "inline-source-map"
};
