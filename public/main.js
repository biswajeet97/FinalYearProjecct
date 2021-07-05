(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\biswa\Desktop\project\app\src\main.ts */"zUnb");


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _service_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api-service.service */ "5P4U");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









class RegisterComponent {
    constructor(fb, api) {
        this.fb = fb;
        this.api = api;
        this.newUser = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    onSubmit() {
        if (this.newUser.valid) {
            if (this.newUser.value.password1 == this.newUser.value.password2) {
                this.api.registerUser({ username: this.newUser.value.username, password: this.newUser.value.password1 }).subscribe((data) => {
                    console.log(data);
                });
            }
            else {
                console.log('error');
            }
        }
    }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 23, vars: 1, consts: [[1, "back"], [1, "register"], [3, "formGroup", "ngSubmit"], [1, "feild"], ["matInput", "", "placeholder", "", "formControlName", "username"], ["type", "password", "matInput", "", "placeholder", "", "formControlName", "password1"], ["type", "password", "matInput", "", "placeholder", "", "formControlName", "password2"], ["mat-button", "", "type", "submit", 1, "submit"], ["mat-button", "", 1, "login"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Create Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Retype Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "All ready have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Login Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newUser);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: [".back[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 550px;\n  background-color: #495288;\n}\n\n.register[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  top: 40px;\n  left: 55%;\n  background-color: #F1F1F1;\n  border-radius: 0px;\n  height: 440px;\n  width: 40%;\n  color: #131D47;\n}\n\n.register[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-left: 50px;\n  font: 3.5em sans-serif;\n}\n\n.register[_ngcontent-%COMP%]   .feild[_ngcontent-%COMP%] {\n  display: block;\n  width: 80%;\n  margin-top: 10px;\n  position: relative;\n  left: 50px;\n}\n\n.register[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: block;\n  background-color: #495288;\n  color: #F1F1F1;\n  position: relative;\n  left: 50px;\n  width: 80%;\n}\n\n.register[_ngcontent-%COMP%]   .forget[_ngcontent-%COMP%] {\n  margin-top: -15px;\n  display: block;\n  color: #131D47;\n  position: relative;\n  left: 64%;\n}\n\n.register[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #495288;\n  position: relative;\n  left: 9%;\n}\n\n.register[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  left: 38%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlZ2lzdGVyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBUFE7QUFJWjs7QUFLQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQVpPO0VBYVAsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGNBbkJRO0FBaUJaOztBQUlJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBRlI7O0FBSUk7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRlI7O0FBR0k7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFsQ0k7RUFtQ0osY0FqQ0c7RUFrQ0gsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQURSOztBQUdJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0E1Q0k7RUE2Q0osa0JBQUE7RUFDQSxTQUFBO0FBRFI7O0FBR0k7RUFDSSxxQkFBQTtFQUNBLGNBakRJO0VBa0RKLGtCQUFBO0VBQ0EsUUFBQTtBQURSOztBQUdJO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFEUiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5MSA6ICMxMzFENDdcclxuJHByaW1hcnkyIDogIzQ5NTI4OFxyXG4kYWNjZW50MSA6ICM5QUVDRURcclxuJGFjY2VudDIgOiAjRjFGMUYxXHJcbi5iYWNrXHJcbiAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgd2lkdGg6IDEwMCVcclxuICAgIGhlaWdodDogNTUwcHhcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5MlxyXG5cclxuLnJlZ2lzdGVyXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgdG9wOiA0MHB4XHJcbiAgICBsZWZ0OiA1NSVcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQyXHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHhcclxuICAgIGhlaWdodDogNDQwcHhcclxuICAgIHdpZHRoOiA0MCVcclxuICAgIGNvbG9yOiAkcHJpbWFyeTFcclxuXHJcbiAgICBoMVxyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4IFxyXG4gICAgICAgIGZvbnQ6IDMuNWVtIHNhbnMtc2VyaWYgXHJcblxyXG4gICAgLmZlaWxkXHJcbiAgICAgICAgZGlzcGxheTogYmxvY2tcclxuICAgICAgICB3aWR0aDogODAlXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgICAgIGxlZnQ6IDUwcHhcclxuICAgIC5zdWJtaXRcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2tcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTJcclxuICAgICAgICBjb2xvcjogJGFjY2VudDJcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgICAgICBsZWZ0OiA1MHB4XHJcbiAgICAgICAgd2lkdGg6IDgwJVxyXG5cclxuICAgIC5mb3JnZXRcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTVweFxyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5MVxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgICAgIGxlZnQ6IDY0JVxyXG5cclxuICAgIGg0XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5MlxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgICAgIGxlZnQ6IDklXHJcblxyXG4gICAgLmxvZ2luXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgICAgbGVmdDogMzglIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.sass']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _service_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"] }]; }, null); })();


/***/ }),

/***/ "5P4U":
/*!************************************************!*\
  !*** ./src/app/service/api-service.service.ts ***!
  \************************************************/
/*! exports provided: ApiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServiceService", function() { return ApiServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ApiServiceService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
    }
    registerUser(data) {
        return this.http.post(`api/register`, data);
    }
    loginUser(data) {
        return this.http.post(`api/login`, data);
    }
    showFriends(data) {
        return this.http.post(`api/friends`, data);
    }
    addFriends(data) {
        return this.http.post(`api/acceptInvite`, data);
    }
    findFriends(data) {
        return this.http.post(`api/findFriend`, data);
    }
    getUser() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
        return this.http.get(`profile`, { headers: headers });
    }
}
ApiServiceService.ɵfac = function ApiServiceService_Factory(t) { return new (t || ApiServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiServiceService, factory: ApiServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 5, vars: 0, consts: [[1, "about"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Fabiano Caruana was in a bit of a hurry. The top-rated American chess player and No. 2 player in the world wanted to dispose of India\u2019s Vidit Gujrathi as quickly as possible. He had to go to the bathroom. Caruana was unable to take a momentary pause from the game, utilize the restroom and then return to action because he had to be in front of his computer at all times as per the anti-cheating rules of the FIDE Chess.com Online Nations Cup, which also included an arbiter and proctor assigned to monitor each player and multiple cameras showing every angle, including screens, at all times. During in-person events, participants are able to walk around, use the restroom or compose themselves. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about[_ngcontent-%COMP%] {\n  margin-top: -22px;\n  background-color: #131D47;\n}\n\nh1[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  text-align: center;\n  font-family: sans-serif;\n  color: #F1F1F1;\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: -5px;\n  color: #F1F1F1;\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center;\n  padding-left: 20%;\n  padding-right: 20%;\n  padding-bottom: 50px;\n  text-justify: inter-word;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFib3V0LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksaUJBQUE7RUFDQSx5QkFSUTtBQUdaOztBQU9BO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FYTztBQU9YOztBQU1BO0VBQ0ksZ0JBQUE7RUFDQSxjQWZPO0VBZ0JQLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBSEoiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeTEgOiAjMTMxRDQ3XHJcbiRwcmltYXJ5MiA6ICM0OTUyODhcclxuJGFjY2VudDEgOiAjOUFFQ0VEXHJcbiRhY2NlbnQyIDogI0YxRjFGMVxyXG4gICAgXHJcblxyXG4uYWJvdXRcclxuICAgIG1hcmdpbi10b3A6IC0yMnB4XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTFcclxuICAgIFxyXG5oMVxyXG4gICAgcGFkZGluZy10b3A6IDUwcHhcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWZcclxuICAgIGNvbG9yOiAkYWNjZW50MiBcclxuXHJcbnAgICBcclxuICAgIG1hcmdpbi10b3A6IC01cHhcclxuICAgIGNvbG9yOiAkYWNjZW50MlxyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgcGFkZGluZy1sZWZ0OiAyMCVcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwJVxyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHhcclxuICAgIHRleHQtanVzdGlmeTogaW50ZXItd29yZFxyXG4gICAgbGluZS1oZWlnaHQ6IDEuNSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9a6t":
/*!***********************************************!*\
  !*** ./src/app/service/game-board.service.ts ***!
  \***********************************************/
/*! exports provided: BoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardService", function() { return BoardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_defs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/defs.service */ "H736");



class BoardService {
    constructor(def) {
        this.def = def;
        this.side = this.def.colour.WHITE;
        this.piece = new Array(this.def.BigBrdSq);
        this.enPas = this.def.squares.NO_SQ;
        this.pceNo = new Array(13);
        this.matNo = new Array(2);
        this.pList = new Array(14 * 10);
        this.moveListStart = new Array(this.def.MaxDepth);
        this.moveList = [];
        this.moveScore = new Array(this.def.MaxDepth * this.def.MaxPosMoves);
        this.history = [];
    }
    ResetBoard() {
        var index = 0;
        for (index = 0; index < this.def.BigBrdSq; ++index) {
            this.piece[index] = this.def.squares.OFFBOARD;
        }
        for (index = 0; index < 64; ++index) {
            this.piece[this.def.SQ120(index)] = this.def.piece.EMPTY;
        }
        for (index = 0; index < 14 * 120; ++index) {
            this.pList[index] = this.def.piece.EMPTY;
        }
        for (index = 0; index < 2; ++index) {
            this.matNo[index] = 0;
        }
        for (index = 0; index < 13; ++index) {
            this.pceNo[index] = 0;
        }
        this.side = this.def.colour.NONE;
        this.enPas = this.def.squares.NO_SQ;
        this.fiftyMov = 0;
        this.ply = 0;
        this.hisPly = 0;
        this.casParm = 0;
        this.posKey = 0;
        this.moveListStart[this.ply] = 0;
    }
    GeneratePosKey() {
        var sq = 0;
        var finalKey = 0;
        var piece = this.def.piece.EMPTY;
        // pieces
        for (sq = 0; sq < this.def.BigBrdSq; ++sq) {
            piece = this.piece[sq];
            if (piece != this.def.piece.EMPTY && piece != this.def.squares.OFFBOARD) {
                finalKey ^= this.def.PieceKeys[(piece * 120) + sq];
            }
        }
        if (this.side == this.def.colour.WHITE) {
            finalKey ^= this.def.SideKey;
        }
        if (this.enPas != this.def.squares.NO_SQ) {
            finalKey ^= this.def.PieceKeys[this.enPas];
        }
        finalKey ^= this.def.CastleKeys[this.casParm];
        return finalKey;
    }
    UpdateListsMaterial() {
        var piece, sq, index, colour;
        for (index = 0; index < this.def.BigBrdSq; ++index) {
            sq = index;
            piece = this.piece[index];
            if (piece != this.def.squares.OFFBOARD && piece != this.def.piece.EMPTY) {
                colour = this.def.pceCol[piece];
                this.matNo[colour] += this.def.pceVal[piece];
                this.pList[this.def.PCEINDEX(piece, this.pceNo[piece])] = sq;
                this.pceNo[piece]++;
            }
        }
    }
    ParseFen(fen) {
        var rank = this.def.rank.RANK_8;
        var file = this.def.file.FILE_A;
        var piece = 0;
        var count = 0;
        var i = 0;
        var sq64 = 0;
        var sq120 = 0;
        var fenCnt = 0;
        this.ResetBoard();
        while ((rank >= this.def.rank.RANK_1) && fenCnt < fen.length) {
            count = 1;
            switch (fen[fenCnt]) {
                case 'p':
                    piece = this.def.piece.bP;
                    break;
                case 'r':
                    piece = this.def.piece.bR;
                    break;
                case 'n':
                    piece = this.def.piece.bN;
                    break;
                case 'b':
                    piece = this.def.piece.bB;
                    break;
                case 'k':
                    piece = this.def.piece.bK;
                    break;
                case 'q':
                    piece = this.def.piece.bQ;
                    break;
                case 'P':
                    piece = this.def.piece.wP;
                    break;
                case 'R':
                    piece = this.def.piece.wR;
                    break;
                case 'N':
                    piece = this.def.piece.wN;
                    break;
                case 'B':
                    piece = this.def.piece.wB;
                    break;
                case 'K':
                    piece = this.def.piece.wK;
                    break;
                case 'Q':
                    piece = this.def.piece.wQ;
                    break;
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                    piece = this.def.piece.EMPTY;
                    count = fen.charCodeAt(fenCnt) - '0'.charCodeAt(0);
                    break;
                case '/':
                case ' ':
                    rank--;
                    file = this.def.file.FILE_A;
                    fenCnt++;
                    continue;
                default:
                    console.log("FEN error \n");
                    return;
            }
            for (i = 0; i < count; i++) {
                sq64 = rank * 8 + file;
                sq120 = this.def.SQ120(sq64);
                if (piece != this.def.piece.EMPTY) {
                    this.piece[sq120] = piece;
                }
                file++;
            }
            fenCnt++;
        }
        this.side = (fen[fenCnt] == 'w') ? this.def.colour.WHITE : this.def.colour.BLACK;
        fenCnt += 2;
        for (i = 0; i < 4; i++) {
            if (fen[fenCnt] == ' ') {
                break;
            }
            switch (fen[fenCnt]) {
                case 'K':
                    this.casParm |= this.def.casBit.WKCA;
                    break;
                case 'Q':
                    this.casParm |= this.def.casBit.WQCA;
                    break;
                case 'k':
                    this.casParm |= this.def.casBit.BKCA;
                    break;
                case 'q':
                    this.casParm |= this.def.casBit.BQCA;
                    break;
                default: break;
            }
            fenCnt++;
        }
        fenCnt++;
        if (fen[fenCnt] != '-') {
            file = fen.charCodeAt(fenCnt) - 'a'.charCodeAt(0);
            rank = fen.charCodeAt(fenCnt + 1) - '1'.charCodeAt(0);
            console.log("fen[fenCnt]:" + fen[fenCnt] + " File:" + file + " Rank:" + rank);
            this.enPas = this.def.FR2SQ(file, rank);
        }
        this.posKey = this.GeneratePosKey();
        this.UpdateListsMaterial();
    }
    CheckBoard() {
        var t_pceNum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var t_material = [0, 0];
        var sq64, t_piece, t_pce_num, sq120;
        // check piece lists
        for (t_piece = this.def.piece.wP; t_piece <= this.def.piece.bK; ++t_piece) {
            for (t_pce_num = 0; t_pce_num < this.pceNo[t_piece]; ++t_pce_num) {
                sq120 = this.pList[this.def.PCEINDEX(t_piece, t_pce_num)];
                if (this.piece[sq120] != t_piece) {
                    console.log('Error Pce Lists');
                    return this.def.BOOL.FALSE;
                }
            }
        }
        // check piece count and other counters	
        for (sq64 = 0; sq64 < 64; ++sq64) {
            sq120 = this.def.SQ120(sq64);
            t_piece = this.piece[sq120];
            t_pceNum[t_piece]++;
            t_material[this.def.pceCol[t_piece]] += this.def.pceVal[t_piece];
        }
        for (t_piece = this.def.piece.wP; t_piece <= this.def.piece.bK; ++t_piece) {
            if (t_pceNum[t_piece] != this.pceNo[t_piece]) {
                console.log('Error t_pceNum');
                return this.def.BOOL.FALSE;
            }
        }
        if (t_material[this.def.colour.WHITE] != this.matNo[this.def.colour.WHITE] || t_material[this.def.colour.BLACK] != this.matNo[this.def.colour.BLACK]) {
            console.log('Error t_material');
            return this.def.BOOL.FALSE;
        }
        if (this.side != this.def.colour.WHITE && this.side != this.def.colour.BLACK) {
            console.log('Error this.side');
            return this.def.BOOL.FALSE;
        }
        if (this.GeneratePosKey() != this.posKey) {
            console.log('Ethis.def.rror this.posKey');
            return this.def.BOOL.FALSE;
        }
        return this.def.BOOL.TRUE;
    }
    PrintBoard() {
        var sq, file, rank, piece;
        console.log("\nGame Board:\n");
        for (rank = this.def.rank.RANK_8; rank >= this.def.rank.RANK_1; rank--) {
            var line = ((rank + 1) + "  ");
            for (file = this.def.file.FILE_A; file <= this.def.file.FILE_H; file++) {
                sq = this.def.FR2SQ(file, rank);
                piece = this.piece[sq];
                line += (" " + this.def.PceChar[piece] + " ");
            }
            console.log(line);
        }
        console.log("");
        var line = "   ";
        for (file = this.def.file.FILE_A; file <= this.def.file.FILE_H; file++) {
            line += (' ' + String.fromCharCode('a'.charCodeAt(0) + file) + ' ');
        }
        console.log(line);
        console.log("side:" + this.def.SideChar[this.side]);
        console.log("enPas:" + this.enPas);
        line = "";
        if (this.casParm & this.def.casBit.WKCA)
            line += 'K';
        if (this.casParm & this.def.casBit.WQCA)
            line += 'Q';
        if (this.casParm & this.def.casBit.BKCA)
            line += 'k';
        if (this.casParm & this.def.casBit.BQCA)
            line += 'q';
        console.log("castle:" + line);
        console.log("key:" + this.posKey.toString(16));
    }
    SqAttacked(sq, side) {
        var pce;
        var t_sq;
        var index;
        var dir;
        // check if there is a pawn attacking a sq
        if (side == this.def.colour.WHITE) {
            if (this.piece[sq - 11] == this.def.piece.wP || this.piece[sq - 9] == this.def.piece.wP) {
                return this.def.BOOL.TRUE;
            }
        }
        else {
            if (this.piece[sq + 11] == this.def.piece.bP || this.piece[sq + 9] == this.def.piece.bP) {
                return this.def.BOOL.TRUE;
            }
        }
        // check if the knight is attacking a sq
        for (index = 0; index < 8; ++index) {
            pce = this.piece[sq + this.def.KnDir[index]];
            if (pce != this.def.squares.OFFBOARD && this.def.PieceKnight[pce] == this.def.BOOL.TRUE && this.def.pceCol[pce] == side) {
                return this.def.BOOL.TRUE;
            }
        }
        // check if a rook or queen is attacking a sq
        for (index = 0; index < 4; ++index) {
            dir = this.def.RkDir[index];
            t_sq = sq + dir;
            pce = this.piece[t_sq];
            while (pce != this.def.squares.OFFBOARD) {
                if (pce != this.def.piece.EMPTY) {
                    if (this.def.PieceRookQueen[pce] == this.def.BOOL.TRUE && this.def.pceCol[pce] == side) {
                        return this.def.BOOL.TRUE;
                    }
                    break;
                }
                t_sq += dir;
                pce = this.piece[t_sq];
            }
        }
        // check if a bishop or queen is attacking a sq
        for (index = 0; index < 4; ++index) {
            dir = this.def.BiDir[index];
            t_sq = sq + dir;
            pce = this.piece[t_sq];
            while (pce != this.piece.OFFBOARD) {
                if (pce != this.def.piece.EMPTY) {
                    if (this.def.PieceBishopQueen[pce] == this.def.BOOL.TRUE && this.def.pceCol[pce] == side) {
                        return this.def.BOOL.TRUE;
                    }
                    break;
                }
                t_sq += dir;
                pce = this.piece[t_sq];
            }
        }
        // check if the king is attacking a sq
        for (index = 0; index < 8; ++index) {
            pce = this.piece[sq + this.def.KiDir[index]];
            if (pce != this.def.squares.OFFBOARD && this.def.PieceKing[pce] == this.def.BOOL.TRUE && this.def.pceCol[pce] == side) {
                return this.def.BOOL.TRUE;
            }
        }
        return this.def.BOOL.FALSE;
    }
    // this prints the board for all attack
    PrintSqAttacked() {
        var sq, file, rank, piece;
        console.log("\nAttacked:\n");
        for (rank = this.def.rank.RANK_8; rank >= this.def.rank.RANK_1; rank--) {
            var line = ((rank + 1) + "  ");
            for (file = this.def.file.FILE_A; file <= this.def.file.FILE_H; file++) {
                sq = this.def.FR2SQ(file, rank);
                if (this.SqAttacked(sq, this.def.colour.BLACK) == this.def.BOOL.TRUE)
                    piece = "X";
                else
                    piece = "-";
                line += (" " + piece + " ");
            }
            console.log(line);
        }
        console.log("");
    }
    // print all moves in a ply
    PrMove(move) {
        var MvStr;
        var ff = this.def.FilesBrd[this.def.FROMSQ(move)];
        var rf = this.def.RanksBrd[this.def.FROMSQ(move)];
        var ft = this.def.FilesBrd[this.def.TOSQ(move)];
        var rt = this.def.RanksBrd[this.def.TOSQ(move)];
        MvStr = this.def.FileChar[ff] + this.def.RankChar[rf] + this.def.FileChar[ft] + this.def.RankChar[rt];
        var promoted = this.def.PROMOTED(move);
        if (promoted != this.def.piece.EMPTY) {
            var pchar = 'q';
            if (this.def.PieceKnight[promoted] == this.def.BOOL.TRUE) {
                pchar = 'n';
            }
            else if (this.def.PieceRookQueen[promoted] == this.def.BOOL.TRUE && this.def.PieceBishopQueen[promoted] == this.def.BOOL.FALSE) {
                pchar = 'r';
            }
            else if (this.def.PieceRookQueen[promoted] == this.def.BOOL.FALSE && this.def.PieceBishopQueen[promoted] == this.def.BOOL.TRUE) {
                pchar = 'b';
            }
            MvStr += pchar;
        }
        return MvStr;
    }
    PrintMoveList() {
        var index;
        var move;
        console.log(this.moveListStart[this.ply + 1]);
        for (index = this.moveListStart[this.ply]; index < this.moveListStart[this.ply + 1]; ++index) {
            move = this.moveList[index];
            console.log("Move:" + (index + 1) + " > " + this.PrMove(move));
        }
    }
    // hash moves functions
    HASH_PCE(pce, sq) {
        this.posKey ^= this.def.PieceKeys[pce * 120 + sq];
    }
    HASH_CA() { this.posKey ^= this.def.CastleKeys[this.casParm]; }
    HASH_SIDE() { this.posKey ^= this.def.SideKey; }
    HASH_EP() { this.posKey ^= this.def.PieceKeys[this.enPas]; }
}
BoardService.ɵfac = function BoardService_Factory(t) { return new (t || BoardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_defs_service__WEBPACK_IMPORTED_MODULE_1__["DefService"])); };
BoardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BoardService, factory: BoardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _service_defs_service__WEBPACK_IMPORTED_MODULE_1__["DefService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "FAyI":
/*!********************************************!*\
  !*** ./src/app/guard/auth-cancel.guard.ts ***!
  \********************************************/
/*! exports provided: AuthCancelGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthCancelGuard", function() { return AuthCancelGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthCancelGuard {
    canActivate(route, state) {
        return true;
    }
}
AuthCancelGuard.ɵfac = function AuthCancelGuard_Factory(t) { return new (t || AuthCancelGuard)(); };
AuthCancelGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthCancelGuard, factory: AuthCancelGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthCancelGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "H736":
/*!*****************************************!*\
  !*** ./src/app/service/defs.service.ts ***!
  \*****************************************/
/*! exports provided: DefService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefService", function() { return DefService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DefService {
    constructor() {
        // this is the representation no of each piece 
        this.piece = { EMPTY: 0, wP: 1, wN: 2, wB: 3, wR: 4, wQ: 5, wK: 6, bP: 7, bN: 8, bB: 9, bR: 10, bQ: 11, bK: 12 };
        // bigger brd
        this.BigBrdSq = 120;
        this.MaxGameMoves = 2048;
        this.MaxPosMoves = 256;
        this.MaxDepth = 64;
        this.Infinite = 30000;
        this.Mate = 29000;
        // starting pos of game
        this.StartFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
        this.casBit = { WKCA: 1, WQCA: 2, BKCA: 4, BQCA: 8 };
        this.file = { FILE_A: 0, FILE_B: 1, FILE_C: 2, FILE_D: 3, FILE_E: 4, FILE_F: 5, FILE_G: 6, FILE_H: 7, FILE_NONE: 8 };
        this.rank = { RANK_1: 0, RANK_2: 1, RANK_3: 2, RANK_4: 3, RANK_5: 4, RANK_6: 5, RANK_7: 6, RANK_8: 7, RANK_NONE: 8 };
        this.colour = { WHITE: 0, BLACK: 1, NONE: 2 };
        // important sq
        this.squares = {
            A1: 21, B1: 22, C1: 23, D1: 24, E1: 25, F1: 26, G1: 27, H1: 28,
            A8: 91, B8: 92, C8: 93, D8: 94, E8: 95, F8: 96, G8: 97, H8: 98, NO_SQ: 99, OFFBOARD: 100
        };
        this.BOOL = { FALSE: 0, TRUE: 1 };
        // where is the piece
        this.PiecePawn = [this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE];
        this.PieceKnight = [this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE];
        this.PieceKing = [this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE];
        this.PieceRookQueen = [this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.FALSE];
        this.PieceBishopQueen = [this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE];
        this.PieceSlides = [this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.FALSE];
        // diection of all pieces
        this.KnDir = [-8, -19, -21, -12, 8, 19, 21, 12];
        this.RkDir = [-1, -10, 1, 10];
        this.BiDir = [-9, -11, 11, 9];
        this.KiDir = [-1, -10, 1, 10, -9, -11, 11, 9];
        this.PceDir = [0, 0, this.KnDir, this.BiDir, this.RkDir, this.KiDir, this.KiDir, 0, this.KnDir, this.BiDir, this.RkDir, this.KiDir, this.KiDir];
        this.DirNum = [0, 0, 8, 4, 4, 8, 8, 0, 8, 4, 4, 8, 8];
        this.LoopSlidePce = [this.piece.wB, this.piece.wR, this.piece.wQ, 0, this.piece.bB, this.piece.bR, this.piece.bQ, 0];
        this.LoopNonSlidePce = [this.piece.wN, this.piece.wK, 0, this.piece.bN, this.piece.bK, 0];
        this.LoopSlideIndex = [0, 4];
        this.LoopNonSlideIndex = [0, 3];
        this.Kings = [this.piece.wK, this.piece.bK];
        this.CastlePerm = [
            15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
            15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
            15, 13, 15, 15, 15, 12, 15, 15, 14, 15,
            15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
            15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
            15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
            15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
            15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
            15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
            15, 7, 15, 15, 15, 3, 15, 15, 11, 15,
            15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
            15, 15, 15, 15, 15, 15, 15, 15, 15, 15
        ];
        // piece property
        this.pceVal = [0, 100, 325, 325, 550, 1000, 50000, 100, 325, 325, 550, 1000, 50000];
        this.pceCol = [this.colour.NONE, this.colour.WHITE, this.colour.WHITE, this.colour.WHITE, this.colour.WHITE, this.colour.WHITE, this.colour.WHITE,
            this.colour.BLACK, this.colour.BLACK, this.colour.BLACK, this.colour.BLACK, this.colour.BLACK, this.colour.BLACK];
        // diff size boards 
        this.Sq120ToSq64 = new Array(this.BigBrdSq);
        this.Sq64ToSq120 = new Array(64);
        // fileBrd and rankBrd
        this.FilesBrd = new Array(this.BigBrdSq);
        this.RanksBrd = new Array(this.BigBrdSq);
        // char rep of piece and square
        this.PceChar = ".PNBRQKpnbrqk";
        this.SideChar = "wb-";
        this.RankChar = "12345678";
        this.FileChar = "abcdefgh";
        // enPas flag
        this.MFLAGEP = 0x40000;
        // pceStart flag
        this.MFLAGPS = 0x80000;
        // Castel flag
        this.MFLAGCA = 0x100000;
        // Capture flag 
        this.MFLAGCAP = 0x7C000;
        // Promote flag
        this.MFLAGPROM = 0xF00000;
        this.NOMOVE = 0;
        // hash keys
        this.PieceKeys = new Array(14 * 120);
        this.SideKey = 0;
        this.CastleKeys = new Array(16);
    }
    /*
      From
      To
      EnPas
      Promoted Sq
      Pawn Start
      Castel Move
    */
    /*
      Siigned Int
      0000 0000 0000 0000 0000 0111 1111 -> From 0x7F
      0000 0000 0000 0011 1111 1000 0000 -> To >> 7, 0x7F
      0000 0000 0011 1100 0000 0000 0000 -> Captured >> 14, 0xF
      0000 0000 0100 0000 0000 0000 0000 -> EP 0x40000
      0000 0000 1000 0000 0000 0000 0000 -> Pawn Start 0x80000
      0000 1111 0000 0000 0000 0000 0000 -> Promoted Piece >> 20, 0xF
      0001 0000 0000 0000 0000 0000 0000 -> Castle 0x1000000
    */
    // bit wise operation to gen all info for move gen
    FROMSQ(m) { return (m & 0x7F); }
    TOSQ(m) { return (((m) >> 7) & 0x7F); }
    CAPTURED(m) { return (((m) >> 14) & 0xF); }
    PROMOTED(m) { return (((m) >> 20) & 0xF); }
    // gen of random number of 32 bits
    RAND_32() {
        return (Math.floor((Math.random() * 255) + 1) << 23) | (Math.floor((Math.random() * 255) + 1) << 16)
            | (Math.floor((Math.random() * 255) + 1) << 8) | Math.floor((Math.random() * 255) + 1);
    }
    // macros 
    PCEINDEX(pce, pceNum) {
        return (pce * 10 + pceNum);
    }
    FR2SQ(f, r) {
        return ((21 + (f)) + ((r) * 10));
    }
    SQ64(sq120) {
        return this.Sq120ToSq64[(sq120)];
    }
    SQ120(sq64) {
        return this.Sq64ToSq120[(sq64)];
    }
    SQOFFBOARD(sq) {
        if (this.FilesBrd[sq] == this.squares.OFFBOARD) {
            return this.BOOL.TRUE;
        }
        else {
            return this.BOOL.FALSE;
        }
    }
}
DefService.ɵfac = function DefService_Factory(t) { return new (t || DefService)(); };
DefService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DefService, factory: DefService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Oh3b":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about/about.component */ "84zG");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact/contact.component */ "bzTf");






class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 12, vars: 0, consts: [[1, "main-div"], [1, "card"], [1, "header"], ["mat-button", "", "routerLink", "/signup", 1, "nav-button"], ["mat-button", "", "routerLink", "/login", 1, "nav-button"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome to letsPlayChess");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " login to play chess");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "SignUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "LogIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-contact");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]], styles: [".main-div[_ngcontent-%COMP%] {\n  margin-top: -32px;\n  position: relative;\n  background-image: url('b.jpg');\n  background-size: 100% 100%;\n  height: 100%;\n}\n\n.header[_ngcontent-%COMP%] {\n  padding-top: 150px;\n  font-family: sans-serif;\n  font-size: 3em;\n  color: #F1F1F1;\n  text-align: center;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: center;\n  font: 1em sans-serif;\n  color: #F1F1F1;\n}\n\n.nav-button[_ngcontent-%COMP%] {\n  background-color: #495288;\n  left: 40%;\n  font: 1.3em sans-serif;\n  color: #F1F1F1;\n  margin: 10px;\n  height: 75px;\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWVwYWdlLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0FBSko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBWk87RUFhUCxrQkFBQTtBQUZKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBakJPO0FBaUJYOztBQUNBO0VBQ0kseUJBckJRO0VBc0JSLFNBQUE7RUFDQSxzQkFBQTtFQUNBLGNBdEJPO0VBdUJQLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVKIiwiZmlsZSI6ImhvbWVwYWdlLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnkxIDogIzEzMUQ0N1xyXG4kcHJpbWFyeTIgOiAjNDk1Mjg4XHJcbiRhY2NlbnQxIDogIzlBRUNFRFxyXG4kYWNjZW50MiA6ICNGMUYxRjFcclxuICAgIFxyXG4ubWFpbi1kaXZcclxuICAgIG1hcmdpbi10b3A6IC0zMnB4IFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC9iLmpwZycpXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJVxyXG4gICAgaGVpZ2h0OiAxMDAlXHJcbi5oZWFkZXJcclxuICAgIHBhZGRpbmctdG9wOiAxNTBweFxyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWZcclxuICAgIGZvbnQtc2l6ZTogM2VtXHJcbiAgICBjb2xvcjogJGFjY2VudDJcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG5wXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgIGZvbnQ6IDFlbSBzYW5zLXNlcmlmXHJcbiAgICBjb2xvcjogJGFjY2VudDJcclxuLm5hdi1idXR0b25cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5MlxyXG4gICAgbGVmdDogNDAlXHJcbiAgICBmb250OiAxLjNlbSBzYW5zLXNlcmlmXHJcbiAgICBjb2xvcjogJGFjY2VudDJcclxuICAgIG1hcmdpbjogMTBweCBcclxuICAgIGhlaWdodDogNzVweFxyXG4gICAgd2lkdGg6IDEyMHB4Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _service_game_board_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/game-board.service */ "9a6t");
/* harmony import */ var _service_defs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/defs.service */ "H736");
/* harmony import */ var _service_gen_moves_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/gen-moves.service */ "zqmd");
/* harmony import */ var _service_move_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/move.service */ "gp9o");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










class AppComponent {
    constructor(brd, def, genMove, move) {
        this.brd = brd;
        this.def = def;
        this.genMove = genMove;
        this.move = move;
        this.fen = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
    }
    InitHashKeys() {
        var index = 0;
        for (index = 0; index < 13 * 120; ++index) {
            this.def.PieceKeys[index] = this.def.RAND_32();
        }
        this.def.SideKey = this.def.RAND_32();
        for (index = 0; index < 16; ++index) {
            this.def.CastleKeys[index] = this.def.RAND_32();
        }
    }
    InitSq120To64() {
        var index = 0;
        var file = this.def.file.FILE_A;
        var rank = this.def.rank.RANK_1;
        var sq = this.def.squares.A1;
        var sq64 = 0;
        for (index = 0; index < this.def.BigBrdSq; ++index) {
            this.def.Sq120ToSq64[index] = 65;
        }
        for (index = 0; index < 64; ++index) {
            this.def.Sq64ToSq120[index] = 120;
        }
        for (rank = this.def.rank.RANK_1; rank <= this.def.rank.RANK_8; ++rank) {
            for (file = this.def.file.FILE_A; file <= this.def.file.FILE_H; ++file) {
                sq = this.def.FR2SQ(file, rank);
                this.def.Sq64ToSq120[sq64] = sq;
                this.def.Sq120ToSq64[sq] = sq64;
                sq64++;
            }
        }
    }
    InitFilesRanksBrd() {
        var index = 0;
        var file = this.def.file.FILE_A;
        var rank = this.def.rank.RANK_1;
        var sq = this.def.squares.A1;
        for (index = 0; index < this.def.BigBrdSq; ++index) {
            this.def.FilesBrd[index] = this.def.squares.OFFBOARD;
            this.def.RanksBrd[index] = this.def.squares.OFFBOARD;
        }
        for (rank = this.def.rank.RANK_1; rank <= this.def.rank.RANK_8; ++rank) {
            for (file = this.def.file.FILE_A; file <= this.def.file.FILE_H; ++file) {
                sq = this.def.FR2SQ(file, rank);
                this.def.FilesBrd[sq] = file;
                this.def.RanksBrd[sq] = rank;
            }
        }
    }
    ngOnInit() {
        this.InitFilesRanksBrd();
        this.InitHashKeys();
        this.InitSq120To64();
        this.brd.ParseFen(this.def.StartFen);
        this.brd.PrintBoard();
    }
    fenButton() {
        this.brd.ParseFen(this.fen.value);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_game_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_defs_service__WEBPACK_IMPORTED_MODULE_3__["DefService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_gen_moves_service__WEBPACK_IMPORTED_MODULE_4__["GenMovesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_move_service__WEBPACK_IMPORTED_MODULE_5__["MoveService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 0, consts: [[1, "toolbar"], ["src", "../assets/images/logo/letsPlay.jpg", "routerLink", "", 2, "width", "250px"], ["mat-button", "", "routerLink", "/play", 1, "nav-button"], [1, "spacer"], ["mat-button", "", "routerLink", "/login", 1, "nav-button"], ["mat-button", "", "routerLink", "/signup", 1, "nav-button"], ["mat-button", "", 1, "nav-button"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "LogIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "SignIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "LogOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarRow"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]], styles: [".toolbar[_ngcontent-%COMP%] {\n  background-color: #131D47;\n  height: 75px;\n}\n.toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.toolbar[_ngcontent-%COMP%]   .nav-button[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  font: 0.9em sans-serif;\n  color: #F1F1F1;\n  height: 75px;\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0kseUJBUlE7RUFTUixZQUFBO0FBTko7QUFRSTtFQUNJLGNBQUE7QUFOUjtBQU9JO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBYkc7RUFjSCxZQUFBO0VBQ0EsWUFBQTtBQUxSIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5MSA6ICMxMzFENDdcclxuJHByaW1hcnkyIDogIzQ5NTI4OFxyXG4kYWNjZW50MSA6ICM5QUVDRURcclxuJGFjY2VudDIgOiAjRjFGMUYxXHJcbiBcclxuXHJcblxyXG4udG9vbGJhclxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnkxXHJcbiAgICBoZWlnaHQ6IDc1cHhcclxuXHJcbiAgICAuc3BhY2VyXHJcbiAgICAgICAgZmxleDogMSAxIGF1dG9cclxuICAgIC5uYXYtYnV0dG9uXHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHhcclxuICAgICAgICBmb250OiAuOWVtIHNhbnMtc2VyaWZcclxuICAgICAgICBjb2xvcjogJGFjY2VudDJcclxuICAgICAgICBoZWlnaHQ6IDc1cHhcclxuICAgICAgICB3aWR0aDogMTIwcHhcclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], function () { return [{ type: _service_game_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"] }, { type: _service_defs_service__WEBPACK_IMPORTED_MODULE_3__["DefService"] }, { type: _service_gen_moves_service__WEBPACK_IMPORTED_MODULE_4__["GenMovesService"] }, { type: _service_move_service__WEBPACK_IMPORTED_MODULE_5__["MoveService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _board_ui_board_ui_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./board-ui/board-ui.component */ "ZcQJ");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guard/auth.guard */ "cT6d");
/* harmony import */ var _guard_auth_cancel_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./guard/auth-cancel.guard */ "FAyI");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"], _guard_auth_cancel_guard__WEBPACK_IMPORTED_MODULE_21__["AuthCancelGuard"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__["HomepageComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
        _board_ui_board_ui_component__WEBPACK_IMPORTED_MODULE_16__["BoardUiComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__["HomepageComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
                    _board_ui_board_ui_component__WEBPACK_IMPORTED_MODULE_16__["BoardUiComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"]
                ],
                providers: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"], _guard_auth_cancel_guard__WEBPACK_IMPORTED_MODULE_21__["AuthCancelGuard"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZcQJ":
/*!************************************************!*\
  !*** ./src/app/board-ui/board-ui.component.ts ***!
  \************************************************/
/*! exports provided: BoardUiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardUiComponent", function() { return BoardUiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api-service.service */ "5P4U");
/* harmony import */ var _service_defs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/defs.service */ "H736");
/* harmony import */ var _service_game_board_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/game-board.service */ "9a6t");
/* harmony import */ var _service_gen_moves_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/gen-moves.service */ "zqmd");
/* harmony import */ var _service_move_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/move.service */ "gp9o");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");


















function BoardUiComponent_div_11_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const side_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", side_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", side_r5.viewChild, " ");
} }
function BoardUiComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Side");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardUiComponent_div_11_Template_mat_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.selectedSide = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BoardUiComponent_div_11_mat_option_8_Template, 2, 2, "mat-option", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardUiComponent_div_11_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.acceptChallenge(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Accept ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.opp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selectedSide);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.sides);
} }
function BoardUiComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardUiComponent_div_12_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const friend_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.challenge(friend_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Challenge ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const friend_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](friend_r9);
} }
function BoardUiComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardUiComponent_div_21_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.invitePlayer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Invite player ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.newFriend);
} }
function BoardUiComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardUiComponent_div_22_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.addFriend(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Add Friend ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.invitedFriend.from);
} }
class BoardUiComponent {
    constructor(api, def, board, genMove, move, fb) {
        this.api = api;
        this.def = def;
        this.board = board;
        this.genMove = genMove;
        this.move = move;
        this.fb = fb;
        this.movPos = [];
        this.friends = [];
        this.newFriend = '';
        this.opp = '';
        this.mySide = this.def.colour.WHITE;
        this.invitedFriend = { from: '', to: '' };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__["io"]();
        this.friend = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.selectedSide = '';
        this.sides = [
            { value: 'w', viewChild: 'White' },
            { value: 'b', viewChild: 'Black' }
        ];
    }
    ngOnInit() {
        // generate all possible moves
        this.genMove.GenMoves();
        // start func
        if (localStorage.getItem('game-status')) {
            this.selectedSide = localStorage.getItem('side');
            if (this.selectedSide == 'w') {
                // console.log('w')
                this.mySide = this.def.colour.WHITE;
                this.startGame();
            }
            else {
                // console.log('b')
                this.mySide = this.def.colour.BLACK;
                this.startGame();
            }
        }
        else {
            let board = document.getElementById('blackBoard');
            board.style.display = 'none';
        }
        this.socket.on('connect', () => {
            console.log('connection established');
            this.api.getUser().subscribe((user) => {
                localStorage.setItem('username', `${user.user.username}`);
                this.socket.emit('addUser', { user: user.user.username });
                this.showFriend(user.user.username);
            });
        });
        // opponents moves a piece
        this.socket.on('move', (data) => {
            var pce = this.board.piece[this.def.FROMSQ(data.move)];
            var ele = `${pce}${this.def.FROMSQ(data.move)}`;
            // console.log(ele)
            if (this.selectedSide == 'b') {
                var myTo = `${this.def.TOSQ(data.move)}b`;
            }
            else {
                var myTo = `${this.def.TOSQ(data.move)}w`;
            }
            // console.log(myTo)
            document.getElementById(myTo).appendChild(document.getElementById(ele));
            this.move.MakeMove(data.move);
            this.genMove.GenMoves();
        });
        // opponents challenge
        this.socket.on('challenge', (data) => {
            if (localStorage.getItem('game-status') != '1')
                this.opp = data.from;
        });
        // view invites
        this.socket.on('invite', (data) => {
            this.invitedFriend = { from: data.from, to: data.to };
        });
        // recieve game req
        this.socket.on('accept-game', (data) => {
            if (localStorage.getItem('game-status') != '1')
                this.selectedSide = data.side;
            this.opp = data.opp;
            console.log(data.opp);
            this.startGame();
        });
    }
    // show friends list
    showFriend(username) {
        this.api.showFriends({ username }).subscribe((data) => {
            data.friends.forEach(element => {
                this.friends.push(element);
            });
        });
    }
    // create chess pieces 
    createChessPiece(side) {
        var rank, file, sq, piece;
        for (rank = this.def.rank.RANK_8; rank >= this.def.rank.RANK_1; rank--) {
            for (file = this.def.file.FILE_A; file <= this.def.file.FILE_H; file++) {
                sq = this.def.FR2SQ(file, rank);
                piece = this.board.piece[sq];
                // create div elements of all the piece in the fen pos
                if (piece != 0) {
                    // check for white or black piece
                    var square = document.getElementById(`${sq}${side}`);
                    var ele = document.createElement('div');
                    ele.id = `${piece}${sq}`;
                    ele.innerHTML = `${this.def.PceChar[piece]}`;
                    ele.draggable = true;
                    ele.ondragstart = (event) => {
                        this.movPos = [];
                        event.dataTransfer.setData('text', event.target.id);
                        this.makeMove(event.srcElement.id);
                    };
                    if (this.def.PceChar[piece] === this.def.PceChar[piece].toLowerCase()) {
                        // black pieces
                        ele.style.backgroundColor = '#131D47';
                        ele.style.color = 'white';
                        ele.style.width = '59px';
                        ele.style.height = '59px';
                        square.appendChild(ele);
                        // console.log(ele)
                    }
                    else {
                        // white pieces
                        ele.style.backgroundColor = '#d4e2d4';
                        ele.style.color = 'black';
                        ele.style.width = '59px';
                        ele.style.height = '59px';
                        square.appendChild(ele);
                    }
                }
            }
        }
    }
    // invite player
    invitePlayer() {
        this.socket.emit('invite', { from: localStorage.getItem('username'), to: this.newFriend });
        this.newFriend = '';
    }
    // create an array of moves
    makeMove(val) {
        var sq = Math.ceil(val % 100);
        for (var i = this.board.moveListStart[this.board.ply]; i < this.board.moveList.length; i++) {
            if (this.def.FROMSQ(this.board.moveList[i]) == sq) {
                this.movPos.push(this.def.TOSQ(this.board.moveList[i]));
            }
        }
    }
    // find friend
    findFriend() {
        var exist = true;
        if (this.friend.valid && this.friend.value.username != localStorage.getItem('username')) {
            this.friends.forEach(element => {
                if (this.friend.value.username == element) {
                    exist = false;
                }
            });
            if (exist) {
                this.api.findFriends({ username: this.friend.value.username }).subscribe((data) => {
                    this.newFriend = data.username;
                });
            }
        }
    }
    // create a new challange
    challenge(event) {
        if (localStorage.getItem('game-status') != '1') {
            this.socket.emit('challenge', { from: localStorage.getItem('username'), to: event });
            localStorage.setItem('opp', event);
        }
        else {
            alert('Already in a game');
        }
    }
    // add a new friend
    addFriend() {
        this.api.addFriends({ from: this.invitedFriend.from, to: this.invitedFriend.to }).subscribe((data) => {
            console.log(data);
        });
        this.invitedFriend.from = '';
        this.friends = [];
        this.showFriend(localStorage.getItem('username'));
    }
    // accept the challenge
    acceptChallenge() {
        if (this.selectedSide == 'w') {
            // console.log(this.opp)
            this.socket.emit('accept-game', { oside: 'b', opp: this.opp, me: localStorage.getItem('username') });
            localStorage.setItem('opp', this.opp);
            this.startGame();
        }
        else {
            // console.log(this.opp)
            this.socket.emit('accept-game', { oside: 'w', opp: this.opp, me: localStorage.getItem('username') });
            localStorage.setItem('opp', this.opp);
            this.startGame();
        }
    }
    // drag and drop
    // elements movement ui 
    allowDrop(event) {
        if (this.board.ply % 2 == 0 && localStorage.getItem('side') == 'w' || this.board.ply % 2 == 1 && localStorage.getItem('side') == 'b') {
            var sq;
            for (var i = 0; i < this.movPos.length; i++) {
                sq = this.movPos[i];
                if (event.target.id == `${sq}${localStorage.getItem('side')}`) {
                    event.preventDefault();
                }
            }
        }
    }
    // made a move
    drop(event) {
        event.preventDefault();
        event.target.appendChild(document.getElementById(event.dataTransfer.getData("text")));
        var from = (event.srcElement.lastChild.id % 100);
        var to = event.target.id;
        to = `${to[0]}${to[1]}`;
        // make a move
        for (var i = this.board.moveListStart[this.board.ply]; i < this.board.moveList.length; i++) {
            var mvfrom = this.def.FROMSQ(this.board.moveList[i]);
            var mvto = this.def.TOSQ(this.board.moveList[i]);
            if (from == mvfrom && to == mvto) {
                this.move.MakeMove(this.board.moveList[i]);
                this.socket.emit('move', { move: this.board.moveList[i], user: localStorage.getItem('opp') });
                this.genMove.GenMoves();
            }
        }
    }
    // game instance
    startGame() {
        // setting sides and pieces
        if (this.selectedSide == 'b') {
            localStorage.setItem('side', 'b');
            localStorage.setItem('game-status', '1');
            this.mySide = this.def.colour.BLACK;
            var board1 = document.getElementById('blackBoard');
            board1.style.display = "block";
            var board2 = document.getElementById('whiteBoard');
            board2.style.display = "none";
            this.createChessPiece(this.selectedSide);
        }
        else {
            localStorage.setItem('side', 'w');
            localStorage.setItem('game-status', '1');
            this.mySide = this.def.colour.WHITE;
            var board2 = document.getElementById('blackBoard');
            board2.style.display = "none";
            this.createChessPiece(this.selectedSide);
        }
    }
}
BoardUiComponent.ɵfac = function BoardUiComponent_Factory(t) { return new (t || BoardUiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_defs_service__WEBPACK_IMPORTED_MODULE_4__["DefService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_game_board_service__WEBPACK_IMPORTED_MODULE_5__["BoardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_gen_moves_service__WEBPACK_IMPORTED_MODULE_6__["GenMovesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_move_service__WEBPACK_IMPORTED_MODULE_7__["MoveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
BoardUiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardUiComponent, selectors: [["app-board-ui"]], decls: 307, vars: 5, consts: [[1, "example-container"], ["mode", "side", "opened", "", 2, "width", "200px", "background-color", "#F1F1F1"], [2, "height", "17px", "background-color", "#9AECED", "margin-left", "-14px"], ["mat-button", "", 2, "display", "inline-block", "position", "relative", "top", "-50px", "left", "95px", "background-color", "#495288", "color", "antiquewhite", 3, "click"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [2, "height", "50px"], [2, "display", "inline-block", "width", "100px", "position", "relative", "left", "-10px", 3, "formGroup"], [1, "feild"], ["matInput", "", "placeholder", "", "formControlName", "username"], ["mat-button", "", 2, "display", "inline-block", "position", "relative", "top", "-55px", "left", "120px", "background-color", "#495288", "color", "antiquewhite", 3, "click"], [2, "padding-top", "15px"], [1, "user"], ["id", "board"], ["id", "whiteBoard"], ["id", "91w", 1, "white", 3, "drop", "dragover"], ["id", "92w", 1, "black", 3, "drop", "dragover"], ["id", "93w", 1, "white", 3, "drop", "dragover"], ["id", "94w", 1, "black", 3, "drop", "dragover"], ["id", "95w", 1, "white", 3, "drop", "dragover"], ["id", "96w", 1, "black", 3, "drop", "dragover"], ["id", "97w", 1, "white", 3, "drop", "dragover"], ["id", "98w", 1, "black", 3, "drop", "dragover"], ["id", "81w", 1, "black", 3, "drop", "dragover"], ["id", "82w", 1, "white", 3, "drop", "dragover"], ["id", "83w", 1, "black", 3, "drop", "dragover"], ["id", "84w", 1, "white", 3, "drop", "dragover"], ["id", "85w", 1, "black", 3, "drop", "dragover"], ["id", "86w", 1, "white", 3, "drop", "dragover"], ["id", "87w", 1, "black", 3, "drop", "dragover"], ["id", "88w", 1, "white", 3, "drop", "dragover"], ["id", "71w", 1, "white", 3, "drop", "dragover"], ["id", "72w", 1, "black", 3, "drop", "dragover"], ["id", "73w", 1, "white", 3, "drop", "dragover"], ["id", "74w", 1, "black", 3, "drop", "dragover"], ["id", "75w", 1, "white", 3, "drop", "dragover"], ["id", "76w", 1, "black", 3, "drop", "dragover"], ["id", "77w", 1, "white", 3, "drop", "dragover"], ["id", "78w", 1, "black", 3, "drop", "dragover"], ["id", "61w", 1, "black", 3, "drop", "dragover"], ["id", "62w", 1, "white", 3, "drop", "dragover"], ["id", "63w", 1, "black", 3, "drop", "dragover"], ["id", "64w", 1, "white", 3, "drop", "dragover"], ["id", "65w", 1, "black", 3, "drop", "dragover"], ["id", "66w", 1, "white", 3, "drop", "dragover"], ["id", "67w", 1, "black", 3, "drop", "dragover"], ["id", "68w", 1, "white", 3, "drop", "dragover"], ["id", "51w", 1, "white", 3, "drop", "dragover"], ["id", "52w", 1, "black", 3, "drop", "dragover"], ["id", "53w", 1, "white", 3, "drop", "dragover"], ["id", "54w", 1, "black", 3, "drop", "dragover"], ["id", "55w", 1, "white", 3, "drop", "dragover"], ["id", "56w", 1, "black", 3, "drop", "dragover"], ["id", "57w", 1, "white", 3, "drop", "dragover"], ["id", "58w", 1, "black", 3, "drop", "dragover"], ["id", "41w", 1, "black", 3, "drop", "dragover"], ["id", "42w", 1, "white", 3, "drop", "dragover"], ["id", "43w", 1, "black", 3, "drop", "dragover"], ["id", "44w", 1, "white", 3, "drop", "dragover"], ["id", "45w", 1, "black", 3, "drop", "dragover"], ["id", "46w", 1, "white", 3, "drop", "dragover"], ["id", "47w", 1, "black", 3, "drop", "dragover"], ["id", "48w", 1, "white", 3, "drop", "dragover"], ["id", "31w", 1, "white", 3, "drop", "dragover"], ["id", "32w", 1, "black", 3, "drop", "dragover"], ["id", "33w", 1, "white", 3, "drop", "dragover"], ["id", "34w", 1, "black", 3, "drop", "dragover"], ["id", "35w", 1, "white", 3, "drop", "dragover"], ["id", "36w", 1, "black", 3, "drop", "dragover"], ["id", "37w", 1, "white", 3, "drop", "dragover"], ["id", "38w", 1, "black", 3, "drop", "dragover"], ["id", "21w", 1, "black", 3, "drop", "dragover"], ["id", "22w", 1, "white", 3, "drop", "dragover"], ["id", "23w", 1, "black", 3, "drop", "dragover"], ["id", "24w", 1, "white", 3, "drop", "dragover"], ["id", "25w", 1, "black", 3, "drop", "dragover"], ["id", "26w", 1, "white", 3, "drop", "dragover"], ["id", "27w", 1, "black", 3, "drop", "dragover"], ["id", "28w", 1, "white", 3, "drop", "dragover"], ["id", "blackBoard"], ["id", "21b", 1, "black", 3, "drop", "dragover"], ["id", "22b", 1, "white", 3, "drop", "dragover"], ["id", "23b", 1, "black", 3, "drop", "dragover"], ["id", "24b", 1, "white", 3, "drop", "dragover"], ["id", "25b", 1, "black", 3, "drop", "dragover"], ["id", "26b", 1, "white", 3, "drop", "dragover"], ["id", "27b", 1, "black", 3, "drop", "dragover"], ["id", "28b", 1, "white", 3, "drop", "dragover"], ["id", "31b", 1, "white", 3, "drop", "dragover"], ["id", "32b", 1, "black", 3, "drop", "dragover"], ["id", "33b", 1, "white", 3, "drop", "dragover"], ["id", "34b", 1, "black", 3, "drop", "dragover"], ["id", "35b", 1, "white", 3, "drop", "dragover"], ["id", "36b", 1, "black", 3, "drop", "dragover"], ["id", "37b", 1, "white", 3, "drop", "dragover"], ["id", "38b", 1, "black", 3, "drop", "dragover"], ["id", "41b", 1, "black", 3, "drop", "dragover"], ["id", "42b", 1, "white", 3, "drop", "dragover"], ["id", "43b", 1, "black", 3, "drop", "dragover"], ["id", "44b", 1, "white", 3, "drop", "dragover"], ["id", "45b", 1, "black", 3, "drop", "dragover"], ["id", "46b", 1, "white", 3, "drop", "dragover"], ["id", "47b", 1, "black", 3, "drop", "dragover"], ["id", "48b", 1, "white", 3, "drop", "dragover"], ["id", "51b", 1, "white", 3, "drop", "dragover"], ["id", "52b", 1, "black", 3, "drop", "dragover"], ["id", "53b", 1, "white", 3, "drop", "dragover"], ["id", "54b", 1, "black", 3, "drop", "dragover"], ["id", "55b", 1, "white", 3, "drop", "dragover"], ["id", "56b", 1, "black", 3, "drop", "dragover"], ["id", "57b", 1, "white", 3, "drop", "dragover"], ["id", "58b", 1, "black", 3, "drop", "dragover"], ["id", "61b", 1, "black", 3, "drop", "dragover"], ["id", "62b", 1, "white", 3, "drop", "dragover"], ["id", "63b", 1, "black", 3, "drop", "dragover"], ["id", "64b", 1, "white", 3, "drop", "dragover"], ["id", "65b", 1, "black", 3, "drop", "dragover"], ["id", "66b", 1, "white", 3, "drop", "dragover"], ["id", "67b", 1, "black", 3, "drop", "dragover"], ["id", "68b", 1, "white", 3, "drop", "dragover"], ["id", "71b", 1, "white", 3, "drop", "dragover"], ["id", "72b", 1, "black", 3, "drop", "dragover"], ["id", "73b", 1, "white", 3, "drop", "dragover"], ["id", "74b", 1, "black", 3, "drop", "dragover"], ["id", "75b", 1, "white", 3, "drop", "dragover"], ["id", "76b", 1, "black", 3, "drop", "dragover"], ["id", "77b", 1, "white", 3, "drop", "dragover"], ["id", "78b", 1, "black", 3, "drop", "dragover"], ["id", "81b", 1, "black", 3, "drop", "dragover"], ["id", "82b", 1, "white", 3, "drop", "dragover"], ["id", "83b", 1, "black", 3, "drop", "dragover"], ["id", "84b", 1, "white", 3, "drop", "dragover"], ["id", "85b", 1, "black", 3, "drop", "dragover"], ["id", "86b", 1, "white", 3, "drop", "dragover"], ["id", "87b", 1, "black", 3, "drop", "dragover"], ["id", "88b", 1, "white", 3, "drop", "dragover"], ["id", "91b", 1, "white", 3, "drop", "dragover"], ["id", "92b", 1, "black", 3, "drop", "dragover"], ["id", "93b", 1, "white", 3, "drop", "dragover"], ["id", "94b", 1, "black", 3, "drop", "dragover"], ["id", "95b", 1, "white", 3, "drop", "dragover"], ["id", "96b", 1, "black", 3, "drop", "dragover"], ["id", "97b", 1, "white", 3, "drop", "dragover"], ["id", "98b", 1, "black", 3, "drop", "dragover"], [1, "moves"], [1, "chat"], [2, "height", "100px", "background-color", "#9AECED", "margin-left", "-14px"], ["appearance", "fill", 2, "display", "inline-block", "position", "relative", "top", "-35px"], ["name", "side", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function BoardUiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Bot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "UserName1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardUiComponent_Template_button_click_7_listener($event) { return ctx.challenge($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Challenge ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BoardUiComponent_div_11_Template, 11, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BoardUiComponent_div_12_Template, 6, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardUiComponent_Template_button_click_19_listener() { return ctx.findFriend(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Find");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BoardUiComponent_div_21_Template, 6, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BoardUiComponent_div_22_Template, 6, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-drawer-content", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Opponent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_30_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_30_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_32_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_32_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_34_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_34_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_36_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_36_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_38_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_38_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_40_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_40_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_42_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_42_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_44_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_44_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_47_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_47_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_49_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_49_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_51_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_51_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_53_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_53_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_55_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_55_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_57_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_57_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_59_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_59_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_61_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_61_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_64_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_64_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_66_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_66_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_68_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_68_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_70_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_70_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_72_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_72_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_74_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_74_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_76_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_76_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_78_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_78_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_81_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_81_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_83_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_83_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_85_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_85_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_87_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_87_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_89_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_89_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_91_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_91_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_93_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_93_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_95_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_95_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_98_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_98_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_100_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_100_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_102_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_102_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_104_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_104_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_106_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_106_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_108_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_108_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_110_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_110_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_112_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_112_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_115_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_115_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_117_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_117_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_119_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_119_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_121_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_121_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_123_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_123_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_125_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_125_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_127_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_127_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_129_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_129_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_132_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_132_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_134_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_134_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_136_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_136_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_138_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_138_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_140_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_140_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_142_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_142_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_144_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_144_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_146_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_146_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_149_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_149_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_151_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_151_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_153_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_153_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_155_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_155_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_157_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_157_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_159_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_159_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_161_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_161_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_163_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_163_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "table", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_167_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_167_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_169_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_169_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_171_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_171_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_173_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_173_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_175_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_175_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_177_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_177_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_179_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_179_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_181_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_181_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_184_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_184_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_186_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_186_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_188_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_188_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_190_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_190_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_192_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_192_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_194_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_194_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_196_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_196_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_198_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_198_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_201_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_201_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_203_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_203_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_205_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_205_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_207_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_207_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_209_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_209_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_211_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_211_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_213_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_213_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_215_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_215_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_218_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_218_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_220_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_220_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_222_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_222_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_224_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_224_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_226_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_226_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_228_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_228_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_230_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_230_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_232_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_232_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_235_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_235_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_237_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_237_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_239_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_239_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_241_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_241_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_243_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_243_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_245_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_245_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_247_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_247_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_249_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_249_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_252_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_252_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_254_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_254_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_256_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_256_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_258_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_258_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_260_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_260_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_262_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_262_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_264_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_264_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_266_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_266_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_269_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_269_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_271_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_271_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_273_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_273_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_275_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_275_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_277_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_277_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_279_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_279_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_281_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_281_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_283_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_283_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_286_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_286_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_288_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_288_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_290_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_290_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_292_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_292_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_294_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_294_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_296_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_296_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_298_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_298_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function BoardUiComponent_Template_div_drop_300_listener($event) { return ctx.drop($event); })("dragover", function BoardUiComponent_Template_div_dragover_300_listener($event) { return ctx.allowDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Moves");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Message here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.opp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.friends);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.friend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newFriend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invitedFriend.from);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatDrawer"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatDrawerContent"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]], styles: ["#board[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  padding-left: 130px;\n  margin-bottom: -5px;\n  margin-top: -2px;\n  font: 1em sans-serif;\n}\n\n.user[_ngcontent-%COMP%] {\n  background-color: #495288;\n  color: #F1F1F1;\n  display: block;\n  width: 200px;\n  position: relative;\n  left: 130px;\n  padding: 5px;\n}\n\n.black[_ngcontent-%COMP%] {\n  margin: -2px;\n  width: 59px;\n  height: 59px;\n  background-color: #131D47;\n  border: 1px solid black;\n}\n\n.white[_ngcontent-%COMP%] {\n  margin: -2px;\n  width: 59px;\n  height: 59px;\n  background-color: #d4e2d4;\n  border: 1px solid black;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  height: 582px;\n  border: 1px solid #555;\n  background-color: #495288;\n}\n\n.chat[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  left: 65%;\n  top: 50%;\n  width: 35%;\n  height: 50%;\n  background-color: #131D47;\n  color: #F1F1F1;\n}\n\n.moves[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0px;\n  left: 65%;\n  width: 35%;\n  height: 50%;\n  background-color: #131D47;\n  color: #F1F1F1;\n}\n\n.feild[_ngcontent-%COMP%] {\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJvYXJkLXVpLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBTEo7O0FBT0E7RUFDSSx5QkFiUTtFQWNSLGNBWk87RUFhUCxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFKSjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQTFCUTtFQTJCUix1QkFBQTtBQUhKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBN0JPO0VBOEJQLHVCQUFBO0FBRko7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkF0Q1U7QUFxQ1o7O0FBS0E7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQWxEUTtFQW1EUixjQWhETztBQThDWDs7QUFHQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBM0RRO0VBNERSLGNBekRPO0FBeURYOztBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6ImJvYXJkLXVpLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiRwcmltYXJ5MSA6ICMxMzFENDdcclxuJHByaW1hcnkyIDogIzQ5NTI4OFxyXG4kYWNjZW50MSA6ICM5QUVDRURcclxuJGFjY2VudDIgOiAjRjFGMUYxXHJcbiRhY2NlbnQzIDogI2Q0ZTJkNFxyXG4jYm9hcmRcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEzMHB4XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNXB4XHJcbiAgICBtYXJnaW4tdG9wOiAtMnB4XHJcbiAgICBmb250OiAxZW0gc2Fucy1zZXJpZlxyXG4gICAgXHJcbi51c2VyIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnkyXHJcbiAgICBjb2xvcjogJGFjY2VudDJcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICB3aWR0aDogMjAwcHhcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgbGVmdDogMTMwcHhcclxuICAgIHBhZGRpbmc6IDVweFxyXG5cclxuLmJsYWNrIFxyXG4gICAgbWFyZ2luOiAtMnB4XHJcbiAgICB3aWR0aDogNTlweFxyXG4gICAgaGVpZ2h0OiA1OXB4XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTFcclxuICAgIGJvcmRlciA6IDFweCBzb2xpZCBibGFja1xyXG5cclxuLndoaXRlIFxyXG4gICAgbWFyZ2luOiAtMnB4XHJcbiAgICB3aWR0aDogNTlweFxyXG4gICAgaGVpZ2h0OiA1OXB4XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50M1xyXG4gICAgYm9yZGVyIDogMXB4IHNvbGlkIGJsYWNrXHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIgXHJcbiAgaGVpZ2h0OiA1ODJweFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTVcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTJcclxuXHJcblxyXG5cclxuLmNoYXRcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICBsZWZ0OiA2NSVcclxuICAgIHRvcDogNTAlXHJcbiAgICB3aWR0aDogMzUlXHJcbiAgICBoZWlnaHQ6IDUwJVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnkxXHJcbiAgICBjb2xvcjogJGFjY2VudDJcclxuLm1vdmVzXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgdG9wOiAwcHhcclxuICAgIGxlZnQ6IDY1JVxyXG4gICAgd2lkdGg6IDM1JVxyXG4gICAgaGVpZ2h0OiA1MCVcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5MVxyXG4gICAgY29sb3I6ICRhY2NlbnQyXHJcblxyXG4uZmVpbGRcclxuICAgIGRpc3BsYXk6IGlubGluZVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardUiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-board-ui',
                templateUrl: './board-ui.component.html',
                styleUrls: ['./board-ui.component.sass']
            }]
    }], function () { return [{ type: _service_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"] }, { type: _service_defs_service__WEBPACK_IMPORTED_MODULE_4__["DefService"] }, { type: _service_game_board_service__WEBPACK_IMPORTED_MODULE_5__["BoardService"] }, { type: _service_gen_moves_service__WEBPACK_IMPORTED_MODULE_6__["GenMovesService"] }, { type: _service_move_service__WEBPACK_IMPORTED_MODULE_7__["MoveService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 3, vars: 0, consts: [[1, "contact"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".contact[_ngcontent-%COMP%] {\n  margin-top: -22px;\n  background-color: #495288;\n}\n\nh1[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  text-align: center;\n  font-family: sans-serif;\n  color: #F1F1F1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRhY3QuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxpQkFBQTtFQUNBLHlCQVBRO0FBRVo7O0FBT0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQVhPO0FBT1giLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5MSA6ICMxMzFENDdcclxuJHByaW1hcnkyIDogIzQ5NTI4OFxyXG4kYWNjZW50MSA6ICM5QUVDRURcclxuJGFjY2VudDIgOiAjRjFGMUYxXHJcbiAgICBcclxuXHJcbi5jb250YWN0XHJcbiAgICBtYXJnaW4tdG9wOiAtMjJweFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnkyXHJcbiAgICBcclxuaDFcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmXHJcbiAgICBjb2xvcjogJGFjY2VudDIgXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cT6d":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthGuard {
    tokenExpired(token) {
        const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
        return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    }
    canActivate(route, state) {
        if (localStorage.getItem('token')) {
            if (!this.tokenExpired(localStorage.getItem('token'))) {
                return true;
            }
            else {
                return false;
            }
        }
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "gp9o":
/*!*****************************************!*\
  !*** ./src/app/service/move.service.ts ***!
  \*****************************************/
/*! exports provided: MoveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveService", function() { return MoveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_board_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-board.service */ "9a6t");
/* harmony import */ var _defs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defs.service */ "H736");




class MoveService {
    constructor(board, def) {
        this.board = board;
        this.def = def;
    }
    ClearPiece(sq) {
        var pce = this.board.piece[sq];
        var col = this.def.pceCol[pce];
        var index = 0;
        var t_pceNum = -1;
        this.board.HASH_PCE(pce, sq);
        this.board.piece[sq] = this.def.piece.EMPTY;
        this.board.matNo[col] -= this.def.pceVal[pce];
        for (index = 0; index < this.board.pceNo[pce]; ++index) {
            if (this.board.pList[this.def.PCEINDEX(pce, index)] == sq) {
                t_pceNum = index;
                break;
            }
        }
        this.board.pceNo[pce]--;
        this.board.pList[this.def.PCEINDEX(pce, t_pceNum)] = this.board.pList[this.def.PCEINDEX(pce, this.board.pceNo[pce])];
    }
    AddPiece(sq, pce) {
        var col = this.def.pceCol[pce];
        this.board.HASH_PCE(pce, sq);
        this.board.piece[sq] = pce;
        this.board.matNo[col] += this.def.pceVal[pce];
        this.board.pList[this.def.PCEINDEX(pce, this.board.pceNo[pce])] = sq;
        this.board.pceNo[pce]++;
    }
    MovePiece(from, to) {
        var index = 0;
        var pce = this.board.piece[from];
        this.board.HASH_PCE(pce, from);
        this.board.piece[from] = this.def.piece.EMPTY;
        this.board.HASH_PCE(pce, to);
        this.board.piece[to] = pce;
        for (index = 0; index < this.board.pceNo[pce]; ++index) {
            if (this.board.pList[this.def.PCEINDEX(pce, index)] == from) {
                this.board.pList[this.def.PCEINDEX(pce, index)] = to;
                break;
            }
        }
    }
    MakeMove(move) {
        var testObj = { posKey: Number, move: Number, castlePerm: Number, enPas: Number, fiftyMov: Number };
        var from = this.def.FROMSQ(move);
        var to = this.def.TOSQ(move);
        var side = this.board.side;
        testObj.posKey = this.board.posKey;
        if ((move & this.def.MFLAGEP) != 0) {
            if (side == this.def.colour.WHITE) {
                this.ClearPiece(to - 10);
            }
            else {
                this.ClearPiece(to + 10);
            }
        }
        if ((move & this.def.MFLAGCA) != 0) {
            switch (to) {
                case this.def.squares.C1:
                    this.MovePiece(this.def.squares.A1, this.def.squares.D1);
                    break;
                case this.def.squares.C8:
                    this.MovePiece(this.def.squares.A8, this.def.squares.D8);
                    break;
                case this.def.squares.G1:
                    this.MovePiece(this.def.squares.H1, this.def.squares.F1);
                    break;
                case this.def.squares.G8:
                    this.MovePiece(this.def.squares.H8, this.def.squares.F8);
                    break;
                default: break;
            }
        }
        if (this.board.enPas != this.def.squares.NO_SQ)
            this.board.HASH_EP();
        this.board.HASH_CA();
        testObj.move = move;
        testObj.fiftyMov = this.board.fiftyMov;
        testObj.enPas = this.board.enPas;
        testObj.castlePerm = this.board.casParm;
        this.board.history.push(testObj);
        this.board.casParm &= this.def.CastlePerm[from];
        this.board.casParm &= this.def.CastlePerm[to];
        this.board.enPas = this.def.squares.NO_SQ;
        this.board.HASH_CA();
        var captured = this.def.CAPTURED(move);
        this.board.fiftyMov++;
        if (captured != this.def.piece.EMPTY) {
            this.ClearPiece(to);
            this.board.fiftyMov = 0;
        }
        this.board.hisPly++;
        this.board.ply++;
        if (this.def.PiecePawn[this.board.piece[from]] == this.def.BOOL.TRUE) {
            this.board.fiftyMov = 0;
            if ((move & this.def.MFLAGPS) != 0) {
                if (side == this.def.colour.WHITE) {
                    this.board.enPas = from + 10;
                }
                else {
                    this.board.enPas = from - 10;
                }
                this.board.HASH_EP();
            }
        }
        this.MovePiece(from, to);
        var prPce = this.def.PROMOTED(move);
        if (prPce != this.def.piece.EMPTY) {
            this.ClearPiece(to);
            this.AddPiece(to, prPce);
        }
        this.board.side ^= 1;
        this.board.HASH_SIDE();
        if (this.board.SqAttacked(this.board.pList[this.def.PCEINDEX(this.def.Kings[side], 0)], this.board.side)) {
            this.TakeMove();
            return this.def.BOOL.FALSE;
        }
        return this.def.BOOL.TRUE;
    }
    TakeMove() {
        this.board.hisPly--;
        this.board.ply--;
        var move = this.board.history[this.board.hisPly].move;
        var from = this.def.FROMSQ(move);
        var to = this.def.TOSQ(move);
        if (this.board.enPas != this.def.squares.NO_SQ)
            this.board.HASH_EP();
        this.board.HASH_CA();
        this.board.casParm = this.board.history[this.board.hisPly].castlePerm;
        this.board.fiftyMov = this.board.history[this.board.hisPly].fiftyMove;
        this.board.enPas = this.board.history[this.board.hisPly].enPas;
        if (this.board.enPas != this.def.squares.NO_SQ)
            this.board.HASH_EP();
        this.board.HASH_CA();
        this.board.side ^= 1;
        this.board.HASH_SIDE();
        if ((this.def.MFLAGEP & move) != 0) {
            if (this.board.side == this.def.colour.WHITE) {
                this.AddPiece(to - 10, this.def.piece.bP);
            }
            else {
                this.AddPiece(to + 10, this.def.piece.wP);
            }
        }
        else if ((this.def.MFLAGCA & move) != 0) {
            switch (to) {
                case this.def.squares.C1:
                    this.MovePiece(this.def.squares.D1, this.def.squares.A1);
                    break;
                case this.def.squares.C8:
                    this.MovePiece(this.def.squares.D8, this.def.squares.A8);
                    break;
                case this.def.squares.G1:
                    this.MovePiece(this.def.squares.F1, this.def.squares.H1);
                    break;
                case this.def.squares.G8:
                    this.MovePiece(this.def.squares.F8, this.def.squares.H8);
                    break;
                default: break;
            }
        }
        this.MovePiece(to, from);
        var captured = this.def.CAPTURED(move);
        if (captured != this.def.piece.EMPTY) {
            this.AddPiece(to, captured);
        }
        if (this.def.PROMOTED(move) != this.def.piece.EMPTY) {
            this.ClearPiece(from);
            this.AddPiece(from, (this.def.pceCol[this.def.PROMOTED(move)] == this.def.colour.WHITE ? this.def.piece.wP : this.def.piece.bP));
        }
    }
}
MoveService.ɵfac = function MoveService_Factory(t) { return new (t || MoveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_game_board_service__WEBPACK_IMPORTED_MODULE_1__["BoardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_defs_service__WEBPACK_IMPORTED_MODULE_2__["DefService"])); };
MoveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MoveService, factory: MoveService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _game_board_service__WEBPACK_IMPORTED_MODULE_1__["BoardService"] }, { type: _defs_service__WEBPACK_IMPORTED_MODULE_2__["DefService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard/auth.guard */ "cT6d");
/* harmony import */ var _board_ui_board_ui_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board-ui/board-ui.component */ "ZcQJ");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _guard_auth_cancel_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guard/auth-cancel.guard */ "FAyI");










const routes = [
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], canActivate: [_guard_auth_cancel_guard__WEBPACK_IMPORTED_MODULE_7__["AuthCancelGuard"]] },
    { path: 'signup', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], canActivate: [_guard_auth_cancel_guard__WEBPACK_IMPORTED_MODULE_7__["AuthCancelGuard"]] },
    { path: 'play', component: _board_ui_board_ui_component__WEBPACK_IMPORTED_MODULE_3__["BoardUiComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _service_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api-service.service */ "5P4U");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









class LoginComponent {
    constructor(fb, api) {
        this.fb = fb;
        this.api = api;
        this.newUser = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    onSubmit() {
        if (this.newUser.valid) {
            this.api.loginUser({ username: this.newUser.value.username, password: this.newUser.value.password }).subscribe((data) => {
                localStorage.setItem('token', data.token);
            });
        }
    }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 1, consts: [[1, "back"], [1, "login"], [3, "formGroup", "ngSubmit"], [1, "feild"], ["matInput", "", "placeholder", "", "formControlName", "username"], ["type", "password", "matInput", "", "placeholder", "", "formControlName", "password"], ["mat-button", "", 1, "forget"], ["mat-button", "", "type", "submit", 1, "submit"], ["mat-button", "", 1, "register"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Forget Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Dont have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Register Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newUser);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: [".back[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 550px;\n  background-color: #495288;\n}\n\n.login[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  top: 40px;\n  left: 55%;\n  background-color: #F1F1F1;\n  border-radius: 0px;\n  height: 440px;\n  width: 40%;\n  color: #131D47;\n}\n\n.login[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-left: 50px;\n  font: 3.5em sans-serif;\n}\n\n.login[_ngcontent-%COMP%]   .feild[_ngcontent-%COMP%] {\n  display: block;\n  width: 80%;\n  margin-top: 20px;\n  position: relative;\n  left: 50px;\n}\n\n.login[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: block;\n  background-color: #495288;\n  color: #F1F1F1;\n  position: relative;\n  left: 50px;\n  width: 80%;\n}\n\n.login[_ngcontent-%COMP%]   .forget[_ngcontent-%COMP%] {\n  margin-top: -15px;\n  display: block;\n  color: #131D47;\n  position: relative;\n  left: 64%;\n}\n\n.login[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #495288;\n  position: relative;\n  left: 9%;\n}\n\n.login[_ngcontent-%COMP%]   .register[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  left: 38%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBUFE7QUFJWjs7QUFJQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQVhPO0VBWVAsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGNBbEJRO0FBaUJaOztBQUdJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBRFI7O0FBR0k7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRFI7O0FBRUk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFqQ0k7RUFrQ0osY0FoQ0c7RUFpQ0gsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUFSOztBQUVJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0EzQ0k7RUE0Q0osa0JBQUE7RUFDQSxTQUFBO0FBQVI7O0FBRUk7RUFDSSxxQkFBQTtFQUNBLGNBaERJO0VBaURKLGtCQUFBO0VBQ0EsUUFBQTtBQUFSOztBQUVJO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFBUiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5MSA6ICMxMzFENDdcclxuJHByaW1hcnkyIDogIzQ5NTI4OFxyXG4kYWNjZW50MSA6ICM5QUVDRURcclxuJGFjY2VudDIgOiAjRjFGMUYxXHJcbi5iYWNrXHJcbiAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgd2lkdGg6IDEwMCVcclxuICAgIGhlaWdodDogNTUwcHhcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5MlxyXG4ubG9naW5cclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICB0b3A6IDQwcHhcclxuICAgIGxlZnQ6IDU1JVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudDJcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweFxyXG4gICAgaGVpZ2h0OiA0NDBweFxyXG4gICAgd2lkdGg6IDQwJVxyXG4gICAgY29sb3I6ICRwcmltYXJ5MVxyXG5cclxuICAgIGgxXHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHhcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHggXHJcbiAgICAgICAgZm9udDogMy41ZW0gc2Fucy1zZXJpZiBcclxuXHJcbiAgICAuZmVpbGRcclxuICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgICAgIHdpZHRoOiA4MCVcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgICAgbGVmdDogNTBweFxyXG4gICAgLnN1Ym1pdFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHhcclxuICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5MlxyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50MlxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgICAgIGxlZnQ6IDUwcHhcclxuICAgICAgICB3aWR0aDogODAlXHJcblxyXG4gICAgLmZvcmdldFxyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xNXB4XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2tcclxuICAgICAgICBjb2xvcjogJHByaW1hcnkxXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgICAgbGVmdDogNjQlXHJcblxyXG4gICAgaDRcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuICAgICAgICBjb2xvcjogJHByaW1hcnkyXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgICAgbGVmdDogOSVcclxuXHJcbiAgICAucmVnaXN0ZXJcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgICAgICBsZWZ0OiAzOCUiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.sass']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _service_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zqmd":
/*!**********************************************!*\
  !*** ./src/app/service/gen-moves.service.ts ***!
  \**********************************************/
/*! exports provided: GenMovesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenMovesService", function() { return GenMovesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_defs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/defs.service */ "H736");
/* harmony import */ var _service_game_board_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/game-board.service */ "9a6t");




class GenMovesService {
    constructor(def, board) {
        this.def = def;
        this.board = board;
    }
    MOVE(from, to, capture, promoted, flag) {
        let move = (from | (to << 7) | (capture << 14) | (promoted << 20) | (flag));
        return move;
    }
    AddCaptureMove(move) {
        this.board.moveList[this.board.moveListStart[this.board.ply + 1]] = move;
        this.board.moveScore[this.board.moveListStart[this.board.ply + 1]++] = 0;
    }
    AddQuietMove(move) {
        this.board.moveList[this.board.moveListStart[this.board.ply + 1]] = move;
        this.board.moveScore[this.board.moveListStart[this.board.ply + 1]++] = 0;
        // if(brd_searchKillers[this.board.ply] == move) {	
        //   brd_moveScores[brd_moveListStart[this.board.ply + 1]] = 900000;
        // } else if(brd_searchKillers[MAXDEPTH + this.board.ply] == move) {	
        //   brd_moveScores[brd_moveListStart[this.board.ply + 1]] = 800000;
        // } else {	
        // //   brd_moveScores[brd_moveListStart[this.board.ply + 1]] = brd_searchHistory[ brd_pieces[FROMSQ(move)] * BRD_SQ_NUM + TOSQ(move) ];
        // // }
        // this.board.moveListStart[this.board.ply + 1]++;	
    }
    AddEnPassantMove(move) {
        this.board.moveList[this.board.moveListStart[this.board.ply + 1]] = move;
        this.board.moveScore[this.board.moveListStart[this.board.ply + 1]++] = 0;
    }
    AddWhitePawnCaptureMove(from, to, cap) {
        if (this.def.RanksBrd[from] == this.def.rank.RANK_7) {
            this.AddCaptureMove(this.MOVE(from, to, cap, this.def.piece.wQ, 0));
            this.AddCaptureMove(this.MOVE(from, to, cap, this.def.piece.wR, 0));
            this.AddCaptureMove(this.MOVE(from, to, cap, this.def.piece.wB, 0));
            this.AddCaptureMove(this.MOVE(from, to, cap, this.def.piece.wN, 0));
        }
        else {
            this.AddCaptureMove(this.MOVE(from, to, cap, this.def.piece.EMPTY, 0));
        }
    }
    AddWhitePawnQuietMove(from, to) {
        if (this.def.RanksBrd[from] == this.def.rank.RANK_7) {
            this.AddQuietMove(this.MOVE(from, to, this.def.piece.EMPTY, this.def.piece.wQ, 0));
            this.AddQuietMove(this.MOVE(from, to, this.def.piece.EMPTY, this.def.piece.wR, 0));
            this.AddQuietMove(this.MOVE(from, to, this.def.piece.EMPTY, this.def.piece.wB, 0));
            this.AddQuietMove(this.MOVE(from, to, this.def.piece.EMPTY, this.def.piece.wN, 0));
        }
        else {
            this.AddQuietMove(this.MOVE(from, to, this.def.piece.EMPTY, this.def.piece.EMPTY, 0));
        }
    }
    AddBlackPawnCaptureMove(from, to, cap) {
        if (this.def.RanksBrd[from] == this.def.rank.RANK_2) {
            this.AddCaptureMove(this.MOVE(from, to, cap, this.def.piece.bQ, 0));
            this.AddCaptureMove(this.MOVE(from, to, cap, this.def.piece.bR, 0));
            this.AddCaptureMove(this.MOVE(from, to, cap, this.def.piece.bB, 0));
            this.AddCaptureMove(this.MOVE(from, to, cap, this.def.piece.bN, 0));
        }
        else {
            this.AddCaptureMove(this.MOVE(from, to, cap, this.def.piece.EMPTY, 0));
        }
    }
    AddBlackPawnQuietMove(from, to) {
        if (this.def.RanksBrd[from] == this.def.rank.RANK_2) {
            this.AddQuietMove(this.MOVE(from, to, this.def.piece.EMPTY, this.def.piece.bQ, 0));
            this.AddQuietMove(this.MOVE(from, to, this.def.piece.EMPTY, this.def.piece.bR, 0));
            this.AddQuietMove(this.MOVE(from, to, this.def.piece.EMPTY, this.def.piece.bB, 0));
            this.AddQuietMove(this.MOVE(from, to, this.def.piece.EMPTY, this.def.piece.bN, 0));
        }
        else {
            this.AddQuietMove(this.MOVE(from, to, this.def.piece.EMPTY, this.def.piece.EMPTY, 0));
        }
    }
    GenMoves() {
        this.board.moveListStart[this.board.ply + 1] = this.board.moveListStart[this.board.ply];
        var pceType;
        var pceNo;
        var sq;
        var pceIndex;
        var pce;
        var t_sq;
        var index;
        var dir;
        if (this.board.side == this.def.colour.WHITE) {
            // move white pawn
            pceType = this.def.piece.wP;
            for (pceNo = 0; pceNo < this.board.pceNo[pceType]; ++pceNo) {
                sq = this.board.pList[this.def.PCEINDEX(pceType, pceNo)];
                if (this.board.piece[sq + 10] == this.def.piece.EMPTY) {
                    // regular pawn move 
                    this.AddWhitePawnQuietMove(sq, sq + 10);
                    if (this.def.RanksBrd[sq] == this.def.rank.RANK_2 && this.board.piece[sq + 20] == this.def.piece.EMPTY) {
                        //start pawn move
                        this.AddQuietMove(this.MOVE(sq, (sq + 20), this.def.piece.EMPTY, this.def.piece.EMPTY, this.def.MFLAGPS));
                    }
                }
                if (this.def.SQOFFBOARD(sq + 9) == this.def.BOOL.FALSE && this.def.pceCol[this.board.piece[sq + 9]] == this.def.colour.BLACK) {
                    // white capture move
                    this.AddWhitePawnCaptureMove(sq, sq + 9, this.board.piece[sq + 9]);
                }
                if (this.def.SQOFFBOARD(sq + 11) == this.def.BOOL.FALSE && this.def.pceCol[this.board.piece[sq + 11]] == this.def.colour.BLACK) {
                    // white capture move
                    this.AddWhitePawnCaptureMove(sq, sq + 9, this.board.piece[sq + 11]);
                }
                // // white enPas move   
                if (this.board.enPas != this.def.squares.NO_SQ) {
                    if (sq + 9 == this.board.enPas) {
                        this.AddEnPassantMove(this.MOVE(sq, sq + 9, this.def.piece.EMPTY, this.def.piece.EMPTY, this.def.MFLAGEP));
                    }
                    if (sq + 11 == this.board.enPas) {
                        this.AddEnPassantMove(this.MOVE(sq, sq + 11, this.def.piece.EMPTY, this.def.piece.EMPTY, this.def.MFLAGEP));
                    }
                }
            }
            // // white castel move
            if (this.board.casParm & this.def.casBit.WKCA) {
                if (this.board.piece[this.def.squares.F1] == this.def.piece.EMPTY && this.board.piece[this.def.squares.G1] == this.def.piece.EMPTY) {
                    if (this.board.SqAttacked(this.def.squares.E1, this.def.colour.BLACK) == this.def.BOOL.FALSE && this.board.SqAttacked(this.def.squares.F1, this.def.colour.BLACK) == this.def.BOOL.FALSE) {
                        this.AddQuietMove(this.MOVE(this.def.squares.E1, this.def.squares.G1, this.def.piece.EMPTY, this.def.piece.EMPTY, this.def.MFLAGCA));
                    }
                }
            }
            if (this.board.casParm & this.def.casBit.WQCA) {
                if (this.board.piece[this.def.squares.D1] == this.def.piece.EMPTY && this.board.piece[this.def.squares.C1] == this.def.piece.EMPTY && this.board.piece[this.def.squares.B1] == this.def.piece.EMPTY) {
                    if (this.board.SqAttacked(this.def.squares.E1, this.def.colour.BLACK) == this.def.BOOL.FALSE && this.board.SqAttacked(this.def.squares.D1, this.def.colour.BLACK) == this.def.BOOL.FALSE) {
                        this.AddQuietMove(this.MOVE(this.def.squares.E1, this.def.squares.C1, this.def.piece.EMPTY, this.def.piece.EMPTY, this.def.MFLAGCA));
                    }
                }
            }
            pceType = this.def.piece.wN; // HACK to set for loop other pieces
        }
        else {
            // move black pawn
            pceType = this.def.piece.bP;
            for (pceNo = 0; pceNo < this.board.pceNo[pceType]; pceNo++) {
                sq = this.board.pList[this.def.PCEINDEX(pceType, pceNo)];
                if (this.board.piece[sq - 10] == this.def.piece.EMPTY) {
                    // regular pawn move 
                    this.AddBlackPawnQuietMove(sq, sq - 10);
                    if (this.def.RanksBrd[sq] == this.def.rank.RANK_7 && this.board.piece[sq - 20] == this.def.piece.EMPTY) {
                        //start pawn move
                        this.AddQuietMove(this.MOVE(sq, (sq - 20), this.def.piece.EMPTY, this.def.piece.EMPTY, this.def.MFLAGPS));
                    }
                }
                if (this.def.SQOFFBOARD(sq - 9) == this.def.BOOL.FALSE && this.def.pceCol[this.board.piece[sq - 9]] == this.def.colour.WHITE) {
                    // black capture move
                    this.AddWhitePawnCaptureMove(sq, sq - 9, this.board.piece[sq - 9]);
                }
                if (this.def.SQOFFBOARD(sq - 11) == this.def.BOOL.FALSE && this.def.pceCol[this.board.piece[sq - 11]] == this.def.colour.WHITE) {
                    // black capture move
                    this.AddWhitePawnCaptureMove(sq, sq - 11, this.board.piece[sq - 11]);
                }
                // black enPas move   
                if (this.board.enPas != this.def.squares.NO_SQ) {
                    if (sq - 9 == this.board.enPas) {
                        this.AddEnPassantMove(this.MOVE(sq, sq - 9, this.def.piece.EMPTY, this.def.piece.EMPTY, this.def.MFLAGEP));
                    }
                    if (sq - 11 == this.board.enPas) {
                        this.AddEnPassantMove(this.MOVE(sq, sq - 11, this.def.piece.EMPTY, this.def.piece.EMPTY, this.def.MFLAGEP));
                    }
                }
            }
            // black castel move
            if (this.board.casParm & this.def.casBit.BKCA) {
                if (this.board.piece[this.def.squares.F8] == this.def.piece.EMPTY && this.board.piece[this.def.squares.G8] == this.def.piece.EMPTY) {
                    if (this.board.SqAttacked(this.def.squares.E8, this.def.colour.BLACK) == this.def.BOOL.FALSE && this.board.SqAttacked(this.def.squares.F8, this.def.colour.BLACK) == this.def.BOOL.FALSE) {
                        this.AddQuietMove(this.MOVE(this.def.squares.E8, this.def.squares.G8, this.def.piece.EMPTY, this.def.piece.EMPTY, this.def.MFLAGCA));
                    }
                }
            }
            if (this.board.casParm & this.def.casBit.WQCA) {
                if (this.board.piece[this.def.squares.D1] == this.def.piece.EMPTY && this.board.piece[this.def.squares.C1] == this.def.piece.EMPTY && this.board.piece[this.def.squares.B1] == this.def.piece.EMPTY) {
                    if (this.board.SqAttacked(this.def.squares.E1, this.def.colour.BLACK) == this.def.BOOL.FALSE && this.board.SqAttacked(this.def.squares.D1, this.def.colour.BLACK) == this.def.BOOL.FALSE) {
                        this.AddQuietMove(this.MOVE(this.def.squares.E1, this.def.squares.C1, this.def.piece.EMPTY, this.def.piece.EMPTY, this.def.MFLAGCA));
                    }
                }
            }
            pceType = this.def.piece.bN; // HACK to set for loop other pieces
        }
        pceIndex = this.def.LoopSlideIndex[this.board.side];
        pce = this.def.LoopSlidePce[pceIndex++];
        while (pce != 0) {
            for (pceNo = 0; pceNo < this.board.pceNo[pce]; ++pceNo) {
                sq = this.board.pList[this.def.PCEINDEX(pce, pceNo)];
                for (index = 0; index < this.def.DirNum[pce]; ++index) {
                    dir = this.def.PceDir[pce][index];
                    t_sq = sq + dir;
                    while (this.def.SQOFFBOARD(t_sq) == this.def.BOOL.FALSE) {
                        if (this.board.piece[t_sq] != this.def.piece.EMPTY) {
                            if (this.def.pceCol[this.board.piece[t_sq]] == (this.board.side ^ 1)) {
                                this.AddCaptureMove(this.MOVE(sq, t_sq, this.board.piece[t_sq], this.def.piece.EMPTY, 0));
                            }
                            break;
                        }
                        this.AddQuietMove(this.MOVE(sq, t_sq, this.def.piece.EMPTY, this.def.piece.EMPTY, 0));
                        t_sq += dir;
                    }
                }
            }
            pce = this.def.LoopSlidePce[pceIndex++];
        }
        pceIndex = this.def.LoopNonSlideIndex[this.board.side];
        pce = this.def.LoopNonSlidePce[pceIndex++];
        while (pce != 0) {
            for (pceNo = 0; pceNo < this.board.pceNo[pce]; ++pceNo) {
                sq = this.board.pList[this.def.PCEINDEX(pce, pceNo)];
                for (index = 0; index < this.def.DirNum[pce]; ++index) {
                    dir = this.def.PceDir[pce][index];
                    t_sq = sq + dir;
                    if (this.def.SQOFFBOARD(t_sq) == this.def.BOOL.TRUE) {
                        continue;
                    }
                    if (this.board.piece[t_sq] != this.def.piece.EMPTY) {
                        if (this.def.pceCol[this.board.piece[t_sq]] == (this.board.side ^ 1)) {
                            this.AddCaptureMove(this.MOVE(sq, t_sq, this.board.piece[t_sq], this.def.piece.EMPTY, 0));
                        }
                        continue;
                    }
                    this.AddQuietMove(this.MOVE(sq, t_sq, this.def.piece.EMPTY, this.def.piece.EMPTY, 0));
                }
            }
            pce = this.def.LoopNonSlidePce[pceIndex++];
        }
    }
}
GenMovesService.ɵfac = function GenMovesService_Factory(t) { return new (t || GenMovesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_defs_service__WEBPACK_IMPORTED_MODULE_1__["DefService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_game_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"])); };
GenMovesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GenMovesService, factory: GenMovesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenMovesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _service_defs_service__WEBPACK_IMPORTED_MODULE_1__["DefService"] }, { type: _service_game_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"] }]; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map