import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ticket } from 'src/app/core/classes/ticket';
import { KitchenService } from 'src/app/core/services/kitchen.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { OrdersDialogComponent } from 'src/app/components/dialogs/orders-dialog/orders-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ticket-history',
  templateUrl: './ticket-history.component.html',
  styleUrls: ['./ticket-history.component.css']
})
export class TicketHistoryComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();
  date: Date = new Date();
  maxDate: Date;
  filterTableNr: number;
  hideEmpty: boolean;

  tickets: Ticket[] = [];
  ticketDataSource: MatTableDataSource<Ticket> = new MatTableDataSource<Ticket>();
  ticketDisplayedColumns: string[] = ['tableNr', 'time', 'finished', 'orderAmount'];

  constructor(
    private kitchenService: KitchenService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.maxDate = new Date();
    const sub = this.kitchenService.getTicketsByDay(this.date)
      .subscribe(tickets => {
        const currentDate = new Date();
        if (this.date.getFullYear() === currentDate.getFullYear()
          && this.date.getMonth() === currentDate.getMonth()
          && this.date.getDate() === currentDate.getDate()) {
          this.tickets = tickets;
          this.ticketDataSource.data = tickets;
        }
      });

    this.subscription.add(sub);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getTicketsByDayAndTableNr(day: Date = this.date, tableNr: number = this.filterTableNr) {
    const sub = this.kitchenService.getTicketsByDayAndTableNr(day, tableNr)
      .subscribe(tickets => {
        this.tickets = tickets;
        this.ticketDataSource.data = tickets;
      });

    this.subscription.add(sub);
  }

  private getTicketsByDay(day: Date = this.date) {
    if (day !== null) {
      const sub = this.kitchenService.getTicketsByDay(day)
        .subscribe(tickets => {
          this.tickets = tickets;
          this.ticketDataSource.data = tickets;
        });
      this.subscription.add(sub);
    }
  }

  filter(day: Date = this.date, tableNr: number = this.filterTableNr) {
    if (isNaN(tableNr) || tableNr === null) {
      this.getTicketsByDay(day);
    } else { this.getTicketsByDayAndTableNr(day, tableNr); }
  }

  reset() {
    this.date = new Date();
    this.filterTableNr = null;
    this.filter();
  }

  showOrders(ticket: Ticket) {
    this.dialog.open(OrdersDialogComponent, { data: ticket });
  }
}
