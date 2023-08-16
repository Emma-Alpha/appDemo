import { RenderClientOpts, IMemo, RouteItem } from "./types";


export function getConfigRoutes(opts: { routes: RenderClientOpts['routes'] }) {
  const memo: IMemo = { ret: {}, id: 1 };
  transformRoutes({
    routes: opts.routes,
    parentId: undefined,
    memo,
  })
  return memo.ret;
}


function transformRoutes(opts: {
  routes: RenderClientOpts['routes'],
  parentId: undefined | string;
  memo: IMemo;
}) {
  opts.routes.forEach((route) => {
    transformRoute({
      route,
      parentId: opts.parentId,
      memo: opts.memo
    })
  })
}

function transformRoute(opts: {
  route: RouteItem,
  parentId: undefined | string;
  memo: IMemo;
}) {
  // 自增加一
  const id = String(opts.memo.id++);
  const { routes, component, wrappers, ...routeProps } = opts.route;

  let absPath = opts.route.path;
  if (absPath?.charAt(0) !== '/') {
    const parentAbsPath = opts.parentId
      ? opts.memo.ret[opts.parentId].absPath.replace(/\/+$/, '/') // to remove '/'s on the tail
      : '/';
    absPath = endsWithStar(parentAbsPath)
      ? parentAbsPath
      : ensureWithSlash(parentAbsPath, absPath!);
  }

  // 设置id 对应的内容
  opts.memo.ret[id] = {
    ...routeProps,
    path: opts.route.path,
    file: component,
    parentId: opts.parentId,
    id,
  };
  if (absPath) {
    opts.memo.ret[id].absPath = absPath;
  }

  if (wrappers?.length) {
    let parentId = opts.parentId;
    let path = opts.route.path;
    let layout = opts.route.layout;

    wrappers.forEach((wrapper: any) => {
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

  if (routes) {
    transformRoutes({
      routes: routes,
      parentId: id,
      memo: opts.memo,
    })
  }
  return { id };
}

function endsWithStar(str: string) {
  return str.endsWith('*');
}

function ensureWithSlash(left: string, right: string) {
  // right path maybe empty
  if (!right?.length || right === '/') {
    return left;
  }
  return `${left.replace(/\/+$/, '')}/${right.replace(/^\/+/, '')}`;
}
