import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from '../classes/menu-item';

@Pipe({
  name: 'filterByCourse'
})
export class FilterByCoursePipe implements PipeTransform {

  transform(items: MenuItem[], courseName: string): MenuItem[] {
    if (!items || !courseName) { return; }
    return items.filter(item => item.course && item.course.name === courseName);
  }

}
