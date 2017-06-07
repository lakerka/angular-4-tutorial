import { Component, OnInit } from '@angular/core';

import { IngredientsService } from './ingredients.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
      this.ingredients = this.ingredientsService.getIngredients();
      this.ingredientsService.onIngredientsChange.subscribe(
        (newIngredients) => {
          this.ingredients = newIngredients;
        }
      );
  }

}
