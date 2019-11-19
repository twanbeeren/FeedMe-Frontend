import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { FilterTagsComponent } from './filter-tags.component'



@NgModule({
  declarations: [FilterTagsComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
  ],
  exports: [
    FilterTagsComponent
  ]
})
export class FilterTagsModule { }
