import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { StorageService } from './shared/storage.service';
import { IngredientsService } from './shopping-list/ingredients.service';
import { RecipesService } from './recipes/recipes.service';
import { AuthService } from './auth/auth.service';

import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    CoreModule,
    AuthModule,
    SharedModule,
    ShoppingListModule,
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
