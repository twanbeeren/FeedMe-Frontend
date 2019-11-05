import { Injectable } from '@angular/core';
import { MenuItem } from '../classes/menu-item';
import { Order } from '../classes/order';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order: Observable<Order[]>;

  constructor(private db: AngularFirestore) {
    this.setOrder();
  }

  private async setOrder() {
     this.order = this.db.collection<Order>('Orders').valueChanges();  
  }

  newOrder(tableNr : number){
    //this.order = new Order(tableNr);
  }

  addItem(item: MenuItem){
    // TODO: check if order is not null
    //this.order.addItem(item);
  }

  removeItem(item: MenuItem){
    // TODO: check if order is not null
    this.order.removeItem(item.id);
  }

  // getOrder(){
    // TODO: check if order is not null
    // return this.order;
  // }

  getOrder(): Observable<Order> {
    return this.db.collection<Order>('Orders').valueChanges();
  }

  sendOrder(){
    //TODO: implement
    throw Error("Not implemented!");
  }

}
