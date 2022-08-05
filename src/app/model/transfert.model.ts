export class TransfertModel{
    _links: any;
    constructor(
      public id:number,
      public  nomEnvoie:string,
      public  nomRecepteur:string,
      public montant: number,
      public frais: number,
      public status: boolean
    ){

    }
   }