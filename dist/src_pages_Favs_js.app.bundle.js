/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcurso_platzi_react_avanzado"] = self["webpackChunkcurso_platzi_react_avanzado"] || []).push([["src_pages_Favs_js"],{

/***/ "./src/components/ListOfFavs/index.js":
/*!********************************************!*\
  !*** ./src/components/ListOfFavs/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListOfFavs\": () => (/* binding */ ListOfFavs)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/ListOfFavs/styles.js\");\n\n\n\nvar ListOfFavs = function ListOfFavs(_ref) {\n  var _ref$favs = _ref.favs,\n      favs = _ref$favs === void 0 ? [] : _ref$favs;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Section, null, favs.map(function (fav) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n      key: fav.id,\n      to: \"/detail/\".concat(fav.id)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Img, {\n      src: fav.src\n    }));\n  })));\n};\n\n//# sourceURL=webpack://curso-platzi-react-avanzado/./src/components/ListOfFavs/index.js?");

/***/ }),

/***/ "./src/components/ListOfFavs/styles.js":
/*!*********************************************!*\
  !*** ./src/components/ListOfFavs/styles.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Section\": () => (/* binding */ Section),\n/* harmony export */   \"Img\": () => (/* binding */ Img)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject, _templateObject2;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Section = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n\\tdisplay: grid;\\n\\tgrid-template-columns: repeat(3, 1fr);\\n\\tjustify-content: center;\\n\\tgrid-auto-rows: 120px;\\n\\tpadding: 5px;\\n\\tjustify-items: center;\\n\\tmin-height: 30vh;\\n\"])));\nvar Img = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tpadding: 5px;\\n\\tmargin: 3px;\\n\\tobject-fit: cover;\\n\\tborder-radius: 15px;\\n\\tbackground: rgb(249,249,249);\\n\"])));\n\n//# sourceURL=webpack://curso-platzi-react-avanzado/./src/components/ListOfFavs/styles.js?");

/***/ }),

/***/ "./src/hooks/useGetFavorites.js":
/*!**************************************!*\
  !*** ./src/hooks/useGetFavorites.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useGetFavorites\": () => (/* binding */ useGetFavorites)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/core/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar GET_FAVORITES = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\nquery getFavs {\\n  favs {\\n    id\\n    categoryId\\n    src\\n    likes\\n    userId\\n    }\\n  }\\n\"])));\nvar useGetFavorites = function useGetFavorites() {\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(GET_FAVORITES, {\n    fetchPolicy: 'cache-and-network'\n  }),\n      _useQuery$data = _useQuery.data,\n      data = _useQuery$data === void 0 ? {\n    favs: []\n  } : _useQuery$data;\n\n  var favs = data.favs;\n  return {\n    favs: favs\n  };\n};\n\n//# sourceURL=webpack://curso-platzi-react-avanzado/./src/hooks/useGetFavorites.js?");

/***/ }),

/***/ "./src/pages/Favs.js":
/*!***************************!*\
  !*** ./src/pages/Favs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _components_ListOfFavs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ListOfFavs */ \"./src/components/ListOfFavs/index.js\");\n/* harmony import */ var _hooks_useGetFavorites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useGetFavorites */ \"./src/hooks/useGetFavorites.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout/index.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var _useGetFavorites = (0,_hooks_useGetFavorites__WEBPACK_IMPORTED_MODULE_2__.useGetFavorites)(),\n      favs = _useGetFavorites.favs;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n    title: \"Tus favoritos\",\n    subtitle: \"Aqui puedes encontrar tus favoritos\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ListOfFavs__WEBPACK_IMPORTED_MODULE_1__.ListOfFavs, {\n    favs: favs\n  }));\n});\n\n//# sourceURL=webpack://curso-platzi-react-avanzado/./src/pages/Favs.js?");

/***/ })

}]);