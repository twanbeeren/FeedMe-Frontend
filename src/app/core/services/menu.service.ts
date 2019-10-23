import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem } from '../classes/menu-item';
import { MENU, COURSES } from './mock-menu';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Course } from '../classes/course';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuUrl = 'toBeDetermined';

  constructor(private http: HttpClient) {}

  getMenu(): Observable<MenuItem[]> {
    return of(MENU);
    // return this.http.get<MenuItem[]>(this.menuUrl).pipe(
    //   tap(_ => console.log('fetched menu')),
    //   catchError(this.handleError<MenuItem[]>('getMenu', MENU))
    // );
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.menuUrl).pipe(
      tap(_ => console.log('fetched courses')),
      catchError(this.handleError<Course[]>('getCourses', COURSES))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + 'failed');
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
