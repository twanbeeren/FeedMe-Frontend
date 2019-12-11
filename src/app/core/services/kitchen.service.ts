import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../classes/order';
import { Ticket } from '../classes/ticket';
@Injectable({
  providedIn: 'root'
})
export class KitchenService {


  private currentOrdersAmount = 0;
  constructor(private db: AngularFirestore) { }

  getSentOrders() {
    return this.getOrdersByQuery('status', 'Sent');
  }

  getDoneOrders() {
    return this.getOrdersByQuery('status', 'Done');
  }

  getOrdersByQuery(property: string, value: string): Observable<Order[]> {
    return this.db.collection<Order>('Orders', ref => ref.where(property, '==', value)).valueChanges().pipe(
      map(orders => {
        const orderLength = orders.length;
        orders.forEach(order => {
          if (value === 'Sent') {
            if (orderLength >= this.currentOrdersAmount && value === 'Sent') {
              console.log('currentorderamount ' + this.currentOrdersAmount);
              this.playNewOrderSound(order);
              console.log('play sound ' + value);
            }
            this.currentOrdersAmount = orderLength;
          }

          order.orderItems.forEach(async item => {
            const ref = this.db.collection('MenuItems').doc(item.item);
            await ref.get().toPromise().then(receivedItem => {
              item.item = receivedItem.data();
            });
          });
        });
        return orders;
      })
    );
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

  getUnfinishedTicketsByDay(day: Date): Observable<Ticket[]> {
    const startTime = new Date(day);
    const endTime = new Date(day);
    startTime.setHours(0, 0, 0, 0);
    endTime.setHours(23, 59, 59, 999);

    return this.db.collection('Tickets', ref => ref
      .orderBy('time', 'desc')
      .where('time', '>=', startTime.valueOf())
      .where('time', '<=', endTime.valueOf())
      .where('finished', '==', false))
      .snapshotChanges()
      .pipe(
        map(snaps => {
          return this.mapTickets(snaps);
        })
      );
  }

  getTicketsByDayAndTableNr(day: Date, tableNr: number): Observable<Ticket[]> {
    const startTime = new Date(day);
    const endTime = new Date(day);
    startTime.setHours(0, 0, 0, 0);
    endTime.setHours(23, 59, 59, 999);

    return this.db.collection('Tickets', ref => ref
      .orderBy('time', 'desc')
      .where('tableNr', '==', tableNr.toString())
      .where('time', '>=', startTime.valueOf())
      .where('time', '<=', endTime.valueOf()))
      .snapshotChanges()
      .pipe(
        map(snaps => {
          return this.mapTickets(snaps);
        })
      );
  }

  getUnfinishedTicketsByDayAndTableNr(day: Date, tableNr: number): Observable<Ticket[]> {
    const startTime = new Date(day);
    const endTime = new Date(day);
    startTime.setHours(0, 0, 0, 0);
    endTime.setHours(23, 59, 59, 999);

    return this.db.collection('Tickets', ref => ref
      .orderBy('time', 'desc')
      .where('tableNr', '==', tableNr.toString())
      .where('time', '>=', startTime.valueOf())
      .where('time', '<=', endTime.valueOf())
      .where('finished', '==', false))
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

  setTicketFinished(ticket: Ticket) {
    this.db.collection('Tickets').doc(ticket.id).update({ finished: true });
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
    if (order.status === 'Sent' && order.madeNoise !== true) {
      const audio = new Audio();
      audio.src = '../../../assets/sounds/light.mp3';
      audio.load();
      audio.play();
      order.madeNoise = true;
    }
  }
}
