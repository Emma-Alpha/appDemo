const path = require("./paths.js")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const appInfoConfig = require("../../package.json");
const webpack = require("webpack");
const UpdateVersionWebpackPlugin = require("./plugins/updateVersion.js");

module.exports = {
  output: {
    assetModuleFilename: "images/[hash][ext]", // 将png,jpg,jpeg,gif等资源文件存放到images下。
    library: `${appInfoConfig.appsConfig.cname}-[name]`,
    chunkFilename: '[name].[contenthash].js',
    // 需要配置成 umd 规范
    libraryTarget: 'umd',
    // 修改不规范的代码格式，避免逃逸沙箱
    globalObject: 'window',
    // webpack5 使用 chunkLoadingGlobal 代替，或不填保证 package.json name 唯一即可
    chunkLoadingGlobal: 'garfish-demo',
  },
  entry: [
    path.resolveApp("./src/index")
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".jsx", ".js", ".json"], // 无需后缀即可完成导入
    alias: {
      Utils: path.resolveApp("./src/utils"),
      Dva: path.resolveApp("./src/dva"),
      Components: path.resolveApp('./src/common/components'),
      StoredComponents: path.resolveApp('./src/common/storedComponents'),
      "@": path.resolveApp("./src/pages"),
      "@src": path.resolveApp("./src"),
      "@config": path.resolveApp("./config"),
      "@store": path.resolveApp("./store"),
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
        test: /\.[jt]sx?$/,
        include: [path.resolveApp("src"), path.resolveApp("config"), path.resolveApp("store")],
        exclude: [path.resolveApp("node_modules")],
        loader: "esbuild-loader",
        options: {
          target: "es2015"
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(tpl|ejs)$/,
        exclude: /node_modules/,
        loader: 'ejs-loader',
        options: {
          esModule: false,
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser'
    }),
    // 清除dist目录
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: appInfoConfig.appsConfig.cname,
      mountRoot: appInfoConfig.appsConfig.name,
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
      favicon: path.resolveApp('./config/public/favicon.ico')
    }),
    new WebpackBar(), // 进度条
    new UpdateVersionWebpackPlugin({})
  ]
}