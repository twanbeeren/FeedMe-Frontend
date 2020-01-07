import { Injectable } from '@angular/core';
import { TicketService } from './ticket.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private ticketService: TicketService,
    private authService: AuthService) {
  }

  pay() {
    this.ticketService.reset();
    this.authService.isInKitchen = false;
  }
}
