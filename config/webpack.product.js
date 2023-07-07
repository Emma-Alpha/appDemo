const common = require("./webpack.public.js")
const {
  merge
} = require("webpack-merge")
const path = require("./paths.js")
const fs = require('fs');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const appConfig = require(path.resolveApp('package.json')).appConfig;

// aliyun-theme的less变量,用于改掉antd的less变量
const lessToJs = require('less-vars-to-js');
const paletteLess = fs.readFileSync(path.resolveApp('src/common/styles/variables.less'), 'utf8');
const lessVars = lessToJs(paletteLess, {
  resolveVariables: true,
  stripPrefix: true
});
if (lessVars['font-family']) {
  lessVars['font-family'] = `"${lessVars['font-family']}"`
}

module.exports = env => {
  const EnvOutPutPath = env.outputPath
  const EnvPublicPath = env.publicPath

  return merge(common, {
    mode: "production",
    output: {
      filename: "[name].[contenthash].bundle.js",
      clean: true,
      path: path.resolveApp(EnvOutPutPath ?? "dist"),
      publicPath: EnvPublicPath ?? `${appConfig.domain}/s${appConfig.name}/`
    },
    module: {
      rules: [{
          test: /\.less$/,
          include: [/[\\/]node_modules[\\/].*antd/],
          use: [{
              loader: MiniCssExtractPlugin.loader,
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
        {
          test: /\.css$/,
          use: [{
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              }
            },
          ]
        },
        {
          test: /\.less$/,
          include: [path.resolveApp("src")],
          use: [{
              loader: MiniCssExtractPlugin.loader,
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
                  strictMath: false,
                  math: 'always',
                  modifyVars: {
                    ...aliyunTheme,
                    ...lessVars,
                  },
                  javascriptEnabled: true,
                }
              }
            }
          ]
        }
      ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "[name].[contenthash:8].css",
        chunkFilename: "[name].[contenthash:8].chunk.css",
        ignoreOrder: false
      }), // 将css 提取到单独文件中，为每个css的js创建一个css文件，并且支持css和SourceMaps按需加载。
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin({
          parallel: true,
          minimizerOptions: {
            preset: [
              "default",
              {
                discardComments: {
                  removeAll: true
                },
              },
            ],
          },
        }), // 用来压缩css文件的 
        new TerserJSPlugin({
          test: /\.(js|jsx)(\?.*)?$/i,
          exclude: [path.resolveApp('node_modules')],
          parallel: true,
          terserOptions: {
            compress: {
              // 打包后去掉除console.log之外的其他console。保留console.log的目的是方便打日志、排障
              pure_funcs: ['console.info', 'console.debug', 'console.warn']
            }
          }
        }),
      ],
    }
  })
}