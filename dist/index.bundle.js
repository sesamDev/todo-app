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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --header-bg-color: rgb(197, 84, 67);\n    --header-title-color: rgb(255, 255, 255);\n    --side-panel-bg-color: rgb(250, 250, 250);\n    --main-content-bg-color: rgb(254, 254, 254);\n    --side-panel-items-color: rgb(110, 110, 110);\n    font-family: 'Roboto', sans-serif;\n\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    position: relative;\n    display: grid;\n    grid-template-rows: .07fr 1fr;\n    grid-template-columns: .3fr 1fr;\n}\n\n.hidden {\n    display: none;\n}\n\n.header {\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    color: var(--header-title-color);\n    height: 100%;\n    background-color: var(--header-bg-color);\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n}\n\n.header>h1 {\n    margin-left: 1rem;\n}\n\n.side-panel {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    width: 100%;\n    height: 100%;\n    background-color: var(--side-panel-bg-color);\n}\n\n.side-panel>ul {\n    list-style: none;\n    font-weight: 500;\n    color: var(--side-panel-items-color);\n}\n\n\n#addProjectButton {\n    transform-origin: left top;\n    font-size: 1em;\n    cursor: pointer;\n    transition: all .5s ease;\n    -moz-transition: all .5s ease;\n    -webkit-transition: all .5s ease;\n}\n\n#addProjectButton:hover {\n    transform: scale(1.1);\n    color: rgb(49, 49, 49);\n\n}\n\n#addProjectButton:active {\n    font-size: 1.1em;\n    color: rgb(179, 179, 179);\n\n}\n\n#projectLi {\n    transform-origin: left top;\n    font-size: 1em;\n    cursor: pointer;\n    transition: all .5s ease;\n    -moz-transition: all .5s ease;\n    -webkit-transition: all .5s ease;\n}\n\n#projectLi:hover {\n    transform: scale(1.1);\n    color: rgb(49, 49, 49);\n\n}\n\n#projectLi:active {\n    font-size: 1.1em;\n    color: rgb(179, 179, 179);\n\n}\n\n\n\n\n.main-content {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    background-color: var(--main-content-bg-color);\n    display: grid;\n    grid-template-rows: repeat(auto-fit, 100px);\n    width: 100%;\n\n}\n\n.main-content>h2 {\n    grid-row: 1 / 2;\n    grid-column: 1 / 2;\n    justify-self: center;\n    margin-top: .5rem;\n}\n\n#addTaskButton {\n    grid-row: 1 / 2;\n    grid-column: 1 / 2;\n    height: 50px;\n    width: 50px;\n    background-color: var(--side-panel-bg-color);\n    color: var(--side-panel-items-color);\n    font-size: 3rem;\n    border-radius: 50%;\n    margin: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid rgb(216, 216, 216);\n}\n\n#addTaskButton:hover {\n    border: 1px solid rgb(121, 121, 121);\n    background-color: rgb(149, 149, 149);\n    color: white;\n\n}\n\n#addTaskButton:active {\n    border: 1px solid rgb(216, 216, 216);\n    background-color: var(--side-panel-bg-color);\n    color: var(--side-panel-items-color);\n\n}\n\n.todo-item {\n    background-color: var(--side-panel-bg-color);\n    width: 80%;\n    height: auto;\n    border-radius: .5rem;\n    box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.5);\n    -webkit-box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.5);\n    -moz-box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.5);\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    color: var(--side-panel-items-color);\n    padding: .5rem;\n    margin: 0 auto 0 auto;\n    overflow: hidden;\n    margin-top: .5rem;\n}\n\n.todo-item:hover {\n\n    background-color: rgb(255, 255, 255);\n}\n\n.todo-item>h3 {\n    color: black;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n}\n\n.todo-item>p:nth-child(2) {\n    grid-column: 1 / 2;\n    grid-row: 2 / 4;\n\n}\n\n.todo-item>p:nth-child(3) {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    text-align: end;\n\n}\n\n.todo-item>p:nth-child(4) {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    text-align: end;\n\n}\n\n.todo-item>p:nth-child(5) {\n    height: 24px;\n    width: 24px;\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    margin-left: 80%;\n    transition: all .5s ease;\n    -moz-transition: all .5s ease;\n    -webkit-transition: all .5s ease;\n}\n\n.todo-item>p:nth-child(5):hover {\n    transform: scale(1.1);\n    color: rgb(49, 49, 49);\n\n}\n\n.todo-item>p:nth-child(5):active {\n    font-size: 1.1em;\n    color: rgb(179, 179, 179);\n\n}\n\n.todo-item>p:nth-child(6) {\n    width: 24px;\n    height: 24px;\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    margin-left: 90%;\n    transition: all .5s ease;\n    -moz-transition: all .5s ease;\n    -webkit-transition: all .5s ease;\n\n}\n\n.todo-item>p:nth-child(6):hover {\n    transform: scale(1.1);\n    color: rgb(49, 49, 49);\n\n}\n\n.todo-item>p:nth-child(6):active {\n    font-size: 1.1em;\n    color: rgb(179, 179, 179);\n\n}\n\n.todo-item>p>svg {\n    fill: green;\n}\n\n\n.form-container {\n    --form-height: 300px;\n    --form-width: 625px;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    position: absolute;\n    background-color: var(--side-panel-bg-color);\n    height: var(--form-height);\n    width: var(--form-width);\n    top: 200px;\n    right: calc(100vw/2 - calc(var(--form-width)/2));\n    border-radius: .5rem;\n    box-shadow: 8px 7px 14px 0px rgba(133, 133, 133, 0.75);\n    -webkit-box-shadow: 8px 7px 14px 0px rgba(133, 133, 133, 0.75);\n    -moz-box-shadow: 8px 7px 14px 0px rgba(133, 133, 133, 0.75);\n}\n\nform {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: .5fr 1fr 1fr;\n    grid-row: 1 / 3;\n    grid-column: 1 / 3;\n}\n\nform>h2 {\n    margin: 1rem 1rem;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    color: var(--side-panel-items-color)\n}\n\nform>input[type=text] {\n    font-size: 1.2rem;\n    border-radius: .5rem;\n    border: none;\n    padding-left: 1rem;\n    width: 300px;\n    height: 50px;\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    margin-left: 1rem;\n}\n\nform>input[type=text]:hover {\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\n\nform>textarea {\n    resize: none;\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n    height: 150px;\n    margin: 0 0 1rem 1rem;\n    border: none;\n    padding: 1rem 0 0 1rem;\n}\n\nform>textarea:hover {\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform>label {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    margin: 1.5rem 0 0 3.5rem;\n    color: var(--side-panel-items-color)\n}\n\nform>input[type=date] {\n    padding-left: 1rem;\n    border-radius: .5rem;\n    border: none;\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    height: 35px;\n    width: 150px;\n    margin: 1rem 0 0 8rem;\n}\n\nform>input[type=date]:hover {\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform>input[name=urgency] {\n    border-radius: .5rem;\n    border: none;\n    padding-left: 1rem;\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    height: 35px;\n    width: 150px;\n    margin: 0rem 0 0 8rem;\n}\n\nform>input[name=urgency]:hover {\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform>input[name=parentProject] {\n    grid-column: 2/3;\n    grid-row: 2 / 3;\n    border-radius: .5rem;\n    border: none;\n    padding-left: 1rem;\n    height: 35px;\n    width: 150px;\n    margin: 3rem 0 0 8rem;\n}\n\nform>input[name=parentProject]:hover {\n\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\n#submit-button {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    height: 35px;\n    width: 150px;\n    margin: 3rem 0 0 8rem;\n    background-color: var(--header-bg-color);\n    color: white;\n    font-size: 1.1rem;\n    border-radius: .5rem;\n}\n\n#submit-button:hover {\n    background-color: rgb(59, 180, 93);\n\n}\n\nform>input[type=button] {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    height: 35px;\n    width: 150px;\n    margin: 6rem 0 0 8rem;\n    color: black;\n    font-size: 1.1rem;\n    border-radius: .5rem;\n    background-color: whitesmoke;\n\n}\n\nform>input[type=button]:hover {\n    background-color: rgb(180, 48, 48);\n\n}\n\n#submit_on_enter {\n    font-size: 1rem;\n    height: 2rem;\n    width: 90%;\n    margin: .5rem 0 0 0;\n    padding: 0 0 0 1rem;\n}\n\n.side-panel>ul:nth-child(1) {\n    margin-top: 2rem;\n    height: 25%;\n}\n\n.side-panel>ul>li {\n    margin-top: .5rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --header-bg-color: rgb(197, 84, 67);\n    --header-title-color: rgb(255, 255, 255);\n    --side-panel-bg-color: rgb(250, 250, 250);\n    --main-content-bg-color: rgb(254, 254, 254);\n    --side-panel-items-color: rgb(110, 110, 110);\n    font-family: 'Roboto', sans-serif;\n\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    position: relative;\n    display: grid;\n    grid-template-rows: .07fr 1fr;\n    grid-template-columns: .3fr 1fr;\n}\n\n.hidden {\n    display: none;\n}\n\n.header {\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    color: var(--header-title-color);\n    height: 100%;\n    background-color: var(--header-bg-color);\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n}\n\n.header>h1 {\n    margin-left: 1rem;\n}\n\n.side-panel {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    width: 100%;\n    height: 100%;\n    background-color: var(--side-panel-bg-color);\n}\n\n.side-panel>ul {\n    list-style: none;\n    font-weight: 500;\n    color: var(--side-panel-items-color);\n}\n\n\n#addProjectButton {\n    transform-origin: left top;\n    font-size: 1em;\n    cursor: pointer;\n    transition: all .5s ease;\n    -moz-transition: all .5s ease;\n    -webkit-transition: all .5s ease;\n}\n\n#addProjectButton:hover {\n    transform: scale(1.1);\n    color: rgb(49, 49, 49);\n\n}\n\n#addProjectButton:active {\n    font-size: 1.1em;\n    color: rgb(179, 179, 179);\n\n}\n\n#projectLi {\n    transform-origin: left top;\n    font-size: 1em;\n    cursor: pointer;\n    transition: all .5s ease;\n    -moz-transition: all .5s ease;\n    -webkit-transition: all .5s ease;\n}\n\n#projectLi:hover {\n    transform: scale(1.1);\n    color: rgb(49, 49, 49);\n\n}\n\n#projectLi:active {\n    font-size: 1.1em;\n    color: rgb(179, 179, 179);\n\n}\n\n\n\n\n.main-content {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    background-color: var(--main-content-bg-color);\n    display: grid;\n    grid-template-rows: repeat(auto-fit, 100px);\n    width: 100%;\n\n}\n\n.main-content>h2 {\n    grid-row: 1 / 2;\n    grid-column: 1 / 2;\n    justify-self: center;\n    margin-top: .5rem;\n}\n\n#addTaskButton {\n    grid-row: 1 / 2;\n    grid-column: 1 / 2;\n    height: 50px;\n    width: 50px;\n    background-color: var(--side-panel-bg-color);\n    color: var(--side-panel-items-color);\n    font-size: 3rem;\n    border-radius: 50%;\n    margin: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid rgb(216, 216, 216);\n}\n\n#addTaskButton:hover {\n    border: 1px solid rgb(121, 121, 121);\n    background-color: rgb(149, 149, 149);\n    color: white;\n\n}\n\n#addTaskButton:active {\n    border: 1px solid rgb(216, 216, 216);\n    background-color: var(--side-panel-bg-color);\n    color: var(--side-panel-items-color);\n\n}\n\n.todo-item {\n    background-color: var(--side-panel-bg-color);\n    width: 80%;\n    height: auto;\n    border-radius: .5rem;\n    box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.5);\n    -webkit-box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.5);\n    -moz-box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.5);\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    color: var(--side-panel-items-color);\n    padding: .5rem;\n    margin: 0 auto 0 auto;\n    overflow: hidden;\n    margin-top: .5rem;\n}\n\n.todo-item:hover {\n\n    background-color: rgb(255, 255, 255);\n}\n\n.todo-item>h3 {\n    color: black;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n}\n\n.todo-item>p:nth-child(2) {\n    grid-column: 1 / 2;\n    grid-row: 2 / 4;\n\n}\n\n.todo-item>p:nth-child(3) {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    text-align: end;\n\n}\n\n.todo-item>p:nth-child(4) {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    text-align: end;\n\n}\n\n.todo-item>p:nth-child(5) {\n    height: 24px;\n    width: 24px;\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    margin-left: 80%;\n    transition: all .5s ease;\n    -moz-transition: all .5s ease;\n    -webkit-transition: all .5s ease;\n}\n\n.todo-item>p:nth-child(5):hover {\n    transform: scale(1.1);\n    color: rgb(49, 49, 49);\n\n}\n\n.todo-item>p:nth-child(5):active {\n    font-size: 1.1em;\n    color: rgb(179, 179, 179);\n\n}\n\n.todo-item>p:nth-child(6) {\n    width: 24px;\n    height: 24px;\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    margin-left: 90%;\n    transition: all .5s ease;\n    -moz-transition: all .5s ease;\n    -webkit-transition: all .5s ease;\n\n}\n\n.todo-item>p:nth-child(6):hover {\n    transform: scale(1.1);\n    color: rgb(49, 49, 49);\n\n}\n\n.todo-item>p:nth-child(6):active {\n    font-size: 1.1em;\n    color: rgb(179, 179, 179);\n\n}\n\n.todo-item>p>svg {\n    fill: green;\n}\n\n\n.form-container {\n    --form-height: 300px;\n    --form-width: 625px;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    position: absolute;\n    background-color: var(--side-panel-bg-color);\n    height: var(--form-height);\n    width: var(--form-width);\n    top: 200px;\n    right: calc(100vw/2 - calc(var(--form-width)/2));\n    border-radius: .5rem;\n    box-shadow: 8px 7px 14px 0px rgba(133, 133, 133, 0.75);\n    -webkit-box-shadow: 8px 7px 14px 0px rgba(133, 133, 133, 0.75);\n    -moz-box-shadow: 8px 7px 14px 0px rgba(133, 133, 133, 0.75);\n}\n\nform {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: .5fr 1fr 1fr;\n    grid-row: 1 / 3;\n    grid-column: 1 / 3;\n}\n\nform>h2 {\n    margin: 1rem 1rem;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    color: var(--side-panel-items-color)\n}\n\nform>input[type=text] {\n    font-size: 1.2rem;\n    border-radius: .5rem;\n    border: none;\n    padding-left: 1rem;\n    width: 300px;\n    height: 50px;\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    margin-left: 1rem;\n}\n\nform>input[type=text]:hover {\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\n\nform>textarea {\n    resize: none;\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n    height: 150px;\n    margin: 0 0 1rem 1rem;\n    border: none;\n    padding: 1rem 0 0 1rem;\n}\n\nform>textarea:hover {\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform>label {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    margin: 1.5rem 0 0 3.5rem;\n    color: var(--side-panel-items-color)\n}\n\nform>input[type=date] {\n    padding-left: 1rem;\n    border-radius: .5rem;\n    border: none;\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    height: 35px;\n    width: 150px;\n    margin: 1rem 0 0 8rem;\n}\n\nform>input[type=date]:hover {\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform>input[name=urgency] {\n    border-radius: .5rem;\n    border: none;\n    padding-left: 1rem;\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    height: 35px;\n    width: 150px;\n    margin: 0rem 0 0 8rem;\n}\n\nform>input[name=urgency]:hover {\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\nform>input[name=parentProject] {\n    grid-column: 2/3;\n    grid-row: 2 / 3;\n    border-radius: .5rem;\n    border: none;\n    padding-left: 1rem;\n    height: 35px;\n    width: 150px;\n    margin: 3rem 0 0 8rem;\n}\n\nform>input[name=parentProject]:hover {\n\n    border: 1px solid rgba(128, 128, 128, 0.8);\n}\n\n#submit-button {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    height: 35px;\n    width: 150px;\n    margin: 3rem 0 0 8rem;\n    background-color: var(--header-bg-color);\n    color: white;\n    font-size: 1.1rem;\n    border-radius: .5rem;\n}\n\n#submit-button:hover {\n    background-color: rgb(59, 180, 93);\n\n}\n\nform>input[type=button] {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    height: 35px;\n    width: 150px;\n    margin: 6rem 0 0 8rem;\n    color: black;\n    font-size: 1.1rem;\n    border-radius: .5rem;\n    background-color: whitesmoke;\n\n}\n\nform>input[type=button]:hover {\n    background-color: rgb(180, 48, 48);\n\n}\n\n#submit_on_enter {\n    font-size: 1rem;\n    height: 2rem;\n    width: 90%;\n    margin: .5rem 0 0 0;\n    padding: 0 0 0 1rem;\n}\n\n.side-panel>ul:nth-child(1) {\n    margin-top: 2rem;\n    height: 25%;\n}\n\n.side-panel>ul>li {\n    margin-top: .5rem;\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleForm": () => (/* binding */ toggleForm)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/components/todo.js");
/* harmony import */ var _side_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-panel */ "./src/components/side-panel.js");
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoList */ "./src/components/todoList.js");





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
    let t = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.createTodo)(formValues.titleText,
        formValues.textArea,
        formValues.dueDate,
        formValues.urgency,
        (0,_side_panel__WEBPACK_IMPORTED_MODULE_1__.getActiveProject)());
    (0,_todoList__WEBPACK_IMPORTED_MODULE_2__.appendTodoToList)(t);
    toggleForm();
    (0,_side_panel__WEBPACK_IMPORTED_MODULE_1__.renderTodos)();

})

//Discard button
const discardButton = document.createElement('input');
discardButton.setAttribute('type', 'button');
discardButton.setAttribute('value', 'Discard task');
discardButton.addEventListener('click', toggleForm);

//Create DOM tree
formContainer.appendChild(form);
form.append(formTitle,
    titleTextInput,
    descriptionTextArea,
    dueDateLabel,
    dueDateInput,
    urgencyList,
    urgencyDatalist,
    submitButton,
    discardButton);
urgencyDatalist.append(urgencyHigh, urgencyNormal, urgencyLow);

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

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initHeader": () => (/* binding */ initHeader)
/* harmony export */ });
//Doc fragment for creating the DOM tree
let fragmnt = document.createDocumentFragment();

//Create main page elements
const header = document.createElement('div');
header.classList.add('header');
const headerTitle = document.createElement('h1');
headerTitle.innerText = 'TODO Orginazer'
headerTitle.classList.add('title');

header.appendChild(headerTitle);

fragmnt.appendChild(header);

function initHeader() {
    return document.body.appendChild(fragmnt);
}

/***/ }),

/***/ "./src/components/main-content.js":
/*!****************************************!*\
  !*** ./src/components/main-content.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initMainContent": () => (/* binding */ initMainContent),
/* harmony export */   "setContentTitle": () => (/* binding */ setContentTitle)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/components/form.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/components/todo.js");
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoList */ "./src/components/todoList.js");
/* harmony import */ var _side_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-panel */ "./src/components/side-panel.js");





//Doc fragment for creating the DOM tree
let fragmnt = document.createDocumentFragment();

//Creating the main Side panel div
const mainContent = document.createElement('div');
mainContent.classList.add('main-content');

//Creating and adding top Text
const contentTitle = document.createElement('h2');
contentTitle.innerText = 'Welcome to TODO Organizer'
mainContent.appendChild(contentTitle);

//Add task button
const addTaskButton = document.createElement('button');
addTaskButton.setAttribute('id', 'addTaskButton');
addTaskButton.innerText = '+';
mainContent.appendChild(addTaskButton)
addTaskButton.addEventListener('click', _form__WEBPACK_IMPORTED_MODULE_0__.toggleForm);

//Store the entire Main content inside of the fragment
fragmnt.appendChild(mainContent);

//Function to be used in index.js to initialize the side panel
function initMainContent() {
    return document.body.appendChild(fragmnt);
}

function setContentTitle(current_project) {
    return contentTitle.innerText = current_project;
}

/***/ }),

/***/ "./src/components/side-panel.js":
/*!**************************************!*\
  !*** ./src/components/side-panel.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PROJECTS": () => (/* binding */ PROJECTS),
/* harmony export */   "active_project": () => (/* binding */ active_project),
/* harmony export */   "getActiveProject": () => (/* binding */ getActiveProject),
/* harmony export */   "initSidePanel": () => (/* binding */ initSidePanel),
/* harmony export */   "renderTodos": () => (/* binding */ renderTodos)
/* harmony export */ });
/* harmony import */ var _utils_dom_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom_utils */ "./src/utils/dom_utils.js");
/* harmony import */ var _main_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-content */ "./src/components/main-content.js");
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoList */ "./src/components/todoList.js");
/* harmony import */ var _todo_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-card */ "./src/components/todo-card.js");






//Doc fragment for creating the DOM tree
let fragmnt = document.createDocumentFragment();

const PROJECTS = [];
let active_project = '';

//Items for different menu options.
const optionAllTasks = document.createElement('li');
optionAllTasks.innerText = 'All tasks';
optionAllTasks.setAttribute('id', 'projectLi');

const optionUrgentTasks = document.createElement('li');
optionUrgentTasks.innerText = 'Urgent tasks';
optionUrgentTasks.setAttribute('id', 'projectLi');

const addProjectBtn = document.createElement('li');
addProjectBtn.setAttribute('id', 'addProjectButton');
addProjectBtn.innerText = 'Add Project';

const inputField = document.createElement('input');
inputField.setAttribute('id', 'submit_on_enter');
inputField.classList.add('hidden');
inputField.setAttribute('type', 'text');
inputField.setAttribute('name', 'q');
inputField.setAttribute('placeholder', 'Enter project name');


optionAllTasks.addEventListener('click', (e) => {
    setActiveProject(e.target.innerText);
    (0,_main_content__WEBPACK_IMPORTED_MODULE_1__.setContentTitle)(active_project);
    renderTodos();
});
optionUrgentTasks.addEventListener('click', (e) => {
    setActiveProject(e.target.innerText);
    (0,_main_content__WEBPACK_IMPORTED_MODULE_1__.setContentTitle)(active_project);
    renderTodos();
});


//Creating the main Side panel div
const sidePanel = document.createElement('div');
sidePanel.classList.add('side-panel');

//Creating the top list which contains the Side panels
//diffrent menu options
const topList = document.createElement('ul');
topList.append(optionAllTasks, optionUrgentTasks, addProjectBtn, inputField);

const projectList = (0,_utils_dom_utils__WEBPACK_IMPORTED_MODULE_0__.createUl)(PROJECTS);
// topList.innerHTML += '<li id="addProjectButton">Add project</li>';
// topList.innerHTML += '<li><input id="submit_on_enter" class="hidden" type="text" name="q" placeholder="Enter project name"></li>';
projectList.innerHTML += '<li><h3>Projects</h3></li>';
sidePanel.append(topList, projectList);

//Add eventlistner to add project button to create an input field when clicked on.
// const inputField = sidePanel.querySelector('#submit_on_enter');
addProjectBtn.addEventListener('click', () => {
    inputField.classList.remove('hidden');
});

//Listen to the enter key pressed when adding a new project and create the new project.
inputField.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        addToProjectArray(inputField.value);
        inputField.classList.add('hidden');
        appendProjectToDom();
        resetProjectInput();
        sidePanel.lastChild.lastChild.addEventListener('click', (e) => {
            setActiveProject(e.target.innerText);
            (0,_main_content__WEBPACK_IMPORTED_MODULE_1__.setContentTitle)(active_project);
            renderTodos();
        });
        sidePanel.lastChild.lastChild.setAttribute('id', 'projectLi');
    };
});
//Store the entire Side panel inside of the fragment
fragmnt.appendChild(sidePanel);


function setActiveProject(target) {
    return active_project = target;
}

function getActiveProject() {
    return active_project;
}

function addToProjectArray(name) {
    PROJECTS.push(name);
};

function appendProjectToDom() {
    const el = document.createElement('li');
    el.innerText = `${PROJECTS[PROJECTS.length - 1]}`
    return sidePanel.lastChild.appendChild(el);
}

function resetProjectInput() {
    inputField.value = "";
};

function renderTodos() {
    (0,_todo_card__WEBPACK_IMPORTED_MODULE_3__.clearTodoDomItems)();
    const fragmnt = document.createDocumentFragment();
    const list = (0,_todoList__WEBPACK_IMPORTED_MODULE_2__.getTodoList)();
    const active_project = getActiveProject();
    let todo = list;
    if (todo.length <= 0) { return };
    if (active_project == 'All tasks') {
        todo = list.map(todo => todo);
    } else if (active_project == 'Urgent tasks') {
        todo = list.filter(todo => todo.urgency == 'High');
    }
    else {
        todo = list.filter(todo => todo.project == active_project);
    }
    todo.forEach(t => {
        const el = (0,_todo_card__WEBPACK_IMPORTED_MODULE_3__.createTodoDomItem)(t.title, t.description, t.due_date, t.urgency);
        el.setAttribute('data-id', t.id);
        if (t.completed) { el.style.backgroundColor = "#C3FFAE" };
        fragmnt.appendChild(el);
    });

    return document.querySelector('.main-content').appendChild(fragmnt);
    //el.style.backgroundColor = "#C3FFAE";
}



//Function to be used in index.js to initialize the side panel
function initSidePanel() {
    return document.body.appendChild(fragmnt);
}

/***/ }),

/***/ "./src/components/todo-card.js":
/*!*************************************!*\
  !*** ./src/components/todo-card.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearTodoDomItems": () => (/* binding */ clearTodoDomItems),
/* harmony export */   "createTodoDomItem": () => (/* binding */ createTodoDomItem)
/* harmony export */ });
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ "./src/components/todoList.js");
/* harmony import */ var _side_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-panel */ "./src/components/side-panel.js");


function createTodoDomItem(title, description, due_date, urgency, project) {
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
    const deleteBtn = document.createElement('p');
    deleteBtn.innerHTML = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
    </svg>`;
    const completedBtn = document.createElement('p');
    completedBtn.innerHTML = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19.78,2.2L24,6.42L8.44,22L0,13.55L4.22,9.33L8.44,13.55L19.78,2.2M19.78,5L8.44,16.36L4.22,12.19L2.81,13.55L8.44,19.17L21.19,6.42L19.78,5Z" />
    </svg>`
    completedBtn.addEventListener('click', (e) => {
        setTaskAsComplete(e);
    });
    deleteBtn.addEventListener('click', e => {
        deleteTask(e);
    })

    item.append(itemTitle, itemDescription, itemDueDate, itemUrgency, completedBtn, deleteBtn);

    return item;
}

function setTaskAsComplete(e) {
    const el = e.target.closest('div');
    (0,_todoList__WEBPACK_IMPORTED_MODULE_0__.setTodoComplete)(el.dataset.id);
    (0,_side_panel__WEBPACK_IMPORTED_MODULE_1__.renderTodos)();

}

function deleteTask(e) {
    const el = e.target.closest('div');
    (0,_todoList__WEBPACK_IMPORTED_MODULE_0__.removeTodoFromList)(el.dataset.id);
    (0,_side_panel__WEBPACK_IMPORTED_MODULE_1__.renderTodos)();
};

function clearTodoDomItems() {
    const items = document.querySelectorAll('.todo-item');
    items.forEach(item => {
        item.remove();
    });
}

/***/ }),

/***/ "./src/components/todo.js":
/*!********************************!*\
  !*** ./src/components/todo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodo": () => (/* binding */ createTodo)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");




class Todo {
    constructor(title, description, due_date, urgency, project) {
        this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
        this.title = title;
        this.description = description;
        this.due_date = due_date;
        this.urgency = urgency;
        this.project = project;
        this.completed = false;
    }

}

function createTodo(title, description, due_date, urgency, project) {
    return new Todo(title, description, due_date, urgency, project);
}

/***/ }),

/***/ "./src/components/todoList.js":
/*!************************************!*\
  !*** ./src/components/todoList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendTodoToList": () => (/* binding */ appendTodoToList),
/* harmony export */   "getTodoList": () => (/* binding */ getTodoList),
/* harmony export */   "removeTodoFromList": () => (/* binding */ removeTodoFromList),
/* harmony export */   "setTodoComplete": () => (/* binding */ setTodoComplete)
/* harmony export */ });
let todoList = [];

function appendTodoToList(todo) {
    return todoList.push(todo);
};

function getTodoList() {
    return todoList;
};

function removeTodoFromList(target_id) {
    const todoToDelete = todoList.findIndex(todo => todo.id == target_id);
    todoList.splice(todoToDelete, 1);
};

function setTodoComplete(target_id) {
    const index = todoList.findIndex(todo => todo.id == target_id);
    todoList[index].completed = true;
    console.log(todoList);
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_side_panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/side-panel */ "./src/components/side-panel.js");
/* harmony import */ var _components_main_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main-content */ "./src/components/main-content.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header */ "./src/components/header.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






//Create and add main elements to webpage
(0,_components_header__WEBPACK_IMPORTED_MODULE_2__.initHeader)();
(0,_components_main_content__WEBPACK_IMPORTED_MODULE_1__.initMainContent)();
(0,_components_side_panel__WEBPACK_IMPORTED_MODULE_0__.initSidePanel)();

//### SET CONTENT TITLE AFTER ACTIVE PROJECT ###






/***/ }),

/***/ "./src/utils/dom_utils.js":
/*!********************************!*\
  !*** ./src/utils/dom_utils.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUl": () => (/* binding */ createUl)
/* harmony export */ });
//Function to aid in creating UL's, takes an array of items.
function createUl(items) {
    let ul = document.createElement('ul');
    for (let i = 0; i < items.length; i++) {
        ul.innerHTML += `<li>${items[i]}</li>`;
    }
    return ul;
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGNBQWMsT0FBTyxLQUFLLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxjQUFjLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFP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QUErQixTQUFTO0FBQ3hDO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9tYWluLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9zaWRlLXBhbmVsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvdG9kby1jYXJkLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3V0aWxzL2RvbV91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1oZWFkZXItYmctY29sb3I6IHJnYigxOTcsIDg0LCA2Nyk7XFxuICAgIC0taGVhZGVyLXRpdGxlLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIC0tc2lkZS1wYW5lbC1iZy1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xcbiAgICAtLW1haW4tY29udGVudC1iZy1jb2xvcjogcmdiKDI1NCwgMjU0LCAyNTQpO1xcbiAgICAtLXNpZGUtcGFuZWwtaXRlbXMtY29sb3I6IHJnYigxMTAsIDExMCwgMTEwKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcblxcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogLjA3ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC4zZnIgMWZyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLXRpdGxlLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmctY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5oZWFkZXI+aDEge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLnNpZGUtcGFuZWwge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1iZy1jb2xvcik7XFxufVxcblxcbi5zaWRlLXBhbmVsPnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtaXRlbXMtY29sb3IpO1xcbn1cXG5cXG5cXG4jYWRkUHJvamVjdEJ1dHRvbiB7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcXG59XFxuXFxuI2FkZFByb2plY3RCdXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGNvbG9yOiByZ2IoNDksIDQ5LCA0OSk7XFxuXFxufVxcblxcbiNhZGRQcm9qZWN0QnV0dG9uOmFjdGl2ZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIGNvbG9yOiByZ2IoMTc5LCAxNzksIDE3OSk7XFxuXFxufVxcblxcbiNwcm9qZWN0TGkge1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XFxufVxcblxcbiNwcm9qZWN0TGk6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGNvbG9yOiByZ2IoNDksIDQ5LCA0OSk7XFxuXFxufVxcblxcbiNwcm9qZWN0TGk6YWN0aXZlIHtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgY29sb3I6IHJnYigxNzksIDE3OSwgMTc5KTtcXG5cXG59XFxuXFxuXFxuXFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbnRlbnQtYmctY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgMTAwcHgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG59XFxuXFxuLm1haW4tY29udGVudD5oMiB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XFxufVxcblxcbiNhZGRUYXNrQnV0dG9uIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtYmctY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1pdGVtcy1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjE2LCAyMTYsIDIxNik7XFxufVxcblxcbiNhZGRUYXNrQnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEyMSwgMTIxLCAxMjEpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ5LCAxNDksIDE0OSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuXFxuI2FkZFRhc2tCdXR0b246YWN0aXZlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNiwgMjE2LCAyMTYpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtaXRlbXMtY29sb3IpO1xcblxcbn1cXG5cXG4udG9kby1pdGVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1iZy1jb2xvcik7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggOXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA5cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiAzcHggM3B4IDlweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1pdGVtcy1jb2xvcik7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xcbn1cXG5cXG4udG9kby1pdGVtOmhvdmVyIHtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4udG9kby1pdGVtPmgzIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnRvZG8taXRlbT5wOm50aC1jaGlsZCgyKSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyA0O1xcblxcbn1cXG5cXG4udG9kby1pdGVtPnA6bnRoLWNoaWxkKDMpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG5cXG59XFxuXFxuLnRvZG8taXRlbT5wOm50aC1jaGlsZCg0KSB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuXFxufVxcblxcbi50b2RvLWl0ZW0+cDpudGgtY2hpbGQoNSkge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XFxufVxcblxcbi50b2RvLWl0ZW0+cDpudGgtY2hpbGQoNSk6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGNvbG9yOiByZ2IoNDksIDQ5LCA0OSk7XFxuXFxufVxcblxcbi50b2RvLWl0ZW0+cDpudGgtY2hpbGQoNSk6YWN0aXZlIHtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgY29sb3I6IHJnYigxNzksIDE3OSwgMTc5KTtcXG5cXG59XFxuXFxuLnRvZG8taXRlbT5wOm50aC1jaGlsZCg2KSB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBtYXJnaW4tbGVmdDogOTAlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcXG5cXG59XFxuXFxuLnRvZG8taXRlbT5wOm50aC1jaGlsZCg2KTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgY29sb3I6IHJnYig0OSwgNDksIDQ5KTtcXG5cXG59XFxuXFxuLnRvZG8taXRlbT5wOm50aC1jaGlsZCg2KTphY3RpdmUge1xcbiAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICBjb2xvcjogcmdiKDE3OSwgMTc5LCAxNzkpO1xcblxcbn1cXG5cXG4udG9kby1pdGVtPnA+c3ZnIHtcXG4gICAgZmlsbDogZ3JlZW47XFxufVxcblxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIC0tZm9ybS1oZWlnaHQ6IDMwMHB4O1xcbiAgICAtLWZvcm0td2lkdGg6IDYyNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtYmctY29sb3IpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWZvcm0taGVpZ2h0KTtcXG4gICAgd2lkdGg6IHZhcigtLWZvcm0td2lkdGgpO1xcbiAgICB0b3A6IDIwMHB4O1xcbiAgICByaWdodDogY2FsYygxMDB2dy8yIC0gY2FsYyh2YXIoLS1mb3JtLXdpZHRoKS8yKSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBib3gtc2hhZG93OiA4cHggN3B4IDE0cHggMHB4IHJnYmEoMTMzLCAxMzMsIDEzMywgMC43NSk7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogOHB4IDdweCAxNHB4IDBweCByZ2JhKDEzMywgMTMzLCAxMzMsIDAuNzUpO1xcbiAgICAtbW96LWJveC1zaGFkb3c6IDhweCA3cHggMTRweCAwcHggcmdiYSgxMzMsIDEzMywgMTMzLCAwLjc1KTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogLjVmciAxZnIgMWZyO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuZm9ybT5oMiB7XFxuICAgIG1hcmdpbjogMXJlbSAxcmVtO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtaXRlbXMtY29sb3IpXFxufVxcblxcbmZvcm0+aW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbmZvcm0+aW5wdXRbdHlwZT10ZXh0XTpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC44KTtcXG59XFxuXFxuXFxuZm9ybT50ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIG1hcmdpbjogMCAwIDFyZW0gMXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAxcmVtIDAgMCAxcmVtO1xcbn1cXG5cXG5mb3JtPnRleHRhcmVhOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjgpO1xcbn1cXG5cXG5mb3JtPmxhYmVsIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIG1hcmdpbjogMS41cmVtIDAgMCAzLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWl0ZW1zLWNvbG9yKVxcbn1cXG5cXG5mb3JtPmlucHV0W3R5cGU9ZGF0ZV0ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgbWFyZ2luOiAxcmVtIDAgMCA4cmVtO1xcbn1cXG5cXG5mb3JtPmlucHV0W3R5cGU9ZGF0ZV06aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOCk7XFxufVxcblxcbmZvcm0+aW5wdXRbbmFtZT11cmdlbmN5XSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBtYXJnaW46IDByZW0gMCAwIDhyZW07XFxufVxcblxcbmZvcm0+aW5wdXRbbmFtZT11cmdlbmN5XTpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC44KTtcXG59XFxuXFxuZm9ybT5pbnB1dFtuYW1lPXBhcmVudFByb2plY3RdIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBtYXJnaW46IDNyZW0gMCAwIDhyZW07XFxufVxcblxcbmZvcm0+aW5wdXRbbmFtZT1wYXJlbnRQcm9qZWN0XTpob3ZlciB7XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC44KTtcXG59XFxuXFxuI3N1Ym1pdC1idXR0b24ge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIG1hcmdpbjogM3JlbSAwIDAgOHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxufVxcblxcbiNzdWJtaXQtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCAxODAsIDkzKTtcXG5cXG59XFxuXFxuZm9ybT5pbnB1dFt0eXBlPWJ1dHRvbl0ge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIG1hcmdpbjogNnJlbSAwIDAgOHJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuXFxufVxcblxcbmZvcm0+aW5wdXRbdHlwZT1idXR0b25dOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MCwgNDgsIDQ4KTtcXG5cXG59XFxuXFxuI3N1Ym1pdF9vbl9lbnRlciB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW46IC41cmVtIDAgMCAwO1xcbiAgICBwYWRkaW5nOiAwIDAgMCAxcmVtO1xcbn1cXG5cXG4uc2lkZS1wYW5lbD51bDpudGgtY2hpbGQoMSkge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBoZWlnaHQ6IDI1JTtcXG59XFxuXFxuLnNpZGUtcGFuZWw+dWw+bGkge1xcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsd0NBQXdDO0lBQ3hDLHlDQUF5QztJQUN6QywyQ0FBMkM7SUFDM0MsNENBQTRDO0lBQzVDLGlDQUFpQzs7QUFFckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osd0NBQXdDO0lBQ3hDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0NBQW9DO0FBQ3hDOzs7QUFHQTtJQUNJLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsZUFBZTtJQUNmLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsZUFBZTtJQUNmLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCOztBQUU3Qjs7Ozs7QUFLQTtJQUNJLGVBQWU7SUFD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Q0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsd0NBQXdDO0lBQ3hDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0NBQWtDOztBQUV0Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsNEJBQTRCOztBQUVoQzs7QUFFQTtJQUNJLGtDQUFrQzs7QUFFdEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0taGVhZGVyLWJnLWNvbG9yOiByZ2IoMTk3LCA4NCwgNjcpO1xcbiAgICAtLWhlYWRlci10aXRsZS1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICAtLXNpZGUtcGFuZWwtYmctY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKTtcXG4gICAgLS1tYWluLWNvbnRlbnQtYmctY29sb3I6IHJnYigyNTQsIDI1NCwgMjU0KTtcXG4gICAgLS1zaWRlLXBhbmVsLWl0ZW1zLWNvbG9yOiByZ2IoMTEwLCAxMTAsIDExMCk7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IC4wN2ZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuM2ZyIDFmcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlci10aXRsZS1jb2xvcik7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uaGVhZGVyPmgxIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5zaWRlLXBhbmVsIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtYmctY29sb3IpO1xcbn1cXG5cXG4uc2lkZS1wYW5lbD51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWl0ZW1zLWNvbG9yKTtcXG59XFxuXFxuXFxuI2FkZFByb2plY3RCdXR0b24ge1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XFxufVxcblxcbiNhZGRQcm9qZWN0QnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBjb2xvcjogcmdiKDQ5LCA0OSwgNDkpO1xcblxcbn1cXG5cXG4jYWRkUHJvamVjdEJ1dHRvbjphY3RpdmUge1xcbiAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICBjb2xvcjogcmdiKDE3OSwgMTc5LCAxNzkpO1xcblxcbn1cXG5cXG4jcHJvamVjdExpIHtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xcbn1cXG5cXG4jcHJvamVjdExpOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBjb2xvcjogcmdiKDQ5LCA0OSwgNDkpO1xcblxcbn1cXG5cXG4jcHJvamVjdExpOmFjdGl2ZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIGNvbG9yOiByZ2IoMTc5LCAxNzksIDE3OSk7XFxuXFxufVxcblxcblxcblxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb250ZW50LWJnLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIDEwMHB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxufVxcblxcbi5tYWluLWNvbnRlbnQ+aDIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xcbn1cXG5cXG4jYWRkVGFza0J1dHRvbiB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtaXRlbXMtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNiwgMjE2LCAyMTYpO1xcbn1cXG5cXG4jYWRkVGFza0J1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjEsIDEyMSwgMTIxKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OSwgMTQ5LCAxNDkpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxufVxcblxcbiNhZGRUYXNrQnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTYsIDIxNiwgMjE2KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWl0ZW1zLWNvbG9yKTtcXG5cXG59XFxuXFxuLnRvZG8taXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtYmctY29sb3IpO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDlweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggOXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIC1tb3otYm94LXNoYWRvdzogM3B4IDNweCA5cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gICAgY29sb3I6IHZhcigtLXNpZGUtcGFuZWwtaXRlbXMtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcXG59XFxuXFxuLnRvZG8taXRlbTpob3ZlciB7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLnRvZG8taXRlbT5oMyB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi50b2RvLWl0ZW0+cDpudGgtY2hpbGQoMikge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gNDtcXG5cXG59XFxuXFxuLnRvZG8taXRlbT5wOm50aC1jaGlsZCgzKSB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuXFxufVxcblxcbi50b2RvLWl0ZW0+cDpudGgtY2hpbGQoNCkge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcblxcbn1cXG5cXG4udG9kby1pdGVtPnA6bnRoLWNoaWxkKDUpIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xcbn1cXG5cXG4udG9kby1pdGVtPnA6bnRoLWNoaWxkKDUpOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBjb2xvcjogcmdiKDQ5LCA0OSwgNDkpO1xcblxcbn1cXG5cXG4udG9kby1pdGVtPnA6bnRoLWNoaWxkKDUpOmFjdGl2ZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIGNvbG9yOiByZ2IoMTc5LCAxNzksIDE3OSk7XFxuXFxufVxcblxcbi50b2RvLWl0ZW0+cDpudGgtY2hpbGQoNikge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgbWFyZ2luLWxlZnQ6IDkwJTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XFxuXFxufVxcblxcbi50b2RvLWl0ZW0+cDpudGgtY2hpbGQoNik6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGNvbG9yOiByZ2IoNDksIDQ5LCA0OSk7XFxuXFxufVxcblxcbi50b2RvLWl0ZW0+cDpudGgtY2hpbGQoNik6YWN0aXZlIHtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgY29sb3I6IHJnYigxNzksIDE3OSwgMTc5KTtcXG5cXG59XFxuXFxuLnRvZG8taXRlbT5wPnN2ZyB7XFxuICAgIGZpbGw6IGdyZWVuO1xcbn1cXG5cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICAtLWZvcm0taGVpZ2h0OiAzMDBweDtcXG4gICAgLS1mb3JtLXdpZHRoOiA2MjVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWJnLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1mb3JtLWhlaWdodCk7XFxuICAgIHdpZHRoOiB2YXIoLS1mb3JtLXdpZHRoKTtcXG4gICAgdG9wOiAyMDBweDtcXG4gICAgcmlnaHQ6IGNhbGMoMTAwdncvMiAtIGNhbGModmFyKC0tZm9ybS13aWR0aCkvMikpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogOHB4IDdweCAxNHB4IDBweCByZ2JhKDEzMywgMTMzLCAxMzMsIDAuNzUpO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDhweCA3cHggMTRweCAwcHggcmdiYSgxMzMsIDEzMywgMTMzLCAwLjc1KTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiA4cHggN3B4IDE0cHggMHB4IHJnYmEoMTMzLCAxMzMsIDEzMywgMC43NSk7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IC41ZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxufVxcblxcbmZvcm0+aDIge1xcbiAgICBtYXJnaW46IDFyZW0gMXJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXBhbmVsLWl0ZW1zLWNvbG9yKVxcbn1cXG5cXG5mb3JtPmlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG5mb3JtPmlucHV0W3R5cGU9dGV4dF06aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOCk7XFxufVxcblxcblxcbmZvcm0+dGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBtYXJnaW46IDAgMCAxcmVtIDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMXJlbSAwIDAgMXJlbTtcXG59XFxuXFxuZm9ybT50ZXh0YXJlYTpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC44KTtcXG59XFxuXFxuZm9ybT5sYWJlbCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBtYXJnaW46IDEuNXJlbSAwIDAgMy41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1wYW5lbC1pdGVtcy1jb2xvcilcXG59XFxuXFxuZm9ybT5pbnB1dFt0eXBlPWRhdGVdIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIG1hcmdpbjogMXJlbSAwIDAgOHJlbTtcXG59XFxuXFxuZm9ybT5pbnB1dFt0eXBlPWRhdGVdOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjgpO1xcbn1cXG5cXG5mb3JtPmlucHV0W25hbWU9dXJnZW5jeV0ge1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgbWFyZ2luOiAwcmVtIDAgMCA4cmVtO1xcbn1cXG5cXG5mb3JtPmlucHV0W25hbWU9dXJnZW5jeV06aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOCk7XFxufVxcblxcbmZvcm0+aW5wdXRbbmFtZT1wYXJlbnRQcm9qZWN0XSB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgbWFyZ2luOiAzcmVtIDAgMCA4cmVtO1xcbn1cXG5cXG5mb3JtPmlucHV0W25hbWU9cGFyZW50UHJvamVjdF06aG92ZXIge1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOCk7XFxufVxcblxcbiNzdWJtaXQtYnV0dG9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBtYXJnaW46IDNyZW0gMCAwIDhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbn1cXG5cXG4jc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OSwgMTgwLCA5Myk7XFxuXFxufVxcblxcbmZvcm0+aW5wdXRbdHlwZT1idXR0b25dIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBtYXJnaW46IDZyZW0gMCAwIDhyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcblxcbn1cXG5cXG5mb3JtPmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDQ4LCA0OCk7XFxuXFxufVxcblxcbiNzdWJtaXRfb25fZW50ZXIge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luOiAuNXJlbSAwIDAgMDtcXG4gICAgcGFkZGluZzogMCAwIDAgMXJlbTtcXG59XFxuXFxuLnNpZGUtcGFuZWw+dWw6bnRoLWNoaWxkKDEpIHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgaGVpZ2h0OiAyNSU7XFxufVxcblxcbi5zaWRlLXBhbmVsPnVsPmxpIHtcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxudmFyIGdldFJhbmRvbVZhbHVlcztcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLiBBbHNvLFxuICAgIC8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxudmFyIGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSkpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyKSB7XG4gIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICB2YXIgdXVpZCA9IChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gc3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgZ2V0QWN0aXZlUHJvamVjdCwgcmVuZGVyVG9kb3MgfSBmcm9tIFwiLi9zaWRlLXBhbmVsXCI7XG5pbXBvcnQgeyBhcHBlbmRUb2RvVG9MaXN0IH0gZnJvbSBcIi4vdG9kb0xpc3RcIjtcblxuXG4vL0Zvcm0gY29udGFpbmVyXG5jb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5mb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XG5cbi8vRm9ybSBlbGVtZW50XG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9Gb3JtJyk7XG5cbi8vRm9ybSB0aXRsZVxuY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbmZvcm1UaXRsZS5pbm5lclRleHQgPSAnQ3JlYXRlIHRhc2snO1xuXG4vL1RpdGxlIHRleHQgaW5wdXRcbmNvbnN0IHRpdGxlVGV4dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnRpdGxlVGV4dElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZVRleHQnKTtcbnRpdGxlVGV4dElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG50aXRsZVRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlOiBFeGFtcGxlIFRpdGVsJyk7XG5cbi8vRGVzY3JpcHRpb24gdGV4dCBpbnB1dFxuY29uc3QgZGVzY3JpcHRpb25UZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5kZXNjcmlwdGlvblRleHRBcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0ZXh0QXJlYScpO1xuZGVzY3JpcHRpb25UZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnNCcpO1xuZGVzY3JpcHRpb25UZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2NvbHVtbnMnLCAnMjAnKTtcbmRlc2NyaXB0aW9uVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbicpO1xuXG4vL0R1ZSBkYXRlIGlucHV0XG5jb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkdWVEYXRlJyk7XG5kdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcblxuLy9EdWUgZGF0ZSBsYWJlbFxuY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZHVlRGF0ZScpO1xuZHVlRGF0ZUxhYmVsLmlubmVyVGV4dCA9ICdEdWUgZGF0ZSdcblxuXG4vL1VyZ2VuY3kgbGlzdFxuY29uc3QgdXJnZW5jeUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xudXJnZW5jeUxpc3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ3VyZ2VuY3knKVxudXJnZW5jeUxpc3Quc2V0QXR0cmlidXRlKCdsaXN0JywgJ3VyZ2VuY3knKTtcbnVyZ2VuY3lMaXN0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2V0IHVyZ2VuY3knKTtcbmNvbnN0IHVyZ2VuY3lEYXRhbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RhdGFsaXN0Jyk7XG51cmdlbmN5RGF0YWxpc3Quc2V0QXR0cmlidXRlKCdpZCcsICd1cmdlbmN5Jyk7XG5jb25zdCB1cmdlbmN5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xudXJnZW5jeUhpZ2guc2V0QXR0cmlidXRlKCd2YWx1ZScsICdIaWdoJyk7XG5jb25zdCB1cmdlbmN5Tm9ybWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG51cmdlbmN5Tm9ybWFsLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTm9ybWFsJyk7XG5jb25zdCB1cmdlbmN5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG51cmdlbmN5TG93LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTG93Jyk7XG5cbi8vU3VibWl0IGJ1dHRvblxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5zdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQtYnV0dG9uJyk7XG5zdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdBZGQgdGFzaycpO1xuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSBnZXRGb3JtVmFsdWVzKCk7XG4gICAgbGV0IHQgPSBjcmVhdGVUb2RvKGZvcm1WYWx1ZXMudGl0bGVUZXh0LFxuICAgICAgICBmb3JtVmFsdWVzLnRleHRBcmVhLFxuICAgICAgICBmb3JtVmFsdWVzLmR1ZURhdGUsXG4gICAgICAgIGZvcm1WYWx1ZXMudXJnZW5jeSxcbiAgICAgICAgZ2V0QWN0aXZlUHJvamVjdCgpKTtcbiAgICBhcHBlbmRUb2RvVG9MaXN0KHQpO1xuICAgIHRvZ2dsZUZvcm0oKTtcbiAgICByZW5kZXJUb2RvcygpO1xuXG59KVxuXG4vL0Rpc2NhcmQgYnV0dG9uXG5jb25zdCBkaXNjYXJkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmRpc2NhcmRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuZGlzY2FyZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0Rpc2NhcmQgdGFzaycpO1xuZGlzY2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUZvcm0pO1xuXG4vL0NyZWF0ZSBET00gdHJlZVxuZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbmZvcm0uYXBwZW5kKGZvcm1UaXRsZSxcbiAgICB0aXRsZVRleHRJbnB1dCxcbiAgICBkZXNjcmlwdGlvblRleHRBcmVhLFxuICAgIGR1ZURhdGVMYWJlbCxcbiAgICBkdWVEYXRlSW5wdXQsXG4gICAgdXJnZW5jeUxpc3QsXG4gICAgdXJnZW5jeURhdGFsaXN0LFxuICAgIHN1Ym1pdEJ1dHRvbixcbiAgICBkaXNjYXJkQnV0dG9uKTtcbnVyZ2VuY3lEYXRhbGlzdC5hcHBlbmQodXJnZW5jeUhpZ2gsIHVyZ2VuY3lOb3JtYWwsIHVyZ2VuY3lMb3cpO1xuXG4vL1VzZWQgdG8gY2xlYXIgZm9ybSB3aGVuIHRvZ2dlbGluZyBpdFxuZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xuICAgIGZvcm0ucmVzZXQoKTtcbn1cblxuLy9HZXQgdGhlIHZhbHVlcyBlbnRlcmVkIHRvIHRoZSBmb3JtXG5mdW5jdGlvbiBnZXRGb3JtVmFsdWVzKCkge1xuICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb0Zvcm1cIikuZWxlbWVudHM7XG4gICAgbGV0IG9iaiA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBlbGVtZW50cy5pdGVtKGkpO1xuICAgICAgICBvYmpbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUZvcm0oKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpID09PSBudWxsKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKVxuICAgICAgICBjbGVhckZvcm0oKTtcbiAgICB9XG5cbn1cbiIsIi8vRG9jIGZyYWdtZW50IGZvciBjcmVhdGluZyB0aGUgRE9NIHRyZWVcbmxldCBmcmFnbW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4vL0NyZWF0ZSBtYWluIHBhZ2UgZWxlbWVudHNcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuaGVhZGVyVGl0bGUuaW5uZXJUZXh0ID0gJ1RPRE8gT3JnaW5hemVyJ1xuaGVhZGVyVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcblxuaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcblxuZnJhZ21udC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEhlYWRlcigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmcmFnbW50KTtcbn0iLCJpbXBvcnQgeyB0b2dnbGVGb3JtIH0gZnJvbSBcIi4vZm9ybVwiO1xuaW1wb3J0IHsgY3JlYXRlVG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IGFwcGVuZFRvZG9Ub0xpc3QgfSBmcm9tIFwiLi90b2RvTGlzdFwiXG5pbXBvcnQgeyBnZXRBY3RpdmVQcm9qZWN0IH0gZnJvbSBcIi4vc2lkZS1wYW5lbFwiO1xuXG4vL0RvYyBmcmFnbWVudCBmb3IgY3JlYXRpbmcgdGhlIERPTSB0cmVlXG5sZXQgZnJhZ21udCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuLy9DcmVhdGluZyB0aGUgbWFpbiBTaWRlIHBhbmVsIGRpdlxuY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xuXG4vL0NyZWF0aW5nIGFuZCBhZGRpbmcgdG9wIFRleHRcbmNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5jb250ZW50VGl0bGUuaW5uZXJUZXh0ID0gJ1dlbGNvbWUgdG8gVE9ETyBPcmdhbml6ZXInXG5tYWluQ29udGVudC5hcHBlbmRDaGlsZChjb250ZW50VGl0bGUpO1xuXG4vL0FkZCB0YXNrIGJ1dHRvblxuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuYWRkVGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRhc2tCdXR0b24nKTtcbmFkZFRhc2tCdXR0b24uaW5uZXJUZXh0ID0gJysnO1xubWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbilcbmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVGb3JtKTtcblxuLy9TdG9yZSB0aGUgZW50aXJlIE1haW4gY29udGVudCBpbnNpZGUgb2YgdGhlIGZyYWdtZW50XG5mcmFnbW50LmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcblxuLy9GdW5jdGlvbiB0byBiZSB1c2VkIGluIGluZGV4LmpzIHRvIGluaXRpYWxpemUgdGhlIHNpZGUgcGFuZWxcbmV4cG9ydCBmdW5jdGlvbiBpbml0TWFpbkNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZnJhZ21udCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb250ZW50VGl0bGUoY3VycmVudF9wcm9qZWN0KSB7XG4gICAgcmV0dXJuIGNvbnRlbnRUaXRsZS5pbm5lclRleHQgPSBjdXJyZW50X3Byb2plY3Q7XG59IiwiaW1wb3J0IHsgY3JlYXRlVWwgfSBmcm9tICcuLi91dGlscy9kb21fdXRpbHMnXG5pbXBvcnQgeyBzZXRDb250ZW50VGl0bGUgfSBmcm9tICcuL21haW4tY29udGVudCc7XG5pbXBvcnQgeyBnZXRUb2RvTGlzdCB9IGZyb20gJy4vdG9kb0xpc3QnXG5pbXBvcnQgeyBjbGVhclRvZG9Eb21JdGVtcywgY3JlYXRlVG9kb0RvbUl0ZW0gfSBmcm9tICcuL3RvZG8tY2FyZCc7XG5cblxuLy9Eb2MgZnJhZ21lbnQgZm9yIGNyZWF0aW5nIHRoZSBET00gdHJlZVxubGV0IGZyYWdtbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbmV4cG9ydCBjb25zdCBQUk9KRUNUUyA9IFtdO1xuZXhwb3J0IGxldCBhY3RpdmVfcHJvamVjdCA9ICcnO1xuXG4vL0l0ZW1zIGZvciBkaWZmZXJlbnQgbWVudSBvcHRpb25zLlxuY29uc3Qgb3B0aW9uQWxsVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xub3B0aW9uQWxsVGFza3MuaW5uZXJUZXh0ID0gJ0FsbCB0YXNrcyc7XG5vcHRpb25BbGxUYXNrcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RMaScpO1xuXG5jb25zdCBvcHRpb25VcmdlbnRUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5vcHRpb25VcmdlbnRUYXNrcy5pbm5lclRleHQgPSAnVXJnZW50IHRhc2tzJztcbm9wdGlvblVyZ2VudFRhc2tzLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdExpJyk7XG5cbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuYWRkUHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFByb2plY3RCdXR0b24nKTtcbmFkZFByb2plY3RCdG4uaW5uZXJUZXh0ID0gJ0FkZCBQcm9qZWN0JztcblxuY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5pbnB1dEZpZWxkLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0X29uX2VudGVyJyk7XG5pbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuaW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuaW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncScpO1xuaW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIHByb2plY3QgbmFtZScpO1xuXG5cbm9wdGlvbkFsbFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBzZXRBY3RpdmVQcm9qZWN0KGUudGFyZ2V0LmlubmVyVGV4dCk7XG4gICAgc2V0Q29udGVudFRpdGxlKGFjdGl2ZV9wcm9qZWN0KTtcbiAgICByZW5kZXJUb2RvcygpO1xufSk7XG5vcHRpb25VcmdlbnRUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgc2V0QWN0aXZlUHJvamVjdChlLnRhcmdldC5pbm5lclRleHQpO1xuICAgIHNldENvbnRlbnRUaXRsZShhY3RpdmVfcHJvamVjdCk7XG4gICAgcmVuZGVyVG9kb3MoKTtcbn0pO1xuXG5cbi8vQ3JlYXRpbmcgdGhlIG1haW4gU2lkZSBwYW5lbCBkaXZcbmNvbnN0IHNpZGVQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2lkZVBhbmVsLmNsYXNzTGlzdC5hZGQoJ3NpZGUtcGFuZWwnKTtcblxuLy9DcmVhdGluZyB0aGUgdG9wIGxpc3Qgd2hpY2ggY29udGFpbnMgdGhlIFNpZGUgcGFuZWxzXG4vL2RpZmZyZW50IG1lbnUgb3B0aW9uc1xuY29uc3QgdG9wTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG50b3BMaXN0LmFwcGVuZChvcHRpb25BbGxUYXNrcywgb3B0aW9uVXJnZW50VGFza3MsIGFkZFByb2plY3RCdG4sIGlucHV0RmllbGQpO1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9IGNyZWF0ZVVsKFBST0pFQ1RTKTtcbi8vIHRvcExpc3QuaW5uZXJIVE1MICs9ICc8bGkgaWQ9XCJhZGRQcm9qZWN0QnV0dG9uXCI+QWRkIHByb2plY3Q8L2xpPic7XG4vLyB0b3BMaXN0LmlubmVySFRNTCArPSAnPGxpPjxpbnB1dCBpZD1cInN1Ym1pdF9vbl9lbnRlclwiIGNsYXNzPVwiaGlkZGVuXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcHJvamVjdCBuYW1lXCI+PC9saT4nO1xucHJvamVjdExpc3QuaW5uZXJIVE1MICs9ICc8bGk+PGgzPlByb2plY3RzPC9oMz48L2xpPic7XG5zaWRlUGFuZWwuYXBwZW5kKHRvcExpc3QsIHByb2plY3RMaXN0KTtcblxuLy9BZGQgZXZlbnRsaXN0bmVyIHRvIGFkZCBwcm9qZWN0IGJ1dHRvbiB0byBjcmVhdGUgYW4gaW5wdXQgZmllbGQgd2hlbiBjbGlja2VkIG9uLlxuLy8gY29uc3QgaW5wdXRGaWVsZCA9IHNpZGVQYW5lbC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0X29uX2VudGVyJyk7XG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlucHV0RmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59KTtcblxuLy9MaXN0ZW4gdG8gdGhlIGVudGVyIGtleSBwcmVzc2VkIHdoZW4gYWRkaW5nIGEgbmV3IHByb2plY3QgYW5kIGNyZWF0ZSB0aGUgbmV3IHByb2plY3QuXG5pbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XG4gICAgICAgIGFkZFRvUHJvamVjdEFycmF5KGlucHV0RmllbGQudmFsdWUpO1xuICAgICAgICBpbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBhcHBlbmRQcm9qZWN0VG9Eb20oKTtcbiAgICAgICAgcmVzZXRQcm9qZWN0SW5wdXQoKTtcbiAgICAgICAgc2lkZVBhbmVsLmxhc3RDaGlsZC5sYXN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgc2V0QWN0aXZlUHJvamVjdChlLnRhcmdldC5pbm5lclRleHQpO1xuICAgICAgICAgICAgc2V0Q29udGVudFRpdGxlKGFjdGl2ZV9wcm9qZWN0KTtcbiAgICAgICAgICAgIHJlbmRlclRvZG9zKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzaWRlUGFuZWwubGFzdENoaWxkLmxhc3RDaGlsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RMaScpO1xuICAgIH07XG59KTtcbi8vU3RvcmUgdGhlIGVudGlyZSBTaWRlIHBhbmVsIGluc2lkZSBvZiB0aGUgZnJhZ21lbnRcbmZyYWdtbnQuYXBwZW5kQ2hpbGQoc2lkZVBhbmVsKTtcblxuXG5mdW5jdGlvbiBzZXRBY3RpdmVQcm9qZWN0KHRhcmdldCkge1xuICAgIHJldHVybiBhY3RpdmVfcHJvamVjdCA9IHRhcmdldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGl2ZVByb2plY3QoKSB7XG4gICAgcmV0dXJuIGFjdGl2ZV9wcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBhZGRUb1Byb2plY3RBcnJheShuYW1lKSB7XG4gICAgUFJPSkVDVFMucHVzaChuYW1lKTtcbn07XG5cbmZ1bmN0aW9uIGFwcGVuZFByb2plY3RUb0RvbSgpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgZWwuaW5uZXJUZXh0ID0gYCR7UFJPSkVDVFNbUFJPSkVDVFMubGVuZ3RoIC0gMV19YFxuICAgIHJldHVybiBzaWRlUGFuZWwubGFzdENoaWxkLmFwcGVuZENoaWxkKGVsKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRQcm9qZWN0SW5wdXQoKSB7XG4gICAgaW5wdXRGaWVsZC52YWx1ZSA9IFwiXCI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9kb3MoKSB7XG4gICAgY2xlYXJUb2RvRG9tSXRlbXMoKTtcbiAgICBjb25zdCBmcmFnbW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGNvbnN0IGxpc3QgPSBnZXRUb2RvTGlzdCgpO1xuICAgIGNvbnN0IGFjdGl2ZV9wcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xuICAgIGxldCB0b2RvID0gbGlzdDtcbiAgICBpZiAodG9kby5sZW5ndGggPD0gMCkgeyByZXR1cm4gfTtcbiAgICBpZiAoYWN0aXZlX3Byb2plY3QgPT0gJ0FsbCB0YXNrcycpIHtcbiAgICAgICAgdG9kbyA9IGxpc3QubWFwKHRvZG8gPT4gdG9kbyk7XG4gICAgfSBlbHNlIGlmIChhY3RpdmVfcHJvamVjdCA9PSAnVXJnZW50IHRhc2tzJykge1xuICAgICAgICB0b2RvID0gbGlzdC5maWx0ZXIodG9kbyA9PiB0b2RvLnVyZ2VuY3kgPT0gJ0hpZ2gnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRvZG8gPSBsaXN0LmZpbHRlcih0b2RvID0+IHRvZG8ucHJvamVjdCA9PSBhY3RpdmVfcHJvamVjdCk7XG4gICAgfVxuICAgIHRvZG8uZm9yRWFjaCh0ID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSBjcmVhdGVUb2RvRG9tSXRlbSh0LnRpdGxlLCB0LmRlc2NyaXB0aW9uLCB0LmR1ZV9kYXRlLCB0LnVyZ2VuY3kpO1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCB0LmlkKTtcbiAgICAgICAgaWYgKHQuY29tcGxldGVkKSB7IGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI0MzRkZBRVwiIH07XG4gICAgICAgIGZyYWdtbnQuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKS5hcHBlbmRDaGlsZChmcmFnbW50KTtcbiAgICAvL2VsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI0MzRkZBRVwiO1xufVxuXG5cblxuLy9GdW5jdGlvbiB0byBiZSB1c2VkIGluIGluZGV4LmpzIHRvIGluaXRpYWxpemUgdGhlIHNpZGUgcGFuZWxcbmV4cG9ydCBmdW5jdGlvbiBpbml0U2lkZVBhbmVsKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZyYWdtbnQpO1xufSIsImltcG9ydCB7IHJlbW92ZVRvZG9Gcm9tTGlzdCwgc2V0VG9kb0NvbXBsZXRlIH0gZnJvbSBcIi4vdG9kb0xpc3RcIjtcbmltcG9ydCB7IHJlbmRlclRvZG9zIH0gZnJvbSBcIi4vc2lkZS1wYW5lbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9Eb21JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlX2RhdGUsIHVyZ2VuY3ksIHByb2plY3QpIHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0nKTtcbiAgICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGl0ZW1UaXRsZS5pbm5lclRleHQgPSB0aXRsZTtcbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaXRlbURlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGl0ZW1EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1EdWVEYXRlLmlubmVyVGV4dCA9IGBEdWUgZGF0ZTogJHtkdWVfZGF0ZX1gO1xuICAgIGNvbnN0IGl0ZW1VcmdlbmN5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1VcmdlbmN5LmlubmVyVGV4dCA9IGBVcmdlbmN5OiAke3VyZ2VuY3l9YDtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVsZXRlQnRuLmlubmVySFRNTCA9IGA8c3ZnIHN0eWxlPVwid2lkdGg6MjRweDtoZWlnaHQ6MjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk05LDNWNEg0VjZINVYxOUEyLDIgMCAwLDAgNywyMUgxN0EyLDIgMCAwLDAgMTksMTlWNkgyMFY0SDE1VjNIOU03LDZIMTdWMTlIN1Y2TTksOFYxN0gxMVY4SDlNMTMsOFYxN0gxNVY4SDEzWlwiIC8+XG4gICAgPC9zdmc+YDtcbiAgICBjb25zdCBjb21wbGV0ZWRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29tcGxldGVkQnRuLmlubmVySFRNTCA9IGA8c3ZnIHN0eWxlPVwid2lkdGg6MjRweDtoZWlnaHQ6MjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xOS43OCwyLjJMMjQsNi40Mkw4LjQ0LDIyTDAsMTMuNTVMNC4yMiw5LjMzTDguNDQsMTMuNTVMMTkuNzgsMi4yTTE5Ljc4LDVMOC40NCwxNi4zNkw0LjIyLDEyLjE5TDIuODEsMTMuNTVMOC40NCwxOS4xN0wyMS4xOSw2LjQyTDE5Ljc4LDVaXCIgLz5cbiAgICA8L3N2Zz5gXG4gICAgY29tcGxldGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgc2V0VGFza0FzQ29tcGxldGUoZSk7XG4gICAgfSk7XG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGRlbGV0ZVRhc2soZSk7XG4gICAgfSlcblxuICAgIGl0ZW0uYXBwZW5kKGl0ZW1UaXRsZSwgaXRlbURlc2NyaXB0aW9uLCBpdGVtRHVlRGF0ZSwgaXRlbVVyZ2VuY3ksIGNvbXBsZXRlZEJ0biwgZGVsZXRlQnRuKTtcblxuICAgIHJldHVybiBpdGVtO1xufVxuXG5mdW5jdGlvbiBzZXRUYXNrQXNDb21wbGV0ZShlKSB7XG4gICAgY29uc3QgZWwgPSBlLnRhcmdldC5jbG9zZXN0KCdkaXYnKTtcbiAgICBzZXRUb2RvQ29tcGxldGUoZWwuZGF0YXNldC5pZCk7XG4gICAgcmVuZGVyVG9kb3MoKTtcblxufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKGUpIHtcbiAgICBjb25zdCBlbCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2RpdicpO1xuICAgIHJlbW92ZVRvZG9Gcm9tTGlzdChlbC5kYXRhc2V0LmlkKTtcbiAgICByZW5kZXJUb2RvcygpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyVG9kb0RvbUl0ZW1zKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8taXRlbScpO1xuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0ucmVtb3ZlKCk7XG4gICAgfSk7XG59IiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cblxuXG5jbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZV9kYXRlLCB1cmdlbmN5LCBwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMuaWQgPSB1dWlkdjQoKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlX2RhdGUgPSBkdWVfZGF0ZTtcbiAgICAgICAgdGhpcy51cmdlbmN5ID0gdXJnZW5jeTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVfZGF0ZSwgdXJnZW5jeSwgcHJvamVjdCkge1xuICAgIHJldHVybiBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZV9kYXRlLCB1cmdlbmN5LCBwcm9qZWN0KTtcbn0iLCJsZXQgdG9kb0xpc3QgPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRvZG9Ub0xpc3QodG9kbykge1xuICAgIHJldHVybiB0b2RvTGlzdC5wdXNoKHRvZG8pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvZG9MaXN0KCkge1xuICAgIHJldHVybiB0b2RvTGlzdDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2RvRnJvbUxpc3QodGFyZ2V0X2lkKSB7XG4gICAgY29uc3QgdG9kb1RvRGVsZXRlID0gdG9kb0xpc3QuZmluZEluZGV4KHRvZG8gPT4gdG9kby5pZCA9PSB0YXJnZXRfaWQpO1xuICAgIHRvZG9MaXN0LnNwbGljZSh0b2RvVG9EZWxldGUsIDEpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRvZG9Db21wbGV0ZSh0YXJnZXRfaWQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRvZG9MaXN0LmZpbmRJbmRleCh0b2RvID0+IHRvZG8uaWQgPT0gdGFyZ2V0X2lkKTtcbiAgICB0b2RvTGlzdFtpbmRleF0uY29tcGxldGVkID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyh0b2RvTGlzdCk7XG59OyIsImltcG9ydCB7IGluaXRTaWRlUGFuZWwgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NpZGUtcGFuZWxcIjtcbmltcG9ydCB7IGluaXRNYWluQ29udGVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbWFpbi1jb250ZW50XCI7XG5pbXBvcnQgeyBpbml0SGVhZGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCB7IFBST0pFQ1RTLCBhY3RpdmVfcHJvamVjdCB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2lkZS1wYW5lbFwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuLy9DcmVhdGUgYW5kIGFkZCBtYWluIGVsZW1lbnRzIHRvIHdlYnBhZ2VcbmluaXRIZWFkZXIoKTtcbmluaXRNYWluQ29udGVudCgpO1xuaW5pdFNpZGVQYW5lbCgpO1xuXG4vLyMjIyBTRVQgQ09OVEVOVCBUSVRMRSBBRlRFUiBBQ1RJVkUgUFJPSkVDVCAjIyNcblxuXG5cblxuIiwiLy9GdW5jdGlvbiB0byBhaWQgaW4gY3JlYXRpbmcgVUwncywgdGFrZXMgYW4gYXJyYXkgb2YgaXRlbXMuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVWwoaXRlbXMpIHtcbiAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdWwuaW5uZXJIVE1MICs9IGA8bGk+JHtpdGVtc1tpXX08L2xpPmA7XG4gICAgfVxuICAgIHJldHVybiB1bDtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9