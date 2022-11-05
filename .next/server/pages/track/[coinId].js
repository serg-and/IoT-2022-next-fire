"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/track/[coinId]";
exports.ids = ["pages/track/[coinId]"];
exports.modules = {

/***/ "grommet":
/*!**************************!*\
  !*** external "grommet" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("grommet");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ "./pages/track/[coinId].js":
/*!*********************************!*\
  !*** ./pages/track/[coinId].js ***!
  \*********************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TrackCoin)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var _utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/firebaseConfig */ \"./utils/firebaseConfig.js\");\n/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet */ \"grommet\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction TrackCoin() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { coinId  } = router.query;\n    const { 0: amount , 1: setAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    async function startTracking() {\n        const coinSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.db, \"coins\", coinId));\n        if (!coinSnapshot.exists()) {\n            console.log(`Coin id ${coinId} doesn't exist`);\n            return;\n        }\n        const coin = coinSnapshot.data();\n        // stop tracking any currently tracking coins and set end price and timestamp\n        const currrentlyTracking = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.db, \"tracked\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)(\"endTimestamp\", \"==\", null)));\n        currrentlyTracking.forEach(async (tracked)=>{\n            const trackedData = tracked.data();\n            const coinSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.db, \"coins\", trackedData.coinId));\n            const coinData = coinSnap.data();\n            console.log({\n                trackedData,\n                coinData\n            });\n            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.db, \"tracked\", tracked.id), {\n                ...tracked.data(),\n                endTimestamp: firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.Timestamp.now(),\n                endPrice: coinData.price\n            });\n        });\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.db, \"tracked\"), {\n            amount: amount,\n            coinId: coinId,\n            startPrice: coin.price,\n            endPrice: null,\n            startTimestamp: firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.Timestamp.now(),\n            endTimestamp: null\n        });\n        // redirect to portfolio page\n        location.href = \"/portfolio\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        align: \"center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            gap: \"medium\",\n            width: \"20rem\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: [\n                        \"Start tracking \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                            color: \"focus\",\n                            size: \"1.5rem\",\n                            weight: 600,\n                            children: coinId\n                        }, void 0, false, {\n                            fileName: \"/Users/serge/School/dev/next-fire/pages/track/[coinId].js\",\n                            lineNumber: 52,\n                            columnNumber: 28\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/serge/School/dev/next-fire/pages/track/[coinId].js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.TextInput, {\n                    type: \"number\",\n                    placeholder: \"Enter an amount to track\",\n                    onChange: (e)=>setAmount(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/serge/School/dev/next-fire/pages/track/[coinId].js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                    color: \"focus\",\n                    disabled: !amount,\n                    label: \"Start Tracking\",\n                    style: {\n                        color: \"white\"\n                    },\n                    onClick: startTracking\n                }, void 0, false, {\n                    fileName: \"/Users/serge/School/dev/next-fire/pages/track/[coinId].js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/serge/School/dev/next-fire/pages/track/[coinId].js\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/serge/School/dev/next-fire/pages/track/[coinId].js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxFQUFDLFFBQVE7b0JBQ2JDLFdBQVcsRUFBQywwQkFBMEI7b0JBQ3RDQyxRQUFRLEVBQUVDLENBQUFBLENBQUMsR0FBSWpDLFNBQVMsQ0FBQ2lDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7Ozs7O3dCQUN4Qzs4QkFDRiw4REFBQzFDLDJDQUFNO29CQUNMa0MsS0FBSyxFQUFDLE9BQU87b0JBQ2JTLFFBQVEsRUFBRSxDQUFDckMsTUFBTTtvQkFDakJzQyxLQUFLLEVBQUMsZ0JBQWdCO29CQUN0QkMsS0FBSyxFQUFFO3dCQUFFWCxLQUFLLEVBQUUsT0FBTztxQkFBRTtvQkFDekJZLE9BQU8sRUFBRXRDLGFBQWE7Ozs7O3dCQUN0Qjs7Ozs7O2dCQUNFOzs7OztZQUNGLENBQ1A7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1maXJlLy4vcGFnZXMvdHJhY2svW2NvaW5JZF0uanM/ZmQxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhZGREb2MsIGNvbGxlY3Rpb24sIGRvYywgZ2V0RG9jLCBnZXREb2NzLCBxdWVyeSwgc2V0RG9jLCBUaW1lc3RhbXAsIHdoZXJlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0LCBUZXh0SW5wdXQgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFja0NvaW4oKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgY29pbklkIH0gPSByb3V0ZXIucXVlcnlcbiAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKClcblxuICBhc3luYyBmdW5jdGlvbiBzdGFydFRyYWNraW5nKCkge1xuICAgIGNvbnN0IGNvaW5TbmFwc2hvdCA9IGF3YWl0IGdldERvYyhkb2MoZGIsICdjb2lucycsIGNvaW5JZCkpXG4gICAgaWYgKCFjb2luU25hcHNob3QuZXhpc3RzKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBDb2luIGlkICR7Y29pbklkfSBkb2Vzbid0IGV4aXN0YClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBjb2luID0gY29pblNuYXBzaG90LmRhdGEoKVxuXG4gICAgLy8gc3RvcCB0cmFja2luZyBhbnkgY3VycmVudGx5IHRyYWNraW5nIGNvaW5zIGFuZCBzZXQgZW5kIHByaWNlIGFuZCB0aW1lc3RhbXBcbiAgICBjb25zdCBjdXJycmVudGx5VHJhY2tpbmcgPSBhd2FpdCBnZXREb2NzKHF1ZXJ5KGNvbGxlY3Rpb24oZGIsICd0cmFja2VkJyksIHdoZXJlKCdlbmRUaW1lc3RhbXAnLCAnPT0nLCBudWxsKSkpXG4gICAgY3VycnJlbnRseVRyYWNraW5nLmZvckVhY2goYXN5bmMgdHJhY2tlZCA9PiB7XG4gICAgICBjb25zdCB0cmFja2VkRGF0YSA9IHRyYWNrZWQuZGF0YSgpXG4gICAgICBjb25zdCBjb2luU25hcCA9IGF3YWl0IGdldERvYyhkb2MoZGIsICdjb2lucycsIHRyYWNrZWREYXRhLmNvaW5JZCkpXG4gICAgICBjb25zdCBjb2luRGF0YSA9IGNvaW5TbmFwLmRhdGEoKVxuXG4gICAgICBjb25zb2xlLmxvZyh7IHRyYWNrZWREYXRhLCBjb2luRGF0YSB9KVxuXG4gICAgICBzZXREb2MoZG9jKGRiLCAndHJhY2tlZCcsIHRyYWNrZWQuaWQpLCB7XG4gICAgICAgIC4uLnRyYWNrZWQuZGF0YSgpLFxuICAgICAgICBlbmRUaW1lc3RhbXA6IFRpbWVzdGFtcC5ub3coKSxcbiAgICAgICAgZW5kUHJpY2U6IGNvaW5EYXRhLnByaWNlXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgJ3RyYWNrZWQnKSwge1xuICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICBjb2luSWQ6IGNvaW5JZCxcbiAgICAgIHN0YXJ0UHJpY2U6IGNvaW4ucHJpY2UsXG4gICAgICBlbmRQcmljZTogbnVsbCxcbiAgICAgIHN0YXJ0VGltZXN0YW1wOiBUaW1lc3RhbXAubm93KCksXG4gICAgICBlbmRUaW1lc3RhbXA6IG51bGwsXG4gICAgfSlcblxuICAgIC8vIHJlZGlyZWN0IHRvIHBvcnRmb2xpbyBwYWdlXG4gICAgbG9jYXRpb24uaHJlZiA9ICcvcG9ydGZvbGlvJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICA8Qm94IGdhcD0nbWVkaXVtJyB3aWR0aD0nMjByZW0nPlxuICAgICAgICA8aDI+U3RhcnQgdHJhY2tpbmcgPFRleHQgY29sb3I9J2ZvY3VzJyBzaXplPScxLjVyZW0nIHdlaWdodD17NjAwfT57Y29pbklkfTwvVGV4dD48L2gyPlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgdHlwZT0nbnVtYmVyJ1xuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBhbiBhbW91bnQgdG8gdHJhY2snXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNvbG9yPSdmb2N1cydcbiAgICAgICAgICBkaXNhYmxlZD17IWFtb3VudH1cbiAgICAgICAgICBsYWJlbD0nU3RhcnQgVHJhY2tpbmcnXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX1cbiAgICAgICAgICBvbkNsaWNrPXtzdGFydFRyYWNraW5nfVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3RhdGUiLCJhZGREb2MiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0RG9jIiwiZ2V0RG9jcyIsInF1ZXJ5Iiwic2V0RG9jIiwiVGltZXN0YW1wIiwid2hlcmUiLCJkYiIsIkJveCIsIkJ1dHRvbiIsIlRleHQiLCJUZXh0SW5wdXQiLCJUcmFja0NvaW4iLCJyb3V0ZXIiLCJjb2luSWQiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJzdGFydFRyYWNraW5nIiwiY29pblNuYXBzaG90IiwiZXhpc3RzIiwiY29uc29sZSIsImxvZyIsImNvaW4iLCJkYXRhIiwiY3VycnJlbnRseVRyYWNraW5nIiwiZm9yRWFjaCIsInRyYWNrZWQiLCJ0cmFja2VkRGF0YSIsImNvaW5TbmFwIiwiY29pbkRhdGEiLCJpZCIsImVuZFRpbWVzdGFtcCIsIm5vdyIsImVuZFByaWNlIiwicHJpY2UiLCJzdGFydFByaWNlIiwic3RhcnRUaW1lc3RhbXAiLCJsb2NhdGlvbiIsImhyZWYiLCJhbGlnbiIsImdhcCIsIndpZHRoIiwiaDIiLCJjb2xvciIsInNpemUiLCJ3ZWlnaHQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpc2FibGVkIiwibGFiZWwiLCJzdHlsZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/track/[coinId].js\n");

/***/ }),

/***/ "./utils/firebaseConfig.js":
/*!*********************************!*\
  !*** ./utils/firebaseConfig.js ***!
  \*********************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyA8np8HRa9dpQyegt6pN45Ws7aROPJjkFI\",\n    authDomain: \"crypto-tracker-cc922.firebaseapp.com\",\n    databaseURL: \"https://crypto-tracker-cc922-default-rtdb.europe-west1.firebasedatabase.app\",\n    projectId: \"crypto-tracker-cc922\",\n    storageBucket: \"crypto-tracker-cc922.appspot.com\",\n    messagingSenderId: \"876150894888\",\n    appId: \"1:876150894888:web:164f5a6df9db6c63fa201d\",\n    measurementId: \"G-57VS3DXC49\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9maXJlYmFzZUNvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRDO0FBQ0s7QUFFakQsTUFBTUUsY0FBYyxHQUFHO0lBQ3JCQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsc0NBQXNDO0lBQ2xEQyxXQUFXLEVBQUUsNkVBQTZFO0lBQzFGQyxTQUFTLEVBQUUsc0JBQXNCO0lBQ2pDQyxhQUFhLEVBQUUsa0NBQWtDO0lBQ2pEQyxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0lBQ2xEQyxhQUFhLEVBQUUsY0FBYztDQUM5QjtBQUVNLE1BQU1DLEdBQUcsR0FBR1gsMkRBQWEsQ0FBQ0UsY0FBYyxDQUFDO0FBQ3pDLE1BQU1VLEVBQUUsR0FBR1gsZ0VBQVksQ0FBQ1UsR0FBRyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1maXJlLy4vdXRpbHMvZmlyZWJhc2VDb25maWcuanM/NzIwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJ1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJ1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUE4bnA4SFJhOWRwUXllZ3Q2cE40NVdzN2FST1BKamtGSVwiLFxuICBhdXRoRG9tYWluOiBcImNyeXB0by10cmFja2VyLWNjOTIyLmZpcmViYXNlYXBwLmNvbVwiLFxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL2NyeXB0by10cmFja2VyLWNjOTIyLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHBcIixcbiAgcHJvamVjdElkOiBcImNyeXB0by10cmFja2VyLWNjOTIyXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwiY3J5cHRvLXRyYWNrZXItY2M5MjIuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiODc2MTUwODk0ODg4XCIsXG4gIGFwcElkOiBcIjE6ODc2MTUwODk0ODg4OndlYjoxNjRmNWE2ZGY5ZGI2YzYzZmEyMDFkXCIsXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy01N1ZTM0RYQzQ5XCJcbn1cblxuZXhwb3J0IGNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpXG5leHBvcnQgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKVxuIl0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRGaXJlc3RvcmUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImRiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/firebaseConfig.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/track/[coinId].js"));
module.exports = __webpack_exports__;

})();