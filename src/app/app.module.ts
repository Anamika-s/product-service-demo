import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { AsyncdemoComponent } from './asyncdemo/asyncdemo.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductcompComponent } from './productcomp/productcomp.component'
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AsyncdemoComponent,
    ProductcompComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
