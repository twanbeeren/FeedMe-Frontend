import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem } from '../classes/menu-item';
import { MENU } from './mock-menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  getMenu(): Observable<MenuItem[]> {
    return of(MENU);
  }
}
