import { Injectable } from '@angular/core';
import { Order } from '../classes/order';
import { Ticket } from '../classes/ticket';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  ticket: Ticket;
  tableNumber: number;

  constructor(private db: AngularFirestore) { }

  setTableNumber(tableNr: number) {
    this.tableNumber = tableNr;
  }

  addOrder(order: Order) {
    if (!this.ticket) {
      this.ticket = new Ticket();
      this.sendTicket();
    }
    else if (this.ticket) {
      this.ticket.addOrder(order);
      this.sendOrderRef(order);
    }
  }
  sendOrderRef(order: Order) {
    this.db.doc('Tickets/' + this.ticket.id).update({
      orderRefs: firebase.firestore.FieldValue.arrayUnion(order.id)
  })
  }

  sendTicket() {
    let dbTicket = new Ticket(this.ticket);
    dbTicket.setOrderRefs();
    delete dbTicket.orders;

    const json = JSON.stringify(dbTicket);
    const data = JSON.parse(json);

    this.db.doc('Tickets/' + dbTicket.id).set(data);

  }
}
