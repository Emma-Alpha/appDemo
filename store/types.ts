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