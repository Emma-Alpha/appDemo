const path = require("./paths.js")
const babelOptions = require("./babel.config.js")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar');
const webpack = require("webpack");
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const CURRENT_DIR = path.resolveApp(__dirname, '.');
const APP_ROOT = process.cwd();


const appConfig = require(path.resolveApp('package.json')).appConfig;
const {
  host: APP_HOST,
  port: APP_PORT,
  name: APP_NAME,
  cname: APP_CNAME,
  domain: APP_DOMAIN
} = appConfig;

module.exports = {
  output: {
    assetModuleFilename: "images/[hash][ext]", // 将png,jpg,jpeg,gif等资源文件存放到images下。
    library: `${APP_CNAME}-[name]`,
    chunkFilename: '[name].[contenthash].js',
    // 需要配置成 umd 规范
    libraryTarget: 'umd',
    // 修改不规范的代码格式，避免逃逸沙箱
    globalObject: 'window',
    // webpack5 使用 chunkLoadingGlobal 代替，或不填保证 package.json name 唯一即可
    chunkLoadingGlobal: 'garfish-crash',
  },
  entry: [
    path.resolveApp("./src/index.jsx")
  ],
  resolve: {
    fallback: {
      fs: false,
      crypto: false, // for 仓储模块 crypto depended by xlsx
      buffer: false,
      stream: false
    },
    extensions: [".jsx", ".js", ".json", '.ts', '.tsx'], // 无需后缀即可完成导入
    alias: {
      Utils: path.resolveApp("./src/utils"),
      Components: path.resolveApp('./src/common/components'),
      StoredComponents: path.resolveApp('./src/common/storedComponents'),
      '@common': path.resolveApp("./src/common"),
      '@src': path.resolveApp("./src"),
      '@app': path.resolveApp("."),
      "@models": path.resolveApp("./src/models"),
      "@": path.resolveApp("./src/pages"),
    },
    fallback: {
      "fs": false,
      "path": require.resolve("path-browserify"),
      "stream": false,
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        include: [path.resolveApp("src")],
        exclude: [path.resolveApp("node_modules")],
      },
      {
        test: /\.(js|jsx)$/,
        include: [path.resolveApp("src")],
        exclude: [path.resolveApp("node_modules")],
        use: [{
          loader: "babel-loader",
          options: babelOptions
        }]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        type: "asset/resource",
      }
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'APP_CONFIG': JSON.stringify(appConfig),
      "APP_NAME": APP_NAME,
    }),
    // 清除dist目录
    new CleanWebpackPlugin(),
    // 保证错误堆栈信息及 sourcemap 行列信息正确
    new webpack.BannerPlugin({
      banner: 'Micro front-end',
    }),
    new WebpackBar(), // 进度条
    new HtmlWebpackPlugin({
      title: APP_CNAME,
      mountRoot: APP_NAME,
      template: path.resolveApp("./src/index.html"),
      filename: "index.html",
      inject: 'body', // 所有javascript 资源都是加载到body底部
      htmlContent: '<%- __html__ %>',
      initialData: 'window.__INITIAL_STATE__ = <%- __state__ %>',
      hash: true, // 为静态资源生成hash值
      minify: { // 压缩HTML文件
        removeComments: false, // 移除HTML中的注释
        collapseWhitespace: false, // 删除空白符与换行符
      },
      favicon: path.resolveOwn('../public/favicon.ico')
    }),
  ]
}