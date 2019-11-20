import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../classes/order';
import { throwToolbarMixedModesError } from '@angular/material';
import { Ticket } from '../classes/ticket';
import { MenuItem } from '../classes/menu-item';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {

  constructor(private db: AngularFirestore) { }

  getOrders(): Observable<Order[]> {
    return this.db.collection<Order>('Orders').valueChanges().pipe(
      map(orders => {
        orders.forEach(order => {
          order.orderItems.forEach(async item => {
            item.item = await this.getItem(item.item);
          });
        });

        orders = orders.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
        return orders;
      })
    );
  }

  getTickets(): Observable<Ticket[]> {
    return this.db.collection<Ticket>('Tickets').valueChanges().pipe(
      map(tickets => {
        tickets.forEach(ticket => {
          ticket.orderRefs.forEach(async orderRef => {
            let receivedOrder = await this.getOrder(orderRef);
            receivedOrder.orderItems.forEach(async orderItem => {
              let receivedItem = await this.getItem(orderItem.item);
              receivedOrder.addItem(receivedItem);
            });
          });
        });

        return tickets;
      })
    );
  }

  async getItem(id: string): Promise<MenuItem> {
    const ref = this.db.collection('MenuItems').doc(id);
    return await ref.get().toPromise().then(receivedItem => {
      return receivedItem.data() as MenuItem;
    });
  }

  async getOrder(id: string): Promise<Order> {
    const ref = this.db.collection('Orders').doc(id);
    return await ref.get().toPromise().then(receivedItem => {
      return receivedItem.data() as Order;
    });
  }

  setStatus(id: string, newStatus: string) {
    this.db.collection('Orders').doc(id).update({ status: newStatus });
  }
}
