'use strict'

const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const vueConfig = require('./vue-loader.config.js')
const chalk = require('chalk')
const isProd = process.env.NODE_ENV === 'production'

chalk.enabled = true

module.exports = {
  devtool: isProd ? false : '#cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  module: {
    rules: [
      // {
      //   test: /\.(vue|js)$/,
      //   enforce: 'pre',
      //   loader: 'eslint-loader',
      //   exclude: /node_modules/
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.css$/,
        use: isProd
          ? ExtractTextPlugin.extract({
            use: 'css-loader?minimize&importLoaders=1!postcss-loader',
            fallback: 'vue-style-loader'
          })
          : [
            'vue-style-loader',
            { loader: 'css-loader' }
          ]
      }
    ]
  }
}
