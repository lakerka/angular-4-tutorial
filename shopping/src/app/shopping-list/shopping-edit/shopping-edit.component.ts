import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";

import { IngredientsService } from '../ingredients.service';
import { Ingredient } from '../../shared/ingredient.model';

import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  ingredientIndex: number;

  onIngredientEditSubscription: Subscription;
  isEditMode: boolean = false;
  editedIngredient: Ingredient;

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.onIngredientEditSubscription = this.ingredientsService
      .onIngredientEdit
      .subscribe(
        (index: number) => {
          const editedIngredient = this.ingredientsService.getIngredient(index);
          this.ingredientIndex = index;
          this.editedIngredient = editedIngredient;
          this.isEditMode = true;
          this.form.setValue({
            'name': editedIngredient.name,
            'amount': editedIngredient.amount
          });
        }
      );
  }

  ngOnDestroy() {
    this.onIngredientEditSubscription.unsubscribe();
  }

  getIngredient() {
    const value = this.form.value;
    const ingredient: Ingredient = new Ingredient(value.name, value.amount);
    return ingredient;
  }

  addIngredient() {
    this.ingredientIndex = this.ingredientsService
      .addIngredient(this.getIngredient());
  }

  updateIngredient() {
    const ingredient = this.getIngredient();
    this.ingredientsService
      .updateIngredient(this.ingredientIndex, ingredient);
  }

  onDelete() {
    this.ingredientsService.deleteIngredient(this.ingredientIndex);
    this.onClear();
  }

  onClear() {
    this.isEditMode = false;
    this.ingredientIndex = undefined;
    this.form.reset();
  }
}
