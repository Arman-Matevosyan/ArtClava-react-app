/*
 * ArtClava Confidential
 *
 * Copyright (C) ArtClava Inc. 2022
 * The source code for this program is not published or otherwise divested
 * of its trade secrets. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const JscramblerWebpack = require('jscrambler-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    entry: './packages/app/index.jsx',
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      filename: '[name].bundle.js'
    },
    resolve: {
      alias: {
        app: path.resolve(__dirname, 'packages/app'),
        common: path.resolve(__dirname, 'packages/common'),
        src: path.resolve(__dirname, 'packages/src')
      },
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      modules: [__dirname, 'src', 'node_modules'],

      extensions: ['.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './build'
    },
    // devServer: {
    //   static : {
    //     directory : path.join(__dirname, './dist')
    //   },
    //   port: 3001,
    //   devMiddleware:{
    //     publicPath: 'https://localhost:3000/dist/',
    //   },
    //   hot: 'only',
    // },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.png|svg|jpg|gif$/,
          use: ['file-loader']
        },
        {
          test: /\.eot|woff|woff2|ttf|svg$/,
          use: ['file-loader']
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
  },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve('./public/index.html')
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/[id].css'
      }),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['css/*.*', 'jsx/*.*', 'js/*.*', 'fonts/*.*', 'images/*.*']
       }),
       new JscramblerWebpack({
        enable: true, // optional, defaults to true
        chunks: ['app', 'print'], // optional, defaults to all chunks
        params: [], 
        applicationTypes: {}
        // and other jscrambler configurations
      })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map'
  };
};
