const common = require("./webpack.public.js")
const {
  merge
} = require("webpack-merge")
const path = require("./paths.js")
const fs = require('fs');
const webpack = require("webpack");


const HOST = process.env.APP_HOST
const PORT = process.env.APP_PORT

// 存储构建进度
let progress = 0;
let status = ""
let detailInfo = ""
let hijackPage = true; // 标志变量，默认为 true，表示要劫持页面

/**
* @param percentage 当前构建进度，取值范围[0,1]
* @params message 构建模块信息
*/
const handler = (percentage, status, info) => {
  status = status
  progress = percentage
  detailInfo = info
};

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    clean: false,
    path: path.resolveApp("dist"),
    publicPath: `http://${HOST}:${PORT}/`,
  },
  stats: 'errors-only', // 只在发生错误时输出
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    host: HOST,
    port: PORT,
    compress: true, // 开启服务器gzip压缩
    // open: ["/"],
    historyApiFallback: true, // 提供页面来替代404响应
    hot: true, // 构建失败的情况下启动热模块替代而不是刷新页面,
    allowedHosts: 'all',  // 允许访问开发服务器的服务列入白名单
    onBeforeSetupMiddleware: (devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }
      const { app } = devServer
      // 获取进度
      app.use('/__progress', (_res, res) => {
        res.json({ progress, status, detailInfo });
      });

      // 劫持 index.html
      app.get('/', (_req, res, next) => {
        // 进度 < 100%,劫持请求，返回启动页面的html
        if (progress < 1) {
          res.set('Content-Type', 'text/html');
          const htmlPath = path.resolveApp('./config/webpack/plugins/status.html');
          const html = fs.readFileSync(htmlPath, { encoding: 'utf-8' });
          res.send(html);
          return
        }
        if (hijackPage) {
          let i = setInterval(() => {
            if (progress === 1) {
              clearInterval(i);
              hijackPage = false; // 进度已经达到 100%，取消劫持页面
              next();
            }
          }, 300);
        } else {
          next(); // 不再劫持页面，继续正常处理请求
        }
      });
    }
  },
  module: {
    rules: [
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
  plugins: [
    new webpack.ProgressPlugin(handler)
  ]
})