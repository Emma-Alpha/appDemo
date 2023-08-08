const common = require("./webpack.public.js")
const {
  merge
} = require("webpack-merge")
const path = require("./paths.js")
const fs = require('fs');
const appInfo = require("../../package.json");


module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    clean: false,
    path: path.resolveApp("dist"),
    publicPath: `http://${appInfo.appsConfig.host}:${appInfo.appsConfig.port}/`,
  },
  target: "web",
  stats: 'errors-only',
  devServer: {
    setupExitSignals: true, //允许关闭开发服务器并退出进程SIGINT并SIGTERM发出信号。
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    host: appInfo.appsConfig.host,
    port: appInfo.appsConfig.port,
    compress: true, // 开启服务器gzip压缩
    open: false,
    historyApiFallback: true, // 提供页面来替代404响应
    hot: true, // 构建失败的情况下启动热模块替代而不是刷新页面,
    allowedHosts: 'all',
  },
  module: {
    rules: [{
      test: /\.less$/,
      include: [/[\\/]node_modules[\\/].*antd/],
      use: [{
        loader: "style-loader"
      },
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
        }
      },
      {
        loader: "less-loader",
        options: {
          sourceMap: true,
          lessOptions: {
            javascriptEnabled: true,
            math: 'always',
            // modifyVars: mapToken
          }
        }
      }
      ]
    },
    // less 开启CSS Modules 
    {
      test: /\.less$/,
      include: [path.resolveApp("src")],
      exclude: [path.resolveApp('node_modules')],
      use: [{
        loader: "style-loader"
      },
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
          modules: {
            localIdentName: '[path][name]__[local]--[hash:base64:5]'
          },
          importLoaders: 2,
        }
      },
      {
        loader: "less-loader",
        options: {
          sourceMap: true,
          lessOptions: {
            javascriptEnabled: true,
            math: 'always',
            // modifyVars: mapToken
          }
        }
      }
      ]
    },
    // 针对于  tailwindcss 做出的适配改进
    {
      test: /\.css$/,
      include: [path.resolveApp("src/index.css")],
      use: ["style-loader", "css-loader", "postcss-loader"]
    },
    {
      test: /\.css$/,
      include: [path.resolveApp("src"), path.resolveApp("node_modules")],
      exclude: [path.resolveApp("src/index.css")],
      use: [{
        loader: "style-loader"
      },
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
        }
      },
      ]
    },
    ],
  },
  plugins: []
})