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
  parentId?: string;
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
  parentId?: string;
  memo: IMemo;
}) {
  // 自增加一
  const id = String(opts.memo.id++);
  // 解构 routes,component,wrapper 单独处理
  const { routes, component, wrappers, ...routeProps } = opts.route;
  // 声明局部变量 absPath
  let absPath = opts.route.path;
  // 如果 absPath 不为空且第一个字符串不为 /
  if (absPath?.charAt(0) !== '/') {
    // 计算出父节点的absPath, 如果没有parentId则设置成根路径/,否则将父节点的连续斜杠(/)替换成单个斜杠，并且在末尾加上一个斜杠。
    const parentAbsPath = opts.parentId
      ? opts.memo.ret[opts.parentId].absPath.replace(/\/+$/, '/') // to remove '/'s on the tail
      : '/';
    // 声明 endsWithStar 函数用于判断当前路径末尾是否是 * 结尾，如果是则将当前文件的绝对路径等于 parentAbsPath。否则将父节点的absPath 和 当前节点的absPath 的值进行拼接
    absPath = endsWithStar(parentAbsPath)
      ? parentAbsPath
      : ensureWithSlash(parentAbsPath, absPath!);
  }

  // 设置当前唯一ID的基本信息(PS: 透传的信息中存在path, file, parentId, id 将会被覆盖)
  opts.memo.ret[id] = {
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

/**
 * 判断当前
 * @param str 
 * @returns boolean 
 */
function endsWithStar(str: string) {
  return str.endsWith('*');
}

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
