import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishcardComponent } from './swipe-page/dishcard/dishcard.component';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { SwipePageComponent } from './swipe-page/swipe-page.component';
import { TutorialComponent } from 'src/app/components/tutorial/tutorial.component';



@NgModule({
  declarations: [DishcardComponent, SwipePageComponent, TutorialComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
  ],
  exports: [
    DishcardComponent,
    SwipePageComponent,
    TutorialComponent
  ]
})
export class SwipeMenuModule { }
