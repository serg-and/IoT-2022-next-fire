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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Portfolio; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet */ \"./node_modules/grommet/es6/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/firebaseConfig */ \"./utils/firebaseConfig.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Portfolio() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), tracked = ref[0], setTracked = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), previous = ref1[0], setPrevious = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(/*#__PURE__*/ (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n        var snapshot, res, trackedCoin;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__.db, \"tracked\"))\n                    ];\n                case 1:\n                    snapshot = _state.sent();\n                    res = snapshot.docs.map(function(doc) {\n                        return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n                            id: doc.id\n                        }, doc.data());\n                    });\n                    trackedCoin = res.filter(function(doc) {\n                        return !doc.endTimestamp;\n                    })[0];\n                    fetchTracked(trackedCoin);\n                    return [\n                        2\n                    ];\n            }\n        });\n    // setTracked(res.filter(doc => !doc.endTimestamp)[0])\n    // setPrevious(res.filter(doc => doc.endTimestamp))\n    }), []);\n    function fetchTracked(trackedCoin) {\n        return _fetchTracked.apply(this, arguments);\n    }\n    function _fetchTracked() {\n        _fetchTracked = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(trackedCoin) {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                if (!trackedCoin) {\n                    setTracked(null);\n                } else {\n                    onSnapshot((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__.db, \"coins\", trackedCoin.id), function(doc) {\n                        return setTracked((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n                            id: doc.id\n                        }, trackedCoin, doc.data()));\n                    }, function(err) {\n                        return console.error(err);\n                    });\n                }\n                return [\n                    2\n                ];\n            });\n        });\n        return _fetchTracked.apply(this, arguments);\n    }\n    var data = [\n        {\n            date: 1667517693987,\n            amount: 2067.5\n        },\n        {\n            date: 1667517703987,\n            amount: 2068.6\n        },\n        {\n            date: 1667517713987,\n            amount: 2065.3\n        },\n        {\n            date: 1667517723987,\n            amount: 2062.7\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        }, \n    ];\n    console.log(tracked);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.Grommet, {\n        full: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.Box, {\n            pad: \"medium\",\n            gap: \"medium\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"My Tracked Coins\"\n                }, void 0, false, {\n                    fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"BTC - €5560.9 - 6.7%\"\n                }, void 0, false, {\n                    fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.DataChart, {\n                        data: data.map(function(x) {\n                            var date = new Date(x.date);\n                            x.date = \"\".concat(date.toLocaleDateString(), \" \").concat(date.toLocaleTimeString());\n                            return x;\n                        }),\n                        series: [\n                            \"date\",\n                            {\n                                property: \"amount\",\n                                prefix: \"€\"\n                            }\n                        ],\n                        chart: [\n                            {\n                                property: \"amount\",\n                                type: \"line\",\n                                thickness: \"xsmall\",\n                                round: true\n                            },\n                            {\n                                property: \"amount\",\n                                type: \"area\",\n                                opacity: \"medium\",\n                                thickness: \"xsmall\"\n                            }, \n                        ],\n                        style: {\n                            maxWidth: \"max-content\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(Portfolio, \"1dTKgrdOw3Jf2F64iafR94kbw40=\");\n_c = Portfolio;\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUNVLGtCQUFrQixFQUFFLEVBQUMsR0FBQyxDQUE0QixRQUExQlYsSUFBSSxDQUFDVyxrQkFBa0IsRUFBRSxDQUFFOzRCQUNwRSxPQUFPSCxDQUFDO3dCQUNWLENBQUMsQ0FBQzt3QkFDRkksTUFBTSxFQUFFOzRCQUFDLE1BQU07NEJBQUU7Z0NBQUVDLFFBQVEsRUFBRSxRQUFRO2dDQUFFQyxNQUFNLEVBQUUsR0FBRzs2QkFBRTt5QkFBQzt3QkFDckRDLEtBQUssRUFBRTs0QkFDTDtnQ0FBRUYsUUFBUSxFQUFFLFFBQVE7Z0NBQUVHLElBQUksRUFBRSxNQUFNO2dDQUFFQyxTQUFTLEVBQUUsUUFBUTtnQ0FBRUMsS0FBSyxFQUFFLElBQUk7NkJBQUU7NEJBQ3RFO2dDQUFFTCxRQUFRLEVBQUUsUUFBUTtnQ0FBRUcsSUFBSSxFQUFFLE1BQU07Z0NBQUVHLE9BQU8sRUFBRSxRQUFRO2dDQUFFRixTQUFTLEVBQUUsUUFBUTs2QkFBRTt5QkFDN0U7d0JBQ0RHLEtBQUssRUFBRTs0QkFBRUMsUUFBUSxFQUFFLGFBQWE7eUJBQUU7Ozs7OzRCQUNsQzs7Ozs7d0JBQ0U7Ozs7OztnQkFDRjs7Ozs7WUFDRSxDQUNYO0FBQ0gsQ0FBQztHQTFFdUJ4QyxTQUFTO0FBQVRBLEtBQUFBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9ydGZvbGlvLmpzPzU2MDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29sbGVjdGlvbiwgZG9jLCBnZXREb2NzIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJ1xuaW1wb3J0IHsgR3JvbW1ldCwgQm94LCBDYXJkLCBDYXJkSGVhZGVyLCBDYXJkRm9vdGVyLCBEYXRhQ2hhcnQgfSBmcm9tICdncm9tbWV0J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi91dGlscy9maXJlYmFzZUNvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ydGZvbGlvKCkge1xuICBjb25zdCBbdHJhY2tlZCwgc2V0VHJhY2tlZF0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtwcmV2aW91cywgc2V0UHJldmlvdXNdID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgXCJ0cmFja2VkXCIpKVxuICAgIGNvbnN0IHJlcyA9IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiAoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKVxuXG4gICAgY29uc3QgdHJhY2tlZENvaW4gPSByZXMuZmlsdGVyKGRvYyA9PiAhZG9jLmVuZFRpbWVzdGFtcClbMF1cbiAgICBmZXRjaFRyYWNrZWQodHJhY2tlZENvaW4pXG5cblxuICAgIC8vIHNldFRyYWNrZWQocmVzLmZpbHRlcihkb2MgPT4gIWRvYy5lbmRUaW1lc3RhbXApWzBdKVxuICAgIC8vIHNldFByZXZpb3VzKHJlcy5maWx0ZXIoZG9jID0+IGRvYy5lbmRUaW1lc3RhbXApKVxuICB9LCBbXSlcblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFRyYWNrZWQodHJhY2tlZENvaW4pIHtcbiAgICBpZiAoIXRyYWNrZWRDb2luKSB7XG4gICAgICBzZXRUcmFja2VkKG51bGwpXG4gICAgfSBlbHNlIHtcbiAgICAgIG9uU25hcHNob3QoZG9jKGRiLCAnY29pbnMnLCB0cmFja2VkQ29pbi5pZCksXG4gICAgICAgIGRvYyA9PiBzZXRUcmFja2VkKHsgaWQ6IGRvYy5pZCwgLi4udHJhY2tlZENvaW4sIC4uLmRvYy5kYXRhKCkgfSksXG4gICAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVycilcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBjb25zdCBkYXRhID0gW1xuICAgIHsgZGF0ZTogMTY2NzUxNzY5Mzk4NywgYW1vdW50OiAyMDY3LjUgfSxcbiAgICB7IGRhdGU6IDE2Njc1MTc3MDM5ODcsIGFtb3VudDogMjA2OC42IH0sXG4gICAgeyBkYXRlOiAxNjY3NTE3NzEzOTg3LCBhbW91bnQ6IDIwNjUuMyB9LFxuICAgIHsgZGF0ZTogMTY2NzUxNzcyMzk4NywgYW1vdW50OiAyMDYyLjcgfSxcbiAgICB7IGRhdGU6IDE2Njc1MTc3MzM5ODcsIGFtb3VudDogMjA2NC4yIH0sXG4gICAgeyBkYXRlOiAxNjY3NTE3NzMzOTg3LCBhbW91bnQ6IDIwNjQuMiB9LFxuICAgIHsgZGF0ZTogMTY2NzUxNzczMzk4NywgYW1vdW50OiAyMDY0LjIgfSxcbiAgICB7IGRhdGU6IDE2Njc1MTc3MzM5ODcsIGFtb3VudDogMjA2NC4yIH0sXG4gICAgeyBkYXRlOiAxNjY3NTE3NzMzOTg3LCBhbW91bnQ6IDIwNjQuMiB9LFxuICAgIHsgZGF0ZTogMTY2NzUxNzczMzk4NywgYW1vdW50OiAyMDY0LjIgfSxcbiAgICB7IGRhdGU6IDE2Njc1MTc3MzM5ODcsIGFtb3VudDogMjA2NC4yIH0sXG4gICAgeyBkYXRlOiAxNjY3NTE3NzMzOTg3LCBhbW91bnQ6IDIwNjQuMiB9LFxuICAgIHsgZGF0ZTogMTY2NzUxNzczMzk4NywgYW1vdW50OiAyMDY0LjIgfSxcbiAgICB7IGRhdGU6IDE2Njc1MTc3MzM5ODcsIGFtb3VudDogMjA2NC4yIH0sXG4gICAgeyBkYXRlOiAxNjY3NTE3NzMzOTg3LCBhbW91bnQ6IDIwNjQuMiB9LFxuICAgIHsgZGF0ZTogMTY2NzUxNzczMzk4NywgYW1vdW50OiAyMDY0LjIgfSxcbiAgICB7IGRhdGU6IDE2Njc1MTc3MzM5ODcsIGFtb3VudDogMjA2NC4yIH0sXG4gICAgeyBkYXRlOiAxNjY3NTE3NzMzOTg3LCBhbW91bnQ6IDIwNjQuMiB9LFxuICBdXG5cbiAgY29uc29sZS5sb2codHJhY2tlZClcblxuICByZXR1cm4gKFxuICAgIDxHcm9tbWV0IGZ1bGw+XG4gICAgICA8Qm94IHBhZD0nbWVkaXVtJyBnYXA9J21lZGl1bSc+XG4gICAgICAgIDxoMT5NeSBUcmFja2VkIENvaW5zPC9oMT5cbiAgICAgICAgPGRpdj5CVEMgLSDigqw1NTYwLjkgLSA2LjclPC9kaXY+XG5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8RGF0YUNoYXJ0XG4gICAgICAgICAgICBkYXRhPXtkYXRhLm1hcCh4ID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHguZGF0ZSlcbiAgICAgICAgICAgICAgeC5kYXRlID0gYCR7ZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKX0gJHtkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpfWBcbiAgICAgICAgICAgICAgcmV0dXJuIHhcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgc2VyaWVzPXtbXCJkYXRlXCIsIHsgcHJvcGVydHk6IFwiYW1vdW50XCIsIHByZWZpeDogXCLigqxcIiB9XX1cbiAgICAgICAgICAgIGNoYXJ0PXtbXG4gICAgICAgICAgICAgIHsgcHJvcGVydHk6IFwiYW1vdW50XCIsIHR5cGU6IFwibGluZVwiLCB0aGlja25lc3M6IFwieHNtYWxsXCIsIHJvdW5kOiB0cnVlIH0sXG4gICAgICAgICAgICAgIHsgcHJvcGVydHk6IFwiYW1vdW50XCIsIHR5cGU6IFwiYXJlYVwiLCBvcGFjaXR5OiBcIm1lZGl1bVwiLCB0aGlja25lc3M6IFwieHNtYWxsXCIgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJ21heC1jb250ZW50JyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Hcm9tbWV0PlxuICApXG59Il0sIm5hbWVzIjpbImNvbGxlY3Rpb24iLCJkb2MiLCJnZXREb2NzIiwiR3JvbW1ldCIsIkJveCIsIkNhcmQiLCJDYXJkSGVhZGVyIiwiQ2FyZEZvb3RlciIsIkRhdGFDaGFydCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZGIiLCJQb3J0Zm9saW8iLCJ0cmFja2VkIiwic2V0VHJhY2tlZCIsInByZXZpb3VzIiwic2V0UHJldmlvdXMiLCJzbmFwc2hvdCIsInJlcyIsInRyYWNrZWRDb2luIiwiZG9jcyIsIm1hcCIsImlkIiwiZGF0YSIsImZpbHRlciIsImVuZFRpbWVzdGFtcCIsImZldGNoVHJhY2tlZCIsIm9uU25hcHNob3QiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJkYXRlIiwiYW1vdW50IiwibG9nIiwiZnVsbCIsInBhZCIsImdhcCIsImgxIiwiZGl2IiwieCIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJzZXJpZXMiLCJwcm9wZXJ0eSIsInByZWZpeCIsImNoYXJ0IiwidHlwZSIsInRoaWNrbmVzcyIsInJvdW5kIiwib3BhY2l0eSIsInN0eWxlIiwibWF4V2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/portfolio.js\n"));

/***/ })

});