import { Component, OnInit } from '@angular/core';
import { PostsOperatorService } from '../services/data-processor/posts-operator.service';
import { IPost, IPostResponse } from '../services/interface/posts.interface';


@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss']
})
export class AdminBlogComponent {
  constructor(
    private PostsOperatorService: PostsOperatorService
  ) { }
  ngOnInit(): void {
    this.getPost();
  }

  //connect with service component
  public posts = this.PostsOperatorService.posts;

  //змінні адмін-форми створення посту
  public adminTitle!: string;
  public adminText!: string;
  public adminAuthor!: string;

  public postId!: number;
  public isEditClick: boolean = false;



  getPost(): void {
    this.PostsOperatorService.getAll().subscribe(data => {
      this.posts = data;
    })
  }

  addPost() {
    const newPost = {
      title: this.adminTitle,
      text: this.adminText,
      author: this.adminAuthor
    }
    this.PostsOperatorService.create(newPost).subscribe(() => {
      this.getPost();
    });
    this.adminAuthor = '';
    this.adminText = '';
    this.adminTitle = '';
  }

  editPost(post: IPost): void {
    this.adminAuthor = post.author;
    this.adminText = post.text;
    this.adminTitle = post.title;
    this.postId = post.id;
    this.isEditClick = true;

  }

  savePost(): void {
    const updatePost = {
      title: this.adminTitle,
      text: this.adminText,
      author: this.adminAuthor
    }
    this.PostsOperatorService.update(updatePost, this.postId).subscribe(() => {
      this.getPost();
      this.adminAuthor = '';
      this.adminText = '';
      this.adminTitle = '';
    })
  }

  deletePost(post: IPost): void {
    if (confirm("are you sure")) {
      this.PostsOperatorService.delete(post.id).subscribe(() => {
        this.getPost();
      })
    }
  }







}
