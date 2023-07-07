import Cookie from 'js-cookie';
import packageJson from '../../package.json';

const accessTokenKey = 'ywkf_jwt';

export default class jwt {
  static key = accessTokenKey
  // 设定访问令牌
  static setAccessToken(token) {
    Cookie.set(accessTokenKey, token ? `${token.token_type} ${token.access_token}` : '', {
      expires: new Date(token.expires_at * 1000),
      ...(packageJson.appConfig  && packageJson.appConfig.cookieConfig ? packageJson.appConfig.cookieConfig : {})
    });
  }

  // 获取访问令牌
  static getAccessToken() {
    return Cookie.get(accessTokenKey);
  }

  // 清空访问令牌
  static clearAccessToken() {
    Cookie.remove(accessTokenKey);
  }
}