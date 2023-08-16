### 前言

由于前端技术栈不断更新迭代，导致之前的框架缺少部分新特性以甚至无法兼容新组件。基于以上因素考虑，决定使用全新的技术栈来封装完善框架。

目前团队的技术栈：React 18 + React-router v6 + webpack 5 + antd 5 + zustand + axios ，由于涉及范围较为广泛，无法通过三言两语说清楚，所以就诞生了这个系列的文章，将讲述我是如何一步步将以上组件封装到项目框架上。



### 适用人群

* 懂得javascript基本语法
* 会使用基本使用vscode工具开发
* 略微有一点点的前端开发经验



### 目录结构

![image-20230815164222021](https://typora.gz4399.com/typora/20238/20230815_1692088943189736000.png)

| 文件名                | 说明                                                        |
| --------------------- | ----------------------------------------------------------- |
| .vscode/settings.json | 存放记录vscode的配置信息                                    |
| config/history        | 存放[History](https://github.com/remix-run/history)对象     |
| config/jwt            | cookie设置和删除类                                          |
| config/public         | 资源文件(jpeg, png, mov等等)                                |
| config/request        | [axios](https://www.axios-http.cn/docs/intro)二次封装类     |
| config/router         | 对[React-router](https://reactrouter.com/en/main)做二次封装 |
| config/webpack        | 存放[webpack](https://webpack.js.org/)配置信息              |
| dist                  | 通过webpack打包后生成的产物                                 |
| doc                   | 存放文档                                                    |
| src/pages             | 页面代码以及组件（配置式路由的开端，后面会详细讲解）        |
| src/components        | 页面公共组件                                                |
| src/utils             | 业务代码的公共方法                                          |
| src/index.css         | **特殊用途**：引入tailwindcss css内容                       |
| src/index.html        | HTML模板                                                    |
| src/index.tsx         | 项目入口文件                                                |
| src/routes.tsx        | 项目路由配置(可能会包含微服务子应用激活路由)                |
| src/loading.tsx       | 全局配置的Loading组件                                       |
| store                 | 全局状态管理[zustand](https://github.com/pmndrs/zustand)    |
| package.json          | 是一个用于描述和管理 Node.js 项目的配置文件                 |



### 环境准备

首先得有node，并确保node版本是14或以上。（推荐用 [nvm](https://github.com/nvm-sh/nvm) 来管理node版本，windows 下推荐用 [nvm-windows](https://github.com/coreybutler/nvm-windows) ）

mac 或 linux 下安装 nvm。

```shell
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
$ nvm -v
0.39.1
```

安装 node。

```shell
$ nvm install 16
$ nvm use 16
$ node -v
v16.10.0
```

然后需要包管理工具。node 默认包含npm，但也可以选择其他方案。

* [Pnpm](https://pnpm.io/) 推荐
* [Yarn](https://yarnpkg.com/getting-started/install)

安装 pnpm。

```shell
curl -fsSL https://get.pnpm.io/install.sh | sh -
$ pnpm -v
7.3.0
```



### 创建项目

先找个地方建个空目录。

```shell
$ mkdir myapp && myapp
```

使用pnpm 初始化项目

```shell
$ pnpm init
```

![image-20230815172039757](https://typora.gz4399.com/typora/20238/20230815_1692091240625812000.png)

出现package.json的文件后，代表项目创建成功。