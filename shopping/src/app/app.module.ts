import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { StorageService } from './shared/storage.service';

import { SharedModule } from './shared/shared.module';

import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { IngredientsService } from './shopping-list/ingredients.service';

import { RecipesModule } from './recipes/recipes.module';
import { RecipesService } from './recipes/recipes.service';

import { AuthModule } from './auth/auth.module';

import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    RecipesModule,
    ShoppingListModule,
    AuthModule,
    SharedModule,
  ],
  providers: [
    StorageService,
    IngredientsService,
    RecipesService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
