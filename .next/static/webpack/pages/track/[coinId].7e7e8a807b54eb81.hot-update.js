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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TrackCoin; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ \"./node_modules/grommet/es6/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction TrackCoin() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var coinId = router.query.coinId;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), amount = ref[0], setAmount = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        align: \"center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                gap: \"small\",\n                width: \"30rem\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Start tracking \",\n                            coinId\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/serge/School/dev/next-fire/pages/track/[coinId].js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.TextInput, {\n                        type: \"number\",\n                        placeholder: \"Enter an amount to track\",\n                        onChange: function(e) {\n                            return setAmount(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/serge/School/dev/next-fire/pages/track/[coinId].js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/serge/School/dev/next-fire/pages/track/[coinId].js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                color: \"focus\",\n                // disabled={!amount}\n                label: \"Start Tracking\",\n                style: {\n                    color: \"white\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/serge/School/dev/next-fire/pages/track/[coinId].js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/serge/School/dev/next-fire/pages/track/[coinId].js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(TrackCoin, \"8rEA9WF8QVIQ5bPWdaAuvZoALlg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = TrackCoin;\nvar _c;\n$RefreshReg$(_c, \"TrackCoin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90cmFjay9bY29pbklkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFpRDtBQUNUO0FBQ1A7QUFFbEIsU0FBU0ssU0FBUyxHQUFHOztJQUNsQyxJQUFNQyxNQUFNLEdBQUdILHNEQUFTLEVBQUU7SUFDMUIsSUFBTSxNQUFRLEdBQUtHLE1BQU0sQ0FBQ0UsS0FBSyxDQUF2QkQsTUFBTTtJQUNkLElBQTRCSCxHQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBL0JLLE1BQU0sR0FBZUwsR0FBVSxHQUF6QixFQUFFTSxTQUFTLEdBQUlOLEdBQVUsR0FBZDtJQUV4QixxQkFDRSw4REFBQ0osd0NBQUc7UUFBQ1csS0FBSyxFQUFDLFFBQVE7OzBCQUNqQiw4REFBQ1gsd0NBQUc7Z0JBQUNZLEdBQUcsRUFBQyxPQUFPO2dCQUFDQyxLQUFLLEVBQUMsT0FBTzs7a0NBQzVCLDhEQUFDQyxJQUFFOzs0QkFBQyxpQkFBZTs0QkFBQ1AsTUFBTTs7Ozs7OzRCQUFNO2tDQUNoQyw4REFBQ0wsOENBQVM7d0JBQ1JhLElBQUksRUFBQyxRQUFRO3dCQUNiQyxXQUFXLEVBQUMsMEJBQTBCO3dCQUN0Q0MsUUFBUSxFQUFFQyxTQUFBQSxDQUFDO21DQUFJUixTQUFTLENBQUNRLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7eUJBQUE7Ozs7OzRCQUN4Qzs7Ozs7O29CQUNFOzBCQUVOLDhEQUFDbkIsMkNBQU07Z0JBQ0xvQixLQUFLLEVBQUMsT0FBTztnQkFDYixxQkFBcUI7Z0JBQ3JCQyxLQUFLLEVBQUMsZ0JBQWdCO2dCQUN0QkMsS0FBSyxFQUFFO29CQUFFRixLQUFLLEVBQUUsT0FBTztpQkFBRTs7Ozs7b0JBQ3pCOzs7Ozs7WUFHRSxDQUNQO0FBQ0gsQ0FBQztHQTFCdUJoQixTQUFTOztRQUNoQkYsa0RBQVM7OztBQURGRSxLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RyYWNrL1tjb2luSWRdLmpzP2ZkMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHRJbnB1dCB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYWNrQ29pbigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBjb2luSWQgfSA9IHJvdXRlci5xdWVyeVxuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoKVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgPEJveCBnYXA9J3NtYWxsJyB3aWR0aD0nMzByZW0nPlxuICAgICAgICA8aDI+U3RhcnQgdHJhY2tpbmcge2NvaW5JZH08L2gyPlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgdHlwZT0nbnVtYmVyJ1xuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBhbiBhbW91bnQgdG8gdHJhY2snXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNvbG9yPSdmb2N1cydcbiAgICAgICAgLy8gZGlzYWJsZWQ9eyFhbW91bnR9XG4gICAgICAgIGxhYmVsPSdTdGFydCBUcmFja2luZydcbiAgICAgICAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX1cbiAgICAgIC8+XG4gICAgICB7LyogPGJ1dHRvbiBkaXNhYmxlZD17IWFtb3VudH0+U3RhcnQgVHJhY2tpbmc8L2J1dHRvbj4gKi99XG5cbiAgICA8L0JveD5cbiAgKVxufSJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJUZXh0SW5wdXQiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIlRyYWNrQ29pbiIsInJvdXRlciIsImNvaW5JZCIsInF1ZXJ5IiwiYW1vdW50Iiwic2V0QW1vdW50IiwiYWxpZ24iLCJnYXAiLCJ3aWR0aCIsImgyIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb2xvciIsImxhYmVsIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/track/[coinId].js\n"));

/***/ })

});