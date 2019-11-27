import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { KitchenComponent } from 'src/app/pages/kitchen/kitchen.component';

@Injectable({
  providedIn: 'root'
})
export class KitchenGuard implements CanActivate, CanDeactivate<KitchenComponent> {

  constructor(private authService: AuthService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isInKitchen) {
      return true;
    } else {
      return false;
    }
  }

  canDeactivate(): boolean {
    this.authService.isInKitchen = false;
    return true;
  }

}
