"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./edreya/src/layouts/MobileHeader.js":
/*!********************************************!*\
  !*** ./edreya/src/layouts/MobileHeader.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/context */ \"./edreya/src/context/context.js\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar MobileHeader = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), toggle = ref[0], setToggle = ref[1];\n    var navContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__.context);\n    var nav = navContext.nav, changeNav = navContext.changeNav;\n    var activeNav = function(value) {\n        return value == nav ? \"active\" : \"\";\n    };\n    var onClick = function(value) {\n        setToggle(false);\n        changeNav(value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"edrea_tm_topbar\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"topbar_inner\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"logo\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"img/logo/logo.png\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\MobileHeader.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\MobileHeader.js\",\n                                lineNumber: 20,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\MobileHeader.js\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"trigger\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"hamburger hamburger--slider \".concat(toggle ? \"is-active\" : \"\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"hamburger-box\",\n                                    onClick: function() {\n                                        return setToggle(!toggle);\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"hamburger-inner\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\MobileHeader.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\MobileHeader.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\MobileHeader.js\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\MobileHeader.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\MobileHeader.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\MobileHeader.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"edrea_tm_mobile_menu \".concat(toggle ? \"opened\" : \"\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"inner\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"menu_list\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"transition_link\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: activeNav(\"home\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#home\",\n                                        onClick: function() {\n                                            return onClick(\"home\");\n                                        },\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\MobileHeader.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\MobileHeader.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: activeNav(\"about\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#about\",\n                                        onClick: function() {\n                                            return onClick(\"about\");\n                                        },\n                                        children: \"About\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\MobileHeader.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\MobileHeader.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: activeNav(\"portfolio\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#portfolio\",\n                                        onClick: function() {\n                                            return onClick(\"portfolio\");\n                                        },\n                                        children: \"Portfolio\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\MobileHeader.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\MobileHeader.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: activeNav(\"contact\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#contact\",\n                                        onClick: function() {\n                                            return onClick(\"contact\");\n                                        },\n                                        children: \"Contact\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\MobileHeader.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\MobileHeader.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\MobileHeader.js\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\MobileHeader.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\MobileHeader.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\MobileHeader.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\MobileHeader.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_s(MobileHeader, \"gvo0z9aj9Az8RdVQc9RDI7F5KA4=\");\n_c = MobileHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileHeader);\nvar _c;\n$RefreshReg$(_c, \"MobileHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFJLEVBQUMsWUFBWTt3Q0FBQ0osT0FBTyxFQUFFO21EQUFNQSxPQUFPLENBQUMsV0FBVyxDQUFDO3lDQUFBO2tEQUFFLFdBRTFEOzs7Ozs2Q0FBSTs7Ozs7eUNBQ0Q7OENBTUwsOERBQUNTLElBQUU7b0NBQUNQLFNBQVMsRUFBRUosU0FBUyxDQUFDLFNBQVMsQ0FBQzs4Q0FDakMsNEVBQUNLLEdBQUM7d0NBQUNDLElBQUksRUFBQyxVQUFVO3dDQUFDSixPQUFPLEVBQUU7bURBQU1BLE9BQU8sQ0FBQyxTQUFTLENBQUM7eUNBQUE7a0RBQUUsU0FFdEQ7Ozs7OzZDQUFJOzs7Ozt5Q0FDRDs7Ozs7O2lDQUNGOzs7Ozs2QkFDRDs7Ozs7eUJBQ0Y7Ozs7O3FCQUNGOzs7Ozs7YUFDRyxDQUNYO0NBQ0g7R0FwRUtSLFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQXFFbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9lZHJleWEvc3JjL2xheW91dHMvTW9iaWxlSGVhZGVyLmpzPzIyYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9jb250ZXh0XCI7XHJcblxyXG5jb25zdCBNb2JpbGVIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBuYXZDb250ZXh0ID0gdXNlQ29udGV4dChjb250ZXh0KTtcclxuICBjb25zdCB7IG5hdiwgY2hhbmdlTmF2IH0gPSBuYXZDb250ZXh0O1xyXG5cclxuICBjb25zdCBhY3RpdmVOYXYgPSAodmFsdWUpID0+ICh2YWx1ZSA9PSBuYXYgPyBcImFjdGl2ZVwiIDogXCJcIik7XHJcbiAgY29uc3Qgb25DbGljayA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0VG9nZ2xlKGZhbHNlKTtcclxuICAgIGNoYW5nZU5hdih2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZHJlYV90bV90b3BiYXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGJhcl9pbm5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvbG9nby9sb2dvLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmlnZ2VyXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoYW1idXJnZXIgaGFtYnVyZ2VyLS1zbGlkZXIgJHtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZSA/IFwiaXMtYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlci1ib3hcIiBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoIXRvZ2dsZSl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXItaW5uZXJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BlZHJlYV90bV9tb2JpbGVfbWVudSAke3RvZ2dsZSA/IFwib3BlbmVkXCIgOiBcIlwifWB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9saXN0XCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uX2xpbmtcIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXthY3RpdmVOYXYoXCJob21lXCIpfT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjaG9tZVwiIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soXCJob21lXCIpfT5cclxuICAgICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YWN0aXZlTmF2KFwiYWJvdXRcIil9PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNhYm91dFwiIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soXCJhYm91dFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXthY3RpdmVOYXYoXCJwb3J0Zm9saW9cIil9PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwb3J0Zm9saW9cIiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKFwicG9ydGZvbGlvXCIpfT5cclxuICAgICAgICAgICAgICAgICAgUG9ydGZvbGlvXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT17YWN0aXZlTmF2KFwibmV3c1wiKX0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI25ld3NcIiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKFwibmV3c1wiKX0+XHJcbiAgICAgICAgICAgICAgICAgIE5ld3NcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPiAqL31cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXthY3RpdmVOYXYoXCJjb250YWN0XCIpfT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjY29udGFjdFwiIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soXCJjb250YWN0XCIpfT5cclxuICAgICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZUhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIkZyYWdtZW50IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiY29udGV4dCIsIk1vYmlsZUhlYWRlciIsInRvZ2dsZSIsInNldFRvZ2dsZSIsIm5hdkNvbnRleHQiLCJuYXYiLCJjaGFuZ2VOYXYiLCJhY3RpdmVOYXYiLCJ2YWx1ZSIsIm9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJhIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsInVsIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./edreya/src/layouts/MobileHeader.js\n");

/***/ })

});