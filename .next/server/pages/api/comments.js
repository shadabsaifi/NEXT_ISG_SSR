"use strict";
(() => {
var exports = {};
exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 6330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9884);

/**
 * /api/comments
 * @param req 
 * @param res 
 */ const handler = (req, res)=>{
    if (req.method == "GET") {
        // Api request method is GET
        res.status(200).send(_db_json__WEBPACK_IMPORTED_MODULE_0__/* .comments */ .G_);
    } else if (req.method == "POST") {
    // Api request method is POST
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [884], () => (__webpack_exec__(6330)));
module.exports = __webpack_exports__;

})();