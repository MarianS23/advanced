import { Injectable } from '@angular/core';
import { IPost, IPostResponse,IPostRequest } from '../interface/posts.interface';
import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsOperatorService {
  public posts:Array<IPost> = [];

  private url = environment.BACKEND_URL;

  private api = {posts:`${this.url}/posts`} 

  constructor(
    private http: HttpClient
  ) { }


  getAll():Observable<IPostResponse[]>{
    return this.http.get<IPostResponse[]>(this.api.posts)
  }

  create(post:IPostRequest):Observable<IPostResponse>{
    return this.http.post<IPostResponse>(this.api.posts,post)
  }

  update(post:IPostRequest, id:number):Observable<IPostResponse>{
    return this.http.patch<IPostResponse>(`${this.api.posts}/${id}`,post)
  }

  delete(id:number): Observable<void>{
    return this.http.delete<void>(`${this.api.posts}/${id}`)
  }
}
