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

  constructor(private translator: TranslatorService, private ticketservice: TicketService) { }

  ngOnInit() {
  }

  changeLanguage(language: string): void  {
    this.translator.setLanguage(language);
  }
}
