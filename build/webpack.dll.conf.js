const path = require('path');
const webpack = require('webpack');
const package = require('../package.json');
const AssetsPlugin = require('assets-webpack-plugin');
const dependencies = Object.keys(package.dependencies) || [];

module.exports = {
  mode: 'production',
  entry: {
    vendor: [...dependencies]
  },
  output: {
    path: path.join(__dirname, '../static/js'),
    filename: 'dll.[name]_[hash:6].js',
    publicPath: 'static/js/',
    library: '[name]_[hash:6]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../', '[name]-manifest.json'),
      name: '[name]_[hash:6]'
    }),
    new AssetsPlugin({
      filename: 'bundle-config.json',
      path: './'
    })
  ],
  performance: {
    hints: 'warning', // 枚举
    maxAssetSize: 30000000, // 整数类型（以字节为单位）
    maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
    assetFilter: function(assetFilename) {
      // 提供资源文件名的断言函数
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  }
};
