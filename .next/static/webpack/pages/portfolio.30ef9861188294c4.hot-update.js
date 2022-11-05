"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/portfolio",{

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Portfolio; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet */ \"./node_modules/grommet/es6/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/firebaseConfig */ \"./utils/firebaseConfig.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Portfolio() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), tracked = ref[0], setTracked = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), previous = ref1[0], setPrevious = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(fetchTracked, []);\n    function fetchTracked() {\n        return _fetchTracked.apply(this, arguments);\n    }\n    function _fetchTracked() {\n        _fetchTracked = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var snapshot, res, currentTracked, previousTracked;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__.db, \"tracked\"))\n                        ];\n                    case 1:\n                        snapshot = _state.sent();\n                        res = snapshot.docs.map(function(doc) {\n                            return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n                                id: doc.id\n                            }, doc.data());\n                        });\n                        currentTracked = res.filter(function(doc) {\n                            return !doc.endTimestamp;\n                        })[0];\n                        previousTracked = res.filter(function(doc) {\n                            return doc.endTimestamp;\n                        });\n                        setPrevious(previousTracked);\n                        if (!currentTracked) {\n                            setTracked(false);\n                        } else {\n                            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__.db, \"coins\", currentTracked.coinId), function(doc) {\n                                return setTracked((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, currentTracked, doc.data()));\n                            });\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _fetchTracked.apply(this, arguments);\n    }\n    var data = [\n        {\n            date: 1667517693987,\n            amount: 2067.5\n        },\n        {\n            date: 1667517703987,\n            amount: 2068.6\n        },\n        {\n            date: 1667517713987,\n            amount: 2065.3\n        },\n        {\n            date: 1667517723987,\n            amount: 2062.7\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        }, \n    ];\n    console.log({\n        tracked: tracked,\n        previous: previous\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.Grommet, {\n        full: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.Box, {\n            pad: \"medium\",\n            gap: \"medium\",\n            children: [\n                tracked === false && \"No Tracked Coin\",\n                tracked && tracked.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"Currently Tracking: \",\n                                tracked.coinId\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.DataChart, {\n                                data: tracked.priceHistory.map(function(x) {\n                                    var date = new Date(x.date * 1000);\n                                    x.date = \"\".concat(date.toLocaleDateString(), \" \").concat(date.toLocaleTimeString());\n                                    return x;\n                                }),\n                                series: [\n                                    \"date\",\n                                    {\n                                        property: \"price\",\n                                        prefix: \"€\"\n                                    }\n                                ],\n                                chart: [\n                                    {\n                                        property: \"price\",\n                                        type: \"line\",\n                                        thickness: \"xsmall\",\n                                        round: true\n                                    },\n                                    {\n                                        property: \"price\",\n                                        type: \"area\",\n                                        opacity: \"medium\",\n                                        thickness: \"xsmall\"\n                                    }, \n                                ],\n                                style: {\n                                    maxWidth: \"max-content\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(Portfolio, \"1dTKgrdOw3Jf2F64iafR94kbw40=\");\n_c = Portfolio;\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxJQUFJLENBQUM7b0NBQ3BDVSxDQUFDLENBQUNWLElBQUksR0FBRyxFQUFDLENBQStCQSxNQUF5QixDQUF0REEsSUFBSSxDQUFDWSxrQkFBa0IsRUFBRSxFQUFDLEdBQUMsQ0FBNEIsUUFBMUJaLElBQUksQ0FBQ2Esa0JBQWtCLEVBQUUsQ0FBRTtvQ0FDcEUsT0FBT0gsQ0FBQztnQ0FDVixDQUFDLENBQUM7Z0NBQ0ZJLE1BQU0sRUFBRTtvQ0FBQyxNQUFNO29DQUFFO3dDQUFFQyxRQUFRLEVBQUUsT0FBTzt3Q0FBRUMsTUFBTSxFQUFFLEdBQUc7cUNBQUU7aUNBQUM7Z0NBQ3BEQyxLQUFLLEVBQUU7b0NBQ0w7d0NBQUVGLFFBQVEsRUFBRSxPQUFPO3dDQUFFRyxJQUFJLEVBQUUsTUFBTTt3Q0FBRUMsU0FBUyxFQUFFLFFBQVE7d0NBQUVDLEtBQUssRUFBRSxJQUFJO3FDQUFFO29DQUNyRTt3Q0FBRUwsUUFBUSxFQUFFLE9BQU87d0NBQUVHLElBQUksRUFBRSxNQUFNO3dDQUFFRyxPQUFPLEVBQUUsUUFBUTt3Q0FBRUYsU0FBUyxFQUFFLFFBQVE7cUNBQUU7aUNBQzVFO2dDQUNERyxLQUFLLEVBQUU7b0NBQUVDLFFBQVEsRUFBRSxhQUFhO2lDQUFFOzs7OztvQ0FDbEM7Ozs7O2dDQUNFOztnQ0FDTDs7Ozs7O2dCQUVEOzs7OztZQUNFLENBQ1g7QUFDSCxDQUFDO0dBM0V1QnhDLFNBQVM7QUFBVEEsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3J0Zm9saW8uanM/NTYwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2xsZWN0aW9uLCBkb2MsIGdldERvYywgZ2V0RG9jcywgb25TbmFwc2hvdCwgcXVlcnksIHdoZXJlIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJ1xuaW1wb3J0IHsgR3JvbW1ldCwgQm94LCBDYXJkLCBDYXJkSGVhZGVyLCBDYXJkRm9vdGVyLCBEYXRhQ2hhcnQgfSBmcm9tICdncm9tbWV0J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi91dGlscy9maXJlYmFzZUNvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ydGZvbGlvKCkge1xuICBjb25zdCBbdHJhY2tlZCwgc2V0VHJhY2tlZF0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtwcmV2aW91cywgc2V0UHJldmlvdXNdID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KGZldGNoVHJhY2tlZCwgW10pXG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUcmFja2VkKCkge1xuICAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBcInRyYWNrZWRcIikpXG4gICAgY29uc3QgcmVzID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+ICh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSkpXG4gICAgY29uc3QgY3VycmVudFRyYWNrZWQgPSByZXMuZmlsdGVyKGRvYyA9PiAhZG9jLmVuZFRpbWVzdGFtcClbMF1cbiAgICBjb25zdCBwcmV2aW91c1RyYWNrZWQgPSByZXMuZmlsdGVyKGRvYyA9PiBkb2MuZW5kVGltZXN0YW1wKVxuXG4gICAgc2V0UHJldmlvdXMocHJldmlvdXNUcmFja2VkKVxuXG4gICAgaWYgKCFjdXJyZW50VHJhY2tlZCkge1xuICAgICAgc2V0VHJhY2tlZChmYWxzZSlcbiAgICB9IGVsc2Uge1xuICAgICAgb25TbmFwc2hvdChkb2MoZGIsICdjb2lucycsIGN1cnJlbnRUcmFja2VkLmNvaW5JZCksXG4gICAgICAgIGRvYyA9PiBzZXRUcmFja2VkKHsgLi4uY3VycmVudFRyYWNrZWQsIC4uLmRvYy5kYXRhKCkgfSlcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBjb25zdCBkYXRhID0gW1xuICAgIHsgZGF0ZTogMTY2NzUxNzY5Mzk4NywgYW1vdW50OiAyMDY3LjUgfSxcbiAgICB7IGRhdGU6IDE2Njc1MTc3MDM5ODcsIGFtb3VudDogMjA2OC42IH0sXG4gICAgeyBkYXRlOiAxNjY3NTE3NzEzOTg3LCBhbW91bnQ6IDIwNjUuMyB9LFxuICAgIHsgZGF0ZTogMTY2NzUxNzcyMzk4NywgYW1vdW50OiAyMDYyLjcgfSxcbiAgICB7IGRhdGU6IDE2Njc1MTc3MzM5ODcsIGFtb3VudDogMjA2NC4yIH0sXG4gICAgeyBkYXRlOiAxNjY3NTE3NzMzOTg3LCBhbW91bnQ6IDIwNjQuMiB9LFxuICAgIHsgZGF0ZTogMTY2NzUxNzczMzk4NywgYW1vdW50OiAyMDY0LjIgfSxcbiAgICB7IGRhdGU6IDE2Njc1MTc3MzM5ODcsIGFtb3VudDogMjA2NC4yIH0sXG4gICAgeyBkYXRlOiAxNjY3NTE3NzMzOTg3LCBhbW91bnQ6IDIwNjQuMiB9LFxuICAgIHsgZGF0ZTogMTY2NzUxNzczMzk4NywgYW1vdW50OiAyMDY0LjIgfSxcbiAgICB7IGRhdGU6IDE2Njc1MTc3MzM5ODcsIGFtb3VudDogMjA2NC4yIH0sXG4gICAgeyBkYXRlOiAxNjY3NTE3NzMzOTg3LCBhbW91bnQ6IDIwNjQuMiB9LFxuICAgIHsgZGF0ZTogMTY2NzUxNzczMzk4NywgYW1vdW50OiAyMDY0LjIgfSxcbiAgICB7IGRhdGU6IDE2Njc1MTc3MzM5ODcsIGFtb3VudDogMjA2NC4yIH0sXG4gICAgeyBkYXRlOiAxNjY3NTE3NzMzOTg3LCBhbW91bnQ6IDIwNjQuMiB9LFxuICAgIHsgZGF0ZTogMTY2NzUxNzczMzk4NywgYW1vdW50OiAyMDY0LjIgfSxcbiAgICB7IGRhdGU6IDE2Njc1MTc3MzM5ODcsIGFtb3VudDogMjA2NC4yIH0sXG4gICAgeyBkYXRlOiAxNjY3NTE3NzMzOTg3LCBhbW91bnQ6IDIwNjQuMiB9LFxuICBdXG5cbiAgY29uc29sZS5sb2coeyB0cmFja2VkLCBwcmV2aW91cyB9KVxuXG4gIHJldHVybiAoXG4gICAgPEdyb21tZXQgZnVsbD5cbiAgICAgIDxCb3ggcGFkPSdtZWRpdW0nIGdhcD0nbWVkaXVtJz5cbiAgICAgICAge3RyYWNrZWQgPT09IGZhbHNlICYmIChcbiAgICAgICAgICBcIk5vIFRyYWNrZWQgQ29pblwiXG4gICAgICAgICl9XG4gICAgICAgIHt0cmFja2VkICYmIHRyYWNrZWQubGVuZ3RoICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgxPkN1cnJlbnRseSBUcmFja2luZzoge3RyYWNrZWQuY29pbklkfTwvaDE+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8RGF0YUNoYXJ0XG4gICAgICAgICAgICAgICAgZGF0YT17dHJhY2tlZC5wcmljZUhpc3RvcnkubWFwKHggPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHguZGF0ZSAqIDEwMDApXG4gICAgICAgICAgICAgICAgICB4LmRhdGUgPSBgJHtkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpfSAke2RhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCl9YFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHhcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICBzZXJpZXM9e1tcImRhdGVcIiwgeyBwcm9wZXJ0eTogXCJwcmljZVwiLCBwcmVmaXg6IFwi4oKsXCIgfV19XG4gICAgICAgICAgICAgICAgY2hhcnQ9e1tcbiAgICAgICAgICAgICAgICAgIHsgcHJvcGVydHk6IFwicHJpY2VcIiwgdHlwZTogXCJsaW5lXCIsIHRoaWNrbmVzczogXCJ4c21hbGxcIiwgcm91bmQ6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgIHsgcHJvcGVydHk6IFwicHJpY2VcIiwgdHlwZTogXCJhcmVhXCIsIG9wYWNpdHk6IFwibWVkaXVtXCIsIHRoaWNrbmVzczogXCJ4c21hbGxcIiB9LFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICdtYXgtY29udGVudCcgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfSAgICAgICAgXG4gICAgICA8L0JveD5cbiAgICA8L0dyb21tZXQ+XG4gIClcbn0iXSwibmFtZXMiOlsiY29sbGVjdGlvbiIsImRvYyIsImdldERvYyIsImdldERvY3MiLCJvblNuYXBzaG90IiwicXVlcnkiLCJ3aGVyZSIsIkdyb21tZXQiLCJCb3giLCJDYXJkIiwiQ2FyZEhlYWRlciIsIkNhcmRGb290ZXIiLCJEYXRhQ2hhcnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImRiIiwiUG9ydGZvbGlvIiwidHJhY2tlZCIsInNldFRyYWNrZWQiLCJwcmV2aW91cyIsInNldFByZXZpb3VzIiwiZmV0Y2hUcmFja2VkIiwic25hcHNob3QiLCJyZXMiLCJjdXJyZW50VHJhY2tlZCIsInByZXZpb3VzVHJhY2tlZCIsImRvY3MiLCJtYXAiLCJpZCIsImRhdGEiLCJmaWx0ZXIiLCJlbmRUaW1lc3RhbXAiLCJjb2luSWQiLCJkYXRlIiwiYW1vdW50IiwiY29uc29sZSIsImxvZyIsImZ1bGwiLCJwYWQiLCJnYXAiLCJsZW5ndGgiLCJoMSIsInByaWNlSGlzdG9yeSIsIngiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwic2VyaWVzIiwicHJvcGVydHkiLCJwcmVmaXgiLCJjaGFydCIsInR5cGUiLCJ0aGlja25lc3MiLCJyb3VuZCIsIm9wYWNpdHkiLCJzdHlsZSIsIm1heFdpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/portfolio.js\n"));

/***/ })

});