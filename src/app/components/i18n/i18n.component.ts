import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.css']
})
export class I18nComponent implements OnInit {

  projectName: string = "FeedMe";
  tag: string = "vegan";

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
