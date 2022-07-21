"use strict";
(() => {
var exports = {};
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 9110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * /api
 * @param req 
 * @param res 
 */ const handler = async (req, res)=>{
    if (req.method == "GET") {
        // Api request method is GET
        const response = await fetch("https://www.google.com/ping?sitemap=http://43.204.226.153/sitemap-0.xml");
        console.log("res=============>>>>", response);
        res.status(200).send("Success");
    } else if (req.method == "POST") {
    // Api request method is POST
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9110));
module.exports = __webpack_exports__;

})();