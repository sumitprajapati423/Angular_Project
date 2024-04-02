import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenComponent } from './men/men.component';
import { FemaleComponent } from './female/female.component';

import { AddtocartComponent } from './addtocart/addtocart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShowproductComponent } from './showproduct/showproduct.component';


import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { ProductUpdateComponent } from './admin/product-update/product-update.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { authGuard } from '../Guard/auth.guard';
const routes: Routes = [
  {
    path:'addproduct', component : AddproductComponent
  },
  {
    path:'men', component: MenComponent
  },
  {
    path:'female', component: FemaleComponent
  },
  // {
  //   path:'addcart', component : AddtocartComponent
  // },
  {
    path:'details', component : ProductDetailComponent
  },
  {
    // dynamic routing
    path:'update-product/:id', component : ProductUpdateComponent
  },
  {
    path:'admin-dashbord', component : DashboardComponent,canActivate:[authGuard]
  },


// dynamic routing -----
  {
    path:'showproduct/:cat/:id', component : ShowproductComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class productRoutingModule { }
