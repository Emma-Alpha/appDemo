import { History } from 'history';

export interface RouteItem {
  path?: string;
  wrappers?: string[];
  component?: string | (() => React.JSX.Element);
  redirect?: string;
  routes?: RouteItem[];
  [any: string]: any;
}

export interface IRouteConventionExportProps {
  routeProps?: Record<string, any>;
}

export interface IRoute extends IRouteConventionExportProps {
  id: string;
  path?: string;
  index?: boolean;
  parentId?: string;
  redirect?: string;
  loading?: string | React.ReactNode
}

export interface IClientRoute extends IRoute {
  element: React.ReactNode;
  children?: IClientRoute[];
  routes?: IClientRoute[];
}

export interface IRoutesById {
  [id: string]: IRoute;
}

export interface IRouteComponents {
  [id: string]: any;
}

export interface RenderClientOpts {
  /**
   * react dom 渲染的的目标 dom
   * @doc 一般不需要改，微前端的时候会变化
   */
  rootElement?: HTMLElement;
  /**
   * 当前的路由配置
   */
  routes: RouteItem[];
  /**
   * 设置路由 base，部署项目到非根目录下时使用。
   */
  basename?: string;
  /**
   * react router 的 history，用于控制列表渲染
   * 有多种不同的类型，测试的时候建议用 内存路由，默认是 browserHistory
   */
  history: History;
  /**
   * loading 中展示的组件 dom （全局加载组件）。
   */
  loadingComponent?: () => React.ReactNode
}

export interface IMemo {
  id: number,
  ret: any;
}