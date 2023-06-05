import { Component , NgModule, OnInit } from '@angular/core';
import { CallproductService } from '../callproduct.service';
import { Product } from 'src/product';
@Component({
  selector: 'app-productcomp',
  templateUrl: './productcomp.component.html',
  styleUrls: ['./productcomp.component.css']
})
export class ProductcompComponent implements OnInit {
 /**
  *
  */
 constructor(private _productService : CallproductService) {
  

  
 }
 products : Product[];
 ngOnInit(): void {
    this._productService.GetProducts().subscribe(res=>
      {
      console.log(res)
      this.products= res;
      console.log(this.products)
    });
    
    this.GetProductByid();
    this.AddProduct();
  
    }
    product : Product;
    GetProductByid()
    {
      this._productService.GetProductById(12).subscribe(res=>
        {
        console.log(res)
        this.product= res;
        console.log(this.product)
      });  
 }

 AddProduct()
 {
  let product = {id:20, name :"Scanne",price:900};
  this._productService.AddProduct(product).subscribe(res=>
    {
      console.log(res);
    })
 }
}
