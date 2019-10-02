import { Injectable } from '@angular/core';
import { MenuItem } from '../classes/menu-item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order: MenuItem[]

  addItem(item: MenuItem){
    this.order.push(item);
  }
  
  constructor() { }
}
