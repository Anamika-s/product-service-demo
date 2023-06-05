import { trigger } from '@angular/animations';
import { compileNgModule } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Product } from 'src/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
products : Product[]=[];
  product: Product | undefined;
// product : Product={id:0, name:"", price :0};
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
 
GetProductById(id : number) 
{
  console.log(id)
   let index = this.products.findIndex(x=>x.id== id);
  console.log(index)
  console.log(this.products[index])
  return this.products[index];
   }

   DeleteProduct(id : number)
   {  
    let index = this.products.findIndex(x=>x.id==id);
    console.log("p" + index);
      console.log("pos"+ index);
      this.products.splice(index,1);

   }

   EditProduct(id : number, product : Product)
   {  
     
    let index = this.products.findIndex(x=>x.id==id);
    console.log("p" + index);
     
    console.log(product)
     
     
    // console.log("POS" + temp)

    this.products[index] = product;
     
   }
   
}
