import { Injectable } from '@angular/core';
import { Order } from '../classes/order';
import { Ticket } from '../classes/ticket';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private tableNumberSubject = new BehaviorSubject<number>(null);
  tableNumber$ = this.tableNumberSubject.asObservable();
  totalPrice = 0;

  ticket: Ticket;
  private hasToResetSubject = new BehaviorSubject<boolean>(false);
  hasToReset$ = this.hasToResetSubject.asObservable();

  constructor(private db: AngularFirestore, private router: Router) {
  }

  setTableNumber(tableNr: number) {
    this.tableNumberSubject.next(tableNr);
    if (!this.ticket) {
      this.ticket = new Ticket(this.tableNumberSubject.value);
      this.sendTicket();
      this.subscribeToDbTicket();
    }
  }

  subscribeToDbTicket() {
    this.db.doc<Ticket>('Tickets/' + this.ticket.id).valueChanges().subscribe(data => {
      const finished = data.finished;
      if (finished) {
        this.reset();
      }
    });
  }

  reset() {
    this.ticket = null;
    this.tableNumberSubject.next(null);
    this.hasToResetSubject.next(true);
    this.router.navigate(['/tablenumber']);
  }

  addOrder(order: Order) {
    if (!this.ticket) {
      this.ticket = new Ticket();
      this.sendTicket();
    } else if (this.ticket) {
      order.tableNr = this.ticket.tableNr;
      this.totalPrice += order.getTotalPrice();
      this.ticket.addOrder(order);
      this.sendOrderRef(order);
    }
  }

  sendOrderRef(order: Order) {
    this.db.doc('Tickets/' + this.ticket.id).update({
      orderRefs: firebase.firestore.FieldValue.arrayUnion(order.id)
    });
  }

  sendTicket() {
    const dbTicket = new Ticket(null, this.ticket);
    dbTicket.setOrderRefs();
    delete dbTicket.orders;

    const json = JSON.stringify(dbTicket);
    const data = JSON.parse(json);
    data.time = new Date(data.time).valueOf();

    this.db.doc('Tickets/' + dbTicket.id).set(data);
  }

  payIdeal() {
    this.totalPrice = 0;
    this.ticket.orders.forEach(order => {
      this.totalPrice += order.getTotalPrice();
    });

    console.log(this.totalPrice);
  }
}
