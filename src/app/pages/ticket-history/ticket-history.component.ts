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

  filterTableNr: number;

  filteredTickets: Ticket[] = [];

  constructor(private kitchenService: KitchenService) { }

  ngOnInit() {
    this.kitchenService.getTicketsByDay(new Date())
    .subscribe(tickets => {
      this.filteredTickets = tickets;
    });
  }

  getTicketsByTableNumber(tableNr: number = this.filterTableNr) {
    this.kitchenService.getTicketsByTableNr(tableNr)
    .subscribe(tickets => {
      this.filteredTickets = tickets;
    });
  }
}
