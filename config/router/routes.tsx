import React from 'react';
import { useParams, generatePath, Navigate } from 'react-router-dom';
import { IClientRoute, IRoute, IRoutesById } from './types';
import { RouteContext } from './routeContext';

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

function DefaultLoading() {
  return <div />;
}

function NavigateWithParams(props: { to: string }) {
  const params = useParams();
  const propsWithParams = {
    ...props,
    to: generatePath(props.to, params),
  };
  return <Navigate replace={true} {...propsWithParams} />;
}

function RemoteComponent(props: any) {
  const Component = props.loader;
  // 可以做成自动添加Loading组件

  return (
    <React.Suspense fallback={<props.loadingComponent />}>
      <Component />
    </React.Suspense>
  );
}
