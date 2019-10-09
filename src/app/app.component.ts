import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FeedMe';
  
  constructor(private translate: TranslateService) {
    this.setLanguage(navigator.language);
  }

  //Set default language and checks if translation is available in browser language
  setLanguage(lang: string) {
    this.translate.setDefaultLang('en');

    if (this.translate.getLangs().includes(lang)) {
      this.translate.use(navigator.language);
    }
  }
}
