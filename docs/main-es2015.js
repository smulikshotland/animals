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
/* harmony import */ var _comps_cats_cats_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comps/cats/cats.component */ "./src/app/comps/cats/cats.component.ts");
/* harmony import */ var _comps_elephants_elephants_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comps/elephants/elephants.component */ "./src/app/comps/elephants/elephants.component.ts");
/* harmony import */ var _comps_giraffes_giraffes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/giraffes/giraffes.component */ "./src/app/comps/giraffes/giraffes.component.ts");





class AppComponent {
    constructor() {
        this.title = 'animals';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "all"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05D7\u05D9\u05D5\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-cats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-elephants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-giraffes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_comps_cats_cats_component__WEBPACK_IMPORTED_MODULE_1__["CatsComponent"], _comps_elephants_elephants_component__WEBPACK_IMPORTED_MODULE_2__["ElephantsComponent"], _comps_giraffes_giraffes_component__WEBPACK_IMPORTED_MODULE_3__["GiraffesComponent"]], styles: [".all[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGx7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _comps_giraffes_giraffes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/giraffes/giraffes.component */ "./src/app/comps/giraffes/giraffes.component.ts");
/* harmony import */ var _comps_elephants_elephants_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/elephants/elephants.component */ "./src/app/comps/elephants/elephants.component.ts");
/* harmony import */ var _comps_cats_cats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/cats/cats.component */ "./src/app/comps/cats/cats.component.ts");
/* harmony import */ var _comps_giraffes_li_giraff_li_giraff_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/giraffes/li-giraff/li-giraff.component */ "./src/app/comps/giraffes/li-giraff/li-giraff.component.ts");
/* harmony import */ var _comps_giraffes_description_giraff_description_giraff_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comps/giraffes/description-giraff/description-giraff.component */ "./src/app/comps/giraffes/description-giraff/description-giraff.component.ts");
/* harmony import */ var _comps_giraffes_text_giraff_text_giraff_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comps/giraffes/text-giraff/text-giraff.component */ "./src/app/comps/giraffes/text-giraff/text-giraff.component.ts");
/* harmony import */ var _comps_elephants_li_elephants_li_elephants_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comps/elephants/li-elephants/li-elephants.component */ "./src/app/comps/elephants/li-elephants/li-elephants.component.ts");
/* harmony import */ var _comps_elephants_description_elephants_description_elephants_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comps/elephants/description-elephants/description-elephants.component */ "./src/app/comps/elephants/description-elephants/description-elephants.component.ts");
/* harmony import */ var _comps_elephants_text_elephants_text_elephants_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comps/elephants/text-elephants/text-elephants.component */ "./src/app/comps/elephants/text-elephants/text-elephants.component.ts");
/* harmony import */ var _comps_cats_li_cats_li_cats_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comps/cats/li-cats/li-cats.component */ "./src/app/comps/cats/li-cats/li-cats.component.ts");
/* harmony import */ var _comps_cats_description_cats_description_cats_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comps/cats/description-cats/description-cats.component */ "./src/app/comps/cats/description-cats/description-cats.component.ts");
/* harmony import */ var _comps_cats_text_cats_text_cats_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comps/cats/text-cats/text-cats.component */ "./src/app/comps/cats/text-cats/text-cats.component.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _comps_giraffes_giraffes_component__WEBPACK_IMPORTED_MODULE_3__["GiraffesComponent"],
        _comps_elephants_elephants_component__WEBPACK_IMPORTED_MODULE_4__["ElephantsComponent"],
        _comps_cats_cats_component__WEBPACK_IMPORTED_MODULE_5__["CatsComponent"],
        _comps_giraffes_li_giraff_li_giraff_component__WEBPACK_IMPORTED_MODULE_6__["LiGiraffComponent"],
        _comps_giraffes_description_giraff_description_giraff_component__WEBPACK_IMPORTED_MODULE_7__["DescriptionGiraffComponent"],
        _comps_giraffes_text_giraff_text_giraff_component__WEBPACK_IMPORTED_MODULE_8__["TextGiraffComponent"],
        _comps_elephants_li_elephants_li_elephants_component__WEBPACK_IMPORTED_MODULE_9__["LiElephantsComponent"],
        _comps_elephants_description_elephants_description_elephants_component__WEBPACK_IMPORTED_MODULE_10__["DescriptionElephantsComponent"],
        _comps_elephants_text_elephants_text_elephants_component__WEBPACK_IMPORTED_MODULE_11__["TextElephantsComponent"],
        _comps_cats_li_cats_li_cats_component__WEBPACK_IMPORTED_MODULE_12__["LiCatsComponent"],
        _comps_cats_description_cats_description_cats_component__WEBPACK_IMPORTED_MODULE_13__["DescriptionCatsComponent"],
        _comps_cats_text_cats_text_cats_component__WEBPACK_IMPORTED_MODULE_14__["TextCatsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _comps_giraffes_giraffes_component__WEBPACK_IMPORTED_MODULE_3__["GiraffesComponent"],
                    _comps_elephants_elephants_component__WEBPACK_IMPORTED_MODULE_4__["ElephantsComponent"],
                    _comps_cats_cats_component__WEBPACK_IMPORTED_MODULE_5__["CatsComponent"],
                    _comps_giraffes_li_giraff_li_giraff_component__WEBPACK_IMPORTED_MODULE_6__["LiGiraffComponent"],
                    _comps_giraffes_description_giraff_description_giraff_component__WEBPACK_IMPORTED_MODULE_7__["DescriptionGiraffComponent"],
                    _comps_giraffes_text_giraff_text_giraff_component__WEBPACK_IMPORTED_MODULE_8__["TextGiraffComponent"],
                    _comps_elephants_li_elephants_li_elephants_component__WEBPACK_IMPORTED_MODULE_9__["LiElephantsComponent"],
                    _comps_elephants_description_elephants_description_elephants_component__WEBPACK_IMPORTED_MODULE_10__["DescriptionElephantsComponent"],
                    _comps_elephants_text_elephants_text_elephants_component__WEBPACK_IMPORTED_MODULE_11__["TextElephantsComponent"],
                    _comps_cats_li_cats_li_cats_component__WEBPACK_IMPORTED_MODULE_12__["LiCatsComponent"],
                    _comps_cats_description_cats_description_cats_component__WEBPACK_IMPORTED_MODULE_13__["DescriptionCatsComponent"],
                    _comps_cats_text_cats_text_cats_component__WEBPACK_IMPORTED_MODULE_14__["TextCatsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comps/cats/cats.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comps/cats/cats.component.ts ***!
  \**********************************************/
/*! exports provided: CatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatsComponent", function() { return CatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _description_cats_description_cats_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./description-cats/description-cats.component */ "./src/app/comps/cats/description-cats/description-cats.component.ts");
/* harmony import */ var _li_cats_li_cats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./li-cats/li-cats.component */ "./src/app/comps/cats/li-cats/li-cats.component.ts");
/* harmony import */ var _text_cats_text_cats_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-cats/text-cats.component */ "./src/app/comps/cats/text-cats/text-cats.component.ts");





class CatsComponent {
    constructor() { }
    ngOnInit() {
    }
}
CatsComponent.ɵfac = function CatsComponent_Factory(t) { return new (t || CatsComponent)(); };
CatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatsComponent, selectors: [["app-cats"]], decls: 4, vars: 0, consts: [[1, "aaa"]], template: function CatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-description-cats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-li-cats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-text-cats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_description_cats_description_cats_component__WEBPACK_IMPORTED_MODULE_1__["DescriptionCatsComponent"], _li_cats_li_cats_component__WEBPACK_IMPORTED_MODULE_2__["LiCatsComponent"], _text_cats_text_cats_component__WEBPACK_IMPORTED_MODULE_3__["TextCatsComponent"]], styles: [".aaa[_ngcontent-%COMP%]{\r\n    background-color: grey;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvY2F0cy9jYXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9jYXRzL2NhdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYWF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cats',
                templateUrl: './cats.component.html',
                styleUrls: ['./cats.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/cats/description-cats/description-cats.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/comps/cats/description-cats/description-cats.component.ts ***!
  \***************************************************************************/
/*! exports provided: DescriptionCatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionCatsComponent", function() { return DescriptionCatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DescriptionCatsComponent {
    constructor() { }
    ngOnInit() {
    }
}
DescriptionCatsComponent.ɵfac = function DescriptionCatsComponent_Factory(t) { return new (t || DescriptionCatsComponent)(); };
DescriptionCatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DescriptionCatsComponent, selectors: [["app-description-cats"]], decls: 5, vars: 0, consts: [[1, "allCats"]], template: function DescriptionCatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "description-cats works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".allCats[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    color: brown;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvY2F0cy9kZXNjcmlwdGlvbi1jYXRzL2Rlc2NyaXB0aW9uLWNhdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvY2F0cy9kZXNjcmlwdGlvbi1jYXRzL2Rlc2NyaXB0aW9uLWNhdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGxDYXRze1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogYnJvd247XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DescriptionCatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-description-cats',
                templateUrl: './description-cats.component.html',
                styleUrls: ['./description-cats.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/cats/li-cats/li-cats.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/comps/cats/li-cats/li-cats.component.ts ***!
  \*********************************************************/
/*! exports provided: LiCatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiCatsComponent", function() { return LiCatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LiCatsComponent {
    constructor() { }
    ngOnInit() {
    }
}
LiCatsComponent.ɵfac = function LiCatsComponent_Factory(t) { return new (t || LiCatsComponent)(); };
LiCatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LiCatsComponent, selectors: [["app-li-cats"]], decls: 7, vars: 0, consts: [[1, "all-li"]], template: function LiCatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Purple cat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Green cat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Blue cat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".all-li[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: blueviolet;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvY2F0cy9saS1jYXRzL2xpLWNhdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9jYXRzL2xpLWNhdHMvbGktY2F0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsbC1saXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibHVldmlvbGV0O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiCatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-li-cats',
                templateUrl: './li-cats.component.html',
                styleUrls: ['./li-cats.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/cats/text-cats/text-cats.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/comps/cats/text-cats/text-cats.component.ts ***!
  \*************************************************************/
/*! exports provided: TextCatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextCatsComponent", function() { return TextCatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TextCatsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TextCatsComponent.ɵfac = function TextCatsComponent_Factory(t) { return new (t || TextCatsComponent)(); };
TextCatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextCatsComponent, selectors: [["app-text-cats"]], decls: 2, vars: 0, template: function TextCatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "text-cats works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["p[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    color: green;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvY2F0cy90ZXh0LWNhdHMvdGV4dC1jYXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2NhdHMvdGV4dC1jYXRzL3RleHQtY2F0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextCatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-text-cats',
                templateUrl: './text-cats.component.html',
                styleUrls: ['./text-cats.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/elephants/description-elephants/description-elephants.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/comps/elephants/description-elephants/description-elephants.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DescriptionElephantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionElephantsComponent", function() { return DescriptionElephantsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DescriptionElephantsComponent {
    constructor() { }
    ngOnInit() {
    }
}
DescriptionElephantsComponent.ɵfac = function DescriptionElephantsComponent_Factory(t) { return new (t || DescriptionElephantsComponent)(); };
DescriptionElephantsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DescriptionElephantsComponent, selectors: [["app-description-elephants"]], decls: 5, vars: 0, consts: [[1, "allElephants"]], template: function DescriptionElephantsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "elephants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "description-elephants works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".allElephants[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    color: brown;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZWxlcGhhbnRzL2Rlc2NyaXB0aW9uLWVsZXBoYW50cy9kZXNjcmlwdGlvbi1lbGVwaGFudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvZWxlcGhhbnRzL2Rlc2NyaXB0aW9uLWVsZXBoYW50cy9kZXNjcmlwdGlvbi1lbGVwaGFudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGxFbGVwaGFudHN7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiBicm93bjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DescriptionElephantsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-description-elephants',
                templateUrl: './description-elephants.component.html',
                styleUrls: ['./description-elephants.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/elephants/elephants.component.ts":
/*!********************************************************!*\
  !*** ./src/app/comps/elephants/elephants.component.ts ***!
  \********************************************************/
/*! exports provided: ElephantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElephantsComponent", function() { return ElephantsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _description_elephants_description_elephants_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./description-elephants/description-elephants.component */ "./src/app/comps/elephants/description-elephants/description-elephants.component.ts");
/* harmony import */ var _li_elephants_li_elephants_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./li-elephants/li-elephants.component */ "./src/app/comps/elephants/li-elephants/li-elephants.component.ts");
/* harmony import */ var _text_elephants_text_elephants_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-elephants/text-elephants.component */ "./src/app/comps/elephants/text-elephants/text-elephants.component.ts");





class ElephantsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ElephantsComponent.ɵfac = function ElephantsComponent_Factory(t) { return new (t || ElephantsComponent)(); };
ElephantsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ElephantsComponent, selectors: [["app-elephants"]], decls: 4, vars: 0, consts: [[1, "bbb"]], template: function ElephantsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-description-elephants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-li-elephants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-text-elephants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_description_elephants_description_elephants_component__WEBPACK_IMPORTED_MODULE_1__["DescriptionElephantsComponent"], _li_elephants_li_elephants_component__WEBPACK_IMPORTED_MODULE_2__["LiElephantsComponent"], _text_elephants_text_elephants_component__WEBPACK_IMPORTED_MODULE_3__["TextElephantsComponent"]], styles: [".bbb[_ngcontent-%COMP%]{\r\n    background-color: lightgreen;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZWxlcGhhbnRzL2VsZXBoYW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvZWxlcGhhbnRzL2VsZXBoYW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJiYntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElephantsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-elephants',
                templateUrl: './elephants.component.html',
                styleUrls: ['./elephants.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/elephants/li-elephants/li-elephants.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/comps/elephants/li-elephants/li-elephants.component.ts ***!
  \************************************************************************/
/*! exports provided: LiElephantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiElephantsComponent", function() { return LiElephantsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LiElephantsComponent {
    constructor() { }
    ngOnInit() {
    }
}
LiElephantsComponent.ɵfac = function LiElephantsComponent_Factory(t) { return new (t || LiElephantsComponent)(); };
LiElephantsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LiElephantsComponent, selectors: [["app-li-elephants"]], decls: 7, vars: 0, consts: [[1, "all-li"]], template: function LiElephantsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Purple elephant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Green elephant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Blue elephant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".all-li[_ngcontent-%COMP%]{\r\n    color: purple;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZWxlcGhhbnRzL2xpLWVsZXBoYW50cy9saS1lbGVwaGFudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9lbGVwaGFudHMvbGktZWxlcGhhbnRzL2xpLWVsZXBoYW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsbC1saXtcclxuICAgIGNvbG9yOiBwdXJwbGU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiElephantsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-li-elephants',
                templateUrl: './li-elephants.component.html',
                styleUrls: ['./li-elephants.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/elephants/text-elephants/text-elephants.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/comps/elephants/text-elephants/text-elephants.component.ts ***!
  \****************************************************************************/
/*! exports provided: TextElephantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextElephantsComponent", function() { return TextElephantsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TextElephantsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TextElephantsComponent.ɵfac = function TextElephantsComponent_Factory(t) { return new (t || TextElephantsComponent)(); };
TextElephantsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextElephantsComponent, selectors: [["app-text-elephants"]], decls: 2, vars: 0, template: function TextElephantsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "text-elephants works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["p[_ngcontent-%COMP%]{\r\n    color: green;\r\n    text-align: left;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZWxlcGhhbnRzL3RleHQtZWxlcGhhbnRzL3RleHQtZWxlcGhhbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvZWxlcGhhbnRzL3RleHQtZWxlcGhhbnRzL3RleHQtZWxlcGhhbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextElephantsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-text-elephants',
                templateUrl: './text-elephants.component.html',
                styleUrls: ['./text-elephants.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/giraffes/description-giraff/description-giraff.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/comps/giraffes/description-giraff/description-giraff.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DescriptionGiraffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionGiraffComponent", function() { return DescriptionGiraffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DescriptionGiraffComponent {
    constructor() { }
    ngOnInit() {
    }
}
DescriptionGiraffComponent.ɵfac = function DescriptionGiraffComponent_Factory(t) { return new (t || DescriptionGiraffComponent)(); };
DescriptionGiraffComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DescriptionGiraffComponent, selectors: [["app-description-giraff"]], decls: 5, vars: 0, consts: [[1, "allGiraffs"]], template: function DescriptionGiraffComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "giraffes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "description-giraff works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".allGiraffs[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    color: brown;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2lyYWZmZXMvZGVzY3JpcHRpb24tZ2lyYWZmL2Rlc2NyaXB0aW9uLWdpcmFmZi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9naXJhZmZlcy9kZXNjcmlwdGlvbi1naXJhZmYvZGVzY3JpcHRpb24tZ2lyYWZmLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxsR2lyYWZmc3tcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6IGJyb3duO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DescriptionGiraffComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-description-giraff',
                templateUrl: './description-giraff.component.html',
                styleUrls: ['./description-giraff.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/giraffes/giraffes.component.ts":
/*!******************************************************!*\
  !*** ./src/app/comps/giraffes/giraffes.component.ts ***!
  \******************************************************/
/*! exports provided: GiraffesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiraffesComponent", function() { return GiraffesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _description_giraff_description_giraff_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./description-giraff/description-giraff.component */ "./src/app/comps/giraffes/description-giraff/description-giraff.component.ts");
/* harmony import */ var _li_giraff_li_giraff_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./li-giraff/li-giraff.component */ "./src/app/comps/giraffes/li-giraff/li-giraff.component.ts");
/* harmony import */ var _text_giraff_text_giraff_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-giraff/text-giraff.component */ "./src/app/comps/giraffes/text-giraff/text-giraff.component.ts");





class GiraffesComponent {
    constructor() { }
    ngOnInit() {
    }
}
GiraffesComponent.ɵfac = function GiraffesComponent_Factory(t) { return new (t || GiraffesComponent)(); };
GiraffesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GiraffesComponent, selectors: [["app-giraffes"]], decls: 4, vars: 0, consts: [[1, "ccc"]], template: function GiraffesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-description-giraff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-li-giraff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-text-giraff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_description_giraff_description_giraff_component__WEBPACK_IMPORTED_MODULE_1__["DescriptionGiraffComponent"], _li_giraff_li_giraff_component__WEBPACK_IMPORTED_MODULE_2__["LiGiraffComponent"], _text_giraff_text_giraff_component__WEBPACK_IMPORTED_MODULE_3__["TextGiraffComponent"]], styles: [".ccc[_ngcontent-%COMP%]{\r\n    background-color: lightskyblue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2lyYWZmZXMvZ2lyYWZmZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2dpcmFmZmVzL2dpcmFmZmVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Nje1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GiraffesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-giraffes',
                templateUrl: './giraffes.component.html',
                styleUrls: ['./giraffes.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/giraffes/li-giraff/li-giraff.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/comps/giraffes/li-giraff/li-giraff.component.ts ***!
  \*****************************************************************/
/*! exports provided: LiGiraffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiGiraffComponent", function() { return LiGiraffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LiGiraffComponent {
    constructor() { }
    ngOnInit() {
    }
}
LiGiraffComponent.ɵfac = function LiGiraffComponent_Factory(t) { return new (t || LiGiraffComponent)(); };
LiGiraffComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LiGiraffComponent, selectors: [["app-li-giraff"]], decls: 7, vars: 0, consts: [[1, "all-li"]], template: function LiGiraffComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Purple scab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " green scab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Blue scab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".all-li[_ngcontent-%COMP%]{\r\n    color: purple;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2lyYWZmZXMvbGktZ2lyYWZmL2xpLWdpcmFmZi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2dpcmFmZmVzL2xpLWdpcmFmZi9saS1naXJhZmYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGwtbGl7XHJcbiAgICBjb2xvcjogcHVycGxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiGiraffComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-li-giraff',
                templateUrl: './li-giraff.component.html',
                styleUrls: ['./li-giraff.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/giraffes/text-giraff/text-giraff.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/comps/giraffes/text-giraff/text-giraff.component.ts ***!
  \*********************************************************************/
/*! exports provided: TextGiraffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextGiraffComponent", function() { return TextGiraffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TextGiraffComponent {
    constructor() { }
    ngOnInit() {
    }
}
TextGiraffComponent.ɵfac = function TextGiraffComponent_Factory(t) { return new (t || TextGiraffComponent)(); };
TextGiraffComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextGiraffComponent, selectors: [["app-text-giraff"]], decls: 2, vars: 0, template: function TextGiraffComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "text-giraff works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["p[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    color: green;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2lyYWZmZXMvdGV4dC1naXJhZmYvdGV4dC1naXJhZmYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvZ2lyYWZmZXMvdGV4dC1naXJhZmYvdGV4dC1naXJhZmYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextGiraffComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-text-giraff',
                templateUrl: './text-giraff.component.html',
                styleUrls: ['./text-giraff.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\Shmulik Shotland\Desktop\angular\animals\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map