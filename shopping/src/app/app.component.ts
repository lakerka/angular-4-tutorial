import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

import { IngredientsService } from './shopping-list/ingredients.service';
import { RecipesService } from './recipes/recipes.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ngOnInit() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDYhVhO4o5iR7aEOvSLSMosXctCWa4F6sw',
      authDomain: 'ng-recipe-book-2861a.firebaseapp.com',
    }
    firebase.initializeApp(firebaseConfig);
  }
}
