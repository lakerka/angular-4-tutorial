import { NgModule } from '@angular/core'
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

// import { AuthGuardService } from './auth/auth-guard.service';
import { HomeComponent } from './core/home/home.component';


const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'recipes',  loadChildren: './recipes/recipes.module#RecipesModule' },

  // auth guard that controls preloading
  // { path: 'recipes',  loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuardService] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
