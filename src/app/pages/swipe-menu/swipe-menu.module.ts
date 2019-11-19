import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DishcardComponent } from './swipe-page/dishcard/dishcard.component';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { SwipePageComponent } from './swipe-page/swipe-page.component';



@NgModule({
  declarations: [DishcardComponent, SwipePageComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    DragDropModule
  ],
  exports: [
    DishcardComponent,
    SwipePageComponent
  ]
})
export class SwipeMenuModule { }
