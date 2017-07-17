import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';


import { AuthGuardService } from './auth/auth-guard.service';


const appRoutes: Routes = [
  { path: '',  redirectTo: 'recipes', pathMatch: 'full'},
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
