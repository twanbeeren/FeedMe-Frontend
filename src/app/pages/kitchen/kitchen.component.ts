import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { KitchenService } from 'src/app/core/services/kitchen.service';
import { Order } from 'src/app/core/classes/order';
import { MatDialog } from '@angular/material';
import { DishInfoDialogComponent } from 'src/app/components/dialogs/dish-info-dialog/dish-info-dialog.component';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();
  orders$: Order[];
  sentOrders$: Observable<Order[]>;
  doneOrders$: Observable<Order[]>;
  currentSelectedOrder: Order = null;

  constructor(public kitchenService: KitchenService) { }

  ngOnInit() {
    this.sentOrders$ = this.kitchenService.getSentOrders().pipe(
      map(lessons => lessons.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()))
    );
    this.doneOrders$ = this.kitchenService.getDoneOrders().pipe(
      map(lessons => lessons.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setStatus(id: string, newStatus: string) {
    this.kitchenService.setStatus(id, newStatus);
    this.currentSelectedOrder = null;
  }

  selectedOrder(order: Order) {
    this.currentSelectedOrder = order;
  }
}
