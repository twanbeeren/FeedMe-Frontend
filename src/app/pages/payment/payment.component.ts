import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/core/services/ticket.service';
import { OrderService } from 'src/app/core/services/order.service';
import { MenuItem } from 'src/app/core/classes/menu-item';
import { PaymentService } from 'src/app/core/services/payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  tableNrParam;

  constructor(
    public ticketService: TicketService,
    public orderService: OrderService,
    private paymentService: PaymentService,
    private router: Router) { }

  ngOnInit() {
    this.ticketService.tableNumber$.subscribe(tableNr => this.tableNrParam = `{number: ${tableNr}}`);

    Promise.all(this.ticketService.ticket.orders.map(order => {
      Promise.all(order.orderItems.map(async menuItem => {
        const retrievedItem = await this.orderService.getItem(menuItem.item);
        menuItem.item = retrievedItem.data();
      }));
    }));
  }

  pay() {
    const id = this.ticketService.ticket.id;
    this.paymentService.pay();
    console.log(id);
    this.router.navigate(['/payment-finished', id]);
  }
}
