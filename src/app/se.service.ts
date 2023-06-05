import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from'@angular/common/http';
import { Product } from 'src/product';
@Injectable({
  providedIn: 'root'
})
export class SeService {

  constructor(private _h : HttpClient) {
    
    
  }
  products : Product[];
  GetProducts()
  {
    return this._h.get<Product[]>("http://localhost:3000/products");
  }

  AddProduct(product: Product)
  {
    return this._h.post<Product>("http://localhost:3000/products", JSON.stringify(product),
    {
      headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Accept':'application/json'
      })
    });
  }
}
