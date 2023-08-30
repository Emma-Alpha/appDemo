import React, { ReactNode, version, useState, useLayoutEffect, useEffect } from 'react';
import { getRoutes, winPath } from './getRoutes';
import { RenderClientOpts, IRoutesById, IRouteComponents } from './types';
import ReactDOM from 'react-dom/client';
import { AppContext, useAppData } from './appContext';
import { isAbsolute } from 'path';
import { useRoutes, Router } from 'react-router-dom';
import { createClientRoutes } from './routes';
import { History } from 'history';

// 版本比较方法
function compareVersions(version1: string, version2: string) {
  const v1 = version1.split('.');
  const v2 = version2.split('.');

  for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
    const num1 = parseInt(v1[i] || '0');
    const num2 = parseInt(v2[i] || '0');

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }

  return 0;
}

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
    const onRouteChange = () => {};
    history.listen(onRouteChange);
    onRouteChange();
  }, [history, props.routes, props.clientRoutes]);

  return (
    <Router navigator={history} location={state.location} basename={props.basename}>
      {props.children}
    </Router>
  );
}

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

export function Routes() {
  const { clientRoutes } = useAppData();
  return useRoutes(clientRoutes as any);
}

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
