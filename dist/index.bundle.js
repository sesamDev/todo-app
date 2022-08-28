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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --header-bg-color: rgb(197, 84, 67);\n    --header-title-color: rgb(255, 255, 255);\n    --side-panel-bg-color: rgb(250, 250, 250);\n    --main-content-bg-color: rgb(254, 254, 254);\n    --side-panel-items-color: rgb(110, 110, 110);\n    font-family: 'Roboto', sans-serif;\n\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    position: relative;\n    display: grid;\n    grid-template-rows: .07fr 1fr;\n    grid-template-columns: .3fr 1fr;\n}\n\n.header {\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    color: var(--header-title-color);\n    height: 100%;\n    background-color: var(--header-bg-color);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.side-panel {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    width: 100%;\n    height: 100%;\n    background-color: var(--side-panel-bg-color);\n}\n\n.side-panel>ul {\n    list-style: none;\n    font-weight: 500;\n    color: var(--side-panel-items-color);\n}\n\n/* #addProjectButton {\n    font-size: 1rem;\n    cursor: pointer;\n    transition: all, .5sec;\n    -moz-transition: all, .5sec;\n}\n\n#addProjectButton:hover {\n    font-size: 4rem;\n} */\n\n#addProjectButton {\n    font-size: 1em;\n    cursor: pointer;\n    transition: all .5s ease;\n}\n\n#addProjectButton:hover {\n    font-size: 1.1em;\n    color: rgb(49, 49, 49);\n\n}\n\n#addProjectButton:active {\n    font-size: 1.1em;\n    color: rgb(179, 179, 179);\n\n}\n\n\n\n\n.main-content {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    background-color: var(--main-content-bg-color);\n    display: grid;\n    grid-template-rows: repeat(auto-fit, 100px);\n    width: 100%;\n\n}\n\n#addTaskButton {\n    grid-row: 1 / 2;\n    height: 50px;\n    width: 50px;\n    background-color: var(--side-panel-bg-color);\n    color: var(--side-panel-items-color);\n    font-size: 3rem;\n    border-radius: 50%;\n    margin: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid rgb(216, 216, 216);\n}\n\n#addTaskButton:hover {\n    border: 1px solid rgb(121, 121, 121);\n    background-color: rgb(149, 149, 149);\n    color: white;\n\n}\n\n#addTaskButton:active {\n    border: 1px solid rgb(216, 216, 216);\n    background-color: var(--side-panel-bg-color);\n    color: var(--side-panel-items-color);\n\n}\n\n.todo-item {\n    background-color: var(--side-panel-bg-color);\n    width: 80%;\n    height: auto;\n    border-radius: .5rem;\n    box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.5);\n    -webkit-box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.5);\n    -moz-box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.5);\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    color: var(--side-panel-items-color);\n    padding: .5rem;\n    margin: 0 auto 0 auto;\n    overflow: hidden;\n    margin-top: .5rem;\n}\n\n.todo-item:hover {\n\n    background-color: rgb(255, 255, 255);\n}\n\n.todo-item>h3 {\n    color: black;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n}\n\n.todo-item>p:nth-child(2) {\n    grid-column: 1 / 2;\n    grid-row: 2 / 4;\n}\n\n.todo-item>p:nth-child(3) {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    text-align: end;\n}\n\n.todo-item>p:nth-child(4) {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    text-align: end;\n\n}\n\n.todo-item>p:nth-child(5) {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    text-align: end;\n\n}\n\n.form-container {\n    --form-height: 300px;\n    --form-width: 625px;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    position: absolute;\n    background-color: var(--side-panel-bg-color);\n    height: var(--form-height);\n    width: var(--form-width);\n    top: 200px;\n    right: calc(100vw/2 - calc(var(--form-width)/2));\n    border-radius: .5rem;\n    box-shadow: 8px 7px 14px 0px rgba(133, 133, 133, 0.75);\n    -webkit-box-shadow: 8px 7px 14px 0px rgba(133, 133, 133, 0.75);\n    -moz-box-shadow: 8px 7px 14px 0px rgba(133, 133, 133, 0.75);\n}\n\nform {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: .5fr 1fr 1fr;\n    grid-row: 1 / 3;\n    grid-column: 1 / 3;\n}\n\nform>h2 {\n    margin: 1rem 1rem;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    color: var(--side-panel-items-color)\n}\n\nform>input[type=text] {\n    font-size: 1.2rem;\n    border-radius: .5rem;\n    border: none;\n    padding-left: 1rem;\n    width: 300px;\n    height: 50px;\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    margin-left: 1rem;\n}\n\nform>input[type=text]:hover {\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\n\nform>textarea {\n    resize: none;\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n    height: 150px;\n    margin: 0 0 1rem 1rem;\n    border: none;\n    padding: 1rem 0 0 1rem;\n}\n\nform>textarea:hover {\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform>label {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    margin: 1.5rem 0 0 3.5rem;\n    color: var(--side-panel-items-color)\n}\n\nform>input[type=date] {\n    padding-left: 1rem;\n    border-radius: .5rem;\n    border: none;\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    height: 35px;\n    width: 150px;\n    margin: 1rem 0 0 8rem;\n}\n\nform>input[type=date]:hover {\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform>input[name=urgency] {\n    border-radius: .5rem;\n    border: none;\n    padding-left: 1rem;\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    height: 35px;\n    width: 150px;\n    margin: 0rem 0 0 8rem;\n}\n\nform>input[name=urgency]:hover {\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform>input[name=parentProject] {\n    grid-column: 2/3;\n    grid-row: 2 / 3;\n    border-radius: .5rem;\n    border: none;\n    padding-left: 1rem;\n    height: 35px;\n    width: 150px;\n    margin: 3rem 0 0 8rem;\n}\n\nform>input[name=parentProject]:hover {\n\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\n#submit-button {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    height: 35px;\n    width: 150px;\n    margin: 3rem 0 0 8rem;\n    background-color: var(--header-bg-color);\n    color: white;\n    font-size: 1.1rem;\n    border-radius: .5rem;\n}\n\n#submit-button:hover {\n    background-color: rgb(59, 180, 93);\n\n}\n\nform>input[type=button] {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    height: 35px;\n    width: 150px;\n    margin: 6rem 0 0 8rem;\n    color: black;\n    font-size: 1.1rem;\n    border-radius: .5rem;\n    background-color: whitesmoke;\n\n}\n\nform>input[type=button]:hover {\n    background-color: rgb(180, 48, 48);\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --header-bg-color: rgb(197, 84, 67);\n    --header-title-color: rgb(255, 255, 255);\n    --side-panel-bg-color: rgb(250, 250, 250);\n    --main-content-bg-color: rgb(254, 254, 254);\n    --side-panel-items-color: rgb(110, 110, 110);\n    font-family: 'Roboto', sans-serif;\n\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    position: relative;\n    display: grid;\n    grid-template-rows: .07fr 1fr;\n    grid-template-columns: .3fr 1fr;\n}\n\n.header {\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    color: var(--header-title-color);\n    height: 100%;\n    background-color: var(--header-bg-color);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.side-panel {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    width: 100%;\n    height: 100%;\n    background-color: var(--side-panel-bg-color);\n}\n\n.side-panel>ul {\n    list-style: none;\n    font-weight: 500;\n    color: var(--side-panel-items-color);\n}\n\n/* #addProjectButton {\n    font-size: 1rem;\n    cursor: pointer;\n    transition: all, .5sec;\n    -moz-transition: all, .5sec;\n}\n\n#addProjectButton:hover {\n    font-size: 4rem;\n} */\n\n#addProjectButton {\n    font-size: 1em;\n    cursor: pointer;\n    transition: all .5s ease;\n}\n\n#addProjectButton:hover {\n    font-size: 1.1em;\n    color: rgb(49, 49, 49);\n\n}\n\n#addProjectButton:active {\n    font-size: 1.1em;\n    color: rgb(179, 179, 179);\n\n}\n\n\n\n\n.main-content {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    background-color: var(--main-content-bg-color);\n    display: grid;\n    grid-template-rows: repeat(auto-fit, 100px);\n    width: 100%;\n\n}\n\n#addTaskButton {\n    grid-row: 1 / 2;\n    height: 50px;\n    width: 50px;\n    background-color: var(--side-panel-bg-color);\n    color: var(--side-panel-items-color);\n    font-size: 3rem;\n    border-radius: 50%;\n    margin: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid rgb(216, 216, 216);\n}\n\n#addTaskButton:hover {\n    border: 1px solid rgb(121, 121, 121);\n    background-color: rgb(149, 149, 149);\n    color: white;\n\n}\n\n#addTaskButton:active {\n    border: 1px solid rgb(216, 216, 216);\n    background-color: var(--side-panel-bg-color);\n    color: var(--side-panel-items-color);\n\n}\n\n.todo-item {\n    background-color: var(--side-panel-bg-color);\n    width: 80%;\n    height: auto;\n    border-radius: .5rem;\n    box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.5);\n    -webkit-box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.5);\n    -moz-box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.5);\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    color: var(--side-panel-items-color);\n    padding: .5rem;\n    margin: 0 auto 0 auto;\n    overflow: hidden;\n    margin-top: .5rem;\n}\n\n.todo-item:hover {\n\n    background-color: rgb(255, 255, 255);\n}\n\n.todo-item>h3 {\n    color: black;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n}\n\n.todo-item>p:nth-child(2) {\n    grid-column: 1 / 2;\n    grid-row: 2 / 4;\n}\n\n.todo-item>p:nth-child(3) {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    text-align: end;\n}\n\n.todo-item>p:nth-child(4) {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    text-align: end;\n\n}\n\n.todo-item>p:nth-child(5) {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    text-align: end;\n\n}\n\n.form-container {\n    --form-height: 300px;\n    --form-width: 625px;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    position: absolute;\n    background-color: var(--side-panel-bg-color);\n    height: var(--form-height);\n    width: var(--form-width);\n    top: 200px;\n    right: calc(100vw/2 - calc(var(--form-width)/2));\n    border-radius: .5rem;\n    box-shadow: 8px 7px 14px 0px rgba(133, 133, 133, 0.75);\n    -webkit-box-shadow: 8px 7px 14px 0px rgba(133, 133, 133, 0.75);\n    -moz-box-shadow: 8px 7px 14px 0px rgba(133, 133, 133, 0.75);\n}\n\nform {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: .5fr 1fr 1fr;\n    grid-row: 1 / 3;\n    grid-column: 1 / 3;\n}\n\nform>h2 {\n    margin: 1rem 1rem;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    color: var(--side-panel-items-color)\n}\n\nform>input[type=text] {\n    font-size: 1.2rem;\n    border-radius: .5rem;\n    border: none;\n    padding-left: 1rem;\n    width: 300px;\n    height: 50px;\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    margin-left: 1rem;\n}\n\nform>input[type=text]:hover {\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\n\nform>textarea {\n    resize: none;\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n    height: 150px;\n    margin: 0 0 1rem 1rem;\n    border: none;\n    padding: 1rem 0 0 1rem;\n}\n\nform>textarea:hover {\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform>label {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    margin: 1.5rem 0 0 3.5rem;\n    color: var(--side-panel-items-color)\n}\n\nform>input[type=date] {\n    padding-left: 1rem;\n    border-radius: .5rem;\n    border: none;\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    height: 35px;\n    width: 150px;\n    margin: 1rem 0 0 8rem;\n}\n\nform>input[type=date]:hover {\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform>input[name=urgency] {\n    border-radius: .5rem;\n    border: none;\n    padding-left: 1rem;\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    height: 35px;\n    width: 150px;\n    margin: 0rem 0 0 8rem;\n}\n\nform>input[name=urgency]:hover {\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform>input[name=parentProject] {\n    grid-column: 2/3;\n    grid-row: 2 / 3;\n    border-radius: .5rem;\n    border: none;\n    padding-left: 1rem;\n    height: 35px;\n    width: 150px;\n    margin: 3rem 0 0 8rem;\n}\n\nform>input[name=parentProject]:hover {\n\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\n#submit-button {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    height: 35px;\n    width: 150px;\n    margin: 3rem 0 0 8rem;\n    background-color: var(--header-bg-color);\n    color: white;\n    font-size: 1.1rem;\n    border-radius: .5rem;\n}\n\n#submit-button:hover {\n    background-color: rgb(59, 180, 93);\n\n}\n\nform>input[type=button] {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    height: 35px;\n    width: 150px;\n    margin: 6rem 0 0 8rem;\n    color: black;\n    font-size: 1.1rem;\n    border-radius: .5rem;\n    background-color: whitesmoke;\n\n}\n\nform>input[type=button]:hover {\n    background-color: rgb(180, 48, 48);\n\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _todo_item_todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo_item/todo_item */ "./src/todo_item/todo_item.js");


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
    console.log(formValues.titleText);
    (0,_todo_item_todo_item__WEBPACK_IMPORTED_MODULE_0__.createTodoItem)(formValues.titleText,
        formValues.textArea,
        formValues.dueDate,
        formValues.urgency,
        formValues.parentProject);
    toggleForm();


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

    return obj;
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
/* harmony import */ var _todo_item_todo_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_item/todo_item */ "./src/todo_item/todo_item.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







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

/***/ "./src/todo_item/todo_item.js":
/*!************************************!*\
  !*** ./src/todo_item/todo_item.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodoItem": () => (/* binding */ createTodoItem)
/* harmony export */ });
// const ToDo = (todo_text, todo_category) => {
//     const innerText = todo_text;
//     const category = todo_category;
//     const completed = false;
//     const className = 'todo-item';
//     const id = null;
//     const domType = 'div';

//     return { innerText, category, completed, className, id, domType };
// };

// export function createTodo(todo_text, todo_category) {
//     const t = ToDo(todo_text, todo_category);
//     return t;
// }

class Todo {
    constructor(title, description, due_date, urgency, project) {
        this.title = title;
        this.description = description;
        this.due_date = due_date;
        this.urgency = urgency;
        this.project = project;
    }

}

function createTodoItem(title, description, due_date, urgency, project) {
    const item = document.createElement('div');
    item.classList.add('todo-item');
    const itemTitle = document.createElement('h3');
    itemTitle.innerText = title;
    const itemDescription = document.createElement('p');
    itemDescription.innerText = description;
    const itemDueDate = document.createElement('p');
    itemDueDate.innerText = `Due date: ${due_date}`;
    const itemUrgency = document.createElement('p');
    itemUrgency.innerText = `Urgency: ${urgency}`;
    const itemProject = document.createElement('p');
    itemProject.innerText = `Project: ${project}`;

    item.append(itemTitle, itemDescription, itemDueDate, itemUrgency, itemProject);

    return document.querySelector('.main-content').appendChild(item);
}



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9lbGVtZW50L2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvZm9ybS9mb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3RvZG9faXRlbS90b2RvX2l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdXRpbHMvZG9tX3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWhlYWRlci1iZy1jb2xvcjogcmdiKDE5NywgODQsIDY3KTtcXG4gICAgLS1oZWFkZXItdGl0bGUtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgLS1zaWRlLXBhbmVsLWJnLWNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XFxuICAgIC0tbWFpbi1jb250ZW50LWJnLWNvbG9yOiByZ2IoMjU0LCAyNTQsIDI1NCk7XFxuICAgIC0tc2lkZS1wYW5lbC1pdGVtcy1jb2xvcjogcmdiKDExMCwgMTEwLCAxMTApO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuXFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuMDdmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogLjNmciAxZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlci10aXRsZS1jb2xvcik7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaWRlLXBhbmVsIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtYmctY29sb3IpO1xcbn1cXG5cXG4uc2lkZS1wYW5lbD51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWl0ZW1zLWNvbG9yKTtcXG59XFxuXFxuLyogI2FkZFByb2plY3RCdXR0b24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsLCAuNXNlYztcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwsIC41c2VjO1xcbn1cXG5cXG4jYWRkUHJvamVjdEJ1dHRvbjpob3ZlciB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG59ICovXFxuXFxuI2FkZFByb2plY3RCdXR0b24ge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XFxufVxcblxcbiNhZGRQcm9qZWN0QnV0dG9uOmhvdmVyIHtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgY29sb3I6IHJnYig0OSwgNDksIDQ5KTtcXG5cXG59XFxuXFxuI2FkZFByb2plY3RCdXR0b246YWN0aXZlIHtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgY29sb3I6IHJnYigxNzksIDE3OSwgMTc5KTtcXG5cXG59XFxuXFxuXFxuXFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbnRlbnQtYmctY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgMTAwcHgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG59XFxuXFxuI2FkZFRhc2tCdXR0b24ge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtYmctY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1pdGVtcy1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjE2LCAyMTYsIDIxNik7XFxufVxcblxcbiNhZGRUYXNrQnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEyMSwgMTIxLCAxMjEpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ5LCAxNDksIDE0OSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuXFxuI2FkZFRhc2tCdXR0b246YWN0aXZlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNiwgMjE2LCAyMTYpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtaXRlbXMtY29sb3IpO1xcblxcbn1cXG5cXG4udG9kby1pdGVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1iZy1jb2xvcik7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggOXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA5cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiAzcHggM3B4IDlweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1pdGVtcy1jb2xvcik7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xcbn1cXG5cXG4udG9kby1pdGVtOmhvdmVyIHtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4udG9kby1pdGVtPmgzIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnRvZG8taXRlbT5wOm50aC1jaGlsZCgyKSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyA0O1xcbn1cXG5cXG4udG9kby1pdGVtPnA6bnRoLWNoaWxkKDMpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLnRvZG8taXRlbT5wOm50aC1jaGlsZCg0KSB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuXFxufVxcblxcbi50b2RvLWl0ZW0+cDpudGgtY2hpbGQoNSkge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcblxcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICAtLWZvcm0taGVpZ2h0OiAzMDBweDtcXG4gICAgLS1mb3JtLXdpZHRoOiA2MjVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWJnLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1mb3JtLWhlaWdodCk7XFxuICAgIHdpZHRoOiB2YXIoLS1mb3JtLXdpZHRoKTtcXG4gICAgdG9wOiAyMDBweDtcXG4gICAgcmlnaHQ6IGNhbGMoMTAwdncvMiAtIGNhbGModmFyKC0tZm9ybS13aWR0aCkvMikpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogOHB4IDdweCAxNHB4IDBweCByZ2JhKDEzMywgMTMzLCAxMzMsIDAuNzUpO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDhweCA3cHggMTRweCAwcHggcmdiYSgxMzMsIDEzMywgMTMzLCAwLjc1KTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiA4cHggN3B4IDE0cHggMHB4IHJnYmEoMTMzLCAxMzMsIDEzMywgMC43NSk7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IC41ZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxufVxcblxcbmZvcm0+aDIge1xcbiAgICBtYXJnaW46IDFyZW0gMXJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWl0ZW1zLWNvbG9yKVxcbn1cXG5cXG5mb3JtPmlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG5mb3JtPmlucHV0W3R5cGU9dGV4dF06aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOCk7XFxufVxcblxcblxcbmZvcm0+dGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBtYXJnaW46IDAgMCAxcmVtIDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMXJlbSAwIDAgMXJlbTtcXG59XFxuXFxuZm9ybT50ZXh0YXJlYTpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC44KTtcXG59XFxuXFxuZm9ybT5sYWJlbCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBtYXJnaW46IDEuNXJlbSAwIDAgMy41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1pdGVtcy1jb2xvcilcXG59XFxuXFxuZm9ybT5pbnB1dFt0eXBlPWRhdGVdIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIG1hcmdpbjogMXJlbSAwIDAgOHJlbTtcXG59XFxuXFxuZm9ybT5pbnB1dFt0eXBlPWRhdGVdOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjgpO1xcbn1cXG5cXG5mb3JtPmlucHV0W25hbWU9dXJnZW5jeV0ge1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgbWFyZ2luOiAwcmVtIDAgMCA4cmVtO1xcbn1cXG5cXG5mb3JtPmlucHV0W25hbWU9dXJnZW5jeV06aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOCk7XFxufVxcblxcbmZvcm0+aW5wdXRbbmFtZT1wYXJlbnRQcm9qZWN0XSB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgbWFyZ2luOiAzcmVtIDAgMCA4cmVtO1xcbn1cXG5cXG5mb3JtPmlucHV0W25hbWU9cGFyZW50UHJvamVjdF06aG92ZXIge1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOCk7XFxufVxcblxcbiNzdWJtaXQtYnV0dG9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBtYXJnaW46IDNyZW0gMCAwIDhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbn1cXG5cXG4jc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OSwgMTgwLCA5Myk7XFxuXFxufVxcblxcbmZvcm0+aW5wdXRbdHlwZT1idXR0b25dIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBtYXJnaW46IDZyZW0gMCAwIDhyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcblxcbn1cXG5cXG5mb3JtPmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDQ4LCA0OCk7XFxuXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLHdDQUF3QztJQUN4Qyx5Q0FBeUM7SUFDekMsMkNBQTJDO0lBQzNDLDRDQUE0QztJQUM1QyxpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osd0NBQXdDO0lBQ3hDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0NBQW9DO0FBQ3hDOztBQUVBOzs7Ozs7Ozs7R0FTRzs7QUFFSDtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCOztBQUU3Qjs7Ozs7QUFLQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsOENBQThDO0lBQzlDLGFBQWE7SUFDYiwyQ0FBMkM7SUFDM0MsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLDRDQUE0QztJQUM1QyxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyw0Q0FBNEM7SUFDNUMsb0NBQW9DOztBQUV4Qzs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQiw4Q0FBOEM7SUFDOUMsc0RBQXNEO0lBQ3RELG1EQUFtRDtJQUNuRCxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxvQ0FBb0M7SUFDcEMsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQiw0Q0FBNEM7SUFDNUMsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1YsZ0RBQWdEO0lBQ2hELG9CQUFvQjtJQUNwQixzREFBc0Q7SUFDdEQsOERBQThEO0lBQzlELDJEQUEyRDtBQUMvRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5QkFBeUI7SUFDekI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHdDQUF3QztJQUN4QyxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtDQUFrQzs7QUFFdEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLDRCQUE0Qjs7QUFFaEM7O0FBRUE7SUFDSSxrQ0FBa0M7O0FBRXRDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1oZWFkZXItYmctY29sb3I6IHJnYigxOTcsIDg0LCA2Nyk7XFxuICAgIC0taGVhZGVyLXRpdGxlLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIC0tc2lkZS1wYW5lbC1iZy1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xcbiAgICAtLW1haW4tY29udGVudC1iZy1jb2xvcjogcmdiKDI1NCwgMjU0LCAyNTQpO1xcbiAgICAtLXNpZGUtcGFuZWwtaXRlbXMtY29sb3I6IHJnYigxMTAsIDExMCwgMTEwKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcblxcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogLjA3ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC4zZnIgMWZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItdGl0bGUtY29sb3IpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2lkZS1wYW5lbCB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWJnLWNvbG9yKTtcXG59XFxuXFxuLnNpZGUtcGFuZWw+dWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1pdGVtcy1jb2xvcik7XFxufVxcblxcbi8qICNhZGRQcm9qZWN0QnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCwgLjVzZWM7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsLCAuNXNlYztcXG59XFxuXFxuI2FkZFByb2plY3RCdXR0b246aG92ZXIge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufSAqL1xcblxcbiNhZGRQcm9qZWN0QnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xcbn1cXG5cXG4jYWRkUHJvamVjdEJ1dHRvbjpob3ZlciB7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIGNvbG9yOiByZ2IoNDksIDQ5LCA0OSk7XFxuXFxufVxcblxcbiNhZGRQcm9qZWN0QnV0dG9uOmFjdGl2ZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIGNvbG9yOiByZ2IoMTc5LCAxNzksIDE3OSk7XFxuXFxufVxcblxcblxcblxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb250ZW50LWJnLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIDEwMHB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxufVxcblxcbiNhZGRUYXNrQnV0dG9uIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtaXRlbXMtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNiwgMjE2LCAyMTYpO1xcbn1cXG5cXG4jYWRkVGFza0J1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjEsIDEyMSwgMTIxKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OSwgMTQ5LCAxNDkpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxufVxcblxcbiNhZGRUYXNrQnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTYsIDIxNiwgMjE2KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWl0ZW1zLWNvbG9yKTtcXG5cXG59XFxuXFxuLnRvZG8taXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtYmctY29sb3IpO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDlweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggOXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIC1tb3otYm94LXNoYWRvdzogM3B4IDNweCA5cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gICAgY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtaXRlbXMtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcXG59XFxuXFxuLnRvZG8taXRlbTpob3ZlciB7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLnRvZG8taXRlbT5oMyB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi50b2RvLWl0ZW0+cDpudGgtY2hpbGQoMikge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gNDtcXG59XFxuXFxuLnRvZG8taXRlbT5wOm50aC1jaGlsZCgzKSB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi50b2RvLWl0ZW0+cDpudGgtY2hpbGQoNCkge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcblxcbn1cXG5cXG4udG9kby1pdGVtPnA6bnRoLWNoaWxkKDUpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG5cXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgLS1mb3JtLWhlaWdodDogMzAwcHg7XFxuICAgIC0tZm9ybS13aWR0aDogNjI1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1iZy1jb2xvcik7XFxuICAgIGhlaWdodDogdmFyKC0tZm9ybS1oZWlnaHQpO1xcbiAgICB3aWR0aDogdmFyKC0tZm9ybS13aWR0aCk7XFxuICAgIHRvcDogMjAwcHg7XFxuICAgIHJpZ2h0OiBjYWxjKDEwMHZ3LzIgLSBjYWxjKHZhcigtLWZvcm0td2lkdGgpLzIpKTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IDhweCA3cHggMTRweCAwcHggcmdiYSgxMzMsIDEzMywgMTMzLCAwLjc1KTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA4cHggN3B4IDE0cHggMHB4IHJnYmEoMTMzLCAxMzMsIDEzMywgMC43NSk7XFxuICAgIC1tb3otYm94LXNoYWRvdzogOHB4IDdweCAxNHB4IDBweCByZ2JhKDEzMywgMTMzLCAxMzMsIDAuNzUpO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuNWZyIDFmciAxZnI7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG5mb3JtPmgyIHtcXG4gICAgbWFyZ2luOiAxcmVtIDFyZW07XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1pdGVtcy1jb2xvcilcXG59XFxuXFxuZm9ybT5pbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuZm9ybT5pbnB1dFt0eXBlPXRleHRdOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjgpO1xcbn1cXG5cXG5cXG5mb3JtPnRleHRhcmVhIHtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgbWFyZ2luOiAwIDAgMXJlbSAxcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMCAwIDFyZW07XFxufVxcblxcbmZvcm0+dGV4dGFyZWE6aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOCk7XFxufVxcblxcbmZvcm0+bGFiZWwge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgbWFyZ2luOiAxLjVyZW0gMCAwIDMuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtaXRlbXMtY29sb3IpXFxufVxcblxcbmZvcm0+aW5wdXRbdHlwZT1kYXRlXSB7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBtYXJnaW46IDFyZW0gMCAwIDhyZW07XFxufVxcblxcbmZvcm0+aW5wdXRbdHlwZT1kYXRlXTpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC44KTtcXG59XFxuXFxuZm9ybT5pbnB1dFtuYW1lPXVyZ2VuY3ldIHtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIG1hcmdpbjogMHJlbSAwIDAgOHJlbTtcXG59XFxuXFxuZm9ybT5pbnB1dFtuYW1lPXVyZ2VuY3ldOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjgpO1xcbn1cXG5cXG5mb3JtPmlucHV0W25hbWU9cGFyZW50UHJvamVjdF0ge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIG1hcmdpbjogM3JlbSAwIDAgOHJlbTtcXG59XFxuXFxuZm9ybT5pbnB1dFtuYW1lPXBhcmVudFByb2plY3RdOmhvdmVyIHtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjgpO1xcbn1cXG5cXG4jc3VibWl0LWJ1dHRvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgbWFyZ2luOiAzcmVtIDAgMCA4cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmctY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG59XFxuXFxuI3N1Ym1pdC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDE4MCwgOTMpO1xcblxcbn1cXG5cXG5mb3JtPmlucHV0W3R5cGU9YnV0dG9uXSB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgbWFyZ2luOiA2cmVtIDAgMCA4cmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG5cXG59XFxuXFxuZm9ybT5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgwLCA0OCwgNDgpO1xcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vRWxlbWVudCBmYWN0b3J5IHRvIGNyZWF0ZSBiYXNlIG9iamVjdHMgdGhhdCBsYXRlciB0dXJucyBpbnRvIGVsZW1lbnRzIGZvciBzaXRlLlxuY29uc3QgRWxlbWVudCA9IChjbGFzc19uYW1lLCBfaWQsIGRvbV90eXBlLCBpbm5lcl90ZXh0KSA9PiB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NfbmFtZTtcbiAgICBjb25zdCBpZCA9IF9pZDtcbiAgICBjb25zdCBkb21UeXBlID0gZG9tX3R5cGU7XG4gICAgY29uc3QgaW5uZXJUZXh0ID0gaW5uZXJfdGV4dDtcblxuICAgIHJldHVybiB7IGNsYXNzTmFtZSwgaWQsIGRvbVR5cGUsIGlubmVyVGV4dCB9O1xufTtcblxuLy9GdW5jdGlvbiB0byBjcmVhdGUgZWxlbWVudHMgYW5kXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChjbGFzc19uYW1lLCBpZCwgZG9tX3R5cGUsIGlubmVyX3RleHQpIHtcbiAgICByZXR1cm4gRWxlbWVudChjbGFzc19uYW1lLCBpZCwgZG9tX3R5cGUsIGlubmVyX3RleHQpO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlVG9kb0l0ZW0gfSBmcm9tIFwiLi4vdG9kb19pdGVtL3RvZG9faXRlbVwiO1xuXG4vL0Zvcm0gY29udGFpbmVyXG5jb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5mb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XG5cbi8vRm9ybSBlbGVtZW50XG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9Gb3JtJyk7XG5cbi8vRm9ybSB0aXRsZVxuY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbmZvcm1UaXRsZS5pbm5lclRleHQgPSAnQ3JlYXRlIHRhc2snO1xuXG4vL1RpdGxlIHRleHQgaW5wdXRcbmNvbnN0IHRpdGxlVGV4dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnRpdGxlVGV4dElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZVRleHQnKTtcbnRpdGxlVGV4dElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG50aXRsZVRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlOiBFeGFtcGxlIFRpdGVsJyk7XG5cbi8vRGVzY3JpcHRpb24gdGV4dCBpbnB1dFxuY29uc3QgZGVzY3JpcHRpb25UZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5kZXNjcmlwdGlvblRleHRBcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0ZXh0QXJlYScpO1xuZGVzY3JpcHRpb25UZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnNCcpO1xuZGVzY3JpcHRpb25UZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2NvbHVtbnMnLCAnMjAnKTtcbmRlc2NyaXB0aW9uVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbicpO1xuXG4vL0R1ZSBkYXRlIGlucHV0XG5jb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkdWVEYXRlJyk7XG5kdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcblxuLy9EdWUgZGF0ZSBsYWJlbFxuY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZHVlRGF0ZScpO1xuZHVlRGF0ZUxhYmVsLmlubmVyVGV4dCA9ICdEdWUgZGF0ZSdcblxuXG4vL1VyZ2VuY3kgbGlzdFxuY29uc3QgdXJnZW5jeUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xudXJnZW5jeUxpc3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ3VyZ2VuY3knKVxudXJnZW5jeUxpc3Quc2V0QXR0cmlidXRlKCdsaXN0JywgJ3VyZ2VuY3knKTtcbnVyZ2VuY3lMaXN0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2V0IHVyZ2VuY3knKTtcbmNvbnN0IHVyZ2VuY3lEYXRhbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RhdGFsaXN0Jyk7XG51cmdlbmN5RGF0YWxpc3Quc2V0QXR0cmlidXRlKCdpZCcsICd1cmdlbmN5Jyk7XG5jb25zdCB1cmdlbmN5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xudXJnZW5jeUhpZ2guc2V0QXR0cmlidXRlKCd2YWx1ZScsICdIaWdoJyk7XG5jb25zdCB1cmdlbmN5Tm9ybWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG51cmdlbmN5Tm9ybWFsLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTm9ybWFsJyk7XG5jb25zdCB1cmdlbmN5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG51cmdlbmN5TG93LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTG93Jyk7XG5cbi8vU3VibWl0IGJ1dHRvblxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5zdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQtYnV0dG9uJyk7XG5zdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdBZGQgdGFzaycpO1xuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSBnZXRGb3JtVmFsdWVzKCk7XG4gICAgY29uc29sZS5sb2coZm9ybVZhbHVlcy50aXRsZVRleHQpO1xuICAgIGNyZWF0ZVRvZG9JdGVtKGZvcm1WYWx1ZXMudGl0bGVUZXh0LFxuICAgICAgICBmb3JtVmFsdWVzLnRleHRBcmVhLFxuICAgICAgICBmb3JtVmFsdWVzLmR1ZURhdGUsXG4gICAgICAgIGZvcm1WYWx1ZXMudXJnZW5jeSxcbiAgICAgICAgZm9ybVZhbHVlcy5wYXJlbnRQcm9qZWN0KTtcbiAgICB0b2dnbGVGb3JtKCk7XG5cblxufSlcblxuLy9EaXNjYXJkIGJ1dHRvblxuY29uc3QgZGlzY2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5kaXNjYXJkQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbmRpc2NhcmRCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdEaXNjYXJkIHRhc2snKTtcbmRpc2NhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVGb3JtKTtcblxuLy9QYXJlbnQgcHJvamVjdCBsaXN0XG5jb25zdCBwYXJlbnRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnBhcmVudFByb2plY3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ3BhcmVudFByb2plY3QnKVxucGFyZW50UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2xpc3QnLCAncGFyZW50UHJvamVjdCcpO1xucGFyZW50UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Byb2plY3QnKTtcbmNvbnN0IHByb2plY3REYXRhbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RhdGFsaXN0Jyk7XG5wcm9qZWN0RGF0YWxpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdwYXJlbnRQcm9qZWN0Jyk7XG5jb25zdCBwaFByb2plY3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5waFByb2plY3QxLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnSGlnaCcpO1xuY29uc3QgcGhQcm9qZWN0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xucGhQcm9qZWN0Mi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ05vcm1hbCcpO1xuY29uc3QgcGhQcm9qZWN0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xucGhQcm9qZWN0My5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0xvdycpO1xuLy9DcmVhdGUgRE9NIHRyZWVcbmZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5mb3JtLmFwcGVuZChmb3JtVGl0bGUsXG4gICAgdGl0bGVUZXh0SW5wdXQsXG4gICAgZGVzY3JpcHRpb25UZXh0QXJlYSxcbiAgICBkdWVEYXRlTGFiZWwsXG4gICAgZHVlRGF0ZUlucHV0LFxuICAgIHVyZ2VuY3lMaXN0LFxuICAgIHVyZ2VuY3lEYXRhbGlzdCxcbiAgICBwYXJlbnRQcm9qZWN0LFxuICAgIHByb2plY3REYXRhbGlzdCxcbiAgICBzdWJtaXRCdXR0b24sXG4gICAgZGlzY2FyZEJ1dHRvbik7XG51cmdlbmN5RGF0YWxpc3QuYXBwZW5kKHVyZ2VuY3lIaWdoLCB1cmdlbmN5Tm9ybWFsLCB1cmdlbmN5TG93KTtcbnByb2plY3REYXRhbGlzdC5hcHBlbmQocGhQcm9qZWN0MSwgcGhQcm9qZWN0MiwgcGhQcm9qZWN0Myk7XG5cbi8vVXNlZCB0byBjbGVhciBmb3JtIHdoZW4gdG9nZ2VsaW5nIGl0XG5mdW5jdGlvbiBjbGVhckZvcm0oKSB7XG4gICAgZm9ybS5yZXNldCgpO1xufVxuXG4vL0dldCB0aGUgdmFsdWVzIGVudGVyZWQgdG8gdGhlIGZvcm1cbmZ1bmN0aW9uIGdldEZvcm1WYWx1ZXMoKSB7XG4gICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvRm9ybVwiKS5lbGVtZW50cztcbiAgICBsZXQgb2JqID0ge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgaXRlbSA9IGVsZW1lbnRzLml0ZW0oaSk7XG4gICAgICAgIG9ialtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRm9ybSgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJykgPT09IG51bGwpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpXG4gICAgICAgIGNsZWFyRm9ybSgpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgYXBwZW5kVG9Cb2R5LCBjcmVhdGVEb21FbGVtZW50LCBhcHBlbmRUb1RhcmdldENsYXNzLCBhcHBlbmRDaGlsZHJlblRvUGFyZW50IH0gZnJvbSBcIi4vdXRpbHMvZG9tX3V0aWxzXCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudC9lbGVtZW50XCI7XG5pbXBvcnQgeyB0b2dnbGVGb3JtIH0gZnJvbSBcIi4vZm9ybS9mb3JtXCI7XG5pbXBvcnQgeyBjcmVhdGVUb2RvSXRlbSB9IGZyb20gXCIuL3RvZG9faXRlbS90b2RvX2l0ZW1cIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5cblxuLy9DcmVhdGUgbWFpbiBwYWdlIGVsZW1lbnRzXG5jb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50KCdoZWFkZXInLCBudWxsLCAnZGl2JywgbnVsbCk7XG5jb25zdCBoZWFkZXJUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ3RpdGxlJywgbnVsbCwgJ2gxJywgJ1RPRE8gT3JnaW5hemVyJylcbmNvbnN0IHNpZGVQYW5lbCA9IGNyZWF0ZUVsZW1lbnQoJ3NpZGUtcGFuZWwnLCBudWxsLCAnZGl2JywgbnVsbCk7XG5jb25zdCBtYWluQ29udGVudCA9IGNyZWF0ZUVsZW1lbnQoJ21haW4tY29udGVudCcsIG51bGwsICdkaXYnLCBudWxsKTtcblxuLy9DcmVhdGUgYW4gYXJyYXkgb2YgRE9NIGVsZW1lbnRzIGZvciBoZWFkZXIsIHNpZGVwYW5lbCBhbmQgbWFpbiBjb250ZW50XG5jb25zdCBtYWluUGFnZUVsZW1lbnRzRE9NID0gY3JlYXRlRG9tRWxlbWVudChoZWFkZXIsIHNpZGVQYW5lbCwgbWFpbkNvbnRlbnQpO1xuLy9BZGQgdG8gZG9jdW1lbnQuYm9keVxuYXBwZW5kVG9Cb2R5KG1haW5QYWdlRWxlbWVudHNET00pO1xuXG4vL0hlYWRlciB0aXRsZSB0byBET00gZWxlbWVudFxuY29uc3QgaGVhZGVyVGl0bGVET00gPSBjcmVhdGVEb21FbGVtZW50KGhlYWRlclRpdGxlKTtcblxuLy9BcHBlbmQgdGl0bGUgdG8gaGVhZGVyXG5hcHBlbmRUb1RhcmdldENsYXNzKCcuaGVhZGVyJywgaGVhZGVyVGl0bGVET00pO1xuXG4vL0NyZWF0ZSBzaWRlIHBhbmVsIGl0ZW1zXG5jb25zdCB0b3BJdGVtQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgndG9wLXVsJywgbnVsbCwgJ3VsJywgbnVsbCk7XG5jb25zdCBhbGxUb2Rvc0l0ZW0gPSBjcmVhdGVFbGVtZW50KCdzaWRlLXBhbmVsLWl0ZW0nLCAnYWxsVG9kb3MnLCAnbGknLCBcIkFsbCB0YXNrc1wiKTtcbmNvbnN0IHVyZ2VudFRvZG9zSXRlbSA9IGNyZWF0ZUVsZW1lbnQoJ3NpZGUtcGFuZWwtaXRlbScsICd1cmdlbnRUb2RvcycsICdsaScsIFwiVXJnZW50IHRhc2tzXCIpO1xuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2FkZC1idXR0b24nLCAnYWRkUHJvamVjdEJ1dHRvbicsICdwJywgJ0FkZCBQcm9qZWN0ICsnKVxuXG5jb25zdCB0b3BJdGVtQ29udGFpbmVyRE9NID0gY3JlYXRlRG9tRWxlbWVudCh0b3BJdGVtQ29udGFpbmVyKTtcbmNvbnN0IHRvcEl0ZW1Db250YWluZXJDaGlsZHJlbiA9IGNyZWF0ZURvbUVsZW1lbnQoYWxsVG9kb3NJdGVtLCB1cmdlbnRUb2Rvc0l0ZW0sIGFkZFByb2plY3RCdXR0b24pO1xuXG4vLy0tLU1BSU4gQ09OVEVOVC0tLVxuLy9BZGQgdGFzayBidXR0b25cbmNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmFkZFRhc2tCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUYXNrQnV0dG9uJyk7XG5hZGRUYXNrQnV0dG9uLmlubmVyVGV4dCA9ICcrJztcbmFwcGVuZFRvVGFyZ2V0Q2xhc3MoJy5tYWluLWNvbnRlbnQnLCBbYWRkVGFza0J1dHRvbl0pO1xuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUZvcm0pO1xuXG4vL0FkZCBzaWRlIHBhbmVsIGl0ZW1zIHRvIHRoZSBET00gYXMgY2hpbGRyZW5cbmFwcGVuZFRvVGFyZ2V0Q2xhc3MoJy5zaWRlLXBhbmVsJywgdG9wSXRlbUNvbnRhaW5lckRPTSk7XG5hcHBlbmRUb1RhcmdldENsYXNzKCcudG9wLXVsJywgdG9wSXRlbUNvbnRhaW5lckNoaWxkcmVuKTtcbiIsIi8vIGNvbnN0IFRvRG8gPSAodG9kb190ZXh0LCB0b2RvX2NhdGVnb3J5KSA9PiB7XG4vLyAgICAgY29uc3QgaW5uZXJUZXh0ID0gdG9kb190ZXh0O1xuLy8gICAgIGNvbnN0IGNhdGVnb3J5ID0gdG9kb19jYXRlZ29yeTtcbi8vICAgICBjb25zdCBjb21wbGV0ZWQgPSBmYWxzZTtcbi8vICAgICBjb25zdCBjbGFzc05hbWUgPSAndG9kby1pdGVtJztcbi8vICAgICBjb25zdCBpZCA9IG51bGw7XG4vLyAgICAgY29uc3QgZG9tVHlwZSA9ICdkaXYnO1xuXG4vLyAgICAgcmV0dXJuIHsgaW5uZXJUZXh0LCBjYXRlZ29yeSwgY29tcGxldGVkLCBjbGFzc05hbWUsIGlkLCBkb21UeXBlIH07XG4vLyB9O1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9kbyh0b2RvX3RleHQsIHRvZG9fY2F0ZWdvcnkpIHtcbi8vICAgICBjb25zdCB0ID0gVG9Ebyh0b2RvX3RleHQsIHRvZG9fY2F0ZWdvcnkpO1xuLy8gICAgIHJldHVybiB0O1xuLy8gfVxuXG5jbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZV9kYXRlLCB1cmdlbmN5LCBwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZV9kYXRlID0gZHVlX2RhdGU7XG4gICAgICAgIHRoaXMudXJnZW5jeSA9IHVyZ2VuY3k7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZV9kYXRlLCB1cmdlbmN5LCBwcm9qZWN0KSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJyk7XG4gICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBpdGVtVGl0bGUuaW5uZXJUZXh0ID0gdGl0bGU7XG4gICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcbiAgICBjb25zdCBpdGVtRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpdGVtRHVlRGF0ZS5pbm5lclRleHQgPSBgRHVlIGRhdGU6ICR7ZHVlX2RhdGV9YDtcbiAgICBjb25zdCBpdGVtVXJnZW5jeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpdGVtVXJnZW5jeS5pbm5lclRleHQgPSBgVXJnZW5jeTogJHt1cmdlbmN5fWA7XG4gICAgY29uc3QgaXRlbVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaXRlbVByb2plY3QuaW5uZXJUZXh0ID0gYFByb2plY3Q6ICR7cHJvamVjdH1gO1xuXG4gICAgaXRlbS5hcHBlbmQoaXRlbVRpdGxlLCBpdGVtRGVzY3JpcHRpb24sIGl0ZW1EdWVEYXRlLCBpdGVtVXJnZW5jeSwgaXRlbVByb2plY3QpO1xuXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKS5hcHBlbmRDaGlsZChpdGVtKTtcbn1cblxuIiwiLy9UdXJuIEVsZW1lbnQgb2JqZWN0cyBpbnRvIERPTSBFbGVtZW50cy5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEb21FbGVtZW50KC4uLnNvdXJjZSkge1xuICAgIGxldCBhcnJheU9mRWxlbWVudHMgPSBbXVxuICAgIHNvdXJjZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQuZG9tVHlwZSk7XG4gICAgICAgIHNldEVsZW1lbnRDbGFzcyhlbCwgZWxlbWVudCk7XG4gICAgICAgIHNldEVsZW1lbnRJZChlbCwgZWxlbWVudCk7XG4gICAgICAgIHNldElubmVyVGV4dChlbCwgZWxlbWVudCk7XG4gICAgICAgIGFycmF5T2ZFbGVtZW50cy5wdXNoKGVsKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBhcnJheU9mRWxlbWVudHM7XG59O1xuXG4vL0FwcGVuZCBET00gRWxlbWVudHMgdG8gRG9jdW1lbnQgYm9keS5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRUb0JvZHkoc291cmNlKSB7XG4gICAgc291cmNlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kVG9UYXJnZXRDbGFzcyh0YXJnZXQsIHNvdXJjZSkge1xuICAgIHNvdXJjZS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9KTtcbn07XG5cblxuXG4vL1VzZWQgdG8gc2V0IGEgRE9NIGVsZW1lbnRzIGNsYXNzLlxuZnVuY3Rpb24gc2V0RWxlbWVudENsYXNzKHRhcmdldCwgc291cmNlKSB7XG4gICAgaWYgKHNvdXJjZS5jbGFzc05hbWUgPT09IG51bGwpIHsgcmV0dXJuIH07XG4gICAgcmV0dXJuIHRhcmdldC5jbGFzc0xpc3QuYWRkKHNvdXJjZS5jbGFzc05hbWUpO1xufTtcblxuLy9Vc2VkIHRvIHNldCBhIERPTSBlbGVtZW50cyBJRC5cbmZ1bmN0aW9uIHNldEVsZW1lbnRJZCh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGlmIChzb3VyY2UuaWQgPT09IG51bGwpIHsgcmV0dXJuIH07XG4gICAgcmV0dXJuIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2lkJywgc291cmNlLmlkKTtcbn07XG5cbi8vVXNlZCB0byBzZXQgYSBET00gZWxlbWVudHMgSW5uZXIgdGV4dFxuZnVuY3Rpb24gc2V0SW5uZXJUZXh0KHRhcmdldCwgc291cmNlKSB7XG4gICAgaWYgKHNvdXJjZS5pbm5lclRleHQgPT09IG51bGwpIHsgcmV0dXJuIH07XG4gICAgcmV0dXJuIHRhcmdldC5pbm5lclRleHQgPSBzb3VyY2UuaW5uZXJUZXh0O1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=