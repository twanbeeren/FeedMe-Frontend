import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this._isLoggedIn.asObservable();
  isInKitchen = false;

  constructor(private auth: AngularFireAuth) {
    this.auth.authState.subscribe(user => {
      if (!user) {
        this._isLoggedIn.next(false);
        return;
      }
      this._isLoggedIn.next(true);
    });
  }

  emailLogin(email: string, password: string) {
    return this.auth.auth.signInWithEmailAndPassword(email, password);
  }
}
