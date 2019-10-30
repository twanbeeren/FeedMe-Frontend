import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from '../classes/menu-item';
import { MenuService } from '../services/menu.service';

@Pipe({
  name: 'filterByTags'
})
export class FilterByTagsPipe implements PipeTransform {

  constructor(private menuService: MenuService) {}

  transform(items: MenuItem[], tags: string[] = this.menuService.filterTags): MenuItem[] {
    if (!items || !tags) { return items; } 
    if (tags.length == 0) { return items; }
    
    var filtered : MenuItem[] = []; // Filtered list
    items.forEach(item => {
      var value = 0; // Amount of included tags
      item.tags.forEach(tag => {
        if (tags.includes(tag))
          value++; // Increase value for each included tag
      });
      if (value >= tags.length) // Does item have all tags?
        filtered.push(item);
    });
    return filtered; // Return all items with all the specified tags
  }
}
