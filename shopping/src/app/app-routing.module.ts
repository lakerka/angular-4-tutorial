import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';


import { AuthGuardService } from './auth/auth-guard.service';
import { HomeComponent } from './core/home/home.component';


const appRoutes: Routes = [
  { path: '',  component: HomeComponent, pathMatch: 'full'},
  { path: 'recipes',  loadChildren: './recipes/recipes.module#RecipesModule'},
  // { path: 'recipes',  loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuardService]},
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  providers: [AuthGuardService],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
