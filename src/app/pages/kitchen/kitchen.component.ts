import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { KitchenService } from 'src/app/core/services/kitchen.service';
import { Order } from 'src/app/core/classes/order';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  orders$: Observable<Order[]>;

  constructor(public kitchenService: KitchenService) { }

  ngOnInit() {
    this.orders$ = this.kitchenService.getOrders();
  }

  setStatus(id: string, newStatus: string) {
    this.kitchenService.setStatus(id, newStatus);
  }
}
