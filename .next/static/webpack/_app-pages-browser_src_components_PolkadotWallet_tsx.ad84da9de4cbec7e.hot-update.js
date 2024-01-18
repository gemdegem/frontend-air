"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_src_components_PolkadotWallet_tsx",{

/***/ "(app-pages-browser)/./src/components/PolkadotWallet.tsx":
/*!*******************************************!*\
  !*** ./src/components/PolkadotWallet.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PolkadotWallet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _polkadot_extension_dapp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polkadot/extension-dapp */ \"(app-pages-browser)/../node_modules/@polkadot/extension-dapp/bundle.js\");\n/* harmony import */ var _services_ApiCalls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ApiCalls */ \"(app-pages-browser)/./src/services/ApiCalls.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PolkadotWallet(param) {\n    let { onModulesFetched } = param;\n    _s();\n    const [accounts, setAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedAccount, setSelectedAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [moduleNames, setModuleNames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function connectWallet() {\n            const extensions = await (0,_polkadot_extension_dapp__WEBPACK_IMPORTED_MODULE_3__.web3Enable)(\"MyApp\");\n            if (extensions.length > 0) {\n                const allAccounts = await (0,_polkadot_extension_dapp__WEBPACK_IMPORTED_MODULE_3__.web3Accounts)();\n                setAccounts(allAccounts);\n            }\n        }\n        connectWallet();\n    }, []);\n    const handleAccountSelection = (accountIndex)=>{\n        setSelectedAccount(accounts[accountIndex]);\n    };\n    const handlePostRequest = ()=>{\n        if (selectedAccount) {\n            (0,_services_ApiCalls__WEBPACK_IMPORTED_MODULE_2__.postRequest)(selectedAccount, (data)=>{\n                console.log(\"Response data:\", data);\n                onModulesFetched(data);\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{},\n                children: \"Connect\"\n            }, void 0, false, {\n                fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            accounts.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                onChange: (e)=>handleAccountSelection(parseInt(e.target.value, 10)),\n                children: [\n                    accounts.map((account, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: index,\n                            children: [\n                                account.meta.name,\n                                \" (\",\n                                account.address,\n                                \")\"\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        hidden: true,\n                        disabled: true,\n                        selected: true,\n                        children: [\n                            \" \",\n                            \"select account\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this),\n            selectedAccount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Account Name: \",\n                            selectedAccount.meta.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Account Address: \",\n                            selectedAccount.address\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handlePostRequest,\n                children: \"Send POST request\"\n            }, void 0, false, {\n                fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(PolkadotWallet, \"X459Xz/NACqM8jC65torAJOgapE=\");\n_c = PolkadotWallet;\nvar _c;\n$RefreshReg$(_c, \"PolkadotWallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1BvbGthZG90V2FsbGV0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNpQjtBQUVqQjtBQUVwQyxTQUFTTSxlQUFlLEtBQStEO1FBQS9ELEVBQUVDLGdCQUFnQixFQUE2QyxHQUEvRDs7SUFDckMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUE0QixFQUFFO0lBQ3RFLE1BQU0sQ0FBQ1EsaUJBQWlCQyxtQkFBbUIsR0FBR1QsK0NBQVFBLENBQWlDO0lBQ3ZGLE1BQU0sQ0FBQ1UsYUFBYUMsZUFBZSxHQUFHWCwrQ0FBUUEsQ0FBVyxFQUFFO0lBRTNERCxnREFBU0EsQ0FBQztRQUNSLGVBQWVhO1lBQ2IsTUFBTUMsYUFBYSxNQUFNWixvRUFBVUEsQ0FBQztZQUNwQyxJQUFJWSxXQUFXQyxNQUFNLEdBQUcsR0FBRztnQkFDekIsTUFBTUMsY0FBYyxNQUFNYixzRUFBWUE7Z0JBQ3RDSyxZQUFZUTtZQUNkO1FBQ0Y7UUFFQUg7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNSSx5QkFBeUIsQ0FBQ0M7UUFDOUJSLG1CQUFtQkgsUUFBUSxDQUFDVyxhQUFhO0lBQzNDO0lBRUEsTUFBTUMsb0JBQW9CO1FBQ3hCLElBQUlWLGlCQUFpQjtZQUNuQkwsK0RBQVdBLENBQUNLLGlCQUFpQixDQUFDVztnQkFDNUJDLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JGO2dCQUM5QmQsaUJBQWlCYztZQUNuQjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0c7OzBCQUNDLDhEQUFDQztnQkFBT0MsU0FBUyxLQUFPOzBCQUFHOzs7Ozs7WUFDMUJsQixTQUFTUSxNQUFNLEdBQUcsbUJBQ2pCLDhEQUFDVztnQkFBT0MsVUFBVSxDQUFDQyxJQUFNWCx1QkFBdUJZLFNBQVNELEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFOztvQkFDdEV4QixTQUFTeUIsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUN0Qiw4REFBQ0M7NEJBQW1CSixPQUFPRzs7Z0NBQ3hCRCxRQUFRRyxJQUFJLENBQUNDLElBQUk7Z0NBQUM7Z0NBQUdKLFFBQVFLLE9BQU87Z0NBQUM7OzJCQUQzQko7Ozs7O2tDQUlmLDhEQUFDQzt3QkFBT0ksTUFBTTt3QkFBQ0MsUUFBUTt3QkFBQ0MsUUFBUTs7NEJBQzdCOzRCQUFJOzRCQUNVOzs7Ozs7Ozs7Ozs7O1lBSXBCaEMsaUNBQ0MsOERBQUNjOztrQ0FDQyw4REFBQ21COzs0QkFBRTs0QkFBZWpDLGdCQUFnQjJCLElBQUksQ0FBQ0MsSUFBSTs7Ozs7OztrQ0FDM0MsOERBQUNLOzs0QkFBRTs0QkFBa0JqQyxnQkFBZ0I2QixPQUFPOzs7Ozs7Ozs7Ozs7OzBCQUdoRCw4REFBQ2Q7Z0JBQU9DLFNBQVNOOzBCQUFtQjs7Ozs7Ozs7Ozs7O0FBRzFDO0dBdkR3QmQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9sa2Fkb3RXYWxsZXQudHN4PzViZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHdlYjNFbmFibGUsIHdlYjNBY2NvdW50cyB9IGZyb20gXCJAcG9sa2Fkb3QvZXh0ZW5zaW9uLWRhcHBcIjtcbmltcG9ydCB7IEluamVjdGVkQWNjb3VudFdpdGhNZXRhIH0gZnJvbSBcIkBwb2xrYWRvdC9leHRlbnNpb24taW5qZWN0L3R5cGVzXCI7XG5pbXBvcnQgeyBwb3N0UmVxdWVzdCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9BcGlDYWxsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2xrYWRvdFdhbGxldCh7IG9uTW9kdWxlc0ZldGNoZWQgfTogeyBvbk1vZHVsZXNGZXRjaGVkOiAoZGF0YTogYW55KSA9PiB2b2lkIH0pIHtcbiAgY29uc3QgW2FjY291bnRzLCBzZXRBY2NvdW50c10gPSB1c2VTdGF0ZTxJbmplY3RlZEFjY291bnRXaXRoTWV0YVtdPihbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZEFjY291bnQsIHNldFNlbGVjdGVkQWNjb3VudF0gPSB1c2VTdGF0ZTxJbmplY3RlZEFjY291bnRXaXRoTWV0YSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbW9kdWxlTmFtZXMsIHNldE1vZHVsZU5hbWVzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBjb25uZWN0V2FsbGV0KCkge1xuICAgICAgY29uc3QgZXh0ZW5zaW9ucyA9IGF3YWl0IHdlYjNFbmFibGUoXCJNeUFwcFwiKTtcbiAgICAgIGlmIChleHRlbnNpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgYWxsQWNjb3VudHMgPSBhd2FpdCB3ZWIzQWNjb3VudHMoKTtcbiAgICAgICAgc2V0QWNjb3VudHMoYWxsQWNjb3VudHMgYXMgSW5qZWN0ZWRBY2NvdW50V2l0aE1ldGFbXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29ubmVjdFdhbGxldCgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQWNjb3VudFNlbGVjdGlvbiA9IChhY2NvdW50SW5kZXg6IG51bWJlcikgPT4ge1xuICAgIHNldFNlbGVjdGVkQWNjb3VudChhY2NvdW50c1thY2NvdW50SW5kZXhdKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQb3N0UmVxdWVzdCA9ICgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRBY2NvdW50KSB7XG4gICAgICBwb3N0UmVxdWVzdChzZWxlY3RlZEFjY291bnQsIChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVzcG9uc2UgZGF0YTpcIiwgZGF0YSk7XG4gICAgICAgIG9uTW9kdWxlc0ZldGNoZWQoZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7fX0+Q29ubmVjdDwvYnV0dG9uPlxuICAgICAge2FjY291bnRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQWNjb3VudFNlbGVjdGlvbihwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApKX0+XG4gICAgICAgICAge2FjY291bnRzLm1hcCgoYWNjb3VudCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2luZGV4fT5cbiAgICAgICAgICAgICAge2FjY291bnQubWV0YS5uYW1lfSAoe2FjY291bnQuYWRkcmVzc30pXG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8b3B0aW9uIGhpZGRlbiBkaXNhYmxlZCBzZWxlY3RlZD5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIHNlbGVjdCBhY2NvdW50e1wiIFwifVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICl9XG4gICAgICB7c2VsZWN0ZWRBY2NvdW50ICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD5BY2NvdW50IE5hbWU6IHtzZWxlY3RlZEFjY291bnQubWV0YS5uYW1lfTwvcD5cbiAgICAgICAgICA8cD5BY2NvdW50IEFkZHJlc3M6IHtzZWxlY3RlZEFjY291bnQuYWRkcmVzc308L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlUG9zdFJlcXVlc3R9PlNlbmQgUE9TVCByZXF1ZXN0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIndlYjNFbmFibGUiLCJ3ZWIzQWNjb3VudHMiLCJwb3N0UmVxdWVzdCIsIlBvbGthZG90V2FsbGV0Iiwib25Nb2R1bGVzRmV0Y2hlZCIsImFjY291bnRzIiwic2V0QWNjb3VudHMiLCJzZWxlY3RlZEFjY291bnQiLCJzZXRTZWxlY3RlZEFjY291bnQiLCJtb2R1bGVOYW1lcyIsInNldE1vZHVsZU5hbWVzIiwiY29ubmVjdFdhbGxldCIsImV4dGVuc2lvbnMiLCJsZW5ndGgiLCJhbGxBY2NvdW50cyIsImhhbmRsZUFjY291bnRTZWxlY3Rpb24iLCJhY2NvdW50SW5kZXgiLCJoYW5kbGVQb3N0UmVxdWVzdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsInNlbGVjdCIsIm9uQ2hhbmdlIiwiZSIsInBhcnNlSW50IiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJhY2NvdW50IiwiaW5kZXgiLCJvcHRpb24iLCJtZXRhIiwibmFtZSIsImFkZHJlc3MiLCJoaWRkZW4iLCJkaXNhYmxlZCIsInNlbGVjdGVkIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/PolkadotWallet.tsx\n"));

/***/ })

});