import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/core/classes/ticket';
import { KitchenService } from 'src/app/core/services/kitchen.service';
import { tick } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ticket-history',
  templateUrl: './ticket-history.component.html',
  styleUrls: ['./ticket-history.component.css']
})
export class TicketHistoryComponent implements OnInit {

  date: Date;
  maxDate: Date;
  filterTableNr: number;

  filteredTickets: Ticket[] = [];

  constructor(private kitchenService: KitchenService) { }

  ngOnInit() {
    this.date = new Date();
    this.maxDate = this.date;
    this.kitchenService.getTicketsByDay(this.date)
    .subscribe(tickets => {
      this.filteredTickets = tickets;
    });
  }

  getTicketsByDayAndTableNr(day: Date = this.date, tableNr: number = this.filterTableNr) {
    if (isNaN(tableNr) || tableNr === null) {
      this.getTicketsByDay(day);
      return;
    }

    this.kitchenService.getTicketsByDayAndTableNr(day, tableNr)
    .subscribe(tickets => {
      this.filteredTickets = tickets;
    });
  }

  getTicketsByDay(date: Date = this.date) {
    if (date !== null) {
      this.kitchenService.getTicketsByDay(date)
        .subscribe(tickets => {
          this.filteredTickets = tickets;
        });
    }
  }
}
