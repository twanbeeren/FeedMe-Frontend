import { Injectable, OnInit } from '@angular/core';
import { MenuItem } from '../classes/menu-item';
import { Order } from '../classes/order';
import { AngularFirestore } from '@angular/fire/firestore';
import { TicketService } from './ticket.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnInit {

  order: Order;
  totalPrice = 0;

  constructor(private db: AngularFirestore, private ticketService: TicketService) {
  }

  ngOnInit() {
    this.ticketService.hasToReset$.subscribe(hasToReset => { if (hasToReset) { this.reset(); } });
  }

  reset() {
    this.newOrder();
  }

  newOrder() {
    this.order = new Order();
    this.calculateTotalPrice();
  }

  addItem(item: MenuItem): boolean {
    if (!this.order) {
      this.newOrder();
    }

    if (this.order) {
      this.order.addItem(item);
      this.calculateTotalPrice();
      return true;
    }

    return false;
  }

  removeItem(item: MenuItem): boolean {
    if (!this.order) {
      this.newOrder();
    }

    if (this.order) {
      this.order.removeItem(item.id);
      this.calculateTotalPrice();
      return true;
    }

    return false;
  }

  sendOrder() {

    this.calculateTotalPrice();
    this.order.status = 'Sent';
    this.ticketService.addOrder(this.order);
    this.order.orderItems.forEach(orderItem => {
      orderItem.item = orderItem.item.id;
    });

    const json = JSON.stringify(this.order);
    const data = JSON.parse(json);

    this.db.doc('Orders/' + this.order.id).set(data);
    this.newOrder();
  }

  private calculateTotalPrice() {
    this.totalPrice = 0;
    this.order.orderItems.forEach(orderItem => {
      this.totalPrice += orderItem.item.price * orderItem.amount;
    });
  }

  public async getItem(itemId: string) {
    return this.db.collection('MenuItems').doc<MenuItem>(itemId).get().toPromise();
    // .then(item => console.log(item));
  }

}
