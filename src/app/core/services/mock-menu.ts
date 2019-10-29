import { MenuItem } from '../classes/menu-item';
import { Course } from '../classes/course';

export const COURSES: Course[] = [
  { id: 0, name: "Starter", priority: 0 },
  { id: 1, name: "Main", priority: 0 },
  { id: 2, name: "Dessert", priority: 0 }
];

export const MENU: MenuItem[] = [
  { id: 11, name: 'Chicken Soup', price: 4.99, course: COURSES[0] , tags: ['Meat'] },
  { id: 12, name: 'Hamburger', price: 12, course: COURSES[1], tags: ['Meat'] },
  { id: 13, name: 'Spaghetti Bolognese', price: 10, course: COURSES[0] , tags: ['Pasta', 'Meat'] },
  { id: 14, name: 'Couscous', price: 13, course: COURSES[2], tags: ['Vegetarian'] },
];

// MENU.push({id: 11, name: 'Spaghetti Bolognese', price: 10, tags: ['Pasta'], course: new Course(0,'Main',1)});

// let array2: MenuItem[] = [];

// MENU = array2;
