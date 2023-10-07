import { Request } from '@config/request';

const request = new Request({});

export function apiGetCopyright(params: any) {
  return request.get('/main/gateway/copyright', params);
}

export function apiGetCurrentUser(params: any) {
  return request.get('/main/gateway/profile', params);
}

export function apiGetNav(params: any) {
  return request.get('/main/gateway/perarr', params);
}

export function apiGetModule(params: any) {
  return request.get('/main/gateway/module', params);
}
