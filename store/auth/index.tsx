import { create } from "zustand";
const Cookie = require("js-cookie");
import jwt from "@config/jwt";
import {
  apiLogin,
  apiLogout
} from './indexApi';

interface BearState {
  showCaptcha: boolean,
  captchaR: string,
  loginStatus: boolean,
  login: (params: LoginProps) => Promise<{loginStatus: boolean}>,
  loginLoading: boolean,

  logout: () => Promise<void>,
}

interface LoginProps {
  payload: Object,
  redirect?: string,
}

const useStore = create<BearState>()((set) => ({
  showCaptcha: false,
  loginStatus: false,
  captchaR: (Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2))
    .slice(2, 18),
  loginLoading: false,
  login: async (params: LoginProps) => {
    set({ loginLoading: true })
    const { payload, redirect } = params;
    let defaultUrl = ""
    let client = Cookie.get("client");
    if (!client) {
      client = (Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2))
        .slice(2, 18);
      Cookie.set('client', client);
    }
    try {
      const { data } = await apiLogin({ ...payload, _xsrf: client })
      // const { data } = yield call(apiLogin, { ...payload, _xsrf: client });
      // yield put({ type: 'showCaptcha', payload: false });
      set({ showCaptcha: false });
      jwt.setAccessToken(data);
      if (data?.path != "") {
        defaultUrl = data?.path
      }
      if (redirect) {
        defaultUrl = redirect
      }
      set({ loginStatus: true, loginLoading: false, })
      return { loginStatus: true }
      // yield put({ type: "setLoginStatus", payload: true })
    } catch (error) {
      // yield put({ type: 'updateCaptcha' });
      set({
        captchaR: (Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2))
          .slice(2, 18)
      })

      // yield put({ type: 'global/showMsg', payload: error });
      if ((error as Error).message === '请输入验证码') {
        set({ showCaptcha: true })
        // yield put({ type: 'showCaptcha', payload: true });
      }
      set({ loginStatus: false, loginLoading: false })
      // yield put({ type: "setLoginStatus", payload: false })
      return { loginStatus: false }
    }
  },

  logout:async () => {
    await apiLogout({})
    Cookie.remove(jwt.key);
    Cookie.remove('_xsrf');
  }

}))


export default useStore;