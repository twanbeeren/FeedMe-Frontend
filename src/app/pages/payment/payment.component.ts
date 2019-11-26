import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketService } from 'src/app/core/services/ticket.service';
import { Order } from 'src/app/core/classes/order';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  tableNrParam;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.ticketService.tableNumber.subscribe(tableNr => this.tableNrParam = `{number: ${tableNr}}`);
  }

}
