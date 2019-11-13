import { Component } from '@angular/core';
import { TranslatorService } from './core/services/translator.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private translator: TranslatorService) {
  }
}
