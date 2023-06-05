import { Component } from '@angular/core';
import { HelloService } from './hello.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers :[HelloService]
})
export class AppComponent {
  // DI
  constructor(private _helloService : HelloService)
  {

  }
  name : string ="";
  msg:string ="";
  CalHello() : void
  {
console.log("INside Fun" + this.name)
this.msg = this._helloService.helloMessage(this.name);



  }
}
