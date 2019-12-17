import { Injectable } from '@angular/core';
import { TicketService } from './ticket.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private ticketService: TicketService) { 
  }

  pay() {
    this.ticketService.reset();
  }
}
