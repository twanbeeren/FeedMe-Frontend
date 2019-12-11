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

  tickets: Ticket[] = [];

  constructor(private kitchenService: KitchenService) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.kitchenService.getTicketsByDay(this.date)
      .subscribe(tickets => {
        const currentDate = new Date();
        if (this.date.getFullYear() === currentDate.getFullYear()
          && this.date.getMonth() === currentDate.getMonth()
          && this.date.getDate() === currentDate.getDate()) {
          this.tickets = tickets;
        }
      });
  }

  private getTicketsByDayAndTableNr(day: Date = this.date, tableNr: number = this.filterTableNr) {
    this.kitchenService.getTicketsByDayAndTableNr(day, tableNr)
      .subscribe(tickets => {
        this.tickets = tickets;
      });
  }

  private getTicketsByDay(day: Date = this.date) {
    if (day !== null) {
      this.kitchenService.getTicketsByDay(day)
        .subscribe(tickets => {
          this.tickets = tickets;
        });
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
}
