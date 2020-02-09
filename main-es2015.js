(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar (openedMenu)=\"openedMenu = $event\" (changedLanguage)=\"changedLanguage = $event\"></app-navbar>\r\n<app-container-about [actionTranslate]=\"changedLanguage\"></app-container-about>\r\n<app-container-skills [actionTranslate]=\"changedLanguage\"></app-container-skills>\r\n<app-container-portfolio></app-container-portfolio>\r\n<app-container-contact></app-container-contact>\r\n<app-footer></app-footer>\r\n\r\n<!-- <div class=\"spinner-border text-dark\" role=\"status\"></div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/container-about/container-about.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/container-about/container-about.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"about\" class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"container-title col-12\">\r\n      <h2 data-aos=\"fade-right\" data-aos-easing=\"linear\" data-aos-duration=\"500\" class=\"portfolio-title position-relative\" >{{ 'COMMON.ABOUT' | translate }}</h2>\r\n    </div>\r\n\r\n    <div class=\"container-photo flex-column col-lg-5 col-sm-12 mt-md-5 pt-4 text-center pt-4 d-lg-flex align-items-center justify-content-center\">\r\n      <img data-aos=\"flip-left\" data-aos-easing=\"linear\" data-aos-duration=\"700\" class=\"mt-80\" src=\"assets/img/about.jpg\" />\r\n      <blockquote data-aos=\"zoom-in\" data-aos-easing=\"linear\" data-aos-duration=\"500\" class=\"blockquote text-lg-right mt-4 mb-0\">\r\n        <p class=\"mb-0\">{{ 'ABOUT.QUOTE' | translate }}</p>\r\n        <footer class=\"blockquote-footer\">\r\n          <cite title=\"Steve Jobs\">Steve Jobs</cite>\r\n        </footer>\r\n      </blockquote>\r\n    </div>\r\n\r\n    <div class=\"container-description col-lg-6 offset-lg-1\">\r\n      <div class=\"col-lg-12 col-sm-12 d-md-flex mb-4 mt-lg-0 mt-4\">\r\n        <div class=\"row d-lg-flex align-items-md-center justify-content-md-center\">\r\n          <div data-aos=\"zoom-in\" data-aos-easing=\"linear\" data-aos-duration=\"350\"\r\n            class=\"mt-3 mb-3 m-lg-0 col-lg-6 item p-4 text-center align-self-stretch align-items-center justify-content-center d-flex\"\r\n            *ngFor=\"let item of about\">\r\n            {{ item.description }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/container-contact/container-contact.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/container-contact/container-contact.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-container-geometric class=\"d-block mt-5\" [backgroundColor]=\"3\" color=\"#FFF\">\r\n  <div data-aos=\"zoom-in-down\" id=\"contact\" class=\"container pb-5\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"container-title col-12 mt-md-3 mb-5 pt-5 text-center\">\r\n        <h2 data-aos=\"fade-right\" data-aos-easing=\"linear\" data-aos-duration=\"500\"\r\n          class=\"portfolio-title position-relative\">{{ 'COMMON.CONTACT' | translate }}</h2>\r\n      </div>\r\n\r\n      <div data-aos=\"zoom-in\" data-aos-easing=\"linear\" data-aos-duration=\"800\" class=\"container-mail col-12 text-center mt-4 mb-3\">\r\n        <a class=\"text-decoration-none pb-2\" href=\"mailto:dustanisci@outlook.com\">dustanisci@outlook.com</a>\r\n      </div>\r\n\r\n      <div data-aos=\"zoom-in\" data-aos-easing=\"linear\" data-aos-duration=\"800\" class=\"container-social col-12 d-flex justify-content-center mt-4 mb-4\">\r\n        <a href=\"https://www.linkedin.com/in/dustanisci/\" target=\"_blank\"\r\n          class=\"ml-2 mr-2 d-flex align-items-center justify-content-center text-decoration-none d-inline-block\">\r\n          <i class=\"d-flex icon-linkedin\"></i>\r\n        </a>\r\n        <a href=\"https://github.com/dustanisci\" target=\"_blank\"\r\n          class=\"ml-4 mr-4 d-flex align-items-center justify-content-center text-decoration-none d-inline-block\">\r\n          <i class=\"icon-github-alt\"></i>\r\n        </a>\r\n      </div>\r\n\r\n      <div data-aos=\"zoom-in\" data-aos-easing=\"linear\" data-aos-duration=\"800\" data-aos=\"flip-left\" data-aos-easing=\"ease-out-cubic\" data-aos-duration=\"800\"\r\n        class=\"container-img col-12 text-center mt-5\">\r\n        <img src=\"./assets/img/chamaleon2.png\" />\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</app-container-geometric>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/container-portfolio/container-portfolio.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/container-portfolio/container-portfolio.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"portfolio\" class=\"container mt-4\">\r\n  <div class=\"row\">\r\n    <div class=\"container-title col-12 mt-md-5 mb-md-5 mb-4 pt-3 pb-3\">\r\n      <h2 data-aos=\"fade-right\" data-aos-easing=\"linear\" data-aos-duration=\"500\"\r\n        class=\"portfolio-title position-relative\">\r\n        {{ 'COMMON.PORTFOLIO' | translate }} </h2>\r\n    </div>\r\n\r\n    <div class=\"container-projects col-12\">\r\n      <div class=\"row d-lg-flex align-items-md-center justify-content-md-between\">\r\n\r\n        <ng-container *ngIf=\"!loaderPortfolio\">\r\n          <div class=\"col-lg-5 col-12 mb-lg-5 pb-lg-5\" *ngFor=\"let project of portfolioTwoItems\"\r\n            (click)=\"actionModal(project)\">\r\n            <img data-aos=\"zoom-in\" data-aos-easing=\"linear\" data-aos-duration=\"800\" *ngIf=\"project\"\r\n              class=\"pb-3 img-fluid\" src=\"{{ project.galerias[0].url_galeria }}\" />\r\n            <label *ngIf=\"project\" class=\"pt-2 d-block font-weight-bolder text-center\">{{ 'MODAL.IMAGE' | translate }} 1\r\n              {{ 'MODAL.OF' | translate }}\r\n              {{ project.galerias.length }}</label>\r\n          </div>\r\n        </ng-container>\r\n\r\n        <div *ngIf=\"loaderPortfolio\" class=\"spinner-border text-dark\" role=\"status\"></div>\r\n      </div>\r\n    </div>\r\n\r\n    <nav class=\"container-pagination col-12 mt-4 mt-sm-3\">\r\n      <ul #list class=\"pagination justify-content-center row\">\r\n        <li *ngFor=\"let item of [].constructor(index); let i = index\" [ngClass]=\"{'active': i === 0}\"\r\n          (click)=\"setItemsByIndex(i); setClassActive(i+1);\"\r\n          class=\"m-sm-0 ml-3 mr-3 mb-3 display-inline-block page-item text-center\">\r\n          <a class=\"page-link\" href=\"#portfolio\">{{ i + 1 }}</a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n</div>\r\n\r\n<app-modal *ngIf=\"portfolioTwoItems\" [actionModal]=\"showModal\" [setProject]=\"openedProject\"\r\n  (closed)=\"showModal = false\"></app-modal>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/container-skills/container-skills.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/container-skills/container-skills.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-container-geometric class=\"d-block mt-4 mt-md-5 pt-md-4\" [backgroundColor]=\"1\" color=\"#FFF\">\r\n  <div id=\"skills\" class=\"container pb-5\">\r\n    <div class=\"row pb-5\">\r\n\r\n      <div class=\"container-title col-12 mt-5 mb-5 pt-sm-5\">\r\n        <h2 data-aos=\"fade-right\" data-aos-easing=\"linear\" data-aos-duration=\"500\"\r\n          class=\"portfolio-title position-relative\">{{ 'COMMON.SKILLS' | translate }}</h2>\r\n      </div>\r\n\r\n      <div class=\"container-skills col-12\">\r\n        <div class=\"col-12\">\r\n          <div class=\"row d-lg-flex justify-content-md-between align-items-md-stretch\">\r\n            <div data-aos=\"zoom-in\" data-aos-easing=\"linear\" data-aos-duration=\"450\" class=\"pl-0 pr-0 col-lg-2 col-md-6 pl-4 pr-3 col-sm-6 col-6 mt-4 d-lg-flex flex-column\"\r\n              *ngFor=\"let skill of skills\">\r\n              <h3 class=\"font-weight-bolder\">{{ skill.technology }}</h3>\r\n              <ul class=\"pt-2 pl-3\">\r\n                <li *ngFor=\"let item of skill.value\"> {{ item }} </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-container-geometric>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/container-geometric/container-geometric.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/container-geometric/container-geometric.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-geometric\">\r\n  <div [ngStyle]=\"{'background-image': 'url(' + _background + ')', 'transform' : reverse ? 'scaleX(-1)' : 'scaleX(1)' }\"\r\n    class=\"geometric\"></div>\r\n  <div [ngStyle]=\"{'color': color}\" class=\"subcontainer-geometric position-relative\">\r\n    <div [ngClass]=\"backgroundColor === 1 ? 'blue' : (backgroundColor === 2 ? 'light-blue' : 'pink')\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dropdown/dropdown.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dropdown/dropdown.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-dropdown\">\r\n  <div (click)=\"open(!isActive, !effectOpacity)\" class=\"container-label d-flex align-items-center justify-content-end\">\r\n    <label class=\"m-0\">{{ label }}</label>\r\n    <i class=\"ml-2 icon-caret-down\"></i>\r\n  </div>\r\n  <ul class=\"position-absolute pl-0 pt-2 pb-2 mt-2\" [ngClass]=\"{'active': isActive, 'effect-opacity' : effectOpacity}\">\r\n    <li class=\"pl-4 pr-4 pt-2 pb-2\" *ngFor=\"let item of items\" (click)=\"action(item)\">{{ item.label }}</li>\r\n  </ul>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"text-center position-relative pt-4 pb-4\">Eduardo Stanisci © {{ year }} -\r\n  {{ 'FOOTER.COPYRIGHT' | translate }}</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/modal/modal.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/modal/modal.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngStyle]=\"{'display': showModal ? 'block' : 'none'}\" class=\"h-100 container-modal w-100 position-fixed h-100\">\r\n  <div class=\"container-fluid h-100\">\r\n    <div class=\"row d-flex align-items-stretch h-100\">\r\n\r\n      <div class=\"container-close position-fixed\">\r\n        <i (click)=\"actionClose()\" class=\"icon-remove\"></i>\r\n      </div>\r\n\r\n      <div class=\"container-elements col-12 d-flex\">\r\n        <div class=\"container-arrow col-2 col-sm-1 d-flex align-items-center justify-content-center flex-column\">\r\n          <i [ngStyle]=\"{'opacity': index === 0 ? '0.3' : '1'}\" (click)=\"previousImage()\" class=\"icon-chevron-left\"></i>\r\n        </div>\r\n\r\n        <div class=\"container-img col-8 col-sm-10 d-flex align-items-center justify-content-center flex-column\">\r\n          <img #img class=\"img-fluid begin-opacity-effect\" *ngIf=\"project && project.galerias\"\r\n            src=\"{{ project.galerias[index].url_galeria }}\" />\r\n        </div>\r\n\r\n        <div class=\"container-arrow col-2 col-sm-1 d-flex align-items-center justify-content-center flex-column\">\r\n          <i *ngIf=\"project && project.galerias\" [ngStyle]=\"{'opacity': (this.project.galerias.length === index + 1) ? '0.3' : '1'}\" (click)=\"nextImage()\"\r\n            class=\"icon-chevron-right\"></i>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"container-quantity col-12 d-flex align-items-center justify-content-center\">\r\n        <div class=\"row\">\r\n          <div *ngIf=\"project && project.galerias\" class=\"mb-3\">\r\n            {{ 'MODAL.IMAGE' | translate }} {{ index + 1 }} {{ 'MODAL.OF' | translate }} {{ project.galerias.length }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"container-fluid pt-2 pb-2 pt-md-3 pb-md-3 position-fixed bg-white\">\r\n  <div class=\"container\">\r\n    <div class=\"row position-relative d-md-flex align-items-stretch\">\r\n\r\n      <div data-aos=\"fade-zoom-in\" data-aos-easing=\"linear\" data-aos-duration=\"1000\" class=\"container-logo col-4\">\r\n        <a href=\"./\">\r\n          <img src=\"./assets/img/logo.png\" />\r\n        </a>\r\n      </div>\r\n\r\n      <app-dropdown class=\"position-absolute \" [items]=\"language\" (value)=\"translateAction($event)\"></app-dropdown>\r\n\r\n      <div [ngClass]=\"{'openMenu': openMenu}\" class=\"container-items col-12 col-sm-12 col-md-8 d-md-flex align-md-items-center justify-content-md-end\">\r\n        <ul data-aos=\"fade-zoom-in\" data-aos-easing=\"linear\" data-aos-duration=\"1000\" class=\"d-md-flex w-100 pl-0 pt-md-0 pt-5 align-items-center justify-content-end mb-0 mt-5 mt-md-0\">\r\n          <li class=\"d-md-inline d-sm-block d-block ml-md-3 text-center text-md-left\" *ngFor=\"let item of navbar\">\r\n            <a class=\"pt-4 pb-4 pl-md-3 pt-md-0 pb-md-0 text-decoration-none\"\r\n              (click)=\"navbarAction(false); setPositionScroll(item.link);\">{{ item.name }}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"container-icons d-md-none position-absolute d-flex align-items-center\">\r\n        <i *ngIf=\"openMenu === false\" (click)=\"navbarAction(true)\" class=\"icon-reorder\"></i>\r\n        <i *ngIf=\"openMenu === true\" (click)=\"navbarAction(false)\" class=\"icon-remove\"></i>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</nav>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-loader {\n  position: fixed;\n}\n.container-loader .spinner-border {\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHJlcG9zaXRvcmlvc1xccG9ydGZvbGlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjtBRENFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItbG9hZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcblxyXG4gIC5zcGlubmVyLWJvcmRlciB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxufVxyXG4iLCIuY29udGFpbmVyLWxvYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5jb250YWluZXItbG9hZGVyIC5zcGlubmVyLWJvcmRlciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);



let AppComponent = class AppComponent {
    constructor() {
        this.multiloader = {};
        this.openedMenu = false;
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_2__["init"]();
        this.multiloader.about = true;
        this.multiloader.portfolio = true;
        this.multiloader.skills = true;
        this.multiloader.navbar = true;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _container_about_container_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./container-about/container-about.component */ "./src/app/container-about/container-about.component.ts");
/* harmony import */ var _container_contact_container_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./container-contact/container-contact.component */ "./src/app/container-contact/container-contact.component.ts");
/* harmony import */ var _container_portfolio_container_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./container-portfolio/container-portfolio.component */ "./src/app/container-portfolio/container-portfolio.component.ts");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components/navbar/navbar.component */ "./src/app/shared/components/navbar/navbar.component.ts");
/* harmony import */ var _shared_components_container_geometric_container_geometric_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/container-geometric/container-geometric.component */ "./src/app/shared/components/container-geometric/container-geometric.component.ts");
/* harmony import */ var _container_skills_container_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./container-skills/container-skills.component */ "./src/app/container-skills/container-skills.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/components/modal/modal.component */ "./src/app/shared/components/modal/modal.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _shared_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/components/dropdown/dropdown.component */ "./src/app/shared/components/dropdown/dropdown.component.ts");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _container_about_container_about_component__WEBPACK_IMPORTED_MODULE_5__["ContainerAboutComponent"],
            _container_contact_container_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContainerContactComponent"],
            _container_portfolio_container_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["ContainerPortfolioComponent"],
            _container_skills_container_skills_component__WEBPACK_IMPORTED_MODULE_10__["ContainerSkillsComponent"],
            _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
            _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
            _shared_components_container_geometric_container_geometric_component__WEBPACK_IMPORTED_MODULE_9__["ContainerGeometricComponent"],
            _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["ModalComponent"],
            _shared_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_15__["DropdownComponent"],
        ],
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
                }
            })
        ],
        providers: [],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ]
    })
], AppModule);

function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/container-about/container-about.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/container-about/container-about.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding-top: 130px;\n}\n@media only screen and (max-width: 767px) {\n  .container {\n    padding-top: 90px;\n  }\n}\n.container .container-title .portfolio-title:before {\n  background: #00e1e1;\n  position: absolute;\n}\n.container .container-title .portfolio-title::first-letter {\n  color: #00e1e1;\n  font-weight: bolder;\n}\n.container .container-photo blockquote p {\n  font-size: 12pt;\n}\n.container .container-photo img {\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n  padding: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n}\n.container .container-description .item {\n  min-height: 200px;\n  font-size: 11pt;\n}\n@media only screen and (max-width: 991px) {\n  .container .container-description .item {\n    border: 1px solid rgba(0, 0, 0, 0.4);\n  }\n}\n@media only screen and (max-width: 767px) {\n  .container .container-description .item {\n    -webkit-animation: none;\n            animation: none;\n  }\n}\n.container .container-description .item:nth-of-type(1) {\n  background: #00146e;\n  color: #FFF;\n}\n.container .container-description .item:nth-of-type(2) {\n  background: #0041a0;\n  color: #FFF;\n}\n.container .container-description .item:nth-of-type(3) {\n  background: #00e1e1;\n  font-weight: bolder;\n}\n.container .container-description .item:nth-of-type(4) {\n  background: #eb92be;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVyLWFib3V0L0M6XFxyZXBvc2l0b3Jpb3NcXHBvcnRmb2xpby9zcmNcXGFwcFxcY29udGFpbmVyLWFib3V0XFxjb250YWluZXItYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhaW5lci1hYm91dC9jb250YWluZXItYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtBQ0RGO0FER0U7RUFIRjtJQUlJLGlCQUFBO0VDQUY7QUFDRjtBRElNO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQ0ZSO0FES007RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNIUjtBRFVNO0VBQ0UsZUFBQTtBQ1JSO0FEWUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FDVk47QURnQkk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNkTjtBRGdCTTtFQUpGO0lBS0ksb0NBQUE7RUNiTjtBQUNGO0FEZU07RUFSRjtJQVNJLHVCQUFBO1lBQUEsZUFBQTtFQ1pOO0FBQ0Y7QURlSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ2JOO0FEZ0JJO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FDZE47QURpQkk7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FDZk47QURrQkk7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FDaEJOIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVyLWFib3V0L2NvbnRhaW5lci1hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uL2Fzc2V0cy9zdHlsZS9wYWxldHRlLnNjc3NcIjtcclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiAxMzBweDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgcGFkZGluZy10b3A6IDkwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLXRpdGxlIHtcclxuICAgIC5wb3J0Zm9saW8tdGl0bGUge1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICczJyk7XHJcbiAgICAgICAgcG9zaXRpb24gIDogYWJzb2x1dGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6OmZpcnN0LWxldHRlciB7XHJcbiAgICAgICAgY29sb3IgICAgICA6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMycpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXItcGhvdG8ge1xyXG4gICAgYmxvY2txdW90ZSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgd2lkdGggICAgICAgIDogMjAwcHg7XHJcbiAgICAgIGhlaWdodCAgICAgICA6IDIwMHB4O1xyXG4gICAgICBwYWRkaW5nICAgICAgOiA1cHg7XHJcbiAgICAgIGJvcmRlciAgICAgICA6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci1kZXNjcmlwdGlvbiB7XHJcblxyXG4gICAgLml0ZW0ge1xyXG4gICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgZm9udC1zaXplIDogMTFwdDtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW06bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzEnKTtcclxuICAgICAgY29sb3IgICAgIDogI0ZGRjtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbTpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMicpO1xyXG4gICAgICBjb2xvciAgICAgOiAjRkZGO1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtOm50aC1vZi10eXBlKDMpIHtcclxuICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICczJyk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW06bnRoLW9mLXR5cGUoNCkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzQnKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIH1cclxuICB9XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDEzMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogOTBweDtcbiAgfVxufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLXRpdGxlIC5wb3J0Zm9saW8tdGl0bGU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzAwZTFlMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLXRpdGxlIC5wb3J0Zm9saW8tdGl0bGU6OmZpcnN0LWxldHRlciB7XG4gIGNvbG9yOiAjMDBlMWUxO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLXBob3RvIGJsb2NrcXVvdGUgcCB7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbn1cbi5jb250YWluZXIgLmNvbnRhaW5lci1waG90byBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4uY29udGFpbmVyIC5jb250YWluZXItZGVzY3JpcHRpb24gLml0ZW0ge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgZm9udC1zaXplOiAxMXB0O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuY29udGFpbmVyIC5jb250YWluZXItZGVzY3JpcHRpb24gLml0ZW0ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGFpbmVyIC5jb250YWluZXItZGVzY3JpcHRpb24gLml0ZW0ge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgfVxufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLWRlc2NyaXB0aW9uIC5pdGVtOm50aC1vZi10eXBlKDEpIHtcbiAgYmFja2dyb3VuZDogIzAwMTQ2ZTtcbiAgY29sb3I6ICNGRkY7XG59XG4uY29udGFpbmVyIC5jb250YWluZXItZGVzY3JpcHRpb24gLml0ZW06bnRoLW9mLXR5cGUoMikge1xuICBiYWNrZ3JvdW5kOiAjMDA0MWEwO1xuICBjb2xvcjogI0ZGRjtcbn1cbi5jb250YWluZXIgLmNvbnRhaW5lci1kZXNjcmlwdGlvbiAuaXRlbTpudGgtb2YtdHlwZSgzKSB7XG4gIGJhY2tncm91bmQ6ICMwMGUxZTE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4uY29udGFpbmVyIC5jb250YWluZXItZGVzY3JpcHRpb24gLml0ZW06bnRoLW9mLXR5cGUoNCkge1xuICBiYWNrZ3JvdW5kOiAjZWI5MmJlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/container-about/container-about.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/container-about/container-about.component.ts ***!
  \**************************************************************/
/*! exports provided: ContainerAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerAboutComponent", function() { return ContainerAboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _container_about_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container-about.service */ "./src/app/container-about/container-about.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");




let ContainerAboutComponent = class ContainerAboutComponent {
    constructor(aboutService, translate) {
        this.aboutService = aboutService;
        this.translate = translate;
        this.about = [];
        this.loader = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set actionTranslate(changedLanguage) {
        this.setAbout();
    }
    ngOnInit() {
        // this.dataAbout();
        this.loader.emit();
        this.setAbout();
    }
    dataAbout() {
        this.aboutService.dataAbout().subscribe((about) => {
            this.about = about;
            this.loader.emit();
        }, () => this.loader.emit());
    }
    setAbout() {
        this.translate.get(['ABOUT.SQUARE1', 'ABOUT.SQUARE2', 'ABOUT.SQUARE3', 'ABOUT.SQUARE4']).subscribe((res) => {
            this.about = [
                { description: res['ABOUT.SQUARE1'] },
                { description: res['ABOUT.SQUARE2'] },
                { description: res['ABOUT.SQUARE3'] },
                { description: res['ABOUT.SQUARE4'] }
            ];
        });
    }
};
ContainerAboutComponent.ctorParameters = () => [
    { type: _container_about_service__WEBPACK_IMPORTED_MODULE_2__["ContainerAboutService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ContainerAboutComponent.prototype, "loader", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContainerAboutComponent.prototype, "actionTranslate", null);
ContainerAboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-container-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./container-about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/container-about/container-about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./container-about.component.scss */ "./src/app/container-about/container-about.component.scss")).default]
    })
], ContainerAboutComponent);



/***/ }),

/***/ "./src/app/container-about/container-about.service.ts":
/*!************************************************************!*\
  !*** ./src/app/container-about/container-about.service.ts ***!
  \************************************************************/
/*! exports provided: ContainerAboutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerAboutService", function() { return ContainerAboutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/api/api.service */ "./src/app/shared/api/api.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ContainerAboutService = class ContainerAboutService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    dataAbout() {
        return this.apiService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["endpoint"].about);
    }
};
ContainerAboutService.ctorParameters = () => [
    { type: _shared_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
ContainerAboutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ContainerAboutService);



/***/ }),

/***/ "./src/app/container-contact/container-contact.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/container-contact/container-contact.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-container-geometric .container .container-title .portfolio-title:before {\n  background: #000;\n  position: absolute;\n}\napp-container-geometric .container .container-title .portfolio-title::first-letter {\n  color: #000;\n  font-weight: bolder;\n}\napp-container-geometric .container .container-mail a {\n  font-size: 19pt;\n  color: #000;\n  border-bottom: 3px solid #FFF;\n  -webkit-transition: 300ms linear;\n  transition: 300ms linear;\n}\napp-container-geometric .container .container-mail a:hover {\n  border-bottom: 2px solid #0041a0;\n  -webkit-transition: 300ms linear;\n  transition: 300ms linear;\n}\napp-container-geometric .container .container-social a {\n  width: 60px;\n  height: 50px;\n  background: #000;\n  cursor: pointer;\n  -webkit-transition: 300ms linear;\n  transition: 300ms linear;\n}\napp-container-geometric .container .container-social a:hover {\n  background: #00146e;\n  -webkit-transition: 300ms linear;\n  transition: 300ms linear;\n}\napp-container-geometric .container .container-social a i {\n  font-size: 30px;\n  color: #FFF;\n}\napp-container-geometric .container .container-img img {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVyLWNvbnRhY3QvQzpcXHJlcG9zaXRvcmlvc1xccG9ydGZvbGlvL3NyY1xcYXBwXFxjb250YWluZXItY29udGFjdFxcY29udGFpbmVyLWNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhaW5lci1jb250YWN0L2NvbnRhaW5lci1jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1RO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0xWO0FEUVE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUNOVjtBRFlNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQUEsd0JBQUE7QUNWUjtBRFlRO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtFQUFBLHdCQUFBO0FDVlY7QURpQk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQUEsd0JBQUE7QUNmUjtBRGlCUTtFQUNFLG1CQUFBO0VBQ0EsZ0NBQUE7RUFBQSx3QkFBQTtBQ2ZWO0FEa0JRO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNoQlY7QUR1Qk07RUFDRSxZQUFBO0FDckJSIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVyLWNvbnRhY3QvY29udGFpbmVyLWNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi9hc3NldHMvc3R5bGUvcGFsZXR0ZS5zY3NzXCI7XHJcblxyXG5hcHAtY29udGFpbmVyLWdlb21ldHJpYyB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICAuY29udGFpbmVyLXRpdGxlIHtcclxuICAgICAgLnBvcnRmb2xpby10aXRsZSB7XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6OmZpcnN0LWxldHRlciB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lci1tYWlsIHtcclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB0O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRkZGO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDMwMG1zIGxpbmVhcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICcyJyk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcyBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lci1zb2NpYWwge1xyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDMwMG1zIGxpbmVhcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzEnKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDMwMG1zIGxpbmVhcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXItaW1nIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59IiwiYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMgLmNvbnRhaW5lciAuY29udGFpbmVyLXRpdGxlIC5wb3J0Zm9saW8tdGl0bGU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMgLmNvbnRhaW5lciAuY29udGFpbmVyLXRpdGxlIC5wb3J0Zm9saW8tdGl0bGU6OmZpcnN0LWxldHRlciB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMgLmNvbnRhaW5lciAuY29udGFpbmVyLW1haWwgYSB7XG4gIGZvbnQtc2l6ZTogMTlwdDtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRkZGO1xuICB0cmFuc2l0aW9uOiAzMDBtcyBsaW5lYXI7XG59XG5hcHAtY29udGFpbmVyLWdlb21ldHJpYyAuY29udGFpbmVyIC5jb250YWluZXItbWFpbCBhOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDQxYTA7XG4gIHRyYW5zaXRpb246IDMwMG1zIGxpbmVhcjtcbn1cbmFwcC1jb250YWluZXItZ2VvbWV0cmljIC5jb250YWluZXIgLmNvbnRhaW5lci1zb2NpYWwgYSB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMzAwbXMgbGluZWFyO1xufVxuYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMgLmNvbnRhaW5lciAuY29udGFpbmVyLXNvY2lhbCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzAwMTQ2ZTtcbiAgdHJhbnNpdGlvbjogMzAwbXMgbGluZWFyO1xufVxuYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMgLmNvbnRhaW5lciAuY29udGFpbmVyLXNvY2lhbCBhIGkge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjRkZGO1xufVxuYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMgLmNvbnRhaW5lciAuY29udGFpbmVyLWltZyBpbWcge1xuICB3aWR0aDogMjAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/container-contact/container-contact.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/container-contact/container-contact.component.ts ***!
  \******************************************************************/
/*! exports provided: ContainerContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerContactComponent", function() { return ContainerContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let ContainerContactComponent = class ContainerContactComponent {
    constructor(translate) {
        this.translate = translate;
    }
    ngOnInit() {
        this.translate.get('COMMON.ABOUT').subscribe((res) => {
            this.title = res;
        });
    }
};
ContainerContactComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContainerContactComponent.prototype, "languageId", void 0);
ContainerContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-container-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./container-contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/container-contact/container-contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./container-contact.component.scss */ "./src/app/container-contact/container-contact.component.scss")).default]
    })
], ContainerContactComponent);



/***/ }),

/***/ "./src/app/container-portfolio/container-portfolio.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/container-portfolio/container-portfolio.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container .container-title .portfolio-title:before {\n  background: #00146e;\n  position: absolute;\n}\n.container .container-title .portfolio-title::first-letter {\n  color: #00146e;\n  font-weight: bolder;\n}\n.container .container-projects .row {\n  min-height: 410px;\n}\n@media only screen and (max-width: 991px) {\n  .container .container-projects .row {\n    min-height: 920px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .container .container-projects .row {\n    min-height: 782px;\n  }\n}\n@media only screen and (max-width: 500px) {\n  .container .container-projects .row {\n    min-height: 550px;\n  }\n}\n.container .container-projects .row img {\n  border-bottom: 4px solid #0041a0;\n  cursor: pointer;\n}\n.container .container-projects .row .spinner-border {\n  display: block;\n  margin: 0 auto;\n  width: 50px;\n  height: 50px;\n}\n.container .container-pagination .page-item {\n  z-index: 0;\n}\n@media only screen and (max-width: 991px) {\n  .container .container-pagination .page-item {\n    width: 40px;\n  }\n}\n.container .container-pagination .page-item a {\n  color: #FFF;\n  background: #0041a0;\n  -webkit-transition: 250ms ease;\n  transition: 250ms ease;\n  cursor: pointer;\n  border: 1px solid rgba(0, 0, 0, 0.14);\n}\n@media only screen and (max-width: 991px) {\n  .container .container-pagination .page-item a {\n    font-size: 20pt;\n  }\n}\n.container .container-pagination .page-item a:hover {\n  background: #eb92be;\n  -webkit-transition: 250ms ease;\n  transition: 250ms ease;\n}\n.container .container-pagination .page-item.active a {\n  background: #eb92be;\n}\n.container .container-pagination .page-item.active a:focus {\n  background: #eb92be;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVyLXBvcnRmb2xpby9DOlxccmVwb3NpdG9yaW9zXFxwb3J0Zm9saW8vc3JjXFxhcHBcXGNvbnRhaW5lci1wb3J0Zm9saW9cXGNvbnRhaW5lci1wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhaW5lci1wb3J0Zm9saW8vY29udGFpbmVyLXBvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLTTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNKUjtBRE9NO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDTFI7QURXSTtFQUNFLGlCQUFBO0FDVE47QURXTTtFQUhGO0lBSUksaUJBQUE7RUNSTjtBQUNGO0FEVU07RUFQRjtJQVFJLGlCQUFBO0VDUE47QUFDRjtBRFNNO0VBWEY7SUFZSSxpQkFBQTtFQ05OO0FBQ0Y7QURRTTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtBQ05SO0FEU007RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDUFI7QURhSTtFQUNFLFVBQUE7QUNYTjtBRGFNO0VBSEY7SUFJSSxXQUFBO0VDVk47QUFDRjtBRFlNO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFBQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtBQ1ZSO0FEWVE7RUFQRjtJQVFJLGVBQUE7RUNUUjtBQUNGO0FEV1E7RUFDRSxtQkFBQTtFQUNBLDhCQUFBO0VBQUEsc0JBQUE7QUNUVjtBRGNRO0VBQ0UsbUJBQUE7QUNaVjtBRGNVO0VBQ0UsbUJBQUE7QUNaWiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci1wb3J0Zm9saW8vY29udGFpbmVyLXBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uL2Fzc2V0cy9zdHlsZS9wYWxldHRlLnNjc3NcIjtcclxuXHJcbi5jb250YWluZXIge1xyXG4gIC5jb250YWluZXItdGl0bGUge1xyXG4gICAgLnBvcnRmb2xpby10aXRsZSB7XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzEnKTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6OmZpcnN0LWxldHRlciB7XHJcbiAgICAgICAgY29sb3I6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMScpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXItcHJvamVjdHMge1xyXG4gICAgLnJvdyB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDQxMHB4O1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDkyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgbWluLWhlaWdodDogNzgycHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1NTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICcyJyk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Bpbm5lci1ib3JkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci1wYWdpbmF0aW9uIHtcclxuICAgIC5wYWdlLWl0ZW0ge1xyXG4gICAgICB6LWluZGV4OiAwO1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzInKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnNCcpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnNCcpO1xyXG5cclxuICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzQnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lciAuY29udGFpbmVyLXRpdGxlIC5wb3J0Zm9saW8tdGl0bGU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzAwMTQ2ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLXRpdGxlIC5wb3J0Zm9saW8tdGl0bGU6OmZpcnN0LWxldHRlciB7XG4gIGNvbG9yOiAjMDAxNDZlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLXByb2plY3RzIC5yb3cge1xuICBtaW4taGVpZ2h0OiA0MTBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmNvbnRhaW5lciAuY29udGFpbmVyLXByb2plY3RzIC5yb3cge1xuICAgIG1pbi1oZWlnaHQ6IDkyMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250YWluZXIgLmNvbnRhaW5lci1wcm9qZWN0cyAucm93IHtcbiAgICBtaW4taGVpZ2h0OiA3ODJweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuY29udGFpbmVyIC5jb250YWluZXItcHJvamVjdHMgLnJvdyB7XG4gICAgbWluLWhlaWdodDogNTUwcHg7XG4gIH1cbn1cbi5jb250YWluZXIgLmNvbnRhaW5lci1wcm9qZWN0cyAucm93IGltZyB7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMDA0MWEwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyIC5jb250YWluZXItcHJvamVjdHMgLnJvdyAuc3Bpbm5lci1ib3JkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uY29udGFpbmVyIC5jb250YWluZXItcGFnaW5hdGlvbiAucGFnZS1pdGVtIHtcbiAgei1pbmRleDogMDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmNvbnRhaW5lciAuY29udGFpbmVyLXBhZ2luYXRpb24gLnBhZ2UtaXRlbSB7XG4gICAgd2lkdGg6IDQwcHg7XG4gIH1cbn1cbi5jb250YWluZXIgLmNvbnRhaW5lci1wYWdpbmF0aW9uIC5wYWdlLWl0ZW0gYSB7XG4gIGNvbG9yOiAjRkZGO1xuICBiYWNrZ3JvdW5kOiAjMDA0MWEwO1xuICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNCk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5jb250YWluZXIgLmNvbnRhaW5lci1wYWdpbmF0aW9uIC5wYWdlLWl0ZW0gYSB7XG4gICAgZm9udC1zaXplOiAyMHB0O1xuICB9XG59XG4uY29udGFpbmVyIC5jb250YWluZXItcGFnaW5hdGlvbiAucGFnZS1pdGVtIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWI5MmJlO1xuICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLXBhZ2luYXRpb24gLnBhZ2UtaXRlbS5hY3RpdmUgYSB7XG4gIGJhY2tncm91bmQ6ICNlYjkyYmU7XG59XG4uY29udGFpbmVyIC5jb250YWluZXItcGFnaW5hdGlvbiAucGFnZS1pdGVtLmFjdGl2ZSBhOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogI2ViOTJiZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/container-portfolio/container-portfolio.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/container-portfolio/container-portfolio.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContainerPortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerPortfolioComponent", function() { return ContainerPortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _container_portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container-portfolio.service */ "./src/app/container-portfolio/container-portfolio.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");




let ContainerPortfolioComponent = class ContainerPortfolioComponent {
    constructor(renderer, ref, portfolioService, translate) {
        this.renderer = renderer;
        this.ref = ref;
        this.portfolioService = portfolioService;
        this.translate = translate;
        this.portfolio = [];
        this.portfolioTwoItems = [];
        this.loaderPortfolio = false;
        this.showModal = false;
        this.openedProject = {};
        this.loader = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.dataPortfolio();
    }
    dataPortfolio() {
        this.portfolioService.dataPortfolio().subscribe((portfolio) => {
            this.portfolio = portfolio.reverse();
            this.index = Math.round((this.portfolio.length / 2));
            this.setItemsByIndex(0);
            this.loader.emit();
        }, () => this.loader);
    }
    setItemsByIndex(index) {
        this.loaderPortfolio = true;
        setTimeout(() => {
            this.portfolioTwoItems[0] = this.portfolio[index * 2];
            this.portfolioTwoItems[1] = this.portfolio[(index * 2) + 1];
            this.loaderPortfolio = false;
        }, 500);
    }
    setClassActive(index) {
        for (const element of this.list.nativeElement.querySelectorAll('li')) {
            this.renderer.removeClass(element, 'active');
        }
        this.renderer.addClass(this.list.nativeElement.querySelector(`li:nth-of-type(${index})`), 'active');
        this.ref.markForCheck();
    }
    actionModal(project) {
        this.openedProject = project;
        this.showModal = true;
    }
};
ContainerPortfolioComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _container_portfolio_service__WEBPACK_IMPORTED_MODULE_2__["ContainerPortfolioService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ContainerPortfolioComponent.prototype, "loader", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('list', { static: false })
], ContainerPortfolioComponent.prototype, "list", void 0);
ContainerPortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-container-portfolio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./container-portfolio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/container-portfolio/container-portfolio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./container-portfolio.component.scss */ "./src/app/container-portfolio/container-portfolio.component.scss")).default]
    })
], ContainerPortfolioComponent);



/***/ }),

/***/ "./src/app/container-portfolio/container-portfolio.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/container-portfolio/container-portfolio.service.ts ***!
  \********************************************************************/
/*! exports provided: ContainerPortfolioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerPortfolioService", function() { return ContainerPortfolioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/api/api.service */ "./src/app/shared/api/api.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ContainerPortfolioService = class ContainerPortfolioService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    dataPortfolio() {
        return this.apiService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["endpoint"].portfolio);
    }
};
ContainerPortfolioService.ctorParameters = () => [
    { type: _shared_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
ContainerPortfolioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ContainerPortfolioService);



/***/ }),

/***/ "./src/app/container-skills/container-skills.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/container-skills/container-skills.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-container-geometric .container .container-title .portfolio-title:before {\n  background: #eb92be;\n  position: absolute;\n}\napp-container-geometric .container .container-title .portfolio-title::first-letter {\n  color: #eb92be;\n  font-weight: bolder;\n}\napp-container-geometric .container .container-skills .row div {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\napp-container-geometric .container .container-skills .row div h3 {\n  font-size: 15pt;\n}\napp-container-geometric .container .container-skills .row div ul {\n  font-size: 12pt;\n  list-style: none;\n  border-left: 3px solid rgba(255, 255, 255, 0.25);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVyLXNraWxscy9DOlxccmVwb3NpdG9yaW9zXFxwb3J0Zm9saW8vc3JjXFxhcHBcXGNvbnRhaW5lci1za2lsbHNcXGNvbnRhaW5lci1za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhaW5lci1za2lsbHMvY29udGFpbmVyLXNraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNUTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNMVjtBRFFRO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDTlY7QURhUTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7QUNYVjtBRGFVO0VBQ0UsZUFBQTtBQ1haO0FEY1U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnREFBQTtBQ1paIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVyLXNraWxscy9jb250YWluZXItc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vYXNzZXRzL3N0eWxlL3BhbGV0dGUuc2Nzc1wiO1xyXG5cclxuYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgLmNvbnRhaW5lci10aXRsZSB7XHJcbiAgICAgIC5wb3J0Zm9saW8tdGl0bGUge1xyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnNCcpO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6Zmlyc3QtbGV0dGVyIHtcclxuICAgICAgICAgIGNvbG9yOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzQnKTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lci1za2lsbHMge1xyXG4gICAgICAucm93IHtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG59IiwiYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMgLmNvbnRhaW5lciAuY29udGFpbmVyLXRpdGxlIC5wb3J0Zm9saW8tdGl0bGU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2ViOTJiZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMgLmNvbnRhaW5lciAuY29udGFpbmVyLXRpdGxlIC5wb3J0Zm9saW8tdGl0bGU6OmZpcnN0LWxldHRlciB7XG4gIGNvbG9yOiAjZWI5MmJlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMgLmNvbnRhaW5lciAuY29udGFpbmVyLXNraWxscyAucm93IGRpdiB7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5hcHAtY29udGFpbmVyLWdlb21ldHJpYyAuY29udGFpbmVyIC5jb250YWluZXItc2tpbGxzIC5yb3cgZGl2IGgzIHtcbiAgZm9udC1zaXplOiAxNXB0O1xufVxuYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMgLmNvbnRhaW5lciAuY29udGFpbmVyLXNraWxscyAucm93IGRpdiB1bCB7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/container-skills/container-skills.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/container-skills/container-skills.component.ts ***!
  \****************************************************************/
/*! exports provided: ContainerSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerSkillsComponent", function() { return ContainerSkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _container_skills_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container-skills.service */ "./src/app/container-skills/container-skills.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");




let ContainerSkillsComponent = class ContainerSkillsComponent {
    constructor(skillService, translate) {
        this.skillService = skillService;
        this.translate = translate;
        this.loader = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.skills = [];
    }
    set actionTranslate(changedLanguage) {
        this.setSkills();
    }
    ngOnInit() {
        // this.dataTechnologies();
        this.loader.emit();
        this.setSkills();
    }
    setSkills() {
        this.translate.get(['SKILLS.OTHERS', 'SKILLS.DATABASE', 'SKILLS.TEST', 'SKILLS.GIT']).subscribe((res) => {
            this.skills = [{
                    technology: 'Front-End',
                    value: [
                        'HTML 5',
                        'CSS 3',
                        'SCSS',
                        'SASS',
                        'COMPASS',
                        'Angular 9',
                        'Javascript',
                        'Typescript',
                        'jQuery / Ajax',
                        'Bootstrap',
                        'Material',
                        'Materialize',
                        'Foundation'
                    ]
                },
                {
                    technology: 'Back-End',
                    value: [
                        'Java',
                        'JPA',
                        'JWT (Tokens)',
                        'OAuth 2.0',
                        'Spring Boot',
                        'Spring MVC',
                        'Spring Security',
                        'Hibernate',
                        'Rest',
                        'Socket',
                        'Webservices'
                    ]
                },
                {
                    technology: res['SKILLS.OTHERS'],
                    value: [
                        res['SKILLS.GIT'],
                        'Scrum',
                        'Docker',
                        'Google Analytics',
                        'SEO'
                    ]
                },
                {
                    technology: res['SKILLS.DATABASE'],
                    value: [
                        'MongoDB',
                        'SQL',
                        'MySQL'
                    ]
                },
                {
                    technology: res['SKILLS.TEST'],
                    value: [
                        'Jersey',
                        'Jasmine',
                        'Karma',
                        'Phantom',
                        'JUnit'
                    ]
                }];
        });
    }
};
ContainerSkillsComponent.ctorParameters = () => [
    { type: _container_skills_service__WEBPACK_IMPORTED_MODULE_2__["ContainerSkillsService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContainerSkillsComponent.prototype, "actionTranslate", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ContainerSkillsComponent.prototype, "loader", void 0);
ContainerSkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-container-skills',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./container-skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/container-skills/container-skills.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./container-skills.component.scss */ "./src/app/container-skills/container-skills.component.scss")).default]
    })
], ContainerSkillsComponent);



/***/ }),

/***/ "./src/app/container-skills/container-skills.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/container-skills/container-skills.service.ts ***!
  \**************************************************************/
/*! exports provided: ContainerSkillsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerSkillsService", function() { return ContainerSkillsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/api/api.service */ "./src/app/shared/api/api.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ContainerSkillsService = class ContainerSkillsService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    dataTechnologies() {
        return this.apiService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["endpoint"].skills).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((resp) => resp.result));
    }
};
ContainerSkillsService.ctorParameters = () => [
    { type: _shared_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
ContainerSkillsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ContainerSkillsService);



/***/ }),

/***/ "./src/app/shared/api/api.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/api/api.service.ts ***!
  \*******************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
        this.request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
    }
    get(url, request) {
        if (request) {
            Object.keys(request).map(key => {
                this.request.append(key, request[key]);
            });
        }
        return this.http.get(url, { headers: this.headers, params: this.request });
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/shared/components/container-geometric/container-geometric.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/container-geometric/container-geometric.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-geometric .geometric {\n  height: 100px;\n  background-repeat: no-repeat;\n  background-position: center top;\n  background-size: 100% 100%;\n  content: \"\";\n  top: 0;\n}\n.container-geometric .subcontainer-geometric {\n  top: -1px;\n}\n.pink {\n  background: #eb92be;\n}\n.blue {\n  background: #0041a0;\n}\n.light-blue {\n  background: #00e1e1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29udGFpbmVyLWdlb21ldHJpYy9DOlxccmVwb3NpdG9yaW9zXFxwb3J0Zm9saW8vc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcY29udGFpbmVyLWdlb21ldHJpY1xcY29udGFpbmVyLWdlb21ldHJpYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29udGFpbmVyLWdlb21ldHJpYy9jb250YWluZXItZ2VvbWV0cmljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0FDRko7QURLRTtFQUNFLFNBQUE7QUNISjtBRE9BO0VBQ0UsbUJBQUE7QUNKRjtBRE9BO0VBQ0UsbUJBQUE7QUNKRjtBRE9BO0VBQ0UsbUJBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbnRhaW5lci1nZW9tZXRyaWMvY29udGFpbmVyLWdlb21ldHJpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uL2Fzc2V0cy9zdHlsZS9wYWxldHRlLnNjc3NcIjtcclxuXHJcbi5jb250YWluZXItZ2VvbWV0cmljIHtcclxuICAuZ2VvbWV0cmljIHtcclxuICAgIGhlaWdodCAgICAgICAgICAgICA6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQgIDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcclxuICAgIGJhY2tncm91bmQtc2l6ZSAgICA6IDEwMCUgMTAwJTtcclxuICAgIGNvbnRlbnQgICAgICAgICAgICA6ICcnO1xyXG4gICAgdG9wICAgICAgICAgICAgICAgIDogMDtcclxuICB9XHJcblxyXG4gIC5zdWJjb250YWluZXItZ2VvbWV0cmljIHtcclxuICAgIHRvcDogLTFweDtcclxuICB9XHJcbn1cclxuXHJcbi5waW5rIHtcclxuICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzQnKTtcclxufVxyXG5cclxuLmJsdWUge1xyXG4gIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMicpO1xyXG59XHJcblxyXG4ubGlnaHQtYmx1ZSB7XHJcbiAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICczJyk7XHJcbn0iLCIuY29udGFpbmVyLWdlb21ldHJpYyAuZ2VvbWV0cmljIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMDtcbn1cbi5jb250YWluZXItZ2VvbWV0cmljIC5zdWJjb250YWluZXItZ2VvbWV0cmljIHtcbiAgdG9wOiAtMXB4O1xufVxuXG4ucGluayB7XG4gIGJhY2tncm91bmQ6ICNlYjkyYmU7XG59XG5cbi5ibHVlIHtcbiAgYmFja2dyb3VuZDogIzAwNDFhMDtcbn1cblxuLmxpZ2h0LWJsdWUge1xuICBiYWNrZ3JvdW5kOiAjMDBlMWUxO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/container-geometric/container-geometric.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/container-geometric/container-geometric.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ContainerGeometricComponent, ContainerGeometric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerGeometricComponent", function() { return ContainerGeometricComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerGeometric", function() { return ContainerGeometric; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContainerGeometricComponent = class ContainerGeometricComponent {
    constructor() {
        this.reverse = false;
    }
    ngOnInit() {
        switch (this.backgroundColor) {
            case 1:
                this._background = 'assets/img/wallpaper1.png';
                break;
            case 2:
                this._background = 'assets/img/wallpaper2.png';
                break;
            case 3:
                this._background = 'assets/img/wallpaper3.png';
                break;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContainerGeometricComponent.prototype, "backgroundColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContainerGeometricComponent.prototype, "color", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContainerGeometricComponent.prototype, "reverse", void 0);
ContainerGeometricComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-container-geometric',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./container-geometric.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/container-geometric/container-geometric.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./container-geometric.component.scss */ "./src/app/shared/components/container-geometric/container-geometric.component.scss")).default]
    })
], ContainerGeometricComponent);

var ContainerGeometric;
(function (ContainerGeometric) {
    ContainerGeometric[ContainerGeometric["Blue"] = 1] = "Blue";
    ContainerGeometric[ContainerGeometric["LightBlue"] = 2] = "LightBlue";
    ContainerGeometric[ContainerGeometric["Pink"] = 3] = "Pink";
})(ContainerGeometric || (ContainerGeometric = {}));


/***/ }),

/***/ "./src/app/shared/components/dropdown/dropdown.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/dropdown/dropdown.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-dropdown {\n  opacity: 1;\n  -webkit-transition: 500ms opacity linear;\n  transition: 500ms opacity linear;\n}\n.container-dropdown * {\n  cursor: pointer;\n}\n.container-dropdown .container-label {\n  -webkit-transition: 200ms linear;\n  transition: 200ms linear;\n  font-size: 9pt;\n}\n.container-dropdown .container-label:hover {\n  -webkit-transition: 200ms linear;\n  transition: 200ms linear;\n  color: #00e1e1;\n}\n.container-dropdown ul {\n  font-size: 10pt;\n  opacity: 0;\n  -webkit-transition: 500ms opacity linear;\n  transition: 500ms opacity linear;\n  list-style: none;\n  background: #FFF;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.14);\n  display: none;\n  opacity: 0;\n  -webkit-transition: 200ms all opacity;\n  transition: 200ms all opacity;\n}\n.container-dropdown ul.effect-opacity {\n  opacity: 1;\n  -webkit-transition: 200ms all opacity;\n  transition: 200ms all opacity;\n}\n.container-dropdown ul.active {\n  z-index: 100;\n  display: block;\n}\n.container-dropdown ul.active li {\n  -webkit-transition: 400ms linear;\n  transition: 400ms linear;\n}\n.container-dropdown ul.active li:hover {\n  -webkit-transition: 400ms linear;\n  transition: 400ms linear;\n  background: rgba(0, 65, 160, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHJvcGRvd24vQzpcXHJlcG9zaXRvcmlvc1xccG9ydGZvbGlvL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGRyb3Bkb3duXFxkcm9wZG93bi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxVQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtBQ0RGO0FER0U7RUFDRSxlQUFBO0FDREo7QURJRTtFQUNFLGdDQUFBO0VBQUEsd0JBQUE7RUFDQSxjQUFBO0FDRko7QURJSTtFQUNFLGdDQUFBO0VBQUEsd0JBQUE7RUFDQSxjQUFBO0FDRk47QURNRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUFBLDZCQUFBO0FDSko7QURNSTtFQUNFLFVBQUE7RUFDQSxxQ0FBQTtFQUFBLDZCQUFBO0FDSk47QURPSTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FDTE47QURPTTtFQUNFLGdDQUFBO0VBQUEsd0JBQUE7QUNMUjtBRE9RO0VBQ0UsZ0NBQUE7RUFBQSx3QkFBQTtFQUNBLGlDQUFBO0FDTFYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uL2Fzc2V0cy9zdHlsZS9wYWxldHRlLnNjc3NcIjtcclxuXHJcbi5jb250YWluZXItZHJvcGRvd24ge1xyXG4gIG9wYWNpdHkgICA6IDE7XHJcbiAgdHJhbnNpdGlvbjogNTAwbXMgb3BhY2l0eSBsaW5lYXI7XHJcblxyXG4gICoge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci1sYWJlbCB7XHJcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBsaW5lYXI7XHJcbiAgICBmb250LXNpemUgOiA5cHQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zaXRpb246IDIwMG1zIGxpbmVhcjtcclxuICAgICAgY29sb3IgICAgIDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICczJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBmb250LXNpemUgICAgOiAxMHB0O1xyXG4gICAgb3BhY2l0eSAgICAgIDogMDtcclxuICAgIHRyYW5zaXRpb24gICA6IDUwMG1zIG9wYWNpdHkgbGluZWFyO1xyXG4gICAgbGlzdC1zdHlsZSAgIDogbm9uZTtcclxuICAgIGJhY2tncm91bmQgICA6ICNGRkY7XHJcbiAgICBib3gtc2hhZG93ICAgOiAycHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE0KTtcclxuICAgIGRpc3BsYXkgICAgICA6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgYWxsIG9wYWNpdHk7XHJcblxyXG4gICAgJi5lZmZlY3Qtb3BhY2l0eSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zaXRpb246IDIwMG1zIGFsbCBvcGFjaXR5O1xyXG4gICAgfVxyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgei1pbmRleCAgIDogMTAwO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICBcclxuICAgICAgbGkge1xyXG4gICAgICAgIHRyYW5zaXRpb246IDQwMG1zIGxpbmVhcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiA0MDBtcyBsaW5lYXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5LW9wYWNpdHktMTAlJywgJzInKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCIuY29udGFpbmVyLWRyb3Bkb3duIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogNTAwbXMgb3BhY2l0eSBsaW5lYXI7XG59XG4uY29udGFpbmVyLWRyb3Bkb3duICoge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyLWRyb3Bkb3duIC5jb250YWluZXItbGFiZWwge1xuICB0cmFuc2l0aW9uOiAyMDBtcyBsaW5lYXI7XG4gIGZvbnQtc2l6ZTogOXB0O1xufVxuLmNvbnRhaW5lci1kcm9wZG93biAuY29udGFpbmVyLWxhYmVsOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMjAwbXMgbGluZWFyO1xuICBjb2xvcjogIzAwZTFlMTtcbn1cbi5jb250YWluZXItZHJvcGRvd24gdWwge1xuICBmb250LXNpemU6IDEwcHQ7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDUwMG1zIG9wYWNpdHkgbGluZWFyO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xuICBkaXNwbGF5OiBub25lO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAyMDBtcyBhbGwgb3BhY2l0eTtcbn1cbi5jb250YWluZXItZHJvcGRvd24gdWwuZWZmZWN0LW9wYWNpdHkge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiAyMDBtcyBhbGwgb3BhY2l0eTtcbn1cbi5jb250YWluZXItZHJvcGRvd24gdWwuYWN0aXZlIHtcbiAgei1pbmRleDogMTAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jb250YWluZXItZHJvcGRvd24gdWwuYWN0aXZlIGxpIHtcbiAgdHJhbnNpdGlvbjogNDAwbXMgbGluZWFyO1xufVxuLmNvbnRhaW5lci1kcm9wZG93biB1bC5hY3RpdmUgbGk6aG92ZXIge1xuICB0cmFuc2l0aW9uOiA0MDBtcyBsaW5lYXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgNjUsIDE2MCwgMC4xKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/dropdown/dropdown.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/dropdown/dropdown.component.ts ***!
  \******************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DropdownComponent = class DropdownComponent {
    constructor(ref) {
        this.ref = ref;
        this.items = [];
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isActive = false;
        this.effectOpacity = false;
    }
    ngOnChanges() {
        this.label = this.items.length ? this.items.find(item => item.selected === true).label : '';
    }
    open(isActive, effectOpacity) {
        this.isActive = isActive;
        setTimeout(() => this.effectOpacity = effectOpacity, 250);
    }
    action(item) {
        this.value.emit(item.value);
        this.label = item.label;
        this.effectOpacity = false;
        this.isActive = false;
    }
    onClick(event) {
        if (!this.ref.nativeElement.contains(event.target)) {
            this.effectOpacity = false;
            this.isActive = false;
        }
    }
};
DropdownComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DropdownComponent.prototype, "items", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DropdownComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event']),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
], DropdownComponent.prototype, "onClick", null);
DropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dropdown',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dropdown.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dropdown/dropdown.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dropdown.component.scss */ "./src/app/shared/components/dropdown/dropdown.component.scss")).default]
    })
], DropdownComponent);



/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer {\n  background: #000;\n  color: #FFF;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL0M6XFxyZXBvc2l0b3Jpb3NcXHBvcnRmb2xpby9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi9hc3NldHMvc3R5bGUvcGFsZXR0ZS5zY3NzXCI7XHJcblxyXG5mb290ZXJ7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxuICBjb2xvcjogI0ZGRjtcclxuICBib3JkZXI6IG5vbmU7XHJcbn0iLCJmb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI0ZGRjtcbiAgYm9yZGVyOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
        this.year = new Date().getFullYear();
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/components/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/components/modal/modal.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/modal/modal.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-modal {\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 99;\n  top: 0;\n  color: #FFF;\n}\n.container-modal .container-close {\n  right: 10px;\n  top: 5px;\n  z-index: 1;\n}\n.container-modal .container-close i {\n  font-size: 30pt;\n  cursor: pointer;\n}\n.container-modal .container-warning {\n  display: none;\n}\n@media only screen and (max-width: 600px) {\n  .container-modal .container-warning {\n    display: block;\n  }\n}\n.container-modal .container-warning label {\n  font-size: 15pt;\n}\n.container-modal .container-elements {\n  height: 90%;\n}\n@media only screen and (max-width: 500px) {\n  .container-modal .container-elements .container-img {\n    padding: 0;\n    width: 100%;\n    max-width: 100%;\n    position: absolute;\n    left: 0;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n  }\n}\n.container-modal .container-elements .container-img img {\n  max-width: 85%;\n  max-height: 90%;\n  -webkit-animation: 600ms multiple-opacities-on;\n          animation: 600ms multiple-opacities-on;\n}\n@media only screen and (max-width: 500px) {\n  .container-modal .container-elements .container-img img {\n    width: auto;\n    position: relative;\n    max-width: 96%;\n    max-height: 65vh;\n  }\n}\n.container-modal .container-elements .container-img img.opacity-effect-before {\n  opacity: 0;\n  -webkit-animation: 600ms multiple-opacities-on;\n          animation: 600ms multiple-opacities-on;\n}\n.container-modal .container-elements .container-img img.opacity-effect-after {\n  opacity: 1;\n  -webkit-animation: 600ms multiple-opacities-on;\n          animation: 600ms multiple-opacities-on;\n}\n@media only screen and (max-width: 500px) {\n  .container-modal .container-elements .container-arrow {\n    position: absolute;\n    width: 65px;\n    height: 65px;\n    bottom: 0;\n  }\n}\n@media only screen and (max-width: 500px) {\n  .container-modal .container-elements .container-arrow:first-child {\n    left: 30px;\n  }\n}\n@media only screen and (max-width: 500px) {\n  .container-modal .container-elements .container-arrow:last-child {\n    right: 30px;\n  }\n}\n.container-modal .container-elements .container-arrow i {\n  font-size: 40pt;\n  cursor: pointer;\n  border: 1px solid #FFF;\n  border-radius: 5px;\n  padding: 10px 20px;\n}\n@media only screen and (max-width: 767px) {\n  .container-modal .container-elements .container-arrow i {\n    font-size: 20pt;\n  }\n}\n.container-modal .container-quantity {\n  height: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvQzpcXHJlcG9zaXRvcmlvc1xccG9ydGZvbGlvL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXG1vZGFsXFxtb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNDSjtBRENJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNDTjtBREdFO0VBQ0UsYUFBQTtBQ0RKO0FER0k7RUFIRjtJQUlJLGNBQUE7RUNBSjtBQUNGO0FERUk7RUFDRSxlQUFBO0FDQU47QURJRTtFQUNFLFdBQUE7QUNGSjtBREtNO0VBREY7SUFFSSxVQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0lBQ0EsbUNBQUE7WUFBQSwyQkFBQTtFQ0ZOO0FBQ0Y7QURJTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ0ZSO0FESVE7RUFMRjtJQU1JLFdBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQ0RSO0FBQ0Y7QURHUTtFQUNFLFVBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FDRFY7QURJUTtFQUNFLFVBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FDRlY7QURRTTtFQURGO0lBRUksa0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFNBQUE7RUNMTjtBQUNGO0FEUVE7RUFERjtJQUVJLFVBQUE7RUNMUjtBQUNGO0FEU1E7RUFERjtJQUVJLFdBQUE7RUNOUjtBQUNGO0FEU007RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ1BSO0FEU1E7RUFQRjtJQVFJLGVBQUE7RUNOUjtBQUNGO0FEV0U7RUFDRSxXQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItbW9kYWwge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICB6LWluZGV4ICAgOiA5OTtcclxuICB0b3AgICAgICAgOiAwO1xyXG4gIGNvbG9yICAgICA6ICNGRkY7XHJcblxyXG4gIC5jb250YWluZXItY2xvc2Uge1xyXG4gICAgcmlnaHQgIDogMTBweDtcclxuICAgIHRvcCAgICA6IDVweDtcclxuICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBwdDtcclxuICAgICAgY3Vyc29yICAgOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci13YXJuaW5nIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVwdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXItZWxlbWVudHMge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcblxyXG4gICAgLmNvbnRhaW5lci1pbWcge1xyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgcGFkZGluZyAgOiAwO1xyXG4gICAgICAgIHdpZHRoICAgIDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0ICAgICA6IDA7XHJcbiAgICAgICAgdG9wICAgICAgOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aCA6IDg1JTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgYW5pbWF0aW9uIDogNjAwbXMgbXVsdGlwbGUtb3BhY2l0aWVzLW9uO1xyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgICB3aWR0aCAgICAgOiBhdXRvO1xyXG4gICAgICAgICAgcG9zaXRpb24gIDogcmVsYXRpdmU7XHJcbiAgICAgICAgICBtYXgtd2lkdGggOiA5NiU7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA2NXZoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5vcGFjaXR5LWVmZmVjdC1iZWZvcmUge1xyXG4gICAgICAgICAgb3BhY2l0eSAgOiAwO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiA2MDBtcyBtdWx0aXBsZS1vcGFjaXRpZXMtb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLm9wYWNpdHktZWZmZWN0LWFmdGVyIHtcclxuICAgICAgICAgIG9wYWNpdHkgIDogMTtcclxuICAgICAgICAgIGFuaW1hdGlvbjogNjAwbXMgbXVsdGlwbGUtb3BhY2l0aWVzLW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXItYXJyb3cge1xyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoICAgOiA2NXB4O1xyXG4gICAgICAgIGhlaWdodCAgOiA2NXB4O1xyXG4gICAgICAgIGJvdHRvbSAgOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgICBsZWZ0OiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgICByaWdodDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZSAgICA6IDQwcHQ7XHJcbiAgICAgICAgY3Vyc29yICAgICAgIDogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXIgICAgICAgOiAxcHggc29saWQgI0ZGRjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZyAgICAgIDogMTBweCAyMHB4O1xyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLXF1YW50aXR5IHtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gIH1cclxuXHJcbn0iLCIuY29udGFpbmVyLW1vZGFsIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICB6LWluZGV4OiA5OTtcbiAgdG9wOiAwO1xuICBjb2xvcjogI0ZGRjtcbn1cbi5jb250YWluZXItbW9kYWwgLmNvbnRhaW5lci1jbG9zZSB7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDVweDtcbiAgei1pbmRleDogMTtcbn1cbi5jb250YWluZXItbW9kYWwgLmNvbnRhaW5lci1jbG9zZSBpIHtcbiAgZm9udC1zaXplOiAzMHB0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyLW1vZGFsIC5jb250YWluZXItd2FybmluZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXItbW9kYWwgLmNvbnRhaW5lci13YXJuaW5nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLmNvbnRhaW5lci1tb2RhbCAuY29udGFpbmVyLXdhcm5pbmcgbGFiZWwge1xuICBmb250LXNpemU6IDE1cHQ7XG59XG4uY29udGFpbmVyLW1vZGFsIC5jb250YWluZXItZWxlbWVudHMge1xuICBoZWlnaHQ6IDkwJTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRhaW5lci1tb2RhbCAuY29udGFpbmVyLWVsZW1lbnRzIC5jb250YWluZXItaW1nIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbn1cbi5jb250YWluZXItbW9kYWwgLmNvbnRhaW5lci1lbGVtZW50cyAuY29udGFpbmVyLWltZyBpbWcge1xuICBtYXgtd2lkdGg6IDg1JTtcbiAgbWF4LWhlaWdodDogOTAlO1xuICBhbmltYXRpb246IDYwMG1zIG11bHRpcGxlLW9wYWNpdGllcy1vbjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRhaW5lci1tb2RhbCAuY29udGFpbmVyLWVsZW1lbnRzIC5jb250YWluZXItaW1nIGltZyB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC13aWR0aDogOTYlO1xuICAgIG1heC1oZWlnaHQ6IDY1dmg7XG4gIH1cbn1cbi5jb250YWluZXItbW9kYWwgLmNvbnRhaW5lci1lbGVtZW50cyAuY29udGFpbmVyLWltZyBpbWcub3BhY2l0eS1lZmZlY3QtYmVmb3JlIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiA2MDBtcyBtdWx0aXBsZS1vcGFjaXRpZXMtb247XG59XG4uY29udGFpbmVyLW1vZGFsIC5jb250YWluZXItZWxlbWVudHMgLmNvbnRhaW5lci1pbWcgaW1nLm9wYWNpdHktZWZmZWN0LWFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uOiA2MDBtcyBtdWx0aXBsZS1vcGFjaXRpZXMtb247XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5jb250YWluZXItbW9kYWwgLmNvbnRhaW5lci1lbGVtZW50cyAuY29udGFpbmVyLWFycm93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIGJvdHRvbTogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuY29udGFpbmVyLW1vZGFsIC5jb250YWluZXItZWxlbWVudHMgLmNvbnRhaW5lci1hcnJvdzpmaXJzdC1jaGlsZCB7XG4gICAgbGVmdDogMzBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuY29udGFpbmVyLW1vZGFsIC5jb250YWluZXItZWxlbWVudHMgLmNvbnRhaW5lci1hcnJvdzpsYXN0LWNoaWxkIHtcbiAgICByaWdodDogMzBweDtcbiAgfVxufVxuLmNvbnRhaW5lci1tb2RhbCAuY29udGFpbmVyLWVsZW1lbnRzIC5jb250YWluZXItYXJyb3cgaSB7XG4gIGZvbnQtc2l6ZTogNDBwdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRhaW5lci1tb2RhbCAuY29udGFpbmVyLWVsZW1lbnRzIC5jb250YWluZXItYXJyb3cgaSB7XG4gICAgZm9udC1zaXplOiAyMHB0O1xuICB9XG59XG4uY29udGFpbmVyLW1vZGFsIC5jb250YWluZXItcXVhbnRpdHkge1xuICBoZWlnaHQ6IDEwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/modal/modal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/modal/modal.component.ts ***!
  \************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let ModalComponent = class ModalComponent {
    constructor(renderer, translate) {
        this.renderer = renderer;
        this.translate = translate;
        this.showModal = false;
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.project = {};
        this.index = 0;
    }
    set actionModal(showModal) {
        this._actionModal(showModal);
    }
    set setProject(project) {
        this.project = project;
    }
    _actionModal(showModal) {
        this.showModal = showModal;
        this.index = 0;
        if (this.showModal) {
            document.querySelector('body').style.overflowY = 'hidden';
        }
        else {
            this.closed.emit();
            document.querySelector('body').style.overflowY = 'scroll';
        }
    }
    nextImage() {
        const auxIndex = this.index + 1;
        if (this.project.galerias[auxIndex].url_galeria.length) {
            this.opacity();
            this.index++;
        }
    }
    previousImage() {
        const auxIndex = this.index - 1;
        if (this.project.galerias[auxIndex].url_galeria.length) {
            this.opacity();
            this.index--;
        }
    }
    opacity() {
        this.renderer.removeClass(this.img.nativeElement, 'opacity-effect-after');
        this.renderer.addClass(this.img.nativeElement, 'opacity-effect-before');
        setTimeout(() => {
            this.renderer.removeClass(this.img.nativeElement, 'opacity-effect-before');
            this.renderer.addClass(this.img.nativeElement, 'opacity-effect-after');
        }, 350);
    }
    actionClose() {
        this._actionModal(false);
        this.renderer.removeClass(this.img.nativeElement, 'opacity-effect');
    }
};
ModalComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalComponent.prototype, "actionModal", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ModalComponent.prototype, "closed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalComponent.prototype, "setProject", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('img', { static: false })
], ModalComponent.prototype, "img", void 0);
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/modal/modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.component.scss */ "./src/app/shared/components/modal/modal.component.scss")).default]
    })
], ModalComponent);



/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav {\n  z-index: 2;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.14);\n}\n@media only screen and (max-width: 575px) {\n  nav .container-logo {\n    padding: 0;\n  }\n}\nnav .container-logo img {\n  width: 150px;\n}\n@media only screen and (max-width: 767px) {\n  nav .container-logo img {\n    width: 130px;\n  }\n}\nnav app-dropdown {\n  right: 15px;\n  top: -12px;\n  width: 81px;\n}\n@media only screen and (max-width: 767px) {\n  nav app-dropdown {\n    right: 50px;\n    top: 14px;\n  }\n}\nnav .container-items {\n  font-size: 13pt;\n}\n@media only screen and (max-width: 767px) {\n  nav .container-items {\n    min-height: 100%;\n    width: 0;\n    height: 100%;\n    -webkit-transition: 500ms ease;\n    transition: 500ms ease;\n    left: 0;\n    top: 0;\n    position: fixed;\n  }\n}\n@media only screen and (max-width: 767px) {\n  nav .container-items ul {\n    height: auto;\n    display: none;\n  }\n}\nnav .container-items ul li a {\n  color: #0041a0;\n  -webkit-transition: 200ms linear;\n  transition: 200ms linear;\n  cursor: pointer;\n}\nnav .container-items ul li a:hover {\n  -webkit-transition: 200ms linear;\n  transition: 200ms linear;\n  color: #00e1e1;\n}\n@media only screen and (max-width: 767px) {\n  nav .container-items ul li a {\n    color: #FFF;\n    display: none;\n    font-size: 20pt;\n  }\n}\nnav .container-items.openMenu {\n  background: #eb92be;\n  -webkit-transition: 250ms ease;\n  transition: 250ms ease;\n  width: 100%;\n  overflow-y: scroll;\n}\nnav .container-items.openMenu ul {\n  display: block;\n}\nnav .container-items.openMenu ul li a {\n  display: block;\n}\nnav .container-icons {\n  right: 0;\n  top: 0;\n  height: 100%;\n}\nnav .container-icons i {\n  font-size: 30px;\n}\nnav .container-icons i.icon-reorder {\n  color: #00146e;\n}\nnav .container-icons i.icon-remove {\n  color: #00146e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL0M6XFxyZXBvc2l0b3Jpb3NcXHBvcnRmb2xpby9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFVBQUE7RUFDQSw0Q0FBQTtBQ0RGO0FESUk7RUFERjtJQUVJLFVBQUE7RUNESjtBQUNGO0FER0k7RUFDRSxZQUFBO0FDRE47QURHTTtFQUhGO0lBSUksWUFBQTtFQ0FOO0FBQ0Y7QURJRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0ZKO0FESUk7RUFMRjtJQU1JLFdBQUE7SUFDQSxTQUFBO0VDREo7QUFDRjtBRElFO0VBQ0UsZUFBQTtBQ0ZKO0FESUk7RUFIRjtJQUlJLGdCQUFBO0lBQ0EsUUFBQTtJQUNBLFlBQUE7SUFDQSw4QkFBQTtJQUFBLHNCQUFBO0lBQ0EsT0FBQTtJQUNBLE1BQUE7SUFDQSxlQUFBO0VDREo7QUFDRjtBRElNO0VBREY7SUFFSSxZQUFBO0lBQ0EsYUFBQTtFQ0ROO0FBQ0Y7QURJUTtFQUNFLGNBQUE7RUFDQSxnQ0FBQTtFQUFBLHdCQUFBO0VBQ0EsZUFBQTtBQ0ZWO0FESVU7RUFDRSxnQ0FBQTtFQUFBLHdCQUFBO0VBQ0EsY0FBQTtBQ0ZaO0FES1U7RUFWRjtJQVdJLFdBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtFQ0ZWO0FBQ0Y7QURPSTtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7RUFBQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0xOO0FET007RUFDRSxjQUFBO0FDTFI7QURRVTtFQUNFLGNBQUE7QUNOWjtBRGFFO0VBQ0UsUUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0FDWEo7QURhSTtFQUNFLGVBQUE7QUNYTjtBRGFNO0VBQ0UsY0FBQTtBQ1hSO0FEY007RUFDRSxjQUFBO0FDWlIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vYXNzZXRzL3N0eWxlL3BhbGV0dGUuc2Nzc1wiO1xyXG5cclxubmF2IHtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xyXG5cclxuICAuY29udGFpbmVyLWxvZ28ge1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBwYWRkaW5nOjA7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXBwLWRyb3Bkb3duIHtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiAtMTJweDtcclxuICAgIHdpZHRoOiA4MXB4O1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgcmlnaHQ6IDUwcHg7XHJcbiAgICAgIHRvcDogMTRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXItaXRlbXMge1xyXG4gICAgZm9udC1zaXplOiAxM3B0O1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgdHJhbnNpdGlvbjogNTAwbXMgZWFzZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdWwge1xyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxpIHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzInKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zIGxpbmVhcjtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjAwbXMgbGluZWFyO1xyXG4gICAgICAgICAgICBjb2xvcjogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICczJyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYub3Blbk1lbnUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzQnKTtcclxuICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci1pY29ucyB7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBpIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG5cclxuICAgICAgJi5pY29uLXJlb3JkZXIge1xyXG4gICAgICAgIGNvbG9yOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzEnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5pY29uLXJlbW92ZSB7XHJcbiAgICAgICAgY29sb3I6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwibmF2IHtcbiAgei1pbmRleDogMjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNCk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIG5hdiAuY29udGFpbmVyLWxvZ28ge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbm5hdiAuY29udGFpbmVyLWxvZ28gaW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICBuYXYgLmNvbnRhaW5lci1sb2dvIGltZyB7XG4gICAgd2lkdGg6IDEzMHB4O1xuICB9XG59XG5uYXYgYXBwLWRyb3Bkb3duIHtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogLTEycHg7XG4gIHdpZHRoOiA4MXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICBuYXYgYXBwLWRyb3Bkb3duIHtcbiAgICByaWdodDogNTBweDtcbiAgICB0b3A6IDE0cHg7XG4gIH1cbn1cbm5hdiAuY29udGFpbmVyLWl0ZW1zIHtcbiAgZm9udC1zaXplOiAxM3B0O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICBuYXYgLmNvbnRhaW5lci1pdGVtcyB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogNTAwbXMgZWFzZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgbmF2IC5jb250YWluZXItaXRlbXMgdWwge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5uYXYgLmNvbnRhaW5lci1pdGVtcyB1bCBsaSBhIHtcbiAgY29sb3I6ICMwMDQxYTA7XG4gIHRyYW5zaXRpb246IDIwMG1zIGxpbmVhcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubmF2IC5jb250YWluZXItaXRlbXMgdWwgbGkgYTpob3ZlciB7XG4gIHRyYW5zaXRpb246IDIwMG1zIGxpbmVhcjtcbiAgY29sb3I6ICMwMGUxZTE7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIG5hdiAuY29udGFpbmVyLWl0ZW1zIHVsIGxpIGEge1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyMHB0O1xuICB9XG59XG5uYXYgLmNvbnRhaW5lci1pdGVtcy5vcGVuTWVudSB7XG4gIGJhY2tncm91bmQ6ICNlYjkyYmU7XG4gIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5uYXYgLmNvbnRhaW5lci1pdGVtcy5vcGVuTWVudSB1bCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxubmF2IC5jb250YWluZXItaXRlbXMub3Blbk1lbnUgdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxubmF2IC5jb250YWluZXItaWNvbnMge1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5uYXYgLmNvbnRhaW5lci1pY29ucyBpIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxubmF2IC5jb250YWluZXItaWNvbnMgaS5pY29uLXJlb3JkZXIge1xuICBjb2xvcjogIzAwMTQ2ZTtcbn1cbm5hdiAuY29udGFpbmVyLWljb25zIGkuaWNvbi1yZW1vdmUge1xuICBjb2xvcjogIzAwMTQ2ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_models_Language_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/models/Language.enum */ "./src/app/shared/models/Language.enum.ts");




let NavbarComponent = class NavbarComponent {
    constructor(translate) {
        this.translate = translate;
        this.loader = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openedMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changedLanguage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.navbar = [];
        this.openMenu = false;
        this.language = [];
    }
    ngOnInit() {
        // this.dataNavbar();
        this.loader.emit();
        this.translate.setDefaultLang('en');
        this.translateAction(_shared_models_Language_enum__WEBPACK_IMPORTED_MODULE_3__["Language"].English);
    }
    lockScrollBody() {
        this.openMenu ? document.querySelector('body').style.overflowY = 'hidden' : document.querySelector('body').style.overflowY = 'scroll';
    }
    navbarAction(isOpen) {
        this.openMenu = isOpen;
        this.openedMenu.emit(isOpen);
        this.lockScrollBody();
    }
    translateAction(id) {
        this.setLanguage(id);
        this.setTranslateLanguage(id);
        this.setTranslateNavbar();
        this.changedLanguage.emit(id);
    }
    setPositionScroll(id) {
        const axisY = document.getElementById(id.replace('#', '')).getBoundingClientRect();
        window.scrollBy(0, axisY.top - 100);
    }
    setLanguage(id) {
        if (id === _shared_models_Language_enum__WEBPACK_IMPORTED_MODULE_3__["Language"].English) {
            this.translate.use('en');
        }
        else if (id === _shared_models_Language_enum__WEBPACK_IMPORTED_MODULE_3__["Language"].Portuguese) {
            this.translate.use('br');
        }
        else {
            this.translate.use('esp');
        }
    }
    setTranslateLanguage(id) {
        this.translate.get(['LANGUAGE.ENG', 'LANGUAGE.BR', 'LANGUAGE.SPA']).subscribe((res) => {
            this.language = [{
                    label: res['LANGUAGE.ENG'],
                    value: 0,
                    selected: false
                },
                {
                    label: res['LANGUAGE.BR'],
                    value: 1,
                    selected: false
                },
                {
                    label: res['LANGUAGE.SPA'],
                    value: 2,
                    selected: false
                }];
            this.language.find(language => language.value === id).selected = true;
        });
    }
    setTranslateNavbar() {
        this.translate.get(['COMMON.ABOUT', 'COMMON.SKILLS', 'COMMON.PORTFOLIO', 'COMMON.CONTACT']).subscribe((res) => {
            this.navbar = [{
                    name: res['COMMON.ABOUT'],
                    link: '#about',
                },
                {
                    name: res['COMMON.SKILLS'],
                    link: '#skills',
                },
                {
                    name: res['COMMON.PORTFOLIO'],
                    link: '#portfolio',
                },
                {
                    name: res['COMMON.CONTACT'],
                    link: '#contact',
                }];
        });
    }
    onResize(event) {
        if (event.target.innerWidth > 767 && this.openMenu === true) {
            this.openMenu = false;
            this.openedMenu.emit(false);
            this.lockScrollBody();
        }
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NavbarComponent.prototype, "loader", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NavbarComponent.prototype, "openedMenu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NavbarComponent.prototype, "changedLanguage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], NavbarComponent.prototype, "onResize", null);
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/components/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/shared/models/Language.enum.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/Language.enum.ts ***!
  \************************************************/
/*! exports provided: Language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Language;
(function (Language) {
    Language[Language["English"] = 0] = "English";
    Language[Language["Portuguese"] = 1] = "Portuguese";
    Language[Language["Spanish"] = 2] = "Spanish";
})(Language || (Language = {}));


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, endpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
const endpoint = {
    skills: 'https://www.mocky.io/v2/5e337f553000008300d95f36',
    navbar: 'https://www.mocky.io/v2/5e25127a2f00008600ce2794',
    about: 'https://www.mocky.io/v2/5e335317320000bae294d524',
    portfolio: 'https://www.mocky.io/v2/5e3434273000008245d9637d'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\repositorios\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map