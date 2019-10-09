import { Component } from '@angular/core';
import { TranslatorService } from './core/services/translator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FeedMe';
  
  constructor(private translator: TranslatorService) {
  }
}
