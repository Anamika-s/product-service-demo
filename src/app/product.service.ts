import { Injectable } from '@angular/core';
import { Product } from 'src/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
products : Product[]=[];
   constructor() {
     this.LoadProducts();
 
   }
   LoadProducts ()
  {
    this.products = 
    [
      {id: 10 ,name : "Mouse" , price : 1000},
{id: 11 ,name : "Plotter" , price : 1000},

{id: 12 ,name : "Scanner" , price : 1000},

{id: 13 ,name : "Printer" , price : 1000},

{id: 14 ,name : "Monitor" , price : 1000}

    ];
 
  }

  GetProducts() : Product[]

{
   return this.products;
}

AddProduct(product : Product)
{
this.products.push(product);
}
}
