import { Subject } from "rxjs/Subject";

import { Ingredient } from '../shared/ingredient.model';


export class IngredientsService {
  public onIngredientsChange: Subject<Ingredient[]> = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('apple', 3),
    new Ingredient('fruit', 5),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.onIngredientsChange.next(this.getIngredients());
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.onIngredientsChange.next(this.getIngredients());
  }
}
