"use strict";
(() => {
var exports = {};
exports.id = 612;
exports.ids = [612];
exports.modules = {

/***/ 915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * /api/blog/recent
 */ const handler = (req, res)=>{
    res.status(200).json({
        name: "Recent route api"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(915));
module.exports = __webpack_exports__;

})();