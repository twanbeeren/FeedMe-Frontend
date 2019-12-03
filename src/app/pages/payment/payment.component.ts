import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketService } from 'src/app/core/services/ticket.service';
import { Order } from 'src/app/core/classes/order';
import { OrderService } from 'src/app/core/services/order.service';
import { MenuItem } from 'src/app/core/classes/menu-item';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  tableNrParam;

  constructor(public ticketService: TicketService, public orderService: OrderService) { }

  ngOnInit() {
    this.ticketService.tableNumber.subscribe(tableNr => this.tableNrParam = `{number: ${tableNr}}`);

    Promise.all(this.ticketService.ticket.orders.map(order => {
      Promise.all(order.orderItems.map(async menuItem => {
        const retrievedItem = await this.orderService.getItem(menuItem.item);
        menuItem.item = retrievedItem.data();
      }));
    }));
  }
}
