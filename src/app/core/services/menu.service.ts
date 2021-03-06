import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem } from '../classes/menu-item';
import { catchError, map, tap } from 'rxjs/operators';
import { Course } from '../classes/course';
import { AngularFirestore } from '@angular/fire/firestore';
import { filter } from 'minimatch';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private courses: Course[] = [];
  hasHadTutorial = false;
  toggledTags: string[] = []; // Temp locations

  constructor(private db: AngularFirestore) {
    this.setCourses();
  }

  private async setCourses() {
    await this.db.collection<Course>('Courses').valueChanges().subscribe(courses => {
      this.courses = courses;
    });
  }

  getMenu(): Observable<MenuItem[]> {
    return this.db.collection<MenuItem>('MenuItems').valueChanges().pipe(
      map(items => {

        const filteredItems = [];
        items.forEach(item => {
          if(!item.tags.includes("Drink")){
            filteredItems.push(item);
          }
        });

        filteredItems.forEach(item => {
          item.course = this.courses.find(c => c.id === item.courseRef.id);
        });

        return filteredItems;
      })
    );
  }

  getDrinks() : Observable<MenuItem[]> {
    return this.db.collection<MenuItem>('MenuItems').valueChanges().pipe(
      map(items => {
        const filteredDrinks = [];
        items.forEach(item => {
          if(item.tags.includes("Drink")){
            filteredDrinks.push(item);
          }
        });
        return filteredDrinks;
      })
    )
  }

  getCourses(): Observable<Course[]> {
    return this.db.collection<Course>('Courses').valueChanges();
  }
}
