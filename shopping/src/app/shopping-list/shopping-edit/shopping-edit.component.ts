import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  add(name: String, amount: Number) {
    let ingredient: Ingredient = new Ingredient(name, amount);
    this.addIngredient.emit(ingredient);
  }
}
