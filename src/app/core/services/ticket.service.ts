import { Injectable } from '@angular/core';
import { Order } from '../classes/order';
import { Ticket } from '../classes/ticket';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  ticket: Ticket;

  constructor(private db: AngularFirestore) { }

  addOrder(order: Order){
    if(!this.ticket){
      this.ticket = new Ticket();
      this.sendTicket();
    }
    else if(this.ticket){
      this.ticket.addOrder(order);
    }
  }

  sendTicket(){
    let dbTicket = new Ticket(this.ticket);
    
  }
}
