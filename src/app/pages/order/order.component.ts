import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/core/services/order.service';
import { Order } from 'src/app/core/classes/order';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order: Order;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

}
