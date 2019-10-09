import { MenuItem } from '../classes/menu-item';
import { Course } from '../classes/course';

export const MENU: MenuItem[] = [
  { id: 1, name: 'Spaghetti Bolognese', price: 10, tags: ['Pasta'], course: new Course(0, 'Main', 1) },
  { id: 2, name: 'Hamburger', price: 12, tags: ['Meat'], course: new Course(0, 'Main', 1) },
  { id: 3, name: 'Couscous', price: 13, tags: ['Vegetarian'], course: new Course(0, 'Main', 1) }
];

// MENU.push({id: 11, name: 'Spaghetti Bolognese', price: 10, tags: ['Pasta'], course: new Course(0,'Main',1)});

// let array2: MenuItem[] = [];

// MENU = array2;
