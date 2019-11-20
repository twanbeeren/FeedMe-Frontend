import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { TicketService } from './core/services/ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private ticketService: TicketService,
    private authService: AuthService,
    private router: Router) {
      
    this.ticketService.tableNumber.subscribe(tableNumber => {
      if (!tableNumber && !this.authService.isInKitchen) {
        this.router.navigate(['/tablenumber']);
      }
    });
  }
}
