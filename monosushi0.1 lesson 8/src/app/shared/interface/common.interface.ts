export interface IdiscountRequest{
    date:any,
    name:string,
    title:string,
    description:string,
    image:string,
}
export interface IDiscountResponce extends IdiscountRequest{
    id:number
}

export interface ICategoryRequest{
    name:string,
    way:string,
    file:string
}
export interface ICategoryResponce extends ICategoryRequest{
    id:number
}