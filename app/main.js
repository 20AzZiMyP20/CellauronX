/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst {\n  app,\n  BrowserWindow,\n  ipcMain\n} = require(\"electron\");\nconst path = require(\"path\");\nconst start = function () {\n  const window = new BrowserWindow({\n    width: 800,\n    height: 600,\n    minWidth: 400,\n    minHeight: 300,\n    frame: false,\n    acceptFirstMouse: true,\n    useContentSize: true,\n    center: true,\n    webPreferences: {\n      preload: path.resolve(__dirname, \"./preload.js\"),\n      nodeIntegration: true,\n      contextIsolation: true\n    }\n  });\n  ipcMain.on(\"collapse\", () => window.isMinimized() ? window.restore() : window.minimize());\n  ipcMain.on(\"expand\", () => window.isMaximized() ? window.restore() : window.maximize());\n  ipcMain.on(\"close\", () => window.close());\n  window.loadFile(\"./index.html\");\n};\napp.on(\"ready\", start);\n\n//# sourceURL=webpack://cellauron/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;