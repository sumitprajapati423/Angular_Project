import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productRoutingModule } from './product-routing.module';
import { MenComponent } from './men/men.component';
import { FemaleComponent } from './female/female.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductUpdateComponent } from './admin/product-update/product-update.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { MaterialModule } from '../materialUi/material/material.module';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


console.log("Product module load")
@NgModule({
  declarations: [
    MenComponent,
    FemaleComponent,
    AddtocartComponent,
    AddproductComponent,
    ProductDetailComponent,
    ProductUpdateComponent,
    ShowproductComponent,
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    productRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,

  ],

  exports:[

  ]
})
export class productModule { }
