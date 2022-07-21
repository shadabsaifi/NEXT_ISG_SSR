"use strict";
(() => {
var exports = {};
exports.id = 745;
exports.ids = [745];
exports.modules = {

/***/ 7004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * /api/blog
 */ const handler = (req, res)=>{
    if (req.method == "GET") {
        res.status(200).json({
            name: "Blog route api"
        });
    } else if (req.method == "POST") {} else if (req.method == "DELETE") {} else if (req.method == "PUT") {} else {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7004));
module.exports = __webpack_exports__;

})();