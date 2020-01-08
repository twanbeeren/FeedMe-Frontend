import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { TicketService } from './core/services/ticket.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  private subscription = new Subscription();
  tableNumber: number;

  constructor(
    public ticketService: TicketService,
    public authService: AuthService,
    private router: Router) {

    const sub = this.ticketService.tableNumber$.subscribe(tableNumber => {
      if (!tableNumber && !this.authService.isInKitchen) {
        this.router.navigate(['/tablenumber']);
      }
    });
    this.subscription.add(sub);
  }

  ngOnInit() {
    const sub = this.ticketService.tableNumber$.subscribe(tableNumber => this.tableNumber = tableNumber);
    this.subscription.add(sub);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
