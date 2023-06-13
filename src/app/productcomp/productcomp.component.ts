import { Component, NgModule, OnInit } from '@angular/core';
import { CallproductService } from '../callproduct.service';
import { Product, Student } from 'src/product';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { subscribeOn } from 'rxjs';
@Component({
  selector: 'app-productcomp',
  templateUrl: './productcomp.component.html',
  styleUrls: ['./productcomp.component.css']
})
export class ProductcompComponent implements OnInit {
  /**
   *
   */
  myForm: FormGroup;
   

  constructor(private _fb: FormBuilder, private _productService: CallproductService) {}
    

  

   ngOnInit(): void {
    this.myForm =this._fb.group({
      name: new FormControl(null),
      address: new FormControl(null),
      marks: new FormControl(null),
      file: new FormControl(null)
    });
    
  }
   selectedFile: any;
  onFileChange(event: any) {

    this.selectedFile = <File>event.target.files[0];

  }
  submit(data: any) {
 console.log(this.selectedFile)
    
     const formData = new FormData();
    formData.append('documentId', "111");
    formData.append('document',this.selectedFile);
    formData.append('name', data.controls.name.value);
    formData.append('address', data.controls.address.value);
    formData.append('marks', data.controls.marks.value);
    
    console.log("formData" + formData);
    this._productService.onFileUpload
      (formData).subscribe(res =>
        console.log("Res" + res)
      )
  }


}
