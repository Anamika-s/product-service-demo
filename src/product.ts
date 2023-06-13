// class Product{

//     id : number;
//     name : string;
//     qty : number;
//     constructor(id : number , name : string, qty : number)
//     {
//         this.id = id;
//         this.name = name;
//     this.qty = qty;    }
// }

export interface Product{
    id : number;
    name : string;
    price : number;
}

export class Student 
{
    id : number=0;
    name :string="";
    address : string="";
    marks : number=0;

    documentId : string;
}