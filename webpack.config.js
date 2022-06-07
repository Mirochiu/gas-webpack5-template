const path = require('path');
const GasPlugin = require('gas-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const showBabelPluginsWhenBuild = false;

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash:6].bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                debug: showBabelPluginsWhenBuild,
              }],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new GasPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'assets'),
        },
        path.resolve(__dirname, 'appsscript.json'),
        path.resolve(__dirname, '.clasp.json'),
      ],
    }),
  ],
};
