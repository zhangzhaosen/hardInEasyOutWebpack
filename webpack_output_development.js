/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => { // webpackBootstrap
    var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
 !*** ./main.js ***!
 \*****************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

                eval("const show = __webpack_require__(/*! ./show.js */ \"./show.js\");\r\n// 执行 show 函数\r\nshow('Webpack');\n\n//# sourceURL=webpack://1-3/./main.js?");

                /***/
}),

/***/ "./show.js":
/*!*****************!*\
 !*** ./show.js ***!
 \*****************/
/***/ ((module) => {

                eval("// 操作 DOM 元素，把 content 显示到网页上\r\nfunction show(content) {\r\n    window.document.getElementById('app').innerText = 'Hello,' + content;\r\n  }\r\n  \r\n  // 通过 CommonJS 规范导出 show 函数\r\n  module.exports = show;\n\n//# sourceURL=webpack://1-3/./show.js?");

                /***/
})

    });
    /************************************************************************/
    // The module cache
    var __webpack_module_cache__ = {};

    // The require function
    function __webpack_require__(moduleId) {
        // Check if module is in cache
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
            return cachedModule.exports;
        }
        // Create a new module (and put it into the cache)
        var module = __webpack_module_cache__[moduleId] = {
            // no module.id needed
            // no module.loaded needed
            exports: {}
        };

        // Execute the module function
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

        // Return the exports of the module
        return module.exports;
    }

    /************************************************************************/

    // startup
    // Load entry module and return exports
    // This entry module can't be inlined because the eval devtool is used.
    var __webpack_exports__ = __webpack_require__("./main.js");

})()
    ;