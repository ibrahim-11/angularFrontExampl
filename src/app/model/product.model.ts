export class ProductModel{
    _links: any;
    constructor(
      public id:number,
      public  nom:string,
      public  description:string,
      public  prix:number
    ){

    }
   }
   
  //  export interface ProductModel{
  //      id:number,
  //      name:string,
  //      description:string,
  //      prix:number
  //  }
   