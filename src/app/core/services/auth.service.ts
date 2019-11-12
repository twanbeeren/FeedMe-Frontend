import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  emailLogin(email: string, password: string) {
    return this.auth.auth.signInWithEmailAndPassword(email, password);
  }
}
