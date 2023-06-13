import { Component , OnInit} from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
/**
 *
 */
constructor(private _ro : ActivatedRoute, private route : Router) {
  
  
}
ngOnInit(): void {
  console.log("insode")
  console.log(this._ro.snapshot.params["id"]);
}

GoBack()
{
  this.route.navigate(['list']);
}
}
