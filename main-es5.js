function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! aos */
    "./node_modules/aos/dist/aos.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/components/navbar/navbar.component */
    "./src/app/shared/components/navbar/navbar.component.ts");
    /* harmony import */


    var _container_about_container_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./container-about/container-about.component */
    "./src/app/container-about/container-about.component.ts");
    /* harmony import */


    var _container_skills_container_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./container-skills/container-skills.component */
    "./src/app/container-skills/container-skills.component.ts");
    /* harmony import */


    var _container_portfolio_container_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./container-portfolio/container-portfolio.component */
    "./src/app/container-portfolio/container-portfolio.component.ts");
    /* harmony import */


    var _container_contact_container_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./container-contact/container-contact.component */
    "./src/app/container-contact/container-contact.component.ts");
    /* harmony import */


    var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @shared/components/footer/footer.component */
    "./src/app/shared/components/footer/footer.component.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.multiloader = {};
        this.openedMenu = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          aos__WEBPACK_IMPORTED_MODULE_1__["init"]();
          this.multiloader.about = true;
          this.multiloader.portfolio = true;
          this.multiloader.skills = true;
          this.multiloader.navbar = true;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 6,
      vars: 2,
      consts: [[3, "openedMenu", "changedLanguage"], [3, "actionTranslate"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-navbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedMenu", function AppComponent_Template_app_navbar_openedMenu_0_listener($event) {
            return ctx.openedMenu = $event;
          })("changedLanguage", function AppComponent_Template_app_navbar_changedLanguage_0_listener($event) {
            return ctx.changedLanguage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-container-about", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-container-skills", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-container-portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-container-contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("actionTranslate", ctx.changedLanguage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("actionTranslate", ctx.changedLanguage);
        }
      },
      directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _container_about_container_about_component__WEBPACK_IMPORTED_MODULE_3__["ContainerAboutComponent"], _container_skills_container_skills_component__WEBPACK_IMPORTED_MODULE_4__["ContainerSkillsComponent"], _container_portfolio_container_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["ContainerPortfolioComponent"], _container_contact_container_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContainerContactComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
      styles: [".container-loader[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.container-loader[_ngcontent-%COMP%]   .spinner-border[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHJlcG9zaXRvcmlvc1xccG9ydGZvbGlvLWFuZ3VsYXI5L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjtBRENFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItbG9hZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcblxyXG4gIC5zcGlubmVyLWJvcmRlciB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxufVxyXG4iLCIuY29udGFpbmVyLWxvYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5jb250YWluZXItbG9hZGVyIC5zcGlubmVyLWJvcmRlciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule, HttpLoaderFactory */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _container_about_container_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./container-about/container-about.component */
    "./src/app/container-about/container-about.component.ts");
    /* harmony import */


    var _container_contact_container_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./container-contact/container-contact.component */
    "./src/app/container-contact/container-contact.component.ts");
    /* harmony import */


    var _container_portfolio_container_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./container-portfolio/container-portfolio.component */
    "./src/app/container-portfolio/container-portfolio.component.ts");
    /* harmony import */


    var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @shared/components/navbar/navbar.component */
    "./src/app/shared/components/navbar/navbar.component.ts");
    /* harmony import */


    var _shared_components_container_geometric_container_geometric_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/components/container-geometric/container-geometric.component */
    "./src/app/shared/components/container-geometric/container-geometric.component.ts");
    /* harmony import */


    var _container_skills_container_skills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./container-skills/container-skills.component */
    "./src/app/container-skills/container-skills.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/components/modal/modal.component */
    "./src/app/shared/components/modal/modal.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _shared_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/components/dropdown/dropdown.component */
    "./src/app/shared/components/dropdown/dropdown.component.ts");
    /* harmony import */


    var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @shared/components/footer/footer.component */
    "./src/app/shared/components/footer/footer.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
        }
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _container_about_container_about_component__WEBPACK_IMPORTED_MODULE_4__["ContainerAboutComponent"], _container_contact_container_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContainerContactComponent"], _container_portfolio_container_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["ContainerPortfolioComponent"], _container_skills_container_skills_component__WEBPACK_IMPORTED_MODULE_9__["ContainerSkillsComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _shared_components_container_geometric_container_geometric_component__WEBPACK_IMPORTED_MODULE_8__["ContainerGeometricComponent"], _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_11__["ModalComponent"], _shared_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_14__["DropdownComponent"]],
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _container_about_container_about_component__WEBPACK_IMPORTED_MODULE_4__["ContainerAboutComponent"], _container_contact_container_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContainerContactComponent"], _container_portfolio_container_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["ContainerPortfolioComponent"], _container_skills_container_skills_component__WEBPACK_IMPORTED_MODULE_9__["ContainerSkillsComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _shared_components_container_geometric_container_geometric_component__WEBPACK_IMPORTED_MODULE_8__["ContainerGeometricComponent"], _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_11__["ModalComponent"], _shared_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_14__["DropdownComponent"]],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
              useFactory: HttpLoaderFactory,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
            }
          })],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }
    /***/

  },

  /***/
  "./src/app/container-about/container-about.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/container-about/container-about.component.ts ***!
    \**************************************************************/

  /*! exports provided: ContainerAboutComponent */

  /***/
  function srcAppContainerAboutContainerAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContainerAboutComponent", function () {
      return ContainerAboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _container_about_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./container-about.service */
    "./src/app/container-about/container-about.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ContainerAboutComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.description, " ");
      }
    }

    var ContainerAboutComponent =
    /*#__PURE__*/
    function () {
      function ContainerAboutComponent(aboutService, translate) {
        _classCallCheck(this, ContainerAboutComponent);

        this.aboutService = aboutService;
        this.translate = translate;
        this.about = [];
        this.loader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ContainerAboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.dataAbout();
          this.loader.emit();
          this.setAbout();
        }
      }, {
        key: "dataAbout",
        value: function dataAbout() {
          var _this = this;

          this.aboutService.dataAbout().subscribe(function (about) {
            _this.about = about;

            _this.loader.emit();
          }, function () {
            return _this.loader.emit();
          });
        }
      }, {
        key: "setAbout",
        value: function setAbout() {
          var _this2 = this;

          this.translate.get(['ABOUT.SQUARE1', 'ABOUT.SQUARE2', 'ABOUT.SQUARE3', 'ABOUT.SQUARE4']).subscribe(function (res) {
            _this2.about = [{
              description: res['ABOUT.SQUARE1']
            }, {
              description: res['ABOUT.SQUARE2']
            }, {
              description: res['ABOUT.SQUARE3']
            }, {
              description: res['ABOUT.SQUARE4']
            }];
          });
        }
      }, {
        key: "actionTranslate",
        set: function set(changedLanguage) {
          this.setAbout();
        }
      }]);

      return ContainerAboutComponent;
    }();

    ContainerAboutComponent.ɵfac = function ContainerAboutComponent_Factory(t) {
      return new (t || ContainerAboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_container_about_service__WEBPACK_IMPORTED_MODULE_1__["ContainerAboutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]));
    };

    ContainerAboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContainerAboutComponent,
      selectors: [["app-container-about"]],
      inputs: {
        actionTranslate: "actionTranslate"
      },
      outputs: {
        loader: "loader"
      },
      decls: 19,
      vars: 7,
      consts: [["id", "about", 1, "container"], [1, "row"], [1, "container-title", "col-12"], ["data-aos", "fade-right", "data-aos-easing", "linear", "data-aos-duration", "500", 1, "portfolio-title", "position-relative"], [1, "container-photo", "flex-column", "col-lg-5", "col-sm-12", "mt-md-5", "pt-4", "text-center", "pt-4", "d-lg-flex", "align-items-center", "justify-content-center"], ["data-aos", "flip-left", "data-aos-easing", "linear", "data-aos-duration", "700", "src", "assets/img/about.jpg", 1, "mt-80"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "500", 1, "blockquote", "text-lg-right", "mt-4", "mb-0"], [1, "mb-0"], [1, "blockquote-footer"], ["title", "Ray Goforth"], [1, "container-description", "col-lg-6", "offset-lg-1"], [1, "col-lg-12", "col-sm-12", "d-md-flex", "mb-4", "mt-lg-0", "mt-4"], [1, "row", "d-lg-flex", "align-items-md-center", "justify-content-md-center"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "350", "class", "mt-3 mb-3 m-lg-0 col-lg-6 item p-4 text-center align-self-stretch align-items-center justify-content-center d-flex", 4, "ngFor", "ngForOf"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "350", 1, "mt-3", "mb-3", "m-lg-0", "col-lg-6", "item", "p-4", "text-center", "align-self-stretch", "align-items-center", "justify-content-center", "d-flex"]],
      template: function ContainerAboutComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "COMMON.ABOUT"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, "ABOUT.QUOTE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.about);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      styles: [".container[_ngcontent-%COMP%] {\n  padding-top: 130px;\n}\n@media only screen and (max-width: 767px) {\n  .container[_ngcontent-%COMP%] {\n    padding-top: 90px;\n  }\n}\n.container[_ngcontent-%COMP%]   .container-title[_ngcontent-%COMP%]   .portfolio-title[_ngcontent-%COMP%]:before {\n  background: #00e1e1;\n  position: absolute;\n}\n.container[_ngcontent-%COMP%]   .container-title[_ngcontent-%COMP%]   .portfolio-title[_ngcontent-%COMP%]::first-letter {\n  color: #00e1e1;\n  font-weight: bolder;\n}\n.container[_ngcontent-%COMP%]   .container-photo[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12pt;\n}\n.container[_ngcontent-%COMP%]   .container-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n  padding: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n}\n.container[_ngcontent-%COMP%]   .container-description[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  min-height: 200px;\n  font-size: 11pt;\n}\n@media only screen and (max-width: 991px) {\n  .container[_ngcontent-%COMP%]   .container-description[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    border: 1px solid rgba(0, 0, 0, 0.4);\n  }\n}\n@media only screen and (max-width: 767px) {\n  .container[_ngcontent-%COMP%]   .container-description[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    -webkit-animation: none;\n            animation: none;\n  }\n}\n.container[_ngcontent-%COMP%]   .container-description[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-of-type(1) {\n  background: #00146e;\n  color: #FFF;\n}\n.container[_ngcontent-%COMP%]   .container-description[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-of-type(2) {\n  background: #0041a0;\n  color: #FFF;\n}\n.container[_ngcontent-%COMP%]   .container-description[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-of-type(3) {\n  background: #00e1e1;\n  font-weight: bolder;\n}\n.container[_ngcontent-%COMP%]   .container-description[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-of-type(4) {\n  background: #eb92be;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVyLWFib3V0L0M6XFxyZXBvc2l0b3Jpb3NcXHBvcnRmb2xpby1hbmd1bGFyOS9zcmNcXGFwcFxcY29udGFpbmVyLWFib3V0XFxjb250YWluZXItYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhaW5lci1hYm91dC9jb250YWluZXItYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtBQ0RGO0FER0U7RUFIRjtJQUlJLGlCQUFBO0VDQUY7QUFDRjtBRElNO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQ0ZSO0FES007RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNIUjtBRFVNO0VBQ0UsZUFBQTtBQ1JSO0FEWUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FDVk47QURnQkk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNkTjtBRGdCTTtFQUpGO0lBS0ksb0NBQUE7RUNiTjtBQUNGO0FEZU07RUFSRjtJQVNJLHVCQUFBO1lBQUEsZUFBQTtFQ1pOO0FBQ0Y7QURlSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ2JOO0FEZ0JJO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FDZE47QURpQkk7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FDZk47QURrQkk7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FDaEJOIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVyLWFib3V0L2NvbnRhaW5lci1hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uL2Fzc2V0cy9zdHlsZS9wYWxldHRlLnNjc3NcIjtcclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiAxMzBweDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgcGFkZGluZy10b3A6IDkwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLXRpdGxlIHtcclxuICAgIC5wb3J0Zm9saW8tdGl0bGUge1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICczJyk7XHJcbiAgICAgICAgcG9zaXRpb24gIDogYWJzb2x1dGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6OmZpcnN0LWxldHRlciB7XHJcbiAgICAgICAgY29sb3IgICAgICA6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMycpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXItcGhvdG8ge1xyXG4gICAgYmxvY2txdW90ZSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgd2lkdGggICAgICAgIDogMjAwcHg7XHJcbiAgICAgIGhlaWdodCAgICAgICA6IDIwMHB4O1xyXG4gICAgICBwYWRkaW5nICAgICAgOiA1cHg7XHJcbiAgICAgIGJvcmRlciAgICAgICA6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci1kZXNjcmlwdGlvbiB7XHJcblxyXG4gICAgLml0ZW0ge1xyXG4gICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgZm9udC1zaXplIDogMTFwdDtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW06bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzEnKTtcclxuICAgICAgY29sb3IgICAgIDogI0ZGRjtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbTpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMicpO1xyXG4gICAgICBjb2xvciAgICAgOiAjRkZGO1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtOm50aC1vZi10eXBlKDMpIHtcclxuICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICczJyk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW06bnRoLW9mLXR5cGUoNCkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzQnKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIH1cclxuICB9XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDEzMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogOTBweDtcbiAgfVxufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLXRpdGxlIC5wb3J0Zm9saW8tdGl0bGU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzAwZTFlMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLXRpdGxlIC5wb3J0Zm9saW8tdGl0bGU6OmZpcnN0LWxldHRlciB7XG4gIGNvbG9yOiAjMDBlMWUxO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLXBob3RvIGJsb2NrcXVvdGUgcCB7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbn1cbi5jb250YWluZXIgLmNvbnRhaW5lci1waG90byBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4uY29udGFpbmVyIC5jb250YWluZXItZGVzY3JpcHRpb24gLml0ZW0ge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgZm9udC1zaXplOiAxMXB0O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuY29udGFpbmVyIC5jb250YWluZXItZGVzY3JpcHRpb24gLml0ZW0ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGFpbmVyIC5jb250YWluZXItZGVzY3JpcHRpb24gLml0ZW0ge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgfVxufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLWRlc2NyaXB0aW9uIC5pdGVtOm50aC1vZi10eXBlKDEpIHtcbiAgYmFja2dyb3VuZDogIzAwMTQ2ZTtcbiAgY29sb3I6ICNGRkY7XG59XG4uY29udGFpbmVyIC5jb250YWluZXItZGVzY3JpcHRpb24gLml0ZW06bnRoLW9mLXR5cGUoMikge1xuICBiYWNrZ3JvdW5kOiAjMDA0MWEwO1xuICBjb2xvcjogI0ZGRjtcbn1cbi5jb250YWluZXIgLmNvbnRhaW5lci1kZXNjcmlwdGlvbiAuaXRlbTpudGgtb2YtdHlwZSgzKSB7XG4gIGJhY2tncm91bmQ6ICMwMGUxZTE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4uY29udGFpbmVyIC5jb250YWluZXItZGVzY3JpcHRpb24gLml0ZW06bnRoLW9mLXR5cGUoNCkge1xuICBiYWNrZ3JvdW5kOiAjZWI5MmJlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerAboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-container-about',
          templateUrl: './container-about.component.html',
          styleUrls: ['./container-about.component.scss']
        }]
      }], function () {
        return [{
          type: _container_about_service__WEBPACK_IMPORTED_MODULE_1__["ContainerAboutService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }];
      }, {
        loader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        actionTranslate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/container-about/container-about.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/container-about/container-about.service.ts ***!
    \************************************************************/

  /*! exports provided: ContainerAboutService */

  /***/
  function srcAppContainerAboutContainerAboutServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContainerAboutService", function () {
      return ContainerAboutService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _shared_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/api/api.service */
    "./src/app/shared/api/api.service.ts");

    var ContainerAboutService =
    /*#__PURE__*/
    function () {
      function ContainerAboutService(apiService) {
        _classCallCheck(this, ContainerAboutService);

        this.apiService = apiService;
      }

      _createClass(ContainerAboutService, [{
        key: "dataAbout",
        value: function dataAbout() {
          return this.apiService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["endpoint"].about);
        }
      }]);

      return ContainerAboutService;
    }();

    ContainerAboutService.ɵfac = function ContainerAboutService_Factory(t) {
      return new (t || ContainerAboutService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
    };

    ContainerAboutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContainerAboutService,
      factory: ContainerAboutService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerAboutService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/container-contact/container-contact.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/container-contact/container-contact.component.ts ***!
    \******************************************************************/

  /*! exports provided: ContainerContactComponent */

  /***/
  function srcAppContainerContactContainerContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContainerContactComponent", function () {
      return ContainerContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_components_container_geometric_container_geometric_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/components/container-geometric/container-geometric.component */
    "./src/app/shared/components/container-geometric/container-geometric.component.ts");

    var ContainerContactComponent =
    /*#__PURE__*/
    function () {
      function ContainerContactComponent(translate) {
        _classCallCheck(this, ContainerContactComponent);

        this.translate = translate;
      }

      _createClass(ContainerContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.translate.get('COMMON.ABOUT').subscribe(function (res) {
            _this3.title = res;
          });
        }
      }]);

      return ContainerContactComponent;
    }();

    ContainerContactComponent.ɵfac = function ContainerContactComponent_Factory(t) {
      return new (t || ContainerContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
    };

    ContainerContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContainerContactComponent,
      selectors: [["app-container-contact"]],
      inputs: {
        languageId: "languageId"
      },
      decls: 17,
      vars: 4,
      consts: [["color", "#FFF", 1, "d-block", "mt-5", 3, "backgroundColor"], ["data-aos", "zoom-in-down", "id", "contact", 1, "container", "pb-5"], [1, "row"], [1, "container-title", "col-12", "mt-md-3", "mb-5", "pt-5", "text-center"], ["data-aos", "fade-right", "data-aos-easing", "linear", "data-aos-duration", "500", 1, "portfolio-title", "position-relative"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "800", 1, "container-mail", "col-12", "text-center", "mt-4", "mb-3"], ["href", "mailto:dustanisci@outlook.com", 1, "text-decoration-none", "pb-2"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "800", 1, "container-social", "col-12", "d-flex", "justify-content-center", "mt-4", "mb-4"], ["href", "https://www.linkedin.com/in/dustanisci/", "target", "_blank", 1, "ml-2", "mr-2", "d-flex", "align-items-center", "justify-content-center", "text-decoration-none", "d-inline-block"], [1, "d-flex", "icon-linkedin"], ["href", "https://github.com/dustanisci", "target", "_blank", 1, "ml-4", "mr-4", "d-flex", "align-items-center", "justify-content-center", "text-decoration-none", "d-inline-block"], [1, "icon-github-alt"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "800", "data-aos", "flip-left", "data-aos-easing", "ease-out-cubic", "data-aos-duration", "800", 1, "container-img", "col-12", "text-center", "mt-5"], ["src", "./assets/img/chamaleon2.png"]],
      template: function ContainerContactComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backgroundColor", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, "COMMON.CONTACT"));
        }
      },
      directives: [_shared_components_container_geometric_container_geometric_component__WEBPACK_IMPORTED_MODULE_2__["ContainerGeometricComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      styles: ["app-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-title[_ngcontent-%COMP%]   .portfolio-title[_ngcontent-%COMP%]:before {\n  background: #000;\n  position: absolute;\n}\napp-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-title[_ngcontent-%COMP%]   .portfolio-title[_ngcontent-%COMP%]::first-letter {\n  color: #000;\n  font-weight: bolder;\n}\napp-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-mail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 19pt;\n  color: #000;\n  border-bottom: 3px solid #FFF;\n  -webkit-transition: 300ms linear;\n  transition: 300ms linear;\n}\napp-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-mail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid #0041a0;\n  -webkit-transition: 300ms linear;\n  transition: 300ms linear;\n}\napp-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 50px;\n  background: #000;\n  cursor: pointer;\n  -webkit-transition: 300ms linear;\n  transition: 300ms linear;\n}\napp-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #00146e;\n  -webkit-transition: 300ms linear;\n  transition: 300ms linear;\n}\napp-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #FFF;\n}\napp-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVyLWNvbnRhY3QvQzpcXHJlcG9zaXRvcmlvc1xccG9ydGZvbGlvLWFuZ3VsYXI5L3NyY1xcYXBwXFxjb250YWluZXItY29udGFjdFxcY29udGFpbmVyLWNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhaW5lci1jb250YWN0L2NvbnRhaW5lci1jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1RO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0xWO0FEUVE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUNOVjtBRFlNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQUEsd0JBQUE7QUNWUjtBRFlRO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtFQUFBLHdCQUFBO0FDVlY7QURpQk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQUEsd0JBQUE7QUNmUjtBRGlCUTtFQUNFLG1CQUFBO0VBQ0EsZ0NBQUE7RUFBQSx3QkFBQTtBQ2ZWO0FEa0JRO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNoQlY7QUR1Qk07RUFDRSxZQUFBO0FDckJSIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVyLWNvbnRhY3QvY29udGFpbmVyLWNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi9hc3NldHMvc3R5bGUvcGFsZXR0ZS5zY3NzXCI7XHJcblxyXG5hcHAtY29udGFpbmVyLWdlb21ldHJpYyB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICAuY29udGFpbmVyLXRpdGxlIHtcclxuICAgICAgLnBvcnRmb2xpby10aXRsZSB7XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6OmZpcnN0LWxldHRlciB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lci1tYWlsIHtcclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB0O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRkZGO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDMwMG1zIGxpbmVhcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICcyJyk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcyBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lci1zb2NpYWwge1xyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDMwMG1zIGxpbmVhcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzEnKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDMwMG1zIGxpbmVhcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXItaW1nIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59IiwiYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMgLmNvbnRhaW5lciAuY29udGFpbmVyLXRpdGxlIC5wb3J0Zm9saW8tdGl0bGU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMgLmNvbnRhaW5lciAuY29udGFpbmVyLXRpdGxlIC5wb3J0Zm9saW8tdGl0bGU6OmZpcnN0LWxldHRlciB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMgLmNvbnRhaW5lciAuY29udGFpbmVyLW1haWwgYSB7XG4gIGZvbnQtc2l6ZTogMTlwdDtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRkZGO1xuICB0cmFuc2l0aW9uOiAzMDBtcyBsaW5lYXI7XG59XG5hcHAtY29udGFpbmVyLWdlb21ldHJpYyAuY29udGFpbmVyIC5jb250YWluZXItbWFpbCBhOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDQxYTA7XG4gIHRyYW5zaXRpb246IDMwMG1zIGxpbmVhcjtcbn1cbmFwcC1jb250YWluZXItZ2VvbWV0cmljIC5jb250YWluZXIgLmNvbnRhaW5lci1zb2NpYWwgYSB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMzAwbXMgbGluZWFyO1xufVxuYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMgLmNvbnRhaW5lciAuY29udGFpbmVyLXNvY2lhbCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzAwMTQ2ZTtcbiAgdHJhbnNpdGlvbjogMzAwbXMgbGluZWFyO1xufVxuYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMgLmNvbnRhaW5lciAuY29udGFpbmVyLXNvY2lhbCBhIGkge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjRkZGO1xufVxuYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMgLmNvbnRhaW5lciAuY29udGFpbmVyLWltZyBpbWcge1xuICB3aWR0aDogMjAwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-container-contact',
          templateUrl: './container-contact.component.html',
          styleUrls: ['./container-contact.component.scss']
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }];
      }, {
        languageId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/container-portfolio/container-portfolio.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/container-portfolio/container-portfolio.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ContainerPortfolioComponent */

  /***/
  function srcAppContainerPortfolioContainerPortfolioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContainerPortfolioComponent", function () {
      return ContainerPortfolioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _container_portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./container-portfolio.service */
    "./src/app/container-portfolio/container-portfolio.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/components/modal/modal.component */
    "./src/app/shared/components/modal/modal.component.ts");

    var _c0 = ["list"];

    function ContainerPortfolioComponent_ng_container_8_div_1_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 17);
      }

      if (rf & 2) {
        var project_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", project_r8.galerias[0].url_galeria, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ContainerPortfolioComponent_ng_container_8_div_1_label_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "MODAL.IMAGE"), " 1 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "MODAL.OF"), " ", project_r8.galerias.length, "");
      }
    }

    function ContainerPortfolioComponent_ng_container_8_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContainerPortfolioComponent_ng_container_8_div_1_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var project_r8 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.actionModal(project_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContainerPortfolioComponent_ng_container_8_div_1_img_1_Template, 1, 1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContainerPortfolioComponent_ng_container_8_div_1_label_2_Template, 4, 7, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r8);
      }
    }

    function ContainerPortfolioComponent_ng_container_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContainerPortfolioComponent_ng_container_8_div_1_Template, 3, 2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.portfolioTwoItems);
      }
    }

    function ContainerPortfolioComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 19);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "active": a0
      };
    };

    function ContainerPortfolioComponent_li_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContainerPortfolioComponent_li_13_Template_li_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var i_r16 = ctx.index;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r17.setItemsByIndex(i_r16);
          return ctx_r17.setClassActive(i_r16 + 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r16 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, i_r16 === 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r16 + 1);
      }
    }

    function ContainerPortfolioComponent_app_modal_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-modal", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function ContainerPortfolioComponent_app_modal_14_Template_app_modal_closed_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.showModal = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("actionModal", ctx_r6.showModal)("setProject", ctx_r6.openedProject);
      }
    }

    var _c2 = function _c2() {
      return [];
    };

    var ContainerPortfolioComponent =
    /*#__PURE__*/
    function () {
      function ContainerPortfolioComponent(renderer, ref, portfolioService, translate) {
        _classCallCheck(this, ContainerPortfolioComponent);

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

      _createClass(ContainerPortfolioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataPortfolio();
        }
      }, {
        key: "dataPortfolio",
        value: function dataPortfolio() {
          var _this4 = this;

          this.portfolioService.dataPortfolio().subscribe(function (portfolio) {
            _this4.portfolio = portfolio.reverse();
            _this4.index = Math.round(_this4.portfolio.length / 2);

            _this4.setItemsByIndex(0);

            _this4.loader.emit();
          }, function () {
            return _this4.loader;
          });
        }
      }, {
        key: "setItemsByIndex",
        value: function setItemsByIndex(index) {
          var _this5 = this;

          this.loaderPortfolio = true;
          setTimeout(function () {
            _this5.portfolioTwoItems[0] = _this5.portfolio[index * 2];
            _this5.portfolioTwoItems[1] = _this5.portfolio[index * 2 + 1];
            _this5.loaderPortfolio = false;
          }, 500);
        }
      }, {
        key: "setClassActive",
        value: function setClassActive(index) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.list.nativeElement.querySelectorAll('li')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var element = _step.value;
              this.renderer.removeClass(element, 'active');
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          this.renderer.addClass(this.list.nativeElement.querySelector("li:nth-of-type(".concat(index, ")")), 'active');
          this.ref.markForCheck();
        }
      }, {
        key: "actionModal",
        value: function actionModal(project) {
          this.openedProject = project;
          this.showModal = true;
        }
      }]);

      return ContainerPortfolioComponent;
    }();

    ContainerPortfolioComponent.ɵfac = function ContainerPortfolioComponent_Factory(t) {
      return new (t || ContainerPortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_container_portfolio_service__WEBPACK_IMPORTED_MODULE_1__["ContainerPortfolioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]));
    };

    ContainerPortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContainerPortfolioComponent,
      selectors: [["app-container-portfolio"]],
      viewQuery: function ContainerPortfolioComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.list = _t.first);
        }
      },
      outputs: {
        loader: "loader"
      },
      decls: 15,
      vars: 8,
      consts: [["id", "portfolio", 1, "container", "mt-4"], [1, "row"], [1, "container-title", "col-12", "mt-md-5", "mb-md-5", "mb-4", "pt-3", "pb-3"], ["data-aos", "fade-right", "data-aos-easing", "linear", "data-aos-duration", "500", 1, "portfolio-title", "position-relative"], [1, "container-projects", "col-12"], [1, "row", "d-lg-flex", "align-items-md-center", "justify-content-md-between"], [4, "ngIf"], ["class", "spinner-border text-dark", "role", "status", 4, "ngIf"], [1, "container-pagination", "col-12"], [1, "pagination", "justify-content-center", "row"], ["list", ""], ["class", "m-sm-0 ml-3 mr-3 mb-3 display-inline-block page-item text-center", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "actionModal", "setProject", "closed", 4, "ngIf"], ["class", "col-lg-5 col-12 pb-lg-6", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-lg-5", "col-12", "pb-lg-6", 3, "click"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "800", "class", "pb-3 img-fluid", 3, "src", 4, "ngIf"], ["class", "pt-2 d-block font-weight-bolder text-center", 4, "ngIf"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "800", 1, "pb-3", "img-fluid", 3, "src"], [1, "pt-2", "d-block", "font-weight-bolder", "text-center"], ["role", "status", 1, "spinner-border", "text-dark"], [1, "m-sm-0", "ml-3", "mr-3", "mb-3", "display-inline-block", "page-item", "text-center", 3, "ngClass", "click"], ["href", "#portfolio", 1, "page-link"], [3, "actionModal", "setProject", "closed"]],
      template: function ContainerPortfolioComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      styles: [".container[_ngcontent-%COMP%]   .container-title[_ngcontent-%COMP%]   .portfolio-title[_ngcontent-%COMP%]:before {\n  background: #00146e;\n  position: absolute;\n}\n.container[_ngcontent-%COMP%]   .container-title[_ngcontent-%COMP%]   .portfolio-title[_ngcontent-%COMP%]::first-letter {\n  color: #00146e;\n  font-weight: bolder;\n}\n.container[_ngcontent-%COMP%]   .container-projects[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  min-height: 410px;\n}\n@media only screen and (max-width: 991px) {\n  .container[_ngcontent-%COMP%]   .container-projects[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    min-height: 920px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .container[_ngcontent-%COMP%]   .container-projects[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    min-height: 782px;\n  }\n}\n@media only screen and (max-width: 500px) {\n  .container[_ngcontent-%COMP%]   .container-projects[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    min-height: 550px;\n  }\n}\n.container[_ngcontent-%COMP%]   .container-projects[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-bottom: 4px solid #0041a0;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .container-projects[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .spinner-border[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  width: 50px;\n  height: 50px;\n}\n.container[_ngcontent-%COMP%]   .container-pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%] {\n  z-index: 0;\n}\n@media only screen and (max-width: 991px) {\n  .container[_ngcontent-%COMP%]   .container-pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%] {\n    width: 40px;\n  }\n}\n.container[_ngcontent-%COMP%]   .container-pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #FFF;\n  background: #0041a0;\n  -webkit-transition: 250ms ease;\n  transition: 250ms ease;\n  cursor: pointer;\n  border: 1px solid rgba(0, 0, 0, 0.14);\n}\n@media only screen and (max-width: 991px) {\n  .container[_ngcontent-%COMP%]   .container-pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 20pt;\n  }\n}\n.container[_ngcontent-%COMP%]   .container-pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #eb92be;\n  -webkit-transition: 250ms ease;\n  transition: 250ms ease;\n}\n.container[_ngcontent-%COMP%]   .container-pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #eb92be;\n}\n.container[_ngcontent-%COMP%]   .container-pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  background: #eb92be;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVyLXBvcnRmb2xpby9DOlxccmVwb3NpdG9yaW9zXFxwb3J0Zm9saW8tYW5ndWxhcjkvc3JjXFxhcHBcXGNvbnRhaW5lci1wb3J0Zm9saW9cXGNvbnRhaW5lci1wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhaW5lci1wb3J0Zm9saW8vY29udGFpbmVyLXBvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLTTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNKUjtBRE9NO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDTFI7QURXSTtFQUNFLGlCQUFBO0FDVE47QURXTTtFQUhGO0lBSUksaUJBQUE7RUNSTjtBQUNGO0FEVU07RUFQRjtJQVFJLGlCQUFBO0VDUE47QUFDRjtBRFNNO0VBWEY7SUFZSSxpQkFBQTtFQ05OO0FBQ0Y7QURRTTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtBQ05SO0FEU007RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDUFI7QURhSTtFQUNFLFVBQUE7QUNYTjtBRGFNO0VBSEY7SUFJSSxXQUFBO0VDVk47QUFDRjtBRFlNO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFBQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtBQ1ZSO0FEWVE7RUFQRjtJQVFJLGVBQUE7RUNUUjtBQUNGO0FEV1E7RUFDRSxtQkFBQTtFQUNBLDhCQUFBO0VBQUEsc0JBQUE7QUNUVjtBRGNRO0VBQ0UsbUJBQUE7QUNaVjtBRGNVO0VBQ0UsbUJBQUE7QUNaWiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci1wb3J0Zm9saW8vY29udGFpbmVyLXBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uL2Fzc2V0cy9zdHlsZS9wYWxldHRlLnNjc3NcIjtcclxuXHJcbi5jb250YWluZXIge1xyXG4gIC5jb250YWluZXItdGl0bGUge1xyXG4gICAgLnBvcnRmb2xpby10aXRsZSB7XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzEnKTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6OmZpcnN0LWxldHRlciB7XHJcbiAgICAgICAgY29sb3I6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMScpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXItcHJvamVjdHMge1xyXG4gICAgLnJvdyB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDQxMHB4O1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDkyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgbWluLWhlaWdodDogNzgycHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1NTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICcyJyk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Bpbm5lci1ib3JkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci1wYWdpbmF0aW9uIHtcclxuICAgIC5wYWdlLWl0ZW0ge1xyXG4gICAgICB6LWluZGV4OiAwO1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzInKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnNCcpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnNCcpO1xyXG5cclxuICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzQnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lciAuY29udGFpbmVyLXRpdGxlIC5wb3J0Zm9saW8tdGl0bGU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzAwMTQ2ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLXRpdGxlIC5wb3J0Zm9saW8tdGl0bGU6OmZpcnN0LWxldHRlciB7XG4gIGNvbG9yOiAjMDAxNDZlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLXByb2plY3RzIC5yb3cge1xuICBtaW4taGVpZ2h0OiA0MTBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmNvbnRhaW5lciAuY29udGFpbmVyLXByb2plY3RzIC5yb3cge1xuICAgIG1pbi1oZWlnaHQ6IDkyMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250YWluZXIgLmNvbnRhaW5lci1wcm9qZWN0cyAucm93IHtcbiAgICBtaW4taGVpZ2h0OiA3ODJweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuY29udGFpbmVyIC5jb250YWluZXItcHJvamVjdHMgLnJvdyB7XG4gICAgbWluLWhlaWdodDogNTUwcHg7XG4gIH1cbn1cbi5jb250YWluZXIgLmNvbnRhaW5lci1wcm9qZWN0cyAucm93IGltZyB7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMDA0MWEwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyIC5jb250YWluZXItcHJvamVjdHMgLnJvdyAuc3Bpbm5lci1ib3JkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uY29udGFpbmVyIC5jb250YWluZXItcGFnaW5hdGlvbiAucGFnZS1pdGVtIHtcbiAgei1pbmRleDogMDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmNvbnRhaW5lciAuY29udGFpbmVyLXBhZ2luYXRpb24gLnBhZ2UtaXRlbSB7XG4gICAgd2lkdGg6IDQwcHg7XG4gIH1cbn1cbi5jb250YWluZXIgLmNvbnRhaW5lci1wYWdpbmF0aW9uIC5wYWdlLWl0ZW0gYSB7XG4gIGNvbG9yOiAjRkZGO1xuICBiYWNrZ3JvdW5kOiAjMDA0MWEwO1xuICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNCk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5jb250YWluZXIgLmNvbnRhaW5lci1wYWdpbmF0aW9uIC5wYWdlLWl0ZW0gYSB7XG4gICAgZm9udC1zaXplOiAyMHB0O1xuICB9XG59XG4uY29udGFpbmVyIC5jb250YWluZXItcGFnaW5hdGlvbiAucGFnZS1pdGVtIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWI5MmJlO1xuICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLXBhZ2luYXRpb24gLnBhZ2UtaXRlbS5hY3RpdmUgYSB7XG4gIGJhY2tncm91bmQ6ICNlYjkyYmU7XG59XG4uY29udGFpbmVyIC5jb250YWluZXItcGFnaW5hdGlvbiAucGFnZS1pdGVtLmFjdGl2ZSBhOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogI2ViOTJiZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerPortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-container-portfolio',
          templateUrl: './container-portfolio.component.html',
          styleUrls: ['./container-portfolio.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _container_portfolio_service__WEBPACK_IMPORTED_MODULE_1__["ContainerPortfolioService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }];
      }, {
        loader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        list: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['list']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/container-portfolio/container-portfolio.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/container-portfolio/container-portfolio.service.ts ***!
    \********************************************************************/

  /*! exports provided: ContainerPortfolioService */

  /***/
  function srcAppContainerPortfolioContainerPortfolioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContainerPortfolioService", function () {
      return ContainerPortfolioService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _shared_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/api/api.service */
    "./src/app/shared/api/api.service.ts");

    var ContainerPortfolioService =
    /*#__PURE__*/
    function () {
      function ContainerPortfolioService(apiService) {
        _classCallCheck(this, ContainerPortfolioService);

        this.apiService = apiService;
      }

      _createClass(ContainerPortfolioService, [{
        key: "dataPortfolio",
        value: function dataPortfolio() {
          return this.apiService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["endpoint"].portfolio);
        }
      }]);

      return ContainerPortfolioService;
    }();

    ContainerPortfolioService.ɵfac = function ContainerPortfolioService_Factory(t) {
      return new (t || ContainerPortfolioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
    };

    ContainerPortfolioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContainerPortfolioService,
      factory: ContainerPortfolioService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerPortfolioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/container-skills/container-skills.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/container-skills/container-skills.component.ts ***!
    \****************************************************************/

  /*! exports provided: ContainerSkillsComponent */

  /***/
  function srcAppContainerSkillsContainerSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContainerSkillsComponent", function () {
      return ContainerSkillsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _container_skills_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./container-skills.service */
    "./src/app/container-skills/container-skills.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_components_container_geometric_container_geometric_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/components/container-geometric/container-geometric.component */
    "./src/app/shared/components/container-geometric/container-geometric.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ContainerSkillsComponent_div_10_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r34 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r34, " ");
      }
    }

    function ContainerSkillsComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ContainerSkillsComponent_div_10_li_4_Template, 2, 1, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r32 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r32.technology);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", skill_r32.value);
      }
    }

    var ContainerSkillsComponent =
    /*#__PURE__*/
    function () {
      function ContainerSkillsComponent(skillService, translate) {
        _classCallCheck(this, ContainerSkillsComponent);

        this.skillService = skillService;
        this.translate = translate;
        this.loader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.skills = [];
      }

      _createClass(ContainerSkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.dataTechnologies();
          this.loader.emit();
          this.setSkills();
        }
      }, {
        key: "setSkills",
        value: function setSkills() {
          var _this6 = this;

          this.translate.get(['SKILLS.OTHERS', 'SKILLS.DATABASE', 'SKILLS.TEST', 'SKILLS.GIT']).subscribe(function (res) {
            _this6.skills = [{
              technology: 'Front-End',
              value: ['HTML 5', 'CSS 3', 'SCSS', 'SASS', 'COMPASS', 'Angular 9', 'Javascript', 'Typescript', 'jQuery / Ajax', 'Bootstrap', 'Material', 'Materialize', 'Foundation']
            }, {
              technology: 'Back-End',
              value: ['Java', 'JPA', 'JWT (Tokens)', 'OAuth 2.0', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Hibernate', 'Rest', 'Socket', 'Webservices']
            }, {
              technology: res['SKILLS.OTHERS'],
              value: [res['SKILLS.GIT'], 'Scrum', 'Docker', 'Google Analytics', 'SEO']
            }, {
              technology: res['SKILLS.DATABASE'],
              value: ['MongoDB', 'SQL', 'MySQL']
            }, {
              technology: res['SKILLS.TEST'],
              value: ['Jersey', 'Jasmine', 'Karma', 'Phantom', 'JUnit']
            }];
          });
        }
      }, {
        key: "actionTranslate",
        set: function set(changedLanguage) {
          this.setSkills();
        }
      }]);

      return ContainerSkillsComponent;
    }();

    ContainerSkillsComponent.ɵfac = function ContainerSkillsComponent_Factory(t) {
      return new (t || ContainerSkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_container_skills_service__WEBPACK_IMPORTED_MODULE_1__["ContainerSkillsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]));
    };

    ContainerSkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContainerSkillsComponent,
      selectors: [["app-container-skills"]],
      inputs: {
        actionTranslate: "actionTranslate"
      },
      outputs: {
        loader: "loader"
      },
      decls: 11,
      vars: 5,
      consts: [["color", "#FFF", 1, "d-block", "mt-4", "mt-md-5", "pt-md-4", 3, "backgroundColor"], ["id", "skills", 1, "container", "pb-5"], [1, "row", "pb-5"], [1, "container-title", "col-12", "mt-5", "mb-5", "pt-sm-5"], ["data-aos", "fade-right", "data-aos-easing", "linear", "data-aos-duration", "500", 1, "portfolio-title", "position-relative"], [1, "container-skills", "col-12"], [1, "col-12"], [1, "row", "d-lg-flex", "justify-content-md-between", "align-items-md-stretch"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "450", "class", "pl-0 pr-0 col-lg-2 col-md-6 pl-4 pr-3 col-sm-6 col-6 mt-4 d-lg-flex flex-column", 4, "ngFor", "ngForOf"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "450", 1, "pl-0", "pr-0", "col-lg-2", "col-md-6", "pl-4", "pr-3", "col-sm-6", "col-6", "mt-4", "d-lg-flex", "flex-column"], [1, "font-weight-bolder"], [1, "pt-2", "pl-3"], [4, "ngFor", "ngForOf"]],
      template: function ContainerSkillsComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backgroundColor", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, "COMMON.SKILLS"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
        }
      },
      directives: [_shared_components_container_geometric_container_geometric_component__WEBPACK_IMPORTED_MODULE_3__["ContainerGeometricComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      styles: ["app-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-title[_ngcontent-%COMP%]   .portfolio-title[_ngcontent-%COMP%]:before {\n  background: #eb92be;\n  position: absolute;\n}\napp-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-title[_ngcontent-%COMP%]   .portfolio-title[_ngcontent-%COMP%]::first-letter {\n  color: #eb92be;\n  font-weight: bolder;\n}\napp-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-skills[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\napp-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-skills[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15pt;\n}\napp-container-geometric[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-skills[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  font-size: 12pt;\n  list-style: none;\n  border-left: 3px solid rgba(255, 255, 255, 0.25);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVyLXNraWxscy9DOlxccmVwb3NpdG9yaW9zXFxwb3J0Zm9saW8tYW5ndWxhcjkvc3JjXFxhcHBcXGNvbnRhaW5lci1za2lsbHNcXGNvbnRhaW5lci1za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhaW5lci1za2lsbHMvY29udGFpbmVyLXNraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNUTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNMVjtBRFFRO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDTlY7QURhUTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7QUNYVjtBRGFVO0VBQ0UsZUFBQTtBQ1haO0FEY1U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnREFBQTtBQ1paIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVyLXNraWxscy9jb250YWluZXItc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vYXNzZXRzL3N0eWxlL3BhbGV0dGUuc2Nzc1wiO1xyXG5cclxuYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgLmNvbnRhaW5lci10aXRsZSB7XHJcbiAgICAgIC5wb3J0Zm9saW8tdGl0bGUge1xyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnNCcpO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6Zmlyc3QtbGV0dGVyIHtcclxuICAgICAgICAgIGNvbG9yOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzQnKTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lci1za2lsbHMge1xyXG4gICAgICAucm93IHtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG59IiwiYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMgLmNvbnRhaW5lciAuY29udGFpbmVyLXRpdGxlIC5wb3J0Zm9saW8tdGl0bGU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2ViOTJiZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMgLmNvbnRhaW5lciAuY29udGFpbmVyLXRpdGxlIC5wb3J0Zm9saW8tdGl0bGU6OmZpcnN0LWxldHRlciB7XG4gIGNvbG9yOiAjZWI5MmJlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMgLmNvbnRhaW5lciAuY29udGFpbmVyLXNraWxscyAucm93IGRpdiB7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5hcHAtY29udGFpbmVyLWdlb21ldHJpYyAuY29udGFpbmVyIC5jb250YWluZXItc2tpbGxzIC5yb3cgZGl2IGgzIHtcbiAgZm9udC1zaXplOiAxNXB0O1xufVxuYXBwLWNvbnRhaW5lci1nZW9tZXRyaWMgLmNvbnRhaW5lciAuY29udGFpbmVyLXNraWxscyAucm93IGRpdiB1bCB7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerSkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-container-skills',
          templateUrl: './container-skills.component.html',
          styleUrls: ['./container-skills.component.scss']
        }]
      }], function () {
        return [{
          type: _container_skills_service__WEBPACK_IMPORTED_MODULE_1__["ContainerSkillsService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }];
      }, {
        actionTranslate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        loader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/container-skills/container-skills.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/container-skills/container-skills.service.ts ***!
    \**************************************************************/

  /*! exports provided: ContainerSkillsService */

  /***/
  function srcAppContainerSkillsContainerSkillsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContainerSkillsService", function () {
      return ContainerSkillsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/api/api.service */
    "./src/app/shared/api/api.service.ts");

    var ContainerSkillsService =
    /*#__PURE__*/
    function () {
      function ContainerSkillsService(apiService) {
        _classCallCheck(this, ContainerSkillsService);

        this.apiService = apiService;
      }

      _createClass(ContainerSkillsService, [{
        key: "dataTechnologies",
        value: function dataTechnologies() {
          return this.apiService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["endpoint"].skills).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return resp.result;
          }));
        }
      }]);

      return ContainerSkillsService;
    }();

    ContainerSkillsService.ɵfac = function ContainerSkillsService_Factory(t) {
      return new (t || ContainerSkillsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
    };

    ContainerSkillsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContainerSkillsService,
      factory: ContainerSkillsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerSkillsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/api/api.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/api/api.service.ts ***!
    \*******************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppSharedApiApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ApiService =
    /*#__PURE__*/
    function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json');
        this.request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
      }

      _createClass(ApiService, [{
        key: "setHeaders",
        value: function setHeaders(request) {
          var _this7 = this;

          if (request) {
            this.request = {};
            Object.keys(request).map(function (key) {
              _this7.request.append(key, request[key]);
            });
          }
        }
      }, {
        key: "get",
        value: function get(url, request) {
          this.setHeaders(request);
          return this.http.get(url, {
            headers: this.headers,
            params: this.request
          });
        }
      }, {
        key: "post",
        value: function post(url, value, request) {
          this.setHeaders(request);
          return this.http.post(url, value, {
            headers: this.headers,
            params: this.request
          });
        }
      }, {
        key: "put",
        value: function put(url, id, value, request) {
          this.setHeaders(request);
          return this.http.put("".concat(url, "/").concat(id), value, {
            headers: this.headers,
            params: this.request
          });
        }
      }, {
        key: "delete",
        value: function _delete(url, id, request) {
          this.setHeaders(request);
          return this.http.delete("".concat(url, "/").concat(id), {
            headers: this.headers,
            params: this.request
          });
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/container-geometric/container-geometric.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/shared/components/container-geometric/container-geometric.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: ContainerGeometricComponent, ContainerGeometric */

  /***/
  function srcAppSharedComponentsContainerGeometricContainerGeometricComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContainerGeometricComponent", function () {
      return ContainerGeometricComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContainerGeometric", function () {
      return ContainerGeometric;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1) {
      return {
        "background-image": a0,
        "transform": a1
      };
    };

    var _c1 = function _c1(a0) {
      return {
        "color": a0
      };
    };

    var _c2 = ["*"];

    var ContainerGeometricComponent =
    /*#__PURE__*/
    function () {
      function ContainerGeometricComponent() {
        _classCallCheck(this, ContainerGeometricComponent);

        this.reverse = false;
      }

      _createClass(ContainerGeometricComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
      }]);

      return ContainerGeometricComponent;
    }();

    ContainerGeometricComponent.ɵfac = function ContainerGeometricComponent_Factory(t) {
      return new (t || ContainerGeometricComponent)();
    };

    ContainerGeometricComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContainerGeometricComponent,
      selectors: [["app-container-geometric"]],
      inputs: {
        backgroundColor: "backgroundColor",
        color: "color",
        reverse: "reverse"
      },
      ngContentSelectors: _c2,
      decls: 5,
      vars: 8,
      consts: [[1, "container-geometric"], [1, "geometric", 3, "ngStyle"], [1, "subcontainer-geometric", "position-relative", 3, "ngStyle"], [3, "ngClass"]],
      template: function ContainerGeometricComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, "url(" + ctx._background + ")", ctx.reverse ? "scaleX(-1)" : "scaleX(1)"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.color));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.backgroundColor === 1 ? "blue" : ctx.backgroundColor === 2 ? "light-blue" : "pink");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".container-geometric[_ngcontent-%COMP%]   .geometric[_ngcontent-%COMP%] {\n  height: 100px;\n  background-repeat: no-repeat;\n  background-position: center top;\n  background-size: 100% 100%;\n  content: \"\";\n  top: 0;\n}\n.container-geometric[_ngcontent-%COMP%]   .subcontainer-geometric[_ngcontent-%COMP%] {\n  top: -1px;\n}\n.pink[_ngcontent-%COMP%] {\n  background: #eb92be;\n}\n.blue[_ngcontent-%COMP%] {\n  background: #0041a0;\n}\n.light-blue[_ngcontent-%COMP%] {\n  background: #00e1e1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29udGFpbmVyLWdlb21ldHJpYy9DOlxccmVwb3NpdG9yaW9zXFxwb3J0Zm9saW8tYW5ndWxhcjkvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcY29udGFpbmVyLWdlb21ldHJpY1xcY29udGFpbmVyLWdlb21ldHJpYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29udGFpbmVyLWdlb21ldHJpYy9jb250YWluZXItZ2VvbWV0cmljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0FDRko7QURLRTtFQUNFLFNBQUE7QUNISjtBRE9BO0VBQ0UsbUJBQUE7QUNKRjtBRE9BO0VBQ0UsbUJBQUE7QUNKRjtBRE9BO0VBQ0UsbUJBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbnRhaW5lci1nZW9tZXRyaWMvY29udGFpbmVyLWdlb21ldHJpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uL2Fzc2V0cy9zdHlsZS9wYWxldHRlLnNjc3NcIjtcclxuXHJcbi5jb250YWluZXItZ2VvbWV0cmljIHtcclxuICAuZ2VvbWV0cmljIHtcclxuICAgIGhlaWdodCAgICAgICAgICAgICA6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQgIDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcclxuICAgIGJhY2tncm91bmQtc2l6ZSAgICA6IDEwMCUgMTAwJTtcclxuICAgIGNvbnRlbnQgICAgICAgICAgICA6ICcnO1xyXG4gICAgdG9wICAgICAgICAgICAgICAgIDogMDtcclxuICB9XHJcblxyXG4gIC5zdWJjb250YWluZXItZ2VvbWV0cmljIHtcclxuICAgIHRvcDogLTFweDtcclxuICB9XHJcbn1cclxuXHJcbi5waW5rIHtcclxuICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzQnKTtcclxufVxyXG5cclxuLmJsdWUge1xyXG4gIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMicpO1xyXG59XHJcblxyXG4ubGlnaHQtYmx1ZSB7XHJcbiAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICczJyk7XHJcbn0iLCIuY29udGFpbmVyLWdlb21ldHJpYyAuZ2VvbWV0cmljIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMDtcbn1cbi5jb250YWluZXItZ2VvbWV0cmljIC5zdWJjb250YWluZXItZ2VvbWV0cmljIHtcbiAgdG9wOiAtMXB4O1xufVxuXG4ucGluayB7XG4gIGJhY2tncm91bmQ6ICNlYjkyYmU7XG59XG5cbi5ibHVlIHtcbiAgYmFja2dyb3VuZDogIzAwNDFhMDtcbn1cblxuLmxpZ2h0LWJsdWUge1xuICBiYWNrZ3JvdW5kOiAjMDBlMWUxO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerGeometricComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-container-geometric',
          templateUrl: './container-geometric.component.html',
          styleUrls: ['./container-geometric.component.scss']
        }]
      }], function () {
        return [];
      }, {
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        reverse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var ContainerGeometric;

    (function (ContainerGeometric) {
      ContainerGeometric[ContainerGeometric["Blue"] = 1] = "Blue";
      ContainerGeometric[ContainerGeometric["LightBlue"] = 2] = "LightBlue";
      ContainerGeometric[ContainerGeometric["Pink"] = 3] = "Pink";
    })(ContainerGeometric || (ContainerGeometric = {}));
    /***/

  },

  /***/
  "./src/app/shared/components/dropdown/dropdown.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/components/dropdown/dropdown.component.ts ***!
    \******************************************************************/

  /*! exports provided: DropdownComponent */

  /***/
  function srcAppSharedComponentsDropdownDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownComponent", function () {
      return DropdownComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DropdownComponent_li_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownComponent_li_6_Template_li_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var item_r42 = ctx.$implicit;

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r43.action(item_r42);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r42 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r42.label);
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "active": a0,
        "effect-opacity": a1
      };
    };

    var DropdownComponent =
    /*#__PURE__*/
    function () {
      function DropdownComponent(ref) {
        _classCallCheck(this, DropdownComponent);

        this.ref = ref;
        this.items = [];
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isActive = false;
        this.effectOpacity = false;
      }

      _createClass(DropdownComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.label = this.items.length ? this.items.find(function (item) {
            return item.selected === true;
          }).label : '';
        }
      }, {
        key: "open",
        value: function open(isActive, effectOpacity) {
          var _this8 = this;

          this.isActive = isActive;
          setTimeout(function () {
            return _this8.effectOpacity = effectOpacity;
          }, 250);
        }
      }, {
        key: "action",
        value: function action(item) {
          this.value.emit(item.value);
          this.label = item.label;
          this.effectOpacity = false;
          this.isActive = false;
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (!this.ref.nativeElement.contains(event.target)) {
            this.effectOpacity = false;
            this.isActive = false;
          }
        }
      }]);

      return DropdownComponent;
    }();

    DropdownComponent.ɵfac = function DropdownComponent_Factory(t) {
      return new (t || DropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    DropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DropdownComponent,
      selectors: [["app-dropdown"]],
      hostBindings: function DropdownComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownComponent_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("scroll", function DropdownComponent_scroll_HostBindingHandler($event) {
            return ctx.onClick($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        items: "items"
      },
      outputs: {
        value: "value"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()],
      decls: 7,
      vars: 6,
      consts: [[1, "container-dropdown"], [1, "container-label", "d-flex", "align-items-center", "justify-content-end", 3, "click"], [1, "m-0"], [1, "ml-2", "icon-caret-down"], [1, "position-absolute", "pl-0", "pt-2", "pb-2", "mt-2", 3, "ngClass"], ["class", "pl-4 pr-4 pt-2 pb-2", 3, "click", 4, "ngFor", "ngForOf"], [1, "pl-4", "pr-4", "pt-2", "pb-2", 3, "click"]],
      template: function DropdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownComponent_Template_div_click_1_listener($event) {
            return ctx.open(!ctx.isActive, !ctx.effectOpacity);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DropdownComponent_li_6_Template, 2, 1, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.isActive, ctx.effectOpacity));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".container-dropdown[_ngcontent-%COMP%] {\n  opacity: 1;\n  -webkit-transition: 500ms opacity linear;\n  transition: 500ms opacity linear;\n}\n.container-dropdown[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.container-dropdown[_ngcontent-%COMP%]   .container-label[_ngcontent-%COMP%] {\n  -webkit-transition: 200ms linear;\n  transition: 200ms linear;\n  font-size: 9pt;\n}\n.container-dropdown[_ngcontent-%COMP%]   .container-label[_ngcontent-%COMP%]:hover {\n  -webkit-transition: 200ms linear;\n  transition: 200ms linear;\n  color: #00e1e1;\n}\n.container-dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  font-size: 10pt;\n  opacity: 0;\n  -webkit-transition: 500ms opacity linear;\n  transition: 500ms opacity linear;\n  list-style: none;\n  background: #FFF;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.14);\n  display: none;\n  opacity: 0;\n  -webkit-transition: 200ms all opacity;\n  transition: 200ms all opacity;\n}\n.container-dropdown[_ngcontent-%COMP%]   ul.effect-opacity[_ngcontent-%COMP%] {\n  opacity: 1;\n  -webkit-transition: 200ms all opacity;\n  transition: 200ms all opacity;\n}\n.container-dropdown[_ngcontent-%COMP%]   ul.active[_ngcontent-%COMP%] {\n  z-index: 100;\n  display: block;\n}\n.container-dropdown[_ngcontent-%COMP%]   ul.active[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  -webkit-transition: 400ms linear;\n  transition: 400ms linear;\n}\n.container-dropdown[_ngcontent-%COMP%]   ul.active[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  -webkit-transition: 400ms linear;\n  transition: 400ms linear;\n  background: rgba(0, 65, 160, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHJvcGRvd24vQzpcXHJlcG9zaXRvcmlvc1xccG9ydGZvbGlvLWFuZ3VsYXI5L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGRyb3Bkb3duXFxkcm9wZG93bi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxVQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtBQ0RGO0FER0U7RUFDRSxlQUFBO0FDREo7QURJRTtFQUNFLGdDQUFBO0VBQUEsd0JBQUE7RUFDQSxjQUFBO0FDRko7QURJSTtFQUNFLGdDQUFBO0VBQUEsd0JBQUE7RUFDQSxjQUFBO0FDRk47QURNRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUFBLDZCQUFBO0FDSko7QURNSTtFQUNFLFVBQUE7RUFDQSxxQ0FBQTtFQUFBLDZCQUFBO0FDSk47QURPSTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FDTE47QURPTTtFQUNFLGdDQUFBO0VBQUEsd0JBQUE7QUNMUjtBRE9RO0VBQ0UsZ0NBQUE7RUFBQSx3QkFBQTtFQUNBLGlDQUFBO0FDTFYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uL2Fzc2V0cy9zdHlsZS9wYWxldHRlLnNjc3NcIjtcclxuXHJcbi5jb250YWluZXItZHJvcGRvd24ge1xyXG4gIG9wYWNpdHkgICA6IDE7XHJcbiAgdHJhbnNpdGlvbjogNTAwbXMgb3BhY2l0eSBsaW5lYXI7XHJcblxyXG4gICoge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci1sYWJlbCB7XHJcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBsaW5lYXI7XHJcbiAgICBmb250LXNpemUgOiA5cHQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zaXRpb246IDIwMG1zIGxpbmVhcjtcclxuICAgICAgY29sb3IgICAgIDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICczJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBmb250LXNpemUgICAgOiAxMHB0O1xyXG4gICAgb3BhY2l0eSAgICAgIDogMDtcclxuICAgIHRyYW5zaXRpb24gICA6IDUwMG1zIG9wYWNpdHkgbGluZWFyO1xyXG4gICAgbGlzdC1zdHlsZSAgIDogbm9uZTtcclxuICAgIGJhY2tncm91bmQgICA6ICNGRkY7XHJcbiAgICBib3gtc2hhZG93ICAgOiAycHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE0KTtcclxuICAgIGRpc3BsYXkgICAgICA6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgYWxsIG9wYWNpdHk7XHJcblxyXG4gICAgJi5lZmZlY3Qtb3BhY2l0eSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zaXRpb246IDIwMG1zIGFsbCBvcGFjaXR5O1xyXG4gICAgfVxyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgei1pbmRleCAgIDogMTAwO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICBcclxuICAgICAgbGkge1xyXG4gICAgICAgIHRyYW5zaXRpb246IDQwMG1zIGxpbmVhcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiA0MDBtcyBsaW5lYXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5LW9wYWNpdHktMTAlJywgJzInKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCIuY29udGFpbmVyLWRyb3Bkb3duIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogNTAwbXMgb3BhY2l0eSBsaW5lYXI7XG59XG4uY29udGFpbmVyLWRyb3Bkb3duICoge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyLWRyb3Bkb3duIC5jb250YWluZXItbGFiZWwge1xuICB0cmFuc2l0aW9uOiAyMDBtcyBsaW5lYXI7XG4gIGZvbnQtc2l6ZTogOXB0O1xufVxuLmNvbnRhaW5lci1kcm9wZG93biAuY29udGFpbmVyLWxhYmVsOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMjAwbXMgbGluZWFyO1xuICBjb2xvcjogIzAwZTFlMTtcbn1cbi5jb250YWluZXItZHJvcGRvd24gdWwge1xuICBmb250LXNpemU6IDEwcHQ7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDUwMG1zIG9wYWNpdHkgbGluZWFyO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xuICBkaXNwbGF5OiBub25lO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAyMDBtcyBhbGwgb3BhY2l0eTtcbn1cbi5jb250YWluZXItZHJvcGRvd24gdWwuZWZmZWN0LW9wYWNpdHkge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiAyMDBtcyBhbGwgb3BhY2l0eTtcbn1cbi5jb250YWluZXItZHJvcGRvd24gdWwuYWN0aXZlIHtcbiAgei1pbmRleDogMTAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jb250YWluZXItZHJvcGRvd24gdWwuYWN0aXZlIGxpIHtcbiAgdHJhbnNpdGlvbjogNDAwbXMgbGluZWFyO1xufVxuLmNvbnRhaW5lci1kcm9wZG93biB1bC5hY3RpdmUgbGk6aG92ZXIge1xuICB0cmFuc2l0aW9uOiA0MDBtcyBsaW5lYXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgNjUsIDE2MCwgMC4xKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dropdown',
          templateUrl: './dropdown.component.html',
          styleUrls: ['./dropdown.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:click', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:scroll', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var FooterComponent = function FooterComponent() {
      _classCallCheck(this, FooterComponent);

      this.year = new Date().getFullYear();
    };

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 3,
      vars: 4,
      consts: [[1, "text-center", "position-relative", "pt-4", "pb-4"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Eduardo Stanisci \xA9 ", ctx.year, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "FOOTER.COPYRIGHT"), "");
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      styles: ["footer[_ngcontent-%COMP%] {\n  background: #000;\n  color: #FFF;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL0M6XFxyZXBvc2l0b3Jpb3NcXHBvcnRmb2xpby1hbmd1bGFyOS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi9hc3NldHMvc3R5bGUvcGFsZXR0ZS5zY3NzXCI7XHJcblxyXG5mb290ZXJ7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxuICBjb2xvcjogI0ZGRjtcclxuICBib3JkZXI6IG5vbmU7XHJcbn0iLCJmb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI0ZGRjtcbiAgYm9yZGVyOiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/modal/modal.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/components/modal/modal.component.ts ***!
    \************************************************************/

  /*! exports provided: ModalComponent */

  /***/
  function srcAppSharedComponentsModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return ModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["img"];

    function ModalComponent_img_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14, 15);
      }

      if (rf & 2) {
        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r35.project.galerias[ctx_r35.index].url_galeria, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "opacity": a0
      };
    };

    function ModalComponent_i_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_i_11_Template_i_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.nextImage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r36.project.galerias.length === ctx_r36.index + 1 ? "0.3" : "1"));
      }
    }

    function ModalComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "MODAL.IMAGE"), " ", ctx_r37.index + 1, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, "MODAL.OF"), " ", ctx_r37.project.galerias.length, " ");
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "display": a0
      };
    };

    var ModalComponent =
    /*#__PURE__*/
    function () {
      function ModalComponent(renderer, translate) {
        _classCallCheck(this, ModalComponent);

        this.renderer = renderer;
        this.translate = translate;
        this.showModal = false;
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.project = {};
        this.index = 0;
      }

      _createClass(ModalComponent, [{
        key: "_actionModal",
        value: function _actionModal(showModal) {
          this.showModal = showModal;
          this.index = 0;

          if (this.showModal) {
            document.querySelector('body').style.overflowY = 'hidden';
          } else {
            this.closed.emit();
            document.querySelector('body').style.overflowY = 'scroll';
          }
        }
      }, {
        key: "nextImage",
        value: function nextImage() {
          var auxIndex = this.index + 1;

          if (this.project.galerias[auxIndex].url_galeria.length) {
            this.index++;
          }
        }
      }, {
        key: "previousImage",
        value: function previousImage() {
          var auxIndex = this.index - 1;

          if (this.project.galerias[auxIndex].url_galeria.length) {
            this.index--;
          }
        }
      }, {
        key: "actionClose",
        value: function actionClose() {
          this._actionModal(false);

          this.renderer.removeClass(this.img.nativeElement, 'opacity-effect');
        }
      }, {
        key: "actionModal",
        set: function set(showModal) {
          this._actionModal(showModal);
        }
      }, {
        key: "setProject",
        set: function set(project) {
          this.project = project;
        }
      }]);

      return ModalComponent;
    }();

    ModalComponent.ɵfac = function ModalComponent_Factory(t) {
      return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
    };

    ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalComponent,
      selectors: [["app-modal"]],
      viewQuery: function ModalComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.img = _t.first);
        }
      },
      inputs: {
        actionModal: "actionModal",
        setProject: "setProject"
      },
      outputs: {
        closed: "closed"
      },
      decls: 15,
      vars: 9,
      consts: [[1, "h-100", "container-modal", "w-100", "position-fixed", "h-100", 3, "ngStyle"], [1, "container-fluid", "h-100"], [1, "row", "d-flex", "align-items-stretch", "h-100"], [1, "container-close", "position-fixed"], [1, "icon-remove", 3, "click"], [1, "container-elements", "col-12", "d-flex"], [1, "container-arrow", "col-2", "col-sm-1", "d-flex", "align-items-center", "justify-content-center", "flex-column"], [1, "icon-chevron-left", 3, "ngStyle", "click"], [1, "container-img", "col-8", "col-sm-10", "d-flex", "align-items-center", "justify-content-center", "flex-column"], ["class", "img-fluid begin-opacity-effect", 3, "src", 4, "ngIf"], ["class", "icon-chevron-right", 3, "ngStyle", "click", 4, "ngIf"], [1, "container-quantity", "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "row"], ["class", "mb-3", 4, "ngIf"], [1, "img-fluid", "begin-opacity-effect", 3, "src"], ["img", ""], [1, "icon-chevron-right", 3, "ngStyle", "click"], [1, "mb-3"]],
      template: function ModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_i_click_4_listener($event) {
            return ctx.actionClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_i_click_7_listener($event) {
            return ctx.previousImage();
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx.showModal ? "block" : "none"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.index === 0 ? "0.3" : "1"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project && ctx.project.galerias);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project && ctx.project.galerias);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project && ctx.project.galerias);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      styles: [".container-modal[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 99;\n  top: 0;\n  color: #FFF;\n}\n.container-modal[_ngcontent-%COMP%]   .container-close[_ngcontent-%COMP%] {\n  right: 10px;\n  top: 5px;\n  z-index: 1;\n}\n.container-modal[_ngcontent-%COMP%]   .container-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30pt;\n  cursor: pointer;\n}\n.container-modal[_ngcontent-%COMP%]   .container-warning[_ngcontent-%COMP%] {\n  display: none;\n}\n@media only screen and (max-width: 600px) {\n  .container-modal[_ngcontent-%COMP%]   .container-warning[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.container-modal[_ngcontent-%COMP%]   .container-warning[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 15pt;\n}\n.container-modal[_ngcontent-%COMP%]   .container-elements[_ngcontent-%COMP%] {\n  height: 90%;\n}\n@media only screen and (max-width: 500px) {\n  .container-modal[_ngcontent-%COMP%]   .container-elements[_ngcontent-%COMP%]   .container-img[_ngcontent-%COMP%] {\n    padding: 0;\n    width: 100%;\n    max-width: 100%;\n    position: absolute;\n    left: 0;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n  }\n}\n.container-modal[_ngcontent-%COMP%]   .container-elements[_ngcontent-%COMP%]   .container-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 85%;\n  max-height: 90%;\n  -webkit-animation: 600ms multiple-opacities-on;\n          animation: 600ms multiple-opacities-on;\n}\n@media only screen and (max-width: 500px) {\n  .container-modal[_ngcontent-%COMP%]   .container-elements[_ngcontent-%COMP%]   .container-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: auto;\n    position: relative;\n    max-width: 96%;\n    max-height: 65vh;\n  }\n}\n.container-modal[_ngcontent-%COMP%]   .container-elements[_ngcontent-%COMP%]   .container-img[_ngcontent-%COMP%]   img.opacity-effect-before[_ngcontent-%COMP%] {\n  opacity: 0;\n  -webkit-animation: 600ms multiple-opacities-on;\n          animation: 600ms multiple-opacities-on;\n}\n.container-modal[_ngcontent-%COMP%]   .container-elements[_ngcontent-%COMP%]   .container-img[_ngcontent-%COMP%]   img.opacity-effect-after[_ngcontent-%COMP%] {\n  opacity: 1;\n  -webkit-animation: 600ms multiple-opacities-on;\n          animation: 600ms multiple-opacities-on;\n}\n@media only screen and (max-width: 500px) {\n  .container-modal[_ngcontent-%COMP%]   .container-elements[_ngcontent-%COMP%]   .container-arrow[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 65px;\n    height: 65px;\n    bottom: 0;\n  }\n}\n@media only screen and (max-width: 500px) {\n  .container-modal[_ngcontent-%COMP%]   .container-elements[_ngcontent-%COMP%]   .container-arrow[_ngcontent-%COMP%]:first-child {\n    left: 30px;\n  }\n}\n@media only screen and (max-width: 500px) {\n  .container-modal[_ngcontent-%COMP%]   .container-elements[_ngcontent-%COMP%]   .container-arrow[_ngcontent-%COMP%]:last-child {\n    right: 30px;\n  }\n}\n.container-modal[_ngcontent-%COMP%]   .container-elements[_ngcontent-%COMP%]   .container-arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 40pt;\n  cursor: pointer;\n  border: 1px solid #FFF;\n  border-radius: 5px;\n  padding: 10px 20px;\n}\n@media only screen and (max-width: 767px) {\n  .container-modal[_ngcontent-%COMP%]   .container-elements[_ngcontent-%COMP%]   .container-arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 20pt;\n  }\n}\n.container-modal[_ngcontent-%COMP%]   .container-quantity[_ngcontent-%COMP%] {\n  height: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvQzpcXHJlcG9zaXRvcmlvc1xccG9ydGZvbGlvLWFuZ3VsYXI5L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXG1vZGFsXFxtb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNDSjtBRENJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNDTjtBREdFO0VBQ0UsYUFBQTtBQ0RKO0FER0k7RUFIRjtJQUlJLGNBQUE7RUNBSjtBQUNGO0FERUk7RUFDRSxlQUFBO0FDQU47QURJRTtFQUNFLFdBQUE7QUNGSjtBREtNO0VBREY7SUFFSSxVQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0lBQ0EsbUNBQUE7WUFBQSwyQkFBQTtFQ0ZOO0FBQ0Y7QURJTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ0ZSO0FESVE7RUFMRjtJQU1JLFdBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQ0RSO0FBQ0Y7QURHUTtFQUNFLFVBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FDRFY7QURJUTtFQUNFLFVBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FDRlY7QURRTTtFQURGO0lBRUksa0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFNBQUE7RUNMTjtBQUNGO0FEUVE7RUFERjtJQUVJLFVBQUE7RUNMUjtBQUNGO0FEU1E7RUFERjtJQUVJLFdBQUE7RUNOUjtBQUNGO0FEU007RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ1BSO0FEU1E7RUFQRjtJQVFJLGVBQUE7RUNOUjtBQUNGO0FEV0U7RUFDRSxXQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItbW9kYWwge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICB6LWluZGV4ICAgOiA5OTtcclxuICB0b3AgICAgICAgOiAwO1xyXG4gIGNvbG9yICAgICA6ICNGRkY7XHJcblxyXG4gIC5jb250YWluZXItY2xvc2Uge1xyXG4gICAgcmlnaHQgIDogMTBweDtcclxuICAgIHRvcCAgICA6IDVweDtcclxuICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBwdDtcclxuICAgICAgY3Vyc29yICAgOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci13YXJuaW5nIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVwdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXItZWxlbWVudHMge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcblxyXG4gICAgLmNvbnRhaW5lci1pbWcge1xyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgcGFkZGluZyAgOiAwO1xyXG4gICAgICAgIHdpZHRoICAgIDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0ICAgICA6IDA7XHJcbiAgICAgICAgdG9wICAgICAgOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aCA6IDg1JTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgYW5pbWF0aW9uIDogNjAwbXMgbXVsdGlwbGUtb3BhY2l0aWVzLW9uO1xyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgICB3aWR0aCAgICAgOiBhdXRvO1xyXG4gICAgICAgICAgcG9zaXRpb24gIDogcmVsYXRpdmU7XHJcbiAgICAgICAgICBtYXgtd2lkdGggOiA5NiU7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA2NXZoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5vcGFjaXR5LWVmZmVjdC1iZWZvcmUge1xyXG4gICAgICAgICAgb3BhY2l0eSAgOiAwO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiA2MDBtcyBtdWx0aXBsZS1vcGFjaXRpZXMtb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLm9wYWNpdHktZWZmZWN0LWFmdGVyIHtcclxuICAgICAgICAgIG9wYWNpdHkgIDogMTtcclxuICAgICAgICAgIGFuaW1hdGlvbjogNjAwbXMgbXVsdGlwbGUtb3BhY2l0aWVzLW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXItYXJyb3cge1xyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoICAgOiA2NXB4O1xyXG4gICAgICAgIGhlaWdodCAgOiA2NXB4O1xyXG4gICAgICAgIGJvdHRvbSAgOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgICBsZWZ0OiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgICByaWdodDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZSAgICA6IDQwcHQ7XHJcbiAgICAgICAgY3Vyc29yICAgICAgIDogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXIgICAgICAgOiAxcHggc29saWQgI0ZGRjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZyAgICAgIDogMTBweCAyMHB4O1xyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLXF1YW50aXR5IHtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gIH1cclxuXHJcbn0iLCIuY29udGFpbmVyLW1vZGFsIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICB6LWluZGV4OiA5OTtcbiAgdG9wOiAwO1xuICBjb2xvcjogI0ZGRjtcbn1cbi5jb250YWluZXItbW9kYWwgLmNvbnRhaW5lci1jbG9zZSB7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDVweDtcbiAgei1pbmRleDogMTtcbn1cbi5jb250YWluZXItbW9kYWwgLmNvbnRhaW5lci1jbG9zZSBpIHtcbiAgZm9udC1zaXplOiAzMHB0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyLW1vZGFsIC5jb250YWluZXItd2FybmluZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXItbW9kYWwgLmNvbnRhaW5lci13YXJuaW5nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLmNvbnRhaW5lci1tb2RhbCAuY29udGFpbmVyLXdhcm5pbmcgbGFiZWwge1xuICBmb250LXNpemU6IDE1cHQ7XG59XG4uY29udGFpbmVyLW1vZGFsIC5jb250YWluZXItZWxlbWVudHMge1xuICBoZWlnaHQ6IDkwJTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRhaW5lci1tb2RhbCAuY29udGFpbmVyLWVsZW1lbnRzIC5jb250YWluZXItaW1nIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbn1cbi5jb250YWluZXItbW9kYWwgLmNvbnRhaW5lci1lbGVtZW50cyAuY29udGFpbmVyLWltZyBpbWcge1xuICBtYXgtd2lkdGg6IDg1JTtcbiAgbWF4LWhlaWdodDogOTAlO1xuICBhbmltYXRpb246IDYwMG1zIG11bHRpcGxlLW9wYWNpdGllcy1vbjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRhaW5lci1tb2RhbCAuY29udGFpbmVyLWVsZW1lbnRzIC5jb250YWluZXItaW1nIGltZyB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC13aWR0aDogOTYlO1xuICAgIG1heC1oZWlnaHQ6IDY1dmg7XG4gIH1cbn1cbi5jb250YWluZXItbW9kYWwgLmNvbnRhaW5lci1lbGVtZW50cyAuY29udGFpbmVyLWltZyBpbWcub3BhY2l0eS1lZmZlY3QtYmVmb3JlIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiA2MDBtcyBtdWx0aXBsZS1vcGFjaXRpZXMtb247XG59XG4uY29udGFpbmVyLW1vZGFsIC5jb250YWluZXItZWxlbWVudHMgLmNvbnRhaW5lci1pbWcgaW1nLm9wYWNpdHktZWZmZWN0LWFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uOiA2MDBtcyBtdWx0aXBsZS1vcGFjaXRpZXMtb247XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5jb250YWluZXItbW9kYWwgLmNvbnRhaW5lci1lbGVtZW50cyAuY29udGFpbmVyLWFycm93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIGJvdHRvbTogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuY29udGFpbmVyLW1vZGFsIC5jb250YWluZXItZWxlbWVudHMgLmNvbnRhaW5lci1hcnJvdzpmaXJzdC1jaGlsZCB7XG4gICAgbGVmdDogMzBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuY29udGFpbmVyLW1vZGFsIC5jb250YWluZXItZWxlbWVudHMgLmNvbnRhaW5lci1hcnJvdzpsYXN0LWNoaWxkIHtcbiAgICByaWdodDogMzBweDtcbiAgfVxufVxuLmNvbnRhaW5lci1tb2RhbCAuY29udGFpbmVyLWVsZW1lbnRzIC5jb250YWluZXItYXJyb3cgaSB7XG4gIGZvbnQtc2l6ZTogNDBwdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRhaW5lci1tb2RhbCAuY29udGFpbmVyLWVsZW1lbnRzIC5jb250YWluZXItYXJyb3cgaSB7XG4gICAgZm9udC1zaXplOiAyMHB0O1xuICB9XG59XG4uY29udGFpbmVyLW1vZGFsIC5jb250YWluZXItcXVhbnRpdHkge1xuICBoZWlnaHQ6IDEwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-modal',
          templateUrl: './modal.component.html',
          styleUrls: ['./modal.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }];
      }, {
        actionModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        setProject: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        img: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['img']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/navbar/navbar.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
    \**************************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppSharedComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_models_Language_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/models/Language.enum */
    "./src/app/shared/models/Language.enum.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../dropdown/dropdown.component */
    "./src/app/shared/components/dropdown/dropdown.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NavbarComponent_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_9_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var item_r24 = ctx.$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r25.navbarAction(false);
          return ctx_r25.setPositionScroll(item_r24.link);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r24.name);
      }
    }

    function NavbarComponent_i_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_i_11_Template_i_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.navbarAction(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_i_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_i_12_Template_i_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.navbarAction(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "openMenu": a0
      };
    };

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(translate) {
        _classCallCheck(this, NavbarComponent);

        this.translate = translate;
        this.loader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openedMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changedLanguage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.navbar = [];
        this.openMenu = false;
        this.language = [];
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.dataNavbar();
          this.loader.emit();
          this.translate.setDefaultLang('en');
          this.translateAction(_shared_models_Language_enum__WEBPACK_IMPORTED_MODULE_1__["Language"].English);
        }
      }, {
        key: "lockScrollBody",
        value: function lockScrollBody() {
          this.openMenu ? document.querySelector('body').style.overflowY = 'hidden' : document.querySelector('body').style.overflowY = 'scroll';
        }
      }, {
        key: "navbarAction",
        value: function navbarAction(isOpen) {
          this.openMenu = isOpen;
          this.openedMenu.emit(isOpen);
          this.lockScrollBody();
        }
      }, {
        key: "translateAction",
        value: function translateAction(id) {
          this.setLanguage(id);
          this.setTranslateLanguage(id);
          this.setTranslateNavbar();
          this.changedLanguage.emit(id);
        }
      }, {
        key: "setPositionScroll",
        value: function setPositionScroll(id) {
          var axisY = document.getElementById(id.replace('#', '')).getBoundingClientRect();
          window.scrollBy(0, axisY.top - 100);
        }
      }, {
        key: "setLanguage",
        value: function setLanguage(id) {
          if (id === _shared_models_Language_enum__WEBPACK_IMPORTED_MODULE_1__["Language"].English) {
            this.translate.use('en');
          } else if (id === _shared_models_Language_enum__WEBPACK_IMPORTED_MODULE_1__["Language"].Portuguese) {
            this.translate.use('br');
          } else {
            this.translate.use('esp');
          }
        }
      }, {
        key: "setTranslateLanguage",
        value: function setTranslateLanguage(id) {
          var _this9 = this;

          this.translate.get(['LANGUAGE.ENG', 'LANGUAGE.BR', 'LANGUAGE.SPA']).subscribe(function (res) {
            _this9.language = [{
              label: res['LANGUAGE.ENG'],
              value: 0,
              selected: false
            }, {
              label: res['LANGUAGE.BR'],
              value: 1,
              selected: false
            }, {
              label: res['LANGUAGE.SPA'],
              value: 2,
              selected: false
            }];
            _this9.language.find(function (language) {
              return language.value === id;
            }).selected = true;
          });
        }
      }, {
        key: "setTranslateNavbar",
        value: function setTranslateNavbar() {
          var _this10 = this;

          this.translate.get(['COMMON.ABOUT', 'COMMON.SKILLS', 'COMMON.PORTFOLIO', 'COMMON.CONTACT']).subscribe(function (res) {
            _this10.navbar = [{
              name: res['COMMON.ABOUT'],
              link: '#about'
            }, {
              name: res['COMMON.SKILLS'],
              link: '#skills'
            }, {
              name: res['COMMON.PORTFOLIO'],
              link: '#portfolio'
            }, {
              name: res['COMMON.CONTACT'],
              link: '#contact'
            }];
          });
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          if (event.target.innerWidth > 767 && this.openMenu === true) {
            this.openMenu = false;
            this.openedMenu.emit(false);
            this.lockScrollBody();
          }
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function NavbarComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      outputs: {
        loader: "loader",
        openedMenu: "openedMenu",
        changedLanguage: "changedLanguage"
      },
      decls: 13,
      vars: 7,
      consts: [[1, "container-fluid", "pt-2", "pb-2", "pt-md-3", "pb-md-3", "position-fixed", "bg-white"], [1, "container"], [1, "row", "position-relative", "d-md-flex", "align-items-stretch"], ["data-aos", "fade-zoom-in", "data-aos-easing", "linear", "data-aos-duration", "1000", 1, "container-logo", "col-4"], ["href", "./"], ["src", "./assets/img/logo.png"], [1, "position-absolute", 3, "items", "value"], [1, "container-items", "col-12", "col-sm-12", "col-md-8", "d-md-flex", "align-md-items-center", "justify-content-md-end", 3, "ngClass"], ["data-aos", "fade-zoom-in", "data-aos-easing", "linear", "data-aos-duration", "1000", 1, "d-md-flex", "w-100", "pl-0", "pt-md-0", "pt-5", "align-items-center", "justify-content-end", "mb-0", "mt-5", "mt-md-0"], ["class", "d-md-inline d-sm-block d-block ml-md-3 text-center text-md-left", 4, "ngFor", "ngForOf"], [1, "container-icons", "d-md-none", "position-absolute", "d-flex", "align-items-center"], ["class", "icon-reorder", 3, "click", 4, "ngIf"], ["class", "icon-remove", 3, "click", 4, "ngIf"], [1, "d-md-inline", "d-sm-block", "d-block", "ml-md-3", "text-center", "text-md-left"], [1, "pt-4", "pb-4", "pl-md-3", "pt-md-0", "pb-md-0", "text-decoration-none", 3, "click"], [1, "icon-reorder", 3, "click"], [1, "icon-remove", 3, "click"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-dropdown", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("value", function NavbarComponent_Template_app_dropdown_value_6_listener($event) {
            return ctx.translateAction($event);
          });

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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["DropdownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["nav[_ngcontent-%COMP%] {\n  z-index: 2;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.14);\n}\n@media only screen and (max-width: 575px) {\n  nav[_ngcontent-%COMP%]   .container-logo[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\nnav[_ngcontent-%COMP%]   .container-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n}\n@media only screen and (max-width: 767px) {\n  nav[_ngcontent-%COMP%]   .container-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 130px;\n  }\n}\nnav[_ngcontent-%COMP%]   app-dropdown[_ngcontent-%COMP%] {\n  right: 15px;\n  top: -12px;\n  width: 81px;\n}\n@media only screen and (max-width: 767px) {\n  nav[_ngcontent-%COMP%]   app-dropdown[_ngcontent-%COMP%] {\n    right: 50px;\n    top: 14px;\n  }\n}\nnav[_ngcontent-%COMP%]   .container-items[_ngcontent-%COMP%] {\n  font-size: 13pt;\n}\n@media only screen and (max-width: 767px) {\n  nav[_ngcontent-%COMP%]   .container-items[_ngcontent-%COMP%] {\n    min-height: 100%;\n    width: 0;\n    height: 100%;\n    -webkit-transition: 500ms ease;\n    transition: 500ms ease;\n    left: 0;\n    top: 0;\n    position: fixed;\n  }\n}\n@media only screen and (max-width: 767px) {\n  nav[_ngcontent-%COMP%]   .container-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    height: auto;\n    display: none;\n  }\n}\nnav[_ngcontent-%COMP%]   .container-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0041a0;\n  -webkit-transition: 200ms linear;\n  transition: 200ms linear;\n  cursor: pointer;\n}\nnav[_ngcontent-%COMP%]   .container-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  -webkit-transition: 200ms linear;\n  transition: 200ms linear;\n  color: #00e1e1;\n}\n@media only screen and (max-width: 767px) {\n  nav[_ngcontent-%COMP%]   .container-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #FFF;\n    display: none;\n    font-size: 20pt;\n  }\n}\nnav[_ngcontent-%COMP%]   .container-items.openMenu[_ngcontent-%COMP%] {\n  background: #eb92be;\n  -webkit-transition: 250ms ease;\n  transition: 250ms ease;\n  width: 100%;\n  overflow-y: scroll;\n}\nnav[_ngcontent-%COMP%]   .container-items.openMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: block;\n}\nnav[_ngcontent-%COMP%]   .container-items.openMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n}\nnav[_ngcontent-%COMP%]   .container-icons[_ngcontent-%COMP%] {\n  right: 0;\n  top: 0;\n  height: 100%;\n}\nnav[_ngcontent-%COMP%]   .container-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\nnav[_ngcontent-%COMP%]   .container-icons[_ngcontent-%COMP%]   i.icon-reorder[_ngcontent-%COMP%] {\n  color: #00146e;\n}\nnav[_ngcontent-%COMP%]   .container-icons[_ngcontent-%COMP%]   i.icon-remove[_ngcontent-%COMP%] {\n  color: #00146e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL0M6XFxyZXBvc2l0b3Jpb3NcXHBvcnRmb2xpby1hbmd1bGFyOS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFVBQUE7RUFDQSw0Q0FBQTtBQ0RGO0FESUk7RUFERjtJQUVJLFVBQUE7RUNESjtBQUNGO0FER0k7RUFDRSxZQUFBO0FDRE47QURHTTtFQUhGO0lBSUksWUFBQTtFQ0FOO0FBQ0Y7QURJRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0ZKO0FESUk7RUFMRjtJQU1JLFdBQUE7SUFDQSxTQUFBO0VDREo7QUFDRjtBRElFO0VBQ0UsZUFBQTtBQ0ZKO0FESUk7RUFIRjtJQUlJLGdCQUFBO0lBQ0EsUUFBQTtJQUNBLFlBQUE7SUFDQSw4QkFBQTtJQUFBLHNCQUFBO0lBQ0EsT0FBQTtJQUNBLE1BQUE7SUFDQSxlQUFBO0VDREo7QUFDRjtBRElNO0VBREY7SUFFSSxZQUFBO0lBQ0EsYUFBQTtFQ0ROO0FBQ0Y7QURJUTtFQUNFLGNBQUE7RUFDQSxnQ0FBQTtFQUFBLHdCQUFBO0VBQ0EsZUFBQTtBQ0ZWO0FESVU7RUFDRSxnQ0FBQTtFQUFBLHdCQUFBO0VBQ0EsY0FBQTtBQ0ZaO0FES1U7RUFWRjtJQVdJLFdBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtFQ0ZWO0FBQ0Y7QURPSTtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7RUFBQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0xOO0FET007RUFDRSxjQUFBO0FDTFI7QURRVTtFQUNFLGNBQUE7QUNOWjtBRGFFO0VBQ0UsUUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0FDWEo7QURhSTtFQUNFLGVBQUE7QUNYTjtBRGFNO0VBQ0UsY0FBQTtBQ1hSO0FEY007RUFDRSxjQUFBO0FDWlIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vYXNzZXRzL3N0eWxlL3BhbGV0dGUuc2Nzc1wiO1xyXG5cclxubmF2IHtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xyXG5cclxuICAuY29udGFpbmVyLWxvZ28ge1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBwYWRkaW5nOjA7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXBwLWRyb3Bkb3duIHtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiAtMTJweDtcclxuICAgIHdpZHRoOiA4MXB4O1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgcmlnaHQ6IDUwcHg7XHJcbiAgICAgIHRvcDogMTRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXItaXRlbXMge1xyXG4gICAgZm9udC1zaXplOiAxM3B0O1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgdHJhbnNpdGlvbjogNTAwbXMgZWFzZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdWwge1xyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxpIHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzInKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zIGxpbmVhcjtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjAwbXMgbGluZWFyO1xyXG4gICAgICAgICAgICBjb2xvcjogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICczJyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYub3Blbk1lbnUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzQnKTtcclxuICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci1pY29ucyB7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBpIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG5cclxuICAgICAgJi5pY29uLXJlb3JkZXIge1xyXG4gICAgICAgIGNvbG9yOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzEnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5pY29uLXJlbW92ZSB7XHJcbiAgICAgICAgY29sb3I6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwibmF2IHtcbiAgei1pbmRleDogMjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNCk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIG5hdiAuY29udGFpbmVyLWxvZ28ge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbm5hdiAuY29udGFpbmVyLWxvZ28gaW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICBuYXYgLmNvbnRhaW5lci1sb2dvIGltZyB7XG4gICAgd2lkdGg6IDEzMHB4O1xuICB9XG59XG5uYXYgYXBwLWRyb3Bkb3duIHtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogLTEycHg7XG4gIHdpZHRoOiA4MXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICBuYXYgYXBwLWRyb3Bkb3duIHtcbiAgICByaWdodDogNTBweDtcbiAgICB0b3A6IDE0cHg7XG4gIH1cbn1cbm5hdiAuY29udGFpbmVyLWl0ZW1zIHtcbiAgZm9udC1zaXplOiAxM3B0O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICBuYXYgLmNvbnRhaW5lci1pdGVtcyB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogNTAwbXMgZWFzZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgbmF2IC5jb250YWluZXItaXRlbXMgdWwge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5uYXYgLmNvbnRhaW5lci1pdGVtcyB1bCBsaSBhIHtcbiAgY29sb3I6ICMwMDQxYTA7XG4gIHRyYW5zaXRpb246IDIwMG1zIGxpbmVhcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubmF2IC5jb250YWluZXItaXRlbXMgdWwgbGkgYTpob3ZlciB7XG4gIHRyYW5zaXRpb246IDIwMG1zIGxpbmVhcjtcbiAgY29sb3I6ICMwMGUxZTE7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIG5hdiAuY29udGFpbmVyLWl0ZW1zIHVsIGxpIGEge1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyMHB0O1xuICB9XG59XG5uYXYgLmNvbnRhaW5lci1pdGVtcy5vcGVuTWVudSB7XG4gIGJhY2tncm91bmQ6ICNlYjkyYmU7XG4gIHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5uYXYgLmNvbnRhaW5lci1pdGVtcy5vcGVuTWVudSB1bCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxubmF2IC5jb250YWluZXItaXRlbXMub3Blbk1lbnUgdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxubmF2IC5jb250YWluZXItaWNvbnMge1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5uYXYgLmNvbnRhaW5lci1pY29ucyBpIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxubmF2IC5jb250YWluZXItaWNvbnMgaS5pY29uLXJlb3JkZXIge1xuICBjb2xvcjogIzAwMTQ2ZTtcbn1cbm5hdiAuY29udGFpbmVyLWljb25zIGkuaWNvbi1yZW1vdmUge1xuICBjb2xvcjogIzAwMTQ2ZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }];
      }, {
        loader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        openedMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        changedLanguage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/models/Language.enum.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/models/Language.enum.ts ***!
    \************************************************/

  /*! exports provided: Language */

  /***/
  function srcAppSharedModelsLanguageEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Language", function () {
      return Language;
    });

    var Language;

    (function (Language) {
      Language[Language["English"] = 0] = "English";
      Language[Language["Portuguese"] = 1] = "Portuguese";
      Language[Language["Spanish"] = 2] = "Spanish";
    })(Language || (Language = {}));
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment, endpoint */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "endpoint", function () {
      return endpoint;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    var endpoint = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\repositorios\portfolio-angular9\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map