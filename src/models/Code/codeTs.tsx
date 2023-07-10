import { create } from 'zustand';
const {
  apiGetCodeAll,
  apiPostCode,
  apiPutCode,
  apiGetCodeAttr,
} = require("./codeApi.jsx");


interface GetAllParams  {
  projectId: number
}

interface BearState {
  codes: any[],
  codeTotal: number,
  fields: any[],
  attrs: any[],
  codesLoading: boolean,
  attrLoading: boolean,

  getCodeAll: (params: GetAllParams) => void,
  getCodeAttr: (params: any) => void,
  postCodeFetch: (params: any) => void,
  putCodeBinsert: (params: any) => void,
  putCodeBedit: (params: any) => void,
  putCodeDelete: (params: any) => void,
}

const useStore = create<BearState>()((set) => ({
  codes: [],
  codeTotal: 0,
  fields: [],
  attrs: [],
  codesLoading: false,
  attrLoading: false,

  getCodeAll: async (params) => {
    set({ codesLoading: true })
    try {
      const { data } = await apiGetCodeAll(params)
      set({
        codes: data?.rows ?? [],
        codeTotal: data?.total ?? 0,
        codesLoading: false,
      })
    } catch (error) {
      set({ codesLoading: false })
    }
  },

  getCodeAttr: async (params) => {
    set({ attrLoading: true, })
    try {
      const { data } = await apiGetCodeAttr(params);
      set({
        fields: data.fields,
        attrs: data.attrs,
        attrLoading: false
      })
    } catch (error) {
      set({ attrLoading: false })
    }
  },

  postCodeFetch: async (params) => {
    try {
      await apiPostCode(params);
    } catch (error) {
      console.error(error)
    }
  },

  putCodeBinsert: async (params) => {
    await apiPutCode(params);
  },

  putCodeBedit: async (params) => {
    await apiPutCode(params);
  },

  putCodeDelete: async (params) => {
    set({ codesLoading: true })
    try {
      await apiPutCode(params)
      set({ codesLoading: false })
    } catch (error) {
      set({ codesLoading: false })
    }
  }
}))


export default useStore;