import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  token: string = null;

  constructor(private router: Router) { }

  signUp(email: string, password: string) {
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => console.error(error));
  }

  signIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user: firebase.User) => {
          user.getIdToken().then(token => {
            this.token = token;
            this.router.navigate(['/']);
          });
      })
      .catch(error => console.error(error));
  }

  signOut() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
  }

  getToken() {
    firebase.auth().currentUser.getIdToken().then(token => this.token = token);
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

}
