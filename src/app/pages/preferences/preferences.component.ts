import { Component, OnInit } from '@angular/core';
import { TranslatorService } from 'src/app/core/services/translator.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  language: string;

  constructor(private translator: TranslatorService) {}

  ngOnInit() {
    this.language = this.translator.getLanguage();
  }

  changeLanguage(language: string) {
    this.translator.setLanguage(language);
  } 

}
