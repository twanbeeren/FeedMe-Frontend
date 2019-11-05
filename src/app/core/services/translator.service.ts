import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['en', 'nl']);

    const language = localStorage.getItem('language');
    if (language) {
      this.translateService.setDefaultLang(language);
      this.translateService.use(language);
    } else if (!this.setLanguage(navigator.language)) {
      this.setLanguage('en');
    }
  }

  public setLanguage(language: string): boolean {
    if (this.translateService.getLangs().includes(language)) {
      this.translateService.setDefaultLang(language);
      this.translateService.use(language);
      localStorage.setItem('language', language);
      return true;
    }
    return false;
  }

  public getLanguage(): string {
    return this.translateService.getDefaultLang();
  }

  public translate(key: string, params?: Object): string {
    return this.translateService.instant(key, params);
  }
}
