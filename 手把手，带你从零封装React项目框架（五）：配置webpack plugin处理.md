### 前言

插件是用来扩展 Webpack 功能的，通过在构建流程里注入钩子实现，它给 Webpack 带来了很大的灵活性。本章将会介绍框架中额外使用的插件。

### clean-webpack-plugin

这是一个用于自动清理 Webpack 输出目录的插件。在每次构建前，它会删除旧的构建文件，确保输出目录只包含最新的构建产物。这样可以避免手动清理输出目录，提高开发效率。

#### 安装

```shell
pnpm install --save-dev clean-webpack-plugin
```

#### 使用

```js
// webpack.public.js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackConfig = {
    plugins: [
        new CleanWebpackPlugin(),
    ],
};
```



### html-webpack-plugin

`html-webpack-plugin` 是一个用于自动生成 HTML 文件并将 Webpack 打包后的 JS 和 CSS 文件自动插入到 HTML 中的插件。

#### 安装

```shell
pnpm install html-webpack-plugin --save-dev
```

#### 使用

```js
// webpack.public.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
new HtmlWebpackPlugin({
  title: appInfoConfig.appConfig.cname,	// 注入 HTML 文档的标题
  mountRoot: appInfoConfig.appConfig.name,	// 注入 react 根节点的 id
  template: path.resolveApp('./src/index.html'),	// HTML 模板，插件根据模板文件生成 html
  filename: 'index.html',	// 生成的 HTML 文件的文件名，默认值'index.html'，也可以使用占位符[name]替换为入口文件的名称
  inject: 'body', // 所有javascript 资源都是加载到body底部
  hash: true, // 为静态资源生成hash值
  minify: {
    // 压缩HTML文件
    removeComments: false, // 移除HTML中的注释
    collapseWhitespace: false, // 删除空白符与换行符
  },
  favicon: path.resolveApp('./config/public/favicon.ico'),	// 	标签页的图标
  publicPath: '//0.0.0.0:8888/',	// 用于脚本和链接标签的 publicPath
}),
```

#### 注入变量

title、mountRoot 是通过插件注入到 html 文件的变量，我们在模板 HTML 中消费了这些变量，注入到约定模板 `<%= %>` 中，插件在生成 HTML 文件时会将约定模板替换为变量值。

```html
./src/index.html
<div id="<%= htmlWebpackPlugin.options.mountRoot %>" style="height: 100%; width: 100%;"></div>
```

### webpackbar

这是一个用于显示 Webpack 构建进度的插件。它在构建过程中显示一个美观的进度条和相关信息。

![image-20230823161016603](https://typora.gz4399.com/typora/20238/20230823_1692778216717092000.png)

#### 安装

```shell
pnpm install webpackbar --save-dev
```

#### 使用

```js
// webpack.public.js
const WebpackBar = require('webpackbar');
plugins: [
  new WebpackBar()
]
```

### ProgressPlugin

`webpack.ProgressPlugin` 是一个内置的 Webpack 插件，用于在本地开发的构建过程中，在浏览器打开的页面中显示进度信息。

![image-20230823161050090](https://typora.gz4399.com/typora/20238/20230823_1692778250136775000.png)

#### 使用

提供一个回调函数来获取构建进度信息，每当构建进度发生变化时，例如模块编译、文件生成等，回调函数都会被触发，并获取最新的状态值，赋值给文件中的变量。

```JS
// webpack.development.js
const handler = (percentage, status, info) => {
  status = status;
  progress = percentage;
  detailInfo = info;
};
plugins: [
  new webpack.ProgressPlugin(handler)
],
```

利用 webpack-dev-server 的钩子事件 `onBeforeSetupMiddleware` ，植入新的中间件，在浏览器页面展示当前 webpack 构建的进度。具体实现如下：

1. 启动服务器，在中间件加载之前触发 onBeforeSetupMiddleware 事件的回调；
2. 利用 express 实例的use方法，创建一个路由，并在请求该路由时返回带有构建进度信息的 json ；
3. 当构建未完成时，使用 express 实例的get 方法，当浏览器请求根目录时，返回一个展示构建信息的 HTML 页面；
4. 在 HTML 文件中，在构建未完成的情况下，定时请求进度信息，并渲染到页面中；
5. 当构建完成后，退出该中间件，取消劫持。

```js
// webpack.development.js
onBeforeSetupMiddleware: (devServer) => {
  const { app } = devServer;
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
      return;
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
},
 
// ./config/webpack/plugins/status.html
function check(data) {
  renderStatus(data);
  if (
    data.progress && data.progress ===  1
  ) {
    location.reload();
  } else {
    setTimeout(loadData, 300);
  }
}
function loadData() {
  fetch('/__progress')
  .then((res) => res.json())
  .then(check);
}
loadData();
```

### webpack-merge

一个用于合并多个 Webpack 配置对象的工具库。它可以帮助你更简洁地组织和管理 Webpack 配置，特别是在处理不同环境（如开发、生产）时。通过使用 `webpack-merge`，可以将通用配置与特定环境配置分开，并根据需要合并它们。

#### 安装

```shell
pnpm install webpack-merge --save-dev
```

#### 使用

```js
// webpack.public.js
module.exports = {
  // ...通用配置项
};
// webpack.development.js
const { merge } = require('webpack-merge');
const common = require('./webpack.public.js');
module.exports = merge(common, {
   // ...开发环境配置项
})
```



### MiniCssExtractPlugin

这是一个用于将 CSS 从 JavaScript 模块中抽离出来并生成单独的 CSS 文件的 Webpack 插件。这对于在生产环境中优化性能和加载速度非常有帮助，因为浏览器可以并行加载 JS 和 CSS 资源。

#### 安装

```shell
pnpm install mini-css-extract-plugin --save-dev
```

#### 使用

```js
// webpack.product.js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module: {
  rules: [
    {
      test: /\.less$/,
      use:[MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
    }
  ]
}
plugins: [
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash:8].css",
    chunkFilename: "[name].[contenthash:8].chunk.css"
  }), // 将css 提取到单独文件中，为每个css的js创建一个css文件，并且支持css和SourceMaps按需加载。
],
```

### TerserJSPlugin

一个用于压缩和优化 JavaScript 代码的 Webpack 插件。它基于 `terser`，一个支持 ECMAScript 2015+（ES6+）语法的 JavaScript 解析器和压缩器。在生产环境中使用 `TerserJSPlugin` 可以减小输出文件的大小，从而提高应用程序的加载速度和性能。

#### 安装

```shell
npm install terser-webpack-plugin --save-dev
```

#### 使用

```js
// webpack.product.js
optimization: {
  minimizer:[
    new TerserJSPlugin({
      test: /\.(js|jsx)(\?.*)?$/i,	// 使用正则表达式匹配需要压缩的文件类型（在这里是 .js 和 .jsx 文件）
      exclude: [path.resolveApp('node_modules')],	// 排除不需要压缩的文件或目录（在这里是 node_modules 目录）
      parallel: true,	// 启用多cpu并行处理以加速压缩过程
      minify: TerserJSPlugin.esbuildMinify, // 使用 esbuild 进行压缩
      terserOptions: {	// 提供一些自定义的压缩选项
        compress: {
          // 打包后去掉除console.log之外的其他console。保留console.log的目的是方便打日志、排障
          pure_funcs: ['console.info', 'console.debug', 'console.warn']
        },
        minify: true,	// 启用压缩
        minifyWhitespace: true, // 启用空白字符压缩
        minifyIdentifiers: true,	// 启用标识符压缩
        minifySyntax: true,	// 启用语法压缩
      }
    }),
  ]
}
```

