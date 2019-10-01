import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem } from '../app/menu-item'
import { MENU } from '../app/mock-menu'

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  getMenu(): Observable<MenuItem[]> {
    return of(MENU);
  }
}
