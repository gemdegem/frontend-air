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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PolkadotWallet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _polkadot_extension_dapp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polkadot/extension-dapp */ \"(app-pages-browser)/../node_modules/@polkadot/extension-dapp/bundle.js\");\n/* harmony import */ var _services_ApiCalls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ApiCalls */ \"(app-pages-browser)/./src/services/ApiCalls.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PolkadotWallet(param) {\n    let { onModulesFetched } = param;\n    _s();\n    const [accounts, setAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedAccount, setSelectedAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    async function connectWallet() {\n        try {\n            const extensions = await (0,_polkadot_extension_dapp__WEBPACK_IMPORTED_MODULE_3__.web3Enable)(\"CommuneAI\");\n            if (extensions.length === 0) {\n                console.error(\"Install Polkadot wallet extension\");\n                return;\n            }\n            const allAccounts = await (0,_polkadot_extension_dapp__WEBPACK_IMPORTED_MODULE_3__.web3Accounts)();\n            setAccounts(allAccounts);\n        } catch (error) {\n            console.error(\"Error connecting to wallet\", error);\n        }\n    }\n    const handleConnectClick = ()=>{\n        connectWallet();\n    };\n    const handleAccountSelection = (accountIndex)=>{\n        setSelectedAccount(accounts[accountIndex]);\n    };\n    const handlePostRequest = ()=>{\n        if (selectedAccount) {\n            (0,_services_ApiCalls__WEBPACK_IMPORTED_MODULE_2__.postRequest)(selectedAccount, (data)=>{\n                console.log(\"Response data:\", data);\n                onModulesFetched(data);\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-neutral-100 flex items-center justify-center h-[20svh]\",\n        children: [\n            accounts.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleConnectClick,\n                className: \"rounded-md px-4 py-2 bg-neutral-800 text-white \",\n                children: \"Connect\"\n            }, void 0, false, {\n                fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this),\n            accounts.length > 0 && !selectedAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    onChange: (e)=>handleAccountSelection(parseInt(e.target.value, 10)),\n                    className: \"rounded-md\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"\",\n                            hidden: true,\n                            disabled: true,\n                            selected: true,\n                            children: \"Choose your account\"\n                        }, \"empty\", false, {\n                            fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, this),\n                        accounts.map((account, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: index,\n                                children: [\n                                    account.meta.name,\n                                    \" (\",\n                                    account.address,\n                                    \")\"\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 15\n                            }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false) : null,\n            selectedAccount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-8 rounded-md shadow-lg flex flex-col gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Account Name: \",\n                            selectedAccount.meta.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Account Address: \",\n                            selectedAccount.address\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handlePostRequest,\n                        className: \"rounded-md px-4 py-2 bg-neutral-800 text-white \",\n                        children: \"Fetch Modules\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(PolkadotWallet, \"Bb3GxFd4lRoIQ2nFeXOtmuh4F5E=\");\n_c = PolkadotWallet;\nvar _c;\n$RefreshReg$(_c, \"PolkadotWallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1BvbGthZG90V2FsbGV0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNpQjtBQUVqQjtBQUdwQyxTQUFTSyxlQUFlLEtBQStEO1FBQS9ELEVBQUVDLGdCQUFnQixFQUE2QyxHQUEvRDs7SUFDckMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUE0QixFQUFFO0lBQ3RFLE1BQU0sQ0FBQ1EsaUJBQWlCQyxtQkFBbUIsR0FBR1QsK0NBQVFBLENBQWlDO0lBRXZGLGVBQWVVO1FBQ2IsSUFBSTtZQUNGLE1BQU1DLGFBQWEsTUFBTVYsb0VBQVVBLENBQUM7WUFDcEMsSUFBSVUsV0FBV0MsTUFBTSxLQUFLLEdBQUc7Z0JBQzNCQyxRQUFRQyxLQUFLLENBQUM7Z0JBQ2Q7WUFDRjtZQUVBLE1BQU1DLGNBQWMsTUFBTWIsc0VBQVlBO1lBQ3RDSyxZQUFZUTtRQUNkLEVBQUUsT0FBT0QsT0FBTztZQUNkRCxRQUFRQyxLQUFLLENBQUMsOEJBQThCQTtRQUM5QztJQUNGO0lBRUEsTUFBTUUscUJBQXFCO1FBQ3pCTjtJQUNGO0lBRUEsTUFBTU8seUJBQXlCLENBQUNDO1FBQzlCVCxtQkFBbUJILFFBQVEsQ0FBQ1ksYUFBYTtJQUMzQztJQUVBLE1BQU1DLG9CQUFvQjtRQUN4QixJQUFJWCxpQkFBaUI7WUFDbkJMLCtEQUFXQSxDQUFDSyxpQkFBaUIsQ0FBQ1k7Z0JBQzVCUCxRQUFRUSxHQUFHLENBQUMsa0JBQWtCRDtnQkFDOUJmLGlCQUFpQmU7WUFDbkI7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7O1lBQ1pqQixTQUFTTSxNQUFNLEtBQUssbUJBQ25CLDhEQUFDWTtnQkFBT0MsU0FBU1Q7Z0JBQW9CTyxXQUFVOzBCQUFrRDs7Ozs7O1lBSWxHakIsU0FBU00sTUFBTSxHQUFHLEtBQUssQ0FBQ0osZ0NBQ3ZCOzBCQUNFLDRFQUFDa0I7b0JBQU9DLFVBQVUsQ0FBQ0MsSUFBTVgsdUJBQXVCWSxTQUFTRCxFQUFFRSxNQUFNLENBQUNDLEtBQUssRUFBRTtvQkFBTVIsV0FBVTs7c0NBQ3ZGLDhEQUFDUzs0QkFBT0QsT0FBTTs0QkFBZUUsTUFBTTs0QkFBQ0MsUUFBUTs0QkFBQ0MsUUFBUTtzQ0FBQzsyQkFBakM7Ozs7O3dCQUdwQjdCLFNBQVM4QixHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3RCLDhEQUFDTjtnQ0FBbUJELE9BQU9POztvQ0FDeEJELFFBQVFFLElBQUksQ0FBQ0MsSUFBSTtvQ0FBQztvQ0FBR0gsUUFBUUksT0FBTztvQ0FBQzs7K0JBRDNCSDs7Ozs7Ozs7Ozs7Z0NBTWpCO1lBQ0g5QixpQ0FDQyw4REFBQ2M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDbUI7OzRCQUFFOzRCQUFlbEMsZ0JBQWdCK0IsSUFBSSxDQUFDQyxJQUFJOzs7Ozs7O2tDQUMzQyw4REFBQ0U7OzRCQUFFOzRCQUFrQmxDLGdCQUFnQmlDLE9BQU87Ozs7Ozs7a0NBQzVDLDhEQUFDakI7d0JBQU9DLFNBQVNOO3dCQUFtQkksV0FBVTtrQ0FBa0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8xRztHQXBFd0JuQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qb2xrYWRvdFdhbGxldC50c3g/NWJkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2ViM0VuYWJsZSwgd2ViM0FjY291bnRzIH0gZnJvbSBcIkBwb2xrYWRvdC9leHRlbnNpb24tZGFwcFwiO1xuaW1wb3J0IHsgSW5qZWN0ZWRBY2NvdW50V2l0aE1ldGEgfSBmcm9tIFwiQHBvbGthZG90L2V4dGVuc2lvbi1pbmplY3QvdHlwZXNcIjtcbmltcG9ydCB7IHBvc3RSZXF1ZXN0IH0gZnJvbSBcIi4uL3NlcnZpY2VzL0FwaUNhbGxzXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcImh0dHAyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvbGthZG90V2FsbGV0KHsgb25Nb2R1bGVzRmV0Y2hlZCB9OiB7IG9uTW9kdWxlc0ZldGNoZWQ6IChkYXRhOiBhbnkpID0+IHZvaWQgfSkge1xuICBjb25zdCBbYWNjb3VudHMsIHNldEFjY291bnRzXSA9IHVzZVN0YXRlPEluamVjdGVkQWNjb3VudFdpdGhNZXRhW10+KFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkQWNjb3VudCwgc2V0U2VsZWN0ZWRBY2NvdW50XSA9IHVzZVN0YXRlPEluamVjdGVkQWNjb3VudFdpdGhNZXRhIHwgbnVsbD4obnVsbCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFdhbGxldCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXh0ZW5zaW9ucyA9IGF3YWl0IHdlYjNFbmFibGUoXCJDb21tdW5lQUlcIik7XG4gICAgICBpZiAoZXh0ZW5zaW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkluc3RhbGwgUG9sa2Fkb3Qgd2FsbGV0IGV4dGVuc2lvblwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhbGxBY2NvdW50cyA9IGF3YWl0IHdlYjNBY2NvdW50cygpO1xuICAgICAgc2V0QWNjb3VudHMoYWxsQWNjb3VudHMgYXMgSW5qZWN0ZWRBY2NvdW50V2l0aE1ldGFbXSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjb25uZWN0aW5nIHRvIHdhbGxldFwiLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ29ubmVjdENsaWNrID0gKCkgPT4ge1xuICAgIGNvbm5lY3RXYWxsZXQoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBY2NvdW50U2VsZWN0aW9uID0gKGFjY291bnRJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRBY2NvdW50KGFjY291bnRzW2FjY291bnRJbmRleF0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBvc3RSZXF1ZXN0ID0gKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZEFjY291bnQpIHtcbiAgICAgIHBvc3RSZXF1ZXN0KHNlbGVjdGVkQWNjb3VudCwgKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXNwb25zZSBkYXRhOlwiLCBkYXRhKTtcbiAgICAgICAgb25Nb2R1bGVzRmV0Y2hlZChkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbmV1dHJhbC0xMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1bMjBzdmhdXCI+XG4gICAgICB7YWNjb3VudHMubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDb25uZWN0Q2xpY2t9IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgcHgtNCBweS0yIGJnLW5ldXRyYWwtODAwIHRleHQtd2hpdGUgXCI+XG4gICAgICAgICAgQ29ubmVjdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgICB7YWNjb3VudHMubGVuZ3RoID4gMCAmJiAhc2VsZWN0ZWRBY2NvdW50ID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVBY2NvdW50U2VsZWN0aW9uKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCkpfSBjbGFzc05hbWU9XCJyb3VuZGVkLW1kXCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIga2V5PVwiZW1wdHlcIiBoaWRkZW4gZGlzYWJsZWQgc2VsZWN0ZWQ+XG4gICAgICAgICAgICAgIENob29zZSB5b3VyIGFjY291bnRcbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAge2FjY291bnRzLm1hcCgoYWNjb3VudCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIHthY2NvdW50Lm1ldGEubmFtZX0gKHthY2NvdW50LmFkZHJlc3N9KVxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8Lz5cbiAgICAgICkgOiBudWxsfVxuICAgICAge3NlbGVjdGVkQWNjb3VudCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC04IHJvdW5kZWQtbWQgc2hhZG93LWxnIGZsZXggZmxleC1jb2wgZ2FwLTRcIj5cbiAgICAgICAgICA8cD5BY2NvdW50IE5hbWU6IHtzZWxlY3RlZEFjY291bnQubWV0YS5uYW1lfTwvcD5cbiAgICAgICAgICA8cD5BY2NvdW50IEFkZHJlc3M6IHtzZWxlY3RlZEFjY291bnQuYWRkcmVzc308L3A+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQb3N0UmVxdWVzdH0gY2xhc3NOYW1lPVwicm91bmRlZC1tZCBweC00IHB5LTIgYmctbmV1dHJhbC04MDAgdGV4dC13aGl0ZSBcIj5cbiAgICAgICAgICAgIEZldGNoIE1vZHVsZXNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ3ZWIzRW5hYmxlIiwid2ViM0FjY291bnRzIiwicG9zdFJlcXVlc3QiLCJQb2xrYWRvdFdhbGxldCIsIm9uTW9kdWxlc0ZldGNoZWQiLCJhY2NvdW50cyIsInNldEFjY291bnRzIiwic2VsZWN0ZWRBY2NvdW50Iiwic2V0U2VsZWN0ZWRBY2NvdW50IiwiY29ubmVjdFdhbGxldCIsImV4dGVuc2lvbnMiLCJsZW5ndGgiLCJjb25zb2xlIiwiZXJyb3IiLCJhbGxBY2NvdW50cyIsImhhbmRsZUNvbm5lY3RDbGljayIsImhhbmRsZUFjY291bnRTZWxlY3Rpb24iLCJhY2NvdW50SW5kZXgiLCJoYW5kbGVQb3N0UmVxdWVzdCIsImRhdGEiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9wdGlvbiIsImhpZGRlbiIsImRpc2FibGVkIiwic2VsZWN0ZWQiLCJtYXAiLCJhY2NvdW50IiwiaW5kZXgiLCJtZXRhIiwibmFtZSIsImFkZHJlc3MiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/PolkadotWallet.tsx\n"));

/***/ })

});