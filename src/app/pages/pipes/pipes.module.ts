import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByCoursePipe } from 'src/app/core/pipes/filter-by-course.pipe';
import { FilterByTagsPipe } from 'src/app/core/pipes/filter-by-tags.pipe';



@NgModule({
  declarations: [FilterByTagsPipe],
  imports: [
    CommonModule,
  ],
  exports: [FilterByTagsPipe]
})
export class PipesModule { }
