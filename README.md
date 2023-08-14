## 前言

我是一名 React 开发工程师，市面上有很多工程化脚手架，但没有一个脚手架能够符合我们项目需求，所以就诞生了这篇文章，带各位一步步将基础服务以及工具封装到这里，方便以后更愉快的开发。

## 目录结构

## 一、快速上手

1. 在根目录上执行 `pnpm i` 执行装包
2. 安装完成后，执行 `pnpm start` 启动程序

## 二、配置路由

路由文件是`src/routes.ts`
在配置文件中通过`routes`进行配置，格式为路由信息的数组。
比如：

```javascript
export const routes = [
  { path: '/', component: 'index' },
  { path: '/user', component: 'user' },
];
```

### path

- Type: `string`

`path`只支持两种占位符配置，第一种是动态参数`:id`的形式，第二种是`*`通配符，通配符只能出现路由字符串的最后。

✅ 以下是目前支持的路由路径配置形式：

```TXT
/groups
/groups/admin
/users/:id
/users/:id/messages
/files/*
/files/:id/*
```

❌ 以下是目前不支持的路由路径配置形式：

```TXT
/users/:id?
/tweets/:id(\d+)
/files/*/cat.jpg
/files-*
```

### component

- Type:`string`
  配置 location 和 path 匹配后用于渲染的 React 组件路径。只能是相对路径，会从 src/pages 开始寻找。

### routes

配置子路由，通常在需要为多个路径添加 layout 组件时使用。

比如：

```jsx
export const routes = [
  {
    key: 'auth',
    path: '/auth',
    component: 'auth/layout.tsx',
    routes: [
      {
        path: '/auth',
        component: 'auth/page.tsx',
      },
    ],
  },
  {
    key: '/',
    path: '/',
    component: 'layout.tsx',
    routes: [
      {
        path: '/',
        component: 'page.tsx',
      },
      {
        path: '/unAuth',
        component: 'unAuth/page.tsx',
      },
      {
        path: '/list',
        component: 'List',
      },
    ],
  },
];
```

在全局布局`src/pages/layout.tsx`中，通过`<Outlet />`来渲染子路由：

```jsx
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return <Outlet />;
};
export default Layout;
```

这样，访问`/unAuth`和 `/list`就会带上这个`src/pages/layout.tsx`这个 layout 组件。

### redirect

- Type: `string`

配置路由跳转

比如：

```ts
export const routes = [
  {
    path: '/',
    redirect: '/list',
  },
  {
    path: '/list',
    component: 'users/Login',
  },
];
```

访问`/`会跳转到`/list`，并由`src/pages/users/Login.tsx`文件进行渲染。

### wrappers

- Type:`string[]`

配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合更多的功能。比如，可以用于路由级别的权限校验；

```ts
export const routes = [
  {
    path: "/",
    component: "user"
    wrappers: [
      'wrappers/auth',
    ]
  },
  {
    path: "/login",
    component: "login"
  },
]
```

然后在 `src/pages/wrappers/auth`中，

```tsx
export default (props: any) => {
  const { isLogin } = useAuth();
  if (isLogin) {
    return <Outlet />;
  } else {
    return <Navigate to='/login' />;
  }
};
```

这样，访问 `/user`，就通过 `auth` 组件做权限校验，如果通过，渲染 `src/pages/user`，否则跳转到 `/login`。

> 🚨 `wrappers` 中的每个组件会给当前的路由组件增加一层嵌套路由，如果你希望路由结构不发生变化，推荐使用高阶组件。先在高阶组件中实现 wrapper 中的逻辑，然后使用该高阶组件装饰对应的路由组件。

举例子：

```tsx
// src/pages/dts/index.tsx
import React from 'react';
import RequireAuth from '@src/components/RequireAuth/RequireAuth';
import styles from './index.less';
import ManualSlavePage from '@src/components/ManualSlave/ManualSlavePage';

const Index = (props: any) => {
  return (
    <div className={styles['micro__app']}>
      <ManualSlavePage />
    </div>
  );
};

export default RequireAuth(Index, { targetPerarr: '01' });
```

### 动态路由

路由配置如下：

```tsx
export default routes = [
  {
    path: 'text/:slug/setting',
    component: 'users/Login',
  },
];
```

### 404 路由

```tsx
export default routes = [
  { path: '/', component: 'index' },
  { path: '/users', component: 'users' },
  { path: '/*', component: 'EmptyRoute' },
];
```

这样，如果访问`/foo`, `/`和`/users`都不能匹配, 会 fallback 到 EmptyRoute(空路由)路由，通过`scr/pages/EmptyRoute`进行渲染。

> 404 路由可以自定修改以及配置

### 其余相关路由信息和 [React-router-v6](https://reactrouter.com/en/main) 保持一致

## 三、FQA

#### 1. 如何修改启动端口？

在 package.json 中找到`appConfig.port`默认是 5200 端口，可根据项目的需要进行改动，例如改成 8888；更改完成后记得保存且重新执行程序启动 `pnpm start`。

#### 2. 如何更改将 Localhost 更改成自己的 IP 地址呢？

在 package.json 中找到`appConfig.host`默认是 5200 端口，可根据项目的需要进行改动，例如改成 8888；更改完成后记得保存且重新执行程序启动 `pnpm start`。

#### 3. 如何修改传递给 main 应用的路由？

在`src/index.tsx`文件中找到

```javascript
window.Garfish.channel.emit('router', {
  name: 'demo',
  routes: routes,
});
```

修改 routes 的内容即可实现自定义传递给 main 的路由数据

#### 4. 在哪里修改 antd 的 prefixCls

一般来说都是在 layout 组件里面自行修改，但使用静态方法时，需格外在特定地方配置[ConfigProvider.config()](https://ant.design/components/config-provider-cn#configproviderconfig)

举个例子，现在实例页面是使用`src/pages/layout.tsx`作为布局组件，因此会在里面修改`prefixCls`

代码如下：

```tsx
<ConfigProvider
  prefixCls='rta'
  theme={{
    token: {
      fontFamily: 'FAE8F6F96C59ED1,Microsoft Yahei,Hiragino Sans GB,tahoma,arial,B8B F53',
      colorTextBase: 'rgba(0, 0, 0, 0.65)',
      colorTextSecondary: 'rgba(0, 0, 0, 0.45)',
      colorTextHeading: 'rgba(0, 0, 0, 0.85)',
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
    },
  }}
>
  <div className='flex flex-col h-full'>
    {layout.renderHeader ? <Header /> : undefined}
    <div className='flex flex-row h-full'>
      {layout.renderSider ? <Sider /> : undefined}
      <div className='module__app'>
        <Outlet />
      </div>
    </div>
    {layout.renderFooter ? <div>底部</div> : undefined}
  </div>
</ConfigProvider>
```

当然还有更骚的操作就是 prefixCls 的值是读取 package.json 的里面的`appConfig.name`的值, 这也是可行的，看个人需求来决定。

#### 5. 框架上集成 [tailwindcss](https://tailwindcss.com/) 吗？

是的, 目前框架上已经安装了`tailwindcss`且支持该语法，详细用法欢迎到 官网中学习使用 https://tailwindcss.com/。

#### 6. 框架上集成 [styled-components](https://styled-components.com/docs/basics#motivation)吗？

是的，目前框架上也集成了`styled-components`的用法，具体使用方法欢迎到官网中学习 https://styled-components.com/docs/basics#motivation 。

#### 7. 框架上自带的微前端是哪家的框架呢？

目前微前端是采用字节跳动开源的[Garfish](https://www.garfishjs.org/)来实现的。具体使用如下：

```tsx
if (window.__GARFISH__) {
  window.Garfish.channel.emit('router', {
    name: 'demo',
    routes: routes,
  });
}
```

#### 8. prettier 不生效的原因是？

第一步，打开 vscode 安装 Prettier
![Alt text](/doc/9ea30416-711a-4a3f-86ce-9dc6039ecdee.jpeg)
第二步，找到 vscode 的设置， 输入 use Editor Conf 找到下图的配置，将勾勾去掉
![Alt text](/doc/358b67c9-0793-4bfc-932d-682db246a8e3.jpeg)

![Alt text](/doc/dbbcf84a-015f-42c5-ac34-8c9ff25252bc.jpeg)
第三步，右键某一个文件，找到使用...格式化文档
![Alt text](/doc/be3b2e17-f33f-4470-b9f1-0650f5275d66.jpeg)
第四步，选择默认配置
![Alt text](/doc/825fd068-a8c5-4aec-b1ea-02a92dbf95fc.jpeg)
第五步， 选择则 Prettier - code formatter 作为默认值
![Alt text](/doc/b4670c51-2d98-4ff4-97c2-c2432b49f820.jpeg)

请一一对应上述步骤是否做好，如以上途径都无法解决，请联系梁平波~(目前只针对 Vscode)
