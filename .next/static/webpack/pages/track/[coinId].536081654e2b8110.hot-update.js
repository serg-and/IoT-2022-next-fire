"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/track/[coinId]",{

/***/ "./pages/track/[coinId].js":
/*!*********************************!*\
  !*** ./pages/track/[coinId].js ***!
  \*********************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TrackCoin; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/firebaseConfig */ \"./utils/firebaseConfig.js\");\n/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! grommet */ \"./node_modules/grommet/es6/index.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction TrackCoin() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var coinId = router.query.coinId;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), amount = ref[0], setAmount = ref[1];\n    function startTracking() {\n        return _startTracking.apply(this, arguments);\n    }\n    function _startTracking() {\n        _startTracking = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n            var coinSnapshot, coin, currrentlyTracking;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.db, \"coins\", coinId))\n                        ];\n                    case 1:\n                        coinSnapshot = _state.sent();\n                        if (!coinSnapshot.exists()) {\n                            console.log(\"Coin id \".concat(coinId, \" doesn't exist\"));\n                            return [\n                                2\n                            ];\n                        }\n                        coin = coinSnapshot.data();\n                        return [\n                            4,\n                            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.db, \"tracked\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)(\"endTimestamp\", \"==\", null)))\n                        ];\n                    case 2:\n                        currrentlyTracking = _state.sent();\n                        currrentlyTracking.forEach(function() {\n                            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function(doc) {\n                                var coinSnap;\n                                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                                    switch(_state.label){\n                                        case 0:\n                                            return [\n                                                4,\n                                                (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(doc(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.db, \"coins\", doc.id))\n                                            ];\n                                        case 1:\n                                            coinSnap = _state.sent();\n                                            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)(doc(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.db, \"coins\", doc.id), (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, doc.data()), {\n                                                endTimestamp: firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.Timestamp.now(),\n                                                endPrice: coinSnap.data().price\n                                            }));\n                                            return [\n                                                2\n                                            ];\n                                    }\n                                });\n                            });\n                            return function(doc) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }());\n                        return [\n                            4,\n                            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.db, \"tracked\"), {\n                                amount: amount,\n                                coinId: coinId,\n                                startPrice: coin.price,\n                                endPrice: null,\n                                startTimestamp: firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.Timestamp.now(),\n                                endTimestamp: null\n                            })\n                        ];\n                    case 3:\n                        _state.sent();\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _startTracking.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_9__.Box, {\n        align: \"center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_9__.Box, {\n            gap: \"medium\",\n            width: \"20rem\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: [\n                        \"Start tracking \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_9__.Text, {\n                            color: \"focus\",\n                            size: \"1.5rem\",\n                            weight: 600,\n                            children: coinId\n                        }, void 0, false, {\n                            fileName: \"/Users/serge/School/dev/next-fire/pages/track/[coinId].js\",\n                            lineNumber: 45,\n                            columnNumber: 28\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/serge/School/dev/next-fire/pages/track/[coinId].js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_9__.TextInput, {\n                    type: \"number\",\n                    placeholder: \"Enter an amount to track\",\n                    onChange: function(e) {\n                        return setAmount(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/serge/School/dev/next-fire/pages/track/[coinId].js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                    color: \"focus\",\n                    disabled: !amount,\n                    label: \"Start Tracking\",\n                    style: {\n                        color: \"white\"\n                    },\n                    onClick: startTracking\n                }, void 0, false, {\n                    fileName: \"/Users/serge/School/dev/next-fire/pages/track/[coinId].js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/serge/School/dev/next-fire/pages/track/[coinId].js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/serge/School/dev/next-fire/pages/track/[coinId].js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(TrackCoin, \"8rEA9WF8QVIQ5bPWdaAuvZoALlg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = TrackCoin;\nvar _c;\n$RefreshReg$(_c, \"TrackCoin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sRUFBRSxHQUFHO3NDQUFHMUIsTUFBTTs7Ozs7Z0NBQVE7Ozs7Ozt3QkFBSzs4QkFDdEYsOERBQUNILDhDQUFTO29CQUNSOEIsSUFBSSxFQUFDLFFBQVE7b0JBQ2JDLFdBQVcsRUFBQywwQkFBMEI7b0JBQ3RDQyxRQUFRLEVBQUVDLFNBQUFBLENBQUM7K0JBQUk1QixTQUFTLENBQUM0QixDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO3FCQUFBOzs7Ozt3QkFDeEM7OEJBQ0YsOERBQUNyQywyQ0FBTTtvQkFDTDZCLEtBQUssRUFBQyxPQUFPO29CQUNiUyxRQUFRLEVBQUUsQ0FBQ2hDLE1BQU07b0JBQ2pCaUMsS0FBSyxFQUFDLGdCQUFnQjtvQkFDdEJDLEtBQUssRUFBRTt3QkFBRVgsS0FBSyxFQUFFLE9BQU87cUJBQUU7b0JBQ3pCWSxPQUFPLEVBQUVqQyxhQUFhOzs7Ozt3QkFDdEI7Ozs7OztnQkFDRTs7Ozs7WUFDRixDQUNQO0FBQ0gsQ0FBQztHQXREdUJMLFNBQVM7O1FBQ2hCaEIsa0RBQVM7OztBQURGZ0IsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90cmFjay9bY29pbklkXS5qcz9mZDE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFkZERvYywgY29sbGVjdGlvbiwgZG9jLCBnZXREb2MsIGdldERvY3MsIHF1ZXJ5LCBzZXREb2MsIFRpbWVzdGFtcCwgd2hlcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi8uLi91dGlscy9maXJlYmFzZUNvbmZpZ1wiO1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQsIFRleHRJbnB1dCB9IGZyb20gXCJncm9tbWV0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYWNrQ29pbigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBjb2luSWQgfSA9IHJvdXRlci5xdWVyeVxuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN0YXJ0VHJhY2tpbmcoKSB7XG4gICAgY29uc3QgY29pblNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jKGRvYyhkYiwgJ2NvaW5zJywgY29pbklkKSlcbiAgICBpZiAoIWNvaW5TbmFwc2hvdC5leGlzdHMoKSkge1xuICAgICAgY29uc29sZS5sb2coYENvaW4gaWQgJHtjb2luSWR9IGRvZXNuJ3QgZXhpc3RgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGNvaW4gPSBjb2luU25hcHNob3QuZGF0YSgpXG5cbiAgICAvLyBzdG9wIHRyYWNraW5nIGFueSBjdXJyZW50bHkgdHJhY2tpbmcgY29pbnMgYW5kIHNldCBlbmQgcHJpY2UgYW5kIHRpbWVzdGFtcFxuICAgIGNvbnN0IGN1cnJyZW50bHlUcmFja2luZyA9IGF3YWl0IGdldERvY3MocXVlcnkoY29sbGVjdGlvbihkYiwgJ3RyYWNrZWQnKSwgd2hlcmUoJ2VuZFRpbWVzdGFtcCcsICc9PScsIG51bGwpKSlcbiAgICBjdXJycmVudGx5VHJhY2tpbmcuZm9yRWFjaChhc3luYyBkb2MgPT4ge1xuICAgICAgY29uc3QgY29pblNuYXAgPSBhd2FpdCBnZXREb2MoZG9jKGRiLCAnY29pbnMnLCBkb2MuaWQpKVxuXG4gICAgICBzZXREb2MoZG9jKGRiLCAnY29pbnMnLCBkb2MuaWQpLCB7XG4gICAgICAgIC4uLmRvYy5kYXRhKCksXG4gICAgICAgIGVuZFRpbWVzdGFtcDogVGltZXN0YW1wLm5vdygpLFxuICAgICAgICBlbmRQcmljZTogY29pblNuYXAuZGF0YSgpLnByaWNlXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgJ3RyYWNrZWQnKSwge1xuICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICBjb2luSWQ6IGNvaW5JZCxcbiAgICAgIHN0YXJ0UHJpY2U6IGNvaW4ucHJpY2UsXG4gICAgICBlbmRQcmljZTogbnVsbCxcbiAgICAgIHN0YXJ0VGltZXN0YW1wOiBUaW1lc3RhbXAubm93KCksXG4gICAgICBlbmRUaW1lc3RhbXA6IG51bGwsXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgPEJveCBnYXA9J21lZGl1bScgd2lkdGg9JzIwcmVtJz5cbiAgICAgICAgPGgyPlN0YXJ0IHRyYWNraW5nIDxUZXh0IGNvbG9yPSdmb2N1cycgc2l6ZT0nMS41cmVtJyB3ZWlnaHQ9ezYwMH0+e2NvaW5JZH08L1RleHQ+PC9oMj5cbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIHR5cGU9J251bWJlcidcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgYW4gYW1vdW50IHRvIHRyYWNrJ1xuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEFtb3VudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjb2xvcj0nZm9jdXMnXG4gICAgICAgICAgZGlzYWJsZWQ9eyFhbW91bnR9XG4gICAgICAgICAgbGFiZWw9J1N0YXJ0IFRyYWNraW5nJ1xuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19XG4gICAgICAgICAgb25DbGljaz17c3RhcnRUcmFja2luZ31cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApXG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVN0YXRlIiwiYWRkRG9jIiwiY29sbGVjdGlvbiIsImRvYyIsImdldERvYyIsImdldERvY3MiLCJxdWVyeSIsInNldERvYyIsIlRpbWVzdGFtcCIsIndoZXJlIiwiZGIiLCJCb3giLCJCdXR0b24iLCJUZXh0IiwiVGV4dElucHV0IiwiVHJhY2tDb2luIiwicm91dGVyIiwiY29pbklkIiwiYW1vdW50Iiwic2V0QW1vdW50Iiwic3RhcnRUcmFja2luZyIsImNvaW5TbmFwc2hvdCIsImNvaW4iLCJjdXJycmVudGx5VHJhY2tpbmciLCJleGlzdHMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImZvckVhY2giLCJjb2luU25hcCIsImlkIiwiZW5kVGltZXN0YW1wIiwibm93IiwiZW5kUHJpY2UiLCJwcmljZSIsInN0YXJ0UHJpY2UiLCJzdGFydFRpbWVzdGFtcCIsImFsaWduIiwiZ2FwIiwid2lkdGgiLCJoMiIsImNvbG9yIiwic2l6ZSIsIndlaWdodCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZGlzYWJsZWQiLCJsYWJlbCIsInN0eWxlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/track/[coinId].js\n"));

/***/ })

});