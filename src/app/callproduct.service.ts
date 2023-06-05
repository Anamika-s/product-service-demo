import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Product } from 'src/product';
@Injectable({
  providedIn: 'root'
})
export class CallproductService {

  constructor(private _http : HttpClient) { }
 baseUrl ="http://localhost:3000/products/";
  GetProducts() 
  {
    return this._http.get<Product[]>(this.baseUrl);
  }

  GetProductById(id : number)
  {
    return this._http.get<Product>(this.baseUrl + id)
  }

  DeleteProductBy(id : number)
  {
    return this._http.delete<Product>(this.baseUrl + id)
  }

  AddProduct(product : Product)
  {
    return this._http.post<Product>(this.baseUrl, 
      JSON.stringify(product), {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      }
    )} 
    
  EditProduct(id:  number, product : Product)
  {
    return this._http.put<Product>(this.baseUrl + id, product);
  }
}

