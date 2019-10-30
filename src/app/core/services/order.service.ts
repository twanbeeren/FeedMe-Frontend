import { Injectable } from '@angular/core';
import { MenuItem } from '../classes/menu-item';
import { Order } from '../classes/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order: Order;

  newOrder(tableNr : number) {
    this.order = new Order(tableNr);
  }

  addItem(item: MenuItem): boolean {
    if (this.order) {
      this.order.addItem(item);
      return true;
    }
    return false;
  }

  removeItem(item: MenuItem): boolean {    
    if (this.order) {
      this.order.removeItem(item.id);
      return true;
    }
    return false;
  }

  getItemCount(): number {
    if (this.order != null)
      return this.order.items.length;
    else return 0;
  }

  getOrder(order: Order) {
    //TODO: check if order is not null
    return this.order;
  }

  sendOrder() {
    //TODO: implement
    throw Error("Not implemented!");
  }
  
  constructor() { }
}
