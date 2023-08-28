### 前言

Webpack 分包策略（code splitting）是一种将代码拆分成较小的独立文件的方法，以便在需要时按需加载。这可以提高应用程序的性能。

#### 常用分包策略

1. 入口点（entry points）分包：通过配置多个入口点手动拆分代码。
2. 动态导入（Dynamic Imports）：使用 `import()` 语法动态加载模块。Webpack 会自动将动态导入的模块拆分为单独的文件。、
3. 使用 SplitChunks 插件：Webpack 4 引入了内置的 SplitChunksPlugin，用于自动识别共享模块并将它们拆分到单独的文件中。默认情况下，它会将所有从 `node_modules` 导入的模块拆分到一个名为 `vendors` 的文件中。

#### 警告

本项目是使用 garfish 框架的微前端应用，要求每个子应用的资源打包成单个bundle，若有部分依赖被分包会导致子应用无法正常加载。

#### 压缩代码

本项目主要使用 esbuild-loader 提供的插件压缩代码，压缩的文件类型有js，jsx，ts，tsx，css。

``` js
minimizer: [
  new EsbuildPlugin({
    target: 'es2015',
    css: true,
  }),
]
```