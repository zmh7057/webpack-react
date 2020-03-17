const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const AutoDllPlugin = require('autodll-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // MINI CSS
const utils = require('./utils');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.conf');
const webpackConfig = merge(baseWebpackConfig, {
  entry: {
    app: ['@babel/polyfill', './src/index.js']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: utils.assetsPath('js/[name].[hash:8].js'),
    publicPath: config.build.assetsPublicPath
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ProgressBarPlugin(),
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html',
      minify: {
        // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: false // 删除空白符与换行符
      }
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      // filename: devMode ? '[name].css' : '[name].[hash].css',
      // chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      filename: utils.assetsPath('css/[name].[hash:8].css')
      // chunkFilename: '[id].[chunkhash].css'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      // cssProcessorOptions: cssnanoOptions,
      cssProcessorPluginOptions: {
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true
            },
            normalizeUnicode: false
          }
        ]
      },
      canPrint: true
    }),
    new AutoDllPlugin({
      inject: true,
      filename: '[name].dll.[hash:8].js',
      path: './static/js',
      entry: {
        vendor: ['react', 'react-dom', '@babel/polyfill', 'react-router-dom']
      }
    }),
    // enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    new WebpackBuildNotifierPlugin({
      title: 'Webpack Build',
      logo: path.resolve('./img/favicon.png'),
      suppressSuccess: true
    })
  ],
  optimization: {
    minimize: true,
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: false,
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          priority: -10,
          reuseExistingChunk: false,
          test: /node_modules\/(.*)\.js/
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        parallel: true
      })
    ]
  },
  performance: {
    hints: 'warning', // 枚举
    maxAssetSize: 30000000, // 整数类型（以字节为单位）
    maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
    assetFilter: function(assetFilename) {
      // 提供资源文件名的断言函数
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  mode: 'production'
});

module.exports = webpackConfig;
