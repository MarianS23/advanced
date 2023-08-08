import { Component, OnInit } from '@angular/core';
import { PostsOperatorService } from '../services/data-processor/posts-operator.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  public posts = this.PostsOperatorService.posts;
  constructor (
    private PostsOperatorService:PostsOperatorService
  ){}
  ngOnInit(): void {
    this.getPost()
  }

  getPost():void{
    this.PostsOperatorService.getAll().subscribe(data=>{
      this.posts = data;
    })
  }
  
}
