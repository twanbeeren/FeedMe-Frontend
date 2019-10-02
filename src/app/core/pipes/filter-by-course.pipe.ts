import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from '../classes/menu-item';
import { stringify } from 'querystring';

@Pipe({
  name: 'filterByCourse'
})
export class FilterByCoursePipe implements PipeTransform {

  transform(items: MenuItem[], courseSearch: string): MenuItem[] {
    return items.filter(item => item.course.name === courseSearch);
  }

}
