import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipesSubscription: Subscription;
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
    this.recipesSubscription = this.recipesService
      .onRecipesChanged
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      });
  }

  ngOnDestroy() {
    this.recipesSubscription.unsubscribe();
  }

}
