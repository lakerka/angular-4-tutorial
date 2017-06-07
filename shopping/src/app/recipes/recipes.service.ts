import { Injectable } from '@angular/core'

import { IngredientsService } from '../shopping-list/ingredients.service'
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';


@Injectable()
export class RecipesService {
  recipes: Recipe[] = [
    new Recipe('First recipe',
    'First recipe description',
    'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
    [
      new Ingredient('apple', 2),
      new Ingredient('pineapple', 3),
    ]),
    new Recipe('Second recipe',
    'Second recipe description',
    'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
    [
      new Ingredient('vodka', 1),
      new Ingredient('meat', 5),
    ])
  ];
  selectedRecipe: Recipe;

  constructor(private ingredientsService: IngredientsService) {}

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.ingredientsService.addIngredients(ingredients);
  }
}
