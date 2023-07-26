import { Injectable } from '@angular/core';
import { IUsers } from '../interfaces/register.interface';
import { IBlogs } from '../interfaces/register.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public users: Array<IUsers> = [
    // {
    //   id: 1,
    //   userName: 'Maryan',
    //   email: 'Shutov',
    //   password: 1234
    // },
    // {
    //   id: 2,
    //   userName: 'Ira',
    //   email: 'Shutova',
    //   password: 5678
    // }
  ];
  public blogs: Array<IBlogs> = [
    // {
    //   id: 1,
    //   postedBy: 'Maryan',
    //   topic: 'Angular 2',
    //   date:"some string",
    //   title:'First post'
    // },
    // {
    //   id: 2,
    //   postedBy: 'Ira',
    //   topic: 'Ukrainian series',
    //   date:"some string",
    //   title:'Second post'
    // }
  ];

  constructor() { }

}


