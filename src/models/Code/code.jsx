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

  putCodeBinsert: async (params) => {
    const { data } = await apiPutCode(params);
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
  // categories: [],
  // getCategoriesLoading: false,
  // getCategoriesFetch: async (params) => {
  //   set({ getCategoriesLoading: true })
  //   try {
  //     const response = await request.get("/apm/manage/code/category/all", params);
  //     const { data, message, code } = response

  //     set({
  //       getCategoriesLoading: false,
  //       categories: data?.rows ?? [],
  //     })
  //   } catch (error) {
  //     set({ getCategoriesLoading: false })
  //   }
  // },
  // postCategoryLoading: false,
  // postCategory: async (params) => {
  //   set({ postCategoryLoading: true })
  //   try {
  //     const response = await request.post("/apm/manage/code/category", params);
  //     const { data, message, code } = response
  //     if (message === "添加成功") {
  //       const categories = get().categories
  //       const newCategories = categories.concat([data]);
  //       set({ categories: newCategories })
  //     } else if (message === "修改成功") {
  //       const updatedCategories = [...get().categories]
  //       updatedCategories.forEach((element, index, array) => {
  //         if (element.id === data?.id) {
  //           array[index] = payload.data;
  //         }
  //       });
  //       set({ categories: updatedCategories })
  //     }
  //     set({ postCategoryLoading: false })
  //   } catch (error) {
  //     set({ postCategoryLoading: false })
  //   }
  // },
  // putCategoryDelete: async (params) => {
  //   set({ getCategoriesLoading: true })
  //   try {
  //     const response = await request.put("/apm/manage/code/category", params);
  //     const { data, message, code } = response

  //     const categories = get().categories
  //     const filteredCategories = categories.filter(e => e.id !== data[0]);
  //     set({
  //       getCategoriesLoading: false,
  //       categories: filteredCategories,
  //     })
  //   } catch (error) {
  //     set({ getCategoriesLoading: false })
  //   }
  // },
  // putCategoryReorder: async (params) => {
  //   set({ getCategoriesLoading: true })
  //   try {
  //     const response = await request.put("/apm/manage/code/category", params);
  //     const { data, message, code } = response
  //     set({
  //       getCategoriesLoading: false,
  //       categories: data?.rows ?? [],
  //     })
  //   } catch (error) {
  //     console.log(error)
  //     set({ getCategoriesLoading: false })
  //   }
  // }
}))


export default useStore;