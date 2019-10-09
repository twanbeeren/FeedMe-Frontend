import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from '../classes/menu-item';
import { stringify } from 'querystring';

@Pipe({
  name: 'filterByCourse'
})
export class FilterByCoursePipe implements PipeTransform {

  transform(items: MenuItem[], courseSearch: number): MenuItem[] {
    return items.filter(item => item.course.id === courseSearch);
  }

}
