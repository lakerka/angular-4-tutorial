import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Recipe } from '../recipes/recipe.model';
import { RecipesService } from '../recipes/recipes.service';


@Injectable()
export class StorageService {
  recipesDbUrl = 'https://ng-recipe-book-2861a.firebaseio.com/';

  constructor(private http: Http,
    private recipesService: RecipesService) {}

  saveRecipes() {
    return this.http.put(
      this.recipesDbUrl + 'recipes.json',
      this.recipesService.recipes
    ).subscribe(
      (response) => {},
      (error) => console.error(error)
    );
  }

  fetchRecipes() {
    return this.http
      .get(this.recipesDbUrl + 'recipes.json')
      .map((response) => {
        const recipes: Recipe[] = response.json();
        for(let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      })
      .subscribe(
        (recipes) => this.recipesService.setRecipes(recipes),
        (error) => console.error(error)
      );
  }

}
