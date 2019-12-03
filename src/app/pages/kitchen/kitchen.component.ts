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

  doneOrders$: Observable<Order[]>;
  sentOrders$: Observable<Order[]>;

  constructor(public kitchenService: KitchenService) { }

  ngOnInit() {
    this.doneOrders$ = this.kitchenService.getDoneOrders();
    this.sentOrders$ = this.kitchenService.getSentOrders();
  }

  setStatus(id: string, newStatus: string) {
    this.kitchenService.setStatus(id, newStatus);
  }
}
