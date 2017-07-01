import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { IngredientsService } from '../ingredients.service';
import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
  }

  addIngredient(name: string, amount: number) {
    const value = this.form.value;
    const ingredient: Ingredient = new Ingredient(value.name, value.amount);
    this.ingredientsService.addIngredient(ingredient);
  }
}
