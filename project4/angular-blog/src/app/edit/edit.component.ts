import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../blog.service'
import { BlogService } from '../blog.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { HostListener } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  post: Post; //hold copy of the post that is being currently edited
  inputForm: FormGroup;
  postID: number;
  store_previous_postID: number = null;

  constructor(private formBuilder: FormBuilder, private blogService: BlogService,
    private router: Router, private activatedRoute: ActivatedRoute) { 
      this.inputForm = this.formBuilder.group({
      title: [''],
      body:['']
    })

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(() => this.getPost());  
  }

  getPost():void {
     this.postID = +this.activatedRoute.snapshot.paramMap.get('id');;
     this.post = this.blogService.getPost(this.postID);
    
    //  console.log("previous post********:", this.store_previous_postID);
    //  console.log("Current fetched post is:", this.postID);
    //  console.log("previous post dirty??:", this.inputForm.dirty);

     

     if(this.inputForm.dirty) {
      //  console.log("update previous post");
      //  console.log("mark to false now");
       this.inputForm.markAsPristine();
      this.blogService.updatePost(this.blogService.getPost(this.store_previous_postID));
      this.store_previous_postID = this.postID;
    } else {
      this.store_previous_postID = this.postID;
    }

  }


  delete():void {
    this.blogService.deletePost(this.post.postid);
    this.post = null;
    this.router.navigate(['/']);
  }

  @HostListener('window:beforeunload')
  save():void {
    if(this.inputForm.dirty) {
      this.blogService.updatePost(this.post);
      this.inputForm.markAsPristine();
    }
  }


  preview():void {
    if(this.inputForm.dirty) {
      this.save();
    }
      this.router.navigate(['/', 'preview', this.post.postid]);
  }

}
