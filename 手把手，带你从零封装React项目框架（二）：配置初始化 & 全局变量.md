### 前言

配置文件是每个项目必不可少的部分，用来保存应用基本数据信息，避免要修改一个配置项需要到处找的尴尬。这里我使用[dotenv](https://github.com/motdotla/dotenv)作为配置管理方案，能够在Web项目上读取到设置的值。方便业务逻辑的使用。

### 安装

```shell
# install locally (recommended)
pnpm install dotenv --save
```



### 编写全局变量配置文件

在项目根目录下创建`config`文件夹，进入`config`文件夹中新建一个文件夹`env` 后在文件夹下创建`.env.public`用于存放公共的全局变量，大家先按照我的提供的项目配置内容存放，后续有定义需求可以自行添加。

```toml
API_PREFIX = "/api"
API_TIMEOUT = 6000

COOKIE_NAME = 'ywkf_jwt'

APP_HOST = "127.0.0.1"
APP_PORT = 8888
APP_CNAME = "子应用demo"
APP_NAME = "demo"
```

| 变量名      | 说明                                     |
| ----------- | ---------------------------------------- |
| API_PREFIX  | axiosURL请求前缀                         |
| API_TIMEOUT | axios请求超时时间                        |
| COOKIE_NAME | 设置Cookie的key名                        |
| APP_HOST    | Webpack-dev-server的访问地址             |
| APP_PORT    | 端口号                                   |
| APP_CNAME   | 当前项目的中文名字(应用于tabs标签栏等等) |
| APP_NAME    | 项目代号(基本唯一)                       |



### 编写TS规范配置文件

为什么我们团队需要TypeScript呢？是JavaScript不香吗？

TypeScript 是 JavaScript 带类型的超集。

TypeScript 要执行需要先转化成 JavaScript 代码，其实合法的 JavaScript 程序就是合法的 TypeScript， 如果把一段正常的 JS 代码转化改文件名后缀为 ts，然后执行，尽管会提示类型错误，对应的 js 文件还是被创建了。就算代码中有错误，你仍然可以使用TypeScript。但这种情况下，TypeScript会警告你代码可能不会按预期执行。

JS 的优点是动态类型，灵活，同时这也是 JS 的缺点，在大型项目中，代码量大，团队成员多，就会出现某些奇怪难以发现的bug。

ts 带来了类型标注，定好了规范，让项目更“稳固”，有利于多人开发，团队协作，提高工作效率。

编译器在编译阶段就会将潜在风险提前暴漏，例如变量名的粗心写错，调用对象上不存在的函数或属性，函数参数传递错误等等。

在项目的根目录下创建`tsconfig.json`文件, 项目初期约定好团队的规范后，就可以敲定团队的规范配置。将以下内容填充到`tsconfig.json`中

```json
{
  "compilerOptions": {
    "declaration": false, // 生成声明文件
    "esModuleInterop": true,  // 允许 export = 导出，由import from 导入
    "module": "commonjs",  // 生成代码的模块标准
    "moduleResolution": "node",  // 模块解析策略
    "noUnusedLocals": false,  // 检查只声明，未使用的局部变量
    "noImplicitAny": false,  // 不允许隐式的 any 类型。
    "noUnusedParameters": true,  // 检查未使用的函数参数
    "sourceMap": true,  // 编译器编译时，生成目标文件的sourceMap文件。
    "strict": true,  // 开启所有严格的类型检查
    "skipLibCheck": true,  // 用来控制是否在编译时进行库文件检查的
    "target": "es5",  // 目标语言的版本
    "jsx": "react",  // 控制如何在 JavaScript 文件中发出 JSX 构造。这只影响以.tsx files 开头的 JS 文件的输出
    "lib": ["es5", "dom", "dom.iterable", "esnext"],  // TypeScript 包含内置 JS API 的一组默认类型定义（如Math），以及浏览器环境中找到的内容的类型定义（如document)
    "paths": {
      "@/*": [
        "./src/pages/*"
      ],
      "@src/*": [
        "./src/*"
      ],
      "@shared/*": [
        "./shared/*"
      ],
      "@config/*": [
        "./config/*"
      ],
      "@store/*": [
        "./store/*"
      ],
      "@utils/*": [
        "./utils/*"
      ],
    },  // 将导入重新映射到相对于baseUrlif 集或 tsconfig 文件本身的查找位置
  },
  "exclude": [
    "**/node_modules",
    "**/examples",
    "**/dist",
    "**/fixtures",
    "**/*.test.ts",
    "**/*.e2e.ts",
    "**/templates",
    "ui"
  ],  // 指定解析时应跳过的文件名或模式数组include。
  "include": ["./src/**/*", "./react-app-env.d.ts", "config/router"]  // 指定要包含在程序中的文件名或模式的数组。这些文件名是相对于包含该tsconfig.json文件的目录进行解析的。
}
```



### 编写代码格式化配置文件

Visual Studio Code 是我们团队统一使用的前端代码编程工具，因此代码的格式化以及美化插件层出不穷。统一规划好的插件有利于项目团队成员阅读代码。

我们选择使用[Prettier](https://prettier.io/) 来美化代码, 在vscode的应用程序上搜索 `prettier`

![image-20230816094601509](https://typora.gz4399.com/typora/20238/20230816_1692150362568087000.png)

点击安装，安装后记得**重启** vscode。

在项目根目录下创建`.prettierr.json`文件，填写以下内容到文件中

```json
{
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "jsxSingleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "always",
  "printWidth": 180
}
```

具体配置以及参数可以到[Prettier](https://prettier.io/docs/en/install)官网学习了解



### 编写程序工具配置文件

由于团队上成员使用vscode时可能多多少少安装了其他插件，有时会导致代码格式化不生效等等问题。因此需要在当前项目中保存一份之前规范的vscodo基本配置即为重要。

在项目的根目录下创建`.vscode`文件夹，在文件夹下创建`settings.json`的文件。

填写以下内容到配置文件中。

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

