import { Injectable } from '@angular/core';
import { MenuItem } from '../classes/menu-item';
import { Order } from '../classes/order';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  tableNumber: number;
  order: Order;

  constructor(private db: AngularFirestore) {
  }

  setTableNumber(tableNr: number) {
    this.tableNumber = tableNr;
  }

  newOrder(tableNr?: number) {
    if (tableNr)
      this.order = new Order(tableNr);
    else if (this.tableNumber)
      this.order = new Order(this.tableNumber);
  }

  addItem(item: MenuItem): boolean {
    if (!this.order && this.tableNumber)
      this.newOrder();

    if (this.order) {
      this.order.addItem(item);
      return true;
    }
    return false;
  }

  removeItem(item: MenuItem): boolean {
    if (!this.order && this.tableNumber)
      this.newOrder();

    if (this.order) {
      this.order.removeItem(item.id);
      return true;
    }
    return false;
  }

  sendOrder() {

    this.order.done = false;
    this.order.orderItems.forEach(orderItem => {
      orderItem.item = orderItem.item.id;
    });

    const json = JSON.stringify(this.order);
    const data = JSON.parse(json);

    this.db.doc('Orders/' + this.order.id).set(data);
  }

}
