import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from "rxjs/Subscription";

import { IngredientsService } from './ingredients.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingredientsSubscription: Subscription;

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
      this.ingredients = this.ingredientsService.getIngredients();
      this.ingredientsSubscription = this.ingredientsService
        .onIngredientsChange
        .subscribe((newIngredients) => {
          this.ingredients = newIngredients;
        });
  }

  ngOnDestroy() {
    this.ingredientsSubscription.unsubscribe();
  }

}
