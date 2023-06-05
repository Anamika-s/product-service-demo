import { Component , OnInit } from '@angular/core';
import { Product } from 'src/product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent  implements OnInit{
  products : Product[] = [];
  product : Product= {id:0, name:"", price:0};
   constructor(private _productService : ProductService)
  {
  
}

ngOnInit(): void {
this.GetProducts();
}
GetProducts() 
{
 this.products =  this._productService.GetProducts();
}

AddProduct()
{
  this.product = {id:10, name : "PLotter", price:10};
  this._productService.AddProduct(this.product)
}
  GetProductById()
  {
    this.product = this._productService.GetProductById(1);
  }
  DeleteProduct()
  {this._productService.DeleteProduct(10);

  }

  EditProduct()
  {
    this.product = {id:11, name : "nnnnn", price:1000};
    this._productService.EditProduct(11, this.product )
  }

}
