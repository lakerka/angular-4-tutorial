import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() showRecipeDetail: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('First recipe', 'First recipe description', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
    new Recipe('Second recipe', 'Second recipe description', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

  showDetail(recipe: Recipe) {
    this.showRecipeDetail.emit(recipe);
  }
}
