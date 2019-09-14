import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService implements CanActivate {

  constructor(private router: Router, private authSerivce: AuthentificationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(!this.authSerivce.isUserLoggedIn())
      return true;
    this.router.navigate(['']);
  }
}
