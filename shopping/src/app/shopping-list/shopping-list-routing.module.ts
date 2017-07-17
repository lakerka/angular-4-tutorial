import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthGuardService } from '../auth/auth-guard.service';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

const routes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent},
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [AuthGuardService],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule {

}
