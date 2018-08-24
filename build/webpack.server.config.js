/*
 * @Author: zhouJun 
 * @Date: 2018-08-24 16:10:42 
 * @Last Modified by: zhouJun
 * @Last Modified time: 2018-08-24 18:21:31
 */
'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const base = require('./webpack.base.config')

module.exports = merge(base, {
  target: 'node',
  devtool: '#source-map',
  entry: './views/entry/server.js',
  output: {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals({
    whitelist: [
      /\.css$/,
      'config' // webpack.base.config.js 已设置 alias config
    ]
  }),
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueSSRServerPlugin()
  ]
})
