import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { FilterTagsModule } from 'src/app/components/filter-tags/filter-tags.module';
import { DishcardComponent } from './swipe-page/dishcard/dishcard.component';
import { SwipePageComponent } from './swipe-page/swipe-page.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [DishcardComponent, SwipePageComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule,
    FilterTagsModule,
    PipesModule,
  ],
  exports: [
    DishcardComponent,
    SwipePageComponent,
  ]
})
export class SwipeMenuModule { }
