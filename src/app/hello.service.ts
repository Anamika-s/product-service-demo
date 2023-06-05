import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

   helloMessage(name : string) : string
   {
    return "Hello " + name;
   }
  constructor() { }
}
