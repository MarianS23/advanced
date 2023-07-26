export interface IUsers{
    id:number,
    userName:string,
    email:string,
    password:string|number  
  }
  
  export interface IBlogs{
    id:number,
    postedBy:string,
    topic:string,
    date:string,
    title:string
  }