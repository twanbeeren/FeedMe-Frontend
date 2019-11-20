import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor(private auth: AngularFireAuth) {
    this.auth.authState.subscribe(user => {
      if (!user) {
        this.isLoggedIn = false;
        return;
      }
      this.isLoggedIn = true;
    });
  }

  emailLogin(email: string, password: string) {
    return this.auth.auth.signInWithEmailAndPassword(email, password);
  }
}
