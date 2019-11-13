import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-filter-tags',
  templateUrl: './filter-tags.component.html',
  styleUrls: ['./filter-tags.component.css']
})
export class FilterTagsComponent implements OnInit {

  filterTags: string[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.filterTags = ["Vegetarian", "Meat", "LactoseFree", "GlutenFree"]
  }

  toggleFilter(tag: string): void {
    var index = this.menuService.toggledTags.indexOf(tag);
    console.log(index);
    if (index !== -1)
      this.menuService.toggledTags.splice(index, 1);
    else this.menuService.toggledTags.push(tag);
    console.log(this.menuService.toggledTags);
  }

  isFilteredTag(tag: string): boolean {
    return this.menuService.toggledTags.includes(tag);
  }
}
