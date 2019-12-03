import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../classes/order';
import { Ticket } from '../classes/ticket';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {

  constructor(private db: AngularFirestore) { }

  getOrders(): Observable<Order[]> {
    return this.db.collection<Order>('Orders').valueChanges().pipe(
      map(orders => {
        orders.forEach(order => {
          this.playNewOrderSound(order);
          order.orderItems.forEach(async item => {
            const ref = this.db.collection('MenuItems').doc(item.item);
            await ref.get().toPromise().then(receivedItem => {
              item.item = receivedItem.data();
            });
          });
        });

        orders = orders.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
        return orders;
      })
    );
  }

  getTicketsByTableNr(tableNr: number): Observable<Ticket[]> {
    return this.db.collection('Tickets', ref => ref
      .where('tableNr', '==', tableNr))
      .snapshotChanges()
      .pipe(
        map(snaps => {
          return this.mapTickets(snaps);
        })
      );
  }

  private mapTickets(snaps) {
    return snaps.map(snap => {
      const ticket = {
        id: snap.payload.doc.id,
        ...snap.payload.doc.data()
      } as Ticket;
      ticket.time = new Date(ticket.time);
      ticket.orders = this.getOrdersByTicket(ticket);
      return ticket;
    });
  }

  getTicketsByDay(day: Date): Observable<Ticket[]> {
    const startTime = new Date(day);
    const endTime = new Date(day);
    startTime.setHours(0, 0, 0, 0);
    endTime.setHours(23, 59, 59, 999);

    return this.db.collection('Tickets', ref => ref
      .orderBy('time')
      .where('time', '>=', startTime.valueOf())
      .where('time', '<=', endTime.valueOf()))
      .snapshotChanges()
      .pipe(
        map(snaps => {
          return this.mapTickets(snaps);
        })
      );
  }

  getOrdersByTicket(ticket: Ticket): Order[] {
    const orders: Order[] = [];
    ticket.orderRefs.forEach(async orderRef => {
      const ref = this.db.collection('Orders').doc(orderRef);
      await ref.get().toPromise().then(order => {
        let o = order.data() as Order;
        o = this.setOrderItems(o);
        orders.push(o);
      });
    });
    return orders;
  }

  setOrderItems(order: Order): Order {
    order.orderItems.forEach(async item => {
      const ref = this.db.collection('MenuItems').doc(item.item);
      await ref.get().toPromise().then(receivedItem => {
        item.item = receivedItem.data();
      });
    });
    return order;
  }

  getAllTickets(): Observable<Ticket[]> {
    return this.db.collection<Ticket>('Tickets').valueChanges().pipe(
      map(tickets => {
        return tickets;
      })
    );
  }

  setStatus(id: string, newStatus: string) {
    this.db.collection('Orders').doc(id).update({ status: newStatus });
  }

  playNewOrderSound(order: Order) {
    if (order.status === 'Sent') {
      const audio = new Audio();
      audio.src = '../../../assets/sounds/light.mp3';
      audio.load();
      audio.play();
    }
  }
}
