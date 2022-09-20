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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --header-bg-color: rgb(197, 84, 67);\n  --header-title-color: rgb(255, 255, 255);\n  --side-panel-bg-color: rgb(250, 250, 250);\n  --main-content-bg-color: rgb(254, 254, 254);\n  --side-panel-items-color: rgb(110, 110, 110);\n  font-family: \"Roboto\", sans-serif;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  position: relative;\n  display: grid;\n  grid-template-rows: 0.07fr 1fr;\n  grid-template-columns: 0.3fr 1fr;\n}\n\n.hidden {\n  display: none;\n}\n\n.header {\n  grid-row: 1 / 2;\n  grid-column: 1 / 3;\n  color: var(--header-title-color);\n  height: 100%;\n  background-color: var(--header-bg-color);\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.header > h1 {\n  margin-left: 1rem;\n}\n\n.side-panel {\n  grid-row: 2 / 3;\n  grid-column: 1 / 2;\n  width: 100%;\n  height: 100%;\n  background-color: var(--side-panel-bg-color);\n}\n\n.side-panel > ul {\n  list-style: none;\n  font-weight: 500;\n  color: var(--side-panel-items-color);\n}\n\n#addProjectButton {\n  transform-origin: left top;\n  font-size: 1em;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  -moz-transition: all 0.5s ease;\n  -webkit-transition: all 0.5s ease;\n}\n\n#addProjectButton:hover {\n  transform: scale(1.1);\n  color: rgb(49, 49, 49);\n}\n\n#addProjectButton:active {\n  font-size: 1.1em;\n  color: rgb(179, 179, 179);\n}\n\n#projectLi {\n  transform-origin: left top;\n  font-size: 1em;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  -moz-transition: all 0.5s ease;\n  -webkit-transition: all 0.5s ease;\n}\n\n#projectLi:hover {\n  transform: scale(1.1);\n  color: rgb(49, 49, 49);\n}\n\n#projectLi:active {\n  font-size: 1.1em;\n  color: rgb(179, 179, 179);\n}\n\n.side-panel-button {\n  transform-origin: left top;\n  font-size: 1em;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  -moz-transition: all 0.5s ease;\n  -webkit-transition: all 0.5s ease;\n}\n\n.side-panel-button:hover {\n  transform: scale(1.1);\n  color: rgb(49, 49, 49);\n}\n\n.side-panel-button:active {\n  font-size: 1.1em;\n  color: rgb(179, 179, 179);\n}\n\n.main-content {\n  grid-row: 2 / 3;\n  grid-column: 2 / 3;\n  background-color: var(--main-content-bg-color);\n  display: grid;\n  grid-template-rows: repeat(auto-fit, 100px);\n  width: 100%;\n}\n\n.main-content > h2 {\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n  justify-self: center;\n  margin-top: 0.5rem;\n}\n\n#addTaskButton {\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n  height: 50px;\n  width: 50px;\n  background-color: var(--side-panel-bg-color);\n  color: var(--side-panel-items-color);\n  font-size: 3rem;\n  border-radius: 50%;\n  margin: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgb(216, 216, 216);\n}\n\n#addTaskButton:hover {\n  border: 1px solid rgb(121, 121, 121);\n  background-color: rgb(149, 149, 149);\n  color: white;\n}\n\n#addTaskButton:active {\n  border: 1px solid rgb(216, 216, 216);\n  background-color: var(--side-panel-bg-color);\n  color: var(--side-panel-items-color);\n}\n\n.todo-item {\n  background-color: var(--side-panel-bg-color);\n  width: 80%;\n  height: auto;\n  border-radius: 0.5rem;\n  box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.5);\n  -webkit-box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.5);\n  -moz-box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.5);\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  color: var(--side-panel-items-color);\n  padding: 0.5rem;\n  margin: 0 auto 0 auto;\n  overflow: hidden;\n  margin-top: 0.5rem;\n}\n\n.todo-item:hover {\n  background-color: rgb(255, 255, 255);\n}\n\n.todo-item > h3 {\n  color: black;\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n}\n\n.todo-item > p:nth-child(2) {\n  grid-column: 1 / 2;\n  grid-row: 2 / 4;\n}\n\n.todo-item > p:nth-child(3) {\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  text-align: end;\n}\n\n.todo-item > p:nth-child(4) {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  text-align: end;\n}\n\n.todo-item > p:nth-child(5) {\n  height: 24px;\n  width: 24px;\n  grid-column: 2 / 3;\n  grid-row: 3 / 4;\n  margin-left: 80%;\n  transition: all 0.5s ease;\n  -moz-transition: all 0.5s ease;\n  -webkit-transition: all 0.5s ease;\n}\n\n.todo-item > p:nth-child(5):hover {\n  transform: scale(1.1);\n  color: rgb(49, 49, 49);\n}\n\n.todo-item > p:nth-child(5):active {\n  font-size: 1.1em;\n  color: rgb(179, 179, 179);\n}\n\n.todo-item > p:nth-child(6) {\n  width: 24px;\n  height: 24px;\n  grid-column: 2 / 3;\n  grid-row: 3 / 4;\n  margin-left: 90%;\n  transition: all 0.5s ease;\n  -moz-transition: all 0.5s ease;\n  -webkit-transition: all 0.5s ease;\n}\n\n.todo-item > p:nth-child(6):hover {\n  transform: scale(1.1);\n  color: rgb(49, 49, 49);\n}\n\n.todo-item > p:nth-child(6):active {\n  font-size: 1.1em;\n  color: rgb(179, 179, 179);\n}\n\n.todo-item > p > svg {\n  fill: green;\n}\n\n.form-container {\n  --form-height: 300px;\n  --form-width: 625px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  position: absolute;\n  background-color: var(--side-panel-bg-color);\n  height: var(--form-height);\n  width: var(--form-width);\n  top: 200px;\n  right: calc(100vw / 2 - calc(var(--form-width) / 2));\n  border-radius: 0.5rem;\n  box-shadow: 8px 7px 14px 0px rgba(133, 133, 133, 0.75);\n  -webkit-box-shadow: 8px 7px 14px 0px rgba(133, 133, 133, 0.75);\n  -moz-box-shadow: 8px 7px 14px 0px rgba(133, 133, 133, 0.75);\n}\n\nform {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 0.5fr 1fr 1fr;\n  grid-row: 1 / 3;\n  grid-column: 1 / 3;\n}\n\nform > h2 {\n  margin: 1rem 1rem;\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  color: var(--side-panel-items-color);\n}\n\nform > input[type=\"text\"] {\n  font-size: 1.2rem;\n  border-radius: 0.5rem;\n  border: none;\n  padding-left: 1rem;\n  width: 300px;\n  height: 50px;\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  margin-left: 1rem;\n}\n\nform > input[type=\"text\"]:hover {\n  border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform > textarea {\n  resize: none;\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n  height: 150px;\n  margin: 0 0 1rem 1rem;\n  border: none;\n  padding: 1rem 0 0 1rem;\n}\n\nform > textarea:hover {\n  border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform > label {\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  margin: 1.5rem 0 0 3.5rem;\n  color: var(--side-panel-items-color);\n}\n\nform > input[type=\"date\"] {\n  padding-left: 1rem;\n  border-radius: 0.5rem;\n  border: none;\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  height: 35px;\n  width: 150px;\n  margin: 1rem 0 0 8rem;\n}\n\nform > input[type=\"date\"]:hover {\n  border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform > input[name=\"urgency\"] {\n  border-radius: 0.5rem;\n  border: none;\n  padding-left: 1rem;\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  height: 35px;\n  width: 150px;\n  margin: 0rem 0 0 8rem;\n}\n\nform > input[name=\"urgency\"]:hover {\n  border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform > input[name=\"parentProject\"] {\n  grid-column: 2/3;\n  grid-row: 2 / 3;\n  border-radius: 0.5rem;\n  border: none;\n  padding-left: 1rem;\n  height: 35px;\n  width: 150px;\n  margin: 3rem 0 0 8rem;\n}\n\nform > input[name=\"parentProject\"]:hover {\n  border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\n#submit-button {\n  grid-column: 2 / 3;\n  grid-row: 3 / 4;\n  height: 35px;\n  width: 150px;\n  margin: 3rem 0 0 8rem;\n  background-color: var(--header-bg-color);\n  color: white;\n  font-size: 1.1rem;\n  border-radius: 0.5rem;\n}\n\n#submit-button:hover {\n  background-color: rgb(59, 180, 93);\n}\n\nform > input[type=\"button\"] {\n  grid-column: 2 / 3;\n  grid-row: 3 / 4;\n  height: 35px;\n  width: 150px;\n  margin: 6rem 0 0 8rem;\n  color: black;\n  font-size: 1.1rem;\n  border-radius: 0.5rem;\n  background-color: whitesmoke;\n}\n\nform > input[type=\"button\"]:hover {\n  background-color: rgb(180, 48, 48);\n}\n\n#submit_on_enter {\n  font-size: 1rem;\n  height: 2rem;\n  width: 90%;\n  margin: 0.5rem 0 0 0;\n  padding: 0 0 0 1rem;\n}\n\n.side-panel > ul:nth-child(1) {\n  margin-top: 2rem;\n  height: 25%;\n}\n\n.side-panel > ul > li {\n  margin-top: 0.5rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\");\n\n* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --header-bg-color: rgb(197, 84, 67);\n  --header-title-color: rgb(255, 255, 255);\n  --side-panel-bg-color: rgb(250, 250, 250);\n  --main-content-bg-color: rgb(254, 254, 254);\n  --side-panel-items-color: rgb(110, 110, 110);\n  font-family: \"Roboto\", sans-serif;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  position: relative;\n  display: grid;\n  grid-template-rows: 0.07fr 1fr;\n  grid-template-columns: 0.3fr 1fr;\n}\n\n.hidden {\n  display: none;\n}\n\n.header {\n  grid-row: 1 / 2;\n  grid-column: 1 / 3;\n  color: var(--header-title-color);\n  height: 100%;\n  background-color: var(--header-bg-color);\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.header > h1 {\n  margin-left: 1rem;\n}\n\n.side-panel {\n  grid-row: 2 / 3;\n  grid-column: 1 / 2;\n  width: 100%;\n  height: 100%;\n  background-color: var(--side-panel-bg-color);\n}\n\n.side-panel > ul {\n  list-style: none;\n  font-weight: 500;\n  color: var(--side-panel-items-color);\n}\n\n#addProjectButton {\n  transform-origin: left top;\n  font-size: 1em;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  -moz-transition: all 0.5s ease;\n  -webkit-transition: all 0.5s ease;\n}\n\n#addProjectButton:hover {\n  transform: scale(1.1);\n  color: rgb(49, 49, 49);\n}\n\n#addProjectButton:active {\n  font-size: 1.1em;\n  color: rgb(179, 179, 179);\n}\n\n#projectLi {\n  transform-origin: left top;\n  font-size: 1em;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  -moz-transition: all 0.5s ease;\n  -webkit-transition: all 0.5s ease;\n}\n\n#projectLi:hover {\n  transform: scale(1.1);\n  color: rgb(49, 49, 49);\n}\n\n#projectLi:active {\n  font-size: 1.1em;\n  color: rgb(179, 179, 179);\n}\n\n.side-panel-button {\n  transform-origin: left top;\n  font-size: 1em;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  -moz-transition: all 0.5s ease;\n  -webkit-transition: all 0.5s ease;\n}\n\n.side-panel-button:hover {\n  transform: scale(1.1);\n  color: rgb(49, 49, 49);\n}\n\n.side-panel-button:active {\n  font-size: 1.1em;\n  color: rgb(179, 179, 179);\n}\n\n.main-content {\n  grid-row: 2 / 3;\n  grid-column: 2 / 3;\n  background-color: var(--main-content-bg-color);\n  display: grid;\n  grid-template-rows: repeat(auto-fit, 100px);\n  width: 100%;\n}\n\n.main-content > h2 {\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n  justify-self: center;\n  margin-top: 0.5rem;\n}\n\n#addTaskButton {\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n  height: 50px;\n  width: 50px;\n  background-color: var(--side-panel-bg-color);\n  color: var(--side-panel-items-color);\n  font-size: 3rem;\n  border-radius: 50%;\n  margin: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgb(216, 216, 216);\n}\n\n#addTaskButton:hover {\n  border: 1px solid rgb(121, 121, 121);\n  background-color: rgb(149, 149, 149);\n  color: white;\n}\n\n#addTaskButton:active {\n  border: 1px solid rgb(216, 216, 216);\n  background-color: var(--side-panel-bg-color);\n  color: var(--side-panel-items-color);\n}\n\n.todo-item {\n  background-color: var(--side-panel-bg-color);\n  width: 80%;\n  height: auto;\n  border-radius: 0.5rem;\n  box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.5);\n  -webkit-box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.5);\n  -moz-box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.5);\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  color: var(--side-panel-items-color);\n  padding: 0.5rem;\n  margin: 0 auto 0 auto;\n  overflow: hidden;\n  margin-top: 0.5rem;\n}\n\n.todo-item:hover {\n  background-color: rgb(255, 255, 255);\n}\n\n.todo-item > h3 {\n  color: black;\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n}\n\n.todo-item > p:nth-child(2) {\n  grid-column: 1 / 2;\n  grid-row: 2 / 4;\n}\n\n.todo-item > p:nth-child(3) {\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  text-align: end;\n}\n\n.todo-item > p:nth-child(4) {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  text-align: end;\n}\n\n.todo-item > p:nth-child(5) {\n  height: 24px;\n  width: 24px;\n  grid-column: 2 / 3;\n  grid-row: 3 / 4;\n  margin-left: 80%;\n  transition: all 0.5s ease;\n  -moz-transition: all 0.5s ease;\n  -webkit-transition: all 0.5s ease;\n}\n\n.todo-item > p:nth-child(5):hover {\n  transform: scale(1.1);\n  color: rgb(49, 49, 49);\n}\n\n.todo-item > p:nth-child(5):active {\n  font-size: 1.1em;\n  color: rgb(179, 179, 179);\n}\n\n.todo-item > p:nth-child(6) {\n  width: 24px;\n  height: 24px;\n  grid-column: 2 / 3;\n  grid-row: 3 / 4;\n  margin-left: 90%;\n  transition: all 0.5s ease;\n  -moz-transition: all 0.5s ease;\n  -webkit-transition: all 0.5s ease;\n}\n\n.todo-item > p:nth-child(6):hover {\n  transform: scale(1.1);\n  color: rgb(49, 49, 49);\n}\n\n.todo-item > p:nth-child(6):active {\n  font-size: 1.1em;\n  color: rgb(179, 179, 179);\n}\n\n.todo-item > p > svg {\n  fill: green;\n}\n\n.form-container {\n  --form-height: 300px;\n  --form-width: 625px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  position: absolute;\n  background-color: var(--side-panel-bg-color);\n  height: var(--form-height);\n  width: var(--form-width);\n  top: 200px;\n  right: calc(100vw / 2 - calc(var(--form-width) / 2));\n  border-radius: 0.5rem;\n  box-shadow: 8px 7px 14px 0px rgba(133, 133, 133, 0.75);\n  -webkit-box-shadow: 8px 7px 14px 0px rgba(133, 133, 133, 0.75);\n  -moz-box-shadow: 8px 7px 14px 0px rgba(133, 133, 133, 0.75);\n}\n\nform {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 0.5fr 1fr 1fr;\n  grid-row: 1 / 3;\n  grid-column: 1 / 3;\n}\n\nform > h2 {\n  margin: 1rem 1rem;\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  color: var(--side-panel-items-color);\n}\n\nform > input[type=\"text\"] {\n  font-size: 1.2rem;\n  border-radius: 0.5rem;\n  border: none;\n  padding-left: 1rem;\n  width: 300px;\n  height: 50px;\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  margin-left: 1rem;\n}\n\nform > input[type=\"text\"]:hover {\n  border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform > textarea {\n  resize: none;\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n  height: 150px;\n  margin: 0 0 1rem 1rem;\n  border: none;\n  padding: 1rem 0 0 1rem;\n}\n\nform > textarea:hover {\n  border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform > label {\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  margin: 1.5rem 0 0 3.5rem;\n  color: var(--side-panel-items-color);\n}\n\nform > input[type=\"date\"] {\n  padding-left: 1rem;\n  border-radius: 0.5rem;\n  border: none;\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  height: 35px;\n  width: 150px;\n  margin: 1rem 0 0 8rem;\n}\n\nform > input[type=\"date\"]:hover {\n  border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform > input[name=\"urgency\"] {\n  border-radius: 0.5rem;\n  border: none;\n  padding-left: 1rem;\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  height: 35px;\n  width: 150px;\n  margin: 0rem 0 0 8rem;\n}\n\nform > input[name=\"urgency\"]:hover {\n  border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform > input[name=\"parentProject\"] {\n  grid-column: 2/3;\n  grid-row: 2 / 3;\n  border-radius: 0.5rem;\n  border: none;\n  padding-left: 1rem;\n  height: 35px;\n  width: 150px;\n  margin: 3rem 0 0 8rem;\n}\n\nform > input[name=\"parentProject\"]:hover {\n  border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\n#submit-button {\n  grid-column: 2 / 3;\n  grid-row: 3 / 4;\n  height: 35px;\n  width: 150px;\n  margin: 3rem 0 0 8rem;\n  background-color: var(--header-bg-color);\n  color: white;\n  font-size: 1.1rem;\n  border-radius: 0.5rem;\n}\n\n#submit-button:hover {\n  background-color: rgb(59, 180, 93);\n}\n\nform > input[type=\"button\"] {\n  grid-column: 2 / 3;\n  grid-row: 3 / 4;\n  height: 35px;\n  width: 150px;\n  margin: 6rem 0 0 8rem;\n  color: black;\n  font-size: 1.1rem;\n  border-radius: 0.5rem;\n  background-color: whitesmoke;\n}\n\nform > input[type=\"button\"]:hover {\n  background-color: rgb(180, 48, 48);\n}\n\n#submit_on_enter {\n  font-size: 1rem;\n  height: 2rem;\n  width: 90%;\n  margin: 0.5rem 0 0 0;\n  padding: 0 0 0 1rem;\n}\n\n.side-panel > ul:nth-child(1) {\n  margin-top: 2rem;\n  height: 25%;\n}\n\n.side-panel > ul > li {\n  margin-top: 0.5rem;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/components/site-content.js":
/*!****************************************!*\
  !*** ./src/components/site-content.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteContent)
/* harmony export */ });
class SiteContent {
  static loadWebsite() {
    this.constructMainContent();
    this.constructButtons();
  }

  static header() {
    const header = document.createElement("div");
    header.classList.add("header");
    const headerTitle = document.createElement("h1");
    headerTitle.innerText = "TODO Orginazer";
    headerTitle.classList.add("title");
    header.appendChild(headerTitle);
    return header;
  }

  static sidePanel() {
    const sidePanel = document.createElement("div");
    sidePanel.classList.add("side-panel");
    this.sidePanelButtons();
    return sidePanel;
  }

  static sidePanelButtons() {
    const allTasksButton = document.createElement("button");
    allTasksButton.setAttribute("class", "side-panel-button");

    return allTasksButton;
  }

  static constructMainContent() {
    return document.body.append(this.header(), this.sidePanel());
  }

  static constructButtons() {
    // For side panel
    const sidePanel = document.querySelector(".side-panel");
    return sidePanel.append(this.sidePanelButtons());
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_site_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/site-content */ "./src/components/site-content.js");
// import {
//   initSidePanel,
//   PROJECTS,
//   active_project,
// } from "./components/side-panel";
// import { initMainContent } from "./components/main-content";
// import { initHeader } from "./components/header";


// // Create and add main elements to webpage
// initHeader();
// initMainContent();
// initSidePanel();



_components_site_content__WEBPACK_IMPORTED_MODULE_1__["default"].loadWebsite();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxX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QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZLGtCQUFrQjtBQUM5QixZQUFZLGFBQWE7QUFDSjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7O0FBRW9EOztBQUVwRCw0RUFBdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL3NpdGUtY29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1oZWFkZXItYmctY29sb3I6IHJnYigxOTcsIDg0LCA2Nyk7XFxuICAtLWhlYWRlci10aXRsZS1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgLS1zaWRlLXBhbmVsLWJnLWNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XFxuICAtLW1haW4tY29udGVudC1iZy1jb2xvcjogcmdiKDI1NCwgMjU0LCAyNTQpO1xcbiAgLS1zaWRlLXBhbmVsLWl0ZW1zLWNvbG9yOiByZ2IoMTEwLCAxMTAsIDExMCk7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMDdmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuM2ZyIDFmcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItdGl0bGUtY29sb3IpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uaGVhZGVyID4gaDEge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5zaWRlLXBhbmVsIHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1iZy1jb2xvcik7XFxufVxcblxcbi5zaWRlLXBhbmVsID4gdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1pdGVtcy1jb2xvcik7XFxufVxcblxcbiNhZGRQcm9qZWN0QnV0dG9uIHtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG5cXG4jYWRkUHJvamVjdEJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBjb2xvcjogcmdiKDQ5LCA0OSwgNDkpO1xcbn1cXG5cXG4jYWRkUHJvamVjdEJ1dHRvbjphY3RpdmUge1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGNvbG9yOiByZ2IoMTc5LCAxNzksIDE3OSk7XFxufVxcblxcbiNwcm9qZWN0TGkge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbiNwcm9qZWN0TGk6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgY29sb3I6IHJnYig0OSwgNDksIDQ5KTtcXG59XFxuXFxuI3Byb2plY3RMaTphY3RpdmUge1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGNvbG9yOiByZ2IoMTc5LCAxNzksIDE3OSk7XFxufVxcblxcbi5zaWRlLXBhbmVsLWJ1dHRvbiB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuLnNpZGUtcGFuZWwtYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGNvbG9yOiByZ2IoNDksIDQ5LCA0OSk7XFxufVxcblxcbi5zaWRlLXBhbmVsLWJ1dHRvbjphY3RpdmUge1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGNvbG9yOiByZ2IoMTc5LCAxNzksIDE3OSk7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb250ZW50LWJnLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgMTAwcHgpO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWluLWNvbnRlbnQgPiBoMiB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuI2FkZFRhc2tCdXR0b24ge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWl0ZW1zLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjE2LCAyMTYsIDIxNik7XFxufVxcblxcbiNhZGRUYXNrQnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjEsIDEyMSwgMTIxKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDksIDE0OSwgMTQ5KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2FkZFRhc2tCdXR0b246YWN0aXZlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTYsIDIxNiwgMjE2KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtaXRlbXMtY29sb3IpO1xcbn1cXG5cXG4udG9kby1pdGVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtYmctY29sb3IpO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggOXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggOXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAtbW96LWJveC1zaGFkb3c6IDNweCAzcHggOXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICBjb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1pdGVtcy1jb2xvcik7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBtYXJnaW46IDAgYXV0byAwIGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4udG9kby1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLnRvZG8taXRlbSA+IGgzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnRvZG8taXRlbSA+IHA6bnRoLWNoaWxkKDIpIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gNDtcXG59XFxuXFxuLnRvZG8taXRlbSA+IHA6bnRoLWNoaWxkKDMpIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLnRvZG8taXRlbSA+IHA6bnRoLWNoaWxkKDQpIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLnRvZG8taXRlbSA+IHA6bnRoLWNoaWxkKDUpIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgbWFyZ2luLWxlZnQ6IDgwJTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbi50b2RvLWl0ZW0gPiBwOm50aC1jaGlsZCg1KTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBjb2xvcjogcmdiKDQ5LCA0OSwgNDkpO1xcbn1cXG5cXG4udG9kby1pdGVtID4gcDpudGgtY2hpbGQoNSk6YWN0aXZlIHtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBjb2xvcjogcmdiKDE3OSwgMTc5LCAxNzkpO1xcbn1cXG5cXG4udG9kby1pdGVtID4gcDpudGgtY2hpbGQoNikge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBtYXJnaW4tbGVmdDogOTAlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuLnRvZG8taXRlbSA+IHA6bnRoLWNoaWxkKDYpOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGNvbG9yOiByZ2IoNDksIDQ5LCA0OSk7XFxufVxcblxcbi50b2RvLWl0ZW0gPiBwOm50aC1jaGlsZCg2KTphY3RpdmUge1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGNvbG9yOiByZ2IoMTc5LCAxNzksIDE3OSk7XFxufVxcblxcbi50b2RvLWl0ZW0gPiBwID4gc3ZnIHtcXG4gIGZpbGw6IGdyZWVuO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgLS1mb3JtLWhlaWdodDogMzAwcHg7XFxuICAtLWZvcm0td2lkdGg6IDYyNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1iZy1jb2xvcik7XFxuICBoZWlnaHQ6IHZhcigtLWZvcm0taGVpZ2h0KTtcXG4gIHdpZHRoOiB2YXIoLS1mb3JtLXdpZHRoKTtcXG4gIHRvcDogMjAwcHg7XFxuICByaWdodDogY2FsYygxMDB2dyAvIDIgLSBjYWxjKHZhcigtLWZvcm0td2lkdGgpIC8gMikpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogOHB4IDdweCAxNHB4IDBweCByZ2JhKDEzMywgMTMzLCAxMzMsIDAuNzUpO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA4cHggN3B4IDE0cHggMHB4IHJnYmEoMTMzLCAxMzMsIDEzMywgMC43NSk7XFxuICAtbW96LWJveC1zaGFkb3c6IDhweCA3cHggMTRweCAwcHggcmdiYSgxMzMsIDEzMywgMTMzLCAwLjc1KTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMWZyIDFmcjtcXG4gIGdyaWQtcm93OiAxIC8gMztcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuZm9ybSA+IGgyIHtcXG4gIG1hcmdpbjogMXJlbSAxcmVtO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtaXRlbXMtY29sb3IpO1xcbn1cXG5cXG5mb3JtID4gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbmZvcm0gPiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjgpO1xcbn1cXG5cXG5mb3JtID4gdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIG1hcmdpbjogMCAwIDFyZW0gMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDFyZW0gMCAwIDFyZW07XFxufVxcblxcbmZvcm0gPiB0ZXh0YXJlYTpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOCk7XFxufVxcblxcbmZvcm0gPiBsYWJlbCB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBtYXJnaW46IDEuNXJlbSAwIDAgMy41cmVtO1xcbiAgY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtaXRlbXMtY29sb3IpO1xcbn1cXG5cXG5mb3JtID4gaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIG1hcmdpbjogMXJlbSAwIDAgOHJlbTtcXG59XFxuXFxuZm9ybSA+IGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXTpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOCk7XFxufVxcblxcbmZvcm0gPiBpbnB1dFtuYW1lPVxcXCJ1cmdlbmN5XFxcIl0ge1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgbWFyZ2luOiAwcmVtIDAgMCA4cmVtO1xcbn1cXG5cXG5mb3JtID4gaW5wdXRbbmFtZT1cXFwidXJnZW5jeVxcXCJdOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC44KTtcXG59XFxuXFxuZm9ybSA+IGlucHV0W25hbWU9XFxcInBhcmVudFByb2plY3RcXFwiXSB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgbWFyZ2luOiAzcmVtIDAgMCA4cmVtO1xcbn1cXG5cXG5mb3JtID4gaW5wdXRbbmFtZT1cXFwicGFyZW50UHJvamVjdFxcXCJdOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC44KTtcXG59XFxuXFxuI3N1Ym1pdC1idXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgbWFyZ2luOiAzcmVtIDAgMCA4cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4jc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDE4MCwgOTMpO1xcbn1cXG5cXG5mb3JtID4gaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgbWFyZ2luOiA2cmVtIDAgMCA4cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG5mb3JtID4gaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MCwgNDgsIDQ4KTtcXG59XFxuXFxuI3N1Ym1pdF9vbl9lbnRlciB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAwLjVyZW0gMCAwIDA7XFxuICBwYWRkaW5nOiAwIDAgMCAxcmVtO1xcbn1cXG5cXG4uc2lkZS1wYW5lbCA+IHVsOm50aC1jaGlsZCgxKSB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgaGVpZ2h0OiAyNSU7XFxufVxcblxcbi5zaWRlLXBhbmVsID4gdWwgPiBsaSB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLHdDQUF3QztFQUN4Qyx5Q0FBeUM7RUFDekMsMkNBQTJDO0VBQzNDLDRDQUE0QztFQUM1QyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIs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Q1osWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHdDQUF3QztFQUN4QyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWhlYWRlci1iZy1jb2xvcjogcmdiKDE5NywgODQsIDY3KTtcXG4gIC0taGVhZGVyLXRpdGxlLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAtLXNpZGUtcGFuZWwtYmctY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKTtcXG4gIC0tbWFpbi1jb250ZW50LWJnLWNvbG9yOiByZ2IoMjU0LCAyNTQsIDI1NCk7XFxuICAtLXNpZGUtcGFuZWwtaXRlbXMtY29sb3I6IHJnYigxMTAsIDExMCwgMTEwKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4wN2ZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4zZnIgMWZyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci10aXRsZS1jb2xvcik7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmctY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5oZWFkZXIgPiBoMSB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLnNpZGUtcGFuZWwge1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWJnLWNvbG9yKTtcXG59XFxuXFxuLnNpZGUtcGFuZWwgPiB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWl0ZW1zLWNvbG9yKTtcXG59XFxuXFxuI2FkZFByb2plY3RCdXR0b24ge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbiNhZGRQcm9qZWN0QnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGNvbG9yOiByZ2IoNDksIDQ5LCA0OSk7XFxufVxcblxcbiNhZGRQcm9qZWN0QnV0dG9uOmFjdGl2ZSB7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgY29sb3I6IHJnYigxNzksIDE3OSwgMTc5KTtcXG59XFxuXFxuI3Byb2plY3RMaSB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuI3Byb2plY3RMaTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBjb2xvcjogcmdiKDQ5LCA0OSwgNDkpO1xcbn1cXG5cXG4jcHJvamVjdExpOmFjdGl2ZSB7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgY29sb3I6IHJnYigxNzksIDE3OSwgMTc5KTtcXG59XFxuXFxuLnNpZGUtcGFuZWwtYnV0dG9uIHtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG5cXG4uc2lkZS1wYW5lbC1idXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgY29sb3I6IHJnYig0OSwgNDksIDQ5KTtcXG59XFxuXFxuLnNpZGUtcGFuZWwtYnV0dG9uOmFjdGl2ZSB7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgY29sb3I6IHJnYigxNzksIDE3OSwgMTc5KTtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbnRlbnQtYmctY29sb3IpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCAxMDBweCk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1haW4tY29udGVudCA+IGgyIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4jYWRkVGFza0J1dHRvbiB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtaXRlbXMtY29sb3IpO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTYsIDIxNiwgMjE2KTtcXG59XFxuXFxuI2FkZFRhc2tCdXR0b246aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEyMSwgMTIxLCAxMjEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OSwgMTQ5LCAxNDkpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jYWRkVGFza0J1dHRvbjphY3RpdmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNiwgMjE2LCAyMTYpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1pdGVtcy1jb2xvcik7XFxufVxcblxcbi50b2RvLWl0ZW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1iZy1jb2xvcik7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCA5cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA5cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDNweCA5cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWl0ZW1zLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbi50b2RvLWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4udG9kby1pdGVtID4gaDMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4udG9kby1pdGVtID4gcDpudGgtY2hpbGQoMikge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyA0O1xcbn1cXG5cXG4udG9kby1pdGVtID4gcDpudGgtY2hpbGQoMykge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4udG9kby1pdGVtID4gcDpudGgtY2hpbGQoNCkge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4udG9kby1pdGVtID4gcDpudGgtY2hpbGQoNSkge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBtYXJnaW4tbGVmdDogODAlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuLnRvZG8taXRlbSA+IHA6bnRoLWNoaWxkKDUpOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGNvbG9yOiByZ2IoNDksIDQ5LCA0OSk7XFxufVxcblxcbi50b2RvLWl0ZW0gPiBwOm50aC1jaGlsZCg1KTphY3RpdmUge1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGNvbG9yOiByZ2IoMTc5LCAxNzksIDE3OSk7XFxufVxcblxcbi50b2RvLWl0ZW0gPiBwOm50aC1jaGlsZCg2KSB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIG1hcmdpbi1sZWZ0OiA5MCU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG5cXG4udG9kby1pdGVtID4gcDpudGgtY2hpbGQoNik6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgY29sb3I6IHJnYig0OSwgNDksIDQ5KTtcXG59XFxuXFxuLnRvZG8taXRlbSA+IHA6bnRoLWNoaWxkKDYpOmFjdGl2ZSB7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgY29sb3I6IHJnYigxNzksIDE3OSwgMTc5KTtcXG59XFxuXFxuLnRvZG8taXRlbSA+IHAgPiBzdmcge1xcbiAgZmlsbDogZ3JlZW47XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAtLWZvcm0taGVpZ2h0OiAzMDBweDtcXG4gIC0tZm9ybS13aWR0aDogNjI1cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWJnLWNvbG9yKTtcXG4gIGhlaWdodDogdmFyKC0tZm9ybS1oZWlnaHQpO1xcbiAgd2lkdGg6IHZhcigtLWZvcm0td2lkdGgpO1xcbiAgdG9wOiAyMDBweDtcXG4gIHJpZ2h0OiBjYWxjKDEwMHZ3IC8gMiAtIGNhbGModmFyKC0tZm9ybS13aWR0aCkgLyAyKSk7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiA4cHggN3B4IDE0cHggMHB4IHJnYmEoMTMzLCAxMzMsIDEzMywgMC43NSk7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDhweCA3cHggMTRweCAwcHggcmdiYSgxMzMsIDEzMywgMTMzLCAwLjc1KTtcXG4gIC1tb3otYm94LXNoYWRvdzogOHB4IDdweCAxNHB4IDBweCByZ2JhKDEzMywgMTMzLCAxMzMsIDAuNzUpO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAxZnIgMWZyO1xcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG5mb3JtID4gaDIge1xcbiAgbWFyZ2luOiAxcmVtIDFyZW07XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBjb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1pdGVtcy1jb2xvcik7XFxufVxcblxcbmZvcm0gPiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuZm9ybSA+IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOCk7XFxufVxcblxcbmZvcm0gPiB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgbWFyZ2luOiAwIDAgMXJlbSAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMXJlbSAwIDAgMXJlbTtcXG59XFxuXFxuZm9ybSA+IHRleHRhcmVhOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC44KTtcXG59XFxuXFxuZm9ybSA+IGxhYmVsIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIG1hcmdpbjogMS41cmVtIDAgMCAzLjVyZW07XFxuICBjb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1pdGVtcy1jb2xvcik7XFxufVxcblxcbmZvcm0gPiBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgbWFyZ2luOiAxcmVtIDAgMCA4cmVtO1xcbn1cXG5cXG5mb3JtID4gaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC44KTtcXG59XFxuXFxuZm9ybSA+IGlucHV0W25hbWU9XFxcInVyZ2VuY3lcXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBtYXJnaW46IDByZW0gMCAwIDhyZW07XFxufVxcblxcbmZvcm0gPiBpbnB1dFtuYW1lPVxcXCJ1cmdlbmN5XFxcIl06aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjgpO1xcbn1cXG5cXG5mb3JtID4gaW5wdXRbbmFtZT1cXFwicGFyZW50UHJvamVjdFxcXCJdIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBtYXJnaW46IDNyZW0gMCAwIDhyZW07XFxufVxcblxcbmZvcm0gPiBpbnB1dFtuYW1lPVxcXCJwYXJlbnRQcm9qZWN0XFxcIl06aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjgpO1xcbn1cXG5cXG4jc3VibWl0LWJ1dHRvbiB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBtYXJnaW46IDNyZW0gMCAwIDhyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmctY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbiNzdWJtaXQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1OSwgMTgwLCA5Myk7XFxufVxcblxcbmZvcm0gPiBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBtYXJnaW46IDZyZW0gMCAwIDhyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbmZvcm0gPiBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgwLCA0OCwgNDgpO1xcbn1cXG5cXG4jc3VibWl0X29uX2VudGVyIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDAuNXJlbSAwIDAgMDtcXG4gIHBhZGRpbmc6IDAgMCAwIDFyZW07XFxufVxcblxcbi5zaWRlLXBhbmVsID4gdWw6bnRoLWNoaWxkKDEpIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBoZWlnaHQ6IDI1JTtcXG59XFxuXFxuLnNpZGUtcGFuZWwgPiB1bCA+IGxpIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaXRlQ29udGVudCB7XG4gIHN0YXRpYyBsb2FkV2Vic2l0ZSgpIHtcbiAgICB0aGlzLmNvbnN0cnVjdE1haW5Db250ZW50KCk7XG4gICAgdGhpcy5jb25zdHJ1Y3RCdXR0b25zKCk7XG4gIH1cblxuICBzdGF0aWMgaGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gICAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGVyVGl0bGUuaW5uZXJUZXh0ID0gXCJUT0RPIE9yZ2luYXplclwiO1xuICAgIGhlYWRlclRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuICAgIHJldHVybiBoZWFkZXI7XG4gIH1cblxuICBzdGF0aWMgc2lkZVBhbmVsKCkge1xuICAgIGNvbnN0IHNpZGVQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZVBhbmVsLmNsYXNzTGlzdC5hZGQoXCJzaWRlLXBhbmVsXCIpO1xuICAgIHRoaXMuc2lkZVBhbmVsQnV0dG9ucygpO1xuICAgIHJldHVybiBzaWRlUGFuZWw7XG4gIH1cblxuICBzdGF0aWMgc2lkZVBhbmVsQnV0dG9ucygpIHtcbiAgICBjb25zdCBhbGxUYXNrc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWxsVGFza3NCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaWRlLXBhbmVsLWJ1dHRvblwiKTtcblxuICAgIHJldHVybiBhbGxUYXNrc0J1dHRvbjtcbiAgfVxuXG4gIHN0YXRpYyBjb25zdHJ1Y3RNYWluQ29udGVudCgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5oZWFkZXIoKSwgdGhpcy5zaWRlUGFuZWwoKSk7XG4gIH1cblxuICBzdGF0aWMgY29uc3RydWN0QnV0dG9ucygpIHtcbiAgICAvLyBGb3Igc2lkZSBwYW5lbFxuICAgIGNvbnN0IHNpZGVQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZS1wYW5lbFwiKTtcbiAgICByZXR1cm4gc2lkZVBhbmVsLmFwcGVuZCh0aGlzLnNpZGVQYW5lbEJ1dHRvbnMoKSk7XG4gIH1cbn1cbiIsIi8vIGltcG9ydCB7XG4vLyAgIGluaXRTaWRlUGFuZWwsXG4vLyAgIFBST0pFQ1RTLFxuLy8gICBhY3RpdmVfcHJvamVjdCxcbi8vIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zaWRlLXBhbmVsXCI7XG4vLyBpbXBvcnQgeyBpbml0TWFpbkNvbnRlbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL21haW4tY29udGVudFwiO1xuLy8gaW1wb3J0IHsgaW5pdEhlYWRlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG4vLyAvLyBDcmVhdGUgYW5kIGFkZCBtYWluIGVsZW1lbnRzIHRvIHdlYnBhZ2Vcbi8vIGluaXRIZWFkZXIoKTtcbi8vIGluaXRNYWluQ29udGVudCgpO1xuLy8gaW5pdFNpZGVQYW5lbCgpO1xuXG5pbXBvcnQgU2l0ZUNvbnRlbnQgZnJvbSBcIi4vY29tcG9uZW50cy9zaXRlLWNvbnRlbnRcIjtcblxuU2l0ZUNvbnRlbnQubG9hZFdlYnNpdGUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==