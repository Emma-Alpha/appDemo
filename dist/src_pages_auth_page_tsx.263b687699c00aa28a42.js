"use strict";
(window["garfish-demo"] = window["garfish-demo"] || []).push([["src_pages_auth_page_tsx"],{

/***/ "./src/pages/auth/page.tsx":
/*!*********************************!*\
  !*** ./src/pages/auth/page.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/.pnpm/antd@5.8.0_moment@2.29.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/form/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/.pnpm/antd@5.8.0_moment@2.29.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ "./node_modules/.pnpm/antd@5.8.0_moment@2.29.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ "./node_modules/.pnpm/antd@5.8.0_moment@2.29.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/col/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ "./node_modules/.pnpm/antd@5.8.0_moment@2.29.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/checkbox/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd */ "./node_modules/.pnpm/antd@5.8.0_moment@2.29.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/button/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd */ "./node_modules/.pnpm/antd@5.8.0_moment@2.29.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/tabs/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/.pnpm/@ant-design+icons@5.2.2_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/UserOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/.pnpm/@ant-design+icons@5.2.2_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/LockOutlined.js");
/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ahooks */ "./node_modules/.pnpm/ahooks@3.7.8_react@18.2.0/node_modules/ahooks/es/useLocalStorageState/index.js");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/auth */ "./store/auth/index.tsx");
/* harmony import */ var _store_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/global */ "./store/global/index.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router@6.14.2_react@18.2.0/node_modules/react-router/dist/index.js");
/* harmony import */ var _layout_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.less */ "./src/pages/auth/layout.less");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! query-string */ "./node_modules/.pnpm/query-string@8.1.0/node_modules/query-string/index.js");

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));









const Cookie = __webpack_require__(/*! js-cookie */ "./node_modules/.pnpm/js-cookie@2.2.1/node_modules/js-cookie/src/js.cookie.js");
const LOCALSTORAGE_NAME = "loginParams";
const LOCALSTORAGE_REMEMBER = "remember_password";
const OMLogin = () => {
  const [form] = antd__WEBPACK_IMPORTED_MODULE_5__["default"].useForm();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
  const [remember, setRemember] = (0,ahooks__WEBPACK_IMPORTED_MODULE_7__["default"])(
    LOCALSTORAGE_REMEMBER,
    {
      defaultValue: true
    }
  );
  const [accountInfo, setAccountInfo] = (0,ahooks__WEBPACK_IMPORTED_MODULE_7__["default"])(
    LOCALSTORAGE_NAME,
    {
      defaultValue: void 0
    }
  );
  const {
    showCaptcha,
    captchaR,
    login,
    loginLoading
  } = (0,_store_auth__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    getBasicInfo
  } = (0,_store_global__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const onChangeRemember = (e) => {
    setRemember(e.target.checked);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (remember) {
      form.setFieldsValue(accountInfo);
    }
  }, []);
  const JumpRouteUrl = (value) => {
    const parsed = query_string__WEBPACK_IMPORTED_MODULE_4__["default"].parse(location.search);
    if (parsed == null ? void 0 : parsed.redirect) {
      navigate(parsed == null ? void 0 : parsed.redirect);
      return;
    } else {
      value.navCode.map((o) => {
        const findMicroApp = value.modules.find((m) => m.perarr === o);
        if (findMicroApp) {
          if (findMicroApp.defaultroute) {
            navigate(`/${findMicroApp.path}${findMicroApp.defaultroute}`);
          } else {
            navigate(`/${findMicroApp.path}`);
          }
        } else {
          return;
        }
      });
    }
  };
  const onFinish = () => {
    form.validateFields().then((values) => {
      login({ payload: __spreadProps(__spreadValues({}, values), { type: "OM" }) }).then((res) => {
        if (!res.loginStatus)
          return;
        if (remember) {
          setAccountInfo({ password: values.password, name: values.name });
        }
        getBasicInfo({}).then((res2) => {
          JumpRouteUrl(res2);
        });
      });
    });
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], { form, name: "OmLoginForm", className: _layout_less__WEBPACK_IMPORTED_MODULE_3__["default"]["login__form"] }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    antd__WEBPACK_IMPORTED_MODULE_5__["default"].Item,
    {
      name: "name",
      rules: [
        {
          required: true,
          message: "\u8BF7\u586B\u5199\u7528\u6237\u540D"
        }
      ]
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], { placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D", size: "large", prefix: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["default"], null) })
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    antd__WEBPACK_IMPORTED_MODULE_5__["default"].Item,
    {
      name: "password",
      rules: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u5BC6\u7801"
        }
      ]
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"].Password, { placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801", size: "large", prefix: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["default"], null) })
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"].Item, { style: { display: showCaptcha ? "block" : "none" } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_11__["default"], { gutter: 24 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_12__["default"], { xs: 10, md: 10 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"].Item, { noStyle: true, name: "verifycode", rules: [
    {
      required: !!showCaptcha,
      min: 4,
      max: 4,
      message: "\u8BF7\u586B\u5199\u9A8C\u8BC1\u7801"
    }
  ] }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], { size: "large", placeholder: "\u9A8C\u8BC1\u7801", onPressEnter: () => {
  } }))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_12__["default"], { xs: 14, md: 14 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { width: "130px", height: "32px", src: `/api/main/gateway/captcha?id=${Cookie.get("client")}&_=${captchaR}`, alt: "\u9A8C\u8BC1\u7801" })))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { marginBlockEnd: 24, display: "flex", justifyContent: "space-between" } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_13__["default"], { checked: remember, onChange: onChangeRemember }, "\u8BB0\u4F4F\u5BC6\u7801"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "http://u.4399om.com/main/?r=forgetPassword", target: "_blank" }, "\u5FD8\u8BB0\u5BC6\u7801")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_14__["default"], { type: "primary", loading: loginLoading, style: { width: "100%" }, onClick: onFinish }, "\u767B\u5F55"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: _layout_less__WEBPACK_IMPORTED_MODULE_3__["default"]["other__action"] }));
};
const AuthPage = () => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: _layout_less__WEBPACK_IMPORTED_MODULE_3__["default"]["title"] }, "\u6B22\u8FCE\u6765\u84DD\u4FE1\u7CFB\u7EDF"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    antd__WEBPACK_IMPORTED_MODULE_15__["default"],
    {
      className: _layout_less__WEBPACK_IMPORTED_MODULE_3__["default"]["accountTab"],
      items: [
        {
          key: "om",
          label: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: _layout_less__WEBPACK_IMPORTED_MODULE_3__["default"]["header__title"] }, "OM\u767B\u5F55"),
          children: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OMLogin, null)
        }
      ]
    }
  ));
};
/* harmony default export */ __webpack_exports__["default"] = (AuthPage);


/***/ }),

/***/ "./store/auth/index.tsx":
/*!******************************!*\
  !*** ./store/auth/index.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zustand */ "./node_modules/.pnpm/zustand@4.4.0_@types+react@18.2.21_react@18.2.0/node_modules/zustand/esm/index.mjs");
/* harmony import */ var _config_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/jwt */ "./config/jwt/index.ts");
/* harmony import */ var _indexApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexApi */ "./store/auth/indexApi.tsx");

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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

const Cookie = __webpack_require__(/*! js-cookie */ "./node_modules/.pnpm/js-cookie@2.2.1/node_modules/js-cookie/src/js.cookie.js");


const useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_2__.create)()((set) => ({
  showCaptcha: false,
  loginStatus: false,
  captchaR: (Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2)).slice(2, 18),
  loginLoading: false,
  login: (params) => __async(void 0, null, function* () {
    set({ loginLoading: true });
    const { payload, redirect } = params;
    let defaultUrl = "";
    let client = Cookie.get("client");
    if (!client) {
      client = (Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2)).slice(2, 18);
      Cookie.set("client", client);
    }
    try {
      const { data } = yield (0,_indexApi__WEBPACK_IMPORTED_MODULE_1__.apiLogin)(__spreadProps(__spreadValues({}, payload), { _xsrf: client }));
      set({ showCaptcha: false });
      _config_jwt__WEBPACK_IMPORTED_MODULE_0__["default"].setAccessToken(data);
      if ((data == null ? void 0 : data.path) != "") {
        defaultUrl = data == null ? void 0 : data.path;
      }
      if (redirect) {
        defaultUrl = redirect;
      }
      set({ loginStatus: true, loginLoading: false });
      return { loginStatus: true };
    } catch (error) {
      set({
        captchaR: (Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2)).slice(2, 18)
      });
      if (error.message === "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801") {
        set({ showCaptcha: true });
      }
      set({ loginStatus: false, loginLoading: false });
      return { loginStatus: false };
    }
  }),
  logout: () => __async(void 0, null, function* () {
    yield (0,_indexApi__WEBPACK_IMPORTED_MODULE_1__.apiLogout)({});
    Cookie.remove(_config_jwt__WEBPACK_IMPORTED_MODULE_0__["default"].key);
    Cookie.remove("_xsrf");
  })
}));
/* harmony default export */ __webpack_exports__["default"] = (useStore);


/***/ }),

/***/ "./store/auth/indexApi.tsx":
/*!*********************************!*\
  !*** ./store/auth/indexApi.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apiLogin: function() { return /* binding */ apiLogin; },
/* harmony export */   apiLogout: function() { return /* binding */ apiLogout; }
/* harmony export */ });
/* harmony import */ var _config_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/request */ "./config/request/index.ts");


const request = new _config_request__WEBPACK_IMPORTED_MODULE_0__.Request({});
function apiLogin(params) {
  return request.post("/main/gateway/login", params);
}
function apiLogout(params) {
  return request.put("/main/gateway/logout", params);
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX2F1dGhfcGFnZV90c3guMjYzYjY4NzY5OWMwMGFhMjhhNDIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7QUFDcUI7QUFFbEI7QUFDakI7QUFDUDtBQUM0QjtBQUN2QztBQUNPO0FBRUw7QUFDOUIsTUFBTSxTQUFTLG1CQUFPLENBQUMsK0ZBQVc7QUFTbEMsTUFBTSxvQkFBb0I7QUFDMUIsTUFBTSx3QkFBd0I7QUFFOUIsTUFBTSxVQUFVLE1BQU07QUFFcEIsUUFBTSxDQUFDLElBQUksSUFBSSw0Q0FBSSxDQUFDLFFBQVE7QUFDNUIsUUFBTSxXQUFXLDZEQUFXLENBQUM7QUFFN0IsUUFBTSxDQUFDLFVBQVUsV0FBVyxJQUFJLGtEQUFvQjtBQUFwQixJQUM5QjtBQUFBLElBQ0E7QUFBQSxNQUNFLGNBQWM7QUFBQSxJQUNoQjtBQUFBLEVBQ0Y7QUFDQSxRQUFNLENBQUMsYUFBYSxjQUFjLElBQUksa0RBQW9CO0FBQXBCLElBQ3BDO0FBQUEsSUFDQTtBQUFBLE1BQ0UsY0FBYztBQUFBLElBQ2hCO0FBQUEsRUFDRjtBQUVBLFFBQU07QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRixJQUFJLHVEQUFZLENBQUM7QUFFakIsUUFBTTtBQUFBLElBQ0o7QUFBQSxFQUNGLElBQUkseURBQWUsQ0FBQztBQUVwQixRQUFNLG1CQUFtQixDQUFDLE1BQTJCO0FBQ25ELGdCQUFZLEVBQUUsT0FBTyxPQUFPO0FBQUEsRUFDOUI7QUFFQSxrREFBUyxDQUFDLE1BQU07QUFDZCxRQUFJLFVBQVU7QUFDWixXQUFLLGVBQWUsV0FBVztBQUFBLElBQ2pDO0FBQUEsRUFDRixHQUFHLENBQUMsQ0FBQztBQUtMLFFBQU0sZUFBZSxDQUFDLFVBQTZCO0FBQ2pELFVBQU0sU0FBUyxvREFBRSxDQUFDLE1BQU0sU0FBUyxNQUFNO0FBQ3ZDLFFBQUksaUNBQVEsVUFB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QixVQUFNLG9EQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLFdBQU8sT0FBTyxtREFBRyxDQUFDLEdBQUc7QUFDckIsV0FBTyxPQUFPLE9BQU87QUFBQSxFQUN2QjtBQUVGLEVBQUU7QUFHRiwrREFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUV4QixNQUFNLFVBQVUsSUFBSSxvREFBTyxDQUFDLENBQUMsQ0FBQztBQUV2QixTQUFTLFNBQVMsUUFBYTtBQUNwQyxTQUFPLFFBQVEsS0FBSyx1QkFBdUIsTUFBTTtBQUNuRDtBQUVPLFNBQVMsVUFBVSxRQUFhO0FBQ3JDLFNBQU8sUUFBUSxJQUFJLHdCQUF3QixNQUFNO0FBQ25EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8v5a2Q5bqU55SoZGVtby0vLi9zcmMvcGFnZXMvYXV0aC9wYWdlLnRzeCIsIndlYnBhY2s6Ly/lrZDlupTnlKhkZW1vLS8uL3N0b3JlL2F1dGgvaW5kZXgudHN4Iiwid2VicGFjazovL+WtkOW6lOeUqGRlbW8tLy4vc3RvcmUvYXV0aC9pbmRleEFwaS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmQsIFRhYnMsIFNwaW4sIEZvcm0sIElucHV0LCBSb3csIENvbCwgQnV0dG9uLCBDaGVja2JveCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgdHlwZSB7IENoZWNrYm94Q2hhbmdlRXZlbnQgfSBmcm9tIFwiYW50ZC9lcy9jaGVja2JveC9DaGVja2JveFwiXG5pbXBvcnQgeyBVc2VyT3V0bGluZWQsIExvY2tPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IHsgdXNlTG9jYWxTdG9yYWdlU3RhdGUgfSBmcm9tIFwiYWhvb2tzXCI7XG5pbXBvcnQgdXNlQXV0aFN0b3JlIGZyb20gXCJAc3RvcmUvYXV0aFwiO1xuaW1wb3J0IHVzZXJHbG9iYWxTdG9yZSwgeyBCYXNpY0luZm9SZXNwb25zZSB9IGZyb20gXCJAc3RvcmUvZ2xvYmFsXCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbGF5b3V0Lmxlc3NcIjtcblxuaW1wb3J0IHFzIGZyb20gXCJxdWVyeS1zdHJpbmdcIjtcbmNvbnN0IENvb2tpZSA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7XG5cblxuXG5pbnRlcmZhY2UgQWNjb3VudEluZm9Qcm9wcyB7XG4gIHBhc3N3b3JkOiBzdHJpbmcsXG4gIG5hbWU6IHN0cmluZ1xufVxuXG5jb25zdCBMT0NBTFNUT1JBR0VfTkFNRSA9IFwibG9naW5QYXJhbXNcIlxuY29uc3QgTE9DQUxTVE9SQUdFX1JFTUVNQkVSID0gXCJyZW1lbWJlcl9wYXNzd29yZFwiXG5cbmNvbnN0IE9NTG9naW4gPSAoKSA9PiB7XG5cbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICBjb25zdCBbcmVtZW1iZXIsIHNldFJlbWVtYmVyXSA9IHVzZUxvY2FsU3RvcmFnZVN0YXRlPGJvb2xlYW4+KFxuICAgIExPQ0FMU1RPUkFHRV9SRU1FTUJFUixcbiAgICB7XG4gICAgICBkZWZhdWx0VmFsdWU6IHRydWVcbiAgICB9XG4gIClcbiAgY29uc3QgW2FjY291bnRJbmZvLCBzZXRBY2NvdW50SW5mb10gPSB1c2VMb2NhbFN0b3JhZ2VTdGF0ZTxBY2NvdW50SW5mb1Byb3BzIHwgdW5kZWZpbmVkPihcbiAgICBMT0NBTFNUT1JBR0VfTkFNRSxcbiAgICB7XG4gICAgICBkZWZhdWx0VmFsdWU6IHVuZGVmaW5lZFxuICAgIH1cbiAgKVxuXG4gIGNvbnN0IHtcbiAgICBzaG93Q2FwdGNoYSxcbiAgICBjYXB0Y2hhUixcbiAgICBsb2dpbixcbiAgICBsb2dpbkxvYWRpbmdcbiAgfSA9IHVzZUF1dGhTdG9yZSgpXG5cbiAgY29uc3Qge1xuICAgIGdldEJhc2ljSW5mbyxcbiAgfSA9IHVzZXJHbG9iYWxTdG9yZSgpXG5cbiAgY29uc3Qgb25DaGFuZ2VSZW1lbWJlciA9IChlOiBDaGVja2JveENoYW5nZUV2ZW50KSA9PiB7XG4gICAgc2V0UmVtZW1iZXIoZS50YXJnZXQuY2hlY2tlZClcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlbWVtYmVyKSB7XG4gICAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKGFjY291bnRJbmZvKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgLyoqXG4gICAqIOacieS4pOenjeaDheWGte+8jOS4gOenjeaYr1VSTOS4iuaQuuW4puS6hiByZWRpcmVjdCDph43lrprlkJHnmoRVUkzvvIzkuIDnp43mmK/moLnmja7nmbvlvZXlkI7nmoTmnYPpmZDkvY1cbiAgICovXG4gIGNvbnN0IEp1bXBSb3V0ZVVybCA9ICh2YWx1ZTogQmFzaWNJbmZvUmVzcG9uc2UpID0+IHtcbiAgICBjb25zdCBwYXJzZWQgPSBxcy5wYXJzZShsb2NhdGlvbi5zZWFyY2gpXG4gICAgaWYgKHBhcnNlZD8ucmVkaXJlY3QpIHtcbiAgICAgIG5hdmlnYXRlKChwYXJzZWQ/LnJlZGlyZWN0KSBhcyBzdHJpbmcpXG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUubmF2Q29kZS5tYXAobyA9PiB7XG4gICAgICAgIGNvbnN0IGZpbmRNaWNyb0FwcCA9IHZhbHVlLm1vZHVsZXMuZmluZChtID0+IG0ucGVyYXJyID09PSBvKVxuICAgICAgICBpZiAoZmluZE1pY3JvQXBwKSB7XG4gICAgICAgICAgaWYgKGZpbmRNaWNyb0FwcC5kZWZhdWx0cm91dGUpIHtcbiAgICAgICAgICAgIG5hdmlnYXRlKGAvJHtmaW5kTWljcm9BcHAucGF0aH0ke2ZpbmRNaWNyb0FwcC5kZWZhdWx0cm91dGV9YClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmF2aWdhdGUoYC8ke2ZpbmRNaWNyb0FwcC5wYXRofWApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9uRmluaXNoID0gKCkgPT4ge1xuICAgIGZvcm0udmFsaWRhdGVGaWVsZHMoKS50aGVuKCh2YWx1ZXMpID0+IHtcbiAgICAgIGxvZ2luKHsgcGF5bG9hZDogeyAuLi52YWx1ZXMsIHR5cGU6IFwiT01cIiB9LCB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgaWYgKCFyZXMubG9naW5TdGF0dXMpIHJldHVyblxuICAgICAgICBpZiAocmVtZW1iZXIpIHtcbiAgICAgICAgICBzZXRBY2NvdW50SW5mbyh7IHBhc3N3b3JkOiB2YWx1ZXMucGFzc3dvcmQsIG5hbWU6IHZhbHVlcy5uYW1lIH0pXG4gICAgICAgIH1cbiAgICAgICAgZ2V0QmFzaWNJbmZvKHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBKdW1wUm91dGVVcmwocmVzKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBmb3JtPXtmb3JtfSBuYW1lPXtcIk9tTG9naW5Gb3JtXCJ9IGNsYXNzTmFtZT17c3R5bGVzW1wibG9naW5fX2Zvcm1cIl19PlxuICAgICAgPEZvcm0uSXRlbVxuICAgICAgICBuYW1lPXtcIm5hbWVcIn1cbiAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwi6K+35aGr5YaZ55So5oi35ZCNXCJcbiAgICAgICAgICB9XG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeeUqOaIt+WQjVwiIHNpemU9XCJsYXJnZVwiIHByZWZpeD17PFVzZXJPdXRsaW5lZCAvPn0gLz5cbiAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgPEZvcm0uSXRlbVxuICAgICAgICBuYW1lPXtcInBhc3N3b3JkXCJ9XG4gICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIuivt+i+k+WFpeWvhueggVwiXG4gICAgICAgICAgfVxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICA8SW5wdXQuUGFzc3dvcmQgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXlr4bnoIFcIiBzaXplPVwibGFyZ2VcIiBwcmVmaXg9ezxMb2NrT3V0bGluZWQgLz59IC8+XG4gICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgIDxGb3JtLkl0ZW0gc3R5bGU9e3sgZGlzcGxheTogc2hvd0NhcHRjaGEgPyAnYmxvY2snIDogJ25vbmUnIH19ID5cbiAgICAgICAgPFJvdyBndXR0ZXI9ezI0fT5cbiAgICAgICAgICA8Q29sIHhzPXsxMH0gbWQ9ezEwfT5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW0gbm9TdHlsZSBuYW1lPSd2ZXJpZnljb2RlJyBydWxlcz17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICEhc2hvd0NhcHRjaGEsXG4gICAgICAgICAgICAgICAgbWluOiA0LFxuICAgICAgICAgICAgICAgIG1heDogNCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn6K+35aGr5YaZ6aqM6K+B56CBJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF19PlxuICAgICAgICAgICAgICA8SW5wdXQgc2l6ZT1cImxhcmdlXCIgcGxhY2Vob2xkZXI9XCLpqozor4HnoIFcIiBvblByZXNzRW50ZXI9eygpID0+IHsgfX0gLz5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezE0fSBtZD17MTR9PlxuICAgICAgICAgICAgPGltZyB3aWR0aD1cIjEzMHB4XCIgaGVpZ2h0PVwiMzJweFwiIHNyYz17YC9hcGkvbWFpbi9nYXRld2F5L2NhcHRjaGE/aWQ9JHtDb29raWUuZ2V0KCdjbGllbnQnKX0mXz0ke2NhcHRjaGFSfWB9IGFsdD1cIumqjOivgeeggVwiIC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJsb2NrRW5kOiAyNCwgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiB9fT5cbiAgICAgICAgPENoZWNrYm94IGNoZWNrZWQ9e3JlbWVtYmVyfSBvbkNoYW5nZT17b25DaGFuZ2VSZW1lbWJlcn0+6K6w5L2P5a+G56CBPC9DaGVja2JveD5cbiAgICAgICAgPGEgaHJlZj17XCJodHRwOi8vdS40Mzk5b20uY29tL21haW4vP3I9Zm9yZ2V0UGFzc3dvcmRcIn0gdGFyZ2V0PXtcIl9ibGFua1wifT7lv5jorrDlr4bnoIE8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCdXR0b24gdHlwZT17XCJwcmltYXJ5XCJ9IGxvYWRpbmc9e2xvZ2luTG9hZGluZ30gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IG9uQ2xpY2s9e29uRmluaXNofT7nmbvlvZU8L0J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJvdGhlcl9fYWN0aW9uXCJdfSAvPlxuICAgIDwvRm9ybT5cbiAgKVxufVxuXG5jb25zdCBBdXRoUGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInRpdGxlXCJdfT7mrKLov47mnaXok53kv6Hns7vnu588L2Rpdj5cbiAgICAgIDxUYWJzXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wiYWNjb3VudFRhYlwiXX1cbiAgICAgICAgaXRlbXM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwib21cIixcbiAgICAgICAgICAgIGxhYmVsOiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiaGVhZGVyX190aXRsZVwiXX0+T03nmbvlvZU8L2Rpdj4sXG4gICAgICAgICAgICBjaGlsZHJlbjogPE9NTG9naW4gLz5cbiAgICAgICAgICB9XG4gICAgICAgIF19XG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhQYWdlOyIsImltcG9ydCB7IGNyZWF0ZSB9IGZyb20gXCJ6dXN0YW5kXCI7XG5jb25zdCBDb29raWUgPSByZXF1aXJlKFwianMtY29va2llXCIpO1xuaW1wb3J0IGp3dCBmcm9tIFwiQGNvbmZpZy9qd3RcIjtcbmltcG9ydCB7XG4gIGFwaUxvZ2luLFxuICBhcGlMb2dvdXRcbn0gZnJvbSAnLi9pbmRleEFwaSc7XG5cbmludGVyZmFjZSBCZWFyU3RhdGUge1xuICBzaG93Q2FwdGNoYTogYm9vbGVhbixcbiAgY2FwdGNoYVI6IHN0cmluZyxcbiAgbG9naW5TdGF0dXM6IGJvb2xlYW4sXG4gIGxvZ2luOiAocGFyYW1zOiBMb2dpblByb3BzKSA9PiBQcm9taXNlPHtsb2dpblN0YXR1czogYm9vbGVhbn0+LFxuICBsb2dpbkxvYWRpbmc6IGJvb2xlYW4sXG5cbiAgbG9nb3V0OiAoKSA9PiBQcm9taXNlPHZvaWQ+LFxufVxuXG5pbnRlcmZhY2UgTG9naW5Qcm9wcyB7XG4gIHBheWxvYWQ6IE9iamVjdCxcbiAgcmVkaXJlY3Q/OiBzdHJpbmcsXG59XG5cbmNvbnN0IHVzZVN0b3JlID0gY3JlYXRlPEJlYXJTdGF0ZT4oKSgoc2V0KSA9PiAoe1xuICBzaG93Q2FwdGNoYTogZmFsc2UsXG4gIGxvZ2luU3RhdHVzOiBmYWxzZSxcbiAgY2FwdGNoYVI6IChNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMikgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMikpXG4gICAgLnNsaWNlKDIsIDE4KSxcbiAgbG9naW5Mb2FkaW5nOiBmYWxzZSxcbiAgbG9naW46IGFzeW5jIChwYXJhbXM6IExvZ2luUHJvcHMpID0+IHtcbiAgICBzZXQoeyBsb2dpbkxvYWRpbmc6IHRydWUgfSlcbiAgICBjb25zdCB7IHBheWxvYWQsIHJlZGlyZWN0IH0gPSBwYXJhbXM7XG4gICAgbGV0IGRlZmF1bHRVcmwgPSBcIlwiXG4gICAgbGV0IGNsaWVudCA9IENvb2tpZS5nZXQoXCJjbGllbnRcIik7XG4gICAgaWYgKCFjbGllbnQpIHtcbiAgICAgIGNsaWVudCA9IChNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMikgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMikpXG4gICAgICAgIC5zbGljZSgyLCAxOCk7XG4gICAgICBDb29raWUuc2V0KCdjbGllbnQnLCBjbGllbnQpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGlMb2dpbih7IC4uLnBheWxvYWQsIF94c3JmOiBjbGllbnQgfSlcbiAgICAgIC8vIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChhcGlMb2dpbiwgeyAuLi5wYXlsb2FkLCBfeHNyZjogY2xpZW50IH0pO1xuICAgICAgLy8geWllbGQgcHV0KHsgdHlwZTogJ3Nob3dDYXB0Y2hhJywgcGF5bG9hZDogZmFsc2UgfSk7XG4gICAgICBzZXQoeyBzaG93Q2FwdGNoYTogZmFsc2UgfSk7XG4gICAgICBqd3Quc2V0QWNjZXNzVG9rZW4oZGF0YSk7XG4gICAgICBpZiAoZGF0YT8ucGF0aCAhPSBcIlwiKSB7XG4gICAgICAgIGRlZmF1bHRVcmwgPSBkYXRhPy5wYXRoXG4gICAgICB9XG4gICAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgICAgZGVmYXVsdFVybCA9IHJlZGlyZWN0XG4gICAgICB9XG4gICAgICBzZXQoeyBsb2dpblN0YXR1czogdHJ1ZSwgbG9naW5Mb2FkaW5nOiBmYWxzZSwgfSlcbiAgICAgIHJldHVybiB7IGxvZ2luU3RhdHVzOiB0cnVlIH1cbiAgICAgIC8vIHlpZWxkIHB1dCh7IHR5cGU6IFwic2V0TG9naW5TdGF0dXNcIiwgcGF5bG9hZDogdHJ1ZSB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyB5aWVsZCBwdXQoeyB0eXBlOiAndXBkYXRlQ2FwdGNoYScgfSk7XG4gICAgICBzZXQoe1xuICAgICAgICBjYXB0Y2hhUjogKE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyKSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyKSlcbiAgICAgICAgICAuc2xpY2UoMiwgMTgpXG4gICAgICB9KVxuXG4gICAgICAvLyB5aWVsZCBwdXQoeyB0eXBlOiAnZ2xvYmFsL3Nob3dNc2cnLCBwYXlsb2FkOiBlcnJvciB9KTtcbiAgICAgIGlmICgoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UgPT09ICfor7fovpPlhaXpqozor4HnoIEnKSB7XG4gICAgICAgIHNldCh7IHNob3dDYXB0Y2hhOiB0cnVlIH0pXG4gICAgICAgIC8vIHlpZWxkIHB1dCh7IHR5cGU6ICdzaG93Q2FwdGNoYScsIHBheWxvYWQ6IHRydWUgfSk7XG4gICAgICB9XG4gICAgICBzZXQoeyBsb2dpblN0YXR1czogZmFsc2UsIGxvZ2luTG9hZGluZzogZmFsc2UgfSlcbiAgICAgIC8vIHlpZWxkIHB1dCh7IHR5cGU6IFwic2V0TG9naW5TdGF0dXNcIiwgcGF5bG9hZDogZmFsc2UgfSlcbiAgICAgIHJldHVybiB7IGxvZ2luU3RhdHVzOiBmYWxzZSB9XG4gICAgfVxuICB9LFxuXG4gIGxvZ291dDphc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgYXBpTG9nb3V0KHt9KVxuICAgIENvb2tpZS5yZW1vdmUoand0LmtleSk7XG4gICAgQ29va2llLnJlbW92ZSgnX3hzcmYnKTtcbiAgfVxuXG59KSlcblxuXG5leHBvcnQgZGVmYXVsdCB1c2VTdG9yZTsiLCJpbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnQGNvbmZpZy9yZXF1ZXN0JztcblxuY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHt9KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwaUxvZ2luKHBhcmFtczogYW55KSB7XG4gIHJldHVybiByZXF1ZXN0LnBvc3QoJy9tYWluL2dhdGV3YXkvbG9naW4nLCBwYXJhbXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBpTG9nb3V0KHBhcmFtczogYW55KSB7XG4gIHJldHVybiByZXF1ZXN0LnB1dCgnL21haW4vZ2F0ZXdheS9sb2dvdXQnLCBwYXJhbXMpO1xufVxuIl0sIm5hbWVzIjpbInJlcyJdLCJzb3VyY2VSb290IjoiIn0=