import { MenuItem } from '../classes/menu-item';
import { Course } from '../classes/course';

export const COURSES: Course[] = [
  { id: 0, name: "Starter", priority: 0 },
  { id: 1, name: "Main", priority: 0 },
  { id: 2, name: "Dessert", priority: 0 }
];

export const MENU: MenuItem[] = [
  { id: 11, name: 'Spaghetti Bolognese', price: 10, course: COURSES[0] , tags: ['Pasta'] },
  { id: 12, name: 'Hamburger', price: 12, course: COURSES[1], tags: ['Meat'] },
  { id: 13, name: 'Couscous', price: 13, course: COURSES[2], tags: ['Vegetarian'] },
];
