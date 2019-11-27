import { Component, OnInit } from '@angular/core';
import { TranslatorService } from 'src/app/core/services/translator.service';
import { TicketService } from 'src/app/core/services/ticket.service';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {
  language: string;
  tableNumber: number

  constructor(private translator: TranslatorService, public ticketservice: TicketService) { }

  ngOnInit() {
    this.ticketservice.tableNumber.subscribe(tableNumber => this.tableNumber = tableNumber);
  }

  changeLanguage(language: string): void {
    this.translator.setLanguage(language);
  }
}
