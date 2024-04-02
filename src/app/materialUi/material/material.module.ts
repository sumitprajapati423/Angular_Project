import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

let materialUi = [
  MatCardModule,
  MatButtonModule
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialUi
  ],
  exports:[
    materialUi
  ]
})
export class MaterialModule { }
