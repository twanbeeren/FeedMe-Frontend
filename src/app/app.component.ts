import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { TicketService } from './core/services/ticket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private ticketService: TicketService,
    private authService: AuthService) {
  }
}
