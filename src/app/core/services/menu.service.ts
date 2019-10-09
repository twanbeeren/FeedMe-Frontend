import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem } from '../classes/menu-item';
import { MENU } from './mock-menu';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuUrl = 'toBeDetermined';

  constructor(private http: HttpClient){}

  getMenu(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.menuUrl).pipe(
      tap(_ => console.log('fetched menu')),
      catchError(this.handleError<MenuItem[]>('getMenu', MENU))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + "failed");
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
