"use strict";
(() => {
var exports = {};
exports.id = 76;
exports.ids = [76];
exports.modules = {

/***/ 9146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



const AlbumDetails = ({ album  })=>{
    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    if (route.isFallback) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Albums Details - Title Meta NextJS"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "Loading....."
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Albums Details - Title Meta NextJS"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                children: [
                    " Title : ",
                    album.title
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlbumDetails);
async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    albumId: "1"
                }
            }
        ],
        fallback: false
    };
}
async function getStaticProps(context) {
    const { params  } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumId}`);
    const data = await response.json();
    if (!data.id) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            album: data
        },
        revalidate: 10
    };
}


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9146));
module.exports = __webpack_exports__;

})();