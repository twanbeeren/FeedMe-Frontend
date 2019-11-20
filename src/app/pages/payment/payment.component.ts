import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/core/services/ticket.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
  }

}
