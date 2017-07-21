import { NgModule, OnInit } from '@angular/core';

import { StorageService } from '../shared/storage.service';
import { IngredientsService } from '../shopping-list/ingredients.service';
import { RecipesService } from '../recipes/recipes.service';
import { AuthService } from '../auth/auth.service';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
  ],
  providers: [
    IngredientsService,
    RecipesService,
    StorageService,
    AuthService,
  ],
})
export class CoreModule {}
