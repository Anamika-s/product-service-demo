import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-asyncdemo',
  templateUrl: './asyncdemo.component.html',
  styleUrls: ['./asyncdemo.component.css']
})
export class AsyncdemoComponent implements OnInit {

  private mySubscription : Subscription = new Subscription;
 

ngOnInit(): void {
  

const promise = new Promise (resolve=>
  {
    console.log("Promise started");
    setTimeout(()=>
    {
       resolve("Promise1 fullfilled")
       resolve("Promise2 fullfilled")
       resolve("Promise3 fullfilled")
       resolve("Promise4 fullfilled")

    }, 1000);
  })

  promise.then(res => console.log(res));

  
//   const observable = new  Observable(sub=>
//     {
//       console.log("ob started")
//       setTimeout(()=>
//       {
//  sub.next("Observable1 working");
//  sub.next("Observable2 working");
//  sub.next("Observable3 working");
//  sub.next("Observable4 working");
//       }, 1000)
    
//   })
//   observable.pipe(filter(x=>x=='Observable2 working'),
//   ).subscribe(res => console.log(res));

const observable = new Observable(sub=>
  { console.log("observable called");
  let x= 1;
setInterval(()=>
{ x=x+1;
  sub.next(x);
  },1000);
}); 
  // observable.pipe(
  //   filter(d=> d==='Onservable working1'),
  //     )
  //  observable.subscribe(res=> {console.log(res) });
  this.mySubscription = 
  observable.subscribe(res=> {console.log(res) });
  }

  Unscubscribe()
  {
    this.mySubscription.unsubscribe();
  }
}

