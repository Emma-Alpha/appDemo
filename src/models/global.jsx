import { create } from 'zustand';
import request from "Utils/request";

const useStore = create((set) => ({
  count: 1,
  fishies: null,
  loading: false,

  perarrLoading: false,
  perarrData: null,
  perarrFetch: async () => {
    set({ perarrLoading: true })
    try {
      const response = await request.get("/main/gateway/perarr");
      const { data, message, code } = response
      set({
        perarrData: data,
        perarrLoading: false,
      })
    } catch (error) {
      set({ perarrLoading: false })
    }
  },

  // profile 接口内容
  profileData: null,
  profileLoading: false,
  profileFetch:  async () => {
    set({
      profileLoading: true
    })
    try {
      const response = await request.get("/main/gateway/profile");
      const { data, message, code } = response
      set({
        profileData: data,
        profileLoading: false,
      })
    } catch (error) {
      set({
        profileLoading: false,
      })
    }
  },
  inc: () => set((state) => ({ count: state.count + 1 })),
  fetch: async (pond) => {
    set({
      loading: true
    })
    try {
      const response = await request.get("/main/gateway/profile");
      const { data, message, code } = response
      set({
        fishies: data,
        loading: false,
      })
    } catch (error) {
      set({
        loading: false,
      })
    }

  }
}))


export default useStore;