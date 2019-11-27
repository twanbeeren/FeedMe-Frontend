import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { TranslatorService } from 'src/app/core/services/translator.service';

@Component({
  selector: 'app-filter-tags',
  templateUrl: './filter-tags.component.html',
  styleUrls: ['./filter-tags.component.css']
})
export class FilterTagsComponent implements OnInit {

  filterTags: string[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.filterTags = ["Vegetarian", "LactoseFree", "GlutenFree"]
  }

  toggleFilter(tag: string): void {
    var index = this.menuService.toggledTags.indexOf(tag);
    if (index !== -1)
      this.menuService.toggledTags.splice(index, 1);
    else this.menuService.toggledTags.push(tag);
  }

  isFilteredTag(tag: string): boolean {
    return this.menuService.toggledTags.includes(tag);
  }
}
