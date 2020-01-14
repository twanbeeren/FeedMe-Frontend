import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-filter-tags',
  templateUrl: './filter-tags.component.html',
  styleUrls: ['./filter-tags.component.css'],
})
export class FilterTagsComponent implements OnInit {

  @Output() buttonClicked = new EventEmitter();
  filterTags: string[];

  constructor(public menuService: MenuService) { }

  ngOnInit() {
    this.filterTags = ['Vegetarian', 'LactoseFree', 'GlutenFree'];
  }

  toggleFilter(tag: string): void {
    const index = this.menuService.toggledTags.indexOf(tag);
    if (index !== -1) {
      this.menuService.toggledTags.splice(index, 1);
    } else { this.menuService.toggledTags.push(tag); }

    this.buttonClicked.emit(tag);
  }

  isFilteredTag(tag: string): boolean {
    return this.menuService.toggledTags.includes(tag);
  }
}
