import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor(private translate: TranslateService) {
    this.translate.addLangs(["en", "nl"]);

    let language = localStorage.getItem("language");
    if (language) {
      this.translate.setDefaultLang(language);
      this.translate.use(language);
    } else if (!this.setLanguage(navigator.language)) {
      this.setLanguage("en");
    }
  }

  public setLanguage(language: string): boolean {
    if (this.translate.getLangs().includes(language)) {
      this.translate.setDefaultLang(language);
      this.translate.use(language);
      localStorage.setItem("language", language);
      return true;
    } 
    return false;
  }
}
