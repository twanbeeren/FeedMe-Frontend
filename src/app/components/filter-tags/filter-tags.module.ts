import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { FilterTagsComponent } from './filter-tags.component'
import { TranslateModule } from '@ngx-translate/core';
import { FilterByTagsPipe } from 'src/app/core/pipes/filter-by-tags.pipe';

@NgModule({
  declarations: [FilterTagsComponent, FilterByTagsPipe],
  imports: [
    CommonModule,
    CustomMaterialModule,
    TranslateModule
  ],
  exports: [
    FilterTagsComponent,
    FilterByTagsPipe,
  ]
})
export class FilterTagsModule { }
