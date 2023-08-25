interface SiderRoutesItem {
  path: string,
  name: string,
  id: string,
  icon: any,
  perarr: string,
  children?: SiderRoutesItem[]
}

export interface SiderRoutesProps {
  name?: string,
  routes?: SiderRoutesItem[],
}

// 定义路由的数据结构
export interface RoutesTree {
  key?: string
  path?: string
  component: string | (() => React.JSX.Element);
  routes?: RoutesTree[]
  microApp?: string
  entry?: string
  props?: {
    cname?: string
    key?: string
    perarr?: string
    renderHeader?: boolean | Function   // 决定能否直接渲染到Header
    icon?: any  // 渲染Icon
    category?: string // 所属哪个分类
  }
}