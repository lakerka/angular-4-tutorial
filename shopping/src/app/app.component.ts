import { Component } from '@angular/core';

import { IngredientsService } from './shopping-list/ingredients.service';
import { RecipesService } from './recipes/recipes.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IngredientsService, RecipesService]
})
export class AppComponent {
  title = 'app works!';
  page: String = 'recipes';

  openPage(page: String) {
    this.page = page;
  }
}
