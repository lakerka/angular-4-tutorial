import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDYhVhO4o5iR7aEOvSLSMosXctCWa4F6sw',
      authDomain: 'ng-recipe-book-2861a.firebaseapp.com',
    }
    firebase.initializeApp(firebaseConfig);
  }

}
