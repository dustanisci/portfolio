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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/navbar/navbar.component */ "./src/app/shared/components/navbar/navbar.component.ts");
/* harmony import */ var _container_about_container_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container-about/container-about.component */ "./src/app/container-about/container-about.component.ts");
/* harmony import */ var _container_skills_container_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container-skills/container-skills.component */ "./src/app/container-skills/container-skills.component.ts");
/* harmony import */ var _container_portfolio_container_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./container-portfolio/container-portfolio.component */ "./src/app/container-portfolio/container-portfolio.component.ts");
/* harmony import */ var _container_contact_container_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./container-contact/container-contact.component */ "./src/app/container-contact/container-contact.component.ts");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");









class AppComponent {
    constructor() {
        this.multiloader = {};
        this.openedMenu = false;
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1__["init"]();
        this.multiloader.about = true;
        this.multiloader.portfolio = true;
        this.multiloader.skills = true;
        this.multiloader.navbar = true;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 2, consts: [[3, "openedMenu", "changedLanguage"], [3, "actionTranslate"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedMenu", function AppComponent_Template_app_navbar_openedMenu_0_listener($event) { return ctx.openedMenu = $event; })("changedLanguage", function AppComponent_Template_app_navbar_changedLanguage_0_listener($event) { return ctx.changedLanguage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-container-about", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-container-skills", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-container-portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-container-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("actionTranslate", ctx.changedLanguage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("actionTranslate", ctx.changedLanguage);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _container_about_container_about_component__WEBPACK_IMPORTED_MODULE_3__["ContainerAboutComponent"], _container_skills_container_skills_component__WEBPACK_IMPORTED_MODULE_4__["ContainerSkillsComponent"], _container_portfolio_container_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["ContainerPortfolioComponent"], _container_contact_container_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContainerContactComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: [".container-loader[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.container-loader[_ngcontent-%COMP%]   .spinner-border[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHBvcnRmb2xpby1hbmd1bGFyOS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWxvYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG5cclxuICAuc3Bpbm5lci1ib3JkZXIge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lci1sb2FkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4uY29udGFpbmVyLWxvYWRlciAuc3Bpbm5lci1ib3JkZXIge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _container_about_container_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container-about/container-about.component */ "./src/app/container-about/container-about.component.ts");
/* harmony import */ var _container_contact_container_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./container-contact/container-contact.component */ "./src/app/container-contact/container-contact.component.ts");
/* harmony import */ var _container_portfolio_container_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./container-portfolio/container-portfolio.component */ "./src/app/container-portfolio/container-portfolio.component.ts");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/components/navbar/navbar.component */ "./src/app/shared/components/navbar/navbar.component.ts");
/* harmony import */ var _shared_components_container_geometric_container_geometric_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/container-geometric/container-geometric.component */ "./src/app/shared/components/container-geometric/container-geometric.component.ts");
/* harmony import */ var _container_skills_container_skills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./container-skills/container-skills.component */ "./src/app/container-skills/container-skills.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/modal/modal.component */ "./src/app/shared/components/modal/modal.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _shared_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/components/dropdown/dropdown.component */ "./src/app/shared/components/dropdown/dropdown.component.ts");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _container_about_container_about_component__WEBPACK_IMPORTED_MODULE_4__["ContainerAboutComponent"],
        _container_contact_container_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContainerContactComponent"],
        _container_portfolio_container_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["ContainerPortfolioComponent"],
        _container_skills_container_skills_component__WEBPACK_IMPORTED_MODULE_9__["ContainerSkillsComponent"],
        _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
        _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
        _shared_components_container_geometric_container_geometric_component__WEBPACK_IMPORTED_MODULE_8__["ContainerGeometricComponent"],
        _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_11__["ModalComponent"],
        _shared_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_14__["DropdownComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _container_about_container_about_component__WEBPACK_IMPORTED_MODULE_4__["ContainerAboutComponent"],
                    _container_contact_container_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContainerContactComponent"],
                    _container_portfolio_container_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["ContainerPortfolioComponent"],
                    _container_skills_container_skills_component__WEBPACK_IMPORTED_MODULE_9__["ContainerSkillsComponent"],
                    _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                    _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                    _shared_components_container_geometric_container_geometric_component__WEBPACK_IMPORTED_MODULE_8__["ContainerGeometricComponent"],
                    _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_11__["ModalComponent"],
                    _shared_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_14__["DropdownComponent"],
                ],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                        }
                    })
                ],
                providers: [],
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ]
            }]
    }], null, null); })();
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _container_about_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container-about.service */ "./src/app/container-about/container-about.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ContainerAboutComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.description, " ");
} }
class ContainerAboutComponent {
    constructor(aboutService, translate) {
        this.aboutService = aboutService;
        this.translate = translate;
        this.about = [];
        this.loader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
}
ContainerAboutComponent.ɵfac = function ContainerAboutComponent_Factory(t) { return new (t || ContainerAboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_container_about_service__WEBPACK_IMPORTED_MODULE_1__["ContainerAboutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
ContainerAboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContainerAboutComponent, selectors: [["app-container-about"]], inputs: { actionTranslate: "actionTranslate" }, outputs: { loader: "loader" }, decls: 19, vars: 7, consts: [["id", "about", 1, "container"], [1, "row"], [1, "container-title", "col-12"], ["data-aos", "fade-right", "data-aos-easing", "linear", "data-aos-duration", "500", 1, "portfolio-title", "position-relative"], [1, "container-photo", "flex-column", "col-lg-5", "col-sm-12", "mt-md-5", "pt-4", "text-center", "pt-4", "d-lg-flex", "align-items-center", "justify-content-center"], ["data-aos", "flip-left", "data-aos-easing", "linear", "data-aos-duration", "700", "src", "assets/img/about.jpg", 1, "mt-80"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "500", 1, "blockquote", "text-lg-right", "mt-4", "mb-0"], [1, "mb-0"], [1, "blockquote-footer"], ["title", "Ray Goforth"], [1, "container-description", "col-lg-6", "offset-lg-1"], [1, "col-lg-12", "col-sm-12", "d-md-flex", "mb-4", "mt-lg-0", "mt-4"], [1, "row", "d-lg-flex", "align-items-md-center", "justify-content-md-center"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "350", "class", "mt-3 mb-3 m-lg-0 col-lg-6 item p-4 text-center align-self-stretch align-items-center justify-content-center d-flex", 4, "ngFor", "ngForOf"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "350", 1, "mt-3", "mb-3", "m-lg-0", "col-lg-6", "item", "p-4", "text-center", "align-self-stretch", "align-items-center", "justify-content-center", "d-flex"]], template: function ContainerAboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "blockquote", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "footer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "cite", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ray Goforth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ContainerAboutComponent_div_18_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "COMMON.ABOUT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, "ABOUT.QUOTE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.about);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  padding-top: 130px;\n}\n@media only screen and (max-width: 767px) {\n  .container[_ngcontent-%COMP%] {\n    padding-top: 90px;\n  }\n}\n.container[_ngcontent-%COMP%]   .container-title[_ngcontent-%COMP%]   .portfolio-title[_ngcontent-%COMP%]:before {\n  background: #00e1e1;\n  position: absolute;\n}\n.container[_ngcontent-%COMP%]   .container-title[_ngcontent-%COMP%]   .portfolio-title[_ngcontent-%COMP%]::first-letter {\n  color: #00e1e1;\n  font-weight: bolder;\n}\n.container[_ngcontent-%COMP%]   .container-photo[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12pt;\n}\n.container[_ngcontent-%COMP%]   .container-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n  padding: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n}\n.container[_ngcontent-%COMP%]   .container-description[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  min-height: 200px;\n  font-size: 11pt;\n}\n@media only screen and (max-width: 991px) {\n  .container[_ngcontent-%COMP%]   .container-description[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    border: 1px solid rgba(0, 0, 0, 0.4);\n  }\n}\n@media only screen and (max-width: 767px) {\n  .container[_ngcontent-%COMP%]   .container-description[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    -webkit-animation: none;\n            animation: none;\n  }\n}\n.container[_ngcontent-%COMP%]   .container-description[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-of-type(1) {\n  background: #00146e;\n  color: #FFF;\n}\n.container[_ngcontent-%COMP%]   .container-description[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-of-type(2) {\n  background: #0041a0;\n  color: #FFF;\n}\n.container[_ngcontent-%COMP%]   .container-description[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-of-type(3) {\n  background: #00e1e1;\n  font-weight: bolder;\n}\n.container[_ngcontent-%COMP%]   .container-description[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-of-type(4) {\n  background: #eb92be;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVyLWFib3V0L0M6XFxwb3J0Zm9saW8tYW5ndWxhcjkvc3JjXFxhcHBcXGNvbnRhaW5lci1hYm91dFxcY29udGFpbmVyLWFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXItYWJvdXQvY29udGFpbmVyLWFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7QUNERjtBREdFO0VBSEY7SUFJSSxpQkFBQTtFQ0FGO0FBQ0Y7QURJTTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNGUjtBREtNO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDSFI7QURVTTtFQUNFLGVBQUE7QUNSUjtBRFlJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQ1ZOO0FEZ0JJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDZE47QURnQk07RUFKRjtJQUtJLG9DQUFBO0VDYk47QUFDRjtBRGVNO0VBUkY7SUFTSSx1QkFBQTtZQUFBLGVBQUE7RUNaTjtBQUNGO0FEZUk7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNiTjtBRGdCSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ2ROO0FEaUJJO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQ2ZOO0FEa0JJO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQ2hCTiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci1hYm91dC9jb250YWluZXItYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi9hc3NldHMvc3R5bGUvcGFsZXR0ZS5zY3NzXCI7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogMTMwcHg7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIHBhZGRpbmctdG9wOiA5MHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci10aXRsZSB7XHJcbiAgICAucG9ydGZvbGlvLXRpdGxlIHtcclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMycpO1xyXG4gICAgICAgIHBvc2l0aW9uICA6IGFic29sdXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOjpmaXJzdC1sZXR0ZXIge1xyXG4gICAgICAgIGNvbG9yICAgICAgOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzMnKTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLXBob3RvIHtcclxuICAgIGJsb2NrcXVvdGUge1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoICAgICAgICA6IDIwMHB4O1xyXG4gICAgICBoZWlnaHQgICAgICAgOiAyMDBweDtcclxuICAgICAgcGFkZGluZyAgICAgIDogNXB4O1xyXG4gICAgICBib3JkZXIgICAgICAgOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXItZGVzY3JpcHRpb24ge1xyXG5cclxuICAgIC5pdGVtIHtcclxuICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZSA6IDExcHQ7XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtOm50aC1vZi10eXBlKDEpIHtcclxuICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICcxJyk7XHJcbiAgICAgIGNvbG9yICAgICA6ICNGRkY7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW06bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzInKTtcclxuICAgICAgY29sb3IgICAgIDogI0ZGRjtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbTpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMycpO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtOm50aC1vZi10eXBlKDQpIHtcclxuICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICc0Jyk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxMzBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDkwcHg7XG4gIH1cbn1cbi5jb250YWluZXIgLmNvbnRhaW5lci10aXRsZSAucG9ydGZvbGlvLXRpdGxlOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICMwMGUxZTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jb250YWluZXIgLmNvbnRhaW5lci10aXRsZSAucG9ydGZvbGlvLXRpdGxlOjpmaXJzdC1sZXR0ZXIge1xuICBjb2xvcjogIzAwZTFlMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi5jb250YWluZXIgLmNvbnRhaW5lci1waG90byBibG9ja3F1b3RlIHAge1xuICBmb250LXNpemU6IDEycHQ7XG59XG4uY29udGFpbmVyIC5jb250YWluZXItcGhvdG8gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLWRlc2NyaXB0aW9uIC5pdGVtIHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIGZvbnQtc2l6ZTogMTFwdDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmNvbnRhaW5lciAuY29udGFpbmVyLWRlc2NyaXB0aW9uIC5pdGVtIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRhaW5lciAuY29udGFpbmVyLWRlc2NyaXB0aW9uIC5pdGVtIHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gIH1cbn1cbi5jb250YWluZXIgLmNvbnRhaW5lci1kZXNjcmlwdGlvbiAuaXRlbTpudGgtb2YtdHlwZSgxKSB7XG4gIGJhY2tncm91bmQ6ICMwMDE0NmU7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLWRlc2NyaXB0aW9uIC5pdGVtOm50aC1vZi10eXBlKDIpIHtcbiAgYmFja2dyb3VuZDogIzAwNDFhMDtcbiAgY29sb3I6ICNGRkY7XG59XG4uY29udGFpbmVyIC5jb250YWluZXItZGVzY3JpcHRpb24gLml0ZW06bnRoLW9mLXR5cGUoMykge1xuICBiYWNrZ3JvdW5kOiAjMDBlMWUxO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLWRlc2NyaXB0aW9uIC5pdGVtOm50aC1vZi10eXBlKDQpIHtcbiAgYmFja2dyb3VuZDogI2ViOTJiZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerAboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-container-about',
                templateUrl: './container-about.component.html',
                styleUrls: ['./container-about.component.scss']
            }]
    }], function () { return [{ type: _container_about_service__WEBPACK_IMPORTED_MODULE_1__["ContainerAboutService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, { loader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], actionTranslate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/api/api.service */ "./src/app/shared/api/api.service.ts");




class ContainerAboutService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    dataAbout() {
        return this.apiService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["endpoint"].about);
    }
}
ContainerAboutService.ɵfac = function ContainerAboutService_Factory(t) { return new (t || ContainerAboutService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
ContainerAboutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContainerAboutService, factory: ContainerAboutService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerAboutService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_components_container_geometric_container_geometric_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/container-geometric/container-geometric.component */ "./src/app/shared/components/container-geometric/container-geometric.component.ts");




class ContainerContactComponent {
    constructor(translate) {
        this.translate = translate;
    }
    ngOnInit() {
        this.translate.get('COMMON.ABOUT').subscribe((res) => {
            this.title = res;
        });
    }
}
ContainerContactComponent.ɵfac = function ContainerContactComponent_Factory(t) { return new (t || ContainerContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
ContainerContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContainerContactComponent, selectors: [["app-container-contact"]], inputs: { languageId: "languageId" }, decls: 17, vars: 4, consts: [["color", "#FFF", 1, "d-block", "mt-5", 3, "backgroundColor"], ["data-aos", "zoom-in-down", "id", "contact", 1, "container", "pb-5"], [1, "row"], [1, "container-title", "col-12", "mt-md-3", "mb-5", "pt-5", "text-center"], ["data-aos", "fade-right", "data-aos-easing", "linear", "data-aos-duration", "500", 1, "portfolio-title", "position-relative"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "800", 1, "container-mail", "col-12", "text-center", "mt-4", "mb-3"], ["href", "mailto:dustanisci@outlook.com", 1, "text-decoration-none", "pb-2"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "800", 1, "container-social", "col-12", "d-flex", "justify-content-center", "mt-4", "mb-4"], ["href", "https://www.linkedin.com/in/dustanisci/", "target", "_blank", 1, "ml-2", "mr-2", "d-flex", "align-items-center", "justify-content-center", "text-decoration-none", "d-inline-block"], [1, "d-flex", "icon-linkedin"], ["href", "https://github.com/dustanisci", "target", "_blank", 1, "ml-4", "mr-4", "d-flex", "align-items-center", "justify-content-center", "text-decoration-none", "d-inline-block"], [1, "icon-github-alt"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "800", "data-aos", "flip-left", "data-aos-easing", "ease-out-cubic", "data-aos-duration", "800", 1, "container-img", "col-12", "text-center", "mt-5"], ["src", "./assets/img/chamaleon2.png"]], template: function ContainerContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-container-geometric", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "dustanisci@outlook.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backgroundColor", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, "COMMON.CONTACT"));
    } }, directives: [_shared_components_container_geometric_container_geometric_component__WEBPACK_IMPORTED_MODULE_2__["ContainerGeometricComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["app-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-title[_ngcontent-%COMP%]   .portfolio-title[_ngcontent-%COMP%]:before {\n  background: #000;\n  position: absolute;\n}\napp-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-title[_ngcontent-%COMP%]   .portfolio-title[_ngcontent-%COMP%]::first-letter {\n  color: #000;\n  font-weight: bolder;\n}\napp-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-mail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 19pt;\n  color: #000;\n  border-bottom: 3px solid #FFF;\n  -webkit-transition: 300ms linear;\n  transition: 300ms linear;\n}\napp-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-mail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid #0041a0;\n  -webkit-transition: 300ms linear;\n  transition: 300ms linear;\n}\napp-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 50px;\n  background: #000;\n  cursor: pointer;\n  -webkit-transition: 300ms linear;\n  transition: 300ms linear;\n}\napp-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #00146e;\n  -webkit-transition: 300ms linear;\n  transition: 300ms linear;\n}\napp-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #FFF;\n}\napp-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVyLWNvbnRhY3QvQzpcXHBvcnRmb2xpby1hbmd1bGFyOS9zcmNcXGFwcFxcY29udGFpbmVyLWNvbnRhY3RcXGNvbnRhaW5lci1jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXItY29udGFjdC9jb250YWluZXItY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNUTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNMVjtBRFFRO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FDTlY7QURZTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUFBLHdCQUFBO0FDVlI7QURZUTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7RUFBQSx3QkFBQTtBQ1ZWO0FEaUJNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUFBLHdCQUFBO0FDZlI7QURpQlE7RUFDRSxtQkFBQTtFQUNBLGdDQUFBO0VBQUEsd0JBQUE7QUNmVjtBRGtCUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDaEJWO0FEdUJNO0VBQ0UsWUFBQTtBQ3JCUiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci1jb250YWN0L2NvbnRhaW5lci1jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vYXNzZXRzL3N0eWxlL3BhbGV0dGUuc2Nzc1wiO1xyXG5cclxuYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgLmNvbnRhaW5lci10aXRsZSB7XHJcbiAgICAgIC5wb3J0Zm9saW8tdGl0bGUge1xyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjpmaXJzdC1sZXR0ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXItbWFpbCB7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlwdDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0ZGRjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcyBsaW5lYXI7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMicpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMzAwbXMgbGluZWFyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXItc29jaWFsIHtcclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcyBsaW5lYXI7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICcxJyk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcyBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyLWltZyB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSIsImFwcC1jb250YWluZXItZ2VvbWV0cmljIC5jb250YWluZXIgLmNvbnRhaW5lci10aXRsZSAucG9ydGZvbGlvLXRpdGxlOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbmFwcC1jb250YWluZXItZ2VvbWV0cmljIC5jb250YWluZXIgLmNvbnRhaW5lci10aXRsZSAucG9ydGZvbGlvLXRpdGxlOjpmaXJzdC1sZXR0ZXIge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbmFwcC1jb250YWluZXItZ2VvbWV0cmljIC5jb250YWluZXIgLmNvbnRhaW5lci1tYWlsIGEge1xuICBmb250LXNpemU6IDE5cHQ7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0ZGRjtcbiAgdHJhbnNpdGlvbjogMzAwbXMgbGluZWFyO1xufVxuYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMgLmNvbnRhaW5lciAuY29udGFpbmVyLW1haWwgYTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA0MWEwO1xuICB0cmFuc2l0aW9uOiAzMDBtcyBsaW5lYXI7XG59XG5hcHAtY29udGFpbmVyLWdlb21ldHJpYyAuY29udGFpbmVyIC5jb250YWluZXItc29jaWFsIGEge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDMwMG1zIGxpbmVhcjtcbn1cbmFwcC1jb250YWluZXItZ2VvbWV0cmljIC5jb250YWluZXIgLmNvbnRhaW5lci1zb2NpYWwgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDE0NmU7XG4gIHRyYW5zaXRpb246IDMwMG1zIGxpbmVhcjtcbn1cbmFwcC1jb250YWluZXItZ2VvbWV0cmljIC5jb250YWluZXIgLmNvbnRhaW5lci1zb2NpYWwgYSBpIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogI0ZGRjtcbn1cbmFwcC1jb250YWluZXItZ2VvbWV0cmljIC5jb250YWluZXIgLmNvbnRhaW5lci1pbWcgaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-container-contact',
                templateUrl: './container-contact.component.html',
                styleUrls: ['./container-contact.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, { languageId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _container_portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container-portfolio.service */ "./src/app/container-portfolio/container-portfolio.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/modal/modal.component */ "./src/app/shared/components/modal/modal.component.ts");






const _c0 = ["list"];
function ContainerPortfolioComponent_ng_container_8_div_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const project_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", project_r8.galerias[0].url_galeria, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ContainerPortfolioComponent_ng_container_8_div_1_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "MODAL.IMAGE"), " 1 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "MODAL.OF"), " ", project_r8.galerias.length, "");
} }
function ContainerPortfolioComponent_ng_container_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContainerPortfolioComponent_ng_container_8_div_1_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const project_r8 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.actionModal(project_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContainerPortfolioComponent_ng_container_8_div_1_img_1_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContainerPortfolioComponent_ng_container_8_div_1_label_2_Template, 4, 7, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r8);
} }
function ContainerPortfolioComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContainerPortfolioComponent_ng_container_8_div_1_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.portfolioTwoItems);
} }
function ContainerPortfolioComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 19);
} }
const _c1 = function (a0) { return { "active": a0 }; };
function ContainerPortfolioComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContainerPortfolioComponent_li_13_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const i_r16 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r17.setItemsByIndex(i_r16); return ctx_r17.setClassActive(i_r16 + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, i_r16 === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r16 + 1);
} }
function ContainerPortfolioComponent_app_modal_14_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-modal", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function ContainerPortfolioComponent_app_modal_14_Template_app_modal_closed_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.showModal = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("actionModal", ctx_r6.showModal)("setProject", ctx_r6.openedProject);
} }
const _c2 = function () { return []; };
class ContainerPortfolioComponent {
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
        this.loader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
}
ContainerPortfolioComponent.ɵfac = function ContainerPortfolioComponent_Factory(t) { return new (t || ContainerPortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_container_portfolio_service__WEBPACK_IMPORTED_MODULE_1__["ContainerPortfolioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
ContainerPortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContainerPortfolioComponent, selectors: [["app-container-portfolio"]], viewQuery: function ContainerPortfolioComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.list = _t.first);
    } }, outputs: { loader: "loader" }, decls: 15, vars: 8, consts: [["id", "portfolio", 1, "container", "mt-4"], [1, "row"], [1, "container-title", "col-12", "mt-md-5", "mb-md-5", "mb-4", "pt-3", "pb-3"], ["data-aos", "fade-right", "data-aos-easing", "linear", "data-aos-duration", "500", 1, "portfolio-title", "position-relative"], [1, "container-projects", "col-12"], [1, "row", "d-lg-flex", "align-items-md-center", "justify-content-md-between"], [4, "ngIf"], ["class", "spinner-border text-dark", "role", "status", 4, "ngIf"], [1, "container-pagination", "col-12"], [1, "pagination", "justify-content-center", "row"], ["list", ""], ["class", "m-sm-0 ml-3 mr-3 mb-3 display-inline-block page-item text-center", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "actionModal", "setProject", "closed", 4, "ngIf"], ["class", "col-lg-5 col-12 pb-lg-6", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-lg-5", "col-12", "pb-lg-6", 3, "click"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "800", "class", "pb-3 img-fluid", 3, "src", 4, "ngIf"], ["class", "pt-2 d-block font-weight-bolder text-center", 4, "ngIf"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "800", 1, "pb-3", "img-fluid", 3, "src"], [1, "pt-2", "d-block", "font-weight-bolder", "text-center"], ["role", "status", 1, "spinner-border", "text-dark"], [1, "m-sm-0", "ml-3", "mr-3", "mb-3", "display-inline-block", "page-item", "text-center", 3, "ngClass", "click"], ["href", "#portfolio", 1, "page-link"], [3, "actionModal", "setProject", "closed"]], template: function ContainerPortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ContainerPortfolioComponent_ng_container_8_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ContainerPortfolioComponent_div_9_Template, 1, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nav", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ContainerPortfolioComponent_li_13_Template, 3, 4, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ContainerPortfolioComponent_app_modal_14_Template, 1, 2, "app-modal", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "COMMON.PORTFOLIO"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loaderPortfolio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaderPortfolio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2).constructor(ctx.index));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.portfolioTwoItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: [".container[_ngcontent-%COMP%]   .container-title[_ngcontent-%COMP%]   .portfolio-title[_ngcontent-%COMP%]:before {\n  background: #00146e;\n  position: absolute;\n}\n.container[_ngcontent-%COMP%]   .container-title[_ngcontent-%COMP%]   .portfolio-title[_ngcontent-%COMP%]::first-letter {\n  color: #00146e;\n  font-weight: bolder;\n}\n.container[_ngcontent-%COMP%]   .container-projects[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  min-height: 410px;\n}\n@media only screen and (max-width: 991px) {\n  .container[_ngcontent-%COMP%]   .container-projects[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    min-height: 920px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .container[_ngcontent-%COMP%]   .container-projects[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    min-height: 782px;\n  }\n}\n@media only screen and (max-width: 500px) {\n  .container[_ngcontent-%COMP%]   .container-projects[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    min-height: 550px;\n  }\n}\n.container[_ngcontent-%COMP%]   .container-projects[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-bottom: 4px solid #0041a0;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .container-projects[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .spinner-border[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  width: 50px;\n  height: 50px;\n}\n.container[_ngcontent-%COMP%]   .container-pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%] {\n  z-index: 0;\n}\n@media only screen and (max-width: 991px) {\n  .container[_ngcontent-%COMP%]   .container-pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%] {\n    width: 40px;\n  }\n}\n.container[_ngcontent-%COMP%]   .container-pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #FFF;\n  background: #0041a0;\n  -webkit-transition: 250ms ease;\n  transition: 250ms ease;\n  cursor: pointer;\n  border: 1px solid rgba(0, 0, 0, 0.14);\n}\n@media only screen and (max-width: 991px) {\n  .container[_ngcontent-%COMP%]   .container-pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 20pt;\n  }\n}\n.container[_ngcontent-%COMP%]   .container-pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #eb92be;\n  -webkit-transition: 250ms ease;\n  transition: 250ms ease;\n}\n.container[_ngcontent-%COMP%]   .container-pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #eb92be;\n}\n.container[_ngcontent-%COMP%]   .container-pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  background: #eb92be;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVyLXBvcnRmb2xpby9DOlxccG9ydGZvbGlvLWFuZ3VsYXI5L3NyY1xcYXBwXFxjb250YWluZXItcG9ydGZvbGlvXFxjb250YWluZXItcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXItcG9ydGZvbGlvL2NvbnRhaW5lci1wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS007RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FDSlI7QURPTTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ0xSO0FEV0k7RUFDRSxpQkFBQTtBQ1ROO0FEV007RUFIRjtJQUlJLGlCQUFBO0VDUk47QUFDRjtBRFVNO0VBUEY7SUFRSSxpQkFBQTtFQ1BOO0FBQ0Y7QURTTTtFQVhGO0lBWUksaUJBQUE7RUNOTjtBQUNGO0FEUU07RUFDRSxnQ0FBQTtFQUNBLGVBQUE7QUNOUjtBRFNNO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1BSO0FEYUk7RUFDRSxVQUFBO0FDWE47QURhTTtFQUhGO0lBSUksV0FBQTtFQ1ZOO0FBQ0Y7QURZTTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQUEsc0JBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7QUNWUjtBRFlRO0VBUEY7SUFRSSxlQUFBO0VDVFI7QUFDRjtBRFdRO0VBQ0UsbUJBQUE7RUFDQSw4QkFBQTtFQUFBLHNCQUFBO0FDVFY7QURjUTtFQUNFLG1CQUFBO0FDWlY7QURjVTtFQUNFLG1CQUFBO0FDWloiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXItcG9ydGZvbGlvL2NvbnRhaW5lci1wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi9hc3NldHMvc3R5bGUvcGFsZXR0ZS5zY3NzXCI7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAuY29udGFpbmVyLXRpdGxlIHtcclxuICAgIC5wb3J0Zm9saW8tdGl0bGUge1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICcxJyk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOjpmaXJzdC1sZXR0ZXIge1xyXG4gICAgICAgIGNvbG9yOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzEnKTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLXByb2plY3RzIHtcclxuICAgIC5yb3cge1xyXG4gICAgICBtaW4taGVpZ2h0OiA0MTBweDtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA5MjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDc4MnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTUwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMicpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNwaW5uZXItYm9yZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXItcGFnaW5hdGlvbiB7XHJcbiAgICAucGFnZS1pdGVtIHtcclxuICAgICAgei1pbmRleDogMDtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICcyJyk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE0KTtcclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzQnKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzQnKTtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICc0Jyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5jb250YWluZXIgLmNvbnRhaW5lci10aXRsZSAucG9ydGZvbGlvLXRpdGxlOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICMwMDE0NmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jb250YWluZXIgLmNvbnRhaW5lci10aXRsZSAucG9ydGZvbGlvLXRpdGxlOjpmaXJzdC1sZXR0ZXIge1xuICBjb2xvcjogIzAwMTQ2ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi5jb250YWluZXIgLmNvbnRhaW5lci1wcm9qZWN0cyAucm93IHtcbiAgbWluLWhlaWdodDogNDEwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5jb250YWluZXIgLmNvbnRhaW5lci1wcm9qZWN0cyAucm93IHtcbiAgICBtaW4taGVpZ2h0OiA5MjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGFpbmVyIC5jb250YWluZXItcHJvamVjdHMgLnJvdyB7XG4gICAgbWluLWhlaWdodDogNzgycHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29udGFpbmVyLXByb2plY3RzIC5yb3cge1xuICAgIG1pbi1oZWlnaHQ6IDU1MHB4O1xuICB9XG59XG4uY29udGFpbmVyIC5jb250YWluZXItcHJvamVjdHMgLnJvdyBpbWcge1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzAwNDFhMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLXByb2plY3RzIC5yb3cgLnNwaW5uZXItYm9yZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLXBhZ2luYXRpb24gLnBhZ2UtaXRlbSB7XG4gIHotaW5kZXg6IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5jb250YWluZXIgLmNvbnRhaW5lci1wYWdpbmF0aW9uIC5wYWdlLWl0ZW0ge1xuICAgIHdpZHRoOiA0MHB4O1xuICB9XG59XG4uY29udGFpbmVyIC5jb250YWluZXItcGFnaW5hdGlvbiAucGFnZS1pdGVtIGEge1xuICBjb2xvcjogI0ZGRjtcbiAgYmFja2dyb3VuZDogIzAwNDFhMDtcbiAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuY29udGFpbmVyIC5jb250YWluZXItcGFnaW5hdGlvbiAucGFnZS1pdGVtIGEge1xuICAgIGZvbnQtc2l6ZTogMjBwdDtcbiAgfVxufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLXBhZ2luYXRpb24gLnBhZ2UtaXRlbSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ViOTJiZTtcbiAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcbn1cbi5jb250YWluZXIgLmNvbnRhaW5lci1wYWdpbmF0aW9uIC5wYWdlLWl0ZW0uYWN0aXZlIGEge1xuICBiYWNrZ3JvdW5kOiAjZWI5MmJlO1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLXBhZ2luYXRpb24gLnBhZ2UtaXRlbS5hY3RpdmUgYTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICNlYjkyYmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerPortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-container-portfolio',
                templateUrl: './container-portfolio.component.html',
                styleUrls: ['./container-portfolio.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _container_portfolio_service__WEBPACK_IMPORTED_MODULE_1__["ContainerPortfolioService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, { loader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['list']
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/api/api.service */ "./src/app/shared/api/api.service.ts");




class ContainerPortfolioService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    dataPortfolio() {
        return this.apiService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["endpoint"].portfolio);
    }
}
ContainerPortfolioService.ɵfac = function ContainerPortfolioService_Factory(t) { return new (t || ContainerPortfolioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
ContainerPortfolioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContainerPortfolioService, factory: ContainerPortfolioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerPortfolioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _container_skills_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container-skills.service */ "./src/app/container-skills/container-skills.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_components_container_geometric_container_geometric_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/container-geometric/container-geometric.component */ "./src/app/shared/components/container-geometric/container-geometric.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ContainerSkillsComponent_div_10_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r34, " ");
} }
function ContainerSkillsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ContainerSkillsComponent_div_10_li_4_Template, 2, 1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r32.technology);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", skill_r32.value);
} }
class ContainerSkillsComponent {
    constructor(skillService, translate) {
        this.skillService = skillService;
        this.translate = translate;
        this.loader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
}
ContainerSkillsComponent.ɵfac = function ContainerSkillsComponent_Factory(t) { return new (t || ContainerSkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_container_skills_service__WEBPACK_IMPORTED_MODULE_1__["ContainerSkillsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
ContainerSkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContainerSkillsComponent, selectors: [["app-container-skills"]], inputs: { actionTranslate: "actionTranslate" }, outputs: { loader: "loader" }, decls: 11, vars: 5, consts: [["color", "#FFF", 1, "d-block", "mt-4", "mt-md-5", "pt-md-4", 3, "backgroundColor"], ["id", "skills", 1, "container", "pb-5"], [1, "row", "pb-5"], [1, "container-title", "col-12", "mt-5", "mb-5", "pt-sm-5"], ["data-aos", "fade-right", "data-aos-easing", "linear", "data-aos-duration", "500", 1, "portfolio-title", "position-relative"], [1, "container-skills", "col-12"], [1, "col-12"], [1, "row", "d-lg-flex", "justify-content-md-between", "align-items-md-stretch"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "450", "class", "pl-0 pr-0 col-lg-2 col-md-6 pl-4 pr-3 col-sm-6 col-6 mt-4 d-lg-flex flex-column", 4, "ngFor", "ngForOf"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "450", 1, "pl-0", "pr-0", "col-lg-2", "col-md-6", "pl-4", "pr-3", "col-sm-6", "col-6", "mt-4", "d-lg-flex", "flex-column"], [1, "font-weight-bolder"], [1, "pt-2", "pl-3"], [4, "ngFor", "ngForOf"]], template: function ContainerSkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-container-geometric", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ContainerSkillsComponent_div_10_Template, 5, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backgroundColor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, "COMMON.SKILLS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
    } }, directives: [_shared_components_container_geometric_container_geometric_component__WEBPACK_IMPORTED_MODULE_3__["ContainerGeometricComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["app-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-title[_ngcontent-%COMP%]   .portfolio-title[_ngcontent-%COMP%]:before {\n  background: #eb92be;\n  position: absolute;\n}\napp-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-title[_ngcontent-%COMP%]   .portfolio-title[_ngcontent-%COMP%]::first-letter {\n  color: #eb92be;\n  font-weight: bolder;\n}\napp-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-skills[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\napp-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-skills[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15pt;\n}\napp-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-skills[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  font-size: 12pt;\n  list-style: none;\n  border-left: 3px solid rgba(255, 255, 255, 0.25);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVyLXNraWxscy9DOlxccG9ydGZvbGlvLWFuZ3VsYXI5L3NyY1xcYXBwXFxjb250YWluZXItc2tpbGxzXFxjb250YWluZXItc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXItc2tpbGxzL2NvbnRhaW5lci1za2lsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTVE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FDTFY7QURRUTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ05WO0FEYVE7RUFDRSwyQkFBQTtFQUNBLDBCQUFBO0FDWFY7QURhVTtFQUNFLGVBQUE7QUNYWjtBRGNVO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0RBQUE7QUNaWiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci1za2lsbHMvY29udGFpbmVyLXNraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uL2Fzc2V0cy9zdHlsZS9wYWxldHRlLnNjc3NcIjtcclxuXHJcbmFwcC1jb250YWluZXItZ2VvbWV0cmljIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIC5jb250YWluZXItdGl0bGUge1xyXG4gICAgICAucG9ydGZvbGlvLXRpdGxlIHtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzQnKTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6OmZpcnN0LWxldHRlciB7XHJcbiAgICAgICAgICBjb2xvcjogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICc0Jyk7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXItc2tpbGxzIHtcclxuICAgICAgLnJvdyB7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB0O1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxufSIsImFwcC1jb250YWluZXItZ2VvbWV0cmljIC5jb250YWluZXIgLmNvbnRhaW5lci10aXRsZSAucG9ydGZvbGlvLXRpdGxlOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICNlYjkyYmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbmFwcC1jb250YWluZXItZ2VvbWV0cmljIC5jb250YWluZXIgLmNvbnRhaW5lci10aXRsZSAucG9ydGZvbGlvLXRpdGxlOjpmaXJzdC1sZXR0ZXIge1xuICBjb2xvcjogI2ViOTJiZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbmFwcC1jb250YWluZXItZ2VvbWV0cmljIC5jb250YWluZXIgLmNvbnRhaW5lci1za2lsbHMgLnJvdyBkaXYge1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMgLmNvbnRhaW5lciAuY29udGFpbmVyLXNraWxscyAucm93IGRpdiBoMyB7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbn1cbmFwcC1jb250YWluZXItZ2VvbWV0cmljIC5jb250YWluZXIgLmNvbnRhaW5lci1za2lsbHMgLnJvdyBkaXYgdWwge1xuICBmb250LXNpemU6IDEycHQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerSkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-container-skills',
                templateUrl: './container-skills.component.html',
                styleUrls: ['./container-skills.component.scss']
            }]
    }], function () { return [{ type: _container_skills_service__WEBPACK_IMPORTED_MODULE_1__["ContainerSkillsService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, { actionTranslate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/api/api.service */ "./src/app/shared/api/api.service.ts");





class ContainerSkillsService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    dataTechnologies() {
        return this.apiService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["endpoint"].skills).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((resp) => resp.result));
    }
}
ContainerSkillsService.ɵfac = function ContainerSkillsService_Factory(t) { return new (t || ContainerSkillsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
ContainerSkillsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContainerSkillsService, factory: ContainerSkillsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerSkillsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ApiService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json');
        this.request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
    }
    setHeaders(request) {
        if (request) {
            this.request = {};
            Object.keys(request).map(key => {
                this.request.append(key, request[key]);
            });
        }
    }
    get(url, request) {
        this.setHeaders(request);
        return this.http.get(url, { headers: this.headers, params: this.request });
    }
    post(url, value, request) {
        this.setHeaders(request);
        return this.http.post(url, value, { headers: this.headers, params: this.request });
    }
    put(url, id, value, request) {
        this.setHeaders(request);
        return this.http.put(`${url}/${id}`, value, { headers: this.headers, params: this.request });
    }
    delete(url, id, request) {
        this.setHeaders(request);
        return this.http.delete(`${url}/${id}`, { headers: this.headers, params: this.request });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0, a1) { return { "background-image": a0, "transform": a1 }; };
const _c1 = function (a0) { return { "color": a0 }; };
const _c2 = ["*"];
class ContainerGeometricComponent {
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
}
ContainerGeometricComponent.ɵfac = function ContainerGeometricComponent_Factory(t) { return new (t || ContainerGeometricComponent)(); };
ContainerGeometricComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContainerGeometricComponent, selectors: [["app-container-geometric"]], inputs: { backgroundColor: "backgroundColor", color: "color", reverse: "reverse" }, ngContentSelectors: _c2, decls: 5, vars: 8, consts: [[1, "container-geometric"], [1, "geometric", 3, "ngStyle"], [1, "subcontainer-geometric", "position-relative", 3, "ngStyle"], [3, "ngClass"]], template: function ContainerGeometricComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, "url(" + ctx._background + ")", ctx.reverse ? "scaleX(-1)" : "scaleX(1)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.color));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.backgroundColor === 1 ? "blue" : ctx.backgroundColor === 2 ? "light-blue" : "pink");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".container-geometric[_ngcontent-%COMP%]   .geometric[_ngcontent-%COMP%] {\n  height: 100px;\n  background-repeat: no-repeat;\n  background-position: center top;\n  background-size: 100% 100%;\n  content: \"\";\n  top: 0;\n}\n.container-geometric[_ngcontent-%COMP%]   .subcontainer-geometric[_ngcontent-%COMP%] {\n  top: -1px;\n}\n.pink[_ngcontent-%COMP%] {\n  background: #eb92be;\n}\n.blue[_ngcontent-%COMP%] {\n  background: #0041a0;\n}\n.light-blue[_ngcontent-%COMP%] {\n  background: #00e1e1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29udGFpbmVyLWdlb21ldHJpYy9DOlxccG9ydGZvbGlvLWFuZ3VsYXI5L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGNvbnRhaW5lci1nZW9tZXRyaWNcXGNvbnRhaW5lci1nZW9tZXRyaWMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbnRhaW5lci1nZW9tZXRyaWMvY29udGFpbmVyLWdlb21ldHJpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGFBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtBQ0ZKO0FES0U7RUFDRSxTQUFBO0FDSEo7QURPQTtFQUNFLG1CQUFBO0FDSkY7QURPQTtFQUNFLG1CQUFBO0FDSkY7QURPQTtFQUNFLG1CQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jb250YWluZXItZ2VvbWV0cmljL2NvbnRhaW5lci1nZW9tZXRyaWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi9hc3NldHMvc3R5bGUvcGFsZXR0ZS5zY3NzXCI7XHJcblxyXG4uY29udGFpbmVyLWdlb21ldHJpYyB7XHJcbiAgLmdlb21ldHJpYyB7XHJcbiAgICBoZWlnaHQgICAgICAgICAgICAgOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0ICA6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemUgICAgOiAxMDAlIDEwMCU7XHJcbiAgICBjb250ZW50ICAgICAgICAgICAgOiAnJztcclxuICAgIHRvcCAgICAgICAgICAgICAgICA6IDA7XHJcbiAgfVxyXG5cclxuICAuc3ViY29udGFpbmVyLWdlb21ldHJpYyB7XHJcbiAgICB0b3A6IC0xcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucGluayB7XHJcbiAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICc0Jyk7XHJcbn1cclxuXHJcbi5ibHVlIHtcclxuICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzInKTtcclxufVxyXG5cclxuLmxpZ2h0LWJsdWUge1xyXG4gIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMycpO1xyXG59IiwiLmNvbnRhaW5lci1nZW9tZXRyaWMgLmdlb21ldHJpYyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBjb250ZW50OiBcIlwiO1xuICB0b3A6IDA7XG59XG4uY29udGFpbmVyLWdlb21ldHJpYyAuc3ViY29udGFpbmVyLWdlb21ldHJpYyB7XG4gIHRvcDogLTFweDtcbn1cblxuLnBpbmsge1xuICBiYWNrZ3JvdW5kOiAjZWI5MmJlO1xufVxuXG4uYmx1ZSB7XG4gIGJhY2tncm91bmQ6ICMwMDQxYTA7XG59XG5cbi5saWdodC1ibHVlIHtcbiAgYmFja2dyb3VuZDogIzAwZTFlMTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerGeometricComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-container-geometric',
                templateUrl: './container-geometric.component.html',
                styleUrls: ['./container-geometric.component.scss']
            }]
    }], function () { return []; }, { backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], reverse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
var ContainerGeometric;
(function (ContainerGeometric) {
    ContainerGeometric[ContainerGeometric["Blue"] = 1] = "Blue";
    ContainerGeometric[ContainerGeometric["LightBlue"] = 2] = "LightBlue";
    ContainerGeometric[ContainerGeometric["Pink"] = 3] = "Pink";
})(ContainerGeometric || (ContainerGeometric = {}));


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function DropdownComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownComponent_li_6_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const item_r42 = ctx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.action(item_r42); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r42.label);
} }
const _c0 = function (a0, a1) { return { "active": a0, "effect-opacity": a1 }; };
class DropdownComponent {
    constructor(ref) {
        this.ref = ref;
        this.items = [];
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
}
DropdownComponent.ɵfac = function DropdownComponent_Factory(t) { return new (t || DropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropdownComponent, selectors: [["app-dropdown"]], hostBindings: function DropdownComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownComponent_click_HostBindingHandler($event) { return ctx.onClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("scroll", function DropdownComponent_scroll_HostBindingHandler($event) { return ctx.onClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { items: "items" }, outputs: { value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()], decls: 7, vars: 6, consts: [[1, "container-dropdown"], [1, "container-label", "d-flex", "align-items-center", "justify-content-end", 3, "click"], [1, "m-0"], [1, "ml-2", "icon-caret-down"], [1, "position-absolute", "pl-0", "pt-2", "pb-2", "mt-2", 3, "ngClass"], ["class", "pl-4 pr-4 pt-2 pb-2", 3, "click", 4, "ngFor", "ngForOf"], [1, "pl-4", "pr-4", "pt-2", "pb-2", 3, "click"]], template: function DropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownComponent_Template_div_click_1_listener($event) { return ctx.open(!ctx.isActive, !ctx.effectOpacity); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DropdownComponent_li_6_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.isActive, ctx.effectOpacity));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".container-dropdown[_ngcontent-%COMP%] {\n  opacity: 1;\n  -webkit-transition: 500ms opacity linear;\n  transition: 500ms opacity linear;\n}\n.container-dropdown[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.container-dropdown[_ngcontent-%COMP%]   .container-label[_ngcontent-%COMP%] {\n  -webkit-transition: 200ms linear;\n  transition: 200ms linear;\n  font-size: 9pt;\n}\n.container-dropdown[_ngcontent-%COMP%]   .container-label[_ngcontent-%COMP%]:hover {\n  -webkit-transition: 200ms linear;\n  transition: 200ms linear;\n  color: #00e1e1;\n}\n.container-dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  font-size: 10pt;\n  opacity: 0;\n  -webkit-transition: 500ms opacity linear;\n  transition: 500ms opacity linear;\n  list-style: none;\n  background: #FFF;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.14);\n  display: none;\n  opacity: 0;\n  -webkit-transition: 200ms all opacity;\n  transition: 200ms all opacity;\n}\n.container-dropdown[_ngcontent-%COMP%]   ul.effect-opacity[_ngcontent-%COMP%] {\n  opacity: 1;\n  -webkit-transition: 200ms all opacity;\n  transition: 200ms all opacity;\n}\n.container-dropdown[_ngcontent-%COMP%]   ul.active[_ngcontent-%COMP%] {\n  z-index: 100;\n  display: block;\n}\n.container-dropdown[_ngcontent-%COMP%]   ul.active[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  -webkit-transition: 400ms linear;\n  transition: 400ms linear;\n}\n.container-dropdown[_ngcontent-%COMP%]   ul.active[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  -webkit-transition: 400ms linear;\n  transition: 400ms linear;\n  background: rgba(0, 65, 160, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHJvcGRvd24vQzpcXHBvcnRmb2xpby1hbmd1bGFyOS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxkcm9wZG93blxcZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsVUFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7QUNERjtBREdFO0VBQ0UsZUFBQTtBQ0RKO0FESUU7RUFDRSxnQ0FBQTtFQUFBLHdCQUFBO0VBQ0EsY0FBQTtBQ0ZKO0FESUk7RUFDRSxnQ0FBQTtFQUFBLHdCQUFBO0VBQ0EsY0FBQTtBQ0ZOO0FETUU7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSw0Q0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtBQ0pKO0FETUk7RUFDRSxVQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtBQ0pOO0FET0k7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0xOO0FET007RUFDRSxnQ0FBQTtFQUFBLHdCQUFBO0FDTFI7QURPUTtFQUNFLGdDQUFBO0VBQUEsd0JBQUE7RUFDQSxpQ0FBQTtBQ0xWIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi9hc3NldHMvc3R5bGUvcGFsZXR0ZS5zY3NzXCI7XHJcblxyXG4uY29udGFpbmVyLWRyb3Bkb3duIHtcclxuICBvcGFjaXR5ICAgOiAxO1xyXG4gIHRyYW5zaXRpb246IDUwMG1zIG9wYWNpdHkgbGluZWFyO1xyXG5cclxuICAqIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXItbGFiZWwge1xyXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgbGluZWFyO1xyXG4gICAgZm9udC1zaXplIDogOXB0O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2l0aW9uOiAyMDBtcyBsaW5lYXI7XHJcbiAgICAgIGNvbG9yICAgICA6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgZm9udC1zaXplICAgIDogMTBwdDtcclxuICAgIG9wYWNpdHkgICAgICA6IDA7XHJcbiAgICB0cmFuc2l0aW9uICAgOiA1MDBtcyBvcGFjaXR5IGxpbmVhcjtcclxuICAgIGxpc3Qtc3R5bGUgICA6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kICAgOiAjRkZGO1xyXG4gICAgYm94LXNoYWRvdyAgIDogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNCk7XHJcbiAgICBkaXNwbGF5ICAgICAgOiBub25lO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IDIwMG1zIGFsbCBvcGFjaXR5O1xyXG5cclxuICAgICYuZWZmZWN0LW9wYWNpdHkge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2l0aW9uOiAyMDBtcyBhbGwgb3BhY2l0eTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIHotaW5kZXggICA6IDEwMDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgXHJcbiAgICAgIGxpIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiA0MDBtcyBsaW5lYXI7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogNDAwbXMgbGluZWFyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeS1vcGFjaXR5LTEwJScsICcyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiLmNvbnRhaW5lci1kcm9wZG93biB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IDUwMG1zIG9wYWNpdHkgbGluZWFyO1xufVxuLmNvbnRhaW5lci1kcm9wZG93biAqIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lci1kcm9wZG93biAuY29udGFpbmVyLWxhYmVsIHtcbiAgdHJhbnNpdGlvbjogMjAwbXMgbGluZWFyO1xuICBmb250LXNpemU6IDlwdDtcbn1cbi5jb250YWluZXItZHJvcGRvd24gLmNvbnRhaW5lci1sYWJlbDpob3ZlciB7XG4gIHRyYW5zaXRpb246IDIwMG1zIGxpbmVhcjtcbiAgY29sb3I6ICMwMGUxZTE7XG59XG4uY29udGFpbmVyLWRyb3Bkb3duIHVsIHtcbiAgZm9udC1zaXplOiAxMHB0O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiA1MDBtcyBvcGFjaXR5IGxpbmVhcjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE0KTtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMjAwbXMgYWxsIG9wYWNpdHk7XG59XG4uY29udGFpbmVyLWRyb3Bkb3duIHVsLmVmZmVjdC1vcGFjaXR5IHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogMjAwbXMgYWxsIG9wYWNpdHk7XG59XG4uY29udGFpbmVyLWRyb3Bkb3duIHVsLmFjdGl2ZSB7XG4gIHotaW5kZXg6IDEwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY29udGFpbmVyLWRyb3Bkb3duIHVsLmFjdGl2ZSBsaSB7XG4gIHRyYW5zaXRpb246IDQwMG1zIGxpbmVhcjtcbn1cbi5jb250YWluZXItZHJvcGRvd24gdWwuYWN0aXZlIGxpOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogNDAwbXMgbGluZWFyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDY1LCAxNjAsIDAuMSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dropdown',
                templateUrl: './dropdown.component.html',
                styleUrls: ['./dropdown.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");



class FooterComponent {
    constructor() {
        this.year = new Date().getFullYear();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 4, consts: [[1, "text-center", "position-relative", "pt-4", "pb-4"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Eduardo Stanisci \u00A9 ", ctx.year, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "FOOTER.COPYRIGHT"), "");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["footer[_ngcontent-%COMP%] {\n  background: #000;\n  color: #FFF;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL0M6XFxwb3J0Zm9saW8tYW5ndWxhcjkvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vYXNzZXRzL3N0eWxlL3BhbGV0dGUuc2Nzc1wiO1xyXG5cclxuZm9vdGVye1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59IiwiZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgY29sb3I6ICNGRkY7XG4gIGJvcmRlcjogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = ["img"];
function ModalComponent_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14, 15);
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r35.project.galerias[ctx_r35.index].url_galeria, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c1 = function (a0) { return { "opacity": a0 }; };
function ModalComponent_i_11_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_i_11_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.nextImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r36.project.galerias.length === ctx_r36.index + 1 ? "0.3" : "1"));
} }
function ModalComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "MODAL.IMAGE"), " ", ctx_r37.index + 1, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, "MODAL.OF"), " ", ctx_r37.project.galerias.length, " ");
} }
const _c2 = function (a0) { return { "display": a0 }; };
class ModalComponent {
    constructor(renderer, translate) {
        this.renderer = renderer;
        this.translate = translate;
        this.showModal = false;
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
            this.index++;
        }
    }
    previousImage() {
        const auxIndex = this.index - 1;
        if (this.project.galerias[auxIndex].url_galeria.length) {
            this.index--;
        }
    }
    actionClose() {
        this._actionModal(false);
        this.renderer.removeClass(this.img.nativeElement, 'opacity-effect');
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], viewQuery: function ModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.img = _t.first);
    } }, inputs: { actionModal: "actionModal", setProject: "setProject" }, outputs: { closed: "closed" }, decls: 15, vars: 9, consts: [[1, "h-100", "container-modal", "w-100", "position-fixed", "h-100", 3, "ngStyle"], [1, "container-fluid", "h-100"], [1, "row", "d-flex", "align-items-stretch", "h-100"], [1, "container-close", "position-fixed"], [1, "icon-remove", 3, "click"], [1, "container-elements", "col-12", "d-flex"], [1, "container-arrow", "col-2", "col-sm-1", "d-flex", "align-items-center", "justify-content-center", "flex-column"], [1, "icon-chevron-left", 3, "ngStyle", "click"], [1, "container-img", "col-8", "col-sm-10", "d-flex", "align-items-center", "justify-content-center", "flex-column"], ["class", "img-fluid begin-opacity-effect", 3, "src", 4, "ngIf"], ["class", "icon-chevron-right", 3, "ngStyle", "click", 4, "ngIf"], [1, "container-quantity", "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "row"], ["class", "mb-3", 4, "ngIf"], [1, "img-fluid", "begin-opacity-effect", 3, "src"], ["img", ""], [1, "icon-chevron-right", 3, "ngStyle", "click"], [1, "mb-3"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_i_click_4_listener($event) { return ctx.actionClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_i_click_7_listener($event) { return ctx.previousImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ModalComponent_img_9_Template, 2, 1, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ModalComponent_i_11_Template, 1, 3, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ModalComponent_div_14_Template, 4, 8, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx.showModal ? "block" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.index === 0 ? "0.3" : "1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project && ctx.project.galerias);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project && ctx.project.galerias);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project && ctx.project.galerias);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: [".container-modal[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 99;\n  top: 0;\n  color: #FFF;\n}\n.container-modal[_ngcontent-%COMP%]   .container-close[_ngcontent-%COMP%] {\n  right: 10px;\n  top: 5px;\n  z-index: 1;\n}\n.container-modal[_ngcontent-%COMP%]   .container-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30pt;\n  cursor: pointer;\n}\n.container-modal[_ngcontent-%COMP%]   .container-warning[_ngcontent-%COMP%] {\n  display: none;\n}\n@media only screen and (max-width: 600px) {\n  .container-modal[_ngcontent-%COMP%]   .container-warning[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.container-modal[_ngcontent-%COMP%]   .container-warning[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 15pt;\n}\n.container-modal[_ngcontent-%COMP%]   .container-elements[_ngcontent-%COMP%] {\n  height: 90%;\n}\n@media only screen and (max-width: 500px) {\n  .container-modal[_ngcontent-%COMP%]   .container-elements[_ngcontent-%COMP%]   .container-img[_ngcontent-%COMP%] {\n    padding: 0;\n    width: 100%;\n    max-width: 100%;\n    position: absolute;\n    left: 0;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n  }\n}\n.container-modal[_ngcontent-%COMP%]   .container-elements[_ngcontent-%COMP%]   .container-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 85%;\n  max-height: 90%;\n  -webkit-animation: 600ms multiple-opacities-on;\n          animation: 600ms multiple-opacities-on;\n}\n@media only screen and (max-width: 500px) {\n  .container-modal[_ngcontent-%COMP%]   .container-elements[_ngcontent-%COMP%]   .container-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: auto;\n    position: relative;\n    max-width: 96%;\n    max-height: 65vh;\n  }\n}\n.container-modal[_ngcontent-%COMP%]   .container-elements[_ngcontent-%COMP%]   .container-img[_ngcontent-%COMP%]   img.opacity-effect-before[_ngcontent-%COMP%] {\n  opacity: 0;\n  -webkit-animation: 600ms multiple-opacities-on;\n          animation: 600ms multiple-opacities-on;\n}\n.container-modal[_ngcontent-%COMP%]   .container-elements[_ngcontent-%COMP%]   .container-img[_ngcontent-%COMP%]   img.opacity-effect-after[_ngcontent-%COMP%] {\n  opacity: 1;\n  -webkit-animation: 600ms multiple-opacities-on;\n          animation: 600ms multiple-opacities-on;\n}\n@media only screen and (max-width: 500px) {\n  .container-modal[_ngcontent-%COMP%]   .container-elements[_ngcontent-%COMP%]   .container-arrow[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 65px;\n    height: 65px;\n    bottom: 0;\n  }\n}\n@media only screen and (max-width: 500px) {\n  .container-modal[_ngcontent-%COMP%]   .container-elements[_ngcontent-%COMP%]   .container-arrow[_ngcontent-%COMP%]:first-child {\n    left: 30px;\n  }\n}\n@media only screen and (max-width: 500px) {\n  .container-modal[_ngcontent-%COMP%]   .container-elements[_ngcontent-%COMP%]   .container-arrow[_ngcontent-%COMP%]:last-child {\n    right: 30px;\n  }\n}\n.container-modal[_ngcontent-%COMP%]   .container-elements[_ngcontent-%COMP%]   .container-arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 40pt;\n  cursor: pointer;\n  border: 1px solid #FFF;\n  border-radius: 5px;\n  padding: 10px 20px;\n}\n@media only screen and (max-width: 767px) {\n  .container-modal[_ngcontent-%COMP%]   .container-elements[_ngcontent-%COMP%]   .container-arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 20pt;\n  }\n}\n.container-modal[_ngcontent-%COMP%]   .container-quantity[_ngcontent-%COMP%] {\n  height: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvQzpcXHBvcnRmb2xpby1hbmd1bGFyOS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxtb2RhbFxcbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDQ0o7QURDSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDQ047QURHRTtFQUNFLGFBQUE7QUNESjtBREdJO0VBSEY7SUFJSSxjQUFBO0VDQUo7QUFDRjtBREVJO0VBQ0UsZUFBQTtBQ0FOO0FESUU7RUFDRSxXQUFBO0FDRko7QURLTTtFQURGO0lBRUksVUFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxPQUFBO0lBQ0EsUUFBQTtJQUNBLG1DQUFBO1lBQUEsMkJBQUE7RUNGTjtBQUNGO0FESU07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUNGUjtBRElRO0VBTEY7SUFNSSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUNEUjtBQUNGO0FER1E7RUFDRSxVQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ0RWO0FESVE7RUFDRSxVQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ0ZWO0FEUU07RUFERjtJQUVJLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxTQUFBO0VDTE47QUFDRjtBRFFRO0VBREY7SUFFSSxVQUFBO0VDTFI7QUFDRjtBRFNRO0VBREY7SUFFSSxXQUFBO0VDTlI7QUFDRjtBRFNNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNQUjtBRFNRO0VBUEY7SUFRSSxlQUFBO0VDTlI7QUFDRjtBRFdFO0VBQ0UsV0FBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLW1vZGFsIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgei1pbmRleCAgIDogOTk7XHJcbiAgdG9wICAgICAgIDogMDtcclxuICBjb2xvciAgICAgOiAjRkZGO1xyXG5cclxuICAuY29udGFpbmVyLWNsb3NlIHtcclxuICAgIHJpZ2h0ICA6IDEwcHg7XHJcbiAgICB0b3AgICAgOiA1cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDMwcHQ7XHJcbiAgICAgIGN1cnNvciAgIDogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXItd2FybmluZyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDE1cHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLWVsZW1lbnRzIHtcclxuICAgIGhlaWdodDogOTAlO1xyXG5cclxuICAgIC5jb250YWluZXItaW1nIHtcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgIHBhZGRpbmcgIDogMDtcclxuICAgICAgICB3aWR0aCAgICA6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdCAgICAgOiAwO1xyXG4gICAgICAgIHRvcCAgICAgIDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGggOiA4NSU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogOTAlO1xyXG4gICAgICAgIGFuaW1hdGlvbiA6IDYwMG1zIG11bHRpcGxlLW9wYWNpdGllcy1vbjtcclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgd2lkdGggICAgIDogYXV0bztcclxuICAgICAgICAgIHBvc2l0aW9uICA6IHJlbGF0aXZlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoIDogOTYlO1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogNjV2aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYub3BhY2l0eS1lZmZlY3QtYmVmb3JlIHtcclxuICAgICAgICAgIG9wYWNpdHkgIDogMDtcclxuICAgICAgICAgIGFuaW1hdGlvbjogNjAwbXMgbXVsdGlwbGUtb3BhY2l0aWVzLW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5vcGFjaXR5LWVmZmVjdC1hZnRlciB7XHJcbiAgICAgICAgICBvcGFjaXR5ICA6IDE7XHJcbiAgICAgICAgICBhbmltYXRpb246IDYwMG1zIG11bHRpcGxlLW9wYWNpdGllcy1vbjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyLWFycm93IHtcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aCAgIDogNjVweDtcclxuICAgICAgICBoZWlnaHQgIDogNjVweDtcclxuICAgICAgICBib3R0b20gIDogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgbGVmdDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpIHtcclxuICAgICAgICBmb250LXNpemUgICAgOiA0MHB0O1xyXG4gICAgICAgIGN1cnNvciAgICAgICA6IHBvaW50ZXI7XHJcbiAgICAgICAgYm9yZGVyICAgICAgIDogMXB4IHNvbGlkICNGRkY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmcgICAgICA6IDEwcHggMjBweDtcclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci1xdWFudGl0eSB7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICB9XHJcblxyXG59IiwiLmNvbnRhaW5lci1tb2RhbCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgei1pbmRleDogOTk7XG4gIHRvcDogMDtcbiAgY29sb3I6ICNGRkY7XG59XG4uY29udGFpbmVyLW1vZGFsIC5jb250YWluZXItY2xvc2Uge1xuICByaWdodDogMTBweDtcbiAgdG9wOiA1cHg7XG4gIHotaW5kZXg6IDE7XG59XG4uY29udGFpbmVyLW1vZGFsIC5jb250YWluZXItY2xvc2UgaSB7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lci1tb2RhbCAuY29udGFpbmVyLXdhcm5pbmcge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyLW1vZGFsIC5jb250YWluZXItd2FybmluZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5jb250YWluZXItbW9kYWwgLmNvbnRhaW5lci13YXJuaW5nIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxNXB0O1xufVxuLmNvbnRhaW5lci1tb2RhbCAuY29udGFpbmVyLWVsZW1lbnRzIHtcbiAgaGVpZ2h0OiA5MCU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5jb250YWluZXItbW9kYWwgLmNvbnRhaW5lci1lbGVtZW50cyAuY29udGFpbmVyLWltZyB7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG59XG4uY29udGFpbmVyLW1vZGFsIC5jb250YWluZXItZWxlbWVudHMgLmNvbnRhaW5lci1pbWcgaW1nIHtcbiAgbWF4LXdpZHRoOiA4NSU7XG4gIG1heC1oZWlnaHQ6IDkwJTtcbiAgYW5pbWF0aW9uOiA2MDBtcyBtdWx0aXBsZS1vcGFjaXRpZXMtb247XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5jb250YWluZXItbW9kYWwgLmNvbnRhaW5lci1lbGVtZW50cyAuY29udGFpbmVyLWltZyBpbWcge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDk2JTtcbiAgICBtYXgtaGVpZ2h0OiA2NXZoO1xuICB9XG59XG4uY29udGFpbmVyLW1vZGFsIC5jb250YWluZXItZWxlbWVudHMgLmNvbnRhaW5lci1pbWcgaW1nLm9wYWNpdHktZWZmZWN0LWJlZm9yZSB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogNjAwbXMgbXVsdGlwbGUtb3BhY2l0aWVzLW9uO1xufVxuLmNvbnRhaW5lci1tb2RhbCAuY29udGFpbmVyLWVsZW1lbnRzIC5jb250YWluZXItaW1nIGltZy5vcGFjaXR5LWVmZmVjdC1hZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIGFuaW1hdGlvbjogNjAwbXMgbXVsdGlwbGUtb3BhY2l0aWVzLW9uO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuY29udGFpbmVyLW1vZGFsIC5jb250YWluZXItZWxlbWVudHMgLmNvbnRhaW5lci1hcnJvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogNjVweDtcbiAgICBib3R0b206IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRhaW5lci1tb2RhbCAuY29udGFpbmVyLWVsZW1lbnRzIC5jb250YWluZXItYXJyb3c6Zmlyc3QtY2hpbGQge1xuICAgIGxlZnQ6IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRhaW5lci1tb2RhbCAuY29udGFpbmVyLWVsZW1lbnRzIC5jb250YWluZXItYXJyb3c6bGFzdC1jaGlsZCB7XG4gICAgcmlnaHQ6IDMwcHg7XG4gIH1cbn1cbi5jb250YWluZXItbW9kYWwgLmNvbnRhaW5lci1lbGVtZW50cyAuY29udGFpbmVyLWFycm93IGkge1xuICBmb250LXNpemU6IDQwcHQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250YWluZXItbW9kYWwgLmNvbnRhaW5lci1lbGVtZW50cyAuY29udGFpbmVyLWFycm93IGkge1xuICAgIGZvbnQtc2l6ZTogMjBwdDtcbiAgfVxufVxuLmNvbnRhaW5lci1tb2RhbCAuY29udGFpbmVyLXF1YW50aXR5IHtcbiAgaGVpZ2h0OiAxMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, { actionModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], setProject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], img: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['img']
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_models_Language_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/models/Language.enum */ "./src/app/shared/models/Language.enum.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dropdown/dropdown.component */ "./src/app/shared/components/dropdown/dropdown.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function NavbarComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_9_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const item_r24 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r25.navbarAction(false); return ctx_r25.setPositionScroll(item_r24.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r24.name);
} }
function NavbarComponent_i_11_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_i_11_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.navbarAction(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_i_12_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_i_12_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.navbarAction(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "openMenu": a0 }; };
class NavbarComponent {
    constructor(translate) {
        this.translate = translate;
        this.loader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openedMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changedLanguage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.navbar = [];
        this.openMenu = false;
        this.language = [];
    }
    ngOnInit() {
        // this.dataNavbar();
        this.loader.emit();
        this.translate.setDefaultLang('en');
        this.translateAction(_shared_models_Language_enum__WEBPACK_IMPORTED_MODULE_1__["Language"].English);
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
        if (id === _shared_models_Language_enum__WEBPACK_IMPORTED_MODULE_1__["Language"].English) {
            this.translate.use('en');
        }
        else if (id === _shared_models_Language_enum__WEBPACK_IMPORTED_MODULE_1__["Language"].Portuguese) {
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
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function NavbarComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, outputs: { loader: "loader", openedMenu: "openedMenu", changedLanguage: "changedLanguage" }, decls: 13, vars: 7, consts: [[1, "container-fluid", "pt-2", "pb-2", "pt-md-3", "pb-md-3", "position-fixed", "bg-white"], [1, "container"], [1, "row", "position-relative", "d-md-flex", "align-items-stretch"], ["data-aos", "fade-zoom-in", "data-aos-easing", "linear", "data-aos-duration", "1000", 1, "container-logo", "col-4"], ["href", "./"], ["src", "./assets/img/logo.png"], [1, "position-absolute", 3, "items", "value"], [1, "container-items", "col-12", "col-sm-12", "col-md-8", "d-md-flex", "align-md-items-center", "justify-content-md-end", 3, "ngClass"], ["data-aos", "fade-zoom-in", "data-aos-easing", "linear", "data-aos-duration", "1000", 1, "d-md-flex", "w-100", "pl-0", "pt-md-0", "pt-5", "align-items-center", "justify-content-end", "mb-0", "mt-5", "mt-md-0"], ["class", "d-md-inline d-sm-block d-block ml-md-3 text-center text-md-left", 4, "ngFor", "ngForOf"], [1, "container-icons", "d-md-none", "position-absolute", "d-flex", "align-items-center"], ["class", "icon-reorder", 3, "click", 4, "ngIf"], ["class", "icon-remove", 3, "click", 4, "ngIf"], [1, "d-md-inline", "d-sm-block", "d-block", "ml-md-3", "text-center", "text-md-left"], [1, "pt-4", "pb-4", "pl-md-3", "pt-md-0", "pb-md-0", "text-decoration-none", 3, "click"], [1, "icon-reorder", 3, "click"], [1, "icon-remove", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("value", function NavbarComponent_Template_app_dropdown_value_6_listener($event) { return ctx.translateAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavbarComponent_li_9_Template, 3, 1, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavbarComponent_i_11_Template, 1, 0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavbarComponent_i_12_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.language);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.openMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openMenu === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openMenu === true);
    } }, directives: [_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["DropdownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["nav[_ngcontent-%COMP%] {\n  z-index: 2;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.14);\n}\n@media only screen and (max-width: 575px) {\n  nav[_ngcontent-%COMP%]   .container-logo[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\nnav[_ngcontent-%COMP%]   .container-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n}\n@media only screen and (max-width: 767px) {\n  nav[_ngcontent-%COMP%]   .container-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 130px;\n  }\n}\nnav[_ngcontent-%COMP%]   app-dropdown[_ngcontent-%COMP%] {\n  right: 15px;\n  top: -12px;\n  width: 81px;\n}\n@media only screen and (max-width: 767px) {\n  nav[_ngcontent-%COMP%]   app-dropdown[_ngcontent-%COMP%] {\n    right: 50px;\n    top: 14px;\n  }\n}\nnav[_ngcontent-%COMP%]   .container-items[_ngcontent-%COMP%] {\n  font-size: 13pt;\n}\n@media only screen and (max-width: 767px) {\n  nav[_ngcontent-%COMP%]   .container-items[_ngcontent-%COMP%] {\n    min-height: 100%;\n    width: 0;\n    height: 100%;\n    -webkit-transition: 500ms ease;\n    transition: 500ms ease;\n    left: 0;\n    top: 0;\n    position: fixed;\n  }\n}\n@media only screen and (max-width: 767px) {\n  nav[_ngcontent-%COMP%]   .container-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    height: auto;\n    display: none;\n  }\n}\nnav[_ngcontent-%COMP%]   .container-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0041a0;\n  -webkit-transition: 200ms linear;\n  transition: 200ms linear;\n  cursor: pointer;\n}\nnav[_ngcontent-%COMP%]   .container-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  -webkit-transition: 200ms linear;\n  transition: 200ms linear;\n  color: #00e1e1;\n}\n@media only screen and (max-width: 767px) {\n  nav[_ngcontent-%COMP%]   .container-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #FFF;\n    display: none;\n    font-size: 20pt;\n  }\n}\nnav[_ngcontent-%COMP%]   .container-items.openMenu[_ngcontent-%COMP%] {\n  background: #eb92be;\n  -webkit-transition: 250ms ease;\n  transition: 250ms ease;\n  width: 100%;\n  overflow-y: scroll;\n}\nnav[_ngcontent-%COMP%]   .container-items.openMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: block;\n}\nnav[_ngcontent-%COMP%]   .container-items.openMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n}\nnav[_ngcontent-%COMP%]   .container-icons[_ngcontent-%COMP%] {\n  right: 0;\n  top: 0;\n  height: 100%;\n}\nnav[_ngcontent-%COMP%]   .container-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\nnav[_ngcontent-%COMP%]   .container-icons[_ngcontent-%COMP%]   i.icon-reorder[_ngcontent-%COMP%] {\n  color: #00146e;\n}\nnav[_ngcontent-%COMP%]   .container-icons[_ngcontent-%COMP%]   i.icon-remove[_ngcontent-%COMP%] {\n  color: #00146e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL0M6XFxwb3J0Zm9saW8tYW5ndWxhcjkvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxVQUFBO0VBQ0EsNENBQUE7QUNERjtBRElJO0VBREY7SUFFSSxVQUFBO0VDREo7QUFDRjtBREdJO0VBQ0UsWUFBQTtBQ0ROO0FER007RUFIRjtJQUlJLFlBQUE7RUNBTjtBQUNGO0FESUU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNGSjtBRElJO0VBTEY7SUFNSSxXQUFBO0lBQ0EsU0FBQTtFQ0RKO0FBQ0Y7QURJRTtFQUNFLGVBQUE7QUNGSjtBRElJO0VBSEY7SUFJSSxnQkFBQTtJQUNBLFFBQUE7SUFDQSxZQUFBO0lBQ0EsOEJBQUE7SUFBQSxzQkFBQTtJQUNBLE9BQUE7SUFDQSxNQUFBO0lBQ0EsZUFBQTtFQ0RKO0FBQ0Y7QURJTTtFQURGO0lBRUksWUFBQTtJQUNBLGFBQUE7RUNETjtBQUNGO0FESVE7RUFDRSxjQUFBO0VBQ0EsZ0NBQUE7RUFBQSx3QkFBQTtFQUNBLGVBQUE7QUNGVjtBRElVO0VBQ0UsZ0NBQUE7RUFBQSx3QkFBQTtFQUNBLGNBQUE7QUNGWjtBREtVO0VBVkY7SUFXSSxXQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7RUNGVjtBQUNGO0FET0k7RUFDRSxtQkFBQTtFQUNBLDhCQUFBO0VBQUEsc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNMTjtBRE9NO0VBQ0UsY0FBQTtBQ0xSO0FEUVU7RUFDRSxjQUFBO0FDTlo7QURhRTtFQUNFLFFBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtBQ1hKO0FEYUk7RUFDRSxlQUFBO0FDWE47QURhTTtFQUNFLGNBQUE7QUNYUjtBRGNNO0VBQ0UsY0FBQTtBQ1pSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uL2Fzc2V0cy9zdHlsZS9wYWxldHRlLnNjc3NcIjtcclxuXHJcbm5hdiB7XHJcbiAgei1pbmRleDogMjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE0KTtcclxuXHJcbiAgLmNvbnRhaW5lci1sb2dvIHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgcGFkZGluZzowO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFwcC1kcm9wZG93biB7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHRvcDogLTEycHg7XHJcbiAgICB3aWR0aDogODFweDtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIHJpZ2h0OiA1MHB4O1xyXG4gICAgICB0b3A6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLWl0ZW1zIHtcclxuICAgIGZvbnQtc2l6ZTogMTNwdDtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHRyYW5zaXRpb246IDUwMG1zIGVhc2U7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICcyJyk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcyBsaW5lYXI7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zIGxpbmVhcjtcclxuICAgICAgICAgICAgY29sb3I6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMycpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLm9wZW5NZW51IHtcclxuICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICc0Jyk7XHJcbiAgICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXItaWNvbnMge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuXHJcbiAgICAgICYuaWNvbi1yZW9yZGVyIHtcclxuICAgICAgICBjb2xvcjogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICcxJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuaWNvbi1yZW1vdmUge1xyXG4gICAgICAgIGNvbG9yOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzEnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSIsIm5hdiB7XG4gIHotaW5kZXg6IDI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICBuYXYgLmNvbnRhaW5lci1sb2dvIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5uYXYgLmNvbnRhaW5lci1sb2dvIGltZyB7XG4gIHdpZHRoOiAxNTBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgbmF2IC5jb250YWluZXItbG9nbyBpbWcge1xuICAgIHdpZHRoOiAxMzBweDtcbiAgfVxufVxubmF2IGFwcC1kcm9wZG93biB7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IC0xMnB4O1xuICB3aWR0aDogODFweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgbmF2IGFwcC1kcm9wZG93biB7XG4gICAgcmlnaHQ6IDUwcHg7XG4gICAgdG9wOiAxNHB4O1xuICB9XG59XG5uYXYgLmNvbnRhaW5lci1pdGVtcyB7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgbmF2IC5jb250YWluZXItaXRlbXMge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zaXRpb246IDUwMG1zIGVhc2U7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIG5hdiAuY29udGFpbmVyLWl0ZW1zIHVsIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxubmF2IC5jb250YWluZXItaXRlbXMgdWwgbGkgYSB7XG4gIGNvbG9yOiAjMDA0MWEwO1xuICB0cmFuc2l0aW9uOiAyMDBtcyBsaW5lYXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm5hdiAuY29udGFpbmVyLWl0ZW1zIHVsIGxpIGE6aG92ZXIge1xuICB0cmFuc2l0aW9uOiAyMDBtcyBsaW5lYXI7XG4gIGNvbG9yOiAjMDBlMWUxO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICBuYXYgLmNvbnRhaW5lci1pdGVtcyB1bCBsaSBhIHtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjBwdDtcbiAgfVxufVxubmF2IC5jb250YWluZXItaXRlbXMub3Blbk1lbnUge1xuICBiYWNrZ3JvdW5kOiAjZWI5MmJlO1xuICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxubmF2IC5jb250YWluZXItaXRlbXMub3Blbk1lbnUgdWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbm5hdiAuY29udGFpbmVyLWl0ZW1zLm9wZW5NZW51IHVsIGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbm5hdiAuY29udGFpbmVyLWljb25zIHtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxubmF2IC5jb250YWluZXItaWNvbnMgaSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbm5hdiAuY29udGFpbmVyLWljb25zIGkuaWNvbi1yZW9yZGVyIHtcbiAgY29sb3I6ICMwMDE0NmU7XG59XG5uYXYgLmNvbnRhaW5lci1pY29ucyBpLmljb24tcmVtb3ZlIHtcbiAgY29sb3I6ICMwMDE0NmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, { loader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], openedMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], changedLanguage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\portfolio-angular9\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map