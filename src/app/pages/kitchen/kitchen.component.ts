import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { KitchenService } from 'src/app/core/services/kitchen.service';
import { Order } from 'src/app/core/classes/order';

export class Tile {
  color: string;
  order: Order;
}

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  constructor(public kitchenService: KitchenService) { }

  orders$: Observable<Order[]>;
  tile: Tile;

  tiles: Tile[] = [];

  ngOnInit() {
    this.orders$ = this.kitchenService.getOrders();
    this.setTiles();
  }

  setTiles() {
    this.orders$.subscribe(orders => {
      this.tiles = [];
      orders.forEach(order => {
        if (order.status === 'Sent') {
          this.tile = new Tile();
          this.tile.color = 'lightblue';
          this.tile.order = order;
          this.tiles.push(this.tile);
        }
      });
    });
  }

  setStatus(id: string, newStatus: string) {
    console.log(id, newStatus);
    this.kitchenService.setStatus(id, newStatus);
    this.setTiles();
  }
}
