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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Portfolio; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet */ \"./node_modules/grommet/es6/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/firebaseConfig */ \"./utils/firebaseConfig.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Portfolio() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), tracked = ref[0], setTracked = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), previous = ref1[0], setPrevious = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchTracked();\n    }, []);\n    function fetchTracked() {\n        return _fetchTracked.apply(this, arguments);\n    }\n    function _fetchTracked() {\n        _fetchTracked = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var snapshot, res, currentTracked, previousTracked;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__.db, \"tracked\"))\n                        ];\n                    case 1:\n                        snapshot = _state.sent();\n                        res = snapshot.docs.map(function(doc) {\n                            return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n                                id: doc.id\n                            }, doc.data());\n                        });\n                        currentTracked = res.filter(function(doc) {\n                            return !doc.endTimestamp;\n                        })[0];\n                        previousTracked = res.filter(function(doc) {\n                            return doc.endTimestamp;\n                        });\n                        setPrevious(previousTracked);\n                        if (!currentTracked) {\n                            setTracked(false);\n                        } else {\n                            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__.db, \"coins\", currentTracked.coinId), function(doc) {\n                                return setTracked((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, currentTracked, doc.data()));\n                            });\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _fetchTracked.apply(this, arguments);\n    }\n    console.log({\n        tracked: tracked,\n        previous: previous\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.Box, {\n        gap: \"medium\",\n        children: [\n            tracked === false && \"No Tracked Coin\",\n            tracked && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Currently Tracking: \",\n                            tracked.coinId\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.DataChart, {\n                            data: tracked.priceHistory.map(function(x) {\n                                var date = new Date(x.timestamp);\n                                x.date = date.toLocaleString();\n                                return x;\n                            }),\n                            series: [\n                                \"date\",\n                                {\n                                    property: \"price\",\n                                    prefix: \"€\"\n                                }\n                            ],\n                            chart: [\n                                {\n                                    property: \"price\",\n                                    type: \"line\",\n                                    thickness: \"xsmall\",\n                                    round: true\n                                },\n                                {\n                                    property: \"price\",\n                                    type: \"area\",\n                                    opacity: \"medium\",\n                                    thickness: \"xsmall\"\n                                }, \n                            ],\n                            style: {\n                                maxWidth: \"max-content\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Previously tracked\"\n                    }, void 0, false, {\n                        fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    previous.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                        gap: \"small\",\n                        children: previous.map(function(tracked) {\n                            var delta = tracked.endPrice / tracked.startPrice * 100 - 100;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                                columns: [\n                                    \"small\",\n                                    \"small\",\n                                    \"auto\"\n                                ],\n                                rows: [\n                                    \"xxsmall\"\n                                ],\n                                areas: [\n                                    {\n                                        name: \"info1\",\n                                        start: [\n                                            0,\n                                            0\n                                        ],\n                                        end: [\n                                            0,\n                                            0\n                                        ]\n                                    },\n                                    {\n                                        name: \"info2\",\n                                        start: [\n                                            1,\n                                            0\n                                        ],\n                                        end: [\n                                            1,\n                                            0\n                                        ]\n                                    },\n                                    {\n                                        name: \"info3\",\n                                        start: [\n                                            2,\n                                            0\n                                        ],\n                                        end: [\n                                            2,\n                                            0\n                                        ]\n                                    }\n                                ],\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                                        gridArea: \"info1\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                                size: \"1.2rem\",\n                                                weight: 600,\n                                                children: [\n                                                    \"Coin: \",\n                                                    tracked.coinId\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                                                children: [\n                                                    \"Delta: \",\n                                                    delta,\n                                                    \"%\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 19\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                                        gridArea: \"info2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                                                children: [\n                                                    \"Starting price: \",\n                                                    tracked.startPrice\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                                                lineNumber: 80,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                                                children: [\n                                                    \"Ending price: \",\n                                                    tracked.endPrice\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                                                lineNumber: 81,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 19\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                                        gridArea: \"info3\",\n                                        children: [\n                                            dateString(tracked.startTimestamp.seconds),\n                                            \" - \",\n                                            dateString(tracked.endTimestamp.seconds)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 19\n                                    }, _this)\n                                ]\n                            }, tracked.id, true, {\n                                fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                                lineNumber: 65,\n                                columnNumber: 17\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                        children: \"No previously tracked coins\"\n                    }, void 0, false, {\n                        fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/serge/School/dev/next-fire/pages/portfolio.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Portfolio, \"1dTKgrdOw3Jf2F64iafR94kbw40=\");\n_c = Portfolio;\nfunction dateString(timestamp) {\n    var date = new Date(timestamp);\n    return date.toLocaleString();\n}\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFFTiw4REFBQ2pCLHlDQUFJO2tDQUFDLDZCQUEyQjs7Ozs7NEJBQU87Ozs7OztvQkFFdEM7Ozs7OztZQUNGLENBQ1A7QUFDSCxDQUFDO0dBeEZ1QkssU0FBUztBQUFUQSxLQUFBQSxTQUFTO0FBMEZqQyxTQUFTa0QsVUFBVSxDQUFDekIsU0FBUyxFQUFFO0lBQzdCLElBQU1GLElBQUksR0FBRyxJQUFJQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztJQUNoQyxPQUFPRixJQUFJLENBQUNHLGNBQWMsRUFBRTtBQUM5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BvcnRmb2xpby5qcz81NjA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbGxlY3Rpb24sIGRvYywgZ2V0RG9jLCBnZXREb2NzLCBvblNuYXBzaG90LCBxdWVyeSwgd2hlcmUgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnXG5pbXBvcnQgeyBHcm9tbWV0LCBCb3gsIENhcmQsIENhcmRIZWFkZXIsIENhcmRGb290ZXIsIERhdGFDaGFydCwgVGV4dCwgR3JpZCB9IGZyb20gJ2dyb21tZXQnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uL3V0aWxzL2ZpcmViYXNlQ29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3J0Zm9saW8oKSB7XG4gIGNvbnN0IFt0cmFja2VkLCBzZXRUcmFja2VkXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW3ByZXZpb3VzLCBzZXRQcmV2aW91c10gPSB1c2VTdGF0ZShbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoVHJhY2tlZCgpXG4gIH0sIFtdKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoVHJhY2tlZCgpIHtcbiAgICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgXCJ0cmFja2VkXCIpKVxuICAgIGNvbnN0IHJlcyA9IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiAoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKVxuICAgIGNvbnN0IGN1cnJlbnRUcmFja2VkID0gcmVzLmZpbHRlcihkb2MgPT4gIWRvYy5lbmRUaW1lc3RhbXApWzBdXG4gICAgY29uc3QgcHJldmlvdXNUcmFja2VkID0gcmVzLmZpbHRlcihkb2MgPT4gZG9jLmVuZFRpbWVzdGFtcClcblxuICAgIHNldFByZXZpb3VzKHByZXZpb3VzVHJhY2tlZClcblxuICAgIGlmICghY3VycmVudFRyYWNrZWQpIHtcbiAgICAgIHNldFRyYWNrZWQoZmFsc2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIG9uU25hcHNob3QoZG9jKGRiLCAnY29pbnMnLCBjdXJyZW50VHJhY2tlZC5jb2luSWQpLFxuICAgICAgICBkb2MgPT4gc2V0VHJhY2tlZCh7IC4uLmN1cnJlbnRUcmFja2VkLCAuLi5kb2MuZGF0YSgpIH0pXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgY29uc29sZS5sb2coeyB0cmFja2VkLCBwcmV2aW91cyB9KVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBnYXA9J21lZGl1bSc+XG4gICAgICB7dHJhY2tlZCA9PT0gZmFsc2UgJiYgKFxuICAgICAgICBcIk5vIFRyYWNrZWQgQ29pblwiXG4gICAgICApfVxuICAgICAge3RyYWNrZWQgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxoMj5DdXJyZW50bHkgVHJhY2tpbmc6IHt0cmFja2VkLmNvaW5JZH08L2gyPlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8RGF0YUNoYXJ0XG4gICAgICAgICAgICAgIGRhdGE9e3RyYWNrZWQucHJpY2VIaXN0b3J5Lm1hcCh4ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoeC50aW1lc3RhbXApXG4gICAgICAgICAgICAgICAgeC5kYXRlID0gZGF0ZS50b0xvY2FsZVN0cmluZygpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHhcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIHNlcmllcz17W1wiZGF0ZVwiLCB7IHByb3BlcnR5OiBcInByaWNlXCIsIHByZWZpeDogXCLigqxcIiB9XX1cbiAgICAgICAgICAgICAgY2hhcnQ9e1tcbiAgICAgICAgICAgICAgICB7IHByb3BlcnR5OiBcInByaWNlXCIsIHR5cGU6IFwibGluZVwiLCB0aGlja25lc3M6IFwieHNtYWxsXCIsIHJvdW5kOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyBwcm9wZXJ0eTogXCJwcmljZVwiLCB0eXBlOiBcImFyZWFcIiwgb3BhY2l0eTogXCJtZWRpdW1cIiwgdGhpY2tuZXNzOiBcInhzbWFsbFwiIH0sXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnbWF4LWNvbnRlbnQnIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICA8Qm94PlxuICAgICAgICA8aDI+UHJldmlvdXNseSB0cmFja2VkPC9oMj5cbiAgICAgICAge3ByZXZpb3VzLmxlbmd0aCA/IChcbiAgICAgICAgICA8Qm94IGdhcD0nc21hbGwnPlxuICAgICAgICAgICAge3ByZXZpb3VzLm1hcCh0cmFja2VkID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSAodHJhY2tlZC5lbmRQcmljZSAvIHRyYWNrZWQuc3RhcnRQcmljZSAqIDEwMCkgLSAxMDBcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAga2V5PXt0cmFja2VkLmlkfVxuICAgICAgICAgICAgICAgICAgY29sdW1ucz17WydzbWFsbCcsICdzbWFsbCcsICdhdXRvJ119XG4gICAgICAgICAgICAgICAgICByb3dzPXtbJ3h4c21hbGwnXX1cbiAgICAgICAgICAgICAgICAgIGFyZWFzPXtbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ2luZm8xJywgc3RhcnQ6IFswLCAwXSwgZW5kOiBbMCwgMF0gfSxcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnaW5mbzInLCBzdGFydDogWzEsIDBdLCBlbmQ6IFsxLCAwXSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdpbmZvMycsIHN0YXJ0OiBbMiwgMF0sIGVuZDogWzIsIDBdIH1cbiAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJveCBncmlkQXJlYT0naW5mbzEnPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBzaXplPXsnMS4ycmVtJ30gd2VpZ2h0PXs2MDB9PkNvaW46IHt0cmFja2VkLmNvaW5JZH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxCb3g+RGVsdGE6IHtkZWx0YX0lPC9Cb3g+XG4gICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgIDxCb3ggZ3JpZEFyZWE9J2luZm8yJz5cbiAgICAgICAgICAgICAgICAgICAgPEJveD5TdGFydGluZyBwcmljZToge3RyYWNrZWQuc3RhcnRQcmljZX08L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPEJveD5FbmRpbmcgcHJpY2U6IHt0cmFja2VkLmVuZFByaWNlfTwvQm94PlxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICA8Qm94IGdyaWRBcmVhPSdpbmZvMyc+e2RhdGVTdHJpbmcodHJhY2tlZC5zdGFydFRpbWVzdGFtcC5zZWNvbmRzKX0gLSB7ZGF0ZVN0cmluZyh0cmFja2VkLmVuZFRpbWVzdGFtcC5zZWNvbmRzKX08L0JveD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxUZXh0Pk5vIHByZXZpb3VzbHkgdHJhY2tlZCBjb2luczwvVGV4dD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApXG59XG5cbmZ1bmN0aW9uIGRhdGVTdHJpbmcodGltZXN0YW1wKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApXG4gIHJldHVybiBkYXRlLnRvTG9jYWxlU3RyaW5nKClcbn0iXSwibmFtZXMiOlsiY29sbGVjdGlvbiIsImRvYyIsImdldERvYyIsImdldERvY3MiLCJvblNuYXBzaG90IiwicXVlcnkiLCJ3aGVyZSIsIkdyb21tZXQiLCJCb3giLCJDYXJkIiwiQ2FyZEhlYWRlciIsIkNhcmRGb290ZXIiLCJEYXRhQ2hhcnQiLCJUZXh0IiwiR3JpZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZGIiLCJQb3J0Zm9saW8iLCJ0cmFja2VkIiwic2V0VHJhY2tlZCIsInByZXZpb3VzIiwic2V0UHJldmlvdXMiLCJmZXRjaFRyYWNrZWQiLCJzbmFwc2hvdCIsInJlcyIsImN1cnJlbnRUcmFja2VkIiwicHJldmlvdXNUcmFja2VkIiwiZG9jcyIsIm1hcCIsImlkIiwiZGF0YSIsImZpbHRlciIsImVuZFRpbWVzdGFtcCIsImNvaW5JZCIsImNvbnNvbGUiLCJsb2ciLCJnYXAiLCJoMiIsInByaWNlSGlzdG9yeSIsIngiLCJkYXRlIiwiRGF0ZSIsInRpbWVzdGFtcCIsInRvTG9jYWxlU3RyaW5nIiwic2VyaWVzIiwicHJvcGVydHkiLCJwcmVmaXgiLCJjaGFydCIsInR5cGUiLCJ0aGlja25lc3MiLCJyb3VuZCIsIm9wYWNpdHkiLCJzdHlsZSIsIm1heFdpZHRoIiwibGVuZ3RoIiwiZGVsdGEiLCJlbmRQcmljZSIsInN0YXJ0UHJpY2UiLCJjb2x1bW5zIiwicm93cyIsImFyZWFzIiwibmFtZSIsInN0YXJ0IiwiZW5kIiwiZ3JpZEFyZWEiLCJzaXplIiwid2VpZ2h0IiwiZGF0ZVN0cmluZyIsInN0YXJ0VGltZXN0YW1wIiwic2Vjb25kcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/portfolio.js\n"));

/***/ })

});