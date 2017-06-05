import { Component, OnInit, Input } from '@angular/core';

import { IngredientsService } from '../../shopping-list/ingredients.service';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
  }

  sendToShoppingList() {
    this.ingredientsService.setIngredients(this.recipe.ingredients);
  }
}
