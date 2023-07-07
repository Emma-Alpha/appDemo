import request from 'Utils/request';

export function apiGetCodeAll(params) {
  return request.get('/apm/manage/code/all', params);
};

export function apiPostCode(params) {
  return request.post('/apm/manage/code', params);
};

export function apiPutCode(params) {
  return request.put('/apm/manage/code', params);
};

export function apiGetCodeAttr(params) {
  return request.get('/apm/manage/code/attr', params);
};