(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["EditComponent"] },
    { path: 'preview/:id', component: _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__["PreviewComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n     margin-right: 5px; \n     height: 30px;\n     border-radius: 5px;\n }\n \n button:hover {\n     background-color: black;\n     color: white;\n }\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7S0FDSyxrQkFBa0I7S0FDbEIsYUFBYTtLQUNiLG1CQUFtQjtFQUN0Qjs7Q0FFRDtLQUNJLHdCQUF3QjtLQUN4QixhQUFhO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICAgICBtYXJnaW4tcmlnaHQ6IDVweDsgXG4gICAgIGhlaWdodDogMzBweDtcbiAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuIH1cbiBcbiBidXR0b246aG92ZXIge1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgY29sb3I6IHdoaXRlO1xuIH1cbiAiXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <button routerLink=\"/edit/:id\" routerLinkActive=\"active\">Edit</button> -->\n          \n     \n<app-list></app-list>\n<router-outlet></router-outlet>  <!-- must put this shit to make work routing, took me long time to figure this out-->\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'My blog';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








 // <-- NgModel lives here
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"],
                _preview_preview_component__WEBPACK_IMPORTED_MODULE_7__["PreviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog.service.ts":
/*!*********************************!*\
  !*** ./src/app/blog.service.ts ***!
  \*********************************/
/*! exports provided: BlogService, Post, Hero, HEROES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEROES", function() { return HEROES; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { EditComponent } from './edit/edit.component'
var BlogService = /** @class */ (function () {
    function BlogService() {
        // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        //   let id = route.params['id'];
        //   let my_post = this.getPost(id);
        //   return my_post.then(post => {
        //   })
        // }
        this.posts = [];
        this.next_postid = 0;
        this.url = 'http://localhost:3000/api/' + this.getUsernameFromJWT();
        console.log("URL is ==>", this.url);
        this.fetchPosts(); //fetch post when program loads up
        // editComponent.getPost();
    }
    BlogService.prototype.increasePostid = function (currentPostid) {
        this.next_postid = 1 + currentPostid;
    };
    BlogService.prototype.getPostid = function () {
        return this.next_postid;
    };
    BlogService.prototype.decreasePostid = function () {
        this.next_postid = this.next_postid - 1;
    };
    /*****************************************
     ********** FETCHING USER  *************
     ****************************************/
    // fetchPosts(username: string): void {
    BlogService.prototype.fetchPosts = function () {
        var _this = this;
        var xml = new XMLHttpRequest();
        xml.open("GET", this.url, true); //url must be open
        xml.onreadystatechange = function () {
            if (xml.readyState === XMLHttpRequest.DONE) {
                if (xml.readyState === 4) { //4 means request finished and response is ready
                    var response = JSON.parse(xml.responseText);
                    response.forEach(function (element) {
                        var fetched_post = {
                            postid: element.postid,
                            created: element.created,
                            modified: element.modified,
                            title: element.title,
                            body: element.body
                        };
                        _this.posts.push(fetched_post);
                        if (_this.getPostid() <= fetched_post.postid) {
                            _this.increasePostid(fetched_post.postid);
                        }
                    });
                    console.log("Current post id ==>", _this.getPostid());
                    console.log("Post is ==>", _this.posts);
                }
                else {
                    console.log("Error fetching post, ", xml.statusText);
                }
            }
        };
        xml.send(); //send GET request
    };
    /*****************************************
     ********** GET POSTs **********************
     ****************************************/
    // getPosts(username: string): Post[] {
    BlogService.prototype.getPosts = function () {
        return this.posts;
    };
    /*****************************************
    ********** GET POST **********************
    ****************************************/
    //getPost(username: string, id: number): Post {
    BlogService.prototype.getPost = function (id) {
        var fetch_post = null;
        this.posts.forEach(function (element) {
            if (element.postid === id) {
                fetch_post = element;
            }
        });
        return fetch_post;
    };
    /*****************************************
     ********** NEW POST **********************
     ****************************************/
    //newPost(username: string): Post {
    BlogService.prototype.newPost = function () {
        var _this = this;
        var currentTime = new Date();
        var new_post = {
            postid: this.next_postid,
            created: currentTime,
            modified: currentTime,
            title: "",
            body: ""
        };
        //now add newpost to the post
        this.posts.push(new_post);
        //increase the postid
        this.increasePostid(new_post.postid);
        var xml = new XMLHttpRequest();
        xml.onreadystatechange = function () {
            //if the response code is 201 do nothing
            if (xml.readyState === XMLHttpRequest.DONE) {
                if (xml.readyState === 4) {
                    if (xml.status == 201) {
                        //do nothing
                        console.log("Succefully created new post!");
                    }
                    else { //if not 201 
                        //delete the post and set the alert
                        //get the index of the post
                        var postIndex = _this.posts.findIndex(function (myPost) { return myPost.postid == new_post.postid; });
                        // console.log("index of post is: ", postIndex);
                        _this.posts.splice(postIndex, 1);
                        //decrease the post id
                        _this.decreasePostid();
                        window.alert("Error creating new post");
                        //navigate to the "list pane" of editor
                        // window.location.href = 'http://localhost:4200/#/'
                    }
                }
                else {
                    console.log("Error creating new post ", xml.statusText);
                }
            }
        };
        // console.log("new post id is: ", new_post.postid.toString());
        xml.open('POST', this.url + '/' + new_post.postid.toString(), true);
        xml.setRequestHeader("Content-type", "application/json"); //send the header information
        xml.send(JSON.stringify(new_post));
        console.log("new postid is: ", this.next_postid);
        return new_post;
    };
    /*****************************************
     ********** UPDATE POST **********************
     ****************************************/
    //updatePost(username: string, post: Post): void {
    BlogService.prototype.updatePost = function (post) {
        var postID = -1;
        var retrived_post = null;
        this.posts.forEach(function (element) {
            if (element.postid == post.postid) { //if the postid matched
                postID = post.postid;
                retrived_post = element;
                element.title = post.title; //update title
                element.body = post.body; //update body
                element.modified = new Date();
            }
        });
        var xml = new XMLHttpRequest();
        xml.onreadystatechange = function () {
            if (xml.readyState == XMLHttpRequest.DONE) {
                if (xml.readyState == 4) {
                    console.log("status code is: ", xml.status);
                    if (xml.status != 200) {
                        window.alert("Error updating the post at the server!"); //display the alert
                        //navigate to the edit view
                        window.location.href = "http://localhost:3000/edit/#/edit/" + (postID.toString());
                    }
                    else {
                        console.log("Succefully updated the post at the server!");
                    }
                }
                else {
                    console.log("Error from update post: ", xml.statusText);
                }
            }
        };
        xml.open('PUT', this.url + '/' + postID.toString(), true);
        xml.setRequestHeader("Content-type", "application/json");
        xml.send(JSON.stringify(retrived_post));
    };
    /*****************************************
     ********** DELETE POST **********************
     ****************************************/
    //deletePost(username: string, postid: number): void {
    BlogService.prototype.deletePost = function (postid) {
        var postIndex = this.posts.findIndex(function (myPost) { return myPost.postid == postid; });
        if (postIndex != -1) {
            this.posts.splice(postIndex, 1);
            var xml_1 = new XMLHttpRequest();
            xml_1.onreadystatechange = function () {
                if (xml_1.readyState === XMLHttpRequest.DONE) {
                    if (xml_1.readyState === 4) {
                        console.log("status code is: ", xml_1.status);
                        if (xml_1.status === 204) {
                            console.log("Succefully deleted the post!");
                        }
                        else {
                            window.alert("ERROR deleting the post!"); //display the alert
                            //navigate to the edit view
                            // window.location.href = "http://localhost:3000/edit/";
                        }
                    }
                    else {
                        console.log("ERROR from delete post: ", xml_1.statusText);
                    }
                }
            };
            xml_1.open('DELETE', this.url + '/' + postid.toString(), true);
            xml_1.send(null);
        }
    };
    BlogService.prototype.parseJWT = function (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(atob(base64));
    };
    BlogService.prototype.getUsernameFromJWT = function () {
        var username;
        //reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
        var cookies = document.cookie;
        try {
            // console.log("cookies is ==>", cookies);
            var token = cookies.replace(/(?:(?:^|.*;\s*)jwt\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            // console.log("Tokem is ===>", token);
            // let decode = jwt.decode(token);
            var decode = this.parseJWT(token);
            username = decode.usr;
            console.log("decoded username is ==>", username);
        }
        catch (error) {
            console.log("Token error is=>", error);
        }
        return username;
    };
    BlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BlogService);
    return BlogService;
}());

var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());

//later needs to be deleted
var Hero = /** @class */ (function () {
    function Hero() {
    }
    return Hero;
}());

var HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];


/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#editBox {\n     display: block;\n     padding: 1em;\n    \n }\n \n #button {\n   padding: 10px; \n }\n \n button {\n     margin-right: 5px; \n     height: 30px;\n     border-radius: 5px;\n }\n \n button:hover {\n     background-color: black;\n     color: white;\n }\n \n input {\n     display: block;\n     width: 250px;\n     font-size: 1em;\n     padding: 8px;\n     margin-top: 5px;\n }\n \n textarea {\n     display: block;\n     width: 400px;\n     height: 200px;\n     margin-top: 5px;\n }\n \n #form {\n     background-color: cadetblue;\n     position: fixed;\n     display: block;\n     top: 10%;\n     left: 450px;\n }\n \n #modifiedDate {\n     color: antiquewhite;\n     padding: 10px;\n     font-size: 14px;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0tBQ0ssZUFBZTtLQUNmLGFBQWE7O0VBRWhCOztDQUVEO0dBQ0UsY0FBYztFQUNmOztDQUVEO0tBQ0ksa0JBQWtCO0tBQ2xCLGFBQWE7S0FDYixtQkFBbUI7RUFDdEI7O0NBRUQ7S0FDSSx3QkFBd0I7S0FDeEIsYUFBYTtFQUNoQjs7Q0FFRDtLQUNJLGVBQWU7S0FDZixhQUFhO0tBQ2IsZUFBZTtLQUNmLGFBQWE7S0FDYixnQkFBZ0I7RUFDbkI7O0NBRUQ7S0FDSSxlQUFlO0tBQ2YsYUFBYTtLQUNiLGNBQWM7S0FDZCxnQkFBZ0I7RUFDbkI7O0NBRUQ7S0FDSSw0QkFBNEI7S0FDNUIsZ0JBQWdCO0tBQ2hCLGVBQWU7S0FDZixTQUFTO0tBQ1QsWUFBWTtFQUNmOztDQUVEO0tBQ0ksb0JBQW9CO0tBQ3BCLGNBQWM7S0FDZCxnQkFBZ0I7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI2VkaXRCb3gge1xuICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgcGFkZGluZzogMWVtO1xuICAgIFxuIH1cbiBcbiAjYnV0dG9uIHtcbiAgIHBhZGRpbmc6IDEwcHg7IFxuIH1cbiBcbiBidXR0b24ge1xuICAgICBtYXJnaW4tcmlnaHQ6IDVweDsgXG4gICAgIGhlaWdodDogMzBweDtcbiAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuIH1cbiBcbiBidXR0b246aG92ZXIge1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgY29sb3I6IHdoaXRlO1xuIH1cbiBcbiBpbnB1dCB7XG4gICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICB3aWR0aDogMjUwcHg7XG4gICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICBwYWRkaW5nOiA4cHg7XG4gICAgIG1hcmdpbi10b3A6IDVweDtcbiB9XG4gICBcbiB0ZXh0YXJlYSB7XG4gICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICB3aWR0aDogNDAwcHg7XG4gICAgIGhlaWdodDogMjAwcHg7XG4gICAgIG1hcmdpbi10b3A6IDVweDtcbiB9XG4gXG4gI2Zvcm0ge1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG4gICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgIHRvcDogMTAlO1xuICAgICBsZWZ0OiA0NTBweDtcbiB9XG5cbiAjbW9kaWZpZWREYXRlIHtcbiAgICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgICAgcGFkZGluZzogMTBweDtcbiAgICAgZm9udC1zaXplOiAxNHB4O1xuIH0iXX0= */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Edit works </h2>\n<p> Post ID::</p>{{postID}}\n<p>post object:</p>{{post}}\n<div *ngIf=\"post\">\n    <form id=\"form\" [formGroup]=\"inputForm\">\n      <div id=\"editBox\">\n        <label>\n          <span style=\"color: white;\">Title:</span>\n          <input name=\"title\" formControlName=\"title\" placeholder=\"title\" [(ngModel)]=\"post.title\">\n        </label>\n        <div style=\"margin-top: 10px;\">\n        <label>\n          <span style=\"color: white;\">Body:</span>\n          <textarea type=\"text\" formControlName=\"body\" name =\"body\" [(ngModel)]=\"post.body\"></textarea>\n        </label>\n      </div>\n    </div>\n\n    <span id=\"modifiedDate\">Last Modified: {{post.modified | date: 'medium'}}</span>\n\n    <div id=\"button\">\n      <label>\n        <button type=\"button\" (click)=\"delete()\">delete</button>\n      </label>\n      <label>\n        <button type=\"button\" (click)=\"save()\">save</button>\n      </label>\n      <label>\n        <button type=\"button\" (click)=\"preview()\">preview</button>\n      </label>\n    </div>\n    </form>\n  </div>\n"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};





var EditComponent = /** @class */ (function () {
    function EditComponent(formBuilder, blogService, router, activatedRoute) {
        this.formBuilder = formBuilder;
        this.blogService = blogService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        //  activatedRoute.url.subscribe((u) => {
        //   this.postID =  activatedRoute.snapshot.params.id;
        //  })
        this.inputForm = this.formBuilder.group({
            title: [''],
            body: ['']
        });
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function () { return _this.getPost(); });
        // this.getPost();
        console.log("i am inside");
    };
    EditComponent.prototype.mySyncFunction = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.blogService.fetchPosts()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.activatedRoute.url.subscribe(function (u) {
                                _this.postID = _this.activatedRoute.snapshot.params.id;
                                _this.activatedRoute.params.subscribe(function () { return _this.getPost(); });
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log("Error on processing request");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EditComponent.prototype.getPost = function () {
        //  this.activatedRoute.params.subscribe((paramas)=>this.postID = (paramas['id']));
        //  this.post = this.blogService.getPost(Number(this.postID));
        this.postID = +this.activatedRoute.snapshot.paramMap.get('id');
        this.post = this.blogService.getPost(this.postID);
        //    this.postID = +this.activatedRoute.snapshot.paramMap.get('id');
        //  this.blogService.getPost(this.postID)
        //    .subscribe(post => this.post = post);
    };
    EditComponent.prototype.delete = function () {
        this.blogService.deletePost(this.post.postid);
        this.post = null;
        this.router.navigate(['/']);
    };
    EditComponent.prototype.save = function () {
        if (this.inputForm.dirty) {
            this.blogService.updatePost(this.post);
            this.inputForm.markAsPristine();
        }
    };
    EditComponent.prototype.preview = function () {
        if (this.inputForm.dirty) {
            this.save();
        }
        this.router.navigate(['/', 'preview', this.post.postid]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EditComponent.prototype, "save", null);
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\n/*reference: https://angular.io/tutorial/toh-pt2*/\n.posts {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 350px;\n}\n.posts li {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.posts li:hover {\n  color: #607D8B;\n  background-color: blue;\n  left: .1em;\n}\n.posts a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 350px;\n}\n.posts a:hover {\n  color: white;\n}\n.posts .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton {\n    margin-right: 5px; \n    height: 30px;\n    border-radius: 5px;\n  \n    \n}\nbutton:hover {\n  background-color: black;\n  color: white;\n}\n.routerLink {\n  color: #607D8B;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMENBQTBDO0FBQzFDLGtEQUFrRDtBQUNsRDtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFdBQVc7Q0FDWjtBQUVEO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7Q0FDZDtBQUVEO0VBQ0UsYUFBYTtDQUNkO0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFVBQVU7RUFDVixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsMkJBQTJCO0NBQzVCO0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjs7O0NBR3RCO0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtDQUNkO0FBRUQ7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbi8qcmVmZXJlbmNlOiBodHRwczovL2FuZ3VsYXIuaW8vdHV0b3JpYWwvdG9oLXB0MiovXG4ucG9zdHMge1xuICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMzUwcHg7XG59XG4ucG9zdHMgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgbWFyZ2luOiAuNWVtO1xuICBwYWRkaW5nOiAuM2VtIDA7XG4gIGhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnBvc3RzIGxpOmhvdmVyIHtcbiAgY29sb3I6ICM2MDdEOEI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGxlZnQ6IC4xZW07XG59XG5cbi5wb3N0cyBhIHtcbiAgY29sb3I6ICM4ODg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDM1MHB4O1xufVxuXG4ucG9zdHMgYTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBvc3RzIC5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogLTRweDtcbiAgaGVpZ2h0OiAxLjhlbTtcbiAgbWluLXdpZHRoOiAxNnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbn1cblxuYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDsgXG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgXG4gICAgXG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5yb3V0ZXJMaW5rIHtcbiAgY29sb3I6ICM2MDdEOEI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> My List</h2>\n<button type=\"button\" (click)=\"clicked()\"> New post</button>\n\n<ul class=\"posts\">\n  <li *ngFor=\"let post of posts\">\n      <a routerLink=\"/edit/{{post.postid}}\" class=\"routerLink\">\n        <span class=\"badge\">{{post.modified | date: 'medium'}}</span> {{post.title}}\n    </a>\n  </li>\n</ul>\n\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    function ListComponent(blogService, router) {
        this.blogService = blogService;
        this.router = router;
        this.posts = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    ListComponent.prototype.getPosts = function () {
        this.posts = this.blogService.getPosts();
    };
    ListComponent.prototype.clicked = function () {
        var newPost = this.blogService.newPost();
        var newPostPostid = newPost.postid;
        this.router.navigate(['/edit', newPostPostid.toString()]);
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/preview/preview.component.css":
/*!***********************************************!*\
  !*** ./src/app/preview/preview.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n     margin-right: 5px; \n     height: 30px;\n     border-radius: 5px;\n\n }\n \n button:hover {\n     background-color: black;\n     color: white;\n }\n \n .preview {\n     position: fixed;\n     background-color: orange;\n     top: 10%;\n     left: 450px;\n     height: 30%;\n     width: 50%;\n     color: blue;\n     border-radius: 8px;\n }\n \n #editPage {\n      position: fixed;\n      top: 5%;\n }\n \n .text {\n      margin: 10px;\n      font-size: 14px;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJldmlldy9wcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7S0FDSyxrQkFBa0I7S0FDbEIsYUFBYTtLQUNiLG1CQUFtQjs7RUFFdEI7O0NBRUQ7S0FDSSx3QkFBd0I7S0FDeEIsYUFBYTtFQUNoQjs7Q0FFRDtLQUNJLGdCQUFnQjtLQUNoQix5QkFBeUI7S0FDekIsU0FBUztLQUNULFlBQVk7S0FDWixZQUFZO0tBQ1osV0FBVztLQUNYLFlBQVk7S0FDWixtQkFBbUI7RUFDdEI7O0NBRUQ7TUFDSyxnQkFBZ0I7TUFDaEIsUUFBUTtFQUNaOztDQUVEO01BQ0ssYUFBYTtNQUNiLGdCQUFnQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3ByZXZpZXcvcHJldmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7IFxuICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuIH1cbiBcbiBidXR0b246aG92ZXIge1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgY29sb3I6IHdoaXRlO1xuIH1cblxuIC5wcmV2aWV3IHtcbiAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgIHRvcDogMTAlO1xuICAgICBsZWZ0OiA0NTBweDtcbiAgICAgaGVpZ2h0OiAzMCU7XG4gICAgIHdpZHRoOiA1MCU7XG4gICAgIGNvbG9yOiBibHVlO1xuICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gfVxuXG4gI2VkaXRQYWdlIHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogNSU7XG4gfVxuXG4gLnRleHQge1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuIH0iXX0= */"

/***/ }),

/***/ "./src/app/preview/preview.component.html":
/*!************************************************!*\
  !*** ./src/app/preview/preview.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"post\" class=\"preview\">\n    <button type=\"submit\" (click)=\"editPage()\" id=\"editPage\"> Edit Page </button>\n    <h5><div [innerHTML]=\"previewTitle\" class=\"text\"></div></h5>\n    <div [innerHTML]=\"previewBody\" class=\"text\"> </div>\n</div>"

/***/ }),

/***/ "./src/app/preview/preview.component.ts":
/*!**********************************************!*\
  !*** ./src/app/preview/preview.component.ts ***!
  \**********************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var commonmark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! commonmark */ "./node_modules/commonmark/lib/index.js");
/* harmony import */ var commonmark__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(commonmark__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(activatedRoute, blogService, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.blogService = blogService;
        this.router = router;
        activatedRoute.params.subscribe(function (paramas) { return _this.postID = (paramas['id']); });
        this.post = this.blogService.getPost(Number(this.postID));
    }
    PreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function () { return _this.renderPreview(); });
    };
    PreviewComponent.prototype.renderPreview = function () {
        var reader = new commonmark__WEBPACK_IMPORTED_MODULE_1__["Parser"];
        var writer = new commonmark__WEBPACK_IMPORTED_MODULE_1__["HtmlRenderer"];
        if (this.post != null) {
            this.previewTitle = writer.render(reader.parse(this.post.title));
            this.previewBody = writer.render(reader.parse(this.post.body));
        }
    };
    PreviewComponent.prototype.editPage = function () {
        this.router.navigate(['/edit/' + this.post.postid]);
    };
    PreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview',
            template: __webpack_require__(/*! ./preview.component.html */ "./src/app/preview/preview.component.html"),
            styles: [__webpack_require__(/*! ./preview.component.css */ "./src/app/preview/preview.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PreviewComponent);
    return PreviewComponent;
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

module.exports = __webpack_require__(/*! /home/cs144/shared/angular-blog/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map