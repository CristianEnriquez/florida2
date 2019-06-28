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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <img width=\"100%\" height=\"500px\" alt=\"Angular Logo\" src=\"../assets/imagenes/titulo.jpg\">\n\n</div>\n\n\n\n<div  align=\"center\" *ngIf=\"mostrarRama == false\">  \n    <app-rama1></app-rama1>\n    </div>\n\n<div  align=\"center\" *ngIf=\"mostrarRama == true\">  \n    \n<div class=\"grid-container\">\n  <div class=\"grid-item\"></div>\n  <div class=\"grid-item\"></div>\n  <div class=\"grid-item\" align=\"left\">\n      <strong><i><font face=\"Arial,Verdana\" size=5&gt; color=\"Green\" (click)=\"sera()\">Epiphytes of Las Cuevas Research Station, Cayo District, Belize</font></i></strong><br><br>\n     \n      \n      \n      <strong><i><font face=\"Arial,Verdana\" size=5&gt; color=\"Green\" (click)=\"sera()\">Epiphytes and Lithophytes of Outlier Cockscomb Range, Stann Creek District, Belize</font></i></strong><br><br>\n      <strong><i><font face=\"Arial,Verdana\" size=5&gt; color=\"Green\" (click)=\"sera()\">Epiphytes of The Belize Zoo Tropical Education Center</font></i></strong><br><br>\n      <strong><i><font face=\"Arial,Verdana\" size=5&gt; color=\"Green\" (click)=\"sera()\">Epiphytes/Lithophytes of Xunantunich Archaeological Reserve, Cayo District, Belize</font></i></strong><br><br>\n      <strong><i><font face=\"Arial,Verdana\" size=5&gt; color=\"Green\" (click)=\"sera()\">Epiphytes/Lithophytes of Mayflower Bocawina NP, Belize</font></i></strong><br><br>\n      <strong><i><font face=\"Arial,Verdana\" size=5&gt; color=\"Green\" (click)=\"sera()\">Epiphytic Fern Genera of Belize</font></i></strong><br><br>\n      <strong><i><font face=\"Arial,Verdana\" size=5&gt; color=\"Green\" (click)=\"sera()\">Epiphytic Plants of Bacalar Chico National Park, Corozal District, Belize</font></i></strong><br><br>\n      <strong><i><font face=\"Arial,Verdana\" size=5&gt; color=\"Green\" (click)=\"sera()\">Tillandsia of Belize</font></i></strong><br><br>\n    </div>\n  <div class=\"grid-item\"></div>\n\n</div>\n</div>\n<img width=\"100%\" height=\"500px\" alt=\"Angular Logo\" src=\"../assets/imagenes/fin1.png\">\n<img width=\"100%\" height=\"180px\" alt=\"Angular Logo\" src=\"../assets/imagenes/fin2.png\">\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/rama1/rama1.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/rama1/rama1.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  align=\"center\" >  \n<div class=\"contenedor\" align=\"center\">  \n      \n     <br>     \n      \n      <strong><font face=\"Arial,Verdana\" size=6&gt; color=\"Black\" (click)=\"sera()\">Epiphytes of Las Cuevas Research Station, Cayo District, BELIZE</font></strong><br><br>\n      <h3>Bruce K. Holst, Sally Chambers, Antone Jones, David Amaya, Ella Baron, Marvin Paredes, Sayuri Tzul</h3>\n      <br>\n      \n        </div>\n<br>\n<div align=\"center\">  \n<button type=\"button\" class=\"btn btn-success\" (click)=\"sendMessage()\">\n        <strong><i><font face=\"Arial,Verdana\" size=5&gt; color=\"White\" (click)=\"sera()\">Flower and seed-bearing Plants</font></i></strong><br><br>\n        \n    </button>\n\n<br>\n<br>\n<button type=\"button\" class=\"btn btn-success\" (click)=\"sendMessage()\">\n        <strong><i><font face=\"Arial,Verdana\" size=5&gt; color=\"White\" (click)=\"sera()\">Spore-bearing Plants</font></i></strong><br><br>\n        \n    </button>\n    \n</div>\n<br>\n</div>\n\n\n<div class=\"grid-container\" >\n        <div class=\"grid-item\"><img width=\"95%\" height=\"95%\" alt=\"Angular Logo\" src=\"../../../assets/imagenes/dos/1.png\"></div>\n        <div class=\"grid-item\"><img width=\"95%\" height=\"95%\" alt=\"Angular Logo\" src=\"../../../assets/imagenes/dos/2.png\"></div>\n        <div class=\"grid-item\"><img width=\"95%\" height=\"95%\" alt=\"Angular Logo\" src=\"../../../assets/imagenes/dos/3.png\"></div>  \n        <div class=\"grid-item\"><img width=\"95%\" height=\"95%\" alt=\"Angular Logo\" src=\"../../../assets/imagenes/dos/4.png\"></div>\n        <div class=\"grid-item\"><img width=\"95%\" height=\"95%\" alt=\"Angular Logo\" src=\"../../../assets/imagenes/dos/5.png\"></div>\n        <div class=\"grid-item\"><img width=\"95%\" height=\"95%\" alt=\"Angular Logo\" src=\"../../../assets/imagenes/dos/6.png\"></div>  \n      \n      </div>\n      <br>\n      <br>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\r\n    display: grid;\r\n    grid-template-columns: auto auto auto auto;\r\n    padding: 10px;\r\n  }\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'florida';
        this.mostrarRama = true;
    }
    AppComponent.prototype.sera = function () {
        if (this.mostrarRama == false) {
            this.mostrarRama = true;
        }
        else {
            this.mostrarRama = false;
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componentes_rama1_rama1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/rama1/rama1.component */ "./src/app/componentes/rama1/rama1.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _componentes_rama1_rama1_component__WEBPACK_IMPORTED_MODULE_4__["Rama1Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/componentes/rama1/rama1.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componentes/rama1/rama1.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenedor {\r\n    width: 95%;\r\n  \r\n    border-top: black 2px solid;\r\n    border-right: black 2px solid;\r\n    border-bottom: black 2px solid;\r\n    border-left: black 2px solid;\r\n    justify-content: center;\r\n  }\r\n\r\n  .grid-container {\r\n    width: 80%;\r\n    display: grid;\r\n    grid-template-columns: auto auto;\r\n    background-color: rgb(126, 240, 122);\r\n    padding: 10px;\r\n  }\r\n\r\n  .grid-item {\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n    border: 1px solid rgba(0, 0, 0, 0.8);\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    text-align: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcmFtYTEvcmFtYTEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7O0lBRVYsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLG9DQUFvQztJQUNwQyxhQUFhO0VBQ2Y7O0VBQ0E7SUFDRSwwQ0FBMEM7SUFDMUMsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvcmFtYTEvcmFtYTEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5lZG9yIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgXHJcbiAgICBib3JkZXItdG9wOiBibGFjayAycHggc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IGJsYWNrIDJweCBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b206IGJsYWNrIDJweCBzb2xpZDtcclxuICAgIGJvcmRlci1sZWZ0OiBibGFjayAycHggc29saWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNiwgMjQwLCAxMjIpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgLmdyaWQtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/componentes/rama1/rama1.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/rama1/rama1.component.ts ***!
  \******************************************************/
/*! exports provided: Rama1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rama1Component", function() { return Rama1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Rama1Component = /** @class */ (function () {
    function Rama1Component() {
    }
    Rama1Component.prototype.ngOnInit = function () {
    };
    Rama1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rama1',
            template: __webpack_require__(/*! raw-loader!./rama1.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/rama1/rama1.component.html"),
            styles: [__webpack_require__(/*! ./rama1.component.css */ "./src/app/componentes/rama1/rama1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Rama1Component);
    return Rama1Component;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Cristian\Documents\PROYECTOS\florida\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map