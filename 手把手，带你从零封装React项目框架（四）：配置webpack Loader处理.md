### 前言

在上一章节中，我们成功在浏览器上看到了“Hello World”，但我们使用的是JS 语法，而不是团队规定的 TS 。webpack 只能理解 JavaScript 和 JSON 文件， 这是 webpack 开箱可用的自带能力。而webpack Loader 的作用是让webpack 去处理其他类型的文件，并将它们转换为有效[模块](https://webpack.docschina.org/concepts/modules) ，以供应用程序使用，以及被添加到依赖图中。



### 安装TypeScript

```shell
 pnpm i typescript -D
```



### 如何给Hello World 添加颜色

在src目录下创建index.css文件

```css
div {
  color: red;
}
```

将index.css 引入 index.js 中

```js
import './index.css';

....
```

再次运行`pnpm build`，发现控台上出现 `ERROR` 错误提醒。

![image-20230816112725291](https://typora.gz4399.com/typora/20238/20230816_1692156446451562000.png)

错误信息大致意思是：需要在webpack中添加loader来处理css这类型的东西，它无法识别。

那webpack的Loader 是什么东西？



### Loader

Loader 用于对模块的源代码进行转换。loader可以使你在 `import`或“load(加载)”模块时预处理文件。因此，loader 类似于其他构建工具中“任务（task）”，并提供了处理前端构建步骤的得力方式。loader可以将文件从不同的语言（如TypeScript） 转换为JavaScript 或者内联图像转换为 data URL。 loader 甚至允许你直接在 JavaScript模块中 `import` CSS文件！ 



### css-loader

#### 1. 安装 css-loader

因为要告诉webpack我现在需要加载Css文件，因此需要用到css-loader

```shell
pnpm i -D css-loader
```

#### 2. 配置css-loader规则

指示webpack 对每个`.css`使用css-loader

**webpack.config.js**

```js
const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/, use: 'css-loader'
      }
    ]
  }
}
```

运行`pnpm build`后，发现my-first-webpack.bundle.js中内容出现了刚刚编写的css文件

![image-20230816113843740](https://typora.gz4399.com/typora/20238/20230816_1692157125297634000.png)

但打开index.html后发现Hello World 的字体颜色还是黑色的。那是因为css 文件虽然能识别出来，但没有被引用上去，导致无法生效。



### style-loader

由于css文件没有被引用，最终导致HTML上没有正确显示字体的颜色。所以我们需要将css文件引用上去。一般来说有两种方法来引用，第一种是将CSS注入DOM节点上；第二种是将CSS提取到单独的文件中。

本章节我只会讲解第一种方式，将CSS注入DOM节点上。

[style-loader](https://github.com/webpack-contrib/style-loader) 就是将css 注入 DOM节点上

![image-20230816114537788](https://typora.gz4399.com/typora/20238/20230816_1692157538686881000.png)

#### 1. 安装

```shell
pnpm i -D style-loader
```

#### 2. 修改webpack rules配置

[module.rules](https://webpack.docschina.org/configuration/module/#modulerules) 允许在webpack 配置中指定多个loader。这种方式是展示 loader的一种简洁明方式，并且有助于使代码变得简洁和易于维护。同时让我们对各个loader有个全局概览：

Loader **从右到左** （**从下到上**）地取值(vealuate)/执行(execute)。

示例：

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
};
```

上面示例中，从sass-loader 开始执行，然后继续执行 css-loader，最后以style-loader为结束。

> 扩展（webpack 内联方式，不感兴趣的童鞋可以跳过~）

webpack中是可以支持内联方式执行使用指定Loader。

可以在 `import` 语句或任何 与"import"方式同等的引用方式中指定loader。使用`!`将资源中的loader分开。每个部分都会相对于当前目录解析。

```js
import Styles from 'style-loader!css-loader?modules!./styles.css';
```

通过为内联 `import` 语句添加前缀，可以覆盖配置中的所有loader,preLoader和postLoader:

* 使用 `!` 前缀，将禁用所有已配置的 normal loader(普通loader)

```js
import Styles from '!style-loader!css-loader?modules!./styles.css';
```

* 使用 `!!` 前缀，将禁用所有已配置的 loader（preLoader, loader, postLoader）

```shell
import Styles from '!!style-loader!css-loader?modules!./styles.css';
```

* 使用 `-!` 前缀，将禁用所有已配置的 preLoader 和 loader,但是不禁用 postLoaders

```js
import Styles from '-!style-loader!css-loader?modules!./styles.css';
```

选项可以传递查询参数，例如 `?key=value&foo=bar`，或者一个 JSON 对象，例如 `?{"key":"value","foo":"bar"}`。



回归正题，我们之前只配置解析css文件，而没有引用。因此需要添加引用

修改webpack.public.js文件

```js
const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/, use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  }
}
```

有童鞋会问为什么style-loader在css-loader上面？

> 敲脑袋
>
> 上面刚刚提到了module-rules的 use 的执行顺序是从下到上，所以不能将style-loader放到css-loader下面。



#### 3. 重新运行

配置后之后，重新执行`pnpm build`命令

打开index.html查看，发现Hello World 字体颜色变红色了。![image-20230816120623144](https://typora.gz4399.com/typora/20238/20230816_1692158784670656000.png)



### React 

我们团队的架构是基于React来开发的。因此，需要安装React。

```shell
pnpm install react react-dom
```

安装成功后，改用React 语法来编写。

重命名一下src/index.js ===> src/index.tsx

index.tsx

```tsx
import React from 'react';
import { createRoot } from 'react-dom/client';

const ELement = () => {
  return <div>Hello WOrld</div>;
};

const domNode = document.getElementById('root');
const root = createRoot(domNode!);
root.render(<ELement />);
```

修改dist/index.html的内容, 添加一个id=root的div标签

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
    <div id="root"></div>
  </body>
</html>
```

由于我们使用了TS+React的语法，是没有办法直接打包生成出浏览器能识别的语言。

因此需要用到我们的loader解析器，[ts-loader](https://github.com/TypeStrong/ts-loader)就很好的帮我解决了



### ts-loader

安装

```shell
pnpm i -D ts-loader
```

更新`webpack.public.js`

```js
const path = require('path');

module.exports = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },
      {
        test: /\.css$/, use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  }
}
```

有细心的朋友可能发现了不仅新增了rules而且多了resolve这个配置项和entry入口路径少了后缀名。这是为什么呢？

其实webpack是可以通过以上的配置来方便用户引入文件。

resolve.extensions 

`[string] = ['.js', '.json', '.wasm']`

尝试按顺序解析这些后缀名。如果有多个文件有相同的名字，但后缀名不同，webpack会解析列在数组首位的后缀的文件并跳过其余的后缀。

能使用户在引用模块时不带扩展。



执行`pnpm build`，然后重新打开index.html。你会惊奇的发现，我们的Hello World 并没有出现，打开控制台发现报错。

>my-first-webpack.bundle.js:2 Uncaught Error: Minified React error #299; visit https://reactjs.org/docs/error-decoder.html?invariant=299 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
>at n.createRoot (my-first-webpack.bundle.js:2:127252)
>at 164 (my-first-webpack.bundle.js:2:139773)
>at t (my-first-webpack.bundle.js:2:139986)
>at my-first-webpack.bundle.js:2:140026
>at my-first-webpack.bundle.js:2:140033

![image-20230816143902026](https://typora.gz4399.com/typora/20238/20230816_1692167943125808000.png)

看控制台，发现报错的最近引用点是在n.createRoot中，而这里在index.tsx中是填充挂载点的。

我大胆猜测是React找到挂载点时，找不到id=root的dom节点，于是我调整了一下index.html中脚本加载顺序

index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Getting Started</title>
    <script src="https://unpkg.com/lodash@4.17.20"></script>
  </head>
  <body>
    <div id="root"></div>
    <script src="./my-first-webpack.bundle.js"></script>
  </body>
</html>
```

刷新浏览器就可以看到Hello WOrld



### less-loader

由于团队中不会怎么使用css，而是使用增强版css的less语法。

安装

```shell
pnpm i -D less less-loader
```

在src目录下创建index.less文件

index.less

```less
@color: red;

#container {
  display: block;
  border: 1px solid #000;
  color: @color;
}
```

在src/index.tsx文件中引入index.less，修改index.tsx文件

```tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.less';

const ELement = () => {
  return <div id={'container'}>Hello WOrld</div>;
};

const domNode = document.getElementById('root');
const root = createRoot(domNode!);
root.render(<ELement />);
```

新增webpack.public.js的loader匹配规则

```js
module.exports = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },
      {
        test: /\.css$/, use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ]
  }
}
```

因为less先需要经过Less-loader处理后才能交给css-loader，最后style-loader自动挂载到DOM节点。

>复习一遍： use 是从下到上执行。

然后执行 `pnpm build` 重新打包项目，看到样式已经生效了。

![image-20230816145940011](https://typora.gz4399.com/typora/20238/20230816_1692169181090269000.png) 



### CSS Modules

由于CSS的规则都是全局的，任何一个组件的样式规则，都对整个页面有效。

接下来，我会思考一下如果我less的样式规则只想作用于在当前组件，而不是全局都受收到影响。

[CSS Modules](https://www.ruanyifeng.com/blog/2016/06/css_modules.html) 就是为了解决这个问题而诞生~

产生局部作用于的唯一方法，就是使用一个独一无二的`class`名字，不会与其他选择器重名。这就是 **CSS Modules** 的做法。

接下来我们开启css-loader的css modules，详细资料[这里](https://github.com/webpack-contrib/css-loader#modules)

修改`webpack.public.js` 的 css-loader配置

```js
const path = require('path');

module.exports = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },
      {
        test: /\.css$/, use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          }
        ]
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          }
          "less-loader",
        ],
      },
    ]
  }
}
```



### [sass-loader](https://github.com/webpack-contrib/sass-loader)

由于团队项目中很少使用sass来替代css。(使用成本较大，而且较多功能应用不上。)

安装

```shell
pnpm add -D sass-loader sass
```

新增 `webpack.public.js` loder规则

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
```



### esbuild-loader

随着时间的推移，项目的代码越来越多，体积也是越来越多。项目编译打包的速度将会大幅度提高，因此优化编译和打包速度的问题是无法避免的问题~

esbuild是一个用Go 编写的 JavaScript 捆绑器，支持超快的 ESNext 和 TypeScript 转移以及JS压缩。

Esbuild-loader 是 babel-loader 和 ts-loader 提供了更快的替代方案。可以在webpack构建中利用esbuild速度。

安装

```shell
pnpm i -D esbuild-loader
```

修改 `webpack.public.js`

```js
  module.exports = {
      module: {
          rules: [
-             // Transpile JavaScript
-             {
-                 test: /\.js$/,
-                 use: 'babel-loader'
-             },
-
-             // Compile TypeScript
-             {
-                 test: /\.tsx?$/,
-                 use: 'ts-loader'
-             },
+             // Use esbuild to compile JavaScript & TypeScript
+             {
+                 // Match `.js`, `.jsx`, `.ts` or `.tsx` files
+                 test: /\.[jt]sx?$/,
+                 loader: 'esbuild-loader',
+                 options: {
+                     // JavaScript version to compile to
+                     target: 'es2015'
+                 }
+             },

              // Other rules...
          ],
      },
  }
```



### asset/resource

其作用： 发送一个单独的文件并导出 URL。（通常用于tsx文件中导入图片等静态资源）

默认情况下，`asset/resource` 模块以 `[hash][ext][query]`文件名发送到输出目录。

可以通过在webpack配置中设置 `output.assetModuleFilename` 来修改此模板字符串：

**webpack.public.js**

```js
const path = require('path');

module.exports = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'my-first-webpack.bundle.js',
    assetModuleFilename: "images/[hash][ext]", // 将png,jpg,jpeg,gif等资源文件存放到images下。
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        type: "asset/resource",
      },
      { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },
      {
        test: /\.css$/, use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          }
        ]
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          }
          "less-loader",
        ],
      },
    ]
  }
}
```



### @svgr/webpack

目前主要使用这个Loader是处理svg文件的内容，能将Svg 自动生成React 组件方便我们的使用。



### 题外话

更多的Loader可以到网上进行搜索学习，欢迎大家提出来共同探讨~