import { Component, OnInit } from '@angular/core';
import { KitchenService } from 'src/app/core/services/kitchen.service';
import { Ticket } from 'src/app/core/classes/ticket';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { OrdersDialogComponent } from 'src/app/components/dialogs/orders-dialog/orders-dialog.component';

@Component({
  selector: 'app-ticket-overview',
  templateUrl: './ticket-overview.component.html',
  styleUrls: ['./ticket-overview.component.css']
})
export class TicketOverviewComponent implements OnInit {

  filterTableNr: number;

  tickets: Ticket[] = [];
  ticketDataSource: MatTableDataSource<Ticket> = new MatTableDataSource<Ticket>();
  ticketDisplayedColumns: string[] = ['tableNr', 'time', 'finished', 'orderAmount', 'close'];

  constructor(
    private kitchenService: KitchenService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getUnfinishedTicketsByDay(new Date());
  }

  private getUnfinishedTicketsByDay(day: Date) {
    if (day !== null) {
      this.kitchenService.getUnfinishedTicketsByDay(day)
        .subscribe(tickets => {
          this.tickets = tickets;
          this.ticketDataSource.data = tickets;
        });
    }
  }

  private getUnfinishedTicketsByDayAndTableNr(day: Date, tableNr: number = this.filterTableNr) {
    this.kitchenService.getUnfinishedTicketsByDayAndTableNr(day, tableNr)
      .subscribe(tickets => {
        this.tickets = tickets;
        this.ticketDataSource.data = tickets;
      });
  }

  filter(tableNr: number = this.filterTableNr) {
    const day = new Date();
    if (isNaN(tableNr) || tableNr === null) {
      this.getUnfinishedTicketsByDay(day);
    } else { this.getUnfinishedTicketsByDayAndTableNr(day, tableNr); }
  }

  reset() {
    this.filterTableNr = null;
    this.filter();
  }

  showOrders(ticket: Ticket) {
    this.dialog.open(OrdersDialogComponent, { data: ticket });
  }

  closeTicket(ticket: Ticket) {
    this.kitchenService.setTicketFinished(ticket);
  }
}
