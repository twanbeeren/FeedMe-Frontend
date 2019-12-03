import { Injectable } from '@angular/core';
import { Observable, of, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../classes/order';
import { throwToolbarMixedModesError } from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class KitchenService {


  private currentOrdersAmount = 0;
  constructor(private db: AngularFirestore) { }

  getSentOrders() {
    return this.getOrdersByQuery('status', 'Sent');
  }

  getDoneOrders() {
    return this.getOrdersByQuery('status', 'Done');
  }

  getOrdersByQuery(property: string, value: string): Observable<Order[]> {
    return this.db.collection<Order>('Orders', ref => ref.where(property, '==', value)).valueChanges().pipe(
      map(orders => {
        const orderLength = orders.length;
        console.log('orderlength ' + orderLength);
        orders.forEach(order => {

          if (order.status === 'Sent') {
            if (orderLength > this.currentOrdersAmount && order.status === 'Sent') {
              console.log('currentorderamount ' + this.currentOrdersAmount);
              this.playNewOrderSound(order);
            }
            this.currentOrdersAmount = orderLength;
          }

          order.orderItems.forEach(async item => {
            const ref = this.db.collection('MenuItems').doc(item.item);
            await ref.get().toPromise().then(receivedItem => {
            item.item = receivedItem.data();
            });
          });
        });
        console.log(orders);
        return orders;
      })
    );
  }

  setStatus(id: string, newStatus: string) {
    this.db.collection('Orders').doc(id).update({ status: newStatus });
  }

  playNewOrderSound(order: Order) {
    if (order.status === 'Sent' && order.madeNoise !== true) {
      const audio = new Audio();
      audio.src = '../../../assets/sounds/light.mp3';
      audio.load();
      audio.play();
      order.madeNoise = true;
    }
  }
}
