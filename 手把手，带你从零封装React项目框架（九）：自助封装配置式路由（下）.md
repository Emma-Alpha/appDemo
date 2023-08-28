### 前言

在上一章节，我们讲述到如何生成ID对应路由的基本信息。接下来我们将完成剩下的内容~



### 生成ID对应组件

修改 `renderClient` 函数里面的内容, 声明一个函数名为 `getRouteComponents` 函数（用于生成ID 对应 React 组件 的对应关系）

```tsx
// config/router/browser.tsx
export function renderClient(opts: RenderClientOpts) {
  // 唯一ID 对应基本信息
  const routes = getRoutes(opts.routes);

  // 唯一ID 对应组件
  const routeComponents = getRouteComponents({
    routes,
  });

  const rootElement = opts.rootElement || document.getElementById('root')!;

  const root = ReactDOM.createRoot(rootElement);

  root.render(...)
}
```



`getRouteComponents` 函数的内容如下：

```tsx
// config/router/browser.tsx
export function getRouteComponents(opts: { routes: RenderClientOpts['routes']; prefix?: string; defaultEmptyRouteComponent?: string }) {
  const imports: any = {};

  const result = compareVersions(version, '18.0.0');
  if (result !== 1) {
    console.error('当前框架React版本小于 18.0.0, 无法正常使用');
    return;
  }
  Object.keys(opts.routes).map((key) => {
    const route = opts.routes[key];
    if (!route.file) {
      // 如果route配置中没有file值，默认跳转搞到空路由，空路由可以自定义或者使用默认配置404
      const EmptyElement = opts?.defaultEmptyRouteComponent ?? '404';

      imports[key] = React.lazy(() => import(`@/${EmptyElement}`));
      return;
    }

    // e.g
    // component: () => <h1>foo</h1>
    // component: (() => () => <h1>foo</h1>)()
    if (String(route.file).startsWith('(')) {
      imports[key] = React.lazy(() => Promise.resolve(route.file).then((e: any) => (e?.default ? e : { default: e })));
      return;
    }
    const path = isAbsolute(route.file) || route.file.startsWith('@/') || route.file.startsWith('@src/') ? route.file : `${opts?.prefix ?? ''}${route.file}`;
    const winPathURL = winPath(path);
    imports[key] = React.lazy(() => import(`@/${winPathURL}`));
    return;
  });
  return imports;
}
```

代码分析：

基于框架性能上来考虑，组件的导入采用React Lazy  和 Webpack 的 动态导入语法import 来实现。

```tsx
  const result = compareVersions(version, '18.0.0');
  if (result !== 1) {
    console.error('当前框架React版本小于 18.0.0, 无法正常使用');
    return;
  }
```

而React Lazy 是 从React v18.0.0之后才支持的，因此低于18.0.0的版本是无法正常使用，因此不支持使用该Route。建议升级到18.0.0版本之后。

```tsx
    if (!route.file) {
      // 如果route配置中没有file值，默认跳转搞到空路由，空路由可以自定义或者使用默认配置404
      const EmptyElement = opts?.defaultEmptyRouteComponent ?? '404';

      imports[key] = React.lazy(() => import(`@/${EmptyElement}`));
      return;
    }
```

根据ID对应的基本信息的对象种的file值是否为空，来判断当前路由是否需要加载空组件，默认可以自行设置或者加载404。

```tsx
// e.g
// component: () => <h1>foo</h1>
// component: (() => () => <h1>foo</h1>)()
if (String(route.file).startsWith('(')) {
  imports[key] = React.lazy(() => Promise.resolve(route.file).then((e: any) => (e?.default ? e : { default: e })));
  return;
}
```

为了兼容，用户并非填写组件路径，而是匿名导入的方式，而做出的兼容方案。

```tsx
const path = isAbsolute(route.file) || route.file.startsWith('@/') || route.file.startsWith('@src/') ? route.file : `${opts?.prefix ?? ''}${route.file}`;
const winPathURL = winPath(path);
imports[key] = React.lazy(() => import(`@/${winPathURL}`));
return;
```

默认组件是从`@/`开始导入，即webpack中别名路径 `src/pages`开始

![image-20230828165744011](https://typora.gz4399.com/typora/20238/20230828_1693213065869133000.png)





### 生成React-Router中的对象

修改 `renderClient` 函数，新增 `getBrowser` 函数以及 `<Routes />` 组件。

```tsx
// config/router/browser.tsx
export function renderClient(opts: RenderClientOpts) {
  // 唯一ID 对应基本信息
  const routes = getRoutes(opts.routes);

  // 唯一ID 对应组件
  const routeComponents = getRouteComponents({
    routes,
  });

  const Browser = getBrowser(
    {
      routes,
      routeComponents: routeComponents,
      history: opts.history,
    },
    <Routes />,
  );

  const rootElement = opts.rootElement || document.getElementById('root')!;

  const root = ReactDOM.createRoot(rootElement);
  root.render(<Browser />);
}

```

`getBrowser` 函数具体内容：

```tsx
// config/router/browser.tsx

const getBrowser = (
  opts: { routes: IRoutesById; routeComponents: IRouteComponents; loadingComponent?: ReactNode; basename?: string; history: History; rootElement?: HTMLElement },
  routesElement: React.ReactElement,
) => {
  // 配置History基础basename的默认值是 /
  const basename = opts?.basename ?? '/';

  const clientRoutes = createClientRoutes({
    routesById: opts.routes,
    routeComponents: opts.routeComponents,
    loadingComponent: opts.loadingComponent,
  });

  let rootContainer = (
    <BrowserRoutes basename={basename} routes={opts.routes} clientRoutes={clientRoutes} history={opts.history}>
      {routesElement}
    </BrowserRoutes>
  );

  const Browser = () => {
    return (
      <AppContext.Provider
        value={{
          routes: opts.routes,
          routeComponents: opts.routeComponents,
          clientRoutes: clientRoutes,
          rootElement: opts.rootElement!,
          basename,
          history: opts.history,
        }}
      >
        {rootContainer}
      </AppContext.Provider>
    );
  };

  return Browser;
};
```

需要根据当前ID对应 基本信息以及ID对应组件来生成，Routes 数组信息。因此需要创建 `createClientRoutes`的函数。

```tsx
// config/router/routes.tsx

export function createClientRoutes(opts: { routesById: IRoutesById; routeComponents: Record<string, any>; parentId?: string; loadingComponent?: React.ReactNode }) {
  const { routesById, routeComponents, parentId } = opts;

  return Object.keys(routesById)
    .filter((id) => routesById[id].parentId === parentId)
    .map((id) => {
      const route = createClientRoute({
        route: routesById[id],
        routeComponent: routeComponents[id],
        loadingComponent: opts.loadingComponent,
      });

      const children = createClientRoutes({
        routesById,
        routeComponents,
        parentId: route.id,
        loadingComponent: opts.loadingComponent,
      });

      if (children.length > 0) {
        route.children = children;
        route.routes = children;
      }
      return route;
    });
}
```

需要递归生成具体`Routes` 的内容， 因此需要 `createClientRoute` 函数

```tsx
// config/router/routes.tsx

function createClientRoute(opts: { route: IRoute; routeComponent: any; loadingComponent?: React.ReactNode }): IClientRoute {
  const { route } = opts;
  const { redirect, ...props } = route;

  let loadingComponent: any = opts.loadingComponent;

  if (props?.loading) {
    if (String(props.loading).startsWith('(')) {
      loadingComponent = props.loading;
    }
  }

  return {
    element: redirect ? (
      <NavigateWithParams to={redirect} />
    ) : (
      <RouteContext.Provider
        value={{
          route: route,
        }}
      >
        <RemoteComponent loader={React.memo(opts.routeComponent)} loadingComponent={loadingComponent || DefaultLoading} />
      </RouteContext.Provider>
    ),
    ...props,
  };
}
```

判断当前ID 对应基本信息中是否存在loading,如果存在Loading属性则将Loading组件应用到 `Suspense 的 fallback`上。



如果ID 对应的 基本信息中存在 `redirect` 则默认走 `NavigateWithParams`  这个组件。

```tsx
// config/router/routes.tsx

import { useParams, generatePath, Navigate } from 'react-router-dom';

function NavigateWithParams(props: { to: string }) {
  const params = useParams();
  const propsWithParams = {
    ...props,
    to: generatePath(props.to, params),
  };
  return <Navigate replace={true} {...propsWithParams} />;
}
```

对 React-router-dom 的navigate 自助封装一次，主要是将当前URL 作为 占位符进行传递。[具体内容](https://reactrouter.com/en/main/utils/generate-path)

`RemoteComponent`  组件比较简单，用于封装`React.Suspense `

```tsx
// config/router/routes.tsx

function RemoteComponent(props: any) {
  const Component = props.loader;
  // 可以做成自动添加Loading组件

  return (
    <React.Suspense fallback={<props.loadingComponent />}>
      <Component />
    </React.Suspense>
  );
}
```

为什么需要对每个路由进行包裹一层上下文内容？主要是基于匹配某个具体路由时，能够正确拿到当前路由的基本信息来考虑的。

例如路由结构如下：

```tsx
const a = [
  {
    path: "/",
    component: "1",
    routes: [
      {
        path: "a",
        component:"a",
        props: {
          ...
        }
      }
    ]
  }
]
```

我在`a` 组件时能够通过 上下文直接获取 routes 中 `a`的所有Key。包括`props`等等。这样好处是可以使用高阶组件进行路由验权的时候，无需对routes和当前url 进行核对后才获取props中的perarr信息。

例如路径验权组件这样编写：

```tsx
import React, { useEffect } from 'react';
import { useRouteData } from '@config/router/routeContext';
import useGlobalStore from '@store/global';
import Garfish from 'garfish';
import styles from './ManualSlavePage.less';
import Loading from '@src/loading';

let app: any;

const ManualSlavePage = () => {
  const { route } = useRouteData();
  let domId = `manual_${route.microApp}`;
  let basename = `/${route.microApp}`;

  const { microActiveApps } = useGlobalStore();

  const asyncLoadApp = async ({ route }) => {
    app = await Garfish.loadApp(route.microApp, {
      cache: true,
      basename: basename,
      entry: route.entry,
      domGetter: `#${domId}`,
    });
    await app?.mount();
  };

  useEffect(() => {
    if (route.microApp) {
      asyncLoadApp({ route });
    }
    return () => {
      app.unmount();
    };
  }, []);

  let loading = microActiveApps.findIndex((o) => o.loading);
  console.log(microActiveApps);
  return (
    <>
      <div id={domId} className={`h-full ${styles['micro-container']}`} />
      {loading !== -1 ? <Loading name={microActiveApps[loading]?.props?.cname ?? ''} /> : undefined}
    </>
  );
};

export default ManualSlavePage;
```

因此，我们需要创建一个`React.createContext` 组件 名为 `RouteContext`

```tsx
// config/router/routeContext.tsx

import React from 'react';
import { IRoute } from './types';

interface IMicroAppRoute {
  microApp?: string | undefined;
  entry?: string | undefined;
}

export interface IRouteContextType {
  route: IRoute & IMicroAppRoute;
}
export const RouteContext = React.createContext<IRouteContextType | undefined>(undefined);

export function useRouteData(): IRouteContextType {
  return React.useContext(RouteContext)!;
}
```

`RouteContext` 是创建 上下文载体，`useRouteData` 则是获取当前`RouteContext`上下文的值。



### 创建挂载点的Routes

`clientRoutes`的具体逻辑大致已经内容清楚了。现在开始创建Router的根挂载点 `<BrowserRoutes />`。

```tsx
// config/router/browser.tsx

const getBrowser = (...) => {
  ...,
    let rootContainer = (
      <BrowserRoutes basename={basename} routes={opts.routes} clientRoutes={clientRoutes} history={opts.history}>
        {routesElement}
      </BrowserRoutes>
    );
  ...
}
```



```tsx
// config/router/browser.tsx

import { useRoutes, Router } from 'react-router-dom';
import { useLayoutEffect, useState } from "react";

/**
 * 这个组件的功能是 history 发生改变的时候重新触发渲染
 * @param props
 * @returns
 */
function BrowserRoutes(props: { routes: any; clientRoutes: any; history: History; basename: string; children: any }) {
  const { history } = props;
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });
  useLayoutEffect(() => history.listen(setState), [history]);
  useLayoutEffect(() => {
    const onRouteChange = (opts?: any) => {};
    history.listen(onRouteChange);
    onRouteChange({
      location: state.location,
      action: state.action,
      isFirst: true,
    });
  }, [history, props.routes, props.clientRoutes]);

  return (
    <Router navigator={history} location={state.location} basename={props.basename}>
      {props.children}
    </Router>
  );
}
```

创建一个全局的`AppContext`上下文，包裹`Router`根路由

```tsx
// config/router/appContext.ts

interface IAppContextType {
  routes: IRoutesById;
  routeComponents: IRouteComponents;
  clientRoutes: IClientRoute[];
  rootElement?: HTMLElement;
  basename?: string;
  history?: any;
}

export const AppContext = React.createContext<IAppContextType>(
  {} as IAppContextType,
);

export function useAppData() {
  return React.useContext(AppContext);
}

```

同样道理，创建挂载容器也会同时创建获取该容器的值方法`useAppData`。



### 生成Routes 数组

在`renderClient` 函数中，我们将`<Routes />`作为参数传递到 `getBrowser`里面，作为chidren运行。

`Routes`具体的逻辑如下：

通过根路由的上下文内容，作为 `react-router-dom `的 `useRoutes` 的参数

```tsx
// config/router/browser.tsx

export function Routes() {
  const { clientRoutes } = useAppData();
  return useRoutes(clientRoutes as any);
}
```



### 将Router 挂载到 React 上

```tsx
// config/router/browser.tsx

const rootElement = opts.rootElement || document.getElementById('root')!;

const root = ReactDOM.createRoot(rootElement);
root.render(<Browser />);
```

根据外部配置传递，需要挂载到哪个节点上，默认是`root` ID 上。