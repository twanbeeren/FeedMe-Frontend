import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from '../classes/menu-item';
import { stringify } from 'querystring';
import { Course } from '../classes/course';

@Pipe({
  name: 'filterByCourse'
})
export class FilterByCoursePipe implements PipeTransform {

  transform(items: MenuItem[], courseId: string): MenuItem[] {
    return items.filter(item => item.course.name === courseId);
  }

}
