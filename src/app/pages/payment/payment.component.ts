import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/core/services/ticket.service';
import { OrderService } from 'src/app/core/services/order.service';
import { PaymentService } from 'src/app/core/services/payment.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  private subscription = new Subscription();
  tableNrParam;

  constructor(
    public ticketService: TicketService,
    public orderService: OrderService,
    private paymentService: PaymentService,
    private router: Router) { }

  ngOnInit() {
    const sub = this.ticketService.tableNumber$.subscribe(tableNr => this.tableNrParam = `{number: ${tableNr}}`);

    Promise.all(this.ticketService.ticket.orders.map(order => {
      Promise.all(order.orderItems.map(async menuItem => {
        const retrievedItem = await this.orderService.getItem(menuItem.item);
        menuItem.item = retrievedItem.data();
      }));
    }));

    this.subscription.add(sub);
  }

  pay() {
    const id = this.ticketService.ticket.id;
    this.paymentService.pay();
    console.log(id);
    this.router.navigate(['/payment-finished', id]);
  }
}
