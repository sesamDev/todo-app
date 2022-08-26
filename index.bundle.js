"use strict";
(self["webpackChunktodo_app"] = self["webpackChunktodo_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --header-bg-color: rgb(197, 84, 67);\n    --header-title-color: rgb(255, 255, 255);\n    --side-panel-bg-color: rgb(250, 250, 250);\n    --main-content-bg-color: rgb(254, 254, 254);\n    --side-panel-items-color: rgb(110, 110, 110);\n    font-family: 'Roboto', sans-serif;\n\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    position: relative;\n    display: grid;\n    grid-template-rows: .07fr 1fr;\n    grid-template-columns: .3fr 1fr;\n}\n\n.header {\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    color: var(--header-title-color);\n    height: 100%;\n    background-color: var(--header-bg-color);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.side-panel {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    width: 100%;\n    height: 100%;\n    background-color: var(--side-panel-bg-color);\n}\n\n.side-panel>ul {\n    list-style: none;\n    font-weight: 500;\n    color: var(--side-panel-items-color);\n}\n\n/* #addProjectButton {\n    font-size: 1rem;\n    cursor: pointer;\n    transition: all, .5sec;\n    -moz-transition: all, .5sec;\n}\n\n#addProjectButton:hover {\n    font-size: 4rem;\n} */\n\n#addProjectButton {\n    font-size: 1em;\n    cursor: pointer;\n    transition: all .5s ease;\n}\n\n#addProjectButton:hover {\n    font-size: 1.1em;\n    color: rgb(49, 49, 49);\n\n}\n\n#addProjectButton:active {\n    font-size: 1.1em;\n    color: rgb(179, 179, 179);\n\n}\n\n\n\n\n.main-content {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    background-color: var(--main-content-bg-color);\n    display: grid;\n    grid-template-rows: 100px 100px;\n    width: 100%;\n    height: 100%;\n}\n\n#addTaskButton {\n    grid-row: 1 / 2;\n    height: 50px;\n    width: 50px;\n    background-color: var(--side-panel-bg-color);\n    color: var(--side-panel-items-color);\n    font-size: 3rem;\n    border-radius: 50%;\n    margin: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid rgb(216, 216, 216);\n}\n\n#addTaskButton:hover {\n    border: 1px solid rgb(121, 121, 121);\n    background-color: rgb(149, 149, 149);\n    color: white;\n\n}\n\n#addTaskButton:active {\n    border: 1px solid rgb(216, 216, 216);\n    background-color: var(--side-panel-bg-color);\n    color: var(--side-panel-items-color);\n\n}\n\n.form-container {\n    --form-height: 300px;\n    --form-width: 625px;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    position: absolute;\n    background-color: var(--side-panel-bg-color);\n    height: var(--form-height);\n    width: var(--form-width);\n    top: 200px;\n    right: calc(100vw/2 - calc(var(--form-width)/2));\n    border-radius: .5rem;\n    box-shadow: 8px 7px 14px 0px rgba(133, 133, 133, 0.75);\n    -webkit-box-shadow: 8px 7px 14px 0px rgba(133, 133, 133, 0.75);\n    -moz-box-shadow: 8px 7px 14px 0px rgba(133, 133, 133, 0.75);\n}\n\nform {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: .5fr 1fr 1fr;\n    grid-row: 1 / 3;\n    grid-column: 1 / 3;\n}\n\nform>h2 {\n    margin: 1rem 1rem;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    color: var(--side-panel-items-color)\n}\n\nform>input[type=text] {\n    font-size: 1.2rem;\n    border-radius: .5rem;\n    border: none;\n    padding-left: 1rem;\n    width: 300px;\n    height: 50px;\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    margin-left: 1rem;\n}\n\nform>input[type=text]:hover {\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\n\nform>textarea {\n    resize: none;\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n    height: 150px;\n    margin: 0 0 1rem 1rem;\n    border: none;\n    padding: 1rem 0 0 1rem;\n}\n\nform>textarea:hover {\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform>label {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    margin: 1.5rem 0 0 3.5rem;\n    color: var(--side-panel-items-color)\n}\n\nform>input[type=date] {\n    padding-left: 1rem;\n    border-radius: .5rem;\n    border: none;\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    height: 35px;\n    width: 150px;\n    margin: 1rem 0 0 8rem;\n}\n\nform>input[type=date]:hover {\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform>input[name=urgency] {\n    border-radius: .5rem;\n    border: none;\n    padding-left: 1rem;\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    height: 35px;\n    width: 150px;\n    margin: 0rem 0 0 8rem;\n}\n\nform>input[name=urgency]:hover {\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform>input[name=parentProject] {\n    grid-column: 2/3;\n    grid-row: 2 / 3;\n    border-radius: .5rem;\n    border: none;\n    padding-left: 1rem;\n    height: 35px;\n    width: 150px;\n    margin: 3rem 0 0 8rem;\n}\n\nform>input[name=parentProject]:hover {\n\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\n#submit-button {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    height: 35px;\n    width: 150px;\n    margin: 3rem 0 0 8rem;\n    background-color: var(--header-bg-color);\n    color: white;\n    font-size: 1.1rem;\n    border-radius: .5rem;\n}\n\n#submit-button:hover {\n    background-color: rgb(59, 180, 93);\n\n}\n\nform>input[type=button] {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    height: 35px;\n    width: 150px;\n    margin: 6rem 0 0 8rem;\n    color: black;\n    font-size: 1.1rem;\n    border-radius: .5rem;\n    background-color: whitesmoke;\n\n}\n\nform>input[type=button]:hover {\n    background-color: rgb(180, 48, 48);\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --header-bg-color: rgb(197, 84, 67);\n    --header-title-color: rgb(255, 255, 255);\n    --side-panel-bg-color: rgb(250, 250, 250);\n    --main-content-bg-color: rgb(254, 254, 254);\n    --side-panel-items-color: rgb(110, 110, 110);\n    font-family: 'Roboto', sans-serif;\n\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    position: relative;\n    display: grid;\n    grid-template-rows: .07fr 1fr;\n    grid-template-columns: .3fr 1fr;\n}\n\n.header {\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    color: var(--header-title-color);\n    height: 100%;\n    background-color: var(--header-bg-color);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.side-panel {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    width: 100%;\n    height: 100%;\n    background-color: var(--side-panel-bg-color);\n}\n\n.side-panel>ul {\n    list-style: none;\n    font-weight: 500;\n    color: var(--side-panel-items-color);\n}\n\n/* #addProjectButton {\n    font-size: 1rem;\n    cursor: pointer;\n    transition: all, .5sec;\n    -moz-transition: all, .5sec;\n}\n\n#addProjectButton:hover {\n    font-size: 4rem;\n} */\n\n#addProjectButton {\n    font-size: 1em;\n    cursor: pointer;\n    transition: all .5s ease;\n}\n\n#addProjectButton:hover {\n    font-size: 1.1em;\n    color: rgb(49, 49, 49);\n\n}\n\n#addProjectButton:active {\n    font-size: 1.1em;\n    color: rgb(179, 179, 179);\n\n}\n\n\n\n\n.main-content {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    background-color: var(--main-content-bg-color);\n    display: grid;\n    grid-template-rows: 100px 100px;\n    width: 100%;\n    height: 100%;\n}\n\n#addTaskButton {\n    grid-row: 1 / 2;\n    height: 50px;\n    width: 50px;\n    background-color: var(--side-panel-bg-color);\n    color: var(--side-panel-items-color);\n    font-size: 3rem;\n    border-radius: 50%;\n    margin: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid rgb(216, 216, 216);\n}\n\n#addTaskButton:hover {\n    border: 1px solid rgb(121, 121, 121);\n    background-color: rgb(149, 149, 149);\n    color: white;\n\n}\n\n#addTaskButton:active {\n    border: 1px solid rgb(216, 216, 216);\n    background-color: var(--side-panel-bg-color);\n    color: var(--side-panel-items-color);\n\n}\n\n.form-container {\n    --form-height: 300px;\n    --form-width: 625px;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    position: absolute;\n    background-color: var(--side-panel-bg-color);\n    height: var(--form-height);\n    width: var(--form-width);\n    top: 200px;\n    right: calc(100vw/2 - calc(var(--form-width)/2));\n    border-radius: .5rem;\n    box-shadow: 8px 7px 14px 0px rgba(133, 133, 133, 0.75);\n    -webkit-box-shadow: 8px 7px 14px 0px rgba(133, 133, 133, 0.75);\n    -moz-box-shadow: 8px 7px 14px 0px rgba(133, 133, 133, 0.75);\n}\n\nform {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: .5fr 1fr 1fr;\n    grid-row: 1 / 3;\n    grid-column: 1 / 3;\n}\n\nform>h2 {\n    margin: 1rem 1rem;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    color: var(--side-panel-items-color)\n}\n\nform>input[type=text] {\n    font-size: 1.2rem;\n    border-radius: .5rem;\n    border: none;\n    padding-left: 1rem;\n    width: 300px;\n    height: 50px;\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    margin-left: 1rem;\n}\n\nform>input[type=text]:hover {\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\n\nform>textarea {\n    resize: none;\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n    height: 150px;\n    margin: 0 0 1rem 1rem;\n    border: none;\n    padding: 1rem 0 0 1rem;\n}\n\nform>textarea:hover {\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform>label {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    margin: 1.5rem 0 0 3.5rem;\n    color: var(--side-panel-items-color)\n}\n\nform>input[type=date] {\n    padding-left: 1rem;\n    border-radius: .5rem;\n    border: none;\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    height: 35px;\n    width: 150px;\n    margin: 1rem 0 0 8rem;\n}\n\nform>input[type=date]:hover {\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform>input[name=urgency] {\n    border-radius: .5rem;\n    border: none;\n    padding-left: 1rem;\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    height: 35px;\n    width: 150px;\n    margin: 0rem 0 0 8rem;\n}\n\nform>input[name=urgency]:hover {\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform>input[name=parentProject] {\n    grid-column: 2/3;\n    grid-row: 2 / 3;\n    border-radius: .5rem;\n    border: none;\n    padding-left: 1rem;\n    height: 35px;\n    width: 150px;\n    margin: 3rem 0 0 8rem;\n}\n\nform>input[name=parentProject]:hover {\n\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\n#submit-button {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    height: 35px;\n    width: 150px;\n    margin: 3rem 0 0 8rem;\n    background-color: var(--header-bg-color);\n    color: white;\n    font-size: 1.1rem;\n    border-radius: .5rem;\n}\n\n#submit-button:hover {\n    background-color: rgb(59, 180, 93);\n\n}\n\nform>input[type=button] {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    height: 35px;\n    width: 150px;\n    margin: 6rem 0 0 8rem;\n    color: black;\n    font-size: 1.1rem;\n    border-radius: .5rem;\n    background-color: whitesmoke;\n\n}\n\nform>input[type=button]:hover {\n    background-color: rgb(180, 48, 48);\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/element/element.js":
/*!********************************!*\
  !*** ./src/element/element.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
//Element factory to create base objects that later turns into elements for site.
const Element = (class_name, _id, dom_type, inner_text) => {
    const className = class_name;
    const id = _id;
    const domType = dom_type;
    const innerText = inner_text;

    return { className, id, domType, innerText };
};

//Function to create elements and
function createElement(class_name, id, dom_type, inner_text) {
    return Element(class_name, id, dom_type, inner_text);
}


/***/ }),

/***/ "./src/form/form.js":
/*!**************************!*\
  !*** ./src/form/form.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleForm": () => (/* binding */ toggleForm)
/* harmony export */ });
//Form container
const formContainer = document.createElement('div');
formContainer.classList.add('form-container');

//Form element
const form = document.createElement('form');
form.setAttribute('id', 'todoForm');

//Form title
const formTitle = document.createElement('h2');
formTitle.innerText = 'Create task';

//Title text input
const titleTextInput = document.createElement('input');
titleTextInput.setAttribute('name', 'titleText');
titleTextInput.setAttribute('type', 'text');
titleTextInput.setAttribute('placeholder', 'Title: Example Titel');

//Description text input
const descriptionTextArea = document.createElement('textarea');
descriptionTextArea.setAttribute('name', 'textArea');
descriptionTextArea.setAttribute('rows', '4');
descriptionTextArea.setAttribute('columns', '20');
descriptionTextArea.setAttribute('placeholder', 'Description');

//Due date input
const dueDateInput = document.createElement('input');
dueDateInput.setAttribute('name', 'dueDate');
dueDateInput.setAttribute('type', 'date');

//Due date label
const dueDateLabel = document.createElement('label');
dueDateLabel.setAttribute('name', 'dueDate');
dueDateLabel.innerText = 'Due date'


//Urgency list
const urgencyList = document.createElement('input');
urgencyList.setAttribute('name', 'urgency')
urgencyList.setAttribute('list', 'urgency');
urgencyList.setAttribute('placeholder', 'Set urgency');
const urgencyDatalist = document.createElement('datalist');
urgencyDatalist.setAttribute('id', 'urgency');
const urgencyHigh = document.createElement('option');
urgencyHigh.setAttribute('value', 'High');
const urgencyNormal = document.createElement('option');
urgencyNormal.setAttribute('value', 'Normal');
const urgencyLow = document.createElement('option');
urgencyLow.setAttribute('value', 'Low');

//Submit button
const submitButton = document.createElement('input');
submitButton.setAttribute('type', 'button');
submitButton.setAttribute('id', 'submit-button');
submitButton.setAttribute('value', 'Add task');
submitButton.addEventListener('click', () => {
    const formValues = getFormValues();
    console.log(formValues);
})

//Discard button
const discardButton = document.createElement('input');
discardButton.setAttribute('type', 'button');
discardButton.setAttribute('value', 'Discard task');
discardButton.addEventListener('click', toggleForm);

//Parent project list
const parentProject = document.createElement('input');
parentProject.setAttribute('name', 'parentProject')
parentProject.setAttribute('list', 'parentProject');
parentProject.setAttribute('placeholder', 'Project');
const projectDatalist = document.createElement('datalist');
projectDatalist.setAttribute('id', 'parentProject');
const phProject1 = document.createElement('option');
phProject1.setAttribute('value', 'High');
const phProject2 = document.createElement('option');
phProject2.setAttribute('value', 'Normal');
const phProject3 = document.createElement('option');
phProject3.setAttribute('value', 'Low');
//Create DOM tree
formContainer.appendChild(form);
form.append(formTitle,
    titleTextInput,
    descriptionTextArea,
    dueDateLabel,
    dueDateInput,
    urgencyList,
    urgencyDatalist,
    parentProject,
    projectDatalist,
    submitButton,
    discardButton);
urgencyDatalist.append(urgencyHigh, urgencyNormal, urgencyLow);
projectDatalist.append(phProject1, phProject2, phProject3);

//Used to clear form when toggeling it
function clearForm() {
    form.reset();
}

//Get the values entered to the form
function getFormValues() {
    let elements = document.getElementById("todoForm").elements;
    let obj = {};
    for (var i = 0; i < elements.length; i++) {
        let item = elements.item(i);
        obj[item.name] = item.value;
    }

    return JSON.stringify(obj);
}

function toggleForm() {
    if (document.querySelector('.form-container') === null) {
        document.body.appendChild(formContainer);
    } else {
        document.body.removeChild(formContainer)
        clearForm();
    }

}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/dom_utils */ "./src/utils/dom_utils.js");
/* harmony import */ var _element_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element/element */ "./src/element/element.js");
/* harmony import */ var _form_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form */ "./src/form/form.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






//Create main page elements
const header = (0,_element_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('header', null, 'div', null);
const headerTitle = (0,_element_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('title', null, 'h1', 'TODO Orginazer')
const sidePanel = (0,_element_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('side-panel', null, 'div', null);
const mainContent = (0,_element_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('main-content', null, 'div', null);

//Create an array of DOM elements for header, sidepanel and main content
const mainPageElementsDOM = (0,_utils_dom_utils__WEBPACK_IMPORTED_MODULE_0__.createDomElement)(header, sidePanel, mainContent);
//Add to document.body
(0,_utils_dom_utils__WEBPACK_IMPORTED_MODULE_0__.appendToBody)(mainPageElementsDOM);

//Header title to DOM element
const headerTitleDOM = (0,_utils_dom_utils__WEBPACK_IMPORTED_MODULE_0__.createDomElement)(headerTitle);

//Append title to header
(0,_utils_dom_utils__WEBPACK_IMPORTED_MODULE_0__.appendToTargetClass)('.header', headerTitleDOM);

//Create side panel items
const topItemContainer = (0,_element_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('top-ul', null, 'ul', null);
const allTodosItem = (0,_element_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('side-panel-item', 'allTodos', 'li', "All tasks");
const urgentTodosItem = (0,_element_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('side-panel-item', 'urgentTodos', 'li', "Urgent tasks");
const addProjectButton = (0,_element_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('add-button', 'addProjectButton', 'p', 'Add Project +')

const topItemContainerDOM = (0,_utils_dom_utils__WEBPACK_IMPORTED_MODULE_0__.createDomElement)(topItemContainer);
const topItemContainerChildren = (0,_utils_dom_utils__WEBPACK_IMPORTED_MODULE_0__.createDomElement)(allTodosItem, urgentTodosItem, addProjectButton);

//---MAIN CONTENT---
//Add task button
const addTaskButton = document.createElement('button');
addTaskButton.setAttribute('id', 'addTaskButton');
addTaskButton.innerText = '+';
(0,_utils_dom_utils__WEBPACK_IMPORTED_MODULE_0__.appendToTargetClass)('.main-content', [addTaskButton]);
addTaskButton.addEventListener('click', _form_form__WEBPACK_IMPORTED_MODULE_2__.toggleForm);

//Add side panel items to the DOM as children
(0,_utils_dom_utils__WEBPACK_IMPORTED_MODULE_0__.appendToTargetClass)('.side-panel', topItemContainerDOM);
(0,_utils_dom_utils__WEBPACK_IMPORTED_MODULE_0__.appendToTargetClass)('.top-ul', topItemContainerChildren);



/***/ }),

/***/ "./src/utils/dom_utils.js":
/*!********************************!*\
  !*** ./src/utils/dom_utils.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendToBody": () => (/* binding */ appendToBody),
/* harmony export */   "appendToTargetClass": () => (/* binding */ appendToTargetClass),
/* harmony export */   "createDomElement": () => (/* binding */ createDomElement)
/* harmony export */ });
//Turn Element objects into DOM Elements.
function createDomElement(...source) {
    let arrayOfElements = []
    source.forEach(element => {
        let el = document.createElement(element.domType);
        setElementClass(el, element);
        setElementId(el, element);
        setInnerText(el, element);
        arrayOfElements.push(el);
    });

    return arrayOfElements;
};

//Append DOM Elements to Document body.
function appendToBody(source) {
    source.forEach(element => {
        document.body.appendChild(element);
    });
};

function appendToTargetClass(target, source) {
    source.forEach(child => {
        document.querySelector(target).appendChild(child);
    });
};



//Used to set a DOM elements class.
function setElementClass(target, source) {
    if (source.className === null) { return };
    return target.classList.add(source.className);
};

//Used to set a DOM elements ID.
function setElementId(target, source) {
    if (source.id === null) { return };
    return target.setAttribute('id', source.id);
};

//Used to set a DOM elements Inner text
function setInnerText(target, source) {
    if (source.innerText === null) { return };
    return target.innerText = source.innerText;
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLGNBQWMsVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUs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QUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hIZ0g7QUFDOUQ7QUFDVDtBQUNyQjs7O0FBR3BCO0FBQ0EsZUFBZSwrREFBYTtBQUM1QixvQkFBb0IsK0RBQWE7QUFDakMsa0JBQWtCLCtEQUFhO0FBQy9CLG9CQUFvQiwrREFBYTs7QUFFakM7QUFDQSw0QkFBNEIsa0VBQWdCO0FBQzVDO0FBQ0EsOERBQVk7O0FBRVo7QUFDQSx1QkFBdUIsa0VBQWdCOztBQUV2QztBQUNBLHFFQUFtQjs7QUFFbkI7QUFDQSx5QkFBeUIsK0RBQWE7QUFDdEMscUJBQXFCLCtEQUFhO0FBQ2xDLHdCQUF3QiwrREFBYTtBQUNyQyx5QkFBeUIsK0RBQWE7O0FBRXRDLDRCQUE0QixrRUFBZ0I7QUFDNUMsaUNBQWlDLGtFQUFnQjs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFtQjtBQUNuQix3Q0FBd0Msa0RBQVU7O0FBRWxEO0FBQ0EscUVBQW1CO0FBQ25CLHFFQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7O0FBSUE7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9lbGVtZW50L2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvZm9ybS9mb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3V0aWxzL2RvbV91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1oZWFkZXItYmctY29sb3I6IHJnYigxOTcsIDg0LCA2Nyk7XFxuICAgIC0taGVhZGVyLXRpdGxlLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIC0tc2lkZS1wYW5lbC1iZy1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xcbiAgICAtLW1haW4tY29udGVudC1iZy1jb2xvcjogcmdiKDI1NCwgMjU0LCAyNTQpO1xcbiAgICAtLXNpZGUtcGFuZWwtaXRlbXMtY29sb3I6IHJnYigxMTAsIDExMCwgMTEwKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcblxcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogLjA3ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC4zZnIgMWZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItdGl0bGUtY29sb3IpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2lkZS1wYW5lbCB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWJnLWNvbG9yKTtcXG59XFxuXFxuLnNpZGUtcGFuZWw+dWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1pdGVtcy1jb2xvcik7XFxufVxcblxcbi8qICNhZGRQcm9qZWN0QnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCwgLjVzZWM7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsLCAuNXNlYztcXG59XFxuXFxuI2FkZFByb2plY3RCdXR0b246aG92ZXIge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufSAqL1xcblxcbiNhZGRQcm9qZWN0QnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xcbn1cXG5cXG4jYWRkUHJvamVjdEJ1dHRvbjpob3ZlciB7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIGNvbG9yOiByZ2IoNDksIDQ5LCA0OSk7XFxuXFxufVxcblxcbiNhZGRQcm9qZWN0QnV0dG9uOmFjdGl2ZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIGNvbG9yOiByZ2IoMTc5LCAxNzksIDE3OSk7XFxuXFxufVxcblxcblxcblxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb250ZW50LWJnLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2FkZFRhc2tCdXR0b24ge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtYmctY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1pdGVtcy1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjE2LCAyMTYsIDIxNik7XFxufVxcblxcbiNhZGRUYXNrQnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEyMSwgMTIxLCAxMjEpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ5LCAxNDksIDE0OSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuXFxuI2FkZFRhc2tCdXR0b246YWN0aXZlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNiwgMjE2LCAyMTYpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtaXRlbXMtY29sb3IpO1xcblxcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICAtLWZvcm0taGVpZ2h0OiAzMDBweDtcXG4gICAgLS1mb3JtLXdpZHRoOiA2MjVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWJnLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1mb3JtLWhlaWdodCk7XFxuICAgIHdpZHRoOiB2YXIoLS1mb3JtLXdpZHRoKTtcXG4gICAgdG9wOiAyMDBweDtcXG4gICAgcmlnaHQ6IGNhbGMoMTAwdncvMiAtIGNhbGModmFyKC0tZm9ybS13aWR0aCkvMikpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogOHB4IDdweCAxNHB4IDBweCByZ2JhKDEzMywgMTMzLCAxMzMsIDAuNzUpO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDhweCA3cHggMTRweCAwcHggcmdiYSgxMzMsIDEzMywgMTMzLCAwLjc1KTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiA4cHggN3B4IDE0cHggMHB4IHJnYmEoMTMzLCAxMzMsIDEzMywgMC43NSk7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IC41ZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxufVxcblxcbmZvcm0+aDIge1xcbiAgICBtYXJnaW46IDFyZW0gMXJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWl0ZW1zLWNvbG9yKVxcbn1cXG5cXG5mb3JtPmlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG5mb3JtPmlucHV0W3R5cGU9dGV4dF06aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOCk7XFxufVxcblxcblxcbmZvcm0+dGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBtYXJnaW46IDAgMCAxcmVtIDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMXJlbSAwIDAgMXJlbTtcXG59XFxuXFxuZm9ybT50ZXh0YXJlYTpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC44KTtcXG59XFxuXFxuZm9ybT5sYWJlbCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBtYXJnaW46IDEuNXJlbSAwIDAgMy41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1pdGVtcy1jb2xvcilcXG59XFxuXFxuZm9ybT5pbnB1dFt0eXBlPWRhdGVdIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIG1hcmdpbjogMXJlbSAwIDAgOHJlbTtcXG59XFxuXFxuZm9ybT5pbnB1dFt0eXBlPWRhdGVdOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjgpO1xcbn1cXG5cXG5mb3JtPmlucHV0W25hbWU9dXJnZW5jeV0ge1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgbWFyZ2luOiAwcmVtIDAgMCA4cmVtO1xcbn1cXG5cXG5mb3JtPmlucHV0W25hbWU9dXJnZW5jeV06aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOCk7XFxufVxcblxcbmZvcm0+aW5wdXRbbmFtZT1wYXJlbnRQcm9qZWN0XSB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgbWFyZ2luOiAzcmVtIDAgMCA4cmVtO1xcbn1cXG5cXG5mb3JtPmlucHV0W25hbWU9cGFyZW50UHJvamVjdF06aG92ZXIge1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOCk7XFxufVxcblxcbiNzdWJtaXQtYnV0dG9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBtYXJnaW46IDNyZW0gMCAwIDhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbn1cXG5cXG4jc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OSwgMTgwLCA5Myk7XFxuXFxufVxcblxcbmZvcm0+aW5wdXRbdHlwZT1idXR0b25dIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBtYXJnaW46IDZyZW0gMCAwIDhyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcblxcbn1cXG5cXG5mb3JtPmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDQ4LCA0OCk7XFxuXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9z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O0FBQ3pCOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHdDQUF3QztJQUN4QyxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtDQUFrQzs7QUFFdEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLDRCQUE0Qjs7QUFFaEM7O0FBRUE7SUFDSSxrQ0FBa0M7O0FBRXRDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1oZWFkZXItYmctY29sb3I6IHJnYigxOTcsIDg0LCA2Nyk7XFxuICAgIC0taGVhZGVyLXRpdGxlLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIC0tc2lkZS1wYW5lbC1iZy1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xcbiAgICAtLW1haW4tY29udGVudC1iZy1jb2xvcjogcmdiKDI1NCwgMjU0LCAyNTQpO1xcbiAgICAtLXNpZGUtcGFuZWwtaXRlbXMtY29sb3I6IHJnYigxMTAsIDExMCwgMTEwKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcblxcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogLjA3ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC4zZnIgMWZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItdGl0bGUtY29sb3IpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2lkZS1wYW5lbCB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWJnLWNvbG9yKTtcXG59XFxuXFxuLnNpZGUtcGFuZWw+dWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1pdGVtcy1jb2xvcik7XFxufVxcblxcbi8qICNhZGRQcm9qZWN0QnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCwgLjVzZWM7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsLCAuNXNlYztcXG59XFxuXFxuI2FkZFByb2plY3RCdXR0b246aG92ZXIge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufSAqL1xcblxcbiNhZGRQcm9qZWN0QnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xcbn1cXG5cXG4jYWRkUHJvamVjdEJ1dHRvbjpob3ZlciB7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIGNvbG9yOiByZ2IoNDksIDQ5LCA0OSk7XFxuXFxufVxcblxcbiNhZGRQcm9qZWN0QnV0dG9uOmFjdGl2ZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIGNvbG9yOiByZ2IoMTc5LCAxNzksIDE3OSk7XFxuXFxufVxcblxcblxcblxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb250ZW50LWJnLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2FkZFRhc2tCdXR0b24ge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtYmctY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1pdGVtcy1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjE2LCAyMTYsIDIxNik7XFxufVxcblxcbiNhZGRUYXNrQnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEyMSwgMTIxLCAxMjEpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ5LCAxNDksIDE0OSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuXFxuI2FkZFRhc2tCdXR0b246YWN0aXZlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNiwgMjE2LCAyMTYpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtaXRlbXMtY29sb3IpO1xcblxcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICAtLWZvcm0taGVpZ2h0OiAzMDBweDtcXG4gICAgLS1mb3JtLXdpZHRoOiA2MjVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWJnLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1mb3JtLWhlaWdodCk7XFxuICAgIHdpZHRoOiB2YXIoLS1mb3JtLXdpZHRoKTtcXG4gICAgdG9wOiAyMDBweDtcXG4gICAgcmlnaHQ6IGNhbGMoMTAwdncvMiAtIGNhbGModmFyKC0tZm9ybS13aWR0aCkvMikpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogOHB4IDdweCAxNHB4IDBweCByZ2JhKDEzMywgMTMzLCAxMzMsIDAuNzUpO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDhweCA3cHggMTRweCAwcHggcmdiYSgxMzMsIDEzMywgMTMzLCAwLjc1KTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiA4cHggN3B4IDE0cHggMHB4IHJnYmEoMTMzLCAxMzMsIDEzMywgMC43NSk7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IC41ZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxufVxcblxcbmZvcm0+aDIge1xcbiAgICBtYXJnaW46IDFyZW0gMXJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWl0ZW1zLWNvbG9yKVxcbn1cXG5cXG5mb3JtPmlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG5mb3JtPmlucHV0W3R5cGU9dGV4dF06aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOCk7XFxufVxcblxcblxcbmZvcm0+dGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBtYXJnaW46IDAgMCAxcmVtIDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMXJlbSAwIDAgMXJlbTtcXG59XFxuXFxuZm9ybT50ZXh0YXJlYTpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC44KTtcXG59XFxuXFxuZm9ybT5sYWJlbCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBtYXJnaW46IDEuNXJlbSAwIDAgMy41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1pdGVtcy1jb2xvcilcXG59XFxuXFxuZm9ybT5pbnB1dFt0eXBlPWRhdGVdIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIG1hcmdpbjogMXJlbSAwIDAgOHJlbTtcXG59XFxuXFxuZm9ybT5pbnB1dFt0eXBlPWRhdGVdOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjgpO1xcbn1cXG5cXG5mb3JtPmlucHV0W25hbWU9dXJnZW5jeV0ge1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgbWFyZ2luOiAwcmVtIDAgMCA4cmVtO1xcbn1cXG5cXG5mb3JtPmlucHV0W25hbWU9dXJnZW5jeV06aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOCk7XFxufVxcblxcbmZvcm0+aW5wdXRbbmFtZT1wYXJlbnRQcm9qZWN0XSB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgbWFyZ2luOiAzcmVtIDAgMCA4cmVtO1xcbn1cXG5cXG5mb3JtPmlucHV0W25hbWU9cGFyZW50UHJvamVjdF06aG92ZXIge1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOCk7XFxufVxcblxcbiNzdWJtaXQtYnV0dG9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBtYXJnaW46IDNyZW0gMCAwIDhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbn1cXG5cXG4jc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OSwgMTgwLCA5Myk7XFxuXFxufVxcblxcbmZvcm0+aW5wdXRbdHlwZT1idXR0b25dIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBtYXJnaW46IDZyZW0gMCAwIDhyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcblxcbn1cXG5cXG5mb3JtPmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDQ4LCA0OCk7XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9FbGVtZW50IGZhY3RvcnkgdG8gY3JlYXRlIGJhc2Ugb2JqZWN0cyB0aGF0IGxhdGVyIHR1cm5zIGludG8gZWxlbWVudHMgZm9yIHNpdGUuXG5jb25zdCBFbGVtZW50ID0gKGNsYXNzX25hbWUsIF9pZCwgZG9tX3R5cGUsIGlubmVyX3RleHQpID0+IHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc19uYW1lO1xuICAgIGNvbnN0IGlkID0gX2lkO1xuICAgIGNvbnN0IGRvbVR5cGUgPSBkb21fdHlwZTtcbiAgICBjb25zdCBpbm5lclRleHQgPSBpbm5lcl90ZXh0O1xuXG4gICAgcmV0dXJuIHsgY2xhc3NOYW1lLCBpZCwgZG9tVHlwZSwgaW5uZXJUZXh0IH07XG59O1xuXG4vL0Z1bmN0aW9uIHRvIGNyZWF0ZSBlbGVtZW50cyBhbmRcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGNsYXNzX25hbWUsIGlkLCBkb21fdHlwZSwgaW5uZXJfdGV4dCkge1xuICAgIHJldHVybiBFbGVtZW50KGNsYXNzX25hbWUsIGlkLCBkb21fdHlwZSwgaW5uZXJfdGV4dCk7XG59XG4iLCIvL0Zvcm0gY29udGFpbmVyXG5jb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5mb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XG5cbi8vRm9ybSBlbGVtZW50XG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9Gb3JtJyk7XG5cbi8vRm9ybSB0aXRsZVxuY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbmZvcm1UaXRsZS5pbm5lclRleHQgPSAnQ3JlYXRlIHRhc2snO1xuXG4vL1RpdGxlIHRleHQgaW5wdXRcbmNvbnN0IHRpdGxlVGV4dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnRpdGxlVGV4dElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZVRleHQnKTtcbnRpdGxlVGV4dElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG50aXRsZVRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlOiBFeGFtcGxlIFRpdGVsJyk7XG5cbi8vRGVzY3JpcHRpb24gdGV4dCBpbnB1dFxuY29uc3QgZGVzY3JpcHRpb25UZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5kZXNjcmlwdGlvblRleHRBcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0ZXh0QXJlYScpO1xuZGVzY3JpcHRpb25UZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnNCcpO1xuZGVzY3JpcHRpb25UZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2NvbHVtbnMnLCAnMjAnKTtcbmRlc2NyaXB0aW9uVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbicpO1xuXG4vL0R1ZSBkYXRlIGlucHV0XG5jb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkdWVEYXRlJyk7XG5kdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcblxuLy9EdWUgZGF0ZSBsYWJlbFxuY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZHVlRGF0ZScpO1xuZHVlRGF0ZUxhYmVsLmlubmVyVGV4dCA9ICdEdWUgZGF0ZSdcblxuXG4vL1VyZ2VuY3kgbGlzdFxuY29uc3QgdXJnZW5jeUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xudXJnZW5jeUxpc3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ3VyZ2VuY3knKVxudXJnZW5jeUxpc3Quc2V0QXR0cmlidXRlKCdsaXN0JywgJ3VyZ2VuY3knKTtcbnVyZ2VuY3lMaXN0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2V0IHVyZ2VuY3knKTtcbmNvbnN0IHVyZ2VuY3lEYXRhbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RhdGFsaXN0Jyk7XG51cmdlbmN5RGF0YWxpc3Quc2V0QXR0cmlidXRlKCdpZCcsICd1cmdlbmN5Jyk7XG5jb25zdCB1cmdlbmN5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xudXJnZW5jeUhpZ2guc2V0QXR0cmlidXRlKCd2YWx1ZScsICdIaWdoJyk7XG5jb25zdCB1cmdlbmN5Tm9ybWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG51cmdlbmN5Tm9ybWFsLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTm9ybWFsJyk7XG5jb25zdCB1cmdlbmN5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG51cmdlbmN5TG93LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTG93Jyk7XG5cbi8vU3VibWl0IGJ1dHRvblxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5zdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQtYnV0dG9uJyk7XG5zdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdBZGQgdGFzaycpO1xuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSBnZXRGb3JtVmFsdWVzKCk7XG4gICAgY29uc29sZS5sb2coZm9ybVZhbHVlcyk7XG59KVxuXG4vL0Rpc2NhcmQgYnV0dG9uXG5jb25zdCBkaXNjYXJkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmRpc2NhcmRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuZGlzY2FyZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0Rpc2NhcmQgdGFzaycpO1xuZGlzY2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUZvcm0pO1xuXG4vL1BhcmVudCBwcm9qZWN0IGxpc3RcbmNvbnN0IHBhcmVudFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xucGFyZW50UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncGFyZW50UHJvamVjdCcpXG5wYXJlbnRQcm9qZWN0LnNldEF0dHJpYnV0ZSgnbGlzdCcsICdwYXJlbnRQcm9qZWN0Jyk7XG5wYXJlbnRQcm9qZWN0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCcpO1xuY29uc3QgcHJvamVjdERhdGFsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGF0YWxpc3QnKTtcbnByb2plY3REYXRhbGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BhcmVudFByb2plY3QnKTtcbmNvbnN0IHBoUHJvamVjdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbnBoUHJvamVjdDEuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdIaWdoJyk7XG5jb25zdCBwaFByb2plY3QyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5waFByb2plY3QyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTm9ybWFsJyk7XG5jb25zdCBwaFByb2plY3QzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5waFByb2plY3QzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTG93Jyk7XG4vL0NyZWF0ZSBET00gdHJlZVxuZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbmZvcm0uYXBwZW5kKGZvcm1UaXRsZSxcbiAgICB0aXRsZVRleHRJbnB1dCxcbiAgICBkZXNjcmlwdGlvblRleHRBcmVhLFxuICAgIGR1ZURhdGVMYWJlbCxcbiAgICBkdWVEYXRlSW5wdXQsXG4gICAgdXJnZW5jeUxpc3QsXG4gICAgdXJnZW5jeURhdGFsaXN0LFxuICAgIHBhcmVudFByb2plY3QsXG4gICAgcHJvamVjdERhdGFsaXN0LFxuICAgIHN1Ym1pdEJ1dHRvbixcbiAgICBkaXNjYXJkQnV0dG9uKTtcbnVyZ2VuY3lEYXRhbGlzdC5hcHBlbmQodXJnZW5jeUhpZ2gsIHVyZ2VuY3lOb3JtYWwsIHVyZ2VuY3lMb3cpO1xucHJvamVjdERhdGFsaXN0LmFwcGVuZChwaFByb2plY3QxLCBwaFByb2plY3QyLCBwaFByb2plY3QzKTtcblxuLy9Vc2VkIHRvIGNsZWFyIGZvcm0gd2hlbiB0b2dnZWxpbmcgaXRcbmZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcbiAgICBmb3JtLnJlc2V0KCk7XG59XG5cbi8vR2V0IHRoZSB2YWx1ZXMgZW50ZXJlZCB0byB0aGUgZm9ybVxuZnVuY3Rpb24gZ2V0Rm9ybVZhbHVlcygpIHtcbiAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9Gb3JtXCIpLmVsZW1lbnRzO1xuICAgIGxldCBvYmogPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBpdGVtID0gZWxlbWVudHMuaXRlbShpKTtcbiAgICAgICAgb2JqW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRm9ybSgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJykgPT09IG51bGwpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpXG4gICAgICAgIGNsZWFyRm9ybSgpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgYXBwZW5kVG9Cb2R5LCBjcmVhdGVEb21FbGVtZW50LCBhcHBlbmRUb1RhcmdldENsYXNzLCBhcHBlbmRDaGlsZHJlblRvUGFyZW50IH0gZnJvbSBcIi4vdXRpbHMvZG9tX3V0aWxzXCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudC9lbGVtZW50XCI7XG5pbXBvcnQgeyB0b2dnbGVGb3JtIH0gZnJvbSBcIi4vZm9ybS9mb3JtXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG5cbi8vQ3JlYXRlIG1haW4gcGFnZSBlbGVtZW50c1xuY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudCgnaGVhZGVyJywgbnVsbCwgJ2RpdicsIG51bGwpO1xuY29uc3QgaGVhZGVyVGl0bGUgPSBjcmVhdGVFbGVtZW50KCd0aXRsZScsIG51bGwsICdoMScsICdUT0RPIE9yZ2luYXplcicpXG5jb25zdCBzaWRlUGFuZWwgPSBjcmVhdGVFbGVtZW50KCdzaWRlLXBhbmVsJywgbnVsbCwgJ2RpdicsIG51bGwpO1xuY29uc3QgbWFpbkNvbnRlbnQgPSBjcmVhdGVFbGVtZW50KCdtYWluLWNvbnRlbnQnLCBudWxsLCAnZGl2JywgbnVsbCk7XG5cbi8vQ3JlYXRlIGFuIGFycmF5IG9mIERPTSBlbGVtZW50cyBmb3IgaGVhZGVyLCBzaWRlcGFuZWwgYW5kIG1haW4gY29udGVudFxuY29uc3QgbWFpblBhZ2VFbGVtZW50c0RPTSA9IGNyZWF0ZURvbUVsZW1lbnQoaGVhZGVyLCBzaWRlUGFuZWwsIG1haW5Db250ZW50KTtcbi8vQWRkIHRvIGRvY3VtZW50LmJvZHlcbmFwcGVuZFRvQm9keShtYWluUGFnZUVsZW1lbnRzRE9NKTtcblxuLy9IZWFkZXIgdGl0bGUgdG8gRE9NIGVsZW1lbnRcbmNvbnN0IGhlYWRlclRpdGxlRE9NID0gY3JlYXRlRG9tRWxlbWVudChoZWFkZXJUaXRsZSk7XG5cbi8vQXBwZW5kIHRpdGxlIHRvIGhlYWRlclxuYXBwZW5kVG9UYXJnZXRDbGFzcygnLmhlYWRlcicsIGhlYWRlclRpdGxlRE9NKTtcblxuLy9DcmVhdGUgc2lkZSBwYW5lbCBpdGVtc1xuY29uc3QgdG9wSXRlbUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ3RvcC11bCcsIG51bGwsICd1bCcsIG51bGwpO1xuY29uc3QgYWxsVG9kb3NJdGVtID0gY3JlYXRlRWxlbWVudCgnc2lkZS1wYW5lbC1pdGVtJywgJ2FsbFRvZG9zJywgJ2xpJywgXCJBbGwgdGFza3NcIik7XG5jb25zdCB1cmdlbnRUb2Rvc0l0ZW0gPSBjcmVhdGVFbGVtZW50KCdzaWRlLXBhbmVsLWl0ZW0nLCAndXJnZW50VG9kb3MnLCAnbGknLCBcIlVyZ2VudCB0YXNrc1wiKTtcbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBjcmVhdGVFbGVtZW50KCdhZGQtYnV0dG9uJywgJ2FkZFByb2plY3RCdXR0b24nLCAncCcsICdBZGQgUHJvamVjdCArJylcblxuY29uc3QgdG9wSXRlbUNvbnRhaW5lckRPTSA9IGNyZWF0ZURvbUVsZW1lbnQodG9wSXRlbUNvbnRhaW5lcik7XG5jb25zdCB0b3BJdGVtQ29udGFpbmVyQ2hpbGRyZW4gPSBjcmVhdGVEb21FbGVtZW50KGFsbFRvZG9zSXRlbSwgdXJnZW50VG9kb3NJdGVtLCBhZGRQcm9qZWN0QnV0dG9uKTtcblxuLy8tLS1NQUlOIENPTlRFTlQtLS1cbi8vQWRkIHRhc2sgYnV0dG9uXG5jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5hZGRUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVGFza0J1dHRvbicpO1xuYWRkVGFza0J1dHRvbi5pbm5lclRleHQgPSAnKyc7XG5hcHBlbmRUb1RhcmdldENsYXNzKCcubWFpbi1jb250ZW50JywgW2FkZFRhc2tCdXR0b25dKTtcbmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVGb3JtKTtcblxuLy9BZGQgc2lkZSBwYW5lbCBpdGVtcyB0byB0aGUgRE9NIGFzIGNoaWxkcmVuXG5hcHBlbmRUb1RhcmdldENsYXNzKCcuc2lkZS1wYW5lbCcsIHRvcEl0ZW1Db250YWluZXJET00pO1xuYXBwZW5kVG9UYXJnZXRDbGFzcygnLnRvcC11bCcsIHRvcEl0ZW1Db250YWluZXJDaGlsZHJlbik7XG5cbiIsIi8vVHVybiBFbGVtZW50IG9iamVjdHMgaW50byBET00gRWxlbWVudHMuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRG9tRWxlbWVudCguLi5zb3VyY2UpIHtcbiAgICBsZXQgYXJyYXlPZkVsZW1lbnRzID0gW11cbiAgICBzb3VyY2UuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50LmRvbVR5cGUpO1xuICAgICAgICBzZXRFbGVtZW50Q2xhc3MoZWwsIGVsZW1lbnQpO1xuICAgICAgICBzZXRFbGVtZW50SWQoZWwsIGVsZW1lbnQpO1xuICAgICAgICBzZXRJbm5lclRleHQoZWwsIGVsZW1lbnQpO1xuICAgICAgICBhcnJheU9mRWxlbWVudHMucHVzaChlbCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXJyYXlPZkVsZW1lbnRzO1xufTtcblxuLy9BcHBlbmQgRE9NIEVsZW1lbnRzIHRvIERvY3VtZW50IGJvZHkuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kVG9Cb2R5KHNvdXJjZSkge1xuICAgIHNvdXJjZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRvVGFyZ2V0Q2xhc3ModGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBzb3VyY2UuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgfSk7XG59O1xuXG5cblxuLy9Vc2VkIHRvIHNldCBhIERPTSBlbGVtZW50cyBjbGFzcy5cbmZ1bmN0aW9uIHNldEVsZW1lbnRDbGFzcyh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGlmIChzb3VyY2UuY2xhc3NOYW1lID09PSBudWxsKSB7IHJldHVybiB9O1xuICAgIHJldHVybiB0YXJnZXQuY2xhc3NMaXN0LmFkZChzb3VyY2UuY2xhc3NOYW1lKTtcbn07XG5cbi8vVXNlZCB0byBzZXQgYSBET00gZWxlbWVudHMgSUQuXG5mdW5jdGlvbiBzZXRFbGVtZW50SWQodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBpZiAoc291cmNlLmlkID09PSBudWxsKSB7IHJldHVybiB9O1xuICAgIHJldHVybiB0YXJnZXQuc2V0QXR0cmlidXRlKCdpZCcsIHNvdXJjZS5pZCk7XG59O1xuXG4vL1VzZWQgdG8gc2V0IGEgRE9NIGVsZW1lbnRzIElubmVyIHRleHRcbmZ1bmN0aW9uIHNldElubmVyVGV4dCh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGlmIChzb3VyY2UuaW5uZXJUZXh0ID09PSBudWxsKSB7IHJldHVybiB9O1xuICAgIHJldHVybiB0YXJnZXQuaW5uZXJUZXh0ID0gc291cmNlLmlubmVyVGV4dDtcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9