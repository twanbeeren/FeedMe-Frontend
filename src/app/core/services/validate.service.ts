import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Validate {
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor(private db: AngularFirestore) { }

  validate(password: string) : Observable<boolean> {
    return this.db.collection<Validate>('Validate').valueChanges().pipe(
      map(items => {
        return items[0].password === password;
      })
    );
  }
}
