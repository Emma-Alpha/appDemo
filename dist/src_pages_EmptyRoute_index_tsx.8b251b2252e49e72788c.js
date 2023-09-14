"use strict";
(window["garfish-demo"] = window["garfish-demo"] || []).push([["src_pages_EmptyRoute_index_tsx"],{

/***/ "./src/pages/EmptyRoute/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/EmptyRoute/index.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/.pnpm/antd@5.8.0_moment@2.29.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/result/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/.pnpm/antd@5.8.0_moment@2.29.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/button/index.js");
/* harmony import */ var _store_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/global */ "./store/global/index.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router@6.14.2_react@18.2.0/node_modules/react-router/dist/index.js");





function index() {
  const setLayout = (0,_store_global__WEBPACK_IMPORTED_MODULE_1__["default"])((state) => state.setLayout);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setLayout({
      renderSider: false
    });
    return () => {
      setLayout({
        renderSider: true
      });
    };
  }, []);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    antd__WEBPACK_IMPORTED_MODULE_3__["default"],
    {
      status: "404",
      title: "404",
      subTitle: "\u62B1\u6B49\uFF0C\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728\u3002",
      extra: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], { type: "primary", onClick: () => navigate("/") }, "\u8FD4\u56DE\u9996\u9875")
    }
  );
}
/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX0VtcHR5Um91dGVfaW5kZXhfdHN4LjhiMjUxYjIyNTJlNDllNzI3ODhjLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0Y7QUFDWTtBQUNJO0FBRS9DLFNBQVMsUUFBUTtBQUVmLFFBQU0sWUFBWSx5REFBYyxDQUFDLFdBQVMsTUFBTSxTQUFTO0FBQ3pELFFBQU0sV0FBVyw2REFBVyxDQUFDO0FBRTdCLGtEQUFTLENBQUMsTUFBTTtBQUNkLGNBQVU7QUFBQSxNQUNSLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFDRCxXQUFPLE1BQU07QUFDWCxnQkFBVTtBQUFBLFFBQ1IsYUFBYTtBQUFBLE1BQ2YsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGLEdBQUcsQ0FBQyxDQUFDO0FBRUwsU0FDRTtBQUFBLElBQUMsNENBQU07QUFBTjtBQUFBLE1BQ0MsUUFBTztBQUFBLE1BQ1AsT0FBTTtBQUFBLE1BQ04sVUFBUztBQUFBLE1BQ1QsT0FBTywyRUFBQyw0Q0FBTSxJQUFDLE1BQUssV0FBVSxTQUFTLE1BQU0sU0FBUyxHQUFHLEtBQUcsMEJBQUk7QUFBQTtBQUFBLEVBQ2xFO0FBRUo7QUFFQSwrREFBZSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8v5a2Q5bqU55SoZGVtby0vLi9zcmMvcGFnZXMvRW1wdHlSb3V0ZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uLCBSZXN1bHQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB1c2VHbG9iYWxTdG9yZSBmcm9tIFwiQHN0b3JlL2dsb2JhbFwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5mdW5jdGlvbiBpbmRleCgpIHtcblxuICBjb25zdCBzZXRMYXlvdXQgPSB1c2VHbG9iYWxTdG9yZShzdGF0ZSA9PiBzdGF0ZS5zZXRMYXlvdXQpXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExheW91dCh7XG4gICAgICByZW5kZXJTaWRlcjogZmFsc2VcbiAgICB9KVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzZXRMYXlvdXQoe1xuICAgICAgICByZW5kZXJTaWRlcjogdHJ1ZVxuICAgICAgfSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPFJlc3VsdFxuICAgICAgc3RhdHVzPVwiNDA0XCJcbiAgICAgIHRpdGxlPVwiNDA0XCJcbiAgICAgIHN1YlRpdGxlPVwi5oqx5q2J77yM5oKo6K6/6Zeu55qE6aG16Z2i5LiN5a2Y5Zyo44CCXCJcbiAgICAgIGV4dHJhPXs8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoXCIvXCIpfT7ov5Tlm57pppbpobU8L0J1dHRvbj59XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==