import { EventEmitter} from '@angular/core'

import { Ingredient } from '../shared/ingredient.model';


export class IngredientsService {
  public onIngredientsChange: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('apple', 3),
    new Ingredient('fruit', 5),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.onIngredientsChange.emit(this.getIngredients());
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.onIngredientsChange.emit(this.getIngredients());
  }
}
