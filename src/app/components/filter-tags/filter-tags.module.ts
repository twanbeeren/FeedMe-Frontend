import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { FilterTagsComponent } from './filter-tags.component'
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [FilterTagsComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    TranslateModule
  ],
  exports: [
    FilterTagsComponent
  ]
})
export class FilterTagsModule { }
