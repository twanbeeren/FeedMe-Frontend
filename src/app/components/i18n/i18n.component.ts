import { Component, OnInit } from '@angular/core';
import { TranslatorService } from 'src/app/core/services/translator.service';

@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.css']
})
export class I18nComponent implements OnInit {

  projectName: string = "FeedMe";
  tag: string = "vegan";

  constructor(private translator: TranslatorService) {}

  ngOnInit() {
  }

  changeLanguage(language: string) {
    this.translator.setLanguage(language);
  }
  
}
