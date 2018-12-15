import { Component, OnInit } from '@angular/core';
import { Post } from '../blog.service'
import { BlogService } from '../blog.service'
import { Router } from '@angular/router'
import { HostListener } from '@angular/core'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private posts: Post[] = [];
  private userName: String;

  constructor(private blogService: BlogService, private router: Router) {
    this.userName = blogService.getUsernameFromJWT();
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts():void {
    this.posts = this.blogService.getPosts();
  }

  @HostListener('window:beforeunload')
  browserBackArrowSave() {
    window.onhashchange = function() {
      //blah blah blah
     }
  }

  clicked():void {
    let newPost = this.blogService.newPost();
    let newPostPostid = newPost.postid;
    this.router.navigate(['/edit', newPostPostid.toString()]);
  }
}
