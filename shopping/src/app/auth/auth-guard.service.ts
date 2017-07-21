import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Route,
  CanActivate,
  CanLoad,
} from '@angular/router'

import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.isAuthenticated();
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated();
  }

}
