import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { KitchenService } from 'src/app/core/services/kitchen.service';
import { Order } from 'src/app/core/classes/order';
import { MatDialog } from '@angular/material';
import { DishInfoDialogComponent } from 'src/app/components/dialogs/dish-info-dialog/dish-info-dialog.component';

export class Tile {
  border: string;
  order: Order;
}

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();
  sentOrders$: Observable<Order[]>;
  doneOrders$: Observable<Order[]>;
  tile: Tile;
  private dialog: MatDialog;

  sentTiles: Tile[] = [];
  doneTiles: Tile[] = [];

  constructor(public kitchenService: KitchenService) { }

  ngOnInit() {
    this.sentOrders$ = this.kitchenService.getSentOrders();
    this.doneOrders$ = this.kitchenService.getDoneOrders();
    this.setSentTiles();
    this.setDoneTiles();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setSentTiles() {
    const sub = this.sentOrders$.subscribe(orders => {
      this.sentTiles = [];
      orders.forEach(order => {
        this.tile = new Tile();
        this.tile.border = '5px solid blue';
        this.tile.order = order;
        this.sentTiles.push(this.tile);
      });
    });

    this.subscription.add(sub);
  }

  setDoneTiles() {
    const sub = this.doneOrders$.subscribe(orders => {
      this.doneTiles = [];
      orders.forEach(order => {
        this.tile = new Tile();
        this.tile.border = '5px solid green';
        this.tile.order = order;
        this.doneTiles.push(this.tile);
      });
    });

    this.subscription.add(sub);
  }

  setStatus(id: string, newStatus: string) {
    this.kitchenService.setStatus(id, newStatus);
    this.setSentTiles();
    this.setDoneTiles();
  }

  showInfo(order: Order) {
    this.dialog.open(DishInfoDialogComponent, { data: { value: order } });
  }
}
