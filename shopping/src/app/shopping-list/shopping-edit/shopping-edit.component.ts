import { Component, OnInit } from '@angular/core';

import { IngredientsService } from '../ingredients.service';
import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
  }

}
