(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var map = {
                "./movie/movie.module": "./src/app/movie/movie.module.ts",
                "./user/user.module": "./src/app/user/user.module.ts"
            };
            function webpackAsyncContext(req) {
                return Promise.resolve().then(function () {
                    if (!__webpack_require__.o(map, req)) {
                        var e = new Error("Cannot find module '" + req + "'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    }
                    var id = map[req];
                    return __webpack_require__(id);
                });
            }
            webpackAsyncContext.keys = function webpackAsyncContextKeys() {
                return Object.keys(map);
            };
            webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            module.exports = webpackAsyncContext;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--\n    <netflux-root></netflux-root>\n    <netflux-home></netflux-home>\n    <router-outlet></router-outlet>\n-->\n<!--\n    //Welcome Page\n    //unique nav\n    \n-->\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/browse/browse.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/browse/browse.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<netflux-nav></netflux-nav>\n<section class=\"container-fluid\">  \n    <h2>Action</h2>\n    <div class=\"row\">\n    <div class=\"card\" name=\"movie\" class=\"card thumb col-sm-auto\" *ngFor=\"let movie of list\"\n      (click)=\"getDetails(movie.title)\" >\n      <img [src]=\"movie.imageUrl\" class=\"card-img-top\" [alt]=\"movie.title\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">{{movie.title}}</p>\n      </div>\n    </div>\n  </div>\n</section>\n<hr>\n<section class=\"container-fluid\">  \n  <h2>Drama</h2>\n  <div class=\"row\">\n  <div class=\"card\" name=\"movie\" class=\"card thumb col-sm-auto\" *ngFor=\"let movie of list\"\n    (click)=\"getDetails(movie.title)\" >\n    <img [src]=\"movie.imageUrl\" class=\"card-img-top\" [alt]=\"movie.title\">\n    <div class=\"card-body\">\n      <p class=\"card-text\">{{movie.title}}</p>\n    </div>\n  </div>\n</div>\n</section>\n<hr>\n<section class=\"container-fluid\">  \n  <h2>Comedy</h2>\n  <div class=\"row\">\n  <div class=\"card\" name=\"movie\" class=\"card thumb col-sm-auto\" *ngFor=\"let movie of list\"\n    (click)=\"getDetails(movie.title)\" >\n    <img [src]=\"movie.imageUrl\" class=\"card-img-top\" [alt]=\"movie.title\">\n    <div class=\"card-body\">\n      <p class=\"card-text\">{{movie.title}}</p>\n    </div>\n  </div>\n</div>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <header class=\"container-fluid\">\n  <h1 class=\"\">{{ page.title }}</h1>\n  <em class=\"\">{{ page.tagLine }}</em>\n  <netflux-nav></netflux-nav>\n</header> -->\n<netflux-nav></netflux-nav>\n<section class=\"current container-fluid homeSlider\">\n  <div class=\"bd-example\">\n    <div\n      id=\"carouselExampleCaptions\"\n      class=\"carousel slide\"\n      data-ride=\"carousel\"\n    >\n      <ol class=\"carousel-indicators\">\n        <li\n          data-target=\"#carouselExampleCaptions\"\n          data-slide-to=\"0\"\n          class=\"active\"\n        ></li>\n        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\"></li>\n        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\"></li>\n      </ol>\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img [src]=\"slider.slide1\" class=\"d-block w-100\" alt=\"...\" />\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h5>COMEDY</h5>\n            <p>Break yoh ribs</p>\n          </div>\n        </div>\n        <div class=\"carousel-item\">\n          <img [src]=\"slider.slide2\" class=\"d-block w-100\" alt=\"...\" />\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h5>Drama</h5>\n            <p>Cry your eyes out.</p>\n          </div>\n        </div>\n        <div class=\"carousel-item\">\n          <img [src]=\"slider.slide3\" class=\"d-block w-100\" alt=\"...\" />\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h5>Action</h5>\n            <p>\n              Hold to the edge of your seat.\n            </p>\n          </div>\n        </div>\n      </div>\n      <a\n        class=\"carousel-control-prev\"\n        href=\"#carouselExampleCaptions\"\n        role=\"button\"\n        data-slide=\"prev\"\n      >\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a\n        class=\"carousel-control-next\"\n        href=\"#carouselExampleCaptions\"\n        role=\"button\"\n        data-slide=\"next\"\n      >\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n  </div>\n</section>\n<section class=\"container-fluid movies row\">\n  <p [hidden]=\"true\" class=\"\" ([ngModel])=\"choice\"></p>\n  <div class=\"card\" name=\"movie\" class=\"card thumb col-sm-auto\"\n    *ngFor=\"let movie of list\" (click)=\"getDetails(movie.title)\">\n    <img [src]=\"movie.imageUrl\" class=\"card-img-top\" [alt]=\"movie.title\">\n    <div class=\"card-body\">\n      <p class=\"card-text\">{{movie.title}}</p>\n    </div>\n  </div>\n</section>\n\n<netflux-footer></netflux-footer>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie/movie.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movie/movie.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<netflux-nav></netflux-nav>\n<section class=\"container-fluid\">\n  <div class=\"card mb-3\">\n    <img [src]=\"movieTitle.cover\" class=\"card-img-top\" alt=\"...\">\n    <hr>\n    <h5 class=\"card-title\">{{movieTitle.title}}</h5>\n    <div class=\"card-body container-fluid row\">      \n      <div><img [src]=\"movieTitle.imageUrl\" class=\"col-md\" /></div>\n      <div class=\"container col-md\">\n        <p>releaseYear: {{movieTitle.releaseYear}}</p>\n        <p>duration: {{movieTitle.duration}}</p>\n        <p>rating: {{movieTitle.rating}}</p>\n        <p>genre: {{movieTitle.genre}}</p>\n      </div>\n    </div>\n  </div>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>page-not-found works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"container-fluid \">\n    <div class=\"links\">\n        <ul class=\"social\">\n            <li><a href=\"\"><img src=\"\" alt=\"\">Email</a></li>\n            <li><a href=\"\"><img src=\"\" alt=\"\">Facebook</a></li>\n            <li><a href=\"\"><img src=\"\" alt=\"\">Twitter</a></li>\n        </ul>\n        <small>&copy;Netflux</small>\n    </div>\n</footer>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/nav/nav.component.html": 
        /*!*************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/nav/nav.component.html ***!
          \*************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" href=\"#\">NETFLUX</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/home']\" routerLinkActive=\"active\">Home <span\n            class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\" routerLinkActive=\"active\">Link</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\" routerLinkActive=\"active\">\n          Genre\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Drama</a>\n          <a class=\"dropdown-item\" href=\"#\">Sci-Fi</a>\n          <a class=\"dropdown-item\" href=\"#\">Documentary</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0 \" (ngSubmit)=\"searchMovie(searchTerm)\">\n      <div class=\"searchForm\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" name=\"searchTerm\"\n          [(ngModel)]=\"searchTerm\" />\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </div>\n    </form>\n    <div class=\"nav-item user\">\n      <li *ngIf=\"!this.userService.isAuthenticated\"><a class=\"nav-item btn btn-primary\" [routerLink]=\"['/log-in']\">Log\n          In</a>\n      </li>\n      <li *ngIf=\"this.userService.isAuthenticated\" class=\"nav-item nav-link dropdown\">\n        <a class=\"nav-link  username dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\" routerLinkActive=\"active\">\n          Hello {{this.userService.loggedInUser}}\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/profile']\">Edit Profile</a>\n          <a class=\"dropdown-item\" href=\"#\">Change Plan</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"logOut()\">Sign Out</a>\n        </div>\n      </li>\n    </div>\n  </div>\n</nav>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/favourites/favourites.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/favourites/favourites.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container-fluid\">\n  <h2>My Favourites</h2>\n  <button (click)=\"fetchMovies()\" class=\"btn btn-primary\">click</button>\n  <div class=\"row\">\n    <div class=\"card\" name=\"movie\" class=\"card thumb col-sm-auto\" *ngFor=\"let movie of list\"\n      (click)=\"getDetails(movie.title)\">\n      <img [src]=\"movie.imageUrl\" class=\"card-img-top\" [alt]=\"movie.title\">\n      <div class=\"card-body\">\n      </div>\n    </div>\n  </div>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/log-in/log-in.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/log-in/log-in.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container logForm\">\n  <h1>Log in</h1>\n  <form #logForm=\"ngForm\" (ngSubmit)=\"onSubmit(logForm)\">\n    <div class=\"form-group col-sm-6\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"log.email\" required\n        aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n      <p *ngIf=\"logForm.controls.email?.invalid && logForm.controls.email?.touched\" class=\"alert-danger alert\">This\n        is\n        not a valid email</p>\n    </div>\n    <div class=\"form-group col-sm-6\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" name=\"password\"\n        [(ngModel)]=\"log.password\" required>\n      <p *ngIf=\"logForm.controls.password?.invalid && logForm.controls.password?.touched\" class=\"alert alert-danger\">\n        This field is required</p>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"logForm.invalid\">Log In</button>\n    <button type=\"\" class=\"btn btn-primary\" [routerLink]=\"['/sign-up']\">Sign Up</button>\n  </form>\n  {{log | json}}\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/user.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/user.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<netflux-nav></netflux-nav>\n\n<section class=\"signUp\">\n  <form #profileForm=\"ngForm\" class=\"container-fluid\">\n    <h1 class=\"\">Edit Profile</h1>\n    <div class=\"form-row col-md-auto name form-group\">\n      <div class=\"nameGroup col-sm-auto\">\n        <label for=\"firstName\">First name</label>\n        <input type=\"text\" class=\"form-control \" id=\"firstName\" name=\"firstName\" placeholder=\"First name\" required\n          [(ngModel)]=\"currentUser.firstName\" #firstName=\"ngModel\"\n          [ngClass]=\"{'is-invalid': profileForm.controls.firstName?.invalid && profileForm.controls.firstName?.touched }\" />\n        <div *ngIf=\"profileForm.controls.firstName?.invalid && profileForm.controls.firstName?.touched\"\n          class=\"alert alert-danger\">\n          Please fill in appropriately\n        </div>\n      </div>\n      <div class=\"nameGroup col-sm-auto\">\n        <label for=\"lastName\">Last name</label>\n        <input type=\"text\" class=\"form-control\"\n          [ngClass]=\"{'is-invalid': profileForm.controls.lastName?.invalid && profileForm.controls.lastName?.touched }\"\n          id=\"lastName\" name=\"lastName\" placeholder=\"Last name\" value=\"\" required [(ngModel)]=\"currentUser.lastName\" />\n        <div *ngIf=\"profileForm.controls.lastName?.invalid && profileForm.controls.lastName?.touched\"\n          class=\"alert alert-danger\">\n          Please fill in appropriately\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group col-sm-auto col-sm-4\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"name@example.com\"\n        [(ngModel)]=\"currentUser.email\"\n        [ngClass]=\"{'is-invalid': profileForm.controls.email?.invalid && profileForm.controls.email?.touched }\"\n        required />\n      <p *ngIf=\"profileForm.controls.email?.invalid && profileForm.controls.email?.touched\" class=\"alert alert-danger\">\n        Please fill in appropriately</p>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"passwords\">\n        <div class=\"col-sm-4\">\n          <label for=\"password\">Current Password</label>\n          <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" name=\"password\"\n            [(ngModel)]=\"currentUser.password\" required>\n          <p *ngIf=\"profileForm.controls.password?.invalid && profileForm.controls.password?.touched\"\n            class=\"alert alert-danger\">\n            This field is required</p>\n        </div>\n        <button class=\"changePassword\" type=\"\" (click)=\"editProfile()\">Edit Profile</button>\n      </div>\n    </div>\n    <div class=\"newPasswords form-group\" [hidden]=\"editProfile()\">\n      <div class=\"form-group col-sm-4\">\n        <label for=\"password\">New Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"newPassword\" placeholder=\"New Password\" name=\"newPassworrd\"\n          required>\n        <p *ngIf=\"profileForm.controls.newPassword?.invalid && profileForm.controls.newPassword?.touched\"\n          class=\"alert alert-danger\">\n          This field is required</p>\n      </div>\n      <div class=\"form-group col-sm-4\">\n        <label for=\"confirmPassword\">Confirm Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" placeholder=\"Confirm Password\"\n          name=\"confirmPassword\" (change)=\"confirmPassword(confirmField)\" [(ngModel)]=\"currentUser.confirmPassword\"\n          #confirmField required>\n        <p *ngIf=\"profileForm.controls.confirmPassword?.invalid && profileForm.controls.confirmPassword?.touched\"\n          class=\"alert alert-danger\">\n          Does not match new password</p>\n      </div>\n    </div>\n    <button class=\"btn btn-primary\" type=\"submit\" (click)=\"saveChanges()\">Save</button>\n    <button class=\"btn btn-primary\" type=\"reset\" [routerLink]=\"['/home']\" (click)=\"cancelSignUp()\">Cancel</button>\n  </form>\n  <!-- {{profileForm.value | json}} -->\n  <hr>\n  <netflux-favourites></netflux-favourites>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/sign-up/sign-up.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/sign-up/sign-up.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"signUp\">\n\n  <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\" class=\"container-fluid\">\n    <h1 class=\"\">Sign Up</h1>\n    <div class=\"form-row col-md-auto name form-group\">\n      <div class=\"nameGroup col-sm-auto\">\n        <label for=\"firstName\">First name</label>\n        <input type=\"text\" class=\"form-control \" id=\"firstName\" name=\"firstName\" placeholder=\"First name\" required\n          [(ngModel)]=\"userDetails.firstName\" #firstName=\"ngModel\"\n          [ngClass]=\"{'is-invalid': form.controls.firstName?.invalid && form.controls.firstName?.touched }\" />\n        <div *ngIf=\"form.controls.firstName?.invalid && form.controls.firstName?.touched\" class=\"alert alert-danger\">\n          Please fill in appropriately\n        </div>\n      </div>\n      <div class=\"nameGroup col-sm-auto\">\n        <label for=\"lastName\">Last name</label>\n        <input type=\"text\" class=\"form-control\"\n          [ngClass]=\"{'is-invalid': form.controls.lastName?.invalid && form.controls.lastName?.touched }\" id=\"lastName\"\n          name=\"lastName\" placeholder=\"Last name\" value=\"\" required [(ngModel)]=\"userDetails.lastName\" />\n        <div *ngIf=\"form.controls.lastName?.invalid && form.controls.lastName?.touched\" class=\"alert alert-danger\">\n          Please fill in appropriately\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group col-sm-auto col-sm-4\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"name@example.com\"\n        [(ngModel)]=\"userDetails.email\"\n        [ngClass]=\"{'is-invalid': form.controls.email?.invalid && form.controls.email?.touched }\" required />\n      <p *ngIf=\"form.controls.email?.invalid && form.controls.email?.touched\" class=\"alert alert-danger\">Please fill in\n        appropriately</p>\n    </div>\n    <div class=\"form-group col-sm-4\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" name=\"password\"\n        [(ngModel)]=\"userDetails.password\" required>\n      <p *ngIf=\"form.controls.password?.invalid && form.controls.password?.touched\" class=\"alert alert-danger\">\n        This field is required</p>\n    </div>\n    <div class=\"form-group col-sm-4\">\n        <label for=\"confirmPassword\">Confirm Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" placeholder=\"Confirm Password\" name=\"confirmPassword\"\n          (change)=\"confirmPassword(confirmField)\" [(ngModel)]=\"userDetails.confirmPassword\" #confirmField required>\n        <p *ngIf=\"form.controls.confirmPassword?.invalid && form.controls.confirmPassword?.touched\" class=\"alert alert-danger\">\n          Does not match password</p>\n      </div>\n\n    <!-- <div class=\"form-group plan\">\n      <label for=\"subscription\">Select Plan</label>\n      <select multiple class=\"form-control\" id=\"subscription\" name=\"subscription\"\n        [(ngModel)]=\"userDetails.subscription\">\n        <option>1</option>\n        <option>2</option>\n        <option>3</option>\n        <option>4</option>\n        <option>5</option>\n      </select>\n    </div> -->\n    <div class=\"form-group col-sm-auto\">\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"checkbox\" id=\"tnC\" name=\"tnC\" [(ngModel)]=\"userDetails.tnC\" #tnC=\"ngModel\"\n          required [ngClass]=\"{'invalid': tnC.invalid && tnC.touched}\" />\n        <label class=\"form-check-label\" for=\"tnC\">\n          Agree to terms and conditions\n        </label>\n        <div class=\"invalid-feedback\" *ngIf=\"userDetails?.tnC !== true && tnC?.isDirty\">\n          You must agree before submitting.\n        </div>\n      </div>\n    </div>\n    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"form.invalid\">Submit form</button>\n    <button class=\"btn btn-primary\" type=\"reset\" [routerLink]=\"['/welcome']\" (click)=\"cancelSignUp()\">Cancel</button>\n  </form>\n  {{userDetails | json}}\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary m-x-1\">\n  <a class=\"navbar-brand\" href=\"#\">NETFLUX</a>\n  <div class=\"welcomeBtn my-2 my-lg-0 \">\n    <button class=\"btn btn-primary\" [routerLink]=\"['/sign-up']\">Sign Up</button>\n    <button class=\"btn btn-primary\" [routerLink]=\"['/log-in']\">Log In</button>\n  </div>\n</nav>\n\n<section class=\"welcome\">\n  <div class=\"card bg-dark text-black\">\n    <img [src]=\"coverImages.head\" class=\"card-img coverImage\" alt=\"...\">\n    <div class=\"card-img-overlay coverText\">\n      <h5 class=\"card-title\">Card title</h5>\n      <p class=\"card-text\">Sign Up now and get to Enjoy endless hours of your favourite tv shows</p>\n    </div>\n  </div>\n</section>\n<section class=\"genres container\">\n  <h2>What We Have</h2>\n  <div class=\"bd-example\">\n    <div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-ride=\"carousel\">\n      <ol class=\"carousel-indicators\">\n        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\"></li>\n        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\"></li>\n      </ol>\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img [src]=\"coverImages.comedy\" class=\"d-block w-100\" alt=\"...\" />\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h5>COMEDY</h5>\n            <p>Break yoh ribs</p>\n          </div>\n        </div>\n        <div class=\"carousel-item\">\n          <img [src]=\"coverImages.drama\" class=\"d-block w-100\" alt=\"...\" />\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h5>Drama</h5>\n            <p>Cry your eyes out.</p>\n          </div>\n        </div>\n        <div class=\"carousel-item\">\n          <img [src]=\"coverImages.action\" class=\"d-block w-100\" alt=\"...\" />\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h5>Action</h5>\n            <p>\n              Hold to the edge of your seat.\n            </p>\n          </div>\n        </div>\n      </div>\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n  </div>\n</section>\n<section class=\"niche container-fluid\">\n  <h2>Benefits</h2>\n  <div id=\"carouselExampleSlidesOnly\" class=\"carousel slide nicheSlide col-md-auto\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img [src]=\"coverImages.niche1\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n      <div class=\"carousel-item\">\n        <img [src]=\"coverImages.niche1\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n      <div class=\"carousel-item\">\n        <img [src]=\"coverImages.niche1\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n    </div>\n  </div>\n  <div id=\"carouselExampleSlidesOnly\" class=\"carousel slide nicheSlide col-md-auto\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img [src]=\"coverImages.niche1\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n      <div class=\"carousel-item\">\n        <img [src]=\"coverImages.niche1\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n      <div class=\"carousel-item\">\n        <img [src]=\"coverImages.niche1\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n    </div>\n  </div>\n  <div id=\"carouselExampleSlidesOnly\" class=\"carousel slide nicheSlide col-md-auto\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img [src]=\"coverImages.niche1\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n      <div class=\"carousel-item\">\n        <img [src]=\"coverImages.niche1\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n      <div class=\"carousel-item\">\n        <img [src]=\"coverImages.niche1\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n    </div>\n  </div>\n</section>\n<netflux-footer>\n  <netflux-footer>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
            /* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
            /* harmony import */ var _browse_browse_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./browse/browse.component */ "./src/app/browse/browse.component.ts");
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                            { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"] },
                            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                            { path: 'browse', component: _browse_browse_component__WEBPACK_IMPORTED_MODULE_6__["BrowseComponent"] },
                            { path: 'browse/:category', component: _browse_browse_component__WEBPACK_IMPORTED_MODULE_6__["BrowseComponent"] },
                            { path: '', redirectTo: 'home', pathMatch: 'full' },
                            { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] },
                            // lazy loading below not functional
                            { path: 'movie', loadChildren: './movie/movie.module#MovieModule' },
                            { path: 'user', loadChildren: './user/user.module#UserModule' }
                        ])],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'netflux';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'netflux-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _user_profile_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/profile/user.component */ "./src/app/user/profile/user.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
            /* harmony import */ var _browse_browse_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./browse/browse.component */ "./src/app/browse/browse.component.ts");
            /* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/nav/nav.component */ "./src/app/shared/nav/nav.component.ts");
            /* harmony import */ var _user_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/log-in/log-in.component */ "./src/app/user/log-in/log-in.component.ts");
            /* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./movie/movie.component */ "./src/app/movie/movie.component.ts");
            /* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
            /* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
            /* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
            /* harmony import */ var _movie_movie_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./movie/movie.module */ "./src/app/movie/movie.module.ts");
            /* harmony import */ var _movie_movie_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./movie/movie.service */ "./src/app/movie/movie.service.ts");
            /* harmony import */ var _user_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/favourites/favourites.component */ "./src/app/user/favourites/favourites.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _user_profile_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                        _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                        _browse_browse_component__WEBPACK_IMPORTED_MODULE_9__["BrowseComponent"],
                        _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"],
                        _user_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_11__["LogInComponent"],
                        _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__["SignUpComponent"],
                        _movie_movie_component__WEBPACK_IMPORTED_MODULE_14__["MovieComponent"],
                        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"],
                        _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_16__["WelcomeComponent"],
                        _user_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_20__["FavouritesComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _user_user_module__WEBPACK_IMPORTED_MODULE_17__["UserModule"],
                        _movie_movie_module__WEBPACK_IMPORTED_MODULE_18__["MovieModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    ],
                    providers: [_movie_movie_service__WEBPACK_IMPORTED_MODULE_19__["MovieService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/browse/browse.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/browse/browse.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".thumb {\r\n    max-height: auto;\r\n    max-width: 9rem;\r\n    margin: 0.5em;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJvd3NlL2Jyb3dzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhOztBQUVqQiIsImZpbGUiOiJzcmMvYXBwL2Jyb3dzZS9icm93c2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aHVtYiB7XHJcbiAgICBtYXgtaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA5cmVtO1xyXG4gICAgbWFyZ2luOiAwLjVlbTtcclxuICAgIFxyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/browse/browse.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/browse/browse.component.ts ***!
          \********************************************/
        /*! exports provided: BrowseComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseComponent", function () { return BrowseComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _movie_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie/movie.service */ "./src/app/movie/movie.service.ts");
            var BrowseComponent = /** @class */ (function () {
                function BrowseComponent(movieService, route, router) {
                    this.movieService = movieService;
                    this.route = route;
                    this.router = router;
                    this.list = this.movieService.getMovies();
                }
                BrowseComponent.prototype.getDetails = function (title) {
                    this.isSelected = title;
                    console.log(this.isSelected);
                    this.router.navigate(['/movie', this.isSelected]);
                };
                // @Input () filteredy: string;
                BrowseComponent.prototype.ngOnInit = function () {
                    // this.list = this.movieService.getMovies(+this.route.snapshot.paramMap.get('id'));
                    // const title = +this.route.snapshot.paramMap.get('id');
                };
                return BrowseComponent;
            }());
            BrowseComponent.ctorParameters = function () { return [
                { type: _movie_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            BrowseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'netflux-browse',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./browse.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/browse/browse.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./browse.component.css */ "./src/app/browse/browse.component.css")).default]
                })
            ], BrowseComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/home/home.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("header {\r\n  text-align: center;\r\n}\r\n\r\n.welcome {\r\n  bottom: 10px;\r\n}\r\n\r\n.thumb {\r\n  max-height: auto;\r\n  max-width: 10rem;\r\n  margin: 0.5em;\r\n}\r\n\r\n.carousel-item img {\r\n  max-height: 560px;\r\n}\r\n\r\n.movies {\r\n  margin: 20px 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi53ZWxjb21lIHtcclxuICBib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi50aHVtYiB7XHJcbiAgbWF4LWhlaWdodDogYXV0bztcclxuICBtYXgtd2lkdGg6IDEwcmVtO1xyXG4gIG1hcmdpbjogMC41ZW07XHJcbn1cclxuLmNhcm91c2VsLWl0ZW0gaW1nIHtcclxuICBtYXgtaGVpZ2h0OiA1NjBweDtcclxufVxyXG4ubW92aWVzIHtcclxuICBtYXJnaW46IDIwcHggMHB4O1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _movie_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie/movie.service */ "./src/app/movie/movie.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(movieService, route, router) {
                    this.movieService = movieService;
                    this.route = route;
                    this.router = router;
                    this.slider = {
                        slide1: 'assets/farFromHomeC1.jpg',
                        slide2: 'assets/infinityWarC.jpg',
                        slide3: 'assets/shazamC.jpg'
                    };
                    this.list = this.movieService.getMovies();
                    // this.route.snapshot.params
                }
                HomeComponent.prototype.getDetails = function (title) {
                    this.isSelected = title;
                    console.log(this.isSelected);
                    this.router.navigate(['/movie', this.isSelected]);
                };
                HomeComponent.prototype.ngOnInit = function () {
                    // this.movieTitle = this.movieService.getMovie(1);
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _movie_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'netflux-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/movie/movie.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/movie/movie.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".movieDetails > div {\r\n    display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUvbW92aWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL21vdmllL21vdmllLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW92aWVEZXRhaWxzID4gZGl2IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/movie/movie.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/movie/movie.component.ts ***!
          \******************************************/
        /*! exports provided: MovieComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function () { return MovieComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie.service */ "./src/app/movie/movie.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var MovieComponent = /** @class */ (function () {
                function MovieComponent(movieService, route) {
                    this.movieService = movieService;
                    this.route = route;
                    this.movieTitle = this.movieService.getMovie(this.route.snapshot.params['title']);
                    //hard codded 
                    this.moviesList = this.movieService.getMovies();
                }
                MovieComponent.prototype.ngOnInit = function () {
                };
                MovieComponent.prototype.getMovies = function () {
                    return this.moviesList;
                };
                return MovieComponent;
            }());
            MovieComponent.ctorParameters = function () { return [
                { type: _movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            MovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'netflux-movie',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie/movie.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie.component.css */ "./src/app/movie/movie.component.css")).default]
                })
            ], MovieComponent);
            /***/ 
        }),
        /***/ "./src/app/movie/movie.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/movie/movie.module.ts ***!
          \***************************************/
        /*! exports provided: MovieModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieModule", function () { return MovieModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _movie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie.component */ "./src/app/movie/movie.component.ts");
            var MovieModule = /** @class */ (function () {
                function MovieModule() {
                }
                return MovieModule;
            }());
            MovieModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                            { path: 'movie/:title', component: _movie_component__WEBPACK_IMPORTED_MODULE_4__["MovieComponent"] },
                            { path: 'movie', component: _movie_component__WEBPACK_IMPORTED_MODULE_4__["MovieComponent"] },
                            { path: 'movie/:name/watch', component: _movie_component__WEBPACK_IMPORTED_MODULE_4__["MovieComponent"] }
                        ])
                    ]
                })
            ], MovieModule);
            /***/ 
        }),
        /***/ "./src/app/movie/movie.service.ts": 
        /*!****************************************!*\
          !*** ./src/app/movie/movie.service.ts ***!
          \****************************************/
        /*! exports provided: MovieService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function () { return MovieService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var MovieService = /** @class */ (function () {
                function MovieService() {
                }
                MovieService.prototype.getMovies = function () {
                    return MOVIES;
                };
                // get genres
                MovieService.prototype.getComedy = function () {
                    return MOVIES.find(function (comedy) {
                        return comedy.genre === 'comedy';
                    });
                };
                MovieService.prototype.getDrama = function () {
                    return MOVIES.find(function (drama) {
                        return drama.genre === 'drama';
                    });
                };
                MovieService.prototype.getAction = function () {
                    return MOVIES.find(function (action) {
                        return action.genre === 'action';
                    });
                };
                MovieService.prototype.getMovie = function (choice) {
                    return MOVIES.find(function (movie) { return movie.title === choice; });
                };
                MovieService.prototype.searchMovies = function (searchTerm) {
                    // let term = searchTerm.toLocaleLowerCase();
                    // let results: MovieInterface[] = [];
                    // MOVIES.forEach( movie => {
                    //   let matchingMovies = movie.title.toLocaleLowerCase().indexOf(term) > -1;
                    //   matchingMovies = matchingMovies.map( (event: any) => {
                    //     event.movieTitle = movie.title;
                    //     return movie;
                    //   })
                    // })
                };
                return MovieService;
            }());
            MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], MovieService);
            var MOVIES = [
                {
                    id: 1,
                    title: 'Spiderman (into the spiderverse)',
                    releaseYear: '2019',
                    duration: '2.1h',
                    rating: '7 / 10',
                    genre: 'Action',
                    director: '',
                    writer: '',
                    Actors: [],
                    plot: '',
                    awards: '',
                    imageUrl: '/assets/intoTheSpiderverse.jpg',
                    cover: '/assets/intoTheSpiderverseC.jpg'
                },
                {
                    id: 2,
                    title: 'Spiderman (Far from home)',
                    releaseYear: '2019',
                    duration: '2.1h',
                    rating: '8 / 10',
                    genre: 'Thriller',
                    director: '',
                    writer: '',
                    Actors: [],
                    plot: '',
                    awards: '',
                    imageUrl: '/assets/farFromHome.jpg',
                    cover: '/assets/farFromHomeC1.jpg'
                },
                {
                    id: 3,
                    title: 'John Wick 3 (Parabelum)',
                    releaseYear: '2019',
                    duration: '1.8h',
                    rating: '6 / 10',
                    genre: 'Action',
                    director: '',
                    writer: '',
                    Actors: [],
                    plot: '',
                    awards: '',
                    imageUrl: '/assets/johnWick.jpg',
                    cover: '/assets/johnWickC.jpg'
                },
                {
                    id: 4,
                    title: 'The Sectret Life Of Pets 2',
                    releaseYear: '2016-2019',
                    duration: '9.2 h',
                    rating: '6 / 10',
                    genre: 'Drama',
                    director: '',
                    writer: '',
                    Actors: [],
                    plot: '',
                    awards: '',
                    imageUrl: '/assets/lifePets.jpg',
                    cover: '/assets/lifePetsC.jpg'
                },
                {
                    id: 5,
                    title: 'Captain Marvel',
                    releaseYear: '2018',
                    duration: '2 h',
                    rating: '7 / 10',
                    genre: 'Action',
                    director: '',
                    writer: '',
                    Actors: [],
                    plot: '',
                    awards: '',
                    imageUrl: '/assets/captainMarvel.jpg',
                    cover: '/assets/captainMarvelC.jpg'
                },
                {
                    id: 6,
                    title: 'Minions',
                    releaseYear: '2019',
                    duration: '2.1h',
                    rating: '7 / 10',
                    genre: 'Comedy',
                    director: '',
                    writer: '',
                    Actors: [],
                    plot: '',
                    awards: '',
                    imageUrl: '/assets/minions.jpg',
                    cover: '/assets/minionsC.jpg'
                },
                {
                    id: 7,
                    title: 'Girls Trip',
                    releaseYear: '2017',
                    duration: '2.1h',
                    rating: '7 / 10',
                    genre: 'Comedy',
                    director: '',
                    writer: '',
                    Actors: [],
                    plot: '',
                    awards: '',
                    imageUrl: '/assets/girlsTrip.jpg',
                    cover: '/assets/girlsTripC.jpg'
                },
                {
                    id: 8,
                    title: 'Black Panther',
                    releaseYear: '2019',
                    duration: '2.1h',
                    rating: '7 / 10',
                    genre: 'Action',
                    director: '',
                    writer: '',
                    Actors: [],
                    plot: '',
                    awards: '',
                    imageUrl: '/assets/blackPanther.jpg',
                    cover: '/assets/blackPantherC.jpg'
                },
                {
                    id: 9,
                    title: 'Hobbs and Shaw',
                    releaseYear: '2019',
                    duration: '2.1h',
                    rating: '7 / 10',
                    genre: 'Comedy',
                    director: '',
                    writer: '',
                    Actors: [],
                    plot: '',
                    awards: '',
                    imageUrl: '/assets/hobbsShaw.jpg',
                    cover: '/assets/hobbsShawC.jpg'
                },
                {
                    id: 10,
                    title: 'The Lion King',
                    releaseYear: '2019',
                    duration: '2.1h',
                    rating: '7 / 10',
                    genre: 'Drama',
                    director: '',
                    writer: '',
                    Actors: [],
                    plot: '',
                    awards: '',
                    imageUrl: '/assets/lionKing.jpg',
                    cover: '/assets/lionKingC.jpg'
                },
                {
                    id: 11,
                    title: 'Terminator Salvation',
                    releaseYear: '2019',
                    duration: '2.1h',
                    rating: '8 / 10',
                    genre: 'Action',
                    director: '',
                    writer: '',
                    Actors: [],
                    plot: '',
                    awards: '',
                    imageUrl: '/assets/terminatorSalvation.jpg',
                    cover: '/assets/terminatorSalvationC.jpg'
                },
                {
                    id: 12,
                    title: 'Toy Story 4',
                    releaseYear: '2019',
                    duration: '2.1h',
                    rating: '8 / 10',
                    genre: 'Drama',
                    director: '',
                    writer: '',
                    Actors: [],
                    plot: '',
                    awards: '',
                    imageUrl: '/assets/toyStory4.jpg',
                    cover: '/assets/toyStory4C.jpg'
                },
                {
                    id: 13,
                    title: 'Suicide Squad',
                    releaseYear: '2016',
                    duration: '2.1h',
                    rating: '6 / 10',
                    genre: 'Action',
                    director: '',
                    writer: '',
                    Actors: [],
                    plot: '',
                    awards: '',
                    imageUrl: '/assets/suicideSquad.jpg',
                    cover: '/assets/suicideSquadC.jpg'
                },
                {
                    id: 14,
                    title: 'Avengers(Infinity War)',
                    releaseYear: '2016- 2019',
                    duration: '5h',
                    rating: '8 / 10',
                    genre: 'Action',
                    director: '',
                    writer: '',
                    Actors: [],
                    plot: '',
                    awards: '',
                    imageUrl: '/assets/infinityWar.jpg',
                    cover: '/assets/infinityWarC.jpg'
                }
            ];
            /***/ 
        }),
        /***/ "./src/app/page-not-found/page-not-found.component.css": 
        /*!*************************************************************!*\
          !*** ./src/app/page-not-found/page-not-found.component.css ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/page-not-found/page-not-found.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/page-not-found/page-not-found.component.ts ***!
          \************************************************************/
        /*! exports provided: PageNotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () { return PageNotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PageNotFoundComponent = /** @class */ (function () {
                function PageNotFoundComponent() {
                }
                PageNotFoundComponent.prototype.ngOnInit = function () {
                };
                return PageNotFoundComponent;
            }());
            PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'netflux-page-not-found',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")).default]
                })
            ], PageNotFoundComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/footer/footer.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/shared/footer/footer.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".social li,\r\n.social a {\r\n    text-decoration: none;\r\n    text-align: center;\r\n    display: inline-block;\r\n    margin:5px;\r\n}\r\nfooter {\r\n    background: gray ;\r\n    text-align: center;\r\n}\r\n.links {\r\n    margin: 0 auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvY2lhbCBsaSxcclxuLnNvY2lhbCBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjo1cHg7XHJcbn1cclxuZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IGdyYXkgO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5saW5rcyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/shared/footer/footer.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/shared/footer/footer.component.ts ***!
          \***************************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                    this.netflux = {
                        email: 'customer@netflux.com',
                        facebook: 'Netflux',
                        twitter: 'netflux',
                        faq: '',
                    };
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'netflux-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/nav/nav.component.css": 
        /*!**********************************************!*\
          !*** ./src/app/shared/nav/nav.component.css ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("li>a .active {\r\n  color: orange;\r\n}\r\n\r\nli {\r\n  text-decoration: none;\r\n}\r\n\r\n.searchForm {\r\n  margin: 0 auto;\r\n}\r\n\r\n.searchForm button {\r\n  color: ghostwhite;\r\n  background: #4f5250;\r\n}\r\n\r\n.username {\r\n  color: honeydew;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdi9uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaT5hIC5hY3RpdmUge1xyXG4gIGNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbmxpIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2hGb3JtIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnNlYXJjaEZvcm0gYnV0dG9uIHtcclxuICBjb2xvcjogZ2hvc3R3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiAjNGY1MjUwO1xyXG59XHJcblxyXG4udXNlcm5hbWUge1xyXG4gIGNvbG9yOiBob25leWRldztcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/shared/nav/nav.component.ts": 
        /*!*********************************************!*\
          !*** ./src/app/shared/nav/nav.component.ts ***!
          \*********************************************/
        /*! exports provided: NavComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function () { return NavComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user/user.service */ "./src/app/user/user.service.ts");
            /* harmony import */ var src_app_movie_movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/movie/movie.service */ "./src/app/movie/movie.service.ts");
            var NavComponent = /** @class */ (function () {
                function NavComponent(router, userService, movieService) {
                    this.router = router;
                    this.userService = userService;
                    this.movieService = movieService;
                }
                NavComponent.prototype.searchMovie = function (searchTerm) {
                    // this.movieService.searchMovies(this.searchTerm).subscribe(
                    //   movies => {
                    //   this.foundMovies = movies;
                    //     console.log(this.foundMovies);
                    //   });
                    console.log('ok searching');
                };
                NavComponent.prototype.ngOnInit = function () {
                };
                NavComponent.prototype.logOut = function () {
                    this.router.navigateByUrl('/welcome');
                    this.userService.isAuthenticated = false;
                    console.log('I work!');
                };
                return NavComponent;
            }());
            NavComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: src_app_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: src_app_movie_movie_service__WEBPACK_IMPORTED_MODULE_4__["MovieService"] }
            ]; };
            NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'netflux-nav',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/nav/nav.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/shared/nav/nav.component.css")).default]
                })
            ], NavComponent);
            /***/ 
        }),
        /***/ "./src/app/user/favourites/favourites.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/user/favourites/favourites.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZmF2b3VyaXRlcy9mYXZvdXJpdGVzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/user/favourites/favourites.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/user/favourites/favourites.component.ts ***!
          \*********************************************************/
        /*! exports provided: FavouritesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesComponent", function () { return FavouritesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
            /* harmony import */ var src_app_movie_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/movie/movie.service */ "./src/app/movie/movie.service.ts");
            var FavouritesComponent = /** @class */ (function () {
                function FavouritesComponent(userService, movieService) {
                    this.userService = userService;
                    this.movieService = movieService;
                    // change user reffernce to * this.userService.loggedInUser.favourites;
                    // user = this.userService.loggedInUser;
                    this.titles = this.userService.getUser('billy@x.com').favourites;
                }
                FavouritesComponent.prototype.fetchMovies = function () {
                    for (var _i = 0, _a = this.titles; _i < _a.length; _i++) {
                        var i = _a[_i];
                        this.movie = this.movieService.getMovie(this.titles[i]);
                        // console.log(this.movie)
                        // this.list.push(this.movie);
                        // return this.list;
                        console.log(this.list);
                    }
                    // console.log(this.fetchMovies);
                    console.log(this.titles);
                };
                FavouritesComponent.prototype.ngOnInit = function () {
                };
                return FavouritesComponent;
            }());
            FavouritesComponent.ctorParameters = function () { return [
                { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: src_app_movie_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] }
            ]; };
            FavouritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'netflux-favourites',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favourites.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/favourites/favourites.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favourites.component.css */ "./src/app/user/favourites/favourites.component.css")).default]
                })
            ], FavouritesComponent);
            /***/ 
        }),
        /***/ "./src/app/user/log-in/log-in.component.css": 
        /*!**************************************************!*\
          !*** ./src/app/user/log-in/log-in.component.css ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("button {\r\n  margin: 0 5px;\r\n}\r\n\r\n.logForm {\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC91c2VyL2xvZy1pbi9sb2ctaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwIDVweDtcclxufVxyXG5cclxuLmxvZ0Zvcm0ge1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/user/log-in/log-in.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/user/log-in/log-in.component.ts ***!
          \*************************************************/
        /*! exports provided: LogInComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function () { return LogInComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
            //import (AuthService) from './auth/service';
            var LogInComponent = /** @class */ (function () {
                //private authService: AuthService
                function LogInComponent(router, userService) {
                    this.router = router;
                    this.userService = userService;
                    this.log = {
                        email: null,
                        password: null
                    };
                }
                LogInComponent.prototype.ngOnInit = function () {
                };
                LogInComponent.prototype.logIn = function () {
                    this.userService.logInUser(this.log.email, this.log.password);
                };
                LogInComponent.prototype.onSubmit = function (logForm) {
                    this.logIn();
                    //console.log(this.log);
                    this.userService.isAuthenticated ? this.router.navigate(['/home']) : console.log('invalid user');
                };
                return LogInComponent;
            }());
            LogInComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
            ]; };
            LogInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'netflux-log-in',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./log-in.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/log-in/log-in.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./log-in.component.css */ "./src/app/user/log-in/log-in.component.css")).default]
                })
            ], LogInComponent);
            /***/ 
        }),
        /***/ "./src/app/user/profile/user.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/user/profile/user.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".changePassword {\r\n    bottom: 0;\r\n    background: rgb(109, 115, 209);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcm9maWxlL3VzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC91c2VyL3Byb2ZpbGUvdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYW5nZVBhc3N3b3JkIHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxMDksIDExNSwgMjA5KTtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/user/profile/user.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/user/profile/user.component.ts ***!
          \************************************************/
        /*! exports provided: UserComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function () { return UserComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
            var UserComponent = /** @class */ (function () {
                function UserComponent(userService) {
                    this.userService = userService;
                    this.makeChanges = false;
                    this.currentUser = this.userService.getUser('billy@x.com');
                }
                UserComponent.prototype.saveChanges = function () {
                    console.log('changes saved');
                };
                UserComponent.prototype.editProfile = function () {
                    return this.makeChanges = true;
                };
                // update to validate against new password
                UserComponent.prototype.confirmPassword = function (confirmField) {
                    this.currentUser.password === this.currentUser.confirmPassword ? confirmField.invalid = true : confirmField.invalid = false;
                };
                UserComponent.prototype.ngOnInit = function () {
                };
                return UserComponent;
            }());
            UserComponent.ctorParameters = function () { return [
                { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
            ]; };
            UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'netflux-user',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/user.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.css */ "./src/app/user/profile/user.component.css")).default]
                })
            ], UserComponent);
            /***/ 
        }),
        /***/ "./src/app/user/sign-up/sign-up.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/user/sign-up/sign-up.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".signUp{\r\n    margin: auto;\r\n}\r\nbutton  {\r\n    margin: 1em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnblVwe1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbmJ1dHRvbiAge1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/user/sign-up/sign-up.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/user/sign-up/sign-up.component.ts ***!
          \***************************************************/
        /*! exports provided: SignUpComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () { return SignUpComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
            //import { NgForm } from '@angular/forms';
            var SignUpComponent = /** @class */ (function () {
                function SignUpComponent(router, userService) {
                    this.router = router;
                    this.userService = userService;
                    this.userDetails = {
                        id: null,
                        firstName: null,
                        lastName: null,
                        email: null,
                        favourites: [],
                        //subscription: null,
                        //card: null,
                        password: null,
                        confirmPassword: null,
                        tnC: null
                    };
                    this.isDirty = true;
                }
                SignUpComponent.prototype.ngOnInit = function () {
                };
                SignUpComponent.prototype.isActive = function () {
                    this.userService.getUser(this.userDetails.email) ? console.log() : console.log(false);
                };
                SignUpComponent.prototype.registerUser = function () {
                    this.userService.saveUser(this.userDetails);
                    this.isActive();
                    alert(this.userDetails.firstName + " registered successfully");
                    //this.router.navigate(['/success']); * to be implemented
                    //this.isDirty = false;
                    //this.router.navigate(['/home']);
                    //console.log(this.userService.USERS); working but not adding
                };
                SignUpComponent.prototype.confirmPassword = function (confirmField) {
                    this.userDetails.password === this.userDetails.confirmPassword ? confirmField.invalid = true : confirmField.invalid = false;
                };
                SignUpComponent.prototype.cancelSignUp = function () {
                };
                SignUpComponent.prototype.onSubmit = function (form) {
                    this.registerUser();
                    //this.isActive ? console.log('email already exists') : this.registerUser();
                    //console.log(this.userDetails);
                };
                return SignUpComponent;
            }());
            SignUpComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
            ]; };
            SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'netflux-sign-up',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/sign-up/sign-up.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.component.css */ "./src/app/user/sign-up/sign-up.component.css")).default]
                })
            ], SignUpComponent);
            /***/ 
        }),
        /***/ "./src/app/user/user.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/user/user.module.ts ***!
          \*************************************/
        /*! exports provided: UserModule, checkDirtyState */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function () { return UserModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDirtyState", function () { return checkDirtyState; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _profile_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/user.component */ "./src/app/user/profile/user.component.ts");
            /* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
            /* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log-in/log-in.component */ "./src/app/user/log-in/log-in.component.ts");
            var UserModule = /** @class */ (function () {
                function UserModule() {
                }
                return UserModule;
            }());
            UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                            { path: 'profile', component: _profile_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"] },
                            { path: 'sign-up', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"], canDeactivate: ['cancelSignUp'] },
                            { path: 'log-in', component: _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_6__["LogInComponent"] }
                        ])
                    ],
                    providers: [{ provide: 'cancelSignUp', useValue: checkDirtyState }]
                })
            ], UserModule);
            function checkDirtyState(component) {
                if (component.isDirty) {
                    return window.confirm('You have not completed sign up. The data shall be lost if you proceed!');
                }
                else {
                    return true;
                }
            }
            /***/ 
        }),
        /***/ "./src/app/user/user.service.ts": 
        /*!**************************************!*\
          !*** ./src/app/user/user.service.ts ***!
          \**************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var UserService = /** @class */ (function () {
                function UserService() {
                }
                UserService.prototype.getUser = function (email) {
                    return USERS.find(function (user) { return user.email === email; });
                };
                UserService.prototype.logInUser = function (email, pass) {
                    // change to show invalid email or mpassword and allocate object to
                    USERS.find(function (user) { return user.email === email; }) ? this.currentUser = USERS.find(function (user) { return user.email === email; }) : this.currentUser = null;
                    (this.currentUser.password === pass) ? console.log("Welcome " + this.currentUser.firstName) : this.isAuthenticated = false;
                    (function (user) { return user.email === email; }) && (this.currentUser.password === pass) ? this.isAuthenticated = true : this.isAuthenticated = false;
                    if ((function (user) { return user.email === email; }) && (this.currentUser.password === pass)) {
                        sessionStorage.setItem(this.loggedInUser, this.currentUser.firstName);
                        // sessionStorage.setItem(this.loggedInUser, this.currentUser.firstName)
                        this.loggedInUser = sessionStorage.getItem(this.loggedInUser);
                        this.loggedInUser ? this.isAuthenticated = true : this.isAuthenticated = false;
                    }
                };
                // the below doesn't work thus user isn't saved
                UserService.prototype.saveUser = function (user) {
                    USERS.push(user);
                    // console.log(USERS);
                };
                return UserService;
            }());
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            var USERS = [
                {
                    // id?: number,
                    firstName: 'billy',
                    lastName: 'billy',
                    email: 'billy@x.com',
                    favourites: ['Captain Marvel', 'Stranger Things'],
                    // subscription: 2,
                    // card: string,
                    password: 'alpha',
                },
                {
                    // id?: number,
                    firstName: 'billy',
                    lastName: 'nico',
                    email: 'nico@x.com',
                    favourites: [],
                    // subscription: 2,
                    // card: string,
                    password: 'alpha',
                },
                {
                    // id?: number,
                    firstName: 'billy',
                    lastName: 'olly',
                    email: 'olly@x.com',
                    favourites: [],
                    // subscription: 2,
                    // card: string,
                    password: 'alpha',
                }
            ];
            /***/ 
        }),
        /***/ "./src/app/welcome/welcome.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/welcome/welcome.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".coverText {\r\n  margin: auto 0 !important;\r\n}\r\n.coverImage {\r\n  max-height:560px;\r\n}\r\n.welcomeBtn {\r\n  float: right !important;\r\n}\r\n@media only screen and (min-width:900px) {\r\n  .welcomeBtn {\r\n    float: right;\r\n  }\r\n}\r\n.niche, .genres{\r\n    margin: 30px auto;\r\n}\r\n.niche > div{\r\n    display: inline-block;\r\n}\r\n.nicheSlide {\r\n  width: 18rem;\r\n}\r\nh2{\r\n    text-align: center;\r\n}\r\n.welcomeBtn button {\r\n  display: inline-block;\r\n  background: #4d5250;\r\n  margin: 0 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY292ZXJUZXh0IHtcclxuICBtYXJnaW46IGF1dG8gMCAhaW1wb3J0YW50O1xyXG59XHJcbi5jb3ZlckltYWdlIHtcclxuICBtYXgtaGVpZ2h0OjU2MHB4O1xyXG59XHJcbi53ZWxjb21lQnRuIHtcclxuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjkwMHB4KSB7XHJcbiAgLndlbGNvbWVCdG4ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxufVxyXG4ubmljaGUsIC5nZW5yZXN7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0bztcclxufVxyXG4ubmljaGUgPiBkaXZ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLm5pY2hlU2xpZGUge1xyXG4gIHdpZHRoOiAxOHJlbTtcclxufVxyXG5oMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLndlbGNvbWVCdG4gYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogIzRkNTI1MDtcclxuICBtYXJnaW46IDAgNXB4O1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/welcome/welcome.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/welcome/welcome.component.ts ***!
          \**********************************************/
        /*! exports provided: WelcomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () { return WelcomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var WelcomeComponent = /** @class */ (function () {
                function WelcomeComponent() {
                    this.coverImages = {
                        head: '/assets/welcome.jpg',
                        drama: '/assets/infinityWarC.jpg',
                        comedy: '/assets/farFromHomeC1.jpg',
                        action: '/assets/farFromHomeC.jpg',
                        niche1: '/assets/batwoman.jpg',
                        niche2: '/assets/batwoman.jpg',
                        niche3: '/assets/batwoman.jpg'
                    };
                }
                WelcomeComponent.prototype.ngOnInit = function () {
                };
                return WelcomeComponent;
            }());
            WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'netflux-welcome',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")).default]
                })
            ], WelcomeComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\User\code\alc\netflux\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map