(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5302:
/***/ ((module) => {

// Exports
module.exports = {
	"navigation": "Navigation_navigation__VLdcJ",
	"item": "Navigation_item__GlUI3"
};


/***/ }),

/***/ 630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/Navigation.module.css
var Navigation_module = __webpack_require__(5302);
var Navigation_module_default = /*#__PURE__*/__webpack_require__.n(Navigation_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Navigation/index.tsx



const Navigation = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Navigation_module_default()).navigation,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Navigation_module_default()).item,
                        children: "Home"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/about-us",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Navigation_module_default()).item,
                        children: "About"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/contact-us",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Navigation_module_default()).item,
                        children: "Contact"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_Navigation = (Navigation);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    const route = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "UTF-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "Shadab Saifi"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "The Blogging platform for developers"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "Keywords",
                        content: "home, albums, posts, comments, users, about-us, contact-us"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Here you can find the home, albums, posts, comments, users, about-us and contact-us realeted information to easyly catch the information about all the pages which are linked in our website."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: `http://43.204.226.153${route.asPath}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: "Test the Next Server for google indexing"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: "Start your developer blog, share ideas and connect with the dev community"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: "The Blogging platform for developers"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "article:published_time",
                        content: `${new Date()}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "google-site-verification",
                        content: "lP0oflGwPxxx_XQAz-baDqGnew3ZZ4zrU06gPiMuFHY"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navigation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664], () => (__webpack_exec__(630)));
module.exports = __webpack_exports__;

})();