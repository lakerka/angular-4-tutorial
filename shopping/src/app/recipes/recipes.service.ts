import { Recipe } from './recipe.model';

export class RecipesService {
  recipes: Recipe[] = [
    new Recipe('First recipe', 'First recipe description', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
    new Recipe('Second recipe', 'Second recipe description', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg')
  ];
  selectedRecipe: Recipe;

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
  
}
