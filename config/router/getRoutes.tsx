import { getConfigRoutes } from './routesConfig';

export function winPath(path: string) {
  const isExtendedLengthPath = /^\\\\\?\\/.test(path);
  if (isExtendedLengthPath) {
    return path;
  }
  return path.replace(/\\/g, '/');
}

export function getRoutes(opts: { api: any }) {
  let routes: any = null;

  // 只支持读取config.tsx的方式
  routes = getConfigRoutes({
    routes: opts.api.config.routes,
    onResolveComponent(component) {
      return component;
    },
  });

  return routes;
}
