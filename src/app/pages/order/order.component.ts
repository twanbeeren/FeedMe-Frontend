import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/core/services/order.service';
import { Order } from 'src/app/core/classes/order';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {


  constructor(public orderService: OrderService) { }

  ngOnInit() {
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.orderService.order.orderItems.forEach(orderItem => {      
      totalPrice += orderItem.item.price * orderItem.amount;
    });
    return totalPrice;
  }
}
