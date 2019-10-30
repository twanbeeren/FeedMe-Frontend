import { Component } from '@angular/core';
import { TranslatorService } from './core/services/translator.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FeedMe';

  constructor(
    private translator: TranslatorService,
    private db: AngularFirestore) {

    this.db.collection('MenuItems').valueChanges().subscribe(items => {
      console.log(items);
    })
  }
}
