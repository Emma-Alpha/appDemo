import React, { lazy, Suspense, isValidElement, useLayoutEffect, version } from "react";
import {
  useParams,
  Navigate,
  useRoutes,
  Router,
} from "react-router-dom";
import _ from "lodash-es";

import opts from "../Config";
import { richHistory as history } from "../utils/history";
// import CustomRouter from "./CustomRouter";
import { getConfigRoutes } from "./routesConfig.ts";
import { isAbsolute, join } from 'path';
import { winPath } from "./utils/winPath.ts"


/**
 * 比较版本
 * @param {*} preVersion  当前版本号
 * @param {*} lastVersion 规定最小的版本号
 * @returns 
 */
const versionStringCompare = (preVersion = '', lastVersion = '') => {
  var sources = preVersion.split('.');
  var dests = lastVersion.split('.');
  var maxL = Math.max(sources.length, dests.length);
  var result = 0;
  for (let i = 0; i < maxL; i++) {
    let preValue = sources.length > i ? sources[i] : 0;
    let preNum = isNaN(Number(preValue)) ? preValue.charCodeAt() : Number(preValue);
    let lastValue = dests.length > i ? dests[i] : 0;
    let lastNum = isNaN(Number(lastValue)) ? lastValue.charCodeAt() : Number(lastValue);
    if (preNum < lastNum) {
      result = -1;
      break;
    } else if (preNum > lastNum) {
      result = 1;
      break;
    }
  }
  return result;
}

const getRouteComponents = (opts) => {
  const imports = Object.keys(opts.routes)
    .map((key) => {
      // 判断当前版本能否使用懒加载
      const useSuspense = versionStringCompare(version, "18.0.0") >= 0
      // const useSuspense = opts.api.appData.framework === 'react' ? true : false; // opts.api.appData.react.version.startsWith('18.');
      const route = opts.routes[key];
      if (!route.file) {
        console.error("配置错误，file字段不能为空")
        return
      }
      if (route.hasClientLoader) {
        route.file = join(
          opts.api.paths.absTmpPath,
          'pages',
          route.id.replace(/[\/\-]/g, '_') + '.js',
        );
      }
      // e.g.
      // component: () => <h1>foo</h1>
      // component: (() => () => <h1>foo</h1>)()
      if (route.file.startsWith('(')) {
        return useSuspense
          ? // Compatible with none default route exports
          // e.g. https://github.com/umijs/umi/blob/0d40a07bf28b0760096cbe2f22da4d639645b937/packages/plugins/src/qiankun/master.ts#L55
          {
            [key]: React.lazy(
              () => Promise.resolve(route.file).then(e => e?.default ? e : ({ default: e }))
            )
          } : {
            [key]: () => Promise.resolve(route.file)
          }
      }
      const path = route.file

      // const webpackChunkName = componentToChunkName(path, "/");
      // 测试环境还不支持 import ，所以用 require
      if (process.env.NODE_ENV === 'test') {
        return `'${key}': require('${winPath(path)}').default,`;
      }

      return useSuspense
        ? {
          [key]: React.lazy(() => import(`@/${path}`)),
        } : {
          [key]: () => import(`${winPath(path)}`)
        }
    })
  return imports
}

/**
 * 这个组件的功能是 history 发生改变的时候重新触发渲染
 * @param {*} props 
 * @returns
 */
const BrowserRoutes = (props) => {
  const { history } = props
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  })

  useLayoutEffect(() => history.listen(setState), [history]);
  useLayoutEffect(() => {
    function onRouteChange(opts) {
    }
    history.listen(onRouteChange);
    onRouteChange({ location: state.location, action: state.action });
  }, [history, props.routes, props.clientRoutes])


  return (
    <Router
      navigator={history}
      location={state.location}
      basename={props.basename}
    >
      {props.children}
    </Router>
  )
}

const getRoutes = (opts) => {
  let routes = getConfigRoutes(opts);
  const basename = opts.basename || '/';
  let routeComponentsList = getRouteComponents({
    routes: routes,
    prefix: ""
  })
  let routeComponents = {}

  routeComponentsList.forEach(o => {
    routeComponents = _.merge(routeComponents, o)
  })

  // 生成路由配置
  let res = {
    routesById: routes,
    routeComponents: routeComponents,
    // loadingComponent: () => <div>正在加载中..........</div>
  }

  // 生成路由组件
  const clientRoutes = createClientRoutes(res)


  let Element = () => useRoutes(clientRoutes)

  let rootContainer = (
    <BrowserRoutes
      basename={basename}
      pluginManager={opts.pluginManager}
      routes={opts.routes}
      clientRoutes={clientRoutes}
      history={history}
    >
      <Element />
    </BrowserRoutes>
  )

  return (
    <AppContext.Provider
      value={{
        routes: routes,
        routeComponents: routeComponents,
        clientRoutes,
        pluginManager: opts.pluginManager,
        rootElement: opts.rootElement,
        basename,
        history: history,
      }}
    >
      {rootContainer}
    </AppContext.Provider>
  )
}

const AppContext = React.createContext({})

// 生成路由组
const createClientRoutes = (options) => {
  const { routesById, parentId, routeComponents } = options;
  return Object.keys(routesById)
    .filter((id) => routesById[id].parentId === parentId)
    .map((id) => {
      const route = createClientRoute({
        route: routesById[id],
        routeComponent: routeComponents[id],
        loadingComponent: options.loadingComponent,
        reactRouter5Compat: options.reactRouter5Compat,
      });
      const children = createClientRoutes({
        routesById,
        routeComponents,
        parentId: route.id,
        loadingComponent: options.loadingComponent,
        reactRouter5Compat: options.reactRouter5Compat,
      });
      if (children.length > 0) {
        route.children = children;
        // TODO: remove me
        // compatible with @ant-design/pro-layout
        route.routes = children;
      }
      return route;
    });
}

function NavigateWithParams(props) {
  const params = useParams();
  const propsWithParams = {
    ...props,
    to: generatePath(props.to, params),
  };
  return <Navigate replace={true} {...propsWithParams} />;
}

const RouteContext = React.createContext(undefined)


const RemoteComponent = (props) => {
  const Component = props.loader;
  return (
    <Suspense fallback={<props.loadingComponent />}>
      <Component />
    </Suspense>
  );
}

// 生成单个路由
const createClientRoute = (options) => {
  const { route } = options;
  const { redirect, ...props } = route;
  const Remote = RemoteComponent
  return {
    element: redirect ? (
      <NavigateWithParams to={redirect} />
    ) : (
      <RouteContext.Provider
        value={{
          route: options.route,
        }}
      >
        <Remote
          loader={React.memo(options.routeComponent)}
          loadingComponent={options.loadingComponent || DefaultLoading}
          hasChildren={options.hasChildren}
        />
      </RouteContext.Provider>
    ),
    ...props,
  };
}

const DefaultLoading = () => {
  return <div />;
}





const renderClient = (props) => {
  return getRoutes({...props, ...opts})
}



export default renderClient;
