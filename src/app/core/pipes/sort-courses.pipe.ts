import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../classes/course';
import * as _ from 'lodash';
import { OrderService } from '../services/order.service';

@Pipe({
  name: 'sortCourses'
})
export class SortCoursesPipe implements PipeTransform {

  transform(value: Course[]): any {
    if (!value) { return value; }
    if (value.length <= 1) { return value; } // array with only one item
    return _.orderBy(value, ['priority', 'name']);
  }

}
