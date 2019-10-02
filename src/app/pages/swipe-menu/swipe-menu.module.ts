import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwipePageComponent } from './swipe-page/swipe-page.component';
import { DishcardComponent } from './swipe-page/dishcard/dishcard.component';
import { CustomMaterialModule } from 'src/app/core/material.module';



@NgModule({
  declarations: [SwipePageComponent, DishcardComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
  ]
})
export class SwipeMenuModule { }
