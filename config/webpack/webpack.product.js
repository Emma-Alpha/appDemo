const common = require('./webpack.public.js');
const { merge } = require('webpack-merge');
const path = require('./paths.js');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { EsbuildPlugin } = require('esbuild-loader');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].bundle.js',
    clean: true,
    path: path.resolveApp('dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [path.resolveApp('src/index.css')],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.css$/,
        include: [path.resolveApp('src')],
        exclude: [path.resolveApp('src/index.css')],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        include: [path.resolveApp('src')],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
              importLoaders: 2,
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: [path.resolveApp('node_modules')],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].chunk.css',
    }), // 将css 提取到单独文件中，为每个css的js创建一个css文件，并且支持css和SourceMaps按需加载。
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new EsbuildPlugin({
        target: 'es2015',
        css: true,
      }),
      // new TerserJSPlugin({
      //   test: /\.(js|jsx)(\?.*)?$/i,
      //   exclude: [path.resolveApp('node_modules')],
      //   parallel: true,
      //   terserOptions: {
      //     compress: {
      //       // 打包后去掉除console.log之外的其他console。保留console.log的目的是方便打日志、排障
      //       pure_funcs: ['console.info', 'console.debug', 'console.warn'],
      //     },
      //   },
      // }),
    ],
  },
});
