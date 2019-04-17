const path = require("path");
const DIST_DIR = path.join(__dirname, "/client/dist")
const SRC_DIR = path.join(__dirname, "/client/src")

module.exports = {
    entry: `${SRC_DIR}/index.js`,
    output: {
      filename: "main.js",
      path: DIST_DIR
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: SRC_DIR,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.css$/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader:"css-loader",
                    options: {
                        modules: true,
                        importLoaders: 1,
                        localIdentName: "[name]_[local]_[hash:base64]",
                        sourceMap: true,
                        minimize: true,
                    }
                }
            ]
        }
      ]
    },
  };