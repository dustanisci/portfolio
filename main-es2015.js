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
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"about\" class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"container-title col-12\">\r\n      <h2 data-aos=\"fade-right\" data-aos-easing=\"linear\" data-aos-duration=\"500\" class=\"portfolio-title position-relative\" >{{ 'COMMON.ABOUT' | translate }}</h2>\r\n    </div>\r\n\r\n    <div class=\"container-photo flex-column col-lg-5 col-sm-12 mt-md-5 pt-4 text-center pt-4 d-lg-flex align-items-center justify-content-center\">\r\n      <img data-aos=\"flip-left\" data-aos-easing=\"linear\" data-aos-duration=\"700\" class=\"mt-80\" src=\"assets/img/about.jpg\" />\r\n      <blockquote data-aos=\"zoom-in\" data-aos-easing=\"linear\" data-aos-duration=\"400\" class=\"blockquote text-lg-right mt-4 mb-0\">\r\n        <p class=\"mb-0\">{{ 'ABOUT.QUOTE' | translate }}</p>\r\n        <footer class=\"blockquote-footer\">\r\n          <cite title=\"Steve Jobs\">Steve Jobs</cite>\r\n        </footer>\r\n      </blockquote>\r\n    </div>\r\n\r\n    <div class=\"container-description col-lg-6 offset-lg-1\">\r\n      <div class=\"col-lg-12 col-sm-12 d-md-flex mb-4 mt-lg-0 mt-4\">\r\n        <div class=\"row d-lg-flex align-items-md-center justify-content-md-center\">\r\n          <div data-aos=\"zoom-in\" data-aos-easing=\"linear\" data-aos-duration=\"600\"\r\n            class=\"mt-3 mb-3 m-lg-0 col-lg-6 item p-4 text-center align-self-stretch align-items-center justify-content-center d-flex\"\r\n            *ngFor=\"let item of about\">\r\n            {{ item.description }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/container-contact/container-contact.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/container-contact/container-contact.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-container-geometric class=\"d-block mt-5\" [backgroundColor]=\"3\" color=\"#FFF\">\r\n  <div data-aos=\"zoom-in-down\" id=\"contact\" class=\"container pb-5\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"container-title col-12 mt-md-3 mb-5 pt-5 text-center\">\r\n        <h2 data-aos=\"fade-right\" data-aos-easing=\"linear\" data-aos-duration=\"500\"\r\n          class=\"portfolio-title position-relative\">{{ 'COMMON.CONTACT' | translate }}</h2>\r\n      </div>\r\n\r\n      <div data-aos=\"zoom-in\" data-aos-easing=\"linear\" data-aos-duration=\"750\" class=\"container-mail col-12 text-center mt-4 mb-3\">\r\n        <a class=\"text-decoration-none pb-2\" href=\"mailto:dustanisci@outlook.com\">dustanisci@outlook.com</a>\r\n      </div>\r\n\r\n      <div data-aos=\"zoom-in\" data-aos-easing=\"linear\" data-aos-duration=\"750\" class=\"container-social col-12 d-flex justify-content-center mt-4 mb-4\">\r\n        <a href=\"https://www.linkedin.com/in/dustanisci/\" target=\"_blank\"\r\n          class=\"ml-2 mr-2 d-flex align-items-center justify-content-center text-decoration-none d-inline-block\">\r\n          <i class=\"d-flex icon-linkedin\"></i>\r\n        </a>\r\n        <a href=\"https://github.com/dustanisci\" target=\"_blank\"\r\n          class=\"ml-4 mr-4 d-flex align-items-center justify-content-center text-decoration-none d-inline-block\">\r\n          <i class=\"icon-github-alt\"></i>\r\n        </a>\r\n      </div>\r\n\r\n      <div data-aos=\"zoom-in\" data-aos-easing=\"linear\" data-aos-duration=\"750\" data-aos=\"flip-left\" data-aos-easing=\"ease-out-cubic\" data-aos-duration=\"800\"\r\n        class=\"container-img col-12 text-center mt-5\">\r\n        <img src=\"./assets/img/chamaleon2.png\" />\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</app-container-geometric>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/container-portfolio/container-portfolio.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/container-portfolio/container-portfolio.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"portfolio\" class=\"container mt-4\">\r\n  <div class=\"container-title col-12 mt-md-5 mb-md-5 mb-4 pt-3 pb-3\">\r\n    <h2 data-aos=\"fade-right\" data-aos-easing=\"linear\" data-aos-duration=\"500\" class=\"portfolio-title position-relative\">\r\n      {{ 'COMMON.PORTFOLIO' | translate }} </h2>\r\n  </div>\r\n\r\n  <div class=\"container-projects col-12\">\r\n    <div class=\"row d-lg-flex align-items-md-center justify-content-md-between\">\r\n\r\n      <ng-container *ngIf=\"!loaderPortfolio\">\r\n        <div class=\"col-lg-5 col-12 mb-lg-5 pb-lg-5\" *ngFor=\"let project of portfolioTwoItems\"\r\n          (click)=\"actionModal(project)\">\r\n          <img data-aos=\"zoom-in\" data-aos-easing=\"linear\" data-aos-duration=\"750\" *ngIf=\"project\" class=\"pb-3 img-fluid\" src=\"{{ project.galerias[0].url_galeria }}\" />\r\n          <label *ngIf=\"project\" class=\"pt-2 d-block font-weight-bolder text-center\">{{ 'MODAL.IMAGE' | translate }} 1 {{ 'MODAL.OF' | translate }}\r\n            {{ project.galerias.length }}</label>\r\n        </div>\r\n      </ng-container>\r\n\r\n      <div *ngIf=\"loaderPortfolio\" class=\"spinner-border text-dark\" role=\"status\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <nav class=\"container-pagination col-12 mt-4 mt-sm-3\">\r\n    <ul #list class=\"pagination justify-content-center row\">\r\n      <li *ngFor=\"let item of [].constructor(index); let i = index\" [ngClass]=\"{'active': i === 0}\"\r\n        (click)=\"setItemsByIndex(i); setClassActive(i+1);\"\r\n        class=\"m-sm-0 ml-3 mr-3 mb-3 display-inline-block page-item text-center\">\r\n        <a class=\"page-link\" href=\"#portfolio\">{{ i + 1 }}</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</div>\r\n\r\n<app-modal *ngIf=\"portfolioTwoItems\" [actionModal]=\"showModal\" [setProject]=\"openedProject\"\r\n  (closed)=\"showModal = false\"></app-modal>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/container-skills/container-skills.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/container-skills/container-skills.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-container-geometric class=\"d-block mt-4 mt-md-5 pt-md-4\" [backgroundColor]=\"1\" color=\"#FFF\">\r\n  <div id=\"skills\" class=\"container pb-5\">\r\n    <div class=\"row pb-5\">\r\n\r\n      <div class=\"container-title col-12 mt-5 mb-5 pt-sm-5\">\r\n        <h2 data-aos=\"fade-right\" data-aos-easing=\"linear\" data-aos-duration=\"500\"\r\n          class=\"portfolio-title position-relative\">{{ 'COMMON.SKILLS' | translate }}</h2>\r\n      </div>\r\n\r\n      <div class=\"container-skills col-12\">\r\n        <div class=\"col-12\">\r\n          <div class=\"row d-lg-flex justify-content-md-between align-items-md-stretch\">\r\n            <div data-aos=\"zoom-in\" data-aos-easing=\"linear\" data-aos-duration=\"750\" class=\"pl-0 pr-0 col-lg-2 col-md-6 pl-4 pr-3 col-sm-6 col-6 mt-4 d-lg-flex flex-column\"\r\n              *ngFor=\"let skill of skills\">\r\n              <h3 class=\"font-weight-bolder\">{{ skill.technology }}</h3>\r\n              <ul class=\"pt-2 pl-3\">\r\n                <li *ngFor=\"let item of skill.value\"> {{ item }} </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-container-geometric>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<footer data-aos=\"fade-zoom-in\" data-aos-easing=\"linear\" data-aos-duration=\"1000\" class=\"text-center position-relative pt-4 pb-4\">Eduardo Stanisci © {{ year }} -\r\n  {{ 'FOOTER.COPYRIGHT' | translate }}</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/modal/modal.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/modal/modal.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngStyle]=\"{'display': showModal ? 'block' : 'none'}\" class=\"h-100 container-modal w-100 position-fixed h-100\">\r\n  <div class=\"container-fluid h-100\">\r\n    <div class=\"row d-flex align-items-stretch h-100\">\r\n\r\n      <div class=\"container-close position-fixed\">\r\n        <i (click)=\"actionClose()\" class=\"icon-remove\"></i>\r\n      </div>\r\n\r\n      <div class=\"container-warning col-12 position-absolute text-center mt-5 pt-5\">\r\n        <label>{{ 'MODAL.BETTER_VIEW' | translate }}</label>\r\n      </div>\r\n\r\n      <div class=\"container-elements col-12 d-flex\">\r\n        <div class=\"container-arrow col-2 col-sm-1 d-flex align-items-center justify-content-center flex-column\">\r\n          <i [ngStyle]=\"{'opacity': index === 0 ? '0.3' : '1'}\" (click)=\"previousImage()\" class=\"icon-chevron-left\"></i>\r\n        </div>\r\n\r\n        <div class=\"container-img col-8 col-sm-10 d-flex align-items-center justify-content-center flex-column\">\r\n          <img #img class=\"img-fluid begin-opacity-effect\" *ngIf=\"project && project.galerias\"\r\n            src=\"{{ project.galerias[index].url_galeria }}\" />\r\n        </div>\r\n\r\n        <div class=\"container-arrow col-2 col-sm-1 d-flex align-items-center justify-content-center flex-column\">\r\n          <i *ngIf=\"project && project.galerias\" [ngStyle]=\"{'opacity': (this.project.galerias.length === index + 1) ? '0.3' : '1'}\" (click)=\"nextImage()\"\r\n            class=\"icon-chevron-right\"></i>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"container-quantity col-12 d-flex align-items-center justify-content-center\">\r\n        <div class=\"row\">\r\n          <div *ngIf=\"project && project.galerias\" class=\"mb-3\">\r\n            {{ 'MODAL.IMAGE' | translate }} {{ index + 1 }} {{ 'MODAL.OF' | translate }} {{ project.galerias.length }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"container-fluid pt-2 pb-2 pt-md-3 pb-md-3 position-fixed bg-white\">\r\n  <div class=\"container\">\r\n    <div class=\"row position-relative d-md-flex align-items-stretch\">\r\n\r\n      <div data-aos=\"fade-zoom-in\" data-aos-easing=\"linear\" data-aos-duration=\"1000\" class=\"container-logo col-4\">\r\n        <a href=\"./\">\r\n          <img src=\"./assets/img/logo.png\" />\r\n        </a>\r\n      </div>\r\n\r\n      <app-dropdown class=\"position-absolute \" [items]=\"language\" (value)=\"translateAction($event)\"></app-dropdown>\r\n\r\n      <div [ngClass]=\"{'openMenu': openMenu}\" class=\"container-items col-12 col-sm-12 col-md-8 d-md-flex align-md-items-center justify-content-md-end\">\r\n        <ul data-aos=\"fade-zoom-in\" data-aos-easing=\"linear\" data-aos-duration=\"1000\" class=\"d-md-flex w-100 pl-0 align-items-center justify-content-end mb-0 mt-2 mt-md-0\">\r\n          <li class=\"d-md-inline d-sm-block d-block ml-md-3 text-center text-md-left\" *ngFor=\"let item of navbar\">\r\n            <a class=\"pt-4 pb-4 pl-md-3 pt-md-0 pb-md-0 text-decoration-none\"\r\n              (click)=\"navbarAction(false); setPositionScroll(item.link);\">{{ item.name }}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"container-icons d-md-none position-absolute d-flex align-items-center\">\r\n        <i *ngIf=\"openMenu === false\" (click)=\"navbarAction(true)\" class=\"icon-reorder\"></i>\r\n        <i *ngIf=\"openMenu === true\" (click)=\"navbarAction(false)\" class=\"icon-remove\"></i>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</nav>");

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
/* harmony default export */ __webpack_exports__["default"] = (".container-loader {\n  position: fixed;\n}\n.container-loader .spinner-border {\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGFuZ3VsYXJcXHBvcnRmb2xpby9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWxvYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG5cclxuICAuc3Bpbm5lci1ib3JkZXIge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lci1sb2FkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4uY29udGFpbmVyLWxvYWRlciAuc3Bpbm5lci1ib3JkZXIge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59Il19 */");

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
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding-top: 130px;\n}\n@media only screen and (max-width: 767px) {\n  .container {\n    padding-top: 90px;\n  }\n}\n.container .container-title .portfolio-title:before {\n  background: #00e1e1;\n  position: absolute;\n}\n.container .container-title .portfolio-title::first-letter {\n  color: #00e1e1;\n  font-weight: bolder;\n}\n.container .container-photo blockquote p {\n  font-size: 12pt;\n}\n.container .container-photo img {\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n  padding: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n}\n.container .container-description .item {\n  min-height: 200px;\n  font-size: 11pt;\n}\n@media only screen and (max-width: 991px) {\n  .container .container-description .item {\n    border: 1px solid rgba(0, 0, 0, 0.4);\n  }\n}\n@media only screen and (max-width: 767px) {\n  .container .container-description .item {\n    -webkit-animation: none;\n            animation: none;\n  }\n}\n.container .container-description .item:nth-of-type(1) {\n  background: #00146e;\n  color: #FFF;\n}\n.container .container-description .item:nth-of-type(2) {\n  background: #0041a0;\n  color: #FFF;\n}\n.container .container-description .item:nth-of-type(3) {\n  background: #00e1e1;\n  font-weight: bolder;\n}\n.container .container-description .item:nth-of-type(4) {\n  background: #eb92be;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVyLWFib3V0L0M6XFxhbmd1bGFyXFxwb3J0Zm9saW8vc3JjXFxhcHBcXGNvbnRhaW5lci1hYm91dFxcY29udGFpbmVyLWFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXItYWJvdXQvY29udGFpbmVyLWFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7QUNERjtBREdFO0VBSEY7SUFJSSxpQkFBQTtFQ0FGO0FBQ0Y7QURJTTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNGUjtBREtNO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDSFI7QURVTTtFQUNFLGVBQUE7QUNSUjtBRFlJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQ1ZOO0FEZ0JJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDZE47QURnQk07RUFKRjtJQUtJLG9DQUFBO0VDYk47QUFDRjtBRGVNO0VBUkY7SUFTSSx1QkFBQTtZQUFBLGVBQUE7RUNaTjtBQUNGO0FEZUk7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNiTjtBRGdCSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ2ROO0FEaUJJO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQ2ZOO0FEa0JJO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQ2hCTiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci1hYm91dC9jb250YWluZXItYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi9hc3NldHMvc3R5bGUvcGFsZXR0ZS5zY3NzXCI7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogMTMwcHg7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIHBhZGRpbmctdG9wOiA5MHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci10aXRsZSB7XHJcbiAgICAucG9ydGZvbGlvLXRpdGxlIHtcclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMycpO1xyXG4gICAgICAgIHBvc2l0aW9uICA6IGFic29sdXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOjpmaXJzdC1sZXR0ZXIge1xyXG4gICAgICAgIGNvbG9yICAgICAgOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzMnKTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLXBob3RvIHtcclxuICAgIGJsb2NrcXVvdGUge1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoICAgICAgICA6IDIwMHB4O1xyXG4gICAgICBoZWlnaHQgICAgICAgOiAyMDBweDtcclxuICAgICAgcGFkZGluZyAgICAgIDogNXB4O1xyXG4gICAgICBib3JkZXIgICAgICAgOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXItZGVzY3JpcHRpb24ge1xyXG5cclxuICAgIC5pdGVtIHtcclxuICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZSA6IDExcHQ7XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtOm50aC1vZi10eXBlKDEpIHtcclxuICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICcxJyk7XHJcbiAgICAgIGNvbG9yICAgICA6ICNGRkY7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW06bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzInKTtcclxuICAgICAgY29sb3IgICAgIDogI0ZGRjtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbTpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMycpO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtOm50aC1vZi10eXBlKDQpIHtcclxuICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICc0Jyk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxMzBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDkwcHg7XG4gIH1cbn1cbi5jb250YWluZXIgLmNvbnRhaW5lci10aXRsZSAucG9ydGZvbGlvLXRpdGxlOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICMwMGUxZTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jb250YWluZXIgLmNvbnRhaW5lci10aXRsZSAucG9ydGZvbGlvLXRpdGxlOjpmaXJzdC1sZXR0ZXIge1xuICBjb2xvcjogIzAwZTFlMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi5jb250YWluZXIgLmNvbnRhaW5lci1waG90byBibG9ja3F1b3RlIHAge1xuICBmb250LXNpemU6IDEycHQ7XG59XG4uY29udGFpbmVyIC5jb250YWluZXItcGhvdG8gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLWRlc2NyaXB0aW9uIC5pdGVtIHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIGZvbnQtc2l6ZTogMTFwdDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmNvbnRhaW5lciAuY29udGFpbmVyLWRlc2NyaXB0aW9uIC5pdGVtIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRhaW5lciAuY29udGFpbmVyLWRlc2NyaXB0aW9uIC5pdGVtIHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gIH1cbn1cbi5jb250YWluZXIgLmNvbnRhaW5lci1kZXNjcmlwdGlvbiAuaXRlbTpudGgtb2YtdHlwZSgxKSB7XG4gIGJhY2tncm91bmQ6ICMwMDE0NmU7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLWRlc2NyaXB0aW9uIC5pdGVtOm50aC1vZi10eXBlKDIpIHtcbiAgYmFja2dyb3VuZDogIzAwNDFhMDtcbiAgY29sb3I6ICNGRkY7XG59XG4uY29udGFpbmVyIC5jb250YWluZXItZGVzY3JpcHRpb24gLml0ZW06bnRoLW9mLXR5cGUoMykge1xuICBiYWNrZ3JvdW5kOiAjMDBlMWUxO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLWRlc2NyaXB0aW9uIC5pdGVtOm50aC1vZi10eXBlKDQpIHtcbiAgYmFja2dyb3VuZDogI2ViOTJiZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("app-container-geometric .container .container-title .portfolio-title:before {\n  background: #000;\n  position: absolute;\n}\napp-container-geometric .container .container-title .portfolio-title::first-letter {\n  color: #000;\n  font-weight: bolder;\n}\napp-container-geometric .container .container-mail a {\n  font-size: 19pt;\n  color: #000;\n  border-bottom: 3px solid #FFF;\n  -webkit-transition: 300ms linear;\n  transition: 300ms linear;\n}\napp-container-geometric .container .container-mail a:hover {\n  border-bottom: 2px solid #0041a0;\n  -webkit-transition: 300ms linear;\n  transition: 300ms linear;\n}\napp-container-geometric .container .container-social a {\n  width: 60px;\n  height: 50px;\n  background: #000;\n  cursor: pointer;\n  -webkit-transition: 300ms linear;\n  transition: 300ms linear;\n}\napp-container-geometric .container .container-social a:hover {\n  background: #00146e;\n  -webkit-transition: 300ms linear;\n  transition: 300ms linear;\n}\napp-container-geometric .container .container-social a i {\n  font-size: 30px;\n  color: #FFF;\n}\napp-container-geometric .container .container-img img {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVyLWNvbnRhY3QvQzpcXGFuZ3VsYXJcXHBvcnRmb2xpby9zcmNcXGFwcFxcY29udGFpbmVyLWNvbnRhY3RcXGNvbnRhaW5lci1jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXItY29udGFjdC9jb250YWluZXItY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNUTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNMVjtBRFFRO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FDTlY7QURZTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUFBLHdCQUFBO0FDVlI7QURZUTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7RUFBQSx3QkFBQTtBQ1ZWO0FEaUJNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUFBLHdCQUFBO0FDZlI7QURpQlE7RUFDRSxtQkFBQTtFQUNBLGdDQUFBO0VBQUEsd0JBQUE7QUNmVjtBRGtCUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDaEJWO0FEdUJNO0VBQ0UsWUFBQTtBQ3JCUiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci1jb250YWN0L2NvbnRhaW5lci1jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vYXNzZXRzL3N0eWxlL3BhbGV0dGUuc2Nzc1wiO1xyXG5cclxuYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgLmNvbnRhaW5lci10aXRsZSB7XHJcbiAgICAgIC5wb3J0Zm9saW8tdGl0bGUge1xyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjpmaXJzdC1sZXR0ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXItbWFpbCB7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlwdDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0ZGRjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcyBsaW5lYXI7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMicpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMzAwbXMgbGluZWFyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXItc29jaWFsIHtcclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcyBsaW5lYXI7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICcxJyk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcyBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyLWltZyB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSIsImFwcC1jb250YWluZXItZ2VvbWV0cmljIC5jb250YWluZXIgLmNvbnRhaW5lci10aXRsZSAucG9ydGZvbGlvLXRpdGxlOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbmFwcC1jb250YWluZXItZ2VvbWV0cmljIC5jb250YWluZXIgLmNvbnRhaW5lci10aXRsZSAucG9ydGZvbGlvLXRpdGxlOjpmaXJzdC1sZXR0ZXIge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbmFwcC1jb250YWluZXItZ2VvbWV0cmljIC5jb250YWluZXIgLmNvbnRhaW5lci1tYWlsIGEge1xuICBmb250LXNpemU6IDE5cHQ7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0ZGRjtcbiAgdHJhbnNpdGlvbjogMzAwbXMgbGluZWFyO1xufVxuYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMgLmNvbnRhaW5lciAuY29udGFpbmVyLW1haWwgYTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA0MWEwO1xuICB0cmFuc2l0aW9uOiAzMDBtcyBsaW5lYXI7XG59XG5hcHAtY29udGFpbmVyLWdlb21ldHJpYyAuY29udGFpbmVyIC5jb250YWluZXItc29jaWFsIGEge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDMwMG1zIGxpbmVhcjtcbn1cbmFwcC1jb250YWluZXItZ2VvbWV0cmljIC5jb250YWluZXIgLmNvbnRhaW5lci1zb2NpYWwgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDE0NmU7XG4gIHRyYW5zaXRpb246IDMwMG1zIGxpbmVhcjtcbn1cbmFwcC1jb250YWluZXItZ2VvbWV0cmljIC5jb250YWluZXIgLmNvbnRhaW5lci1zb2NpYWwgYSBpIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogI0ZGRjtcbn1cbmFwcC1jb250YWluZXItZ2VvbWV0cmljIC5jb250YWluZXIgLmNvbnRhaW5lci1pbWcgaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".container .container-title .portfolio-title:before {\n  background: #00146e;\n  position: absolute;\n}\n.container .container-title .portfolio-title::first-letter {\n  color: #00146e;\n  font-weight: bolder;\n}\n.container .container-projects .row {\n  min-height: 410px;\n}\n@media only screen and (max-width: 991px) {\n  .container .container-projects .row {\n    min-height: 920px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .container .container-projects .row {\n    min-height: 782px;\n  }\n}\n@media only screen and (max-width: 500px) {\n  .container .container-projects .row {\n    min-height: 550px;\n  }\n}\n.container .container-projects .row img {\n  border-bottom: 4px solid #0041a0;\n  cursor: pointer;\n}\n.container .container-projects .row .spinner-border {\n  display: block;\n  margin: 0 auto;\n  width: 50px;\n  height: 50px;\n}\n.container .container-pagination .page-item {\n  z-index: 0;\n}\n@media only screen and (max-width: 991px) {\n  .container .container-pagination .page-item {\n    width: 40px;\n  }\n}\n.container .container-pagination .page-item a {\n  color: #FFF;\n  background: #0041a0;\n  -webkit-transition: 250ms ease;\n  transition: 250ms ease;\n  cursor: pointer;\n  border: 1px solid rgba(0, 0, 0, 0.14);\n}\n@media only screen and (max-width: 991px) {\n  .container .container-pagination .page-item a {\n    font-size: 20pt;\n  }\n}\n.container .container-pagination .page-item a:hover {\n  background: #eb92be;\n  -webkit-transition: 250ms ease;\n  transition: 250ms ease;\n}\n.container .container-pagination .page-item.active a {\n  background: #eb92be;\n}\n.container .container-pagination .page-item.active a:focus {\n  background: #eb92be;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVyLXBvcnRmb2xpby9DOlxcYW5ndWxhclxccG9ydGZvbGlvL3NyY1xcYXBwXFxjb250YWluZXItcG9ydGZvbGlvXFxjb250YWluZXItcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXItcG9ydGZvbGlvL2NvbnRhaW5lci1wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS007RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FDSlI7QURPTTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ0xSO0FEV0k7RUFDRSxpQkFBQTtBQ1ROO0FEV007RUFIRjtJQUlJLGlCQUFBO0VDUk47QUFDRjtBRFVNO0VBUEY7SUFRSSxpQkFBQTtFQ1BOO0FBQ0Y7QURTTTtFQVhGO0lBWUksaUJBQUE7RUNOTjtBQUNGO0FEUU07RUFDRSxnQ0FBQTtFQUNBLGVBQUE7QUNOUjtBRFNNO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1BSO0FEYUk7RUFDRSxVQUFBO0FDWE47QURhTTtFQUhGO0lBSUksV0FBQTtFQ1ZOO0FBQ0Y7QURZTTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQUEsc0JBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7QUNWUjtBRFlRO0VBUEY7SUFRSSxlQUFBO0VDVFI7QUFDRjtBRFdRO0VBQ0UsbUJBQUE7RUFDQSw4QkFBQTtFQUFBLHNCQUFBO0FDVFY7QURjUTtFQUNFLG1CQUFBO0FDWlY7QURjVTtFQUNFLG1CQUFBO0FDWloiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXItcG9ydGZvbGlvL2NvbnRhaW5lci1wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi9hc3NldHMvc3R5bGUvcGFsZXR0ZS5zY3NzXCI7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAuY29udGFpbmVyLXRpdGxlIHtcclxuICAgIC5wb3J0Zm9saW8tdGl0bGUge1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICcxJyk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOjpmaXJzdC1sZXR0ZXIge1xyXG4gICAgICAgIGNvbG9yOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzEnKTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLXByb2plY3RzIHtcclxuICAgIC5yb3cge1xyXG4gICAgICBtaW4taGVpZ2h0OiA0MTBweDtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA5MjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDc4MnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTUwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMicpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNwaW5uZXItYm9yZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXItcGFnaW5hdGlvbiB7XHJcbiAgICAucGFnZS1pdGVtIHtcclxuICAgICAgei1pbmRleDogMDtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICcyJyk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE0KTtcclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzQnKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzQnKTtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICc0Jyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5jb250YWluZXIgLmNvbnRhaW5lci10aXRsZSAucG9ydGZvbGlvLXRpdGxlOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICMwMDE0NmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jb250YWluZXIgLmNvbnRhaW5lci10aXRsZSAucG9ydGZvbGlvLXRpdGxlOjpmaXJzdC1sZXR0ZXIge1xuICBjb2xvcjogIzAwMTQ2ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi5jb250YWluZXIgLmNvbnRhaW5lci1wcm9qZWN0cyAucm93IHtcbiAgbWluLWhlaWdodDogNDEwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5jb250YWluZXIgLmNvbnRhaW5lci1wcm9qZWN0cyAucm93IHtcbiAgICBtaW4taGVpZ2h0OiA5MjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGFpbmVyIC5jb250YWluZXItcHJvamVjdHMgLnJvdyB7XG4gICAgbWluLWhlaWdodDogNzgycHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29udGFpbmVyLXByb2plY3RzIC5yb3cge1xuICAgIG1pbi1oZWlnaHQ6IDU1MHB4O1xuICB9XG59XG4uY29udGFpbmVyIC5jb250YWluZXItcHJvamVjdHMgLnJvdyBpbWcge1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzAwNDFhMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLXByb2plY3RzIC5yb3cgLnNwaW5uZXItYm9yZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLXBhZ2luYXRpb24gLnBhZ2UtaXRlbSB7XG4gIHotaW5kZXg6IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5jb250YWluZXIgLmNvbnRhaW5lci1wYWdpbmF0aW9uIC5wYWdlLWl0ZW0ge1xuICAgIHdpZHRoOiA0MHB4O1xuICB9XG59XG4uY29udGFpbmVyIC5jb250YWluZXItcGFnaW5hdGlvbiAucGFnZS1pdGVtIGEge1xuICBjb2xvcjogI0ZGRjtcbiAgYmFja2dyb3VuZDogIzAwNDFhMDtcbiAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuY29udGFpbmVyIC5jb250YWluZXItcGFnaW5hdGlvbiAucGFnZS1pdGVtIGEge1xuICAgIGZvbnQtc2l6ZTogMjBwdDtcbiAgfVxufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLXBhZ2luYXRpb24gLnBhZ2UtaXRlbSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ViOTJiZTtcbiAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbn1cbi5jb250YWluZXIgLmNvbnRhaW5lci1wYWdpbmF0aW9uIC5wYWdlLWl0ZW0uYWN0aXZlIGEge1xuICBiYWNrZ3JvdW5kOiAjZWI5MmJlO1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLXBhZ2luYXRpb24gLnBhZ2UtaXRlbS5hY3RpdmUgYTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICNlYjkyYmU7XG59Il19 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("app-container-geometric .container .container-title .portfolio-title:before {\n  background: #eb92be;\n  position: absolute;\n}\napp-container-geometric .container .container-title .portfolio-title::first-letter {\n  color: #eb92be;\n  font-weight: bolder;\n}\napp-container-geometric .container .container-skills .row div {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\napp-container-geometric .container .container-skills .row div h3 {\n  font-size: 15pt;\n}\napp-container-geometric .container .container-skills .row div ul {\n  font-size: 12pt;\n  list-style: none;\n  border-left: 3px solid rgba(255, 255, 255, 0.25);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVyLXNraWxscy9DOlxcYW5ndWxhclxccG9ydGZvbGlvL3NyY1xcYXBwXFxjb250YWluZXItc2tpbGxzXFxjb250YWluZXItc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXItc2tpbGxzL2NvbnRhaW5lci1za2lsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTVE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FDTFY7QURRUTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ05WO0FEYVE7RUFDRSwyQkFBQTtFQUNBLDBCQUFBO0FDWFY7QURhVTtFQUNFLGVBQUE7QUNYWjtBRGNVO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0RBQUE7QUNaWiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci1za2lsbHMvY29udGFpbmVyLXNraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uL2Fzc2V0cy9zdHlsZS9wYWxldHRlLnNjc3NcIjtcclxuXHJcbmFwcC1jb250YWluZXItZ2VvbWV0cmljIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIC5jb250YWluZXItdGl0bGUge1xyXG4gICAgICAucG9ydGZvbGlvLXRpdGxlIHtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzQnKTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6OmZpcnN0LWxldHRlciB7XHJcbiAgICAgICAgICBjb2xvcjogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICc0Jyk7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXItc2tpbGxzIHtcclxuICAgICAgLnJvdyB7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB0O1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxufSIsImFwcC1jb250YWluZXItZ2VvbWV0cmljIC5jb250YWluZXIgLmNvbnRhaW5lci10aXRsZSAucG9ydGZvbGlvLXRpdGxlOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICNlYjkyYmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbmFwcC1jb250YWluZXItZ2VvbWV0cmljIC5jb250YWluZXIgLmNvbnRhaW5lci10aXRsZSAucG9ydGZvbGlvLXRpdGxlOjpmaXJzdC1sZXR0ZXIge1xuICBjb2xvcjogI2ViOTJiZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbmFwcC1jb250YWluZXItZ2VvbWV0cmljIC5jb250YWluZXIgLmNvbnRhaW5lci1za2lsbHMgLnJvdyBkaXYge1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMgLmNvbnRhaW5lciAuY29udGFpbmVyLXNraWxscyAucm93IGRpdiBoMyB7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbn1cbmFwcC1jb250YWluZXItZ2VvbWV0cmljIC5jb250YWluZXIgLmNvbnRhaW5lci1za2lsbHMgLnJvdyBkaXYgdWwge1xuICBmb250LXNpemU6IDEycHQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbn0iXX0= */");

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
                        'Foundation',
                        'SEO'
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
                        'Docker',
                        'Google Analytics'
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
/* harmony default export */ __webpack_exports__["default"] = (".container-geometric .geometric {\n  height: 100px;\n  background-repeat: no-repeat;\n  background-position: center top;\n  background-size: 100% 100%;\n  content: \"\";\n  top: 0;\n}\n.container-geometric .subcontainer-geometric {\n  top: -1px;\n}\n.pink {\n  background: #eb92be;\n}\n.blue {\n  background: #0041a0;\n}\n.light-blue {\n  background: #00e1e1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29udGFpbmVyLWdlb21ldHJpYy9DOlxcYW5ndWxhclxccG9ydGZvbGlvL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGNvbnRhaW5lci1nZW9tZXRyaWNcXGNvbnRhaW5lci1nZW9tZXRyaWMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbnRhaW5lci1nZW9tZXRyaWMvY29udGFpbmVyLWdlb21ldHJpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGFBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtBQ0ZKO0FES0U7RUFDRSxTQUFBO0FDSEo7QURPQTtFQUNFLG1CQUFBO0FDSkY7QURPQTtFQUNFLG1CQUFBO0FDSkY7QURPQTtFQUNFLG1CQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jb250YWluZXItZ2VvbWV0cmljL2NvbnRhaW5lci1nZW9tZXRyaWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi9hc3NldHMvc3R5bGUvcGFsZXR0ZS5zY3NzXCI7XHJcblxyXG4uY29udGFpbmVyLWdlb21ldHJpYyB7XHJcbiAgLmdlb21ldHJpYyB7XHJcbiAgICBoZWlnaHQgICAgICAgICAgICAgOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0ICA6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemUgICAgOiAxMDAlIDEwMCU7XHJcbiAgICBjb250ZW50ICAgICAgICAgICAgOiAnJztcclxuICAgIHRvcCAgICAgICAgICAgICAgICA6IDA7XHJcbiAgfVxyXG5cclxuICAuc3ViY29udGFpbmVyLWdlb21ldHJpYyB7XHJcbiAgICB0b3A6IC0xcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucGluayB7XHJcbiAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICc0Jyk7XHJcbn1cclxuXHJcbi5ibHVlIHtcclxuICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzInKTtcclxufVxyXG5cclxuLmxpZ2h0LWJsdWUge1xyXG4gIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMycpO1xyXG59IiwiLmNvbnRhaW5lci1nZW9tZXRyaWMgLmdlb21ldHJpYyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBjb250ZW50OiBcIlwiO1xuICB0b3A6IDA7XG59XG4uY29udGFpbmVyLWdlb21ldHJpYyAuc3ViY29udGFpbmVyLWdlb21ldHJpYyB7XG4gIHRvcDogLTFweDtcbn1cblxuLnBpbmsge1xuICBiYWNrZ3JvdW5kOiAjZWI5MmJlO1xufVxuXG4uYmx1ZSB7XG4gIGJhY2tncm91bmQ6ICMwMDQxYTA7XG59XG5cbi5saWdodC1ibHVlIHtcbiAgYmFja2dyb3VuZDogIzAwZTFlMTtcbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".container-dropdown {\n  opacity: 1;\n  -webkit-transition: 500ms opacity linear;\n  transition: 500ms opacity linear;\n}\n.container-dropdown * {\n  cursor: pointer;\n}\n.container-dropdown .container-label {\n  -webkit-transition: 200ms linear;\n  transition: 200ms linear;\n  font-size: 9pt;\n}\n.container-dropdown .container-label:hover {\n  -webkit-transition: 200ms linear;\n  transition: 200ms linear;\n  color: #00e1e1;\n}\n.container-dropdown ul {\n  font-size: 10pt;\n  opacity: 0;\n  -webkit-transition: 500ms opacity linear;\n  transition: 500ms opacity linear;\n  list-style: none;\n  background: #FFF;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.14);\n  display: none;\n  opacity: 0;\n  -webkit-transition: 200ms all opacity;\n  transition: 200ms all opacity;\n}\n.container-dropdown ul.effect-opacity {\n  opacity: 1;\n  -webkit-transition: 200ms all opacity;\n  transition: 200ms all opacity;\n}\n.container-dropdown ul.active {\n  z-index: 100;\n  display: block;\n}\n.container-dropdown ul.active li {\n  -webkit-transition: 400ms linear;\n  transition: 400ms linear;\n}\n.container-dropdown ul.active li:hover {\n  -webkit-transition: 400ms linear;\n  transition: 400ms linear;\n  background: rgba(0, 65, 160, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHJvcGRvd24vQzpcXGFuZ3VsYXJcXHBvcnRmb2xpby9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxkcm9wZG93blxcZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsVUFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7QUNERjtBREdFO0VBQ0UsZUFBQTtBQ0RKO0FESUU7RUFDRSxnQ0FBQTtFQUFBLHdCQUFBO0VBQ0EsY0FBQTtBQ0ZKO0FESUk7RUFDRSxnQ0FBQTtFQUFBLHdCQUFBO0VBQ0EsY0FBQTtBQ0ZOO0FETUU7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSw0Q0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtBQ0pKO0FETUk7RUFDRSxVQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtBQ0pOO0FET0k7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0xOO0FET007RUFDRSxnQ0FBQTtFQUFBLHdCQUFBO0FDTFI7QURPUTtFQUNFLGdDQUFBO0VBQUEsd0JBQUE7RUFDQSxpQ0FBQTtBQ0xWIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi9hc3NldHMvc3R5bGUvcGFsZXR0ZS5zY3NzXCI7XHJcblxyXG4uY29udGFpbmVyLWRyb3Bkb3duIHtcclxuICBvcGFjaXR5ICAgOiAxO1xyXG4gIHRyYW5zaXRpb246IDUwMG1zIG9wYWNpdHkgbGluZWFyO1xyXG5cclxuICAqIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXItbGFiZWwge1xyXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgbGluZWFyO1xyXG4gICAgZm9udC1zaXplIDogOXB0O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2l0aW9uOiAyMDBtcyBsaW5lYXI7XHJcbiAgICAgIGNvbG9yICAgICA6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgZm9udC1zaXplICAgIDogMTBwdDtcclxuICAgIG9wYWNpdHkgICAgICA6IDA7XHJcbiAgICB0cmFuc2l0aW9uICAgOiA1MDBtcyBvcGFjaXR5IGxpbmVhcjtcclxuICAgIGxpc3Qtc3R5bGUgICA6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kICAgOiAjRkZGO1xyXG4gICAgYm94LXNoYWRvdyAgIDogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNCk7XHJcbiAgICBkaXNwbGF5ICAgICAgOiBub25lO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IDIwMG1zIGFsbCBvcGFjaXR5O1xyXG5cclxuICAgICYuZWZmZWN0LW9wYWNpdHkge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2l0aW9uOiAyMDBtcyBhbGwgb3BhY2l0eTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIHotaW5kZXggICA6IDEwMDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgXHJcbiAgICAgIGxpIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiA0MDBtcyBsaW5lYXI7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogNDAwbXMgbGluZWFyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeS1vcGFjaXR5LTEwJScsICcyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiLmNvbnRhaW5lci1kcm9wZG93biB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IDUwMG1zIG9wYWNpdHkgbGluZWFyO1xufVxuLmNvbnRhaW5lci1kcm9wZG93biAqIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lci1kcm9wZG93biAuY29udGFpbmVyLWxhYmVsIHtcbiAgdHJhbnNpdGlvbjogMjAwbXMgbGluZWFyO1xuICBmb250LXNpemU6IDlwdDtcbn1cbi5jb250YWluZXItZHJvcGRvd24gLmNvbnRhaW5lci1sYWJlbDpob3ZlciB7XG4gIHRyYW5zaXRpb246IDIwMG1zIGxpbmVhcjtcbiAgY29sb3I6ICMwMGUxZTE7XG59XG4uY29udGFpbmVyLWRyb3Bkb3duIHVsIHtcbiAgZm9udC1zaXplOiAxMHB0O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiA1MDBtcyBvcGFjaXR5IGxpbmVhcjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE0KTtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMjAwbXMgYWxsIG9wYWNpdHk7XG59XG4uY29udGFpbmVyLWRyb3Bkb3duIHVsLmVmZmVjdC1vcGFjaXR5IHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogMjAwbXMgYWxsIG9wYWNpdHk7XG59XG4uY29udGFpbmVyLWRyb3Bkb3duIHVsLmFjdGl2ZSB7XG4gIHotaW5kZXg6IDEwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY29udGFpbmVyLWRyb3Bkb3duIHVsLmFjdGl2ZSBsaSB7XG4gIHRyYW5zaXRpb246IDQwMG1zIGxpbmVhcjtcbn1cbi5jb250YWluZXItZHJvcGRvd24gdWwuYWN0aXZlIGxpOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogNDAwbXMgbGluZWFyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDY1LCAxNjAsIDAuMSk7XG59Il19 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("footer {\n  background: #000;\n  color: #FFF;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL0M6XFxhbmd1bGFyXFxwb3J0Zm9saW8vc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vYXNzZXRzL3N0eWxlL3BhbGV0dGUuc2Nzc1wiO1xyXG5cclxuZm9vdGVye1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59IiwiZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgY29sb3I6ICNGRkY7XG4gIGJvcmRlcjogbm9uZTtcbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".container-modal {\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 99;\n  top: 0;\n  color: #FFF;\n}\n.container-modal .container-close {\n  right: 10px;\n  top: 5px;\n  z-index: 1;\n}\n.container-modal .container-close i {\n  font-size: 30pt;\n  cursor: pointer;\n}\n.container-modal .container-warning {\n  display: none;\n}\n@media only screen and (max-width: 600px) {\n  .container-modal .container-warning {\n    display: block;\n  }\n}\n.container-modal .container-warning label {\n  font-size: 15pt;\n}\n.container-modal .container-elements {\n  height: 90%;\n}\n.container-modal .container-elements .container-img img {\n  max-width: 85%;\n  max-height: 90%;\n  -webkit-animation: 600ms multiple-opacities-on;\n          animation: 600ms multiple-opacities-on;\n}\n.container-modal .container-elements .container-img img.opacity-effect-before {\n  opacity: 0;\n  -webkit-animation: 600ms multiple-opacities-on;\n          animation: 600ms multiple-opacities-on;\n}\n.container-modal .container-elements .container-img img.opacity-effect-after {\n  opacity: 1;\n  -webkit-animation: 600ms multiple-opacities-on;\n          animation: 600ms multiple-opacities-on;\n}\n.container-modal .container-elements .container-arrow i {\n  font-size: 40pt;\n  cursor: pointer;\n}\n@media only screen and (max-width: 767px) {\n  .container-modal .container-elements .container-arrow i {\n    font-size: 20pt;\n  }\n}\n.container-modal .container-quantity {\n  height: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvQzpcXGFuZ3VsYXJcXHBvcnRmb2xpby9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxtb2RhbFxcbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDQ0o7QURDSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDQ047QURHRTtFQUNFLGFBQUE7QUNESjtBREdJO0VBSEY7SUFJSSxjQUFBO0VDQUo7QUFDRjtBREVJO0VBQ0UsZUFBQTtBQ0FOO0FESUU7RUFDRSxXQUFBO0FDRko7QURLTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ0hSO0FES1E7RUFDRSxVQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ0hWO0FETVE7RUFDRSxVQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ0pWO0FEVU07RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ1JSO0FEVVE7RUFKRjtJQUtJLGVBQUE7RUNQUjtBQUNGO0FEWUU7RUFDRSxXQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItbW9kYWwge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICB6LWluZGV4OiA5OTtcclxuICB0b3A6IDA7XHJcbiAgY29sb3I6ICNGRkY7XHJcblxyXG4gIC5jb250YWluZXItY2xvc2Uge1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBwdDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci13YXJuaW5nIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVwdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXItZWxlbWVudHMge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcblxyXG4gICAgLmNvbnRhaW5lci1pbWcge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogODUlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6OTAlO1xyXG4gICAgICAgIGFuaW1hdGlvbjogNjAwbXMgbXVsdGlwbGUtb3BhY2l0aWVzLW9uO1xyXG5cclxuICAgICAgICAmLm9wYWNpdHktZWZmZWN0LWJlZm9yZXtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICBhbmltYXRpb246IDYwMG1zIG11bHRpcGxlLW9wYWNpdGllcy1vbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYub3BhY2l0eS1lZmZlY3QtYWZ0ZXJ7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiA2MDBtcyBtdWx0aXBsZS1vcGFjaXRpZXMtb247XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lci1hcnJvdyB7XHJcbiAgICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBwdDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXItcXVhbnRpdHkge1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIuY29udGFpbmVyLW1vZGFsIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICB6LWluZGV4OiA5OTtcbiAgdG9wOiAwO1xuICBjb2xvcjogI0ZGRjtcbn1cbi5jb250YWluZXItbW9kYWwgLmNvbnRhaW5lci1jbG9zZSB7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDVweDtcbiAgei1pbmRleDogMTtcbn1cbi5jb250YWluZXItbW9kYWwgLmNvbnRhaW5lci1jbG9zZSBpIHtcbiAgZm9udC1zaXplOiAzMHB0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyLW1vZGFsIC5jb250YWluZXItd2FybmluZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXItbW9kYWwgLmNvbnRhaW5lci13YXJuaW5nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLmNvbnRhaW5lci1tb2RhbCAuY29udGFpbmVyLXdhcm5pbmcgbGFiZWwge1xuICBmb250LXNpemU6IDE1cHQ7XG59XG4uY29udGFpbmVyLW1vZGFsIC5jb250YWluZXItZWxlbWVudHMge1xuICBoZWlnaHQ6IDkwJTtcbn1cbi5jb250YWluZXItbW9kYWwgLmNvbnRhaW5lci1lbGVtZW50cyAuY29udGFpbmVyLWltZyBpbWcge1xuICBtYXgtd2lkdGg6IDg1JTtcbiAgbWF4LWhlaWdodDogOTAlO1xuICBhbmltYXRpb246IDYwMG1zIG11bHRpcGxlLW9wYWNpdGllcy1vbjtcbn1cbi5jb250YWluZXItbW9kYWwgLmNvbnRhaW5lci1lbGVtZW50cyAuY29udGFpbmVyLWltZyBpbWcub3BhY2l0eS1lZmZlY3QtYmVmb3JlIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiA2MDBtcyBtdWx0aXBsZS1vcGFjaXRpZXMtb247XG59XG4uY29udGFpbmVyLW1vZGFsIC5jb250YWluZXItZWxlbWVudHMgLmNvbnRhaW5lci1pbWcgaW1nLm9wYWNpdHktZWZmZWN0LWFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uOiA2MDBtcyBtdWx0aXBsZS1vcGFjaXRpZXMtb247XG59XG4uY29udGFpbmVyLW1vZGFsIC5jb250YWluZXItZWxlbWVudHMgLmNvbnRhaW5lci1hcnJvdyBpIHtcbiAgZm9udC1zaXplOiA0MHB0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250YWluZXItbW9kYWwgLmNvbnRhaW5lci1lbGVtZW50cyAuY29udGFpbmVyLWFycm93IGkge1xuICAgIGZvbnQtc2l6ZTogMjBwdDtcbiAgfVxufVxuLmNvbnRhaW5lci1tb2RhbCAuY29udGFpbmVyLXF1YW50aXR5IHtcbiAgaGVpZ2h0OiAxMCU7XG59Il19 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("nav {\n  z-index: 2;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.14);\n}\nnav .container-logo img {\n  width: 150px;\n}\n@media only screen and (max-width: 767px) {\n  nav .container-logo img {\n    width: 130px;\n  }\n}\nnav app-dropdown {\n  right: 15px;\n  top: -12px;\n  width: 81px;\n}\n@media only screen and (max-width: 767px) {\n  nav app-dropdown {\n    right: 50px;\n    top: 14px;\n  }\n}\nnav .container-items {\n  font-size: 13pt;\n}\n@media only screen and (max-width: 767px) {\n  nav .container-items {\n    min-height: 100%;\n    width: 0;\n    height: 100%;\n    -webkit-transition: 500ms ease;\n    transition: 500ms ease;\n    left: 0;\n    top: 0;\n    position: fixed;\n  }\n}\n@media only screen and (max-width: 767px) {\n  nav .container-items ul {\n    height: auto;\n    display: none;\n  }\n}\nnav .container-items ul li a {\n  color: #0041a0;\n  -webkit-transition: 200ms linear;\n  transition: 200ms linear;\n  cursor: pointer;\n}\nnav .container-items ul li a:hover {\n  -webkit-transition: 200ms linear;\n  transition: 200ms linear;\n  color: #00e1e1;\n}\n@media only screen and (max-width: 767px) {\n  nav .container-items ul li a {\n    color: #FFF;\n    display: none;\n    font-size: 20pt;\n  }\n}\nnav .container-items.openMenu {\n  background: #eb92be;\n  -webkit-transition: 250ms ease;\n  transition: 250ms ease;\n  width: 100%;\n  overflow-y: scroll;\n}\nnav .container-items.openMenu ul {\n  display: block;\n}\nnav .container-items.openMenu ul li a {\n  display: block;\n}\nnav .container-icons {\n  right: 0;\n  top: 0;\n  height: 100%;\n}\nnav .container-icons i {\n  font-size: 30px;\n}\nnav .container-icons i.icon-reorder {\n  color: #00146e;\n}\nnav .container-icons i.icon-remove {\n  color: #00146e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL0M6XFxhbmd1bGFyXFxwb3J0Zm9saW8vc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxVQUFBO0VBQ0EsNENBQUE7QUNERjtBRElJO0VBQ0UsWUFBQTtBQ0ZOO0FESU07RUFIRjtJQUlJLFlBQUE7RUNETjtBQUNGO0FES0U7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNISjtBREtJO0VBTEY7SUFNSSxXQUFBO0lBQ0EsU0FBQTtFQ0ZKO0FBQ0Y7QURLRTtFQUNFLGVBQUE7QUNISjtBREtJO0VBSEY7SUFJSSxnQkFBQTtJQUNBLFFBQUE7SUFDQSxZQUFBO0lBQ0EsOEJBQUE7SUFBQSxzQkFBQTtJQUNBLE9BQUE7SUFDQSxNQUFBO0lBQ0EsZUFBQTtFQ0ZKO0FBQ0Y7QURLTTtFQURGO0lBRUksWUFBQTtJQUNBLGFBQUE7RUNGTjtBQUNGO0FES1E7RUFDRSxjQUFBO0VBQ0EsZ0NBQUE7RUFBQSx3QkFBQTtFQUNBLGVBQUE7QUNIVjtBREtVO0VBQ0UsZ0NBQUE7RUFBQSx3QkFBQTtFQUNBLGNBQUE7QUNIWjtBRE1VO0VBVkY7SUFXSSxXQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7RUNIVjtBQUNGO0FEUUk7RUFDRSxtQkFBQTtFQUNBLDhCQUFBO0VBQUEsc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNOTjtBRFFNO0VBQ0UsY0FBQTtBQ05SO0FEU1U7RUFDRSxjQUFBO0FDUFo7QURjRTtFQUNFLFFBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtBQ1pKO0FEY0k7RUFDRSxlQUFBO0FDWk47QURjTTtFQUNFLGNBQUE7QUNaUjtBRGVNO0VBQ0UsY0FBQTtBQ2JSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uL2Fzc2V0cy9zdHlsZS9wYWxldHRlLnNjc3NcIjtcclxuXHJcbm5hdiB7XHJcbiAgei1pbmRleDogMjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE0KTtcclxuXHJcbiAgLmNvbnRhaW5lci1sb2dvIHtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFwcC1kcm9wZG93biB7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHRvcDogLTEycHg7XHJcbiAgICB3aWR0aDogODFweDtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIHJpZ2h0OiA1MHB4O1xyXG4gICAgICB0b3A6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLWl0ZW1zIHtcclxuICAgIGZvbnQtc2l6ZTogMTNwdDtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHRyYW5zaXRpb246IDUwMG1zIGVhc2U7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICcyJyk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcyBsaW5lYXI7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zIGxpbmVhcjtcclxuICAgICAgICAgICAgY29sb3I6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMycpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLm9wZW5NZW51IHtcclxuICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICc0Jyk7XHJcbiAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXItaWNvbnMge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuXHJcbiAgICAgICYuaWNvbi1yZW9yZGVyIHtcclxuICAgICAgICBjb2xvcjogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICcxJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuaWNvbi1yZW1vdmUge1xyXG4gICAgICAgIGNvbG9yOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzEnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSIsIm5hdiB7XG4gIHotaW5kZXg6IDI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xufVxubmF2IC5jb250YWluZXItbG9nbyBpbWcge1xuICB3aWR0aDogMTUwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIG5hdiAuY29udGFpbmVyLWxvZ28gaW1nIHtcbiAgICB3aWR0aDogMTMwcHg7XG4gIH1cbn1cbm5hdiBhcHAtZHJvcGRvd24ge1xuICByaWdodDogMTVweDtcbiAgdG9wOiAtMTJweDtcbiAgd2lkdGg6IDgxcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIG5hdiBhcHAtZHJvcGRvd24ge1xuICAgIHJpZ2h0OiA1MHB4O1xuICAgIHRvcDogMTRweDtcbiAgfVxufVxubmF2IC5jb250YWluZXItaXRlbXMge1xuICBmb250LXNpemU6IDEzcHQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIG5hdiAuY29udGFpbmVyLWl0ZW1zIHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiA1MDBtcyBlYXNlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICBuYXYgLmNvbnRhaW5lci1pdGVtcyB1bCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbm5hdiAuY29udGFpbmVyLWl0ZW1zIHVsIGxpIGEge1xuICBjb2xvcjogIzAwNDFhMDtcbiAgdHJhbnNpdGlvbjogMjAwbXMgbGluZWFyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5uYXYgLmNvbnRhaW5lci1pdGVtcyB1bCBsaSBhOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMjAwbXMgbGluZWFyO1xuICBjb2xvcjogIzAwZTFlMTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgbmF2IC5jb250YWluZXItaXRlbXMgdWwgbGkgYSB7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmb250LXNpemU6IDIwcHQ7XG4gIH1cbn1cbm5hdiAuY29udGFpbmVyLWl0ZW1zLm9wZW5NZW51IHtcbiAgYmFja2dyb3VuZDogI2ViOTJiZTtcbiAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbm5hdiAuY29udGFpbmVyLWl0ZW1zLm9wZW5NZW51IHVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5uYXYgLmNvbnRhaW5lci1pdGVtcy5vcGVuTWVudSB1bCBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5uYXYgLmNvbnRhaW5lci1pY29ucyB7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cbm5hdiAuY29udGFpbmVyLWljb25zIGkge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5uYXYgLmNvbnRhaW5lci1pY29ucyBpLmljb24tcmVvcmRlciB7XG4gIGNvbG9yOiAjMDAxNDZlO1xufVxubmF2IC5jb250YWluZXItaWNvbnMgaS5pY29uLXJlbW92ZSB7XG4gIGNvbG9yOiAjMDAxNDZlO1xufSJdfQ== */");

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

module.exports = __webpack_require__(/*! C:\angular\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map