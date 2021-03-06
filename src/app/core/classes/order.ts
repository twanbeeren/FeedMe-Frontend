import { MenuItem } from './menu-item';
import { Guid } from 'guid-typescript';

export class Order {

  id: string;
  time: Date;
  orderItems: { item: any, amount: number }[] = [];
  status: string;
  ticketId: string;
  tableNr: number;

  madeNoise: boolean;

  constructor() {
    this.time = new Date();
    this.id = Guid.raw();
    this.madeNoise = false;
  }

  removeItem(itemId: string) {
    this.orderItems.forEach(orderItem => {
      if (orderItem.item.id === itemId) {
        orderItem.amount--;
        if (orderItem.amount === 0) {
          const index = this.orderItems.indexOf(orderItem);
          this.orderItems.splice(index, 1);
        }
        return;
      }
    });
  }

  addItem(itemToAdd: MenuItem) {
    let hasBeenAdded = false;
    this.orderItems.forEach(orderItem => {
      if (orderItem.item.id === itemToAdd.id) {
        orderItem.amount++;
        hasBeenAdded = true;
      }
    });

    if (!hasBeenAdded) {
      this.orderItems.push({ item: itemToAdd, amount: 1 });
    }

  }

  getTotalPrice() {
    let price = 0;
    this.orderItems.forEach(item => {
      price += item.item.price * item.amount;
    });
    return price;
  }
}
