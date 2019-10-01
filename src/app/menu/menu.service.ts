import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem } from '../menu/menu-item'
import { MENU } from '../menu/mock-menu'

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  getMenu(): Observable<MenuItem[]> {
    return of(MENU);
  }
}
