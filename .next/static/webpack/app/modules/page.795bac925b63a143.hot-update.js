"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/modules/page",{

/***/ "(app-pages-browser)/./src/app/modules/page.tsx":
/*!**********************************!*\
  !*** ./src/app/modules/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/shared/lib/app-dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_modules_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/modules-service */ \"(app-pages-browser)/./src/services/modules-service.ts\");\n/* harmony import */ var _components_module_tile_module_tile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/module-tile/module-tile */ \"(app-pages-browser)/./src/app/modules/components/module-tile/module-tile.tsx\");\n/* harmony import */ var _modules_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules.module.css */ \"(app-pages-browser)/./src/app/modules/modules.module.css\");\n/* harmony import */ var _modules_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_search_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search-bar */ \"(app-pages-browser)/./src/app/modules/components/search-bar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\nconst PolkadotWallet = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = ()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_src_components_PolkadotWallet_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/PolkadotWallet */ \"(app-pages-browser)/./src/components/PolkadotWallet.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"/Users/dev3/web3/commune/frontend2/src/app/modules/page.tsx -> \" + \"@/components/PolkadotWallet\"\n        ]\n    },\n    ssr: false\n});\n_c1 = PolkadotWallet;\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    const [searchString, setSearchString] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [updatedModuleList, setUpdatedModuleList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_services_modules_service__WEBPACK_IMPORTED_MODULE_4__.modulesList);\n    const handleModulesFetched = (modules)=>{\n        setUpdatedModuleList(modules.map((moduleName)=>({\n                name: moduleName\n            })));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (searchString) {\n            const newData = _services_modules_service__WEBPACK_IMPORTED_MODULE_4__.modulesList.filter((item)=>{\n                var _item_name;\n                return (_item_name = item.name) === null || _item_name === void 0 ? void 0 : _item_name.toLowerCase().includes(searchString.toLowerCase());\n            });\n            setUpdatedModuleList(newData);\n        }\n    }, [\n        searchString\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_modules_module_css__WEBPACK_IMPORTED_MODULE_7___default().content), \"flex flex-col items-center justify-center  my-auto \"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_search_bar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                setSearchString: setSearchString,\n                searchString: searchString\n            }, void 0, false, {\n                fileName: \"/Users/dev3/web3/commune/frontend2/src/app/modules/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            updatedModuleList ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_modules_module_css__WEBPACK_IMPORTED_MODULE_7___default().modulesList),\n                children: updatedModuleList.map((module, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_module_tile_module_tile__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        ...module\n                    }, module.name, false, {\n                        fileName: \"/Users/dev3/web3/commune/frontend2/src/app/modules/page.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/dev3/web3/commune/frontend2/src/app/modules/page.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"There is no data to display\"\n            }, void 0, false, {\n                fileName: \"/Users/dev3/web3/commune/frontend2/src/app/modules/page.tsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dev3/web3/commune/frontend2/src/app/modules/page.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\nvar _c, _c1;\n$RefreshReg$(_c, \"PolkadotWallet$dynamic\");\n$RefreshReg$(_c1, \"PolkadotWallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbW9kdWxlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVvQztBQUNRO0FBQ1Q7QUFHc0I7QUFDSztBQUVuQjtBQUNLO0FBQ2hELE1BQU1RLGlCQUFpQkwsbURBQU9BLE1BQUMsSUFBTSwrT0FBcUM7Ozs7OztJQUFJTSxLQUFLOzs7QUFVbkYsNkJBQWU7SUFDYixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNLENBQUNVLG1CQUFtQkMscUJBQXFCLEdBQUdYLCtDQUFRQSxDQUFRRSxrRUFBV0E7SUFDN0UsTUFBTVUsdUJBQXVCLENBQUNDO1FBQzVCRixxQkFBcUJFLFFBQVFDLEdBQUcsQ0FBQyxDQUFDQyxhQUF3QjtnQkFBRUMsTUFBTUQ7WUFBVztJQUMvRTtJQUVBaEIsZ0RBQVNBLENBQUM7UUFDUixJQUFJUyxjQUFjO1lBQ2hCLE1BQU1TLFVBQVVmLGtFQUFXQSxDQUFDZ0IsTUFBTSxDQUFDLENBQUNDO29CQUMzQkE7Z0JBQVAsUUFBT0EsYUFBQUEsS0FBS0gsSUFBSSxjQUFURyxpQ0FBQUEsV0FBV0MsV0FBVyxHQUFHQyxRQUFRLENBQUNiLGFBQWFZLFdBQVc7WUFDbkU7WUFFQVQscUJBQXFCTTtRQUN2QjtJQUNGLEdBQUc7UUFBQ1Q7S0FBYTtJQUVqQixxQkFDRSw4REFBQ2M7UUFBS0MsV0FBV3pCLGlEQUFVQSxDQUFDTSxvRUFBZSxFQUFFOzswQkFDM0MsOERBQUNDLDhEQUFTQTtnQkFBQ0ksaUJBQWlCQTtnQkFBaUJELGNBQWNBOzs7Ozs7WUFDMURFLGtDQUNDLDhEQUFDZTtnQkFBR0YsV0FBV25CLHdFQUFtQjswQkFDL0JNLGtCQUFrQkksR0FBRyxDQUFDLENBQUNZLFFBQVFDLGtCQUM5Qiw4REFBQ3hCLDJFQUFVQTt3QkFBb0IsR0FBR3VCLE1BQU07dUJBQXZCQSxPQUFPVixJQUFJOzs7Ozs7Ozs7cUNBSWhDLDhEQUFDWTswQkFBSzs7Ozs7Ozs7Ozs7O0FBSWQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9tb2R1bGVzL3BhZ2UudHN4PzhhODYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5pbXBvcnQgeyBlbmFibGVQb2xrYWRvdEV4dGVuc2lvbiB9IGZyb20gXCJAL3NlcnZpY2VzL3BvbGthZG90Q2xpZW50XCI7XG5cbmltcG9ydCB7IG1vZHVsZXNMaXN0IH0gZnJvbSBcIkAvc2VydmljZXMvbW9kdWxlcy1zZXJ2aWNlXCI7XG5pbXBvcnQgTW9kdWxlVGlsZSBmcm9tIFwiLi9jb21wb25lbnRzL21vZHVsZS10aWxlL21vZHVsZS10aWxlXCI7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL21vZHVsZXMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi9jb21wb25lbnRzL3NlYXJjaC1iYXJcIjtcbmNvbnN0IFBvbGthZG90V2FsbGV0ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJAL2NvbXBvbmVudHMvUG9sa2Fkb3RXYWxsZXRcIiksIHsgc3NyOiBmYWxzZSB9KTtcblxudHlwZSBNb2R1bGVUaWxlUHJvcHMgPSB7XG4gIGltYWdlX3VybD86IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBhdHRyaWJ1dGVzPzogc3RyaW5nW107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IFtzZWFyY2hTdHJpbmcsIHNldFNlYXJjaFN0cmluZ10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBbdXBkYXRlZE1vZHVsZUxpc3QsIHNldFVwZGF0ZWRNb2R1bGVMaXN0XSA9IHVzZVN0YXRlPGFueVtdPihtb2R1bGVzTGlzdCk7XG4gIGNvbnN0IGhhbmRsZU1vZHVsZXNGZXRjaGVkID0gKG1vZHVsZXM6IHN0cmluZ1tdKSA9PiB7XG4gICAgc2V0VXBkYXRlZE1vZHVsZUxpc3QobW9kdWxlcy5tYXAoKG1vZHVsZU5hbWU6IHN0cmluZykgPT4gKHsgbmFtZTogbW9kdWxlTmFtZSB9KSkpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlYXJjaFN0cmluZykge1xuICAgICAgY29uc3QgbmV3RGF0YSA9IG1vZHVsZXNMaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5uYW1lPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0cmluZy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH0pO1xuXG4gICAgICBzZXRVcGRhdGVkTW9kdWxlTGlzdChuZXdEYXRhKTtcbiAgICB9XG4gIH0sIFtzZWFyY2hTdHJpbmddKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLmNvbnRlbnQsIFwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgIG15LWF1dG8gXCIpfT5cbiAgICAgIDxTZWFyY2hCYXIgc2V0U2VhcmNoU3RyaW5nPXtzZXRTZWFyY2hTdHJpbmd9IHNlYXJjaFN0cmluZz17c2VhcmNoU3RyaW5nfSAvPlxuICAgICAge3VwZGF0ZWRNb2R1bGVMaXN0ID8gKFxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZHVsZXNMaXN0fT5cbiAgICAgICAgICB7dXBkYXRlZE1vZHVsZUxpc3QubWFwKChtb2R1bGUsIGkpID0+IChcbiAgICAgICAgICAgIDxNb2R1bGVUaWxlIGtleT17bW9kdWxlLm5hbWV9IHsuLi5tb2R1bGV9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICApIDogKFxuICAgICAgICA8c3Bhbj5UaGVyZSBpcyBubyBkYXRhIHRvIGRpc3BsYXk8L3NwYW4+XG4gICAgICApfVxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJkeW5hbWljIiwibW9kdWxlc0xpc3QiLCJNb2R1bGVUaWxlIiwiY2xhc3NlcyIsIlNlYXJjaEJhciIsIlBvbGthZG90V2FsbGV0Iiwic3NyIiwic2VhcmNoU3RyaW5nIiwic2V0U2VhcmNoU3RyaW5nIiwidXBkYXRlZE1vZHVsZUxpc3QiLCJzZXRVcGRhdGVkTW9kdWxlTGlzdCIsImhhbmRsZU1vZHVsZXNGZXRjaGVkIiwibW9kdWxlcyIsIm1hcCIsIm1vZHVsZU5hbWUiLCJuYW1lIiwibmV3RGF0YSIsImZpbHRlciIsIml0ZW0iLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibWFpbiIsImNsYXNzTmFtZSIsImNvbnRlbnQiLCJ1bCIsIm1vZHVsZSIsImkiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/modules/page.tsx\n"));

/***/ })

});