import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Product , Student} from 'src/product';
import { Form } from '@angular/forms';
import { flushMicrotasks } from '@angular/core/testing';
@Injectable({
  providedIn: 'root'
})
export class CallproductService {

  constructor(private _http : HttpClient) { }
 baseUrl ="http://localhost:5038/api/student2/";
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
  onFileUpload(file: FormData) {
    console.log("In ser" + file.get("name") + ' ' + file.get("address") + ' ' + file.get("document"));
    return this._http.post<Student>(this.baseUrl, 
      file
    )} 
   
  AddProduct(product :  Student)
  {
     

    return this._http.post<Student>(this.baseUrl, 
      product, {
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

