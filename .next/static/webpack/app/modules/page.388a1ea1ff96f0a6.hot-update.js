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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/shared/lib/app-dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_modules_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/modules-service */ \"(app-pages-browser)/./src/services/modules-service.ts\");\n/* harmony import */ var _components_module_tile_module_tile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/module-tile/module-tile */ \"(app-pages-browser)/./src/app/modules/components/module-tile/module-tile.tsx\");\n/* harmony import */ var _modules_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules.module.css */ \"(app-pages-browser)/./src/app/modules/modules.module.css\");\n/* harmony import */ var _modules_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_search_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search-bar */ \"(app-pages-browser)/./src/app/modules/components/search-bar.tsx\");\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-paginate */ \"(app-pages-browser)/./node_modules/react-paginate/dist/react-paginate.js\");\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n\nconst PolkadotWallet = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_src_components_PolkadotWallet_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/PolkadotWallet */ \"(app-pages-browser)/./src/components/PolkadotWallet.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"/Users/dev3/web3/commune/frontend2/src/app/modules/page.tsx -> \" + \"@/components/PolkadotWallet\"\n        ]\n    },\n    ssr: false\n});\n_c = PolkadotWallet;\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    const [searchString, setSearchString] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const itemsPerPage = 8;\n    const [loadedModules, setLoadedModules] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [displayedModules, setDisplayedModules] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const pageCount = Math.ceil(loadedModules.length / itemsPerPage);\n    const handleModulesFetched = (modules)=>{\n        const formattedModules = modules.map((moduleName)=>({\n                name: moduleName\n            }));\n        setLoadedModules(formattedModules);\n        updateDisplayedModules(formattedModules, currentPage);\n    };\n    const updateDisplayedModules = (modules, page)=>{\n        const startIndex = (page - 1) * itemsPerPage;\n        const endIndex = startIndex + itemsPerPage;\n        setDisplayedModules(modules.slice(startIndex, endIndex));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const filteredModules = searchString ? loadedModules.filter((module)=>module.name.toLowerCase().includes(searchString.toLowerCase())) : loadedModules;\n        updateDisplayedModules(filteredModules, currentPage);\n    }, [\n        searchString,\n        loadedModules,\n        currentPage\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function fetchModules() {\n            const modules = await _services_modules_service__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getModulesList();\n            setLoadedModules(modules);\n            updateDisplayedModules(modules, currentPage);\n        }\n        fetchModules();\n    }, []);\n    const handlePageChange = (selectedItem)=>{\n        setCurrentPage(selectedItem.selected + 1);\n        updateDisplayedModules(loadedModules, selectedItem.selected + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_modules_module_css__WEBPACK_IMPORTED_MODULE_8___default().content), \"flex flex-col items-center justify-center my-auto \"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PolkadotWallet, {\n                    onModulesFetched: handleModulesFetched\n                }, void 0, false, {\n                    fileName: \"/Users/dev3/web3/commune/frontend2/src/app/modules/page.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_search_bar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    setSearchString: setSearchString,\n                    searchString: searchString\n                }, void 0, false, {\n                    fileName: \"/Users/dev3/web3/commune/frontend2/src/app/modules/page.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this),\n                displayedModules && displayedModules.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_modules_module_css__WEBPACK_IMPORTED_MODULE_8___default().modulesList),\n                    children: displayedModules.map((module, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_module_tile_module_tile__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            ...module\n                        }, module.name, false, {\n                            fileName: \"/Users/dev3/web3/commune/frontend2/src/app/modules/page.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 15\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/dev3/web3/commune/frontend2/src/app/modules/page.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"There is no data to display\"\n                }, void 0, false, {\n                    fileName: \"/Users/dev3/web3/commune/frontend2/src/app/modules/page.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 11\n                }, this),\n                loadedModules.length > 10 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_paginate__WEBPACK_IMPORTED_MODULE_7___default()), {\n                    pageCount: pageCount,\n                    onPageChange: handlePageChange,\n                    containerClassName: \"pagination\",\n                    activeClassName: \"active\",\n                    breakLabel: \"...\",\n                    breakClassName: \"break-me\",\n                    previousClassName: currentPage === 1 ? \"disabled\" : \"\",\n                    nextClassName: currentPage === pageCount ? \"disabled\" : \"\",\n                    previousLabel: \"previous\",\n                    nextLabel: \"next\",\n                    breakLabel: \"...\",\n                    breakClassName: \"break-me\",\n                    pageCount: pageCount,\n                    marginPagesDisplayed: 2,\n                    pageRangeDisplayed: 5,\n                    containerClassName: \"react-paginate\",\n                    subContainerClassName: \"pages pagination\",\n                    activeClassName: \"active\"\n                }, void 0, false, {\n                    fileName: \"/Users/dev3/web3/commune/frontend2/src/app/modules/page.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dev3/web3/commune/frontend2/src/app/modules/page.tsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\nvar _c;\n$RefreshReg$(_c, \"PolkadotWallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbW9kdWxlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW9DO0FBQ1E7QUFDVDtBQUNzQztBQUNYO0FBQ25CO0FBQ0s7QUFDUjtBQUV4QyxNQUFNUyxpQkFBaUJOLG1EQUFPQSxDQUFDLElBQU0sK09BQXFDOzs7Ozs7SUFBSU8sS0FBSzs7S0FBN0VEO0FBVU4sNkJBQWU7SUFDYixNQUFNLENBQUNFLGNBQWNDLGdCQUFnQixHQUFHViwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNXLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBLENBQUM7SUFDL0MsTUFBTWEsZUFBZTtJQUNyQixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHZiwrQ0FBUUEsQ0FBUSxFQUFFO0lBQzVELE1BQU0sQ0FBQ2dCLGtCQUFrQkMsb0JBQW9CLEdBQUdqQiwrQ0FBUUE7SUFFeEQsTUFBTWtCLFlBQVlDLEtBQUtDLElBQUksQ0FBQ04sY0FBY08sTUFBTSxHQUFHUjtJQUVuRCxNQUFNUyx1QkFBdUIsQ0FBQ0M7UUFDNUIsTUFBTUMsbUJBQW1CRCxRQUFRRSxHQUFHLENBQUMsQ0FBQ0MsYUFBd0I7Z0JBQUVDLE1BQU1EO1lBQVc7UUFDakZYLGlCQUFpQlM7UUFDakJJLHVCQUF1Qkosa0JBQWtCYjtJQUMzQztJQUVBLE1BQU1pQix5QkFBeUIsQ0FBQ0wsU0FBU007UUFDdkMsTUFBTUMsYUFBYSxDQUFDRCxPQUFPLEtBQUtoQjtRQUNoQyxNQUFNa0IsV0FBV0QsYUFBYWpCO1FBQzlCSSxvQkFBb0JNLFFBQVFTLEtBQUssQ0FBQ0YsWUFBWUM7SUFDaEQ7SUFFQWhDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWtDLGtCQUFrQnhCLGVBQWVLLGNBQWNvQixNQUFNLENBQUMsQ0FBQ0MsU0FBV0EsT0FBT1IsSUFBSSxDQUFDUyxXQUFXLEdBQUdDLFFBQVEsQ0FBQzVCLGFBQWEyQixXQUFXLE9BQU90QjtRQUMxSWMsdUJBQXVCSyxpQkFBaUJ0QjtJQUMxQyxHQUFHO1FBQUNGO1FBQWNLO1FBQWVIO0tBQVk7SUFFN0NaLGdEQUFTQSxDQUFDO1FBQ1IsZUFBZXVDO1lBQ2IsTUFBTWYsVUFBVSxNQUFNckIsaUVBQWNBLENBQUNxQyxjQUFjO1lBQ25EeEIsaUJBQWlCUTtZQUNqQkssdUJBQXVCTCxTQUFTWjtRQUNsQztRQUVBMkI7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNRSxtQkFBbUIsQ0FBQ0M7UUFDeEI3QixlQUFlNkIsYUFBYUMsUUFBUSxHQUFHO1FBQ3ZDZCx1QkFBdUJkLGVBQWUyQixhQUFhQyxRQUFRLEdBQUc7SUFDaEU7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBS0MsV0FBVzlDLGlEQUFVQSxDQUFDTSxvRUFBZSxFQUFFOzs4QkFDM0MsOERBQUNHO29CQUFldUMsa0JBQWtCeEI7Ozs7Ozs4QkFDbEMsOERBQUNqQiw4REFBU0E7b0JBQUNLLGlCQUFpQkE7b0JBQWlCRCxjQUFjQTs7Ozs7O2dCQUMxRE8sb0JBQW9CQSxpQkFBaUJLLE1BQU0sR0FBRyxrQkFDN0MsOERBQUMwQjtvQkFBR0gsV0FBV3hDLHdFQUFtQjs4QkFDL0JZLGlCQUFpQlMsR0FBRyxDQUFDLENBQUNVLFFBQVFjLGtCQUM3Qiw4REFBQzlDLDJFQUFVQTs0QkFBb0IsR0FBR2dDLE1BQU07MkJBQXZCQSxPQUFPUixJQUFJOzs7Ozs7Ozs7eUNBSWhDLDhEQUFDdUI7OEJBQUs7Ozs7OztnQkFFUHBDLGNBQWNPLE1BQU0sR0FBRyxvQkFDdEIsOERBQUNmLHVEQUFVQTtvQkFDVFksV0FBV0E7b0JBQ1hpQyxjQUFjWDtvQkFDZFksb0JBQW1CO29CQUNuQkMsaUJBQWdCO29CQUNoQkMsWUFBVztvQkFDWEMsZ0JBQWU7b0JBQ2ZDLG1CQUFtQjdDLGdCQUFnQixJQUFJLGFBQWE7b0JBQ3BEOEMsZUFBZTlDLGdCQUFnQk8sWUFBWSxhQUFhO29CQUN4RHdDLGVBQWU7b0JBQ2ZDLFdBQVc7b0JBQ1hMLFlBQVk7b0JBQ1pDLGdCQUFnQjtvQkFDaEJyQyxXQUFXQTtvQkFDWDBDLHNCQUFzQjtvQkFDdEJDLG9CQUFvQjtvQkFDcEJULG9CQUFvQjtvQkFDcEJVLHVCQUF1QjtvQkFDdkJULGlCQUFpQjs7Ozs7Ozs7Ozs7OztBQU03QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL21vZHVsZXMvcGFnZS50c3g/OGE4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCBNb2R1bGVzU2VydmljZSwgeyBtb2R1bGVzTGlzdCB9IGZyb20gXCJAL3NlcnZpY2VzL21vZHVsZXMtc2VydmljZVwiO1xuaW1wb3J0IE1vZHVsZVRpbGUgZnJvbSBcIi4vY29tcG9uZW50cy9tb2R1bGUtdGlsZS9tb2R1bGUtdGlsZVwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vbW9kdWxlcy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuL2NvbXBvbmVudHMvc2VhcmNoLWJhclwiO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcInJlYWN0LXBhZ2luYXRlXCI7XG5cbmNvbnN0IFBvbGthZG90V2FsbGV0ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJAL2NvbXBvbmVudHMvUG9sa2Fkb3RXYWxsZXRcIiksIHsgc3NyOiBmYWxzZSB9KTtcblxudHlwZSBNb2R1bGVUaWxlUHJvcHMgPSB7XG4gIGltYWdlX3VybD86IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBhdHRyaWJ1dGVzPzogc3RyaW5nW107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IFtzZWFyY2hTdHJpbmcsIHNldFNlYXJjaFN0cmluZ10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgaXRlbXNQZXJQYWdlID0gODtcbiAgY29uc3QgW2xvYWRlZE1vZHVsZXMsIHNldExvYWRlZE1vZHVsZXNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcbiAgY29uc3QgW2Rpc3BsYXllZE1vZHVsZXMsIHNldERpc3BsYXllZE1vZHVsZXNdID0gdXNlU3RhdGU8YW55W10+KCk7XG5cbiAgY29uc3QgcGFnZUNvdW50ID0gTWF0aC5jZWlsKGxvYWRlZE1vZHVsZXMubGVuZ3RoIC8gaXRlbXNQZXJQYWdlKTtcblxuICBjb25zdCBoYW5kbGVNb2R1bGVzRmV0Y2hlZCA9IChtb2R1bGVzOiBzdHJpbmdbXSkgPT4ge1xuICAgIGNvbnN0IGZvcm1hdHRlZE1vZHVsZXMgPSBtb2R1bGVzLm1hcCgobW9kdWxlTmFtZTogc3RyaW5nKSA9PiAoeyBuYW1lOiBtb2R1bGVOYW1lIH0pKTtcbiAgICBzZXRMb2FkZWRNb2R1bGVzKGZvcm1hdHRlZE1vZHVsZXMpO1xuICAgIHVwZGF0ZURpc3BsYXllZE1vZHVsZXMoZm9ybWF0dGVkTW9kdWxlcywgY3VycmVudFBhZ2UpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZURpc3BsYXllZE1vZHVsZXMgPSAobW9kdWxlcywgcGFnZSkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSAocGFnZSAtIDEpICogaXRlbXNQZXJQYWdlO1xuICAgIGNvbnN0IGVuZEluZGV4ID0gc3RhcnRJbmRleCArIGl0ZW1zUGVyUGFnZTtcbiAgICBzZXREaXNwbGF5ZWRNb2R1bGVzKG1vZHVsZXMuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkTW9kdWxlcyA9IHNlYXJjaFN0cmluZyA/IGxvYWRlZE1vZHVsZXMuZmlsdGVyKChtb2R1bGUpID0+IG1vZHVsZS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyaW5nLnRvTG93ZXJDYXNlKCkpKSA6IGxvYWRlZE1vZHVsZXM7XG4gICAgdXBkYXRlRGlzcGxheWVkTW9kdWxlcyhmaWx0ZXJlZE1vZHVsZXMsIGN1cnJlbnRQYWdlKTtcbiAgfSwgW3NlYXJjaFN0cmluZywgbG9hZGVkTW9kdWxlcywgY3VycmVudFBhZ2VdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoTW9kdWxlcygpIHtcbiAgICAgIGNvbnN0IG1vZHVsZXMgPSBhd2FpdCBNb2R1bGVzU2VydmljZS5nZXRNb2R1bGVzTGlzdCgpO1xuICAgICAgc2V0TG9hZGVkTW9kdWxlcyhtb2R1bGVzKTtcbiAgICAgIHVwZGF0ZURpc3BsYXllZE1vZHVsZXMobW9kdWxlcywgY3VycmVudFBhZ2UpO1xuICAgIH1cblxuICAgIGZldGNoTW9kdWxlcygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChzZWxlY3RlZEl0ZW0pID0+IHtcbiAgICBzZXRDdXJyZW50UGFnZShzZWxlY3RlZEl0ZW0uc2VsZWN0ZWQgKyAxKTtcbiAgICB1cGRhdGVEaXNwbGF5ZWRNb2R1bGVzKGxvYWRlZE1vZHVsZXMsIHNlbGVjdGVkSXRlbS5zZWxlY3RlZCArIDEpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLmNvbnRlbnQsIFwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXktYXV0byBcIil9PlxuICAgICAgICA8UG9sa2Fkb3RXYWxsZXQgb25Nb2R1bGVzRmV0Y2hlZD17aGFuZGxlTW9kdWxlc0ZldGNoZWR9IC8+XG4gICAgICAgIDxTZWFyY2hCYXIgc2V0U2VhcmNoU3RyaW5nPXtzZXRTZWFyY2hTdHJpbmd9IHNlYXJjaFN0cmluZz17c2VhcmNoU3RyaW5nfSAvPlxuICAgICAgICB7ZGlzcGxheWVkTW9kdWxlcyAmJiBkaXNwbGF5ZWRNb2R1bGVzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2R1bGVzTGlzdH0+XG4gICAgICAgICAgICB7ZGlzcGxheWVkTW9kdWxlcy5tYXAoKG1vZHVsZSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8TW9kdWxlVGlsZSBrZXk9e21vZHVsZS5uYW1lfSB7Li4ubW9kdWxlfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8c3Bhbj5UaGVyZSBpcyBubyBkYXRhIHRvIGRpc3BsYXk8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICAgIHtsb2FkZWRNb2R1bGVzLmxlbmd0aCA+IDEwICYmIChcbiAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgcGFnZUNvdW50PXtwYWdlQ291bnR9XG4gICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XG4gICAgICAgICAgICBjb250YWluZXJDbGFzc05hbWU9XCJwYWdpbmF0aW9uXCJcbiAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXG4gICAgICAgICAgICBicmVha0xhYmVsPVwiLi4uXCJcbiAgICAgICAgICAgIGJyZWFrQ2xhc3NOYW1lPVwiYnJlYWstbWVcIlxuICAgICAgICAgICAgcHJldmlvdXNDbGFzc05hbWU9e2N1cnJlbnRQYWdlID09PSAxID8gXCJkaXNhYmxlZFwiIDogXCJcIn1cbiAgICAgICAgICAgIG5leHRDbGFzc05hbWU9e2N1cnJlbnRQYWdlID09PSBwYWdlQ291bnQgPyBcImRpc2FibGVkXCIgOiBcIlwifVxuICAgICAgICAgICAgcHJldmlvdXNMYWJlbD17XCJwcmV2aW91c1wifVxuICAgICAgICAgICAgbmV4dExhYmVsPXtcIm5leHRcIn1cbiAgICAgICAgICAgIGJyZWFrTGFiZWw9e1wiLi4uXCJ9XG4gICAgICAgICAgICBicmVha0NsYXNzTmFtZT17XCJicmVhay1tZVwifVxuICAgICAgICAgICAgcGFnZUNvdW50PXtwYWdlQ291bnR9XG4gICAgICAgICAgICBtYXJnaW5QYWdlc0Rpc3BsYXllZD17Mn1cbiAgICAgICAgICAgIHBhZ2VSYW5nZURpc3BsYXllZD17NX1cbiAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzTmFtZT17XCJyZWFjdC1wYWdpbmF0ZVwifVxuICAgICAgICAgICAgc3ViQ29udGFpbmVyQ2xhc3NOYW1lPXtcInBhZ2VzIHBhZ2luYXRpb25cIn1cbiAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17XCJhY3RpdmVcIn1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImR5bmFtaWMiLCJNb2R1bGVzU2VydmljZSIsIk1vZHVsZVRpbGUiLCJjbGFzc2VzIiwiU2VhcmNoQmFyIiwiUGFnaW5hdGlvbiIsIlBvbGthZG90V2FsbGV0Iiwic3NyIiwic2VhcmNoU3RyaW5nIiwic2V0U2VhcmNoU3RyaW5nIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsIml0ZW1zUGVyUGFnZSIsImxvYWRlZE1vZHVsZXMiLCJzZXRMb2FkZWRNb2R1bGVzIiwiZGlzcGxheWVkTW9kdWxlcyIsInNldERpc3BsYXllZE1vZHVsZXMiLCJwYWdlQ291bnQiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsImhhbmRsZU1vZHVsZXNGZXRjaGVkIiwibW9kdWxlcyIsImZvcm1hdHRlZE1vZHVsZXMiLCJtYXAiLCJtb2R1bGVOYW1lIiwibmFtZSIsInVwZGF0ZURpc3BsYXllZE1vZHVsZXMiLCJwYWdlIiwic3RhcnRJbmRleCIsImVuZEluZGV4Iiwic2xpY2UiLCJmaWx0ZXJlZE1vZHVsZXMiLCJmaWx0ZXIiLCJtb2R1bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZmV0Y2hNb2R1bGVzIiwiZ2V0TW9kdWxlc0xpc3QiLCJoYW5kbGVQYWdlQ2hhbmdlIiwic2VsZWN0ZWRJdGVtIiwic2VsZWN0ZWQiLCJtYWluIiwiY2xhc3NOYW1lIiwiY29udGVudCIsIm9uTW9kdWxlc0ZldGNoZWQiLCJ1bCIsIm1vZHVsZXNMaXN0IiwiaSIsInNwYW4iLCJvblBhZ2VDaGFuZ2UiLCJjb250YWluZXJDbGFzc05hbWUiLCJhY3RpdmVDbGFzc05hbWUiLCJicmVha0xhYmVsIiwiYnJlYWtDbGFzc05hbWUiLCJwcmV2aW91c0NsYXNzTmFtZSIsIm5leHRDbGFzc05hbWUiLCJwcmV2aW91c0xhYmVsIiwibmV4dExhYmVsIiwibWFyZ2luUGFnZXNEaXNwbGF5ZWQiLCJwYWdlUmFuZ2VEaXNwbGF5ZWQiLCJzdWJDb250YWluZXJDbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/modules/page.tsx\n"));

/***/ })

});