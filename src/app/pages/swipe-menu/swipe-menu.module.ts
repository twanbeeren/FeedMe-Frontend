import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishcardComponent } from './swipe-page/dishcard/dishcard.component';
import { CustomMaterialModule } from 'src/app/core/material.module';



@NgModule({
  declarations: [DishcardComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
  ],
  exports: [
    DishcardComponent
  ]
})
export class SwipeMenuModule { }
