import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
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
export class KitchenComponent implements OnInit {

  constructor(public kitchenService: KitchenService) { }

  sentOrders$: Observable<Order[]>;
  doneOrders$: Observable<Order[]>;
  tile: Tile;
  private dialog: MatDialog;

  sentTiles: Tile[] = [];
  doneTiles: Tile[] = [];

  ngOnInit() {
    this.sentOrders$ = this.kitchenService.getSentOrders();
    this.doneOrders$ = this.kitchenService.getDoneOrders();
    this.setSentTiles();
    this.setDoneTiles();
  }

  setSentTiles() {
    this.sentOrders$.subscribe(orders => {
      this.sentTiles = [];
      orders.forEach(order => {
        this.tile = new Tile();
        this.tile.border = '5px solid blue';
        this.tile.order = order;
        this.sentTiles.push(this.tile);
      });
    });
  }

  setDoneTiles() {
    this.doneOrders$.subscribe(orders => {
      this.doneTiles = [];
      orders.forEach(order => {
        this.tile = new Tile();
        this.tile.border = '5px solid green';
        this.tile.order = order;
        this.doneTiles.push(this.tile);
      });
    });
  }

  setStatus(id: string, newStatus: string) {
    console.log(id, newStatus);
    this.kitchenService.setStatus(id, newStatus);
    this.setSentTiles();
    this.setDoneTiles();
  }

  showInfo(order: Order) {
    const dialogRef = this.dialog.open(DishInfoDialogComponent, {data: {value: order}});
  }
}
