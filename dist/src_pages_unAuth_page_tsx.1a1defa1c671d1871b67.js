"use strict";
(window["garfish-demo"] = window["garfish-demo"] || []).push([["src_pages_unAuth_page_tsx"],{

/***/ "./src/pages/unAuth/page.tsx":
/*!***********************************!*\
  !*** ./src/pages/unAuth/page.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/global */ "./store/global/index.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/.pnpm/antd@5.8.0_moment@2.29.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/result/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/.pnpm/antd@5.8.0_moment@2.29.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/button/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router@6.14.2_react@18.2.0/node_modules/react-router/dist/index.js");





const Index = () => {
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
      status: "403",
      title: "403",
      subTitle: "\u62B1\u6B49\uFF0C\u60A8\u65E0\u6743\u8BBF\u95EE\u6B64\u9875\u9762\u3002",
      extra: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], { type: "primary", onClick: () => navigate("/") }, "\u8FD4\u56DE\u9996\u9875")
    }
  );
};
/* harmony default export */ __webpack_exports__["default"] = (Index);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX3VuQXV0aF9wYWdlX3RzeC4xYTFkZWZhMWM2NzFkMTg3MWI2Ny5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNVO0FBQ1o7QUFDZ0I7QUFFL0MsTUFBTSxRQUFRLE1BQU07QUFDbEIsUUFBTSxZQUFZLHlEQUFjLENBQUMsV0FBUyxNQUFNLFNBQVM7QUFDekQsUUFBTSxXQUFXLDZEQUFXLENBQUM7QUFFN0Isa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsY0FBVTtBQUFBLE1BQ1IsYUFBYTtBQUFBLElBQ2YsQ0FBQztBQUNELFdBQU8sTUFBTTtBQUNYLGdCQUFVO0FBQUEsUUFDUixhQUFhO0FBQUEsTUFDZixDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0YsR0FBRyxDQUFDLENBQUM7QUFFTCxTQUNFO0FBQUEsSUFBQyw0Q0FBTTtBQUFOO0FBQUEsTUFDQyxRQUFPO0FBQUEsTUFDUCxPQUFNO0FBQUEsTUFDTixVQUFTO0FBQUEsTUFDVCxPQUFPLDJFQUFDLDRDQUFNLElBQUMsTUFBSyxXQUFVLFNBQVMsTUFBTSxTQUFTLEdBQUcsS0FBRywwQkFBSTtBQUFBO0FBQUEsRUFDbEU7QUFFSjtBQUVBLCtEQUFlLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly/lrZDlupTnlKhkZW1vLS8uL3NyYy9wYWdlcy91bkF1dGgvcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VHbG9iYWxTdG9yZSBmcm9tIFwiQHN0b3JlL2dsb2JhbFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBSZXN1bHQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IHNldExheW91dCA9IHVzZUdsb2JhbFN0b3JlKHN0YXRlID0+IHN0YXRlLnNldExheW91dClcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TGF5b3V0KHtcbiAgICAgIHJlbmRlclNpZGVyOiBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHNldExheW91dCh7XG4gICAgICAgIHJlbmRlclNpZGVyOiB0cnVlXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8UmVzdWx0XG4gICAgICBzdGF0dXM9XCI0MDNcIlxuICAgICAgdGl0bGU9XCI0MDNcIlxuICAgICAgc3ViVGl0bGU9XCLmirHmrYnvvIzmgqjml6DmnYPorr/pl67mraTpobXpnaLjgIJcIlxuICAgICAgZXh0cmE9ezxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZShcIi9cIil9Pui/lOWbnummlumhtTwvQnV0dG9uPn1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9