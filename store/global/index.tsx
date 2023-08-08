import { create } from "zustand";
import {
  apiGetNav,
  apiGetCopyright,
  apiGetCurrentUser,
  apiGetModule
} from "./indexApi";
import _ from "lodash-es";
import { SiderRoutesProps } from "@store/types"

interface YearProps {
  s: string,
  e: string,
}

interface moduleItemProps {
  defaultroute?: string,
  id: string,
  name: string,
  path: string,
  perarr: string,
}

interface currentUserProps {
  apipasswd?: string,
  cname?: string,
  email?: string,
  name?: string,
  stype?: string
}

interface BearState {
  year: YearProps,
  getYearData: (params: any) => Promise<void>,
  currentUser: currentUserProps,
  getCurrentUser: (params: any) => Promise<{ currentUser: currentUserProps }>,
  navCode: string[],
  getNav: (params: any) => Promise<{ navCode: string[] }>,
  modules: moduleItemProps[],
  getModule: (params: any) => Promise<{ modules: moduleItemProps[] }>,
  getBasicInfo: (params: any) => Promise<BasicInfoResponse>,

  layout: {
    renderSider?: boolean,
    renderHeader?: boolean,
    renderFooter?: boolean,
  },

  setLayout: (params: BearState["layout"]) => void,

  syncGetCurrentUser: (params: any) => void,
  syncGetNav: (params: any) => void,
  syncGetModule: (params: any) => void,

  microActiveApps: any[],
  setMicroActiveApps: (params: MicroActiveAppsProps) => void,
  siderRoutes: SiderRoutesProps,
  setSiderRoutes: (params: SiderRoutesProps) => void,
}

interface MicroActiveAppsProps {
  action: "add" | "delete" | "update",
  appInfo: any,
}

export interface BasicInfoResponse {
  currentUser: Object,
  navCode: string[],
  modules: moduleItemProps[]
}

const useGlobalStore = create<BearState>()((set, get) => ({
  year: {
    s: "0",
    e: "0",
  },
  currentUser: {},
  navCode: [],
  microActiveApps: [],
  siderRoutes: {}, // 侧边栏路由配置
  getYearData: async (params: any) => {
    const { data } = await apiGetCopyright(params);
    set({ year: data.year })
  },
  syncGetCurrentUser: (params: any) => {
    apiGetCurrentUser(params).then((res) => {
      const { data } = res
      set({ currentUser: data?.user })
    })
  },
  getCurrentUser: async (params: any) => {
    const { data } = await apiGetCurrentUser({});
    set({ currentUser: data?.user })
    return { currentUser: data?.user }
  },
  syncGetNav: (params: any) => {
    apiGetNav(params).then((res) => {
      const { data } = res
      set({ navCode: data })
    })
  },
  getNav: async (params: any) => {
    const { data } = await apiGetNav(params)
    set({ navCode: data })
    return { navCode: data }
  },
  modules: [],
  syncGetModule: (params: any) => {
    apiGetModule(params).then((res) => {
      const { data } = res
      set({ modules: data })
    })
  },
  // 获取各个模块的信息 [{name: "模块名字", path: "激活路径", "perarr": "权限位", id: "xx", defaultroute: "应用默认打开路由"}]
  getModule: async (params: any) => {
    const { data } = await apiGetModule(params)
    set({ modules: data })
    return { modules: data }
  },
  getBasicInfo: async (params: any) => {
    try {
      const getCurrentUser = get().getCurrentUser
      const currentUserRes = await getCurrentUser(params)
      const getNav = get().getNav
      const navCodeRes = await getNav(params)
      const getModule = get().getModule
      const modulesRes = await getModule(params)
      return {
        ...currentUserRes,
        ...navCodeRes,
        ...modulesRes
      }
    } catch (error: any) {
      console.log(error)
      return {
        currentUser: "",
        navCode: [],
        modules: [],
      }
    }

  },
  layout: {
    renderFooter: false,
    renderHeader: true,
    renderSider: true,
  },
  setLayout: (params: BearState["layout"]) => {
    const stateLayout = get().layout
    set({ layout: { ...stateLayout, ...params } })
  },
  setMicroActiveApps: (params: MicroActiveAppsProps) => {
    const { action, appInfo } = params
    const stateMicroActiveApps = _.cloneDeep(get().microActiveApps)
    switch (action) {
      case "add":
        // 先自行判断 stateMicroActiveApps 里面是否存在相同的id，如果存在则不作任何处理
        if (stateMicroActiveApps.find(o => o.id === appInfo.id)) return
        stateMicroActiveApps.push(appInfo)
        set({ microActiveApps: stateMicroActiveApps })
        return
      case "delete":
        // 先自行判断 需要删除的对象是否存在当前数组中，如果存在则进行删除操作。
        const removeIndex = stateMicroActiveApps.findIndex(o => o.id === appInfo.id)
        if (removeIndex === -1) return
        stateMicroActiveApps.splice(removeIndex, 1)
        set({ microActiveApps: stateMicroActiveApps })
        return
      case "update":
        // 先自行判断，需要修改的对象是否存在当前的数组中，如果存在则进行修改操作。
        const updateIndex = stateMicroActiveApps.findIndex(o => o.id === appInfo.id)
        if (updateIndex === -1) return
        stateMicroActiveApps[updateIndex] = appInfo
        set({ microActiveApps: stateMicroActiveApps })
        return
    }
  },
  setSiderRoutes: (params: SiderRoutesProps) => {
    const stateSiderRoutes = get().siderRoutes
    set({ siderRoutes: { ...stateSiderRoutes, ...params } })
  }
}))


export default useGlobalStore;

