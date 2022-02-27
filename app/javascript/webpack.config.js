// const path    = require("path")
// const webpack = require("webpack")
//
// module.exports = {
//   mode: "production",
//   devtool: "source-map",
//   entry: {
//     application: "./app/javascript/application.js"
//   },
//   output: {
//     filename: "[name].js",
//     sourceMapFilename: "[name].js.map",
//     path: path.resolve(__dirname, "app/assets/builds"),
//   },
//   plugins: [
//     new webpack.optimize.LimitChunkCountPlugin({
//       maxChunks: 1
//     })
//   ]
// }


const path = require('path');
const webpack = require("webpack")

const srcDir = path.resolve(__dirname, './src');

module.exports = (env, options) => {
  const devMode = options.mode !== 'production';

  return {
    entry: {
      application: srcDir + '/index.jsx',
    },
    devServer: {
      hot: true,
      liveReload: true,
    },
    devtool: devMode ? 'inline-source-map' : undefined,
    mode: devMode ? 'development' : 'production',
    module: {
      rules: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
            'fast-sass-loader',
            {
              loader  : 'sass-resources-loader',
              options : {
                resources: srcDir + '/ui/styles/globally-available.scss',
              },
            },
          ]
        },
        {
          test: /\.css$/,
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
        },
        {
          test: /\.js|\.jsx$/,
          include: srcDir,
          use: {
            loader: 'babel-loader',
          }
        }
      ]
    },
    output: {
      filename: "[name].js",
      sourceMapFilename: "[name].js.map",
      path: path.resolve(__dirname, "../assets/builds"),
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ],
    resolve: {
      alias: {
        src : srcDir,
      },
      extensions: ['*', '.js', '.jsx', '.css', '.scss'],
    },
    target: 'web',
  }
};
