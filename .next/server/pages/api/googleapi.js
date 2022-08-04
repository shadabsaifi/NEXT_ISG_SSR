"use strict";
(() => {
var exports = {};
exports.id = 877;
exports.ids = [877];
exports.modules = {

/***/ 8901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ googleapi)
});

;// CONCATENATED MODULE: ./google_service_account.json
const google_service_account_namespaceObject = JSON.parse('{"Bq":"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDQsswmmkZ7HFV4\\nQwo0oLyqClQaF2Na5yWJI2fW4EFvW6VFITLwEI0PJyOjCR1qgPT32HSlaeoSczcV\\nZJROPKrmXkM3voF+9/woiuDWUc8xX/H4u17UOZDQE0NakS9VB7LudjoWt2EfP5WP\\nKqeMHZWVw03E/NUsHMS2SnS7lOc26cAPUJD6o50FbCpsSQavmtQunlDL/GqBTtTV\\nR7QHGCO88ITOZ+ace9UNla/XIRBlbBK9gADjBf+FiwjsxStHfPhNJPtKaMVDyZWn\\ngK2M7Lh6SBjtpvU7J5Jctm3ouLqY4og5+Vg1+Kt8qf5pMr30+7X74V/jgTCh6twY\\n2Snd9vnLAgMBAAECggEAAu/a/C75uiohaZCSLbIy8CiL1FUOtGJJWxumR4CtMGVi\\nKNwOk/Qt5Vcx1LFAT+QbB1E0cM7R7krfHtpW40lquLg2w51XGYV9jDmfqPDnAu3s\\nj4ldtxpM8+irRF8uWEjSZYcH2MxTTC6rDk7HTkel24gvd7Z8tbhEXfkHfPZNbZIZ\\n6zcrMKzv7QArwXYl696Vh/EHJuiqmI1a5ZvR7c+Q0QtIVtX5D8Pyf8mjZ21TbdoF\\nLl9hxFufbCiBw0CBBVhEDog45jiJN5MUvm4+Kqi0zMNVbB0HBZ+pUe1RYM9vjVis\\nyGGY7DR73YWbwIJgHM4LyXaxLrcY7SepjD1gDW/h4QKBgQD2eWFC4xgHY8286DZk\\nWeVXT79BgN6niQEyR9Yz7wl015LNHCWF/iO6UUdb46TfKy+69lXCtm2itH3vhe6d\\ntOwtukndUsATtWpLXp+uHLJz5drAKg4BHRnHR1nFKRA1zC1iQ8K59eYrvzSFDl8B\\nBzZm6eHxLDxeEihpBVO6AAFsYQKBgQDYw6n0CB63d163FRnSZXucRotMj+2GLqzP\\ng5s74eqj7qMktCGPRvutEzXFahGRHFlTJpI3lawF90yAH+fbQg0kCg7beTYWm8hb\\nHvQbo6z6mXqaeJ7KlASePwV6X6thAcDwrtFTzrWZqSgzor63b2pQ+tOBI3nIyrgn\\nYzTMPkO1qwKBgFw0WktQc1vIXV4PLNHrw10fazgRArqACV+K+johcVMxlix/HBZ9\\nVVZNM7nPdo06NbfmkXyvDGKyzO3/F54N4dDVgO54F30IAATEGE5lU+kBkw0SbnzC\\nKzOeoJmeW/8UK+I34S/6Kqow9G/WSXoz/YkQc8LqPocemdl38bOCbwXhAoGBALrM\\nW0CWYsoeT3wc7gS3Ob/htxeCjOFuhbPKqVMAjDE7bFIr/SO4uxhajqMSlhLkSEH0\\n4lqOXBFEHSPo2ujDUgm1tToDic4P76g+04SiF2ZaLyLBQa43wocQrkrX+Rt+5GNF\\nc9TyNOM3uBJPdGUl2Yvxq6UFCmUz9WDUCGLeYYFDAoGAJGiGvHS1WdzZzzkrvX9h\\npg0U2lgnQ6VUQ1gtEp/jpq7wuQEbv+h1cM8HmKHZxJfWaskBQtpaX+EeByg8sjat\\nkdcdI2ygtFYBU/r16iyd9hoSKmKXgwCz1HyimqWCvL1Zo6BhcZYHBXcLDEp1i5l9\\nme8HRd7Tx9C9qZEzGl9qjKw=\\n-----END PRIVATE KEY-----\\n","yR":"cms-content@cms-project-355612.iam.gserviceaccount.com"}');
;// CONCATENATED MODULE: external "googleapis"
const external_googleapis_namespaceObject = require("googleapis");
;// CONCATENATED MODULE: ./pages/api/googleapi.tsx


const handler = async (req, res)=>{
    try {
        const auth = new external_googleapis_namespaceObject.google.auth.JWT(google_service_account_namespaceObject.yR, "", google_service_account_namespaceObject.Bq, [
            "https://www.googleapis.com/auth/indexing"
        ], "");
        const indexer = external_googleapis_namespaceObject.google.indexing({
            version: "v3",
            auth
        });
        const indexRequest = await indexer.urlNotifications.publish({
            requestBody: {
                type: "URL_UPDATED",
                url: `http://52.66.210.90`
            }
        });
        res.status(200).send(indexRequest.data);
    } catch (error) {
        console.log("error :>> ", error);
        res.status(400).send(error);
    }
};
/* harmony default export */ const googleapi = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8901));
module.exports = __webpack_exports__;

})();