import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishcardComponent } from './swipe-page/dishcard/dishcard.component';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { SwipePageComponent } from './swipe-page/swipe-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DishcardComponent, SwipePageComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule,
  ],
  exports: [
    DishcardComponent,
    SwipePageComponent,
  ]
})
export class SwipeMenuModule { }
