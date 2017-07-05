import { Component, OnInit } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import * as firebase from 'firebase';

import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: Http,
    private authService: AuthService) {}

  ngOnInit() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDYhVhO4o5iR7aEOvSLSMosXctCWa4F6sw',
      authDomain: 'ng-recipe-book-2861a.firebaseapp.com',
    }
    firebase.initializeApp(firebaseConfig);
  }

}
