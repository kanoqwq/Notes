/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_Graph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Graph */ \"./src/utils/Graph.ts\");\n\n(() => {\n  try {\n    let nodes = ['v1', 'v2', 'v3', 'v4', 'v5', 'v6'];\n    let arcs = [[0, 3, 4, 5], [0, 2, 4], [4, 5], [0, 2, 5], [0, 1, 2], [0, 2, 3]];\n    let graph = new _utils_Graph__WEBPACK_IMPORTED_MODULE_0__[\"default\"](nodes.length);\n    graph.init(nodes, arcs);\n    let result = graph.GraphsTraver('dfs', 1);\n    console.log(result);\n  } catch (e) {\n    console.log(e);\n    alert(e);\n  }\n})();\n\n//# sourceURL=webpack://day3/./src/index.ts?");

/***/ }),

/***/ "./src/utils/CircleQueue.ts":
/*!**********************************!*\
  !*** ./src/utils/CircleQueue.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\nclass CircleQueue {\n  constructor(arrMaxSize) {\n    this._maxSize = arrMaxSize + 1;\n    this._arr = new Array();\n    this._front = 0;\n    this._rear = 0;\n  }\n  isFull() {\n    let {\n      _rear,\n      _maxSize,\n      _front\n    } = this;\n    return (_rear + 1) % _maxSize === _front;\n  }\n  isEmpty() {\n    return this._rear === this._front;\n  }\n  push(item) {\n    if (this.isFull()) {\n      throw new Error('队列已满!');\n    }\n    this._arr[this._rear] = item;\n    this._rear = (this._rear + 1) % this._maxSize;\n  }\n  pop() {\n    if (this.isEmpty()) {\n      throw new Error('队列为空!');\n    }\n    let val = this._arr[this._front];\n    this._front = (this._front + 1) % this._maxSize;\n    return val;\n  }\n  show() {\n    if (this.isEmpty()) {\n      throw new Error('队列为空!');\n    }\n    let {\n      _front,\n      _rear,\n      _maxSize\n    } = this;\n    let tmp = '';\n    for (let i = _front; i < _front + this.length(); i++) {\n      tmp += 'arr[' + i % _maxSize + ']=' + this._arr[i % _maxSize] + ' ';\n    }\n    tmp = tmp.trim();\n    console.log(tmp);\n  }\n  head() {\n    if (this.isEmpty()) {\n      throw new Error('队列为空!');\n    }\n    let {\n      _front,\n      _arr\n    } = this;\n    return _arr[_front];\n  }\n  length() {\n    let {\n      _front,\n      _rear,\n      _maxSize\n    } = this;\n    let sum;\n    sum = (_rear - _front + _maxSize) % _maxSize;\n    return sum;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CircleQueue);\n\n//# sourceURL=webpack://day3/./src/utils/CircleQueue.ts?");

/***/ }),

/***/ "./src/utils/Graph.ts":
/*!****************************!*\
  !*** ./src/utils/Graph.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _NODE__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NODE */ \"./src/utils/NODE.ts\");\n/* harmony import */ var _CircleQueue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CircleQueue */ \"./src/utils/CircleQueue.ts\");\n\n\nclass Graph {\n  constructor(nodeCount) {\n    this._nodeCount = nodeCount;\n    this._headList = new Array();\n    this._visitedNode = new Array();\n    for (let i = 0; i < nodeCount; i++) {\n      this._visitedNode.push(false);\n    }\n    this._tempQueue = new _CircleQueue__WEBPACK_IMPORTED_MODULE_1__[\"default\"](nodeCount);\n    this._printStr = '';\n  }\n  get nodeCount() {\n    return this._nodeCount;\n  }\n  init(data, pointIndex) {\n    data.forEach(element => {\n      this._headList.push(new _NODE__WEBPACK_IMPORTED_MODULE_0__[\"default\"](element));\n    });\n    for (let i = 0; i < pointIndex.length; i++) {\n      let curHead = this._headList[i];\n      for (let j = 0; j < pointIndex[i].length; j++) {\n        if (pointIndex[i][j] >= data.length || pointIndex[i][j] < 0) {\n          throw new Error('您的下标输入有误');\n        }\n        curHead.next = new _NODE__WEBPACK_IMPORTED_MODULE_0__[\"default\"](pointIndex[i][j]);\n        curHead = curHead.next;\n      }\n    }\n  }\n  DFS(index) {\n    if (this.isOverFlow(index)) {\n      throw new Error('您的下标输入有误');\n    }\n    this.visit(this._headList[index].data);\n    this._visitedNode[index] = true;\n    let p = this._headList[index].next;\n    while (p) {\n      if (this._visitedNode[p.data] !== true) {\n        this.DFS(p.data);\n      }\n      p = p.next;\n    }\n  }\n  BFS(index) {\n    if (this.isOverFlow(index)) {\n      throw new Error('您的下标输入有误');\n    }\n    this.visit(this._headList[index].data);\n    this._visitedNode[index] = true;\n    this._tempQueue.push(index);\n    while (this._tempQueue.isEmpty() == false) {\n      let val = this._tempQueue.pop();\n      let Arc = this._headList[val].next;\n      while (Arc != null) {\n        if (this._visitedNode[Arc === null || Arc === void 0 ? void 0 : Arc.data] === false) {\n          this.visit(this._headList[Arc === null || Arc === void 0 ? void 0 : Arc.data].data);\n          this._visitedNode[Arc === null || Arc === void 0 ? void 0 : Arc.data] = true;\n          this._tempQueue.push(Arc === null || Arc === void 0 ? void 0 : Arc.data);\n        }\n        Arc = Arc.next;\n      }\n    }\n  }\n  GraphsTraver(howTo, startIndex) {\n    this._printStr = '';\n    let regexp = /^(BFS)|(DFS)$/;\n    howTo = howTo.trim().toUpperCase();\n    if (regexp.exec(howTo)) {\n      howTo = regexp.exec(howTo)[0];\n    } else {\n      throw new Error('参数只能包含 BFS或者DFS ');\n    }\n    if (startIndex) {\n      howTo == 'BFS' ? this.BFS(startIndex) : this.DFS(startIndex);\n    }\n    for (let i = 0; i < this.nodeCount; i++) {\n      if (!this._visitedNode[i]) {\n        howTo == 'BFS' ? this.BFS(i) : this.DFS(i);\n      }\n    }\n    return this._printStr;\n  }\n  visit(str) {\n    this._printStr += str + ' ';\n  }\n  isOverFlow(num) {\n    return num >= this._nodeCount || num < 0;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Graph);\n\n//# sourceURL=webpack://day3/./src/utils/Graph.ts?");

/***/ }),

/***/ "./src/utils/NODE.ts":
/*!***************************!*\
  !*** ./src/utils/NODE.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\nclass NODE {\n  constructor(data) {\n    this.next = null;\n    this._data = data;\n  }\n  get data() {\n    return this._data;\n  }\n  set data(value) {\n    this._data = value;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NODE);\n\n//# sourceURL=webpack://day3/./src/utils/NODE.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;