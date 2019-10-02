import { Injectable } from '@angular/core';
import { MenuItem } from '../classes/menu-item';
import { Order } from '../classes/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order: Order = new Order();

  addItem(item: MenuItem){
    this.order.addItem(item);
  }

  sendOrder(){
    //TODO: implement
    throw Error("Not implemented!");
  }
  
  constructor() { }
}
