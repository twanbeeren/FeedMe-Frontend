import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { TicketService } from '../services/ticket.service';
import { SwipePageComponent } from 'src/app/pages/swipe-menu/swipe-page/swipe-page.component';

@Injectable({
  providedIn: 'root'
})
export class TableGuard implements CanActivate {

  constructor(private ticketService: TicketService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.ticketService.tableNumber$) {
      return true;
    } else return false;
  }
  
}
