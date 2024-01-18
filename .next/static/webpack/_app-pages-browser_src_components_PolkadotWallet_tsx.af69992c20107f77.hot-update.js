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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PolkadotWallet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _polkadot_extension_dapp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polkadot/extension-dapp */ \"(app-pages-browser)/../node_modules/@polkadot/extension-dapp/bundle.js\");\n/* harmony import */ var _services_ApiCalls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ApiCalls */ \"(app-pages-browser)/./src/services/ApiCalls.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PolkadotWallet(param) {\n    let { onModulesFetched } = param;\n    _s();\n    const [accounts, setAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedAccount, setSelectedAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    async function connectWallet() {\n        try {\n            const extensions = await (0,_polkadot_extension_dapp__WEBPACK_IMPORTED_MODULE_3__.web3Enable)(\"CommuneAI\");\n            if (extensions.length === 0) {\n                console.error(\"Install Polkadot wallet extension\");\n                return;\n            }\n            const allAccounts = await (0,_polkadot_extension_dapp__WEBPACK_IMPORTED_MODULE_3__.web3Accounts)();\n            setAccounts(allAccounts);\n        } catch (error) {\n            console.error(\"Error connecting to wallet\", error);\n        }\n    }\n    const handleConnectClick = ()=>{\n        connectWallet();\n    };\n    const handleAccountSelection = (accountIndex)=>{\n        setSelectedAccount(accounts[accountIndex]);\n    };\n    const handlePostRequest = ()=>{\n        if (selectedAccount) {\n            (0,_services_ApiCalls__WEBPACK_IMPORTED_MODULE_2__.postRequest)(selectedAccount, (data)=>{\n                console.log(\"Response data:\", data);\n                onModulesFetched(data);\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-neutral-100 flex items-center justify-center h-[20svh]\",\n        children: [\n            accounts.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-8 rounded-md shadow-lg flex flex-col gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \" Connect Wallet to Fetch Modules \"\n                    }, void 0, false, {\n                        fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleConnectClick,\n                        className: \"rounded-md px-4 py-2 bg-neutral-800 text-white \",\n                        children: \"Connect\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this),\n            accounts.length > 0 && !selectedAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    onChange: (e)=>handleAccountSelection(parseInt(e.target.value, 10)),\n                    className: \"rounded-md\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"\",\n                            hidden: true,\n                            disabled: true,\n                            selected: true,\n                            children: \"Choose your account\"\n                        }, \"empty\", false, {\n                            fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this),\n                        accounts.map((account, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: index,\n                                children: [\n                                    account.meta.name,\n                                    \" (\",\n                                    account.address,\n                                    \")\"\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false) : null,\n            selectedAccount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-8 rounded-md shadow-lg flex flex-col gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Account Name: \",\n                            selectedAccount.meta.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Account Address: \",\n                            selectedAccount.address\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handlePostRequest,\n                        className: \"rounded-md px-4 py-2 bg-neutral-800 text-white \",\n                        children: \"Fetch Modules\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dev3/web3/commune/frontend2/src/components/PolkadotWallet.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(PolkadotWallet, \"Bb3GxFd4lRoIQ2nFeXOtmuh4F5E=\");\n_c = PolkadotWallet;\nvar _c;\n$RefreshReg$(_c, \"PolkadotWallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1BvbGthZG90V2FsbGV0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNpQjtBQUVqQjtBQUdwQyxTQUFTSyxlQUFlLEtBQStEO1FBQS9ELEVBQUVDLGdCQUFnQixFQUE2QyxHQUEvRDs7SUFDckMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUE0QixFQUFFO0lBQ3RFLE1BQU0sQ0FBQ1EsaUJBQWlCQyxtQkFBbUIsR0FBR1QsK0NBQVFBLENBQWlDO0lBRXZGLGVBQWVVO1FBQ2IsSUFBSTtZQUNGLE1BQU1DLGFBQWEsTUFBTVYsb0VBQVVBLENBQUM7WUFDcEMsSUFBSVUsV0FBV0MsTUFBTSxLQUFLLEdBQUc7Z0JBQzNCQyxRQUFRQyxLQUFLLENBQUM7Z0JBQ2Q7WUFDRjtZQUVBLE1BQU1DLGNBQWMsTUFBTWIsc0VBQVlBO1lBQ3RDSyxZQUFZUTtRQUNkLEVBQUUsT0FBT0QsT0FBTztZQUNkRCxRQUFRQyxLQUFLLENBQUMsOEJBQThCQTtRQUM5QztJQUNGO0lBRUEsTUFBTUUscUJBQXFCO1FBQ3pCTjtJQUNGO0lBRUEsTUFBTU8seUJBQXlCLENBQUNDO1FBQzlCVCxtQkFBbUJILFFBQVEsQ0FBQ1ksYUFBYTtJQUMzQztJQUVBLE1BQU1DLG9CQUFvQjtRQUN4QixJQUFJWCxpQkFBaUI7WUFDbkJMLCtEQUFXQSxDQUFDSyxpQkFBaUIsQ0FBQ1k7Z0JBQzVCUCxRQUFRUSxHQUFHLENBQUMsa0JBQWtCRDtnQkFDOUJmLGlCQUFpQmU7WUFDbkI7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7O1lBQ1pqQixTQUFTTSxNQUFNLEtBQUssbUJBQ25CLDhEQUFDVTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO2tDQUFFOzs7Ozs7a0NBQ0gsOERBQUNDO3dCQUFPQyxTQUFTVjt3QkFBb0JPLFdBQVU7a0NBQWtEOzs7Ozs7Ozs7Ozs7WUFNcEdqQixTQUFTTSxNQUFNLEdBQUcsS0FBSyxDQUFDSixnQ0FDdkI7MEJBQ0UsNEVBQUNtQjtvQkFBT0MsVUFBVSxDQUFDQyxJQUFNWix1QkFBdUJhLFNBQVNELEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO29CQUFNVCxXQUFVOztzQ0FDdkYsOERBQUNVOzRCQUFPRCxPQUFNOzRCQUFlRSxNQUFNOzRCQUFDQyxRQUFROzRCQUFDQyxRQUFRO3NDQUFDOzJCQUFqQzs7Ozs7d0JBR3BCOUIsU0FBUytCLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdEIsOERBQUNOO2dDQUFtQkQsT0FBT087O29DQUN4QkQsUUFBUUUsSUFBSSxDQUFDQyxJQUFJO29DQUFDO29DQUFHSCxRQUFRSSxPQUFPO29DQUFDOzsrQkFEM0JIOzs7Ozs7Ozs7OztnQ0FNakI7WUFDSC9CLGlDQUNDLDhEQUFDYztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDOzs0QkFBRTs0QkFBZWhCLGdCQUFnQmdDLElBQUksQ0FBQ0MsSUFBSTs7Ozs7OztrQ0FDM0MsOERBQUNqQjs7NEJBQUU7NEJBQWtCaEIsZ0JBQWdCa0MsT0FBTzs7Ozs7OztrQ0FDNUMsOERBQUNqQjt3QkFBT0MsU0FBU1A7d0JBQW1CSSxXQUFVO2tDQUFrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzFHO0dBeEV3Qm5CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BvbGthZG90V2FsbGV0LnRzeD81YmQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3ZWIzRW5hYmxlLCB3ZWIzQWNjb3VudHMgfSBmcm9tIFwiQHBvbGthZG90L2V4dGVuc2lvbi1kYXBwXCI7XG5pbXBvcnQgeyBJbmplY3RlZEFjY291bnRXaXRoTWV0YSB9IGZyb20gXCJAcG9sa2Fkb3QvZXh0ZW5zaW9uLWluamVjdC90eXBlc1wiO1xuaW1wb3J0IHsgcG9zdFJlcXVlc3QgfSBmcm9tIFwiLi4vc2VydmljZXMvQXBpQ2FsbHNcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwiaHR0cDJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9sa2Fkb3RXYWxsZXQoeyBvbk1vZHVsZXNGZXRjaGVkIH06IHsgb25Nb2R1bGVzRmV0Y2hlZDogKGRhdGE6IGFueSkgPT4gdm9pZCB9KSB7XG4gIGNvbnN0IFthY2NvdW50cywgc2V0QWNjb3VudHNdID0gdXNlU3RhdGU8SW5qZWN0ZWRBY2NvdW50V2l0aE1ldGFbXT4oW10pO1xuICBjb25zdCBbc2VsZWN0ZWRBY2NvdW50LCBzZXRTZWxlY3RlZEFjY291bnRdID0gdXNlU3RhdGU8SW5qZWN0ZWRBY2NvdW50V2l0aE1ldGEgfCBudWxsPihudWxsKTtcblxuICBhc3luYyBmdW5jdGlvbiBjb25uZWN0V2FsbGV0KCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleHRlbnNpb25zID0gYXdhaXQgd2ViM0VuYWJsZShcIkNvbW11bmVBSVwiKTtcbiAgICAgIGlmIChleHRlbnNpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiSW5zdGFsbCBQb2xrYWRvdCB3YWxsZXQgZXh0ZW5zaW9uXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFsbEFjY291bnRzID0gYXdhaXQgd2ViM0FjY291bnRzKCk7XG4gICAgICBzZXRBY2NvdW50cyhhbGxBY2NvdW50cyBhcyBJbmplY3RlZEFjY291bnRXaXRoTWV0YVtdKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gd2FsbGV0XCIsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVDb25uZWN0Q2xpY2sgPSAoKSA9PiB7XG4gICAgY29ubmVjdFdhbGxldCgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFjY291bnRTZWxlY3Rpb24gPSAoYWNjb3VudEluZGV4OiBudW1iZXIpID0+IHtcbiAgICBzZXRTZWxlY3RlZEFjY291bnQoYWNjb3VudHNbYWNjb3VudEluZGV4XSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUG9zdFJlcXVlc3QgPSAoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkQWNjb3VudCkge1xuICAgICAgcG9zdFJlcXVlc3Qoc2VsZWN0ZWRBY2NvdW50LCAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3BvbnNlIGRhdGE6XCIsIGRhdGEpO1xuICAgICAgICBvbk1vZHVsZXNGZXRjaGVkKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1uZXV0cmFsLTEwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLVsyMHN2aF1cIj5cbiAgICAgIHthY2NvdW50cy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOCByb3VuZGVkLW1kIHNoYWRvdy1sZyBmbGV4IGZsZXgtY29sIGdhcC00XCI+XG4gICAgICAgICAgPHA+IENvbm5lY3QgV2FsbGV0IHRvIEZldGNoIE1vZHVsZXMgPC9wPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ29ubmVjdENsaWNrfSBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIHB4LTQgcHktMiBiZy1uZXV0cmFsLTgwMCB0ZXh0LXdoaXRlIFwiPlxuICAgICAgICAgICAgQ29ubmVjdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHthY2NvdW50cy5sZW5ndGggPiAwICYmICFzZWxlY3RlZEFjY291bnQgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUFjY291bnRTZWxlY3Rpb24ocGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKSl9IGNsYXNzTmFtZT1cInJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBrZXk9XCJlbXB0eVwiIGhpZGRlbiBkaXNhYmxlZCBzZWxlY3RlZD5cbiAgICAgICAgICAgICAgQ2hvb3NlIHlvdXIgYWNjb3VudFxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICB7YWNjb3VudHMubWFwKChhY2NvdW50LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtpbmRleH0+XG4gICAgICAgICAgICAgICAge2FjY291bnQubWV0YS5uYW1lfSAoe2FjY291bnQuYWRkcmVzc30pXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7c2VsZWN0ZWRBY2NvdW50ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTggcm91bmRlZC1tZCBzaGFkb3ctbGcgZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgICAgIDxwPkFjY291bnQgTmFtZToge3NlbGVjdGVkQWNjb3VudC5tZXRhLm5hbWV9PC9wPlxuICAgICAgICAgIDxwPkFjY291bnQgQWRkcmVzczoge3NlbGVjdGVkQWNjb3VudC5hZGRyZXNzfTwvcD5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVBvc3RSZXF1ZXN0fSBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIHB4LTQgcHktMiBiZy1uZXV0cmFsLTgwMCB0ZXh0LXdoaXRlIFwiPlxuICAgICAgICAgICAgRmV0Y2ggTW9kdWxlc1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIndlYjNFbmFibGUiLCJ3ZWIzQWNjb3VudHMiLCJwb3N0UmVxdWVzdCIsIlBvbGthZG90V2FsbGV0Iiwib25Nb2R1bGVzRmV0Y2hlZCIsImFjY291bnRzIiwic2V0QWNjb3VudHMiLCJzZWxlY3RlZEFjY291bnQiLCJzZXRTZWxlY3RlZEFjY291bnQiLCJjb25uZWN0V2FsbGV0IiwiZXh0ZW5zaW9ucyIsImxlbmd0aCIsImNvbnNvbGUiLCJlcnJvciIsImFsbEFjY291bnRzIiwiaGFuZGxlQ29ubmVjdENsaWNrIiwiaGFuZGxlQWNjb3VudFNlbGVjdGlvbiIsImFjY291bnRJbmRleCIsImhhbmRsZVBvc3RSZXF1ZXN0IiwiZGF0YSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9wdGlvbiIsImhpZGRlbiIsImRpc2FibGVkIiwic2VsZWN0ZWQiLCJtYXAiLCJhY2NvdW50IiwiaW5kZXgiLCJtZXRhIiwibmFtZSIsImFkZHJlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/PolkadotWallet.tsx\n"));

/***/ })

});