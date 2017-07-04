import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  token: string;

  constructor() { }

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
            console.log('signed in!');
          });
      })
      .catch(error => console.error(error));
  }

  getToken() {
    firebase.auth().currentUser.getIdToken().then(token => this.token = token);
    return this.token;
  }

}
