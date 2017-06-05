import { EventEmitter} from '@angular/core'

import { Ingredient } from '../shared/ingredient.model';


export class IngredientsService {
  public onIngredientsChanges: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('apple', 3),
    new Ingredient('apple', 3),
  ];

  getIngredients() {
    return this.ingredients.splice();
  }

  setIngredients(ingredients: Ingredient[]) {
    this.ingredients = ingredients;
  }

  add(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
