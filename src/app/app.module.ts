import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
 
import { AsyncdemoComponent } from './asyncdemo/asyncdemo.component';
import {HttpClientModule} from '@angular/common/http';
 import {R1outingModule, comps} from './routing/routing.module';
import { Form1Component } from './form1/form1.component';
  import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    comps,
    AsyncdemoComponent,
    Form1Component
     
     
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    R1outingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
