import { Request } from '@config/request';

const request = new Request({});

export function apiLogin(params: any) {
  return request.post('/main/gateway/login', params);
}

export function apiLogout(params: any) {
  return request.put('/main/gateway/logout', params);
}
