import { Injectable } from '@angular/core';
import { MenuItem } from '../classes/menu-item';
import { Order } from '../classes/order';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order: Order;

  constructor(private db: AngularFirestore) {
    this.newOrder(12);
  }

  newOrder(tableNr: number) {
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

  sendOrder() {

    this.order.status = 'Sent';
    this.order.orderItems.forEach(orderItem => {
      orderItem.item = orderItem.item.id;
    });

    const json = JSON.stringify(this.order);
    const data = JSON.parse(json);

    this.db.doc('Orders/' + this.order.id).set(data);
  }

}
