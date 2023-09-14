"use strict";
(window["garfish-demo"] = window["garfish-demo"] || []).push([["store_global_index_tsx"],{

/***/ "./config/jwt/index.ts":
/*!*****************************!*\
  !*** ./config/jwt/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ jwt; }
/* harmony export */ });
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const Cookie = __webpack_require__(/*! js-cookie */ "./node_modules/.pnpm/js-cookie@2.2.1/node_modules/js-cookie/src/js.cookie.js");
const accessTokenKey = {"WEBIDE_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/webide.vmoptions","PYCHARM_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/pycharm.vmoptions","NVM_CD_FLAGS":"-q","SHELL":"/bin/zsh","TERM":"xterm-256color","JETBRAINSCLIENT_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/jetbrainsclient.vmoptions","TMPDIR":"/var/folders/jk/ys2t7b4n0fn86hc044wmp9w80000gn/T/","GVM_ROOT":"/Users/liangpingbo/.gvm","TERM_SESSION_ID":"c7db472b-24c8-4613-ba57-d10e8483fbec","PNPM_HOME":"/Users/liangpingbo/Library/pnpm","ZSH":"/Users/liangpingbo/.oh-my-zsh","NVM_DIR":"/Users/liangpingbo/.nvm","USER":"liangpingbo","COMMAND_MODE":"unix2003","PHPSTORM_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/phpstorm.vmoptions","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.qZp6aPIsuM/Listeners","__CF_USER_TEXT_ENCODING":"0x1F5:0x19:0x34","GOLAND_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/goland.vmoptions","PAGER":"less","APPCODE_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/appcode.vmoptions","FIG_JETBRAINS_SHELL_INTEGRATION":"1","LSCOLORS":"Gxfxcxdxbxegedabagacad","PATH":"/Library/Frameworks/Python.framework/Versions/3.9/bin:/Users/liangpingbo/.meteor:/Users/liangpingbo/Library/pnpm:/Users/liangpingbo/.gvm/bin:/Users/liangpingbo/.nvm/versions/node/v18.14.0/bin:/Library/Frameworks/Python.framework/Versions/3.11/bin:/Library/Frameworks/Python.framework/Versions/3.9/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/VMware Fusion.app/Contents/Public:/usr/local/go/bin:/usr/local/share/dotnet:~/.dotnet/tools:/Library/Apple/usr/bin:/Library/Frameworks/Mono.framework/Versions/Current/Commands:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.bin:/Users/liangpingbo/Desktop/个人/前端/flutter/flutter/bin:/usr/local/mysql/bin","TERMINAL_EMULATOR":"JetBrains-JediTerm","__CFBundleIdentifier":"com.jetbrains.WebStorm","GVM_VERSION":"1.0.22","PWD":"/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo","IDEA_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/idea.vmoptions","CLION_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/clion.vmoptions","NODE_PATH":"/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/src/bin/node_modules:/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/src/node_modules:/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/node_modules:/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.pnpm/cross-env@7.0.3/node_modules:/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.pnpm/node_modules","XPC_FLAGS":"0x0","WEBSTORM_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/webstorm.vmoptions","DATASPELL_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/dataspell.vmoptions","XPC_SERVICE_NAME":"0","SHLVL":"1","HOME":"/Users/liangpingbo","LESS":"-R","LOGNAME":"liangpingbo","LC_CTYPE":"UTF-8","GATEWAY_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/gateway.vmoptions","NVM_BIN":"/Users/liangpingbo/.nvm/versions/node/v18.14.0/bin","DATAGRIP_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/datagrip.vmoptions","JETBRAINS_CLIENT_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/jetbrains_client.vmoptions","RIDER_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/rider.vmoptions","RUBYMINE_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/rubymine.vmoptions","GVM_PATH_BACKUP":"/Users/liangpingbo/.gvm/bin:/Users/liangpingbo/.nvm/versions/node/v18.14.0/bin:/Library/Frameworks/Python.framework/Versions/3.11/bin:/Library/Frameworks/Python.framework/Versions/3.9/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/VMware Fusion.app/Contents/Public:/usr/local/go/bin:/usr/local/share/dotnet:~/.dotnet/tools:/Library/Apple/usr/bin:/Library/Frameworks/Mono.framework/Versions/Current/Commands:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.bin:/Users/liangpingbo/Desktop/个人/前端/flutter/flutter/bin","NODE_ENV":"development","API_PREFIX":"/api","API_TIMEOUT":"6000","COOKIE_NAME":"ywkf_jwt","APP_HOST":"127.0.0.1","APP_PORT":"8888","APP_CNAME":"子应用demo","APP_NAME":"demo","APP_DOMAIN":"https://nbas.gz4399.com"}.COOKIE_NAME;
class jwt {
  // 设定访问令牌
  static setAccessToken(token) {
    Cookie.set(accessTokenKey, token ? `${token.token_type} ${token.access_token}` : "", {
      expires: new Date(token.expires_at * 1e3)
    });
  }
  // 获取访问令牌
  static getAccessToken(accessTokenKey2) {
    return Cookie.get(accessTokenKey2);
  }
  // 清空访问令牌
  static clearAccessToken(accessTokenKey2) {
    Cookie.remove(accessTokenKey2);
  }
}
__publicField(jwt, "key", accessTokenKey);


/***/ }),

/***/ "./config/request/index.ts":
/*!*********************************!*\
  !*** ./config/request/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Request: function() { return /* binding */ Request; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/.pnpm/axios@0.19.2/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/.pnpm/antd@5.8.0_moment@2.29.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/notification/index.js");
/* harmony import */ var _config_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/jwt */ "./config/jwt/index.ts");
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};



const baseURL = {"WEBIDE_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/webide.vmoptions","PYCHARM_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/pycharm.vmoptions","NVM_CD_FLAGS":"-q","SHELL":"/bin/zsh","TERM":"xterm-256color","JETBRAINSCLIENT_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/jetbrainsclient.vmoptions","TMPDIR":"/var/folders/jk/ys2t7b4n0fn86hc044wmp9w80000gn/T/","GVM_ROOT":"/Users/liangpingbo/.gvm","TERM_SESSION_ID":"c7db472b-24c8-4613-ba57-d10e8483fbec","PNPM_HOME":"/Users/liangpingbo/Library/pnpm","ZSH":"/Users/liangpingbo/.oh-my-zsh","NVM_DIR":"/Users/liangpingbo/.nvm","USER":"liangpingbo","COMMAND_MODE":"unix2003","PHPSTORM_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/phpstorm.vmoptions","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.qZp6aPIsuM/Listeners","__CF_USER_TEXT_ENCODING":"0x1F5:0x19:0x34","GOLAND_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/goland.vmoptions","PAGER":"less","APPCODE_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/appcode.vmoptions","FIG_JETBRAINS_SHELL_INTEGRATION":"1","LSCOLORS":"Gxfxcxdxbxegedabagacad","PATH":"/Library/Frameworks/Python.framework/Versions/3.9/bin:/Users/liangpingbo/.meteor:/Users/liangpingbo/Library/pnpm:/Users/liangpingbo/.gvm/bin:/Users/liangpingbo/.nvm/versions/node/v18.14.0/bin:/Library/Frameworks/Python.framework/Versions/3.11/bin:/Library/Frameworks/Python.framework/Versions/3.9/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/VMware Fusion.app/Contents/Public:/usr/local/go/bin:/usr/local/share/dotnet:~/.dotnet/tools:/Library/Apple/usr/bin:/Library/Frameworks/Mono.framework/Versions/Current/Commands:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.bin:/Users/liangpingbo/Desktop/个人/前端/flutter/flutter/bin:/usr/local/mysql/bin","TERMINAL_EMULATOR":"JetBrains-JediTerm","__CFBundleIdentifier":"com.jetbrains.WebStorm","GVM_VERSION":"1.0.22","PWD":"/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo","IDEA_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/idea.vmoptions","CLION_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/clion.vmoptions","NODE_PATH":"/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/src/bin/node_modules:/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/src/node_modules:/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/node_modules:/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.pnpm/cross-env@7.0.3/node_modules:/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.pnpm/node_modules","XPC_FLAGS":"0x0","WEBSTORM_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/webstorm.vmoptions","DATASPELL_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/dataspell.vmoptions","XPC_SERVICE_NAME":"0","SHLVL":"1","HOME":"/Users/liangpingbo","LESS":"-R","LOGNAME":"liangpingbo","LC_CTYPE":"UTF-8","GATEWAY_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/gateway.vmoptions","NVM_BIN":"/Users/liangpingbo/.nvm/versions/node/v18.14.0/bin","DATAGRIP_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/datagrip.vmoptions","JETBRAINS_CLIENT_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/jetbrains_client.vmoptions","RIDER_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/rider.vmoptions","RUBYMINE_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/rubymine.vmoptions","GVM_PATH_BACKUP":"/Users/liangpingbo/.gvm/bin:/Users/liangpingbo/.nvm/versions/node/v18.14.0/bin:/Library/Frameworks/Python.framework/Versions/3.11/bin:/Library/Frameworks/Python.framework/Versions/3.9/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/VMware Fusion.app/Contents/Public:/usr/local/go/bin:/usr/local/share/dotnet:~/.dotnet/tools:/Library/Apple/usr/bin:/Library/Frameworks/Mono.framework/Versions/Current/Commands:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.bin:/Users/liangpingbo/Desktop/个人/前端/flutter/flutter/bin","NODE_ENV":"development","API_PREFIX":"/api","API_TIMEOUT":"6000","COOKIE_NAME":"ywkf_jwt","APP_HOST":"127.0.0.1","APP_PORT":"8888","APP_CNAME":"子应用demo","APP_NAME":"demo","APP_DOMAIN":"https://nbas.gz4399.com"}.API_PREFIX;
const timeout = {"WEBIDE_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/webide.vmoptions","PYCHARM_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/pycharm.vmoptions","NVM_CD_FLAGS":"-q","SHELL":"/bin/zsh","TERM":"xterm-256color","JETBRAINSCLIENT_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/jetbrainsclient.vmoptions","TMPDIR":"/var/folders/jk/ys2t7b4n0fn86hc044wmp9w80000gn/T/","GVM_ROOT":"/Users/liangpingbo/.gvm","TERM_SESSION_ID":"c7db472b-24c8-4613-ba57-d10e8483fbec","PNPM_HOME":"/Users/liangpingbo/Library/pnpm","ZSH":"/Users/liangpingbo/.oh-my-zsh","NVM_DIR":"/Users/liangpingbo/.nvm","USER":"liangpingbo","COMMAND_MODE":"unix2003","PHPSTORM_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/phpstorm.vmoptions","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.qZp6aPIsuM/Listeners","__CF_USER_TEXT_ENCODING":"0x1F5:0x19:0x34","GOLAND_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/goland.vmoptions","PAGER":"less","APPCODE_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/appcode.vmoptions","FIG_JETBRAINS_SHELL_INTEGRATION":"1","LSCOLORS":"Gxfxcxdxbxegedabagacad","PATH":"/Library/Frameworks/Python.framework/Versions/3.9/bin:/Users/liangpingbo/.meteor:/Users/liangpingbo/Library/pnpm:/Users/liangpingbo/.gvm/bin:/Users/liangpingbo/.nvm/versions/node/v18.14.0/bin:/Library/Frameworks/Python.framework/Versions/3.11/bin:/Library/Frameworks/Python.framework/Versions/3.9/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/VMware Fusion.app/Contents/Public:/usr/local/go/bin:/usr/local/share/dotnet:~/.dotnet/tools:/Library/Apple/usr/bin:/Library/Frameworks/Mono.framework/Versions/Current/Commands:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.bin:/Users/liangpingbo/Desktop/个人/前端/flutter/flutter/bin:/usr/local/mysql/bin","TERMINAL_EMULATOR":"JetBrains-JediTerm","__CFBundleIdentifier":"com.jetbrains.WebStorm","GVM_VERSION":"1.0.22","PWD":"/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo","IDEA_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/idea.vmoptions","CLION_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/clion.vmoptions","NODE_PATH":"/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/src/bin/node_modules:/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/src/node_modules:/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/node_modules:/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.pnpm/cross-env@7.0.3/node_modules:/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.pnpm/node_modules","XPC_FLAGS":"0x0","WEBSTORM_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/webstorm.vmoptions","DATASPELL_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/dataspell.vmoptions","XPC_SERVICE_NAME":"0","SHLVL":"1","HOME":"/Users/liangpingbo","LESS":"-R","LOGNAME":"liangpingbo","LC_CTYPE":"UTF-8","GATEWAY_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/gateway.vmoptions","NVM_BIN":"/Users/liangpingbo/.nvm/versions/node/v18.14.0/bin","DATAGRIP_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/datagrip.vmoptions","JETBRAINS_CLIENT_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/jetbrains_client.vmoptions","RIDER_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/rider.vmoptions","RUBYMINE_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/rubymine.vmoptions","GVM_PATH_BACKUP":"/Users/liangpingbo/.gvm/bin:/Users/liangpingbo/.nvm/versions/node/v18.14.0/bin:/Library/Frameworks/Python.framework/Versions/3.11/bin:/Library/Frameworks/Python.framework/Versions/3.9/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/VMware Fusion.app/Contents/Public:/usr/local/go/bin:/usr/local/share/dotnet:~/.dotnet/tools:/Library/Apple/usr/bin:/Library/Frameworks/Mono.framework/Versions/Current/Commands:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.bin:/Users/liangpingbo/Desktop/个人/前端/flutter/flutter/bin","NODE_ENV":"development","API_PREFIX":"/api","API_TIMEOUT":"6000","COOKIE_NAME":"ywkf_jwt","APP_HOST":"127.0.0.1","APP_PORT":"8888","APP_CNAME":"子应用demo","APP_NAME":"demo","APP_DOMAIN":"https://nbas.gz4399.com"}.API_TIMEOUT;
class Request {
  constructor(config) {
    // axios 实例
    __publicField(this, "instance");
    // 基础配置，url和超时时间
    __publicField(this, "baseConfig", { baseURL, timeout: Number(timeout) });
    this.instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create(Object.assign(this.baseConfig, config));
    this.instance.interceptors.request.use(
      (config2) => {
        config2.headers = config2.headers || {};
        config2.headers.Authorization = _config_jwt__WEBPACK_IMPORTED_MODULE_1__["default"].getAccessToken({"WEBIDE_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/webide.vmoptions","PYCHARM_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/pycharm.vmoptions","NVM_CD_FLAGS":"-q","SHELL":"/bin/zsh","TERM":"xterm-256color","JETBRAINSCLIENT_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/jetbrainsclient.vmoptions","TMPDIR":"/var/folders/jk/ys2t7b4n0fn86hc044wmp9w80000gn/T/","GVM_ROOT":"/Users/liangpingbo/.gvm","TERM_SESSION_ID":"c7db472b-24c8-4613-ba57-d10e8483fbec","PNPM_HOME":"/Users/liangpingbo/Library/pnpm","ZSH":"/Users/liangpingbo/.oh-my-zsh","NVM_DIR":"/Users/liangpingbo/.nvm","USER":"liangpingbo","COMMAND_MODE":"unix2003","PHPSTORM_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/phpstorm.vmoptions","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.qZp6aPIsuM/Listeners","__CF_USER_TEXT_ENCODING":"0x1F5:0x19:0x34","GOLAND_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/goland.vmoptions","PAGER":"less","APPCODE_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/appcode.vmoptions","FIG_JETBRAINS_SHELL_INTEGRATION":"1","LSCOLORS":"Gxfxcxdxbxegedabagacad","PATH":"/Library/Frameworks/Python.framework/Versions/3.9/bin:/Users/liangpingbo/.meteor:/Users/liangpingbo/Library/pnpm:/Users/liangpingbo/.gvm/bin:/Users/liangpingbo/.nvm/versions/node/v18.14.0/bin:/Library/Frameworks/Python.framework/Versions/3.11/bin:/Library/Frameworks/Python.framework/Versions/3.9/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/VMware Fusion.app/Contents/Public:/usr/local/go/bin:/usr/local/share/dotnet:~/.dotnet/tools:/Library/Apple/usr/bin:/Library/Frameworks/Mono.framework/Versions/Current/Commands:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.bin:/Users/liangpingbo/Desktop/个人/前端/flutter/flutter/bin:/usr/local/mysql/bin","TERMINAL_EMULATOR":"JetBrains-JediTerm","__CFBundleIdentifier":"com.jetbrains.WebStorm","GVM_VERSION":"1.0.22","PWD":"/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo","IDEA_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/idea.vmoptions","CLION_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/clion.vmoptions","NODE_PATH":"/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/src/bin/node_modules:/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/src/node_modules:/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/node_modules:/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.pnpm/cross-env@7.0.3/node_modules:/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.pnpm/node_modules","XPC_FLAGS":"0x0","WEBSTORM_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/webstorm.vmoptions","DATASPELL_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/dataspell.vmoptions","XPC_SERVICE_NAME":"0","SHLVL":"1","HOME":"/Users/liangpingbo","LESS":"-R","LOGNAME":"liangpingbo","LC_CTYPE":"UTF-8","GATEWAY_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/gateway.vmoptions","NVM_BIN":"/Users/liangpingbo/.nvm/versions/node/v18.14.0/bin","DATAGRIP_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/datagrip.vmoptions","JETBRAINS_CLIENT_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/jetbrains_client.vmoptions","RIDER_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/rider.vmoptions","RUBYMINE_VM_OPTIONS":"/Users/liangpingbo/Desktop/ide_plugin/ja-netfilter-all/vmoptions/rubymine.vmoptions","GVM_PATH_BACKUP":"/Users/liangpingbo/.gvm/bin:/Users/liangpingbo/.nvm/versions/node/v18.14.0/bin:/Library/Frameworks/Python.framework/Versions/3.11/bin:/Library/Frameworks/Python.framework/Versions/3.9/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/VMware Fusion.app/Contents/Public:/usr/local/go/bin:/usr/local/share/dotnet:~/.dotnet/tools:/Library/Apple/usr/bin:/Library/Frameworks/Mono.framework/Versions/Current/Commands:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo/node_modules/.bin:/Users/liangpingbo/Desktop/个人/前端/flutter/flutter/bin","NODE_ENV":"development","API_PREFIX":"/api","API_TIMEOUT":"6000","COOKIE_NAME":"ywkf_jwt","APP_HOST":"127.0.0.1","APP_PORT":"8888","APP_CNAME":"子应用demo","APP_NAME":"demo","APP_DOMAIN":"https://nbas.gz4399.com"}.COOKIE_NAME) || "";
        return config2;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        const { data } = res;
        const { code, message } = data;
        if (code === 1) {
          antd__WEBPACK_IMPORTED_MODULE_2__["default"].error({
            message: message || "\u672A\u77E5\u9519\u8BEF"
          });
          return Promise.reject(data);
        }
        if (code === 999) {
          antd__WEBPACK_IMPORTED_MODULE_2__["default"].error({
            message: message || "\u767B\u5F55\u8FC7\u671F, \u8BF7\u91CD\u65B0\u767B\u5F55"
          });
          return Promise.reject(data);
        }
        if (code !== 0) {
          antd__WEBPACK_IMPORTED_MODULE_2__["default"].error({
            message: message || "\u672A\u5B9A\u4E49\u9519\u8BEF"
          });
          return Promise.reject(data);
        }
        if (code === 0 && !!message) {
          antd__WEBPACK_IMPORTED_MODULE_2__["default"].success({
            message
          });
        }
        return res.data;
      },
      (err) => {
        let message = "";
        switch (err.response.status) {
          case 400:
            message = "\u8BF7\u6C42\u9519\u8BEF(400)";
            break;
          case 401:
            message = "\u672A\u6388\u6743\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55(401)";
            break;
          case 403:
            message = "\u62D2\u7EDD\u8BBF\u95EE(403)";
            break;
          case 404:
            message = "\u8BF7\u6C42\u51FA\u9519(404)";
            break;
          case 408:
            message = "\u8BF7\u6C42\u8D85\u65F6(408)";
            break;
          case 500:
            message = "\u670D\u52A1\u5668\u9519\u8BEF(500)";
            break;
          case 501:
            message = "\u670D\u52A1\u672A\u5B9E\u73B0(501)";
            break;
          case 502:
            message = "\u7F51\u7EDC\u9519\u8BEF(502)";
            break;
          case 503:
            message = "\u670D\u52A1\u4E0D\u53EF\u7528(503)";
            break;
          case 504:
            message = "\u7F51\u7EDC\u8D85\u65F6(504)";
            break;
          case 505:
            message = "HTTP\u7248\u672C\u4E0D\u53D7\u652F\u6301(505)";
            break;
          default:
            message = `\u8FDE\u63A5\u51FA\u9519(${err.response.status})!`;
        }
        return Promise.reject(err.response);
      }
    );
  }
  // 定义请求方法
  request(config) {
    return this.instance.request(config);
  }
  get(url, config) {
    return this.instance.get(url, config);
  }
  post(url, data, config) {
    return this.instance.post(url, data, config);
  }
  put(url, data, config) {
    return this.instance.put(url, data, config);
  }
  delete(url, config) {
    return this.instance.delete(url, config);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new Request({}));


/***/ }),

/***/ "./store/global/index.tsx":
/*!********************************!*\
  !*** ./store/global/index.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand */ "./node_modules/.pnpm/zustand@4.4.0_@types+react@18.2.21_react@18.2.0/node_modules/zustand/esm/index.mjs");
/* harmony import */ var _indexApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexApi */ "./store/global/indexApi.tsx");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.default.js");

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};



const useGlobalStore = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)()((set, get) => ({
  year: {
    s: "0",
    e: "0"
  },
  currentUser: {},
  navCode: [],
  microActiveApps: [],
  siderRoutes: {},
  // 侧边栏路由配置
  getYearData: (params) => __async(void 0, null, function* () {
    const { data } = yield (0,_indexApi__WEBPACK_IMPORTED_MODULE_0__.apiGetCopyright)(params);
    set({ year: data.year });
  }),
  syncGetCurrentUser: (params) => {
    (0,_indexApi__WEBPACK_IMPORTED_MODULE_0__.apiGetCurrentUser)(params).then((res) => {
      const { data } = res;
      set({ currentUser: data == null ? void 0 : data.user });
    });
  },
  getCurrentUser: () => __async(void 0, null, function* () {
    const { data } = yield (0,_indexApi__WEBPACK_IMPORTED_MODULE_0__.apiGetCurrentUser)({});
    set({ currentUser: data == null ? void 0 : data.user });
    return { currentUser: data == null ? void 0 : data.user };
  }),
  syncGetNav: (params) => {
    (0,_indexApi__WEBPACK_IMPORTED_MODULE_0__.apiGetNav)(params).then((res) => {
      const { data } = res;
      set({ navCode: data });
    });
  },
  getNav: (params) => __async(void 0, null, function* () {
    const { data } = yield (0,_indexApi__WEBPACK_IMPORTED_MODULE_0__.apiGetNav)(params);
    set({ navCode: data });
    return { navCode: data };
  }),
  modules: [],
  syncGetModule: (params) => {
    (0,_indexApi__WEBPACK_IMPORTED_MODULE_0__.apiGetModule)(params).then((res) => {
      const { data } = res;
      set({ modules: data });
    });
  },
  // 获取各个模块的信息 [{name: "模块名字", path: "激活路径", "perarr": "权限位", id: "xx", defaultroute: "应用默认打开路由"}]
  getModule: (params) => __async(void 0, null, function* () {
    const { data } = yield (0,_indexApi__WEBPACK_IMPORTED_MODULE_0__.apiGetModule)(params);
    set({ modules: data });
    return { modules: data };
  }),
  getBasicInfo: (params) => __async(void 0, null, function* () {
    try {
      const getCurrentUser = get().getCurrentUser;
      const currentUserRes = yield getCurrentUser(params);
      const getNav = get().getNav;
      const navCodeRes = yield getNav(params);
      const getModule = get().getModule;
      const modulesRes = yield getModule(params);
      return __spreadValues(__spreadValues(__spreadValues({}, currentUserRes), navCodeRes), modulesRes);
    } catch (error) {
      console.log(error);
      return {
        currentUser: "",
        navCode: [],
        modules: []
      };
    }
  }),
  layout: {
    renderFooter: false,
    renderHeader: true,
    renderSider: true
  },
  setLayout: (params) => {
    const stateLayout = get().layout;
    set({ layout: __spreadValues(__spreadValues({}, stateLayout), params) });
  },
  setMicroActiveApps: (params) => {
    const { action, appInfo } = params;
    const stateMicroActiveApps = lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"].cloneDeep(get().microActiveApps);
    switch (action) {
      case "add":
        if (stateMicroActiveApps.find((o) => o.id === appInfo.id))
          return;
        stateMicroActiveApps.push(appInfo);
        set({ microActiveApps: stateMicroActiveApps });
        return;
      case "delete":
        const removeIndex = stateMicroActiveApps.findIndex((o) => o.id === appInfo.id);
        if (removeIndex === -1)
          return;
        stateMicroActiveApps.splice(removeIndex, 1);
        set({ microActiveApps: stateMicroActiveApps });
        return;
      case "update":
        const updateIndex = stateMicroActiveApps.findIndex((o) => o.id === appInfo.id);
        if (updateIndex === -1)
          return;
        stateMicroActiveApps[updateIndex] = appInfo;
        set({ microActiveApps: stateMicroActiveApps });
        return;
    }
  },
  setSiderRoutes: (params) => {
    const stateSiderRoutes = get().siderRoutes;
    set({ siderRoutes: __spreadValues(__spreadValues({}, stateSiderRoutes), params) });
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (useGlobalStore);


/***/ }),

/***/ "./store/global/indexApi.tsx":
/*!***********************************!*\
  !*** ./store/global/indexApi.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apiGetCopyright: function() { return /* binding */ apiGetCopyright; },
/* harmony export */   apiGetCurrentUser: function() { return /* binding */ apiGetCurrentUser; },
/* harmony export */   apiGetModule: function() { return /* binding */ apiGetModule; },
/* harmony export */   apiGetNav: function() { return /* binding */ apiGetNav; }
/* harmony export */ });
/* harmony import */ var _config_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/request */ "./config/request/index.ts");


const request = new _config_request__WEBPACK_IMPORTED_MODULE_0__.Request({});
function apiGetCopyright(params) {
  return request.get("/main/gateway/copyright", params);
}
function apiGetCurrentUser(params) {
  return request.get("/main/gateway/profile", params);
}
function apiGetNav(params) {
  return request.get("/main/gateway/perarr", params);
}
function apiGetModule(params) {
  return request.get("/main/gateway/module", params);
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVfZ2xvYmFsX2luZGV4X3RzeC4zODdmN2M5NmVlZjJmMmM2NTMxZi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTSxTQUFTLG1CQUFPLENBQUMsK0ZBQVc7QUFFbEMsTUFBTSxpQkFBaUIsbWtLQUFXLENBQUM7QUFJcEIsTUFBTSxJQUFJO0FBQUE7QUFBQSxFQUd2QixPQUFPLGVBQWUsT0FBb0U7QUFDeEYsV0FBTyxJQUFJLGdCQUFnQixRQUFRLEdBQUcsTUFBTSxVQUFVLElBQUksTUFBTSxZQUFZLEtBQUssSUFBSTtBQUFBLE1BQ25GLFNBQVMsSUFBSSxLQUFLLE1BQU0sYUFBYSxHQUFJO0FBQUEsSUFDM0MsQ0FBQztBQUFBLEVBQ0g7QUFBQTtBQUFBLEVBR0EsT0FBTyxlQUFlQSxpQkFBd0I7QUFDNUMsV0FBTyxPQUFPLElBQUlBLGVBQWM7QUFBQSxFQUNsQztBQUFBO0FBQUEsRUFHQSxPQUFPLGlCQUFpQkEsaUJBQXdCO0FBQzlDLFdBQU8sT0FBT0EsZUFBYztBQUFBLEVBQzlCO0FBQ0Y7QUFqQkUsY0FEbUIsS0FDWixPQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlc7QUFFVTtBQUNOO0FBUTlCLE1BQU0sVUFBVSxta0tBQVcsQ0FBQztBQUM1QixNQUFNLFVBQVUsbWtLQUFXLENBQUM7QUFJckIsTUFBTSxRQUFRO0FBQUEsRUFNbkIsWUFBWSxRQUE0QjtBQUp4QztBQUFBO0FBRUE7QUFBQSxzQ0FBaUMsRUFBRSxTQUFrQixTQUFTLE9BQU8sT0FBTyxFQUFFO0FBSTVFLFNBQUssV0FBVyxtREFBWSxDQUFDLE9BQU8sT0FBTyxLQUFLLFlBQVksTUFBTSxDQUFDO0FBRW5FLFNBQUssU0FBUyxhQUFhLFFBQVE7QUFBQSxNQUNqQyxDQUFDQyxZQUErQjtBQUU5QixRQUFBQSxRQUFPLFVBQVVBLFFBQU8sV0FBVyxDQUFDO0FBQ3BDLFFBQUFBLFFBQU8sUUFBUSxnQkFBZ0IsbURBQUcsQ0FBQyxlQUFlLG1rS0FBVyxD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SSx3QkFBd0IsTUFBTTtBQUNuRCIsInNvdXJjZXMiOlsid2VicGFjazovL+WtkOW6lOeUqGRlbW8tLy4vY29uZmlnL2p3dC9pbmRleC50cyIsIndlYnBhY2s6Ly/lrZDlupTnlKhkZW1vLS8uL2NvbmZpZy9yZXF1ZXN0L2luZGV4LnRzIiwid2VicGFjazovL+WtkOW6lOeUqGRlbW8tLy4vc3RvcmUvZ2xvYmFsL2luZGV4LnRzeCIsIndlYnBhY2s6Ly/lrZDlupTnlKhkZW1vLS8uL3N0b3JlL2dsb2JhbC9pbmRleEFwaS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ29va2llID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTtcblxuY29uc3QgYWNjZXNzVG9rZW5LZXkgPSBwcm9jZXNzLmVudi5DT09LSUVfTkFNRVxuXG4vLyBjb25zdCBhY2Nlc3NUb2tlbktleSA9ICd5d2tmX2p3dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGp3dCB7XG4gIHN0YXRpYyBrZXkgPSBhY2Nlc3NUb2tlbktleVxuICAvLyDorr7lrprorr/pl67ku6TniYxcbiAgc3RhdGljIHNldEFjY2Vzc1Rva2VuKHRva2VuOiB7IHRva2VuX3R5cGU6IGFueTsgYWNjZXNzX3Rva2VuOiBhbnk7IGV4cGlyZXNfYXQ6IG51bWJlcjsgfSkge1xuICAgIENvb2tpZS5zZXQoYWNjZXNzVG9rZW5LZXksIHRva2VuID8gYCR7dG9rZW4udG9rZW5fdHlwZX0gJHt0b2tlbi5hY2Nlc3NfdG9rZW59YCA6ICcnLCB7XG4gICAgICBleHBpcmVzOiBuZXcgRGF0ZSh0b2tlbi5leHBpcmVzX2F0ICogMTAwMClcbiAgICB9KTtcbiAgfVxuXG4gIC8vIOiOt+WPluiuv+mXruS7pOeJjFxuICBzdGF0aWMgZ2V0QWNjZXNzVG9rZW4oYWNjZXNzVG9rZW5LZXk6IHN0cmluZykge1xuICAgIHJldHVybiBDb29raWUuZ2V0KGFjY2Vzc1Rva2VuS2V5KTtcbiAgfVxuXG4gIC8vIOa4heepuuiuv+mXruS7pOeJjFxuICBzdGF0aWMgY2xlYXJBY2Nlc3NUb2tlbihhY2Nlc3NUb2tlbktleTogc3RyaW5nKSB7XG4gICAgQ29va2llLnJlbW92ZShhY2Nlc3NUb2tlbktleSk7XG4gIH1cbn0iLCIvLyBpbmRleC50c1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHR5cGUgeyBBeGlvc0luc3RhbmNlLCBBeGlvc1JlcXVlc3RDb25maWcsIEF4aW9zUmVzcG9uc2UgfSBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgand0IGZyb20gXCJAY29uZmlnL2p3dFwiO1xuXG50eXBlIFJlc3VsdDxUPiA9IHtcbiAgY29kZTogbnVtYmVyO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGRhdGE6IFQ7XG59O1xuXG5jb25zdCBiYXNlVVJMID0gcHJvY2Vzcy5lbnYuQVBJX1BSRUZJWFxuY29uc3QgdGltZW91dCA9IHByb2Nlc3MuZW52LkFQSV9USU1FT1VUXG5cblxuLy8g5a+85Ye6UmVxdWVzdOexu++8jOWPr+S7peeUqOadpeiHquWumuS5ieS8oOmAkumFjee9ruadpeWIm+W7uuWunuS+i1xuZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xuICAvLyBheGlvcyDlrp7kvotcbiAgaW5zdGFuY2U6IEF4aW9zSW5zdGFuY2U7XG4gIC8vIOWfuuehgOmFjee9ru+8jHVybOWSjOi2heaXtuaXtumXtFxuICBiYXNlQ29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcgPSB7IGJhc2VVUkw6IGJhc2VVUkwsIHRpbWVvdXQ6IE51bWJlcih0aW1lb3V0KSB9O1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnKSB7XG4gICAgLy8g5L2/55SoYXhpb3MuY3JlYXRl5Yib5bu6YXhpb3Plrp7kvotcbiAgICB0aGlzLmluc3RhbmNlID0gYXhpb3MuY3JlYXRlKE9iamVjdC5hc3NpZ24odGhpcy5iYXNlQ29uZmlnLCBjb25maWcpKTtcblxuICAgIHRoaXMuaW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxuICAgICAgKGNvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnKSA9PiB7XG4gICAgICAgIC8vIOS4gOiIrOS8muivt+axguaLpuaIqumHjOmdouWKoHRva2Vu77yM55So5LqO5ZCO56uv55qE6aqM6K+BXG4gICAgICAgIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG4gICAgICAgIGNvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBqd3QuZ2V0QWNjZXNzVG9rZW4ocHJvY2Vzcy5lbnYuQ09PS0lFX05BTUUhKSB8fCBcIlwiO1xuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgfSxcbiAgICAgIChlcnI6IGFueSkgPT4ge1xuICAgICAgICAvLyDor7fmsYLplJnor6/vvIzov5nph4zlj6/ku6XnlKjlhajlsYDmj5DnpLrmoYbov5vooYzmj5DnpLpcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHRoaXMuaW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcbiAgICAgIChyZXM6IEF4aW9zUmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8g55u05o6l6L+U5ZuecmVz77yM5b2T54S25L2g5Lmf5Y+v5Lul5Y+q6L+U5ZuecmVzLmRhdGFcbiAgICAgICAgLy8g57O757uf5aaC5p6c5pyJ6Ieq5a6a5LmJY29kZeS5n+WPr+S7peWcqOi/memHjOWkhOeQhlxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc1xuXG4gICAgICAgIGNvbnN0IHsgY29kZSwgbWVzc2FnZSB9ID0gZGF0YVxuXG4gICAgICAgIGlmIChjb2RlID09PSAxKSB7XG4gICAgICAgICAgbm90aWZpY2F0aW9uLmVycm9yKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgXCLmnKrnn6XplJnor69cIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29kZSA9PT0gOTk5KSB7XG4gICAgICAgICAgbm90aWZpY2F0aW9uLmVycm9yKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgXCLnmbvlvZXov4fmnJ8sIOivt+mHjeaWsOeZu+W9lVwiLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2RlICE9PSAwKSB7XG4gICAgICAgICAgbm90aWZpY2F0aW9uLmVycm9yKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgXCLmnKrlrprkuYnplJnor69cIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29kZSA9PT0gMCAmJiAhIW1lc3NhZ2UpIHtcbiAgICAgICAgICBub3RpZmljYXRpb24uc3VjY2Vzcyh7XG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuZGF0YTtcbiAgICAgIH0sXG4gICAgICAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgLy8g6L+Z6YeM55So5p2l5aSE55CGaHR0cOW4uOingemUmeivr++8jOi/m+ihjOWFqOWxgOaPkOekulxuICAgICAgICBsZXQgbWVzc2FnZSA9IFwiXCI7XG4gICAgICAgIHN3aXRjaCAoZXJyLnJlc3BvbnNlLnN0YXR1cykge1xuICAgICAgICAgIGNhc2UgNDAwOlxuICAgICAgICAgICAgbWVzc2FnZSA9IFwi6K+35rGC6ZSZ6K+vKDQwMClcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNDAxOlxuICAgICAgICAgICAgbWVzc2FnZSA9IFwi5pyq5o6I5p2D77yM6K+36YeN5paw55m75b2VKDQwMSlcIjtcbiAgICAgICAgICAgIC8vIOi/memHjOWPr+S7peWBmua4heepunN0b3JhZ2Xlubbot7PovazliLDnmbvlvZXpobXnmoTmk43kvZxcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNDAzOlxuICAgICAgICAgICAgbWVzc2FnZSA9IFwi5ouS57ud6K6/6ZeuKDQwMylcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNDA0OlxuICAgICAgICAgICAgbWVzc2FnZSA9IFwi6K+35rGC5Ye66ZSZKDQwNClcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNDA4OlxuICAgICAgICAgICAgbWVzc2FnZSA9IFwi6K+35rGC6LaF5pe2KDQwOClcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNTAwOlxuICAgICAgICAgICAgbWVzc2FnZSA9IFwi5pyN5Yqh5Zmo6ZSZ6K+vKDUwMClcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNTAxOlxuICAgICAgICAgICAgbWVzc2FnZSA9IFwi5pyN5Yqh5pyq5a6e546wKDUwMSlcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNTAyOlxuICAgICAgICAgICAgbWVzc2FnZSA9IFwi572R57uc6ZSZ6K+vKDUwMilcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNTAzOlxuICAgICAgICAgICAgbWVzc2FnZSA9IFwi5pyN5Yqh5LiN5Y+v55SoKDUwMylcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNTA0OlxuICAgICAgICAgICAgbWVzc2FnZSA9IFwi572R57uc6LaF5pe2KDUwNClcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNTA1OlxuICAgICAgICAgICAgbWVzc2FnZSA9IFwiSFRUUOeJiOacrOS4jeWPl+aUr+aMgSg1MDUpXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbWVzc2FnZSA9IGDov57mjqXlh7rplJkoJHtlcnIucmVzcG9uc2Uuc3RhdHVzfSkhYDtcbiAgICAgICAgfVxuICAgICAgICAvLyDov5nph4zplJnor6/mtojmga/lj6/ku6Xkvb/nlKjlhajlsYDlvLnmoYblsZXnpLrlh7rmnaVcbiAgICAgICAgLy8g5q+U5aaCZWxlbWVudCBwbHVzIOWPr+S7peS9v+eUqCBFbE1lc3NhZ2VcbiAgICAgICAgLy8gRWxNZXNzYWdlKHtcbiAgICAgICAgLy8gICBzaG93Q2xvc2U6IHRydWUsXG4gICAgICAgIC8vICAgbWVzc2FnZTogYCR7bWVzc2FnZX3vvIzor7fmo4Dmn6XnvZHnu5zmiJbogZTns7vnrqHnkIblkZjvvIFgLFxuICAgICAgICAvLyAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vIOi/memHjOaYr0F4aW9zRXJyb3LnsbvlnovvvIzmiYDku6XkuIDoiKzmiJHku6zlj6pyZWplY3TmiJHku6zpnIDopoHnmoTlk43lupTljbPlj69cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVyci5yZXNwb25zZSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIC8vIOWumuS5ieivt+axguaWueazlVxuICBwdWJsaWMgcmVxdWVzdChjb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZyk6IFByb21pc2U8QXhpb3NSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLnJlcXVlc3QoY29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQ8VCA9IGFueT4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgY29uZmlnPzogQXhpb3NSZXF1ZXN0Q29uZmlnXG4gICk6IFByb21pc2U8UmVzdWx0PFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZ2V0KHVybCwgY29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyBwb3N0PFQgPSBhbnk+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGRhdGE/OiBhbnksXG4gICAgY29uZmlnPzogQXhpb3NSZXF1ZXN0Q29uZmlnXG4gICk6IFByb21pc2U8UmVzdWx0PFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEsIGNvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgcHV0PFQgPSBhbnk+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGRhdGE/OiBhbnksXG4gICAgY29uZmlnPzogQXhpb3NSZXF1ZXN0Q29uZmlnXG4gICk6IFByb21pc2U8UmVzdWx0PFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucHV0KHVybCwgZGF0YSwgY29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGU8VCA9IGFueT4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgY29uZmlnPzogQXhpb3NSZXF1ZXN0Q29uZmlnXG4gICk6IFByb21pc2U8UmVzdWx0PFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZGVsZXRlKHVybCwgY29uZmlnKTtcbiAgfVxufVxuXG4vLyDpu5jorqTlr7zlh7pSZXF1ZXN05a6e5L6LXG5leHBvcnQgZGVmYXVsdCBuZXcgUmVxdWVzdCh7fSlcbiIsImltcG9ydCB7IGNyZWF0ZSB9IGZyb20gJ3p1c3RhbmQnO1xuaW1wb3J0IHsgYXBpR2V0TmF2LCBhcGlHZXRDb3B5cmlnaHQsIGFwaUdldEN1cnJlbnRVc2VyLCBhcGlHZXRNb2R1bGUgfSBmcm9tICcuL2luZGV4QXBpJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgeyBTaWRlclJvdXRlc1Byb3BzIH0gZnJvbSAnQHN0b3JlL3R5cGVzJztcblxuaW50ZXJmYWNlIFllYXJQcm9wcyB7XG4gIHM6IHN0cmluZztcbiAgZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgbW9kdWxlSXRlbVByb3BzIHtcbiAgZGVmYXVsdHJvdXRlPzogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHBhdGg6IHN0cmluZztcbiAgcGVyYXJyOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBjdXJyZW50VXNlclByb3BzIHtcbiAgYXBpcGFzc3dkPzogc3RyaW5nO1xuICBjbmFtZT86IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHN0eXBlPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQmVhclN0YXRlIHtcbiAgeWVhcjogWWVhclByb3BzO1xuICBnZXRZZWFyRGF0YTogKHBhcmFtczogYW55KSA9PiBQcm9taXNlPHZvaWQ+O1xuICBjdXJyZW50VXNlcjogY3VycmVudFVzZXJQcm9wcztcbiAgZ2V0Q3VycmVudFVzZXI6IChwYXJhbXM6IGFueSkgPT4gUHJvbWlzZTx7IGN1cnJlbnRVc2VyOiBjdXJyZW50VXNlclByb3BzIH0+O1xuICBuYXZDb2RlOiBzdHJpbmdbXTtcbiAgZ2V0TmF2OiAocGFyYW1zOiBhbnkpID0+IFByb21pc2U8eyBuYXZDb2RlOiBzdHJpbmdbXSB9PjtcbiAgbW9kdWxlczogbW9kdWxlSXRlbVByb3BzW107XG4gIGdldE1vZHVsZTogKHBhcmFtczogYW55KSA9PiBQcm9taXNlPHsgbW9kdWxlczogbW9kdWxlSXRlbVByb3BzW10gfT47XG4gIGdldEJhc2ljSW5mbzogKHBhcmFtczogYW55KSA9PiBQcm9taXNlPEJhc2ljSW5mb1Jlc3BvbnNlPjtcblxuICBsYXlvdXQ6IHtcbiAgICByZW5kZXJTaWRlcj86IGJvb2xlYW47XG4gICAgcmVuZGVySGVhZGVyPzogYm9vbGVhbjtcbiAgICByZW5kZXJGb290ZXI/OiBib29sZWFuO1xuICB9O1xuXG4gIHNldExheW91dDogKHBhcmFtczogQmVhclN0YXRlWydsYXlvdXQnXSkgPT4gdm9pZDtcblxuICBzeW5jR2V0Q3VycmVudFVzZXI6IChwYXJhbXM6IGFueSkgPT4gdm9pZDtcbiAgc3luY0dldE5hdjogKHBhcmFtczogYW55KSA9PiB2b2lkO1xuICBzeW5jR2V0TW9kdWxlOiAocGFyYW1zOiBhbnkpID0+IHZvaWQ7XG5cbiAgbWljcm9BY3RpdmVBcHBzOiBhbnlbXTtcbiAgc2V0TWljcm9BY3RpdmVBcHBzOiAocGFyYW1zOiBNaWNyb0FjdGl2ZUFwcHNQcm9wcykgPT4gdm9pZDtcbiAgc2lkZXJSb3V0ZXM6IFNpZGVyUm91dGVzUHJvcHM7XG4gIHNldFNpZGVyUm91dGVzOiAocGFyYW1zOiBTaWRlclJvdXRlc1Byb3BzKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgTWljcm9BY3RpdmVBcHBzUHJvcHMge1xuICBhY3Rpb246ICdhZGQnIHwgJ2RlbGV0ZScgfCAndXBkYXRlJztcbiAgYXBwSW5mbzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2ljSW5mb1Jlc3BvbnNlIHtcbiAgY3VycmVudFVzZXI6IE9iamVjdDtcbiAgbmF2Q29kZTogc3RyaW5nW107XG4gIG1vZHVsZXM6IG1vZHVsZUl0ZW1Qcm9wc1tdO1xufVxuXG5jb25zdCB1c2VHbG9iYWxTdG9yZSA9IGNyZWF0ZTxCZWFyU3RhdGU+KCkoKHNldCwgZ2V0KSA9PiAoe1xuICB5ZWFyOiB7XG4gICAgczogJzAnLFxuICAgIGU6ICcwJyxcbiAgfSxcbiAgY3VycmVudFVzZXI6IHt9LFxuICBuYXZDb2RlOiBbXSxcbiAgbWljcm9BY3RpdmVBcHBzOiBbXSxcbiAgc2lkZXJSb3V0ZXM6IHt9LCAvLyDkvqfovrnmoI/ot6/nlLHphY3nva5cbiAgZ2V0WWVhckRhdGE6IGFzeW5jIChwYXJhbXM6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpR2V0Q29weXJpZ2h0KHBhcmFtcyk7XG4gICAgc2V0KHsgeWVhcjogZGF0YS55ZWFyIH0pO1xuICB9LFxuICBzeW5jR2V0Q3VycmVudFVzZXI6IChwYXJhbXM6IGFueSkgPT4ge1xuICAgIGFwaUdldEN1cnJlbnRVc2VyKHBhcmFtcykudGhlbigocmVzKSA9PiB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHJlcztcbiAgICAgIHNldCh7IGN1cnJlbnRVc2VyOiBkYXRhPy51c2VyIH0pO1xuICAgIH0pO1xuICB9LFxuICBnZXRDdXJyZW50VXNlcjogYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpR2V0Q3VycmVudFVzZXIoe30pO1xuICAgIHNldCh7IGN1cnJlbnRVc2VyOiBkYXRhPy51c2VyIH0pO1xuICAgIHJldHVybiB7IGN1cnJlbnRVc2VyOiBkYXRhPy51c2VyIH07XG4gIH0sXG4gIHN5bmNHZXROYXY6IChwYXJhbXM6IGFueSkgPT4ge1xuICAgIGFwaUdldE5hdihwYXJhbXMpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXM7XG4gICAgICBzZXQoeyBuYXZDb2RlOiBkYXRhIH0pO1xuICAgIH0pO1xuICB9LFxuICBnZXROYXY6IGFzeW5jIChwYXJhbXM6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpR2V0TmF2KHBhcmFtcyk7XG4gICAgc2V0KHsgbmF2Q29kZTogZGF0YSB9KTtcbiAgICByZXR1cm4geyBuYXZDb2RlOiBkYXRhIH07XG4gIH0sXG4gIG1vZHVsZXM6IFtdLFxuICBzeW5jR2V0TW9kdWxlOiAocGFyYW1zOiBhbnkpID0+IHtcbiAgICBhcGlHZXRNb2R1bGUocGFyYW1zKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzO1xuICAgICAgc2V0KHsgbW9kdWxlczogZGF0YSB9KTtcbiAgICB9KTtcbiAgfSxcbiAgLy8g6I635Y+W5ZCE5Liq5qih5Z2X55qE5L+h5oGvIFt7bmFtZTogXCLmqKHlnZflkI3lrZdcIiwgcGF0aDogXCLmv4DmtLvot6/lvoRcIiwgXCJwZXJhcnJcIjogXCLmnYPpmZDkvY1cIiwgaWQ6IFwieHhcIiwgZGVmYXVsdHJvdXRlOiBcIuW6lOeUqOm7mOiupOaJk+W8gOi3r+eUsVwifV1cbiAgZ2V0TW9kdWxlOiBhc3luYyAocGFyYW1zOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaUdldE1vZHVsZShwYXJhbXMpO1xuICAgIHNldCh7IG1vZHVsZXM6IGRhdGEgfSk7XG4gICAgcmV0dXJuIHsgbW9kdWxlczogZGF0YSB9O1xuICB9LFxuICBnZXRCYXNpY0luZm86IGFzeW5jIChwYXJhbXM6IGFueSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBnZXRDdXJyZW50VXNlciA9IGdldCgpLmdldEN1cnJlbnRVc2VyO1xuICAgICAgY29uc3QgY3VycmVudFVzZXJSZXMgPSBhd2FpdCBnZXRDdXJyZW50VXNlcihwYXJhbXMpO1xuICAgICAgY29uc3QgZ2V0TmF2ID0gZ2V0KCkuZ2V0TmF2O1xuICAgICAgY29uc3QgbmF2Q29kZVJlcyA9IGF3YWl0IGdldE5hdihwYXJhbXMpO1xuICAgICAgY29uc3QgZ2V0TW9kdWxlID0gZ2V0KCkuZ2V0TW9kdWxlO1xuICAgICAgY29uc3QgbW9kdWxlc1JlcyA9IGF3YWl0IGdldE1vZHVsZShwYXJhbXMpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uY3VycmVudFVzZXJSZXMsXG4gICAgICAgIC4uLm5hdkNvZGVSZXMsXG4gICAgICAgIC4uLm1vZHVsZXNSZXMsXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRVc2VyOiAnJyxcbiAgICAgICAgbmF2Q29kZTogW10sXG4gICAgICAgIG1vZHVsZXM6IFtdLFxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIGxheW91dDoge1xuICAgIHJlbmRlckZvb3RlcjogZmFsc2UsXG4gICAgcmVuZGVySGVhZGVyOiB0cnVlLFxuICAgIHJlbmRlclNpZGVyOiB0cnVlLFxuICB9LFxuICBzZXRMYXlvdXQ6IChwYXJhbXM6IEJlYXJTdGF0ZVsnbGF5b3V0J10pID0+IHtcbiAgICBjb25zdCBzdGF0ZUxheW91dCA9IGdldCgpLmxheW91dDtcbiAgICBzZXQoeyBsYXlvdXQ6IHsgLi4uc3RhdGVMYXlvdXQsIC4uLnBhcmFtcyB9IH0pO1xuICB9LFxuICBzZXRNaWNyb0FjdGl2ZUFwcHM6IChwYXJhbXM6IE1pY3JvQWN0aXZlQXBwc1Byb3BzKSA9PiB7XG4gICAgY29uc3QgeyBhY3Rpb24sIGFwcEluZm8gfSA9IHBhcmFtcztcbiAgICBjb25zdCBzdGF0ZU1pY3JvQWN0aXZlQXBwcyA9IF8uY2xvbmVEZWVwKGdldCgpLm1pY3JvQWN0aXZlQXBwcyk7XG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2FkZCc6XG4gICAgICAgIC8vIOWFiOiHquihjOWIpOaWrSBzdGF0ZU1pY3JvQWN0aXZlQXBwcyDph4zpnaLmmK/lkKblrZjlnKjnm7jlkIznmoRpZO+8jOWmguaenOWtmOWcqOWImeS4jeS9nOS7u+S9leWkhOeQhlxuICAgICAgICBpZiAoc3RhdGVNaWNyb0FjdGl2ZUFwcHMuZmluZCgobykgPT4gby5pZCA9PT0gYXBwSW5mby5pZCkpIHJldHVybjtcbiAgICAgICAgc3RhdGVNaWNyb0FjdGl2ZUFwcHMucHVzaChhcHBJbmZvKTtcbiAgICAgICAgc2V0KHsgbWljcm9BY3RpdmVBcHBzOiBzdGF0ZU1pY3JvQWN0aXZlQXBwcyB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgLy8g5YWI6Ieq6KGM5Yik5patIOmcgOimgeWIoOmZpOeahOWvueixoeaYr+WQpuWtmOWcqOW9k+WJjeaVsOe7hOS4re+8jOWmguaenOWtmOWcqOWImei/m+ihjOWIoOmZpOaTjeS9nOOAglxuICAgICAgICBjb25zdCByZW1vdmVJbmRleCA9IHN0YXRlTWljcm9BY3RpdmVBcHBzLmZpbmRJbmRleCgobykgPT4gby5pZCA9PT0gYXBwSW5mby5pZCk7XG4gICAgICAgIGlmIChyZW1vdmVJbmRleCA9PT0gLTEpIHJldHVybjtcbiAgICAgICAgc3RhdGVNaWNyb0FjdGl2ZUFwcHMuc3BsaWNlKHJlbW92ZUluZGV4LCAxKTtcbiAgICAgICAgc2V0KHsgbWljcm9BY3RpdmVBcHBzOiBzdGF0ZU1pY3JvQWN0aXZlQXBwcyB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSAndXBkYXRlJzpcbiAgICAgICAgLy8g5YWI6Ieq6KGM5Yik5pat77yM6ZyA6KaB5L+u5pS555qE5a+56LGh5piv5ZCm5a2Y5Zyo5b2T5YmN55qE5pWw57uE5Lit77yM5aaC5p6c5a2Y5Zyo5YiZ6L+b6KGM5L+u5pS55pON5L2c44CCXG4gICAgICAgIGNvbnN0IHVwZGF0ZUluZGV4ID0gc3RhdGVNaWNyb0FjdGl2ZUFwcHMuZmluZEluZGV4KChvKSA9PiBvLmlkID09PSBhcHBJbmZvLmlkKTtcbiAgICAgICAgaWYgKHVwZGF0ZUluZGV4ID09PSAtMSkgcmV0dXJuO1xuICAgICAgICBzdGF0ZU1pY3JvQWN0aXZlQXBwc1t1cGRhdGVJbmRleF0gPSBhcHBJbmZvO1xuICAgICAgICBzZXQoeyBtaWNyb0FjdGl2ZUFwcHM6IHN0YXRlTWljcm9BY3RpdmVBcHBzIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9LFxuICBzZXRTaWRlclJvdXRlczogKHBhcmFtczogU2lkZXJSb3V0ZXNQcm9wcykgPT4ge1xuICAgIGNvbnN0IHN0YXRlU2lkZXJSb3V0ZXMgPSBnZXQoKS5zaWRlclJvdXRlcztcbiAgICBzZXQoeyBzaWRlclJvdXRlczogeyAuLi5zdGF0ZVNpZGVyUm91dGVzLCAuLi5wYXJhbXMgfSB9KTtcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlR2xvYmFsU3RvcmU7XG4iLCJpbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnQGNvbmZpZy9yZXF1ZXN0JztcblxuY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHt9KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwaUdldENvcHlyaWdodChwYXJhbXM6IGFueSkge1xuICByZXR1cm4gcmVxdWVzdC5nZXQoJy9tYWluL2dhdGV3YXkvY29weXJpZ2h0JywgcGFyYW1zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwaUdldEN1cnJlbnRVc2VyKHBhcmFtczogYW55KSB7XG4gIHJldHVybiByZXF1ZXN0LmdldCgnL21haW4vZ2F0ZXdheS9wcm9maWxlJywgcGFyYW1zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwaUdldE5hdihwYXJhbXM6IGFueSkge1xuICByZXR1cm4gcmVxdWVzdC5nZXQoJy9tYWluL2dhdGV3YXkvcGVyYXJyJywgcGFyYW1zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwaUdldE1vZHVsZShwYXJhbXM6IGFueSkge1xuICByZXR1cm4gcmVxdWVzdC5nZXQoJy9tYWluL2dhdGV3YXkvbW9kdWxlJywgcGFyYW1zKTtcbn1cbiJdLCJuYW1lcyI6WyJhY2Nlc3NUb2tlbktleSIsImNvbmZpZyJdLCJzb3VyY2VSb290IjoiIn0=