import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslatorService } from 'src/app/core/services/translator.service';
import { TicketService } from 'src/app/core/services/ticket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  language: string;
  tableNumber: number;

  constructor(private translator: TranslatorService, public ticketservice: TicketService) { }

  ngOnInit() {
    const sub = this.ticketservice.tableNumber$.subscribe(tableNumber => this.tableNumber = tableNumber);
    this.subscription.add(sub);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  changeLanguage(language: string): void {
    this.translator.setLanguage(language);
  }
}
