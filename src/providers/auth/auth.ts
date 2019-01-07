import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthProvider {

  constructor(private afauth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  resetPassword(email: string): Promise<void> {
    return this.afauth.auth.sendPasswordResetEmail(email);
  }

 
}
