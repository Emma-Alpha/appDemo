import { create } from 'zustand';
import request from "Utils/request";


const useStore = create((set, get) => ({
  defaultProject: null,
  getDefaultProjectLoading: false,
  getDefaultProjectFetch: async () => {
    set({ getDefaultProjectLoading: true })
    try {
      const response = await request.get("v2/project/apm");
      const { data, message, code } = response
      const { rows } = data
      const projects = (rows ?? []).filter(e => e.checked)?.map(e => e.id);

      set({
        getDefaultProjectLoading: false,
        defaultProject: projects.length > 0 ? projects[0] : null,
      })
      return projects.length > 0 ? projects[0] : null
    } catch (error) {
      set({ getDefaultProjectLoading: false })
    }
  }
}))


export default useStore;