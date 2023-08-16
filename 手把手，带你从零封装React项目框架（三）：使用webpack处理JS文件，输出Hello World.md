### 前言

之前两章节已经介绍项目配置相关信息，接下来我将会带领大家敲出Web项目中的第一个`Hello World`



### Webpack

**webpack** 是一个用于现代 `JavaScript` 应用程序的 *静态模块* 打包工具。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建 一个 [依赖图(dependency graph)](https://webpack.docschina.org/concepts/dependency-graph/)，然后将你项目中所需的每一个模块组合成一个或多个 bundles，它们均为静态资源，用于展示你的内容。

>**Tip**
>
>具体内容可以到[这里](https://webpack.docschina.org/concepts/#entry)了解更多



可能有童鞋会问为什么不使用[Vite](https://vitejs.dev/)呢？

Vite 在启动开发服务器速度和HMR功能上都碾压Webpack的，那我们为什么不用呢？

首先，Vite 诞生时间相比与 Webpack时间比较短，插件生态上对比Webpack丰富的插件略显不足。无法处理不支持ES模块的第三方库，兼容性较差。

服务器启动在小中型项目中的速度差距不太，不足以作为替换Webpack的理由。webpack+esbuild 也可以做到飞快。

HMR差距在小中型项目中的差距基本体现不出来。

因此，Vite 的优点吸引力不足，选型Webpack还能拥有丰富的生态圈。



### 安装Webpack

```shell
pnpm i -D webpack
```

在config目录下创建webpack文件夹，进入webpack文件夹创建webpack.public.js文件。

```js
const path = require('path');

module.exports = {
  entry: "./src/index.js",   // 指定入口文件
  output: {
    path: path.resolve(__dirname, '../../dist'),  // 文件输入的路径
    filename: 'my-first-webpack.bundle.js'
  }
}
```



### 创建入口文件

在项目根目录下创建 `src` 文件夹，在 `src` 文件夹下创建 `index.js`文件。

将"Hello World" 内容填写到 index.js中

```js
function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello World!'
  return element
}

document.body.appendChild(component());
```



### 新增Package.json 命令

新增script命令build到package.json文件上

```json
{
  ...,
  "scripts": {
     "build": "webpack --config config/webpack/webpack.public.js",
      ...
	},
	...
}
```



### 安装webpack-cli

因为在终端执行webpack是需要webpack-cli的支持，因此需要安装

```shell
pnpm install -D webpack-cli
```



### 执行webpack打包命令

```shell
pnpm build
```

出现以下内容，即编译成功

![image-20230816104600758](https://typora.gz4399.com/typora/20238/20230816_1692153962474010000.png)

在项目根目录下会出现多一个文件夹dist, dist文件夹下出现了刚刚webpack配置中output filename。其原因是webpack按照配置文件将打包后的文件重命名成filename。

![image-20230816104623308](https://typora.gz4399.com/typora/20238/20230816_1692153989512951000.png)

在dist文件中新建 `index.html `文件

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Getting Started</title>
    <script src="https://unpkg.com/lodash@4.17.20"></script>
  </head>
  <body>
    <script src="./my-first-webpack.bundle.js"></script>
  </body>
</html>
```

点击index.html使用浏览器打开，出现了伟大的“Hello World!”

![image-20230816105113389](https://typora.gz4399.com/typora/20238/20230816_1692154274447983000.png)