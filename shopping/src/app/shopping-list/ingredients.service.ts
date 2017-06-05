import { Ingredient } from '../shared/ingredient.model';

export class IngredientsService {
  ingredients: Ingredient[] = [
    new Ingredient('apple', 3),
    new Ingredient('apple', 3),
  ];

  add(name: String, amount: Number) {
    let ingredient: Ingredient = new Ingredient(name, amount);
    this.ingredients.push(ingredient);
  }
}
