import { Component, OnInit } from '@angular/core';
import { KitchenService } from 'src/app/core/services/kitchen.service';
import { Ticket } from 'src/app/core/classes/ticket';

@Component({
  selector: 'app-ticket-overview',
  templateUrl: './ticket-overview.component.html',
  styleUrls: ['./ticket-overview.component.css']
})
export class TicketOverviewComponent implements OnInit {

  filterTableNr: number;

  tickets: Ticket[] = [];

  constructor(private kitchenService: KitchenService) { }

  ngOnInit() {
    this.getUnfinishedTicketsByDay(new Date());
  }

  private getUnfinishedTicketsByDay(day: Date) {
    if (day !== null) {
      this.kitchenService.getUnfinishedTicketsByDay(day)
        .subscribe(tickets => {
          this.tickets = tickets;
        });
    }
  }

  private getUnfinishedTicketsByDayAndTableNr(day: Date, tableNr: number = this.filterTableNr) {
    this.kitchenService.getUnfinishedTicketsByDayAndTableNr(day, tableNr)
      .subscribe(tickets => {
        this.tickets = tickets;
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

  closeTicket(ticket: Ticket) {
    this.kitchenService.setTicketFinished(ticket);
  }
}
