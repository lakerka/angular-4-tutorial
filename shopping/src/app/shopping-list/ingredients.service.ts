import { Subject } from "rxjs/Subject";

import { Ingredient } from '../shared/ingredient.model';


export class IngredientsService {
  public onIngredientsChange: Subject<Ingredient[]> = new Subject<Ingredient[]>();
  public onIngredientEdit: Subject<number> = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('apple', 3),
    new Ingredient('fruit', 5),
  ];

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  editIngredient(index: number) {
    this.onIngredientEdit.next(index);
  }

  updateIngredient(index, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.onIngredientsChange.next(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.onIngredientsChange.next(this.getIngredients());
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.onIngredientsChange.next(this.getIngredients());
    return this.ingredients.length - 1;
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.onIngredientsChange.next(this.getIngredients());
  }
}
