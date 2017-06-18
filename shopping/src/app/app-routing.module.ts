import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent }  from "./recipes/recipes.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

import { ShoppingListComponent }  from "./shopping-list/shopping-list.component";



const appRoutes: Routes = [
  { path: '',  redirectTo: 'recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ]
  },

  { path: 'shopping-list', component: ShoppingListComponent}

  // { path: '', component: HomeComponent },
  // { path: 'recipes', component: ServersComponent,

  //   children: [
  //     { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
  //     // { path: ':id', component: ServerComponent},
  //     { path: ':id/edit', canDeactivate: [CanDeactivateGuard], component: EditServerComponent },
  //   ]
  // },
  // { path: 'users', component: UsersComponent,
  //   children: [
  //     { path: ':id/:name', component: UserComponent },
  //   ]
  // },
  // { path: 'not-found', component: ErrorPageComponent, data: {'message': 'La la la message'} },
  // { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
