import axios from 'axios';
import { notification } from 'antd';
import qs from 'qs';
import jwt from './jwt';

const API_ROOT = window?.dynamicConfiguration?.API_ROOT ??'/api';

const service = axios.create();

const raiseErr = (errMsg, response) => {
  const error = new Error(errMsg);
  error.response = response;
  notification.error({
    message: errMsg,
  })
  throw error;
}

function checkStatus(response) {
  if (response.status < 200 || response.status >= 300) {
    raiseErr(response.statusText, response);
  }
  if (!response.data) {
    raiseErr('未知错误', response);
  }
  const code = response.data.code;
  const errMsg = response.data.message;
  if (code === 1) {
    raiseErr(errMsg || '未知错误', response);
  }
  if (code === 999) {
    raiseErr(errMsg || '登录过期, 请重新登录', response);
  }
  if (code !== 0) {
    raiseErr(errMsg || '未定义错误', response);
  }
  if (code === 0 && !!errMsg) {
    notification.success({
      message: errMsg,
    });
  }
  return response;
}

service.defaults.baseURL = API_ROOT;
service.defaults.withCredentials = false;
service.interceptors.request.use((config) => {
  const configs = config;
  configs.headers = config.headers || {};
  configs.headers.Authorization = jwt.getAccessToken("ywkf_jwt") || "";
  configs.headers.Authorization_Amc = jwt.getAccessToken("amc_jwt") || "";
  configs.headers["X-Auth-User"] = configs.headers?.["X-Auth-User"] ?? "1";
  configs.headers["X-Auth-User-Project"] = config.headers?.["X-Auth-User-Project"] || "test";
  return configs;
}, error => Promise.reject(error));

service.interceptors.response.use((response) => {
  return checkStatus(response);
}, (error) => Promise.reject(error));

function request(url, method, data) {
  if (method === 'post' || method === 'put') {
    return service[method](url, data).then((response) => response.data);
  }
  return service[method](url, data).then((response) => response.data);
}


export function paramsSerializer(params) {
  const result = {};
  Object.keys(params).forEach((p) => {
    const value = params[p];
    if (Array.isArray(value)) {
      result[p] = value;
    } else if (value === null || value === undefined) {
      result[p] = value;
    } else if (typeof value === 'object') {
      result[p] = JSON.stringify(value);
    } else {
      result[p] = value;
    }
  });
  return qs.stringify(result, { arrayFormat: 'repeat', skipNulls: true });
}
const requests = {
  get: async (url, data) => request(url, 'get', { params: data, paramsSerializer }),
  post: async (url, data) => request(url, 'post', data),
  put: async (url, data) => request(url, 'put', data),
};

export default requests;
