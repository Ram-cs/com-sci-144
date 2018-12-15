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

module.exports = "/*reference: https://angular.io/tutorial/toh-pt0 */\n\nbutton {\n     margin-right: 5px; \n     height: 30px;\n     border-radius: 5px;\n }\n\nbutton:hover {\n     background-color: black;\n     color: white;\n }\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbURBQW1EOztBQUVuRDtLQUNLLGtCQUFrQjtLQUNsQixhQUFhO0tBQ2IsbUJBQW1CO0VBQ3RCOztBQUVEO0tBQ0ksd0JBQXdCO0tBQ3hCLGFBQWE7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qcmVmZXJlbmNlOiBodHRwczovL2FuZ3VsYXIuaW8vdHV0b3JpYWwvdG9oLXB0MCAqL1xuXG5idXR0b24ge1xuICAgICBtYXJnaW4tcmlnaHQ6IDVweDsgXG4gICAgIGhlaWdodDogMzBweDtcbiAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuIH1cbiBcbiBidXR0b246aG92ZXIge1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgY29sb3I6IHdoaXRlO1xuIH1cbiAiXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <button routerLink=\"/edit/:id\" routerLinkActive=\"active\">Edit</button> -->\n           \n<app-list></app-list>\n<router-outlet></router-outlet>  <!-- must put this shit to make work routing, took me long time to figure this out-->\n"

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
        if (this.checkUserLoggedIn() === false) { //is false
            console.log("User is not logged IN ==> Constructor");
            window.location.href = "http://localhost:3000/login?redirect=/editor/";
            return;
        }
        else { //is true
            this.fetchPosts(); //fetch post when program loads up after succefull login
        }
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
     ********** Handle JWT Login  *************
     ****************************************/
    BlogService.prototype.checkUserLoggedIn = function () {
        var hasUserLoggedIN = false;
        var xml = new XMLHttpRequest();
        xml.open("GET", this.url, false); //url must be open
        xml.onload = function (e) {
            if (xml.readyState === XMLHttpRequest.DONE) {
                if (xml.readyState === 4) { //4 means request finished and response is ready
                    if (xml.status === 401) {
                        console.log("User has NOT loggedin");
                        return;
                    }
                    else {
                        console.log("User has loggedin");
                        hasUserLoggedIN = true;
                    }
                }
                else {
                    console.log("Error fetching post, ", xml.statusText);
                }
            }
        };
        // console.log("Executing the checkUserLoggedIN()======>");
        xml.send(); //send GET request
        return hasUserLoggedIN;
    };
    /*****************************************
     ********** FETCHING USER  *************
     ****************************************/
    // fetchPosts(username: string): void {
    BlogService.prototype.fetchPosts = function () {
        var _this = this;
        var xml = new XMLHttpRequest();
        xml.open("GET", this.url, false); //url must be open
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
        var fetch_post = null; //if post doen't exist then return null
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
        // console.log("new post id is: ", new_post.postid.toString());
        xml.open('POST', this.url + '/' + new_post.postid.toString(), false);
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
                        window.alert("Error creating a new post at the server");
                        //navigate to the "list pane" of editor /editor/#/edit/:postid
                        // window.location.href = 'http://localhost:4200/#/' //********CHANGE **********/
                        window.location.href = 'http://localhost:3000/editor/#/';
                    }
                }
                else {
                    console.log("Error creating new post ", xml.statusText);
                }
            }
        };
        xml.setRequestHeader("Content-type", "application/json"); //send the header information
        xml.send(JSON.stringify(new_post));
        console.log("new postid is: ", this.next_postid);
        return new_post;
    };
    /*****************************************
     ********** UPDATE POST **********************
     ****************************************/
    // // //updatePost(username: string, post: Post): void {
    BlogService.prototype.updatePost = function (post) {
        var postID = -1;
        var retrived_post = null;
        // let post_title: string
        // let post_body: string
        // let post_date;
        var current_time = new Date();
        var original_post = null;
        this.posts.forEach(function (element) {
            if (element.postid == post.postid) { //if the postid matched
                postID = post.postid;
                original_post = element;
                // retrived_post = element;
                // post_title = element.title
                // post_body = element.body
                // post_date = element.modified
                element.title = post.title; //update title
                element.body = post.body; //update body
                element.modified = current_time; //update the current date
                retrived_post = element;
                // retrived_post.title = post.title
                // retrived_post.body = post.body
                // retrived_post.modified = current_time;
            }
        }); //update the post in local post
        console.log("Updating post id is:", postID);
        var xml = new XMLHttpRequest();
        xml.open('PUT', this.url + '/' + postID.toString(), true);
        xml.onreadystatechange = function () {
            if (xml.readyState == XMLHttpRequest.DONE) {
                if (xml.readyState == 4) {
                    console.log("status code is: ", xml.status);
                    if (xml.status != 200) {
                        window.alert("Error updating the post at the server!"); //display the alert
                        //navigate to the edit view /editor/#/
                        // window.location.href = "http://localhost:4200/#/edit/" + (postID.toString());
                        window.location.href = "http://localhost:3000/editor/#/edit/" + (postID.toString());
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
        xml.setRequestHeader("Content-type", "application/json");
        xml.send(JSON.stringify(retrived_post)); //update the post in the server side
    };
    /*****************************************
     ********** DELETE POST **********************
     ****************************************/
    //deletePost(username: string, postid: number): void {
    BlogService.prototype.deletePost = function (postid) {
        var postIndex = this.posts.findIndex(function (myPost) { return myPost.postid == postid; });
        if (postIndex != -1) { //do nothing if such post doesn't exist
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
                            // window.location.href = 'http://localhost:4200/#/';
                            window.location.href = 'http://localhost:3000/editor/#/';
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

module.exports = "\n#editBox {\n     display: block;\n     padding: 1em;\n    \n }\n \n #button {\n   padding: 10px;\n }\n \n button {\n     margin-right: 5px; \n     height: 30px;\n     border-radius: 5px;\n }\n \n button[type=text]:disabled {\n    background: red;\n}\n \n button:hover {\n     background-color: black;\n     color: white;\n }\n \n input {\n     display: block;\n     width: 250px;\n     font-size: 1em;\n     padding: 8px;\n     margin-top: 5px;\n }\n \n textarea {\n     display: block;\n     width: 400px;\n     height: 200px;\n     margin-top: 5px;\n }\n \n #form {\n     background-color: cadetblue;\n     position: fixed;\n     display: block;\n     top: 10%;\n     left: 450px;\n }\n \n #modifiedDate {\n     color: antiquewhite;\n     padding: 10px;\n     font-size: 14px;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0tBQ0ssZUFBZTtLQUNmLGFBQWE7O0VBRWhCOztDQUVEO0dBQ0UsY0FBYztFQUNmOztDQUVEO0tBQ0ksa0JBQWtCO0tBQ2xCLGFBQWE7S0FDYixtQkFBbUI7RUFDdEI7O0NBR0Q7SUFDRyxnQkFBZ0I7Q0FDbkI7O0NBQ0E7S0FDSSx3QkFBd0I7S0FDeEIsYUFBYTtFQUNoQjs7Q0FFRDtLQUNJLGVBQWU7S0FDZixhQUFhO0tBQ2IsZUFBZTtLQUNmLGFBQWE7S0FDYixnQkFBZ0I7RUFDbkI7O0NBRUQ7S0FDSSxlQUFlO0tBQ2YsYUFBYTtLQUNiLGNBQWM7S0FDZCxnQkFBZ0I7RUFDbkI7O0NBRUQ7S0FDSSw0QkFBNEI7S0FDNUIsZ0JBQWdCO0tBQ2hCLGVBQWU7S0FDZixTQUFTO0tBQ1QsWUFBWTtFQUNmOztDQUVEO0tBQ0ksb0JBQW9CO0tBQ3BCLGNBQWM7S0FDZCxnQkFBZ0I7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI2VkaXRCb3gge1xuICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgcGFkZGluZzogMWVtO1xuICAgIFxuIH1cbiBcbiAjYnV0dG9uIHtcbiAgIHBhZGRpbmc6IDEwcHg7XG4gfVxuIFxuIGJ1dHRvbiB7XG4gICAgIG1hcmdpbi1yaWdodDogNXB4OyBcbiAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gfVxuIFxuXG4gYnV0dG9uW3R5cGU9dGV4dF06ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbn1cbiBidXR0b246aG92ZXIge1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgY29sb3I6IHdoaXRlO1xuIH1cbiBcbiBpbnB1dCB7XG4gICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICB3aWR0aDogMjUwcHg7XG4gICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICBwYWRkaW5nOiA4cHg7XG4gICAgIG1hcmdpbi10b3A6IDVweDtcbiB9XG4gICBcbiB0ZXh0YXJlYSB7XG4gICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICB3aWR0aDogNDAwcHg7XG4gICAgIGhlaWdodDogMjAwcHg7XG4gICAgIG1hcmdpbi10b3A6IDVweDtcbiB9XG4gXG4gI2Zvcm0ge1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG4gICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgIHRvcDogMTAlO1xuICAgICBsZWZ0OiA0NTBweDtcbiB9XG5cbiAjbW9kaWZpZWREYXRlIHtcbiAgICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgICAgcGFkZGluZzogMTBweDtcbiAgICAgZm9udC1zaXplOiAxNHB4O1xuIH0iXX0= */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h2>Edit works </h2>\n{{postID}}\n{{post}} -->\n<div *ngIf=\"post\">\n    <form id=\"form\" [formGroup]=\"inputForm\">\n      <div id=\"editBox\">\n        <label>\n          <span style=\"color: white;\">Title:</span>\n          <input name=\"title\" formControlName=\"title\" placeholder=\"title\" [(ngModel)]=\"post.title\">\n        </label>\n        <div style=\"margin-top: 10px;\">\n        <label>\n          <span style=\"color: white;\">Body:</span>\n          <textarea type=\"text\" formControlName=\"body\" name =\"body\" [(ngModel)]=\"post.body\"></textarea>\n        </label>\n      </div>\n    </div>\n\n    <span id=\"modifiedDate\">Last Modified: {{post.modified | date: 'medium'}}</span>\n\n    <div id=\"button\">\n      <label>\n        <button type=\"button\" (click)=\"delete()\">delete</button>\n      </label>\n      <label *ngIf=\"inputForm.pristine\">\n        <button style=\"color:red\" type=\"button\" disabled (click)=\"save()\">save</button>\n      </label>\n      <label *ngIf=\"inputForm.pristine == false\">\n        <button type=\"button\" (click)=\"save()\">save</button>\n      </label>\n      <label>\n        <button type=\"button\" (click)=\"preview()\">preview</button>\n      </label>\n    </div>\n    </form>\n  </div>\n"

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





var EditComponent = /** @class */ (function () {
    function EditComponent(formBuilder, blogService, router, activatedRoute) {
        this.formBuilder = formBuilder;
        this.blogService = blogService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.store_previous_postID = null;
        this.inputForm = this.formBuilder.group({
            title: [''],
            body: ['']
        });
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function () { return _this.getPost(); });
    };
    EditComponent.prototype.getPost = function () {
        this.postID = +this.activatedRoute.snapshot.paramMap.get('id');
        ;
        this.post = this.blogService.getPost(this.postID);
        //  console.log("previous post********:", this.store_previous_postID);
        //  console.log("Current fetched post is:", this.postID);
        //  console.log("previous post dirty??:", this.inputForm.dirty);
        if (this.inputForm.dirty) {
            //  console.log("update previous post");
            //  console.log("mark to false now");
            this.inputForm.markAsPristine();
            this.blogService.updatePost(this.blogService.getPost(this.store_previous_postID));
            this.store_previous_postID = this.postID;
        }
        else {
            this.store_previous_postID = this.postID;
        }
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

module.exports = "/* HeroesComponent's private CSS styles */\n/*reference: https://angular.io/tutorial/toh-pt2*/\n.posts {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 350px;\n}\n.posts li {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.posts li:hover {\n  color: #607D8B;\n  background-color: blue;\n  left: .1em;\n}\n.posts a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 350px;\n}\n.posts a:hover {\n  color: white;\n}\n.posts .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton {\n    margin-right: 5px; \n    height: 30px;\n    border-radius: 5px;\n  \n    \n}\nbutton:hover {\n  background-color: black;\n  color: white;\n}\n.routerLink {\n  color: #607D8B;\n  text-decoration: none;\n}\nh3 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 150%;\n  border-style: dashed;\n  width: 150px;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMENBQTBDO0FBQzFDLGtEQUFrRDtBQUNsRDtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFdBQVc7Q0FDWjtBQUVEO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7Q0FDZDtBQUVEO0VBQ0UsYUFBYTtDQUNkO0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFVBQVU7RUFDVixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsMkJBQTJCO0NBQzVCO0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjs7O0NBR3RCO0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtDQUNkO0FBRUQ7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0NBQ3ZCO0FBRUQ7RUFDRSxZQUFZO0VBQ1osMENBQTBDO0VBQzFDLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVyb2VzQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG4vKnJlZmVyZW5jZTogaHR0cHM6Ly9hbmd1bGFyLmlvL3R1dG9yaWFsL3RvaC1wdDIqL1xuLnBvc3RzIHtcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDM1MHB4O1xufVxuLnBvc3RzIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gIG1hcmdpbjogLjVlbTtcbiAgcGFkZGluZzogLjNlbSAwO1xuICBoZWlnaHQ6IDEuNmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5wb3N0cyBsaTpob3ZlciB7XG4gIGNvbG9yOiAjNjA3RDhCO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICBsZWZ0OiAuMWVtO1xufVxuXG4ucG9zdHMgYSB7XG4gIGNvbG9yOiAjODg4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzNTBweDtcbn1cblxuLnBvc3RzIGE6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wb3N0cyAuYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMXB4O1xuICB0b3A6IC00cHg7XG4gIGhlaWdodDogMS44ZW07XG4gIG1pbi13aWR0aDogMTZweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7IFxuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIFxuICAgIFxufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucm91dGVyTGluayB7XG4gIGNvbG9yOiAjNjA3RDhCO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmgzIHtcbiAgY29sb3I6ICMzNjk7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1MCU7XG4gIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuICB3aWR0aDogMTUwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3> {{userName}} 's Blog</h3>\n<button type=\"button\" (click)=\"clicked()\"> New post</button>\n\n<ul class=\"posts\">\n  <li *ngFor=\"let post of posts\">\n      <a routerLink=\"/edit/{{post.postid}}\" class=\"routerLink\">\n        <span class=\"badge\">{{post.created | date: 'medium'}}</span> {{post.title}}\n    </a>\n  </li>\n</ul>\n\n"

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
        this.userName = blogService.getUsernameFromJWT();
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    ListComponent.prototype.getPosts = function () {
        this.posts = this.blogService.getPosts();
    };
    ListComponent.prototype.browserBackArrowSave = function () {
        window.onhashchange = function () {
            //blah blah blah
        };
    };
    ListComponent.prototype.clicked = function () {
        var newPost = this.blogService.newPost();
        var newPostPostid = newPost.postid;
        this.router.navigate(['/edit', newPostPostid.toString()]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ListComponent.prototype, "browserBackArrowSave", null);
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

module.exports = "\n<!-- <h1> preview works</h1> -->\n<div *ngIf=\"post\" class=\"preview\">\n    <button type=\"submit\" (click)=\"editPage()\" id=\"editPage\"> Edit Page </button>\n    <h5><div [innerHTML]=\"previewTitle\" class=\"text\"></div></h5>\n    <div [innerHTML]=\"previewBody\" class=\"text\"> </div>\n</div>"

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
        this.activatedRoute = activatedRoute;
        this.blogService = blogService;
        this.router = router;
    }
    PreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function () { return _this.previewPost(); });
    };
    PreviewComponent.prototype.previewPost = function () {
        this.postID = +this.activatedRoute.snapshot.paramMap.get('id');
        this.post = this.blogService.getPost(this.postID);
        var reader = new commonmark__WEBPACK_IMPORTED_MODULE_1__["Parser"];
        var writer = new commonmark__WEBPACK_IMPORTED_MODULE_1__["HtmlRenderer"];
        if (this.post != null) { //post must not be null
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