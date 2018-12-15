import { Component, OnInit } from '@angular/core';
import { Parser, HtmlRenderer } from 'commonmark';
import { Post, BlogService } from '../blog.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  private post: Post;
  private previewTitle;
  private previewBody;
  private postID: number;
  
  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService,
    private router: Router) { 
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe(() => this.previewPost());
  }

  previewPost(): void {
    this.postID = +this.activatedRoute.snapshot.paramMap.get('id');
    this.post = this.blogService.getPost(this.postID);
    let reader = new Parser;
    let writer = new HtmlRenderer;
    if(this.post != null) { //post must not be null
      this.previewTitle = writer.render(reader.parse(this.post.title));
      this.previewBody = writer.render(reader.parse(this.post.body));
    }
  }

  editPage(): void {
    this.router.navigate(['/edit/' + this.post.postid]);
  }
}
