const path = require('./paths.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const UpdateVersionWebpackPlugin = require('./plugins/updateVersion.js');
const fs = require('fs');

require('dotenv').config({ path: path.resolveApp('./config/env/.env.public') });
const extraConfig = require('dotenv').parse(fs.readFileSync(path.resolveApp(`./config/env/.env.${process.env.NODE_ENV}`)));

for (i in extraConfig) {
  process.env[i] = extraConfig[i];
}

const APP_CNAME = process.env.APP_CNAME;
const APP_NAME = process.env.APP_NAME;

module.exports = {
  output: {
    assetModuleFilename: 'images/[hash][ext]', // 将png,jpg,jpeg,gif等资源文件存放到images下。
    library: `${APP_CNAME}-[name]`,
    chunkFilename: '[name].[contenthash].js',
    // 需要配置成 umd 规范
    libraryTarget: 'umd',
    // 修改不规范的代码格式，避免逃逸沙箱
    globalObject: 'window',
    // webpack5 使用 chunkLoadingGlobal 代替，或不填保证 package.json name 唯一即可
    chunkLoadingGlobal: 'garfish-demo',
  },
  entry: [path.resolveApp('./src/index')],
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'], // 无需后缀即可完成导入
    alias: {
      '@': path.resolveApp('./src/pages'),
      '@src': path.resolveApp('./src'),
      '@config': path.resolveApp('./config'),
      '@store': path.resolveApp('./store'),
    },
    // webpack 5 不再自动 polyfill Node.js 的核心模块，这意味着如果你在浏览器或类似的环境中运行的代码中使用它们，你必须从 NPM 中安装兼容的模块，并自己包含它们  https://webpack.docschina.org/configuration/resolve/#resolvefallback
    fallback: {
      path: require.resolve('path-browserify'),
    },
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        include: [path.resolveApp('src'), path.resolveApp('config'), path.resolveApp('store')],
        exclude: [path.resolveApp('node_modules')],
        loader: 'esbuild-loader',
        options: {
          target: 'es2015',
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    // 清除dist目录
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: APP_CNAME,
      mountRoot: APP_NAME,
      template: path.resolveApp('./src/index.html'),
      filename: 'index.html',
      inject: 'body', // 所有javascript 资源都是加载到body底部
      hash: true, // 为静态资源生成hash值
      minify: {
        // 压缩HTML文件
        removeComments: false, // 移除HTML中的注释
        collapseWhitespace: false, // 删除空白符与换行符
      },
      favicon: path.resolveApp('./config/public/favicon.ico'),
    }),
    new WebpackBar(), // 进度条
    new UpdateVersionWebpackPlugin({}),
  ],
};
