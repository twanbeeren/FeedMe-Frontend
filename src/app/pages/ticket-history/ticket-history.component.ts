import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/core/classes/ticket';
import { KitchenService } from 'src/app/core/services/kitchen.service';

@Component({
  selector: 'app-ticket-history',
  templateUrl: './ticket-history.component.html',
  styleUrls: ['./ticket-history.component.css']
})
export class TicketHistoryComponent implements OnInit {

  date: Date = new Date();
  maxDate: Date;
  filterTableNr: number;
  hideEmpty: boolean;

  filteredTickets: Ticket[] = [];

  constructor(private kitchenService: KitchenService) { }

  ngOnInit() {
    this.maxDate = this.date;
    this.kitchenService.getTicketsByDay(this.date)
      .subscribe(tickets => {
        const currentDate = new Date();
        if (this.date.getFullYear() === currentDate.getFullYear()
          && this.date.getMonth() === currentDate.getMonth()
          && this.date.getDate() === currentDate.getDate()) {
          this.filteredTickets = tickets;
        }
      });
  }

  private getTicketsByDayAndTableNr(day: Date = this.date, tableNr: number = this.filterTableNr) {
    this.kitchenService.getTicketsByDayAndTableNr(day, tableNr)
      .subscribe(tickets => {
        this.filteredTickets = tickets;
      });
  }

  private getTicketsByDay(date: Date = this.date) {
    if (date !== null) {
      this.kitchenService.getTicketsByDay(date)
        .subscribe(tickets => {
          this.filteredTickets = tickets;
        });
    }
  }

  filter(day: Date = this.date, tableNr: number = this.filterTableNr) {
    if (isNaN(tableNr) || tableNr === null) {
      this.getTicketsByDay(day);
      return;
    } else { this.getTicketsByDayAndTableNr(day, tableNr); }
  }

  reset() {
    this.date = new Date();
    this.filterTableNr = null;
    this.filter();
  }
}
