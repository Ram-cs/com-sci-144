import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class BlogService {
  constructor() { 
    this.url = 'http://localhost:3000/api/' + this.getUsernameFromJWT();
    console.log("URL is ==>", this.url);
    
    
    if(this.checkUserLoggedIn() === false) { //is false
        console.log("User is not logged IN ==> Constructor");
        window.location.href = "http://localhost:3000/login?redirect=/editor/";
        return;
    } else { //is true
      this.fetchPosts(); //fetch post when program loads up after succefull login
    }
  }

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
  //   let id = route.params['id'];
  //   let my_post = this.getPost(id);
  //   return my_post.then(post => {

  //   })
  // }

  private posts: Post[] = [];
  private url;
  private next_postid: number = 0;
  
  increasePostid(currentPostid: number):void {
    this.next_postid = 1 + currentPostid;
  }

  getPostid():number {
    return this.next_postid;
  }

  decreasePostid():void {
    this.next_postid = this.next_postid - 1;
  }

  /*****************************************
   ********** Handle JWT Login  *************
   ****************************************/

  checkUserLoggedIn(): boolean {

    var hasUserLoggedIN: boolean = false
     
    var xml = new XMLHttpRequest();
    xml.open("GET",this.url, false); //url must be open
      
      xml.onload = function (e) {
        if(xml.readyState === XMLHttpRequest.DONE) { 
          if(xml.readyState === 4) { //4 means request finished and response is ready
            if(xml.status === 401) {
                console.log("User has NOT loggedin");
                return;
            } else {
                console.log("User has loggedin");
                hasUserLoggedIN = true;
            }
            
          } else {
            console.log("Error fetching post, ",xml.statusText);
          }
          
        }
      }
      // console.log("Executing the checkUserLoggedIN()======>");
  xml.send(); //send GET request
  return hasUserLoggedIN;
  }
  
  /*****************************************
   ********** FETCHING USER  *************
   ****************************************/
  // fetchPosts(username: string): void {
  fetchPosts(): void {
      var xml = new XMLHttpRequest();
      xml.open("GET",this.url, false); //url must be open
      
      xml.onreadystatechange = ()=> {
        if(xml.readyState === XMLHttpRequest.DONE) { 
          if(xml.readyState === 4) { //4 means request finished and response is ready
            let response = JSON.parse(xml.responseText);
            response.forEach(element => {
            let fetched_post = {
              postid: element.postid,
              created: element.created,
              modified: element.modified,
              title: element.title,
              body: element.body
            }
            this.posts.push(fetched_post);
            if(this.getPostid() <= fetched_post.postid) {
              this.increasePostid(fetched_post.postid);
            }
          });
          console.log("Current post id ==>", this.getPostid());
          console.log("Post is ==>", this.posts);

          } else {
            console.log("Error fetching post, ",xml.statusText);
          }
          
        }
      }
      xml.send(); //send GET request
  }

  /*****************************************
   ********** GET POSTs **********************
   ****************************************/
  // getPosts(username: string): Post[] {
  getPosts(): Post[] {
    return this.posts;
  }

   /*****************************************
   ********** GET POST **********************
   ****************************************/
  //getPost(username: string, id: number): Post {
  getPost(id: number): Post {
    var fetch_post = null; //if post doen't exist then return null
    this.posts.forEach(element => { //loop through post to get postid
        if(element.postid === id) {
          fetch_post = element;
        }
    })
    return fetch_post;
  }

  /*****************************************
   ********** NEW POST **********************
   ****************************************/
  //newPost(username: string): Post {
  newPost(): Post {
    var currentTime = new Date();

    let new_post = {
      postid: this.next_postid,
      created: currentTime,
      modified: currentTime,
      title: "",
      body: ""
    }

    

    //now add newpost to the post
    this.posts.push(new_post);
    
    //increase the postid
    this.increasePostid(new_post.postid);

    let xml = new XMLHttpRequest();
     // console.log("new post id is: ", new_post.postid.toString());
     xml.open('POST', this.url + '/' + new_post.postid.toString(), false);
    xml.onreadystatechange = ()=> {
    
      //if the response code is 201 do nothing
      if(xml.readyState === XMLHttpRequest.DONE) {
        if(xml.readyState === 4) {
          if(xml.status == 201) {
            //do nothing
            console.log("Succefully created new post!");
          } else { //if not 201 
            //delete the post and set the alert

            //get the index of the post
            let postIndex = this.posts.findIndex((myPost) =>myPost.postid == new_post.postid);
            // console.log("index of post is: ", postIndex);
            this.posts.splice(postIndex, 1);
            //decrease the post id
            this.decreasePostid();
            window.alert("Error creating a new post at the server");
            //navigate to the "list pane" of editor /editor/#/edit/:postid
            // window.location.href = 'http://localhost:4200/#/' //********CHANGE **********/
            window.location.href = 'http://localhost:3000/editor/#/'
          }
        } else {
          console.log("Error creating new post ", xml.statusText);
        }
        
      }
    }
   
    xml.setRequestHeader("Content-type", "application/json"); //send the header information
    xml.send(JSON.stringify(new_post));
    console.log("new postid is: ", this.next_postid);
    return new_post;
  }

  /*****************************************
   ********** UPDATE POST **********************
   ****************************************/

  // // //updatePost(username: string, post: Post): void {
  updatePost(post: Post): void {
    var postID:number = -1;
    let retrived_post:Post = null;
    // let post_title: string
    // let post_body: string
    // let post_date;
    var current_time = new Date();
    var original_post:Post = null;
    this.posts.forEach(element => {
      if(element.postid == post.postid) { //if the postid matched
        postID = post.postid;
        original_post = element
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
    }) //update the post in local post

    console.log("Updating post id is:", postID);
    let xml = new XMLHttpRequest();
    xml.open('PUT', this.url + '/' + postID.toString(), true);
    
    xml.onreadystatechange = ()=> {
      if(xml.readyState == XMLHttpRequest.DONE) {
        if(xml.readyState == 4) {
          console.log("status code is: ", xml.status);
          if(xml.status != 200) {
            window.alert("Error updating the post at the server!"); //display the alert
            //navigate to the edit view /editor/#/
            // window.location.href = "http://localhost:4200/#/edit/" + (postID.toString());

            window.location.href = "http://localhost:3000/editor/#/edit/" + (postID.toString());
          } else {
            console.log("Succefully updated the post at the server!");
          }
        } else {
          console.log("Error from update post: ", xml.statusText);
        }
      } 
    }
    
    xml.setRequestHeader("Content-type", "application/json");
    xml.send(JSON.stringify(retrived_post)); //update the post in the server side
  }


  
  /*****************************************
   ********** DELETE POST **********************
   ****************************************/
  //deletePost(username: string, postid: number): void {
  deletePost(postid: number): void { 

    let postIndex = this.posts.findIndex((myPost) =>myPost.postid == postid);
    if(postIndex != -1) {//do nothing if such post doesn't exist
      this.posts.splice(postIndex, 1);

      let xml = new XMLHttpRequest();
      xml.onreadystatechange = ()=> {
        if(xml.readyState === XMLHttpRequest.DONE) {
          if(xml.readyState === 4) {
            console.log("status code is: ", xml.status);
            if(xml.status === 204) {
              console.log("Succefully deleted the post!");
            } else {
              window.alert("ERROR deleting the post!"); //display the alert
              //navigate to the edit view
              // window.location.href = 'http://localhost:4200/#/';
              window.location.href = 'http://localhost:3000/editor/#/'
            }
          } else {
            console.log("ERROR from delete post: ", xml.statusText);
          }
        }
      }
      xml.open('DELETE', this.url + '/' + postid.toString(), true);
      xml.send(null);
    }
  
}

  parseJWT(token) {
      let base64Url = token.split('.')[1];
      let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(atob(base64));
  }


  getUsernameFromJWT(): String {
    let username: String;
    //reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
    var cookies = document.cookie;
  
    try {
      // console.log("cookies is ==>", cookies);
      let token = cookies.replace(/(?:(?:^|.*;\s*)jwt\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      // console.log("Tokem is ===>", token);

      // let decode = jwt.decode(token);
      let decode = this.parseJWT(token);
      username = decode.usr;
      console.log("decoded username is ==>", username);

    } catch(error) {
      console.log("Token error is=>", error);
    }
    return username
  }
}

export class Post {
  postid: number;
  created: Date;
  modified: Date;
  title: string;
  body: string;
}

//later needs to be deleted
export class Hero {
  id:number;
  name:string;
}

export const HEROES: Hero[] = [
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







