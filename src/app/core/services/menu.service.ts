import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem } from '../classes/menu-item';
import { MENU, COURSES } from './mock-menu';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Course } from '../classes/course';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuUrl = 'toBeDetermined';
  private courses: Course[] = [];

  constructor(private db: AngularFirestore) {
    this.setCourses();
  }

  private async setCourses() {
    await this.db.collection<Course>('Courses').valueChanges().subscribe(courses => {
      this.courses = courses;
      console.log(this.courses);
    });
  }

  getMenu(): Observable<MenuItem[]> {
    return this.db.collection<MenuItem>('MenuItems').valueChanges().pipe(
      map(items => {
        items.forEach(item => {
          item.course
        });

        return items;
      })
    );
  }

  getCourses(): Observable<Course[]> {
    return this.db.collection<Course>('Courses').valueChanges();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    // return (error: any): Observable<T> => {
    //   console.error(operation + "failed");
    //   // Let the app keep running by returning an empty result.
    //   return of(result as T);
    // };
  }
}
