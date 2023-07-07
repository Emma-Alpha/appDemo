const common = require("./webpack.public.js")
const {
  merge
} = require("webpack-merge")
const path = require("./paths.js")
const fs = require('fs');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const lessToJs = require('less-vars-to-js');
const paletteLess = fs.readFileSync(path.resolveApp('src/common/styles/variables.less'), 'utf8');
const lessVars = lessToJs(paletteLess, {
  resolveVariables: true,
  stripPrefix: true
});
if (lessVars['font-family']) {
  lessVars['font-family'] = `"${lessVars['font-family']}"`
}

const appConfig = require(path.resolveApp('package.json')).appConfig;
const {
  host: APP_HOST,
  port: APP_PORT,
  name: APP_NAME,
  cname: APP_CNAME,
  domain: APP_DOMAIN
} = appConfig;




module.exports = (env) => {
  const isDev = env.WEBPACK_SERVE

  return merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    output: {
      filename: "[name].bundle.js",
      clean: false,
      libraryTarget: 'umd',
      path: path.resolveApp("dist"),
      publicPath: `http://${appConfig.host}:${appConfig.port}/`,
      // chunkLoadingGlobal: `webpackJsonp_${appConfig.name}`,
      // 修改不规范的代码格式，避免逃逸沙箱
      // globalObject: 'window',
      // chunkFilename: '[name].[contenthash].js',
    },
    target: "web",
    devServer: {
      host: "0.0.0.0",
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      client: { overlay: false },
      port: APP_PORT,
      compress: true, // 开启服务器gzip压缩
      open: false,
      historyApiFallback: true, // 提供页面来替代404响应
      hot: "only", // 构建失败的情况下启动热模块替代而不是刷新页面
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
              strictMath: false,
              math: 'always',
              modifyVars: {
                ...lessVars,
              },
              javascriptEnabled: true,
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
        // exclude: [/[\\/]node_modules[\\/]/],
        use: [{
          loader: "style-loader"
        },
        {
          loader: "css-loader",
          options: {
            sourceMap: true,
            modules: {
              localIdentName: '[name]__[local]__[hash:base64:5]'
            },
            importLoaders: 2,
          }
        },
        {
          loader: "less-loader",
          options: {
            sourceMap: true,
            lessOptions: {
              modifyVars: {
                ...lessVars,
              },
              javascriptEnabled: true,
            }
          }
        }
        ]
      },
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader"
        },
        {
          loader: "css-loader",
          options: {
            sourceMap: false,
          }
        },
        ]
      }
      ],
    },
    plugins: [new ReactRefreshWebpackPlugin({
      overlay: false
    })]
  })
}