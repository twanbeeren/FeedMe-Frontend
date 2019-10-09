import { MenuItem } from '../classes/menu-item';
import { Course } from '../classes/course';

export const COURSES: Course[] = [
  { id: 0, name: "Starter", priority: 0 },
  { id: 1, name: "Main", priority: 0 },
  { id: 2, name: "Dessert", priority: 0 }
];

export const MENU: MenuItem[] = [
<<<<<<< HEAD
  { id: 1, name: 'Spaghetti Bolognese', price: 10, tags: ['Pasta'], course: new Course(0, 'Main', 1) },
  { id: 2, name: 'Hamburger', price: 12, tags: ['Meat'], course: new Course(0, 'Main', 1) },
  { id: 3, name: 'Couscous', price: 13, tags: ['Vegetarian'], course: new Course(0, 'Main', 1) }
=======
  { id: 11, name: 'Spaghetti Bolognese', price: 10, course: COURSES[0] , tags: ['Pasta'] },
  { id: 12, name: 'Hamburger', price: 12, course: COURSES[1], tags: ['Meat'] },
  { id: 13, name: 'Couscous', price: 13, course: COURSES[2], tags: ['Vegetarian'] },
>>>>>>> 80f42ac836d69d87db8f28ec899fb38566261d1c
];

// MENU.push({id: 11, name: 'Spaghetti Bolognese', price: 10, tags: ['Pasta'], course: new Course(0,'Main',1)});

// let array2: MenuItem[] = [];

// MENU = array2;
