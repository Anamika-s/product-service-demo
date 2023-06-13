import { NgModule, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { ProductcompComponent } from '../productcomp/productcomp.component';
import { NoComponent } from '../no/no.component';
import {  DetailsComponent } from '../details/details.component';

export const routes : Routes=
[
  {path:'', component:ProductcompComponent},
{path:'home', component:ProductComponent},
{path:'list', component:ProductcompComponent},
{path:'details/:id', component : DetailsComponent},
{path:"**",  component:NoComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
  })
export class R1outingModule { }
export const comps = [ProductComponent, ProductcompComponent, NoComponent
, DetailsComponent];
