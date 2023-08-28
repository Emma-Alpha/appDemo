### 路由

因为在项目应用是单页应用，页面地址的跳转都是在浏览器端完成的，不会重新请求服务端获取 html, html 只在应用初始化时加载一次。所有页面由不同的组件构成，页面的切换其实就是不同组件的切换，只需要在配置中把不同的路由路径和对应的组件关联上。

### 配置路由

在 `routes.ts` 文件中导出路由信息的数组。

比如：

```tsx
// 应用路由
export const routes = [
  {
    path: '/auth',
    component: 'auth/layout.tsx',
  },
  {
    path: '/',
    component: 'layout.tsx',
  },
];
```

脚手架默认按页拆包，从而有更快的页面加载速度，由于加载过程是异步的，所以可以添加`loading.tsx` 来给项目添加加载样式，提升体验。

> #### 💡
>
> 可以在 Chrome Devtools > 网络 Tab 中将网络设置成低速，然后切换路由查看加载组件是否生效。

### path

- Type string

`path` 只支持两种占位符配置，第一种是动态参数 `:id` 的形式，第二种是 `*` 通配符，通配符只能出现路由字符串的最后。

✅ 以下是目前**支持**的路由路径配置形式：

```shell
/groups
/groups/admin
/users/:id
/users/:id/messages
/files/*
/files/:id/*
```

❌ 以下是目前**不支持**的路由路径配置形式：

```shell
/users/:id?
/tweets/:id(\d+)
/files/*/cat.jpg
/files-*
```

### component

- Type string

配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 `src/pages` 开始寻找。

### routes

配置子路由，通常在需要为多个路径添加 layout 组件时使用。

比如：

```tsx
export const routes = [
  {
    component: 'layout.tsx',
    routes: [
      {
        path: '/',
        component: 'page.tsx',
      },
      {
        path: 'unAuth',
        component: 'unAuth/page.tsx',
      },
      {
        path: 'text/:slug/setting',
        component: 'users/Login',
      },
      {
        path: '*',
        component: 'EmptyRoute',
      },
    ],
  },
];
```

在全局布局`src/pages/layout.tsx` 中，通过 `<Outlet />` 去渲染子路由：

```tsx
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ background: '#fff' }}>
      <Outlet />
    </div>
  );
};
export default Layout;
```

这样，访问 `/` 和 `unAuth` 就会带上 `src/pages/layout.tsx` 这个 layout 组件。

### wrappers

- Type: `string[]`

配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的工鞥呢。比如，可以用于路由级别的权限校验：

```tsx
export const routes = [
  { path: '/user', component: 'user', wrappers: ['wrappers/auth'] },
  { path: '/login', component: 'login' },
];
```

然后在 `src/pages/wrappers/auth`中,

```tsx
import { Navigate, Outlet } from 'react-router-dom';

export default (props) => {
  const { isLogin } = useAuth();
  if (isLogin) {
    return <Outlet />;
  } else {
    return <Navigate to='/login' />;
  }
};
```

这样，访问 `/user` ，就通过 `auth` 组件做权限校验，如果通过，渲染 `src/pages/user`， 否则跳转到`/login`。

> #### 🚨
>
> `wrappers` 中的每个组件会给当前的路由组件添加一层嵌套路由，如果希望路由结构不发生变化，推荐使用高阶组件。先在高阶组件中实现 wrapper 中的逻辑，然后使用该高阶组件装饰对应的路由组件。

举例：

```tsx
// src/components/RequireAuth
import { Navigate } from 'react-router-dom';

const RequireAuth = (Component: any) => {
  const { isLogin } = useAuth();
  if (isLogin) {
    return <Component />;
  } else {
    return <Navigate to='/login' />;
  }
};

// src/pages/user.tsx

const TheOldPage = () => {
  // ...
};

export default withAuth(TheOldPage);
```

### 自行封装 React-router

想要达到上面的配置，直接使用`react-router-dom`是没办法实现的。是需要二次封装才能达到这个简单易懂的路由配置数组。

路由配置倒是确定好了，但如何将 Router-router 的 React 元素生成 DOM 节点呢？因此也需要把 React render 整合到我们二次封装路由中。

```tsx
const context = {
  routes: routes, // 配置路由信息数组
  loadingComponent: () => <Loading name={'基座'} />, // 全局Loading状态组件
  rootElement: document.getElementById(AppName), // React元素挂载点
  basename: '/', // React-router URL
  history: history, // 全局History 对象
};
```

首先，我们先到`config`文件夹下创建`router`文件夹，然后创建`browser.tsx`文件。

声明一个 `renderClient` 函数

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';

export function renderClient(opts) {
  // 声明React 的挂载点。默认是opts中的rootElement 没有配置就默认配置到id = root节点上。
  const rootElement = opts.rootElement || document.getElementById('root')!;

  const root = ReactDOM.createRoot(rootElement);

  root.render(...)
}
```

在函数中，发现缺少有效的 React 元素进行渲染。因为 opts 中并不包含有效的 React 元素，因此需要将 routes 配置信息数组转换成 React 元素。

首先，将数组扁平化用两个不同对象来存储。分别对应的是 基本信息， React 元素。

1. routes 对象 ==> 唯一 ID 对应基本信息

对象数据结构如下：

```jsx
{
  1: {
    absPath: string,  // URL 绝对路径
    file: string,     // 文件路径
    id: string,       // 当前唯一ID
    parentID: string, // 父节点ID
    path: string,     // routes中填写的path
    ...{
      // 透传routes 除path,component 之外的所有元素。
    }
  }
}
```

2. routeComponents ==> 唯一 ID 对应组件

对象数据结构如下：

```jsx
{
  1: React.ReactDOM
}
```

#### 生成 唯一 ID 对应基本信息

1. 在 `routes` 文件夹上创建 `getRoutes.tsx` 文件

```tsx
// config/router/getRoutes.tsx

import { RenderClientOpts } from './types';
import { getConfigRoutes } from './routesConfig';

export function getRoutes(routes: RenderClientOpts['routes']) {
  let IRoutesById: any = {};

  IRoutesById = getConfigRoutes({ routes });

  return IRoutesById;
}
```

2. 在`routes` 文件夹上创建 `routesConfig` 文件

```tsx
// config/router/routesConfig.ts

import { RenderClientOpts, IMemo, RouteItem } from './types';

export function getConfigRoutes(opts: { routes: RenderClientOpts['routes'] }) {}
```

3. 在 `getConfigRoutes` 上声明 一个初始化对象。一个变量 ret 是 放到对象，一个是 id 初始化 ID。默认是 1，然后递增+1

```tsx
// config/router/routesConfig.ts
import { RenderClientOpts, IMemo, RouteItem } from './types';

export function getConfigRoutes(opts: { routes: RenderClientOpts['routes'] }) {
  const memo: IMemo = { ret: {}, id: 1 };
}
```

4. 初始化一个递归函数，用于处理 routes 的 Tree 数组变成 对象。

```tsx
// config/router/routesConfig.ts

function transformRoutes(opts: { routes: RenderClientOpts['routes']; parentId?: string; memo: IMemo }) {
  opts.routes.forEach((route) => {
    transformRoute({
      route,
      parentId: opts.parentId,
      memo: opts.memo,
    });
  });
}

function transformRoute(opts: { route: RouteItem; parentId?: string; memo: IMemo }) {}
```

5. transformRoute 函数里面主要做几件事情

- 唯一 ID 自增加一
- 生成完整的绝对路径。（基于父节点）
- 透传 routes 除 path,component 之外的所有元素
- 判断当前的 routes 是否拥有 wrapper 属性，如果有则需要包裹当前的 route
- 判断是否拥有 routes 属性，如果有则递归下去

具体逻辑

```tsx
// config/router/routesConfig.ts

function transformRoute(opts: { route: RouteItem; parentId?: string; memo: IMemo }) {
  // 自增加一
  const id = String(opts.memo.id++);
  // 解构 routes,component,wrapper 单独处理
  const { routes, component, wrapper, ...routeProps } = opts.route;

  // 声明局部变量 absPath
  let absPath = opts.route.path;

  // 如果 absPath 不为空且第一个字符串不为 /
  if (absPath?.charAt(0) !== '/') {
    // 计算出父节点的absPath, 如果没有parentId则设置成根路径/,否则将父节点的连续斜杠(/)替换成单个斜杠，并且在末尾加上一个斜杠。
    const parentAbsPath = opts.parentId
      ? opts.memo.ret[opts.parentId].absPath.replace(/\/+$/, '/') // to remove '/'s on the tail
      : '/';
    // 声明 endsWithStar 函数用于判断当前路径末尾是否是 * 结尾，如果是则将当前文件的绝对路径等于 parentAbsPath。否则将父节点的absPath 和 当前节点的absPath 的值进行拼接
    absPath = endsWithStar(parentAbsPath) ? parentAbsPath : ensureWithSlash(parentAbsPath, absPath!);
  }

  // 设置当前唯一ID的基本信息(PS: 透传的信息中存在path, file, parentId, id 将会被覆盖)
  ops.memo.ret[id] = {
    ...routeProps,
    path: opts.route.path,
    file: component,
    parentId: opts.parentId,
    id,
  };

  // 判断absPath是否存在，如果存在则自我覆盖
  if (absPath) {
    opts.memo.ret[id].absPath = absPath;
  }

  // 判断wrappers是否为空
  if (wrappers?.length) {
    let parentId = opts.parentId;
    let path = opts.route.path;
    let layout = opts.route.layout;

    wrappers.forEach((wrapper: any) => {
      // 注入isWrapper的基本信息， layout 默认false
      const { id } = transformRoute({
        route: {
          path,
          component: wrapper,
          isWrapper: true,
          ...(layout === false ? { layout: false } : {}),
        },
        parentId,
        memo: opts.memo,
      });
      parentId = id;
      path = endsWithStar(path!) ? '*' : '';
    });
    opts.memo.ret[id].parentId = parentId;
    opts.memo.ret[id].path = path;
    // wrapper 处理后 真实 path 为空, 存储原 path 为 originPath 方便 layout 渲染
    opts.memo.ret[id].originPath = opts.route.path;
  }

  // 如果有routes的值，则继续递归下去
  if (routes) {
    transformRoutes({
      routes: routes,
      parentId: id,
      memo: opts.memo,
    });
  }
  return { id };
}
```

声明一个函数 `endsWithStar` 用于判断 当前的路径是否是以\*结尾。

```tsx
/**
 * 判断当前
 * @param str
 * @returns boolean
 */
function endsWithStar(str: string) {
  return str.endsWith('*');
}
```

声明一个函数 `ensureWithSlash` 用于将两个路径字符串合并成一个，并且确保它们之间有一个斜杠分隔，。

```tsx
// config/router/routesConfig.ts

/**
 * 这个函数的作用是将两个路径字符串合并成一个，并确保它们之间有一个斜杠分隔。
 * 如果右侧路径为空或者为根路径（/），则直接返回左侧路径。
 * 否则，它会移除左侧路径末尾的连续斜杠，并在左右路径之间添加一个单独的斜杠。
 * 然后返回合并后的路径字符串。
 * 换句话说，这个函数可以帮助你安全地合并路径，并确保它们之间有正确的斜杠分隔。
 * @param left
 * @param right
 * @returns string | undefined
 */
function ensureWithSlash(left: string, right: string) {
  // right path maybe empty
  if (!right?.length || right === '/') {
    return left;
  }
  return `${left.replace(/\/+$/, '')}/${right.replace(/^\/+/, '')}`;
}
```

根据上述的流程，则已经完成 ID 对应 基本信息 的绑定。

下一节章节，我们将讲述剩下的内容~
