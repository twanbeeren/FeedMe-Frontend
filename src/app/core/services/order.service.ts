import { Injectable } from '@angular/core';
import { MenuItem } from '../classes/menu-item';
import { Order } from '../classes/order';
import { AngularFirestore } from '@angular/fire/firestore';
import { TicketService } from './ticket.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order: Order;

  constructor(private db: AngularFirestore, private ticketService: TicketService) {
  }

  newOrder() {
    this.order = new Order();
  }

  addItem(item: MenuItem): boolean {
    if (!this.order)
      this.newOrder();

    if (this.order) {
      this.order.addItem(item);
      return true;
    }
    return false;
  }

  removeItem(item: MenuItem): boolean {
    if (!this.order)
      this.newOrder();

    if (this.order) {
      this.order.removeItem(item.id);
      return true;
    }
    return false;
  }

  sendOrder() {

    this.order.status = 'Sent';
    this.ticketService.addOrder(this.order);
    this.order.orderItems.forEach(orderItem => {
      orderItem.item = orderItem.item.id;
    });

    const json = JSON.stringify(this.order);
    const data = JSON.parse(json);

    this.db.doc('Orders/' + this.order.id).set(data);
    this.order = new Order();
  }

}
