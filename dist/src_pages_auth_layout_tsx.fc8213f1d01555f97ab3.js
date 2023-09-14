"use strict";
(window["garfish-demo"] = window["garfish-demo"] || []).push([["src_pages_auth_layout_tsx"],{

/***/ "./src/pages/auth/layout.tsx":
/*!***********************************!*\
  !*** ./src/pages/auth/layout.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router@6.14.2_react@18.2.0/node_modules/react-router/dist/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/.pnpm/antd@5.8.0_moment@2.29.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/card/index.js");
/* harmony import */ var _store_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/global */ "./store/global/index.tsx");
/* harmony import */ var _config_public_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/public/logo.png */ "./config/public/logo.png");
/* harmony import */ var _config_public_logo_foot_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @config/public/logo_foot.png */ "./config/public/logo_foot.png");
/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ahooks */ "./node_modules/.pnpm/ahooks@3.7.8_react@18.2.0/node_modules/ahooks/es/useSize/index.js");
/* harmony import */ var _layout_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.less */ "./src/pages/auth/layout.less");









const Header = () => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: _layout_less__WEBPACK_IMPORTED_MODULE_4__["default"]["auth__header"] }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: _config_public_logo_png__WEBPACK_IMPORTED_MODULE_2__, className: "h-9 w-9" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "ml-3 text-3xl font-semibold mt-0 mb-0" }, "\u84DD\u4FE1\u7CFB\u7EDF")));
};
const Container = () => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: _layout_less__WEBPACK_IMPORTED_MODULE_4__["default"]["container"] }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: _layout_less__WEBPACK_IMPORTED_MODULE_4__["default"]["leftBanner"] }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], { className: `${_layout_less__WEBPACK_IMPORTED_MODULE_4__["default"]["cardHasTab"]} ${_layout_less__WEBPACK_IMPORTED_MODULE_4__["default"]["loginCard"]}`, bodyStyle: { padding: 0 } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Outlet, null))));
};
const Footer = () => {
  const year = (0,_store_global__WEBPACK_IMPORTED_MODULE_1__["default"])((state) => state.year);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: _layout_less__WEBPACK_IMPORTED_MODULE_4__["default"]["footer"] }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: _layout_less__WEBPACK_IMPORTED_MODULE_4__["default"]["beian"] }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: _layout_less__WEBPACK_IMPORTED_MODULE_4__["default"]["text"] }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Copyright \xA9 ", year.s, " - ", year.e, " 4399.com All Rights Reserved. \u56DB\u4E09\u4E5D\u4E5D\u7F51\u7EDC\u80A1\u4EFD\u6709\u9650\u516C\u53F8 \u7248\u6743\u6240\u6709")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: _layout_less__WEBPACK_IMPORTED_MODULE_4__["default"]["below"] }, "\u7531", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: _layout_less__WEBPACK_IMPORTED_MODULE_4__["default"]["images"], src: _config_public_logo_foot_png__WEBPACK_IMPORTED_MODULE_3__ }), "\u63D0\u4F9B\u6280\u672F\u652F\u6301")));
};
const MobileHeader = () => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: _layout_less__WEBPACK_IMPORTED_MODULE_4__["default"]["auth__header"] }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: _layout_less__WEBPACK_IMPORTED_MODULE_4__["default"]["mobileLogo"] }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: _config_public_logo_png__WEBPACK_IMPORTED_MODULE_2__, className: "h-9 w-9" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "ml-3 text-3xl font-semibold mt-0 mb-0" }, "\u84DD\u4FE1\u7CFB\u7EDF")));
};
const MobileContainer = () => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: _layout_less__WEBPACK_IMPORTED_MODULE_4__["default"]["container"] }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: _layout_less__WEBPACK_IMPORTED_MODULE_4__["default"]["modules"] }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: _layout_less__WEBPACK_IMPORTED_MODULE_4__["default"]["loginCardInMobile"] }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Outlet, null))));
};
const AuthLayout = () => {
  const setLayout = (0,_store_global__WEBPACK_IMPORTED_MODULE_1__["default"])((state) => state.setLayout);
  const size = (0,ahooks__WEBPACK_IMPORTED_MODULE_7__["default"])(() => window.document.body);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setLayout({
      renderSider: false,
      renderFooter: false,
      renderHeader: false
    });
    return () => {
      setLayout({
        renderSider: true,
        renderFooter: false,
        renderHeader: true
      });
    };
  }, []);
  return typeof (size == null ? void 0 : size.width) === "number" && (size == null ? void 0 : size.width) <= 500 ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: _layout_less__WEBPACK_IMPORTED_MODULE_4__["default"]["layoutNewInMobile"] }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MobileHeader, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MobileContainer, null)) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: _layout_less__WEBPACK_IMPORTED_MODULE_4__["default"]["layoutNew"] }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Footer, null));
};
/* harmony default export */ __webpack_exports__["default"] = (AuthLayout);


/***/ }),

/***/ "./config/public/logo.png":
/*!********************************!*\
  !*** ./config/public/logo.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/a64a392c0687d251049c.png";

/***/ }),

/***/ "./config/public/logo_foot.png":
/*!*************************************!*\
  !*** ./config/public/logo_foot.png ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/3681b8f8c677a31ec60a.png";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX2F1dGhfbGF5b3V0X3RzeC5mYzgyMTNmMWQwMTU1NWY5N2FiMy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNDO0FBQ1I7QUFDUDtBQUNtQjtBQUNTO0FBQ3RCO0FBQ0U7QUFJbkMsTUFBTSxTQUFTLE1BQU07QUFDbkIsU0FDRSwyRUFBQyxTQUFJLFdBQVcsb0RBQU0sQ0FBQyxjQUFjLEtBQ25DLDJFQUFDLFNBQUksV0FBVSxVQUNiLDJFQUFDLFNBQUksS0FBSyxvREFBTyxFQUFFLFdBQVUsV0FBVSxHQUN2QywyRUFBQyxRQUFHLFdBQVUsMkNBQXdDLDBCQUFJLENBQzVELENBQ0Y7QUFFSjtBQUdBLE1BQU0sWUFBWSxNQUFNO0FBQ3RCLFNBQ0UsMkVBQUMsU0FBSSxXQUFXLG9EQUFNLENBQUMsV0FBVyxLQUNoQywyRUFBQyxTQUFJLFdBQVcsb0RBQU0sQ0FBQyxZQUFZLEdBQUcsR0FDdEMsMkVBQUMsYUFDQywyRUFBQyw0Q0FBSSxJQUFDLFdBQVcsR0FBRyxvREFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLG9EQUFNLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxFQUFFLFNBQVMsRUFBRSxLQUN6RiwyRUFBQyxvREFBTSxNQUFDLENBQ1YsQ0FDRixDQUNGO0FBRUo7QUFHQSxNQUFNLFNBQVMsTUFBTTtBQUVuQixRQUFNLE9BQU8seURBQWMsQ0FBQyxDQUFDLFVBQVUsTUFBTSxJQUFJO0FBRWpELFNBQ0UsMkVBQUMsU0FBSSxXQUFXLG9EQUFNLENBQUMsUUFBUSxLQUM3QiwyRUFBQyxTQUFJLFdBQVcsb0RBQU0sQ0FBQyxPQUFPLEtBQzVCLDJFQUFDLFNBQUksV0FBVyxvREFBTSxDQUFDLE1BQU0sS0FDM0IsMkVBQUMsY0FBSyxtQkFBYSxLQUFLLEdBQUUsT0FBSSxLQUFLLEdBQUUsa0lBQWdELENBQ3ZGLEdBQ0EsMkVBQUMsU0FBSSxXQUFXLG9EQUFNLENBQUMsT0FBTyxLQUFHLFVBRS9CLDJFQUFDLFNBQUksV0FBVyxvREFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLHlEQUFXLEVBQUUsR0FBRSxzQ0FFeEQsQ0FDRixDQUNGO0FBRUo7QUFFQSxNQUFNLGVBQWUsTUFBTTtBQUN6QixTQUNFLDJFQUFDLFNBQUksV0FBVyxvREFBTSxDQUFDLGNBQWMsS0FDbkMsMkVBQUMsU0FBSSxXQUFXLG9EQUFNLENBQUMsWUFBWSxLQUNqQywyRUFBQyxTQUFJLEtBQUssb0RBQU8sRUFBRSxXQUFVLFdBQVUsR0FDdkMsMkVBQUMsUUFBRyxXQUFVLDJDQUF3QywwQkFBSSxDQUM1RCxDQUNGO0FBRUo7QUFFQSxNQUFNLGtCQUFrQixNQUFNO0FBQzVCLFNBQ0UsMkVBQUMsU0FBSSxXQUFXLG9EQUFNLENBQUMsV0FBVyxLQUNoQywyRUFBQyxTQUFJLFdBQVcsb0RBQU0sQ0FBQyxTQUFTLEtBQzlCLDJFQUFDLFNBQUksV0FBVyxvREFBTSxDQUFDLG1CQUFtQixLQUN4QywyRUFBQyxvREFBTSxNQUFDLENBQ1YsQ0FDRixDQUNGO0FBRUo7QUFFQSxNQUFNLGFBQWEsTUFBTTtBQUN2QixRQUFNLFlBQVkseURBQWMsQ0FBQyxXQUFTLE1BQU0sU0FBUztBQUN6RCxRQUFNLE9BQU8sa0RBQU8sQ0FBQyxNQUFNLE9BQU8sU0FBUyxJQUFJO0FBRS9DLGtEQUFTLENBQUMsTUFBTTtBQUNkLGNBQVU7QUFBQSxNQUNSLGFBQWE7QUFBQSxNQUNiLGNBQWM7QUFBQSxNQUNkLGNBQWM7QUFBQSxJQUNoQixDQUFDO0FBRUQsV0FBTyxNQUFNO0FBQ1gsZ0JBQVU7QUFBQSxRQUNSLGFBQWE7QUFBQSxRQUNiLGNBQWM7QUFBQSxRQUNkLGNBQWM7QUFBQSxNQUNoQixDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0YsR0FBRyxDQUFDLENBQUM7QUFDTCxTQUNFLFFBQU8sNkJBQU0sV0FBVSxhQUFZLDZCQUFNLFVBQVMsTUFDaEQsMkVBQUMsU0FBSSxXQUFXLG9EQUFNLENBQUMsbUJBQW1CLEtBQ3hDLDJFQUFDLGtCQUFhLEdBQ2QsMkVBQUMscUJBQWdCLENBQ25CLElBRUEsMkVBQUMsU0FBSSxXQUFXLG9EQUFNLENBQUMsV0FBVyxLQUNoQywyRUFBQyxZQUFPLEdBQ1IsMkVBQUMsZUFBVSxHQUNYLDJFQUFDLFlBQU8sQ0FDVjtBQUdOO0FBRUEsK0RBQWUsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8v5a2Q5bqU55SoZGVtby0vLi9zcmMvcGFnZXMvYXV0aC9sYXlvdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBDYXJkLCBTcGluIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB1c2VHbG9iYWxTdG9yZSBmcm9tIFwiQHN0b3JlL2dsb2JhbFwiXG5pbXBvcnQgTG9nb1BuZyBmcm9tIFwiQGNvbmZpZy9wdWJsaWMvbG9nby5wbmdcIjtcbmltcG9ydCBGb290TG9nb1BuZyBmcm9tIFwiQGNvbmZpZy9wdWJsaWMvbG9nb19mb290LnBuZ1wiO1xuaW1wb3J0IHsgdXNlU2l6ZSB9IGZyb20gXCJhaG9va3NcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbGF5b3V0Lmxlc3NcIjtcblxuXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiYXV0aF9faGVhZGVyXCJdfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICA8aW1nIHNyYz17TG9nb1BuZ30gY2xhc3NOYW1lPVwiaC05IHctOVwiIC8+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJtbC0zIHRleHQtM3hsIGZvbnQtc2VtaWJvbGQgbXQtMCBtYi0wXCI+6JOd5L+h57O757ufPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuY29uc3QgQ29udGFpbmVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJjb250YWluZXJcIl19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImxlZnRCYW5uZXJcIl19IC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImNhcmRIYXNUYWJcIl19ICR7c3R5bGVzW1wibG9naW5DYXJkXCJdfWB9IGJvZHlTdHlsZT17eyBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG5cbiAgY29uc3QgeWVhciA9IHVzZUdsb2JhbFN0b3JlKChzdGF0ZSkgPT4gc3RhdGUueWVhcilcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJmb290ZXJcIl19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImJlaWFuXCJdfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInRleHRcIl19PlxuICAgICAgICAgIDxzcGFuPkNvcHlyaWdodCDCqSB7eWVhci5zfSAtIHt5ZWFyLmV9IDQzOTkuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIOWbm+S4ieS5neS5nee9kee7nOiCoeS7veaciemZkOWFrOWPuCDniYjmnYPmiYDmnIk8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiYmVsb3dcIl19PlxuICAgICAgICAgIOeUsVxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXNbXCJpbWFnZXNcIl19IHNyYz17Rm9vdExvZ29Qbmd9IC8+XG4gICAgICAgICAg5o+Q5L6b5oqA5pyv5pSv5oyBXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTW9iaWxlSGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhdXRoX19oZWFkZXJcIl19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1vYmlsZUxvZ29cIl19PlxuICAgICAgICA8aW1nIHNyYz17TG9nb1BuZ30gY2xhc3NOYW1lPVwiaC05IHctOVwiIC8+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJtbC0zIHRleHQtM3hsIGZvbnQtc2VtaWJvbGQgbXQtMCBtYi0wXCI+6JOd5L+h57O757ufPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1vYmlsZUNvbnRhaW5lciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiY29udGFpbmVyXCJdfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJtb2R1bGVzXCJdfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImxvZ2luQ2FyZEluTW9iaWxlXCJdfT5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgQXV0aExheW91dCA9ICgpID0+IHtcbiAgY29uc3Qgc2V0TGF5b3V0ID0gdXNlR2xvYmFsU3RvcmUoc3RhdGUgPT4gc3RhdGUuc2V0TGF5b3V0KVxuICBjb25zdCBzaXplID0gdXNlU2l6ZSgoKSA9PiB3aW5kb3cuZG9jdW1lbnQuYm9keSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExheW91dCh7XG4gICAgICByZW5kZXJTaWRlcjogZmFsc2UsXG4gICAgICByZW5kZXJGb290ZXI6IGZhbHNlLFxuICAgICAgcmVuZGVySGVhZGVyOiBmYWxzZSxcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHNldExheW91dCh7XG4gICAgICAgIHJlbmRlclNpZGVyOiB0cnVlLFxuICAgICAgICByZW5kZXJGb290ZXI6IGZhbHNlLFxuICAgICAgICByZW5kZXJIZWFkZXI6IHRydWUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW10pXG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHNpemU/LndpZHRoID09PSBcIm51bWJlclwiICYmIHNpemU/LndpZHRoIDw9IDUwMCA/IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJsYXlvdXROZXdJbk1vYmlsZVwiXX0+XG4gICAgICAgIDxNb2JpbGVIZWFkZXIgLz5cbiAgICAgICAgPE1vYmlsZUNvbnRhaW5lciAvPlxuICAgICAgPC9kaXY+XG4gICAgKSA6IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJsYXlvdXROZXdcIl19PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxDb250YWluZXIgLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXYgPlxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoTGF5b3V0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==