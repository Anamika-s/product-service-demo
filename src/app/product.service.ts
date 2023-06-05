import { trigger } from '@angular/animations';
import { compileNgModule } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Product } from 'src/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
products : Product[]=[];
product : Product;
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
 
GetProductById(id : number) : Product
{
   
  for(let product of this.products)
  {
    if(product.id == id)
    this.product = product;
 break;
  }
  return this.product;
   }

   DeleteProduct(id : number)
   {  
  //  let product =  this.GetProductById(id);
    let position =0;
    let product =  this.products.find(c=>id == id);
    position = this.products.indexOf(this.product);
console.log(position);
    this.products.splice(position,1);

   }

   EditProduct(id : number, product : Product)
   {  
   
    let position =0;
    console.log(id);
    console.log(product)
    let temp =  this.products.find(c=>id == id);
    
    
 console.log(temp)

this.products[position] = product;
     
   }
   
}
