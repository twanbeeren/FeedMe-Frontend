import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from '../classes/menu-item';

@Pipe({
  name: 'filterByCourse'
})
export class FilterByCoursePipe implements PipeTransform {

  transform(items: MenuItem[], courseId: string): MenuItem[] {
    if (!items || !courseId) { return; }
    return items.filter(item => item.course.name === courseId);
  }

}
