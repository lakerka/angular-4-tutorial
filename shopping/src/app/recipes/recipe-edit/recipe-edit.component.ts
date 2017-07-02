import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormArray,
  Validators
} from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  form: FormGroup;
  recipeIndex: number;
  isEditMode: boolean;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.recipeIndex = +params['id'];
        this.isEditMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  initForm() {
    let recipe: Recipe = new Recipe('', '', '', []);
    let ingredients: FormArray = new FormArray([]);

    if (this.isEditMode) {
      recipe = this.recipesService.getRecipe(this.recipeIndex);
      ingredients = new FormArray(recipe.ingredients
        .map((ingredient: Ingredient) => {
          return this.getIngredientFormGroup(
            ingredient.name,
            ingredient.amount
          );
        })
      );
    }

    this.form = new FormGroup({
      'name': new FormControl(recipe.name, Validators.required),
      'imagePath': new FormControl(recipe.imagePath, Validators.required),
      'description': new FormControl(recipe.description, Validators.required),
      'ingredients': ingredients,
    });
  }

  onAddIngredient() {
    (<FormArray>this.form.get('ingredients'))
      .push(this.getIngredientFormGroup());
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.form.get('ingredients'))
      .removeAt(index);
  }

  getIngredientFormGroup(name?: string, amount?: number) {
    return new FormGroup({
      'name': new FormControl(name, Validators.required),
      'amount': new FormControl(amount, [
        Validators.required,
        Validators.pattern(/^[1-9]\d*$/)
      ]),
    })
  }

  getFormRecipe(): Recipe {
    const value = this.form.value;
    // const rawIngredients = value['ingredients'];
    // const ingredients = rawIngredients.map(
    //   (ingredient) => {
    //     return new Ingredient(
    //       ingredient['name'],
    //       ingredient['amount'],
    //     )
    //   }
    // );

    const recipe = new Recipe(
      value['name'],
      value['description'],
      value['imagePath'],
      value['ingredients']
    );
    return recipe;
  }

  onSubmit() {
    if (this.isEditMode) {
      this.recipesService.updateRecipe(this.recipeIndex, this.getFormRecipe());
    } else {
      this.recipesService.addRecipe(this.getFormRecipe());
    }
  }

  onCancel() {
    this.router.navigate(['..'], {relativeTo: this.activatedRoute});
  }
}
