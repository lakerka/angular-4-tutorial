import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions } from '@angular/http';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';
import { RecipesService } from '../recipes/recipes.service';


@Injectable()
export class StorageService {
  recipesDbUrl = 'https://ng-recipe-book-2861a.firebaseio.com/';

  constructor(private http: Http,
    private recipesService: RecipesService,
    private authService: AuthService) {}


  getTokenSearchParams(): URLSearchParams {
    const token = this.authService.getToken();
    const params = new URLSearchParams();
    params.set('auth', token);
    return params;
  }

  saveRecipes() {
    const params = this.getTokenSearchParams();
    return this.http.put(
      this.recipesDbUrl + 'recipes.json',
      this.recipesService.recipes,
      {search: params}
    ).subscribe(
      (response) => {},
      (error) => console.error(error)
    );
  }

  fetchRecipes() {
    const params = this.getTokenSearchParams();
    return this.http
      .get(this.recipesDbUrl + 'recipes.json', {search: params})
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
