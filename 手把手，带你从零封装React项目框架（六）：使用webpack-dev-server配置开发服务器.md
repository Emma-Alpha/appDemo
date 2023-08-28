### 前言

webpack-dev-server 在前端工程化中扮演着重要角色。它是一个基于 Node.js 的开发服务器，用于在本地开发中提供实时重新加载和快速开发功能。webpack-dev-server 与 Webpack 配合使用，可以帮助开发者更高效地进行前端项目的开发

### 安装 webpack-dev-server 

在安装 webpack-dev-server 之前，确保已经安装了 webpack 和 webpack-cli。

```shell
pnpm install --save-dev webpack webpack-cli webpack-dev-server 
```

### 启动 webpack-dev-server

在您的 webpack 配置文件中添加以下内容：

```js
module.exports = {
  devServer: {
    compress: true,
    port: 9000,
	},
}
```

在您的 package.json 中添加一个脚本用来启动 webpack-dev-server：

```shell
"scripts": {
  "start": "webpack-dev-server --config config/webpack/webpack.development.js",
}
```

执行 `pnpm start` 后，会开启一个端口号为 9000 的服务器

### webpack serve

`webpack serve` 是一个用于启动 webpack-dev-server 的命令。

### 项目中 webpack-dev-server 的配置

webpack-dev-server 属性是配置在 webpack 配置文件中的 **devServer** 属性。webpack-dev-server 执行时会读取这个属性来做配置。

```js
module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },	// 服务器返回的 response 的加入自定义 header
    host: '127.0.0.1', // 服务器host，默认为localhost
    port: 9000, // 服务器端口号，默认为8080
    open: true, // 启动后是否打开浏览器，默认为false，当值为字符串时，打开指定的浏览器，当值为字符串数组时，在浏览器打开指定页面
    compress: true, // 是否启用 gzip 压缩
    hot: true, // 是否启动热更新
    historyApiFallback: true, // 当此属性设置为true或为object时并且使用HTML5 API时 所有404页面会跳转到index.html
    allowedHosts: 'all', // 将允许访问开发服务器的服务列入白名单
    onBeforeSetupMiddleware:
    client: { // 设置 webSocket 客户端的一些属性
    	progress: true, // 是否在浏览器控制台打印打包进度
    	webSocketTransport: 'ws', // 设置使用的WebSocket， 值为 sockjs或者ws
  	},
    devMiddleware: { // webpack-dev-middleware 中间件的配置

    },
  	onBeforeSetupMiddleware: ()=>{}	// 自定义中间件钩子，优先于server内部中间件执行
  }
}
```

这里仅讲解在项目中使用到的配置属性，其他属性请参考[官方文档](https://webpack.docschina.org/configuration/dev-server/)。

### devServer

在 webpack 配置文件中，通过 devServer 对象的配置属性操控 webpack-dev-server。

> 如果你碰到了问题，请将路由导航至 `/webpack-dev-server` 将会为你展示服务文件的位置。例如： `http://localhost:9000/webpack-dev-server`。

> 当启动本地服务的时候 HTML 模板是必须提供的，通常是 `index.html`。确保将脚本引用添加到 HTML 中，webpack-dev-server 不会自动注入它们。

```js
devServer: {
  compress: true, // 启用 gzip 压缩
  port: 9000, // 指定服务器端口号，默认为8080
}
```

#### allowedHosts

该选项允许将允许访问开发服务器的服务列入白名单。

```js
devServer: {
  allowedHosts: // 'auto' | 'all' [string]
}
```

当设置为 `'all'` 时会跳过 host 检查。当设置为 `'auto'` 时，此配置项总是允许 `localhost`、 [`host`](https://webpack.docschina.org/configuration/dev-server/#devserverhost) 和 [`client.webSocketURL.hostname`](https://webpack.docschina.org/configuration/dev-server/#websocketurl)。

#### bonjour

启动时通过 [ZeroConf](http://www.zeroconf.org/) 网络广播你的开发服务器。

```js
devServer: {
  bonjour: true,	// boolean | object
}
```

#### client

##### logging

允许在浏览器中设置日志级别。

##### overlay

当**编译**过程出现错误或警告时，在浏览器中显示全屏覆盖。

![image-20230821194807638](https://typora.gz4399.com/typora/20238/20230823_1692762143290928000.png)

##### progress

是否在浏览器中以百分比显示编译进度。

##### reconnect

告诉 dev-server 它应该尝试重新连接客户端的次数。当为 `true` 时，它将无限次尝试重新连接。

![image-20230821193516703](https://typora.gz4399.com/typora/20238/20230823_1692762147757414000.png)

##### webSocketTransport

选择 Websocket Server 类型，@4.x 版本默认使用 WebsocketServer.js，即 ws；@3.x 默认选择SockJSServer.js，即 sockjs。

##### webSocketURL

指定 URL 到 web socket 服务器。

```js
devServer: {
  client: {
		logging: // 'log' | 'info' | 'warn' | 'error' | 'none' | 'verbose',
    overlay: // boolean = true object: { errors boolean = true, warnings boolean = true }
    progress: // boolean
    reconnect: // boolean=true number
    webSocketTransport: // 'ws' | 'sockjs' | string
    webSocketURL: {
      hostname: '0.0.0.0',
      pathname: '/ws',
      password: 'dev-server',
      port: 8080,
      protocol: 'ws',
      username: 'webpack',
    }, // string ｜ object
  }
}
```

#### compress

启用此功能时，webpack-dev-server 会对发送给浏览器的静态资源（例如 JavaScript、CSS 和 HTML 文件）进行 gzip 压缩。这可以减小传输文件的大小，从而加快加载速度和提高开发体验。

![image-20230821201034383](https://typora.gz4399.com/typora/20238/20230823_1692762152165517000.png)

#### devMiddleware

为中间件 [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) 提供处理 webpack 资源的配置项。

##### writeToDisk

指示模块将文件写入配置中指定磁盘上的配置位置。

![image-20230821210054237](https://typora.gz4399.com/typora/20238/20230823_1692762156447209000.png)

##### index

用于指定服务器应该为哪个页面提供服务。当应用程序有多个入口点或者需要自定义默认首页时，这个属性就会派上用场。

```js
module.exports = {
  devServer: {
    devMiddleware: {
      index: true,	// If false (but not undefined), the server will not respond to requests to the root URL.
      mimeTypes: { phtml: 'text/html' },
      publicPath: '/public',	// 中间件绑定到的公共路径
      serverSideRender: true,	// 指示模块启用或禁用服务器端渲染模式。
      writeToDisk: true,	// Boolean|Function
    },
  },
};
```

#### headers

为所有响应添加 headers：

#### historyApiFallback

`devServer.historyApiFallback`为`true`时，使用[HTML5 History API](https://developer.mozilla.org/en-US/docs/Web/API/History)时，`index.html`提供页面来代替任何`404`响应。或者通过提供一个对象进一步控制：

```js
devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/views/landing.html' },
        { from: /^\/subpage/, to: '/views/subpage.html' },
        { from: /./, to: '/views/404.html' },
      ],
    },
  },
```

#### host

指定要使用的域名。

#### hot

是否启用 webpack 的热模块替换。当值为 only 时，表示仅在成功应用热更新时才进行模块替换，而不会在失败时触发整个页面的刷新。

> 从 webpack-dev-server v4 开始，HMR 是默认启用的。它会自动应用 [`webpack.HotModuleReplacementPlugin`](https://webpack.docschina.org/plugins/hot-module-replacement-plugin/)，这是启用 HMR 所必需的。因此当 `hot` 设置为 `true` 或者通过 CLI 设置 `--hot`，你不需要在你的 `webpack.config.js` 添加该插件。

```js
  devServer: {
    hot: true, // 'only' boolean = true
  },
```

#### ipc

监听 unix 套接字

#### liveReload

默认情况下，当监听到文件变化时 dev-server 将会重新加载或刷新页面。为了 `liveReload` 能够生效，[`devServer.hot`](https://webpack.docschina.org/configuration/dev-server/#devserverhot) 配置项必须禁用或者 [`devServer.watchFiles`](https://webpack.docschina.org/configuration/dev-server/#devserverwatchfiles) 配置项必须启用。

#### magicHtml

启用/禁止 magic HTML routes。

#### onListening

提供在 webpack-dev-server 开始监听端口连接时执行自定义函数的能力。

#### open

告诉 dev-server 在服务器已经启动后打开浏览器。设置其为 `true` 以打开你的默认浏览器。

当你需要在浏览器打开多个指定界面时，可以这样配置：

```js
devServer: {
  open: ['/', '/cqrTest'],
},
```

指定特定浏览器打开，可以这样配置：

```js
devServer: {
  open: {
    app: {
      name: 'google-chrome',	// 浏览器应用程序名称与平台相关
    },
  },
},
```

#### port

指定监听请求的端口号，`port` 配置项不能设置为 `null` 或者空字符串，要想自动使用一个可用端口请使用 `port: 'auto'`。

#### proxy

当拥有单独的 API 后端开发服务器并且希望在同一域上发送 API 请求时，代理某些 URL 可能会很有用，这可以用来避免被浏览器判定为跨域请求。

有时不想代理所有内容。 可以配置 `bypass` 属性，基于函数的返回值绕过代理。在该功能中，可以访问请求，响应和代理选项。

- 返回 `null` 或 `undefined` 以继续使用代理处理请求。
- 返回 `false` 会为请求产生 404 错误。
- 返回提供服务的路径，而不是继续代理请求。

```js
proxy: {
  '/api': {
    target: 'http://localhost:3000',
    pathRewrite: { '^/api': '' },
    secure: false,	// 当后端服务器不接受在 HTTPS 上运行且证书无效时，可配此属性
    changeOrigin: true, // 默认情况下，代理时会保留主机头的来源，可以将 changeOrigin 设置为 true 以覆盖此行为。
    bypass: function (req, res, proxyOptions) {
      if (req.headers.accept.indexOf('html') !== -1) {
        console.log('Skipping proxy for browser request.');
        return '/index.html';
      }
    },	// 对于浏览器请求，则提供 HTML 页面，但是对于 API 请求，则代理它。
  },
},
```

如果想将多个特定路径代理到同一目标，则可以使用一个或多个带有 `context` 属性的对象的数组：

```js
devServer: {
  proxy: [
    {
      context: ['/auth', '/api'],
      target: 'http://localhost:3000',
    },
  ],
},
```

默认情况下不会代理对 root 的请求。 要启用根代理，应将 [`devMiddleware.index`](https://webpack.docschina.org/configuration/dev-server/#devserverdevmiddleware) 选项指定为 false。

#### server

允许设置服务器和配置项（默认为 'http'）。

将 server 设置为 `https`，服务器将提供 https 服务。此时我们的程序内部仍然使用 http 请求，所以报错。

![image-20230822094045713](https://typora.gz4399.com/typora/20238/20230823_1692762163513060000.png)

`spdy` 是 Google 开发的一种网络传输协议，是一个用于支持 HTTP/2 的 Node.js 模块，可以与 webpack-dev-server 结合使用以提高开发环境中的性能。由于 SPDY 依赖于 TLS（传输层安全）进行加密通信，因此需要使用 HTTPS。

> spdy 在 Node 15.0.0 及以上的版本会被忽略，因为 [spdy 在这些版本中不会正常工作](https://github.com/spdy-http2/node-spdy/issues/380)。

```js
devServer: {
  server: { // 'http' | 'https' | 'spdy' string object
    type: 'https',
    options: {
      ca: './path/to/server.pem',
      pfx: './path/to/server.pfx',
      key: './path/to/server.key',
      cert: './path/to/server.crt',
      passphrase: 'webpack-dev-server',
      requestCert: true,
    },
  },
},
```

#### setupExitSignals

允许在 `SIGINT` 和 `SIGTERM` 信号时关闭开发服务器和退出进程。

#### setupMiddlewares

提供执行自定义函数和应用自定义中间件的能力。

```js
devServer: {
  setupMiddlewares: (middlewares, devServer) => {
    devServer.app.get('/setup-middleware/some/path', (_, response) => {
      response.send('setup-middlewares option GET');
    });
    // 如果你想在所有其他中间件之前运行一个中间件或者当你从 `onBeforeSetupMiddleware` 配置项迁移时，
    // 可以使用 `unshift` 方法
    middlewares.unshift({
      name: 'first-in-array',
      // `path` 是可选的
      path: '/foo/path',
      middleware: (req, res) => {
        res.send('Foo!');
      },
    });
    // 如果你想在所有其他中间件之后运行一个中间件或者当你从 `onAfterSetupMiddleware` 配置项迁移时，
    // 可以使用 `push` 方法
    middlewares.push({
      name: 'hello-world-test-one',
      // `path` 是可选的
      path: '/foo/bar',
      middleware: (req, res) => {
        res.send('Foo Bar!');
      },
    });
    return middlewares;
  },
},
```

#### static

该配置项允许配置从目录提供静态文件的选项（默认是 'public' 文件夹）。将其设置为 `false` 以禁用：

##### directory

告诉服务器从哪里提供内容。

##### publicPath

告诉服务器在哪个 URL 上提供 `static.directory` 的内容。

```js
devServer: {
  static: {
    directory: path.resolveApp('static'),
    publicPath: '/static',
  },
}
```

#### watchFiles

监听文件变化

```js
devServer: {
  watchFiles: ['src/**/*.php', 'public/**/*'],
},
```

#### webSocketServer

该配置项允许我们选择当前的 web-socket 服务器或者提供自定义的 web-socket 服务器实现。默认模式为 `ws`

### webpack-dev-server 工作流程

#### 启动服务器

1. 启动 webpack-dev-server，可以通过 cli `webpack serve` 调用，也可以调用 api 启动。

2. webpack-dev-server 中使用了 express 框架来作为服务器。启动时，会使用 express 创建一个 `Server` 实例，并调用`listen(port, hostname, fn)`方法监听端口收到的请求。

#### 建立连接

在服务器启动后，在 `Server.listen()` 方法中会实例化 WebSocket Server，在@4.x 版本中默认使用 WebsocketServer.js 类型。webpack-dev-server 在以下情况下会推送信息，分别是：

1. 客户端连接，WebSocket Server 会推送初始化信息。例如是否开启 HMR 、overlay 配置信息、是否输出打包编译进度、输入日志级别等。
2. 编译完成，webpack-dev-server 监听 webpack 编译成功的钩子事件 done，在done事件的回调中推送信息。
3. 文件更新。

![image-20230821192856278](https://typora.gz4399.com/typora/20238/20230823_1692757330533478000.png)

#### 输出打包文件至内存

webpack-dev-server 默认将打包文件打在了内存流，提升访问速度，使用了 webpack-dev-middleware 中间件将打包文件内存化。

#### 监听更新

Webpack 提供了监听代码变化的能力，能够定时获取文件的最后编辑时间，当判定文件发生变化，并过了等待时间，就会进行重新编译，触发 `invalid` 事件。webpack-dev-server 监听 `invalid`事件来获知。

#### 热更

热更新是由 webpack 内置的一个插件 HotModuleReplacementPlugin 提供的。使用webpack-dev-server时，如果设置了`hot`属性，webpack-dev-server 会自动添加。

HotModuleReplacementPlugin 每次编译后会生成一个 hash，对应其编译文件。WebSocket 推送类型中具有一个 hash 类型对应这个 hash。

![image-20230822174447562](https://typora.gz4399.com/typora/20238/20230823_1692757316936842000.png)

WebSocket client 处理消息时，会存储 hash。然后在 `reloadApp()` 中根据当前 hash 执行 `webpackHotUpdate` 事件拉去最新代码。

