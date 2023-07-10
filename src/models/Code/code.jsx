import { create } from 'zustand';
import {
  apiGetCodeAll,
  apiPostCode,
  apiPutCode,
  apiGetCodeAttr,
} from './codeApi';


const useStore = create((set, get) => ({
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
      const { data } = await apiPostCode(params);
    } catch (error) {
      console.error(error)
    }
  },

  putCodeBinsert: async (params) => {
    const { data } = await apiPutCode(params);
  },

  putCodeBedit: async (params) => {
    await apiPutCode(params);
  },

  putCodeDelete: async (params) => {
    set({ codesLoading: true })
    try {
      const { data } = await apiPutCode(params)
      set({ codesLoading: false })
    } catch (error) {
      set({ codesLoading: false })
    }
  }
}))


export default useStore;