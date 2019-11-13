import { Component, OnInit, Input } from '@angular/core';
import { TranslatorService } from 'src/app/core/services/translator.service';
import { FilterByTagsPipe } from 'src/app/core/pipes/filter-by-tags.pipe';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  language: string;

  selectedOptions: string[];

  constructor(
    private translator: TranslatorService,
    private menuService: MenuService) {}

  ngOnInit() {
    this.language = this.translator.getLanguage();
  }

  changeLanguage(language: string): void  {
    this.translator.setLanguage(language);
  }

  updateFilters(): void {
    this.menuService.toggledTags = [];
    this.selectedOptions.forEach(option => {
      this.menuService.toggledTags.push(option);
    });
  }
}
