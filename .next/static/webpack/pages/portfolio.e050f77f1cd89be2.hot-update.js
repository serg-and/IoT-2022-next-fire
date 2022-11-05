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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Portfolio; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet */ \"./node_modules/grommet/es6/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/firebaseConfig */ \"./utils/firebaseConfig.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Portfolio() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), tracked = ref[0], setTracked = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), previous = ref1[0], setPrevious = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchTracked();\n    }, []);\n    function fetchTracked() {\n        return _fetchTracked.apply(this, arguments);\n    }\n    function _fetchTracked() {\n        _fetchTracked = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var snapshot, res, currentTracked, previousTracked;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__.db, \"tracked\"))\n                        ];\n                    case 1:\n                        snapshot = _state.sent();\n                        res = snapshot.docs.map(function(doc) {\n                            return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n                                id: doc.id\n                            }, doc.data());\n                        });\n                        currentTracked = res.filter(function(doc) {\n                            return !doc.endTimestamp;\n                        })[0];\n                        previousTracked = res.filter(function(doc) {\n                            return doc.endTimestamp;\n                        });\n                        setPrevious(previousTracked);\n                        if (!currentTracked) {\n                            setTracked(false);\n                        } else {\n                            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__.db, \"coins\", currentTracked.coinId), function(doc) {\n                                return setTracked((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, currentTracked, doc.data()));\n                            });\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _fetchTracked.apply(this, arguments);\n    }\n    var data = [\n        {\n            date: 1667517693987,\n            amount: 2067.5\n        },\n        {\n            date: 1667517703987,\n            amount: 2068.6\n        },\n        {\n            date: 1667517713987,\n            amount: 2065.3\n        },\n        {\n            date: 1667517723987,\n            amount: 2062.7\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        },\n        {\n            date: 1667517733987,\n            amount: 2064.2\n        }, \n    ];\n    console.log({\n        tracked: tracked,\n        previous: previous\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.Grommet, {\n        full: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.Box, {\n            pad: \"medium\",\n            gap: \"medium\",\n            children: [\n                tracked === false && \"No Tracked Coin\",\n                tracked && tracked.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"Currently Tracking: \",\n                                tracked.coinId\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.DataChart, {\n                                data: tracked.priceHistory.map(function(x) {\n                                    var date = new Date(x.date * 1000);\n                                    x.date = \"\".concat(date.toLocaleDateString(), \" \").concat(date.toLocaleTimeString());\n                                    return x;\n                                }),\n                                series: [\n                                    \"date\",\n                                    {\n                                        property: \"price\",\n                                        prefix: \"€\"\n                                    }\n                                ],\n                                chart: [\n                                    {\n                                        property: \"price\",\n                                        type: \"line\",\n                                        thickness: \"xsmall\",\n                                        round: true\n                                    },\n                                    {\n                                        property: \"price\",\n                                        type: \"area\",\n                                        opacity: \"medium\",\n                                        thickness: \"xsmall\"\n                                    }, \n                                ],\n                                style: {\n                                    maxWidth: \"max-content\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Portfolio, \"1dTKgrdOw3Jf2F64iafR94kbw40=\");\n_c = Portfolio;\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUNELENBQUMsQ0FBQ1YsSUFBSSxHQUFHLElBQUksQ0FBQztvQ0FDcENVLENBQUMsQ0FBQ1YsSUFBSSxHQUFHLEVBQUMsQ0FBK0JBLE1BQXlCLENBQXREQSxJQUFJLENBQUNZLGtCQUFrQixFQUFFLEVBQUMsR0FBQyxDQUE0QixRQUExQlosSUFBSSxDQUFDYSxrQkFBa0IsRUFBRSxDQUFFO29DQUNwRSxPQUFPSCxDQUFDO2dDQUNWLENBQUMsQ0FBQztnQ0FDRkksTUFBTSxFQUFFO29DQUFDLE1BQU07b0NBQUU7d0NBQUVDLFFBQVEsRUFBRSxPQUFPO3dDQUFFQyxNQUFNLEVBQUUsR0FBRztxQ0FBRTtpQ0FBQztnQ0FDcERDLEtBQUssRUFBRTtvQ0FDTDt3Q0FBRUYsUUFBUSxFQUFFLE9BQU87d0NBQUVHLElBQUksRUFBRSxNQUFNO3dDQUFFQyxTQUFTLEVBQUUsUUFBUTt3Q0FBRUMsS0FBSyxFQUFFLElBQUk7cUNBQUU7b0NBQ3JFO3dDQUFFTCxRQUFRLEVBQUUsT0FBTzt3Q0FBRUcsSUFBSSxFQUFFLE1BQU07d0NBQUVHLE9BQU8sRUFBRSxRQUFRO3dDQUFFRixTQUFTLEVBQUUsUUFBUTtxQ0FBRTtpQ0FDNUU7Z0NBQ0RHLEtBQUssRUFBRTtvQ0FBRUMsUUFBUSxFQUFFLGFBQWE7aUNBQUU7Ozs7O29DQUNsQzs7Ozs7Z0NBQ0U7O2dDQUNMOzs7Ozs7Z0JBRUQ7Ozs7O1lBQ0UsQ0FDWDtBQUNILENBQUM7R0E3RXVCeEMsU0FBUztBQUFUQSxLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BvcnRmb2xpby5qcz81NjA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbGxlY3Rpb24sIGRvYywgZ2V0RG9jLCBnZXREb2NzLCBvblNuYXBzaG90LCBxdWVyeSwgd2hlcmUgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnXG5pbXBvcnQgeyBHcm9tbWV0LCBCb3gsIENhcmQsIENhcmRIZWFkZXIsIENhcmRGb290ZXIsIERhdGFDaGFydCB9IGZyb20gJ2dyb21tZXQnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uL3V0aWxzL2ZpcmViYXNlQ29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3J0Zm9saW8oKSB7XG4gIGNvbnN0IFt0cmFja2VkLCBzZXRUcmFja2VkXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW3ByZXZpb3VzLCBzZXRQcmV2aW91c10gPSB1c2VTdGF0ZShbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoVHJhY2tlZCgpXG4gIH0sIFtdKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoVHJhY2tlZCgpIHtcbiAgICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgXCJ0cmFja2VkXCIpKVxuICAgIGNvbnN0IHJlcyA9IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiAoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKVxuICAgIGNvbnN0IGN1cnJlbnRUcmFja2VkID0gcmVzLmZpbHRlcihkb2MgPT4gIWRvYy5lbmRUaW1lc3RhbXApWzBdXG4gICAgY29uc3QgcHJldmlvdXNUcmFja2VkID0gcmVzLmZpbHRlcihkb2MgPT4gZG9jLmVuZFRpbWVzdGFtcClcblxuICAgIHNldFByZXZpb3VzKHByZXZpb3VzVHJhY2tlZClcblxuICAgIGlmICghY3VycmVudFRyYWNrZWQpIHtcbiAgICAgIHNldFRyYWNrZWQoZmFsc2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIG9uU25hcHNob3QoZG9jKGRiLCAnY29pbnMnLCBjdXJyZW50VHJhY2tlZC5jb2luSWQpLFxuICAgICAgICBkb2MgPT4gc2V0VHJhY2tlZCh7IC4uLmN1cnJlbnRUcmFja2VkLCAuLi5kb2MuZGF0YSgpIH0pXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGF0YSA9IFtcbiAgICB7IGRhdGU6IDE2Njc1MTc2OTM5ODcsIGFtb3VudDogMjA2Ny41IH0sXG4gICAgeyBkYXRlOiAxNjY3NTE3NzAzOTg3LCBhbW91bnQ6IDIwNjguNiB9LFxuICAgIHsgZGF0ZTogMTY2NzUxNzcxMzk4NywgYW1vdW50OiAyMDY1LjMgfSxcbiAgICB7IGRhdGU6IDE2Njc1MTc3MjM5ODcsIGFtb3VudDogMjA2Mi43IH0sXG4gICAgeyBkYXRlOiAxNjY3NTE3NzMzOTg3LCBhbW91bnQ6IDIwNjQuMiB9LFxuICAgIHsgZGF0ZTogMTY2NzUxNzczMzk4NywgYW1vdW50OiAyMDY0LjIgfSxcbiAgICB7IGRhdGU6IDE2Njc1MTc3MzM5ODcsIGFtb3VudDogMjA2NC4yIH0sXG4gICAgeyBkYXRlOiAxNjY3NTE3NzMzOTg3LCBhbW91bnQ6IDIwNjQuMiB9LFxuICAgIHsgZGF0ZTogMTY2NzUxNzczMzk4NywgYW1vdW50OiAyMDY0LjIgfSxcbiAgICB7IGRhdGU6IDE2Njc1MTc3MzM5ODcsIGFtb3VudDogMjA2NC4yIH0sXG4gICAgeyBkYXRlOiAxNjY3NTE3NzMzOTg3LCBhbW91bnQ6IDIwNjQuMiB9LFxuICAgIHsgZGF0ZTogMTY2NzUxNzczMzk4NywgYW1vdW50OiAyMDY0LjIgfSxcbiAgICB7IGRhdGU6IDE2Njc1MTc3MzM5ODcsIGFtb3VudDogMjA2NC4yIH0sXG4gICAgeyBkYXRlOiAxNjY3NTE3NzMzOTg3LCBhbW91bnQ6IDIwNjQuMiB9LFxuICAgIHsgZGF0ZTogMTY2NzUxNzczMzk4NywgYW1vdW50OiAyMDY0LjIgfSxcbiAgICB7IGRhdGU6IDE2Njc1MTc3MzM5ODcsIGFtb3VudDogMjA2NC4yIH0sXG4gICAgeyBkYXRlOiAxNjY3NTE3NzMzOTg3LCBhbW91bnQ6IDIwNjQuMiB9LFxuICAgIHsgZGF0ZTogMTY2NzUxNzczMzk4NywgYW1vdW50OiAyMDY0LjIgfSxcbiAgXVxuXG4gIGNvbnNvbGUubG9nKHsgdHJhY2tlZCwgcHJldmlvdXMgfSlcblxuICByZXR1cm4gKFxuICAgIDxHcm9tbWV0IGZ1bGw+XG4gICAgICA8Qm94IHBhZD0nbWVkaXVtJyBnYXA9J21lZGl1bSc+XG4gICAgICAgIHt0cmFja2VkID09PSBmYWxzZSAmJiAoXG4gICAgICAgICAgXCJObyBUcmFja2VkIENvaW5cIlxuICAgICAgICApfVxuICAgICAgICB7dHJhY2tlZCAmJiB0cmFja2VkLmxlbmd0aCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMT5DdXJyZW50bHkgVHJhY2tpbmc6IHt0cmFja2VkLmNvaW5JZH08L2gxPlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPERhdGFDaGFydFxuICAgICAgICAgICAgICAgIGRhdGE9e3RyYWNrZWQucHJpY2VIaXN0b3J5Lm1hcCh4ID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh4LmRhdGUgKiAxMDAwKVxuICAgICAgICAgICAgICAgICAgeC5kYXRlID0gYCR7ZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKX0gJHtkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpfWBcbiAgICAgICAgICAgICAgICAgIHJldHVybiB4XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgc2VyaWVzPXtbXCJkYXRlXCIsIHsgcHJvcGVydHk6IFwicHJpY2VcIiwgcHJlZml4OiBcIuKCrFwiIH1dfVxuICAgICAgICAgICAgICAgIGNoYXJ0PXtbXG4gICAgICAgICAgICAgICAgICB7IHByb3BlcnR5OiBcInByaWNlXCIsIHR5cGU6IFwibGluZVwiLCB0aGlja25lc3M6IFwieHNtYWxsXCIsIHJvdW5kOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICB7IHByb3BlcnR5OiBcInByaWNlXCIsIHR5cGU6IFwiYXJlYVwiLCBvcGFjaXR5OiBcIm1lZGl1bVwiLCB0aGlja25lc3M6IFwieHNtYWxsXCIgfSxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnbWF4LWNvbnRlbnQnIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX0gICAgICAgIFxuICAgICAgPC9Cb3g+XG4gICAgPC9Hcm9tbWV0PlxuICApXG59Il0sIm5hbWVzIjpbImNvbGxlY3Rpb24iLCJkb2MiLCJnZXREb2MiLCJnZXREb2NzIiwib25TbmFwc2hvdCIsInF1ZXJ5Iiwid2hlcmUiLCJHcm9tbWV0IiwiQm94IiwiQ2FyZCIsIkNhcmRIZWFkZXIiLCJDYXJkRm9vdGVyIiwiRGF0YUNoYXJ0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJkYiIsIlBvcnRmb2xpbyIsInRyYWNrZWQiLCJzZXRUcmFja2VkIiwicHJldmlvdXMiLCJzZXRQcmV2aW91cyIsImZldGNoVHJhY2tlZCIsInNuYXBzaG90IiwicmVzIiwiY3VycmVudFRyYWNrZWQiLCJwcmV2aW91c1RyYWNrZWQiLCJkb2NzIiwibWFwIiwiaWQiLCJkYXRhIiwiZmlsdGVyIiwiZW5kVGltZXN0YW1wIiwiY29pbklkIiwiZGF0ZSIsImFtb3VudCIsImNvbnNvbGUiLCJsb2ciLCJmdWxsIiwicGFkIiwiZ2FwIiwibGVuZ3RoIiwiaDEiLCJwcmljZUhpc3RvcnkiLCJ4IiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInRvTG9jYWxlVGltZVN0cmluZyIsInNlcmllcyIsInByb3BlcnR5IiwicHJlZml4IiwiY2hhcnQiLCJ0eXBlIiwidGhpY2tuZXNzIiwicm91bmQiLCJvcGFjaXR5Iiwic3R5bGUiLCJtYXhXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/portfolio.js\n"));

/***/ })

});