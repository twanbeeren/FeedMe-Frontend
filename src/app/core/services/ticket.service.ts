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

  private _tableNumber = new BehaviorSubject<number>(null);
  tableNumber = this._tableNumber.asObservable();

  ticket: Ticket;
  private hasToResetSubject = new BehaviorSubject<boolean>(false);
  hasToReset$ = this.hasToResetSubject.asObservable();

  constructor(private db: AngularFirestore, private router: Router) {
  }

  setTableNumber(tableNr: number) {
    this._tableNumber.next(tableNr);
    if (!this.ticket) {
      this.ticket = new Ticket(this._tableNumber.value);
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
    this.tableNumber = null;
    this.hasToResetSubject.next(true);
    this.router.navigate(['/tablenumber']);
  }

  addOrder(order: Order) {
    if (!this.ticket) {
      this.ticket = new Ticket();
      this.sendTicket();
    } else if (this.ticket) {
      order.tableNr = this.ticket.tableNr;
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
}
