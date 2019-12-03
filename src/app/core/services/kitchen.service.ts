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
        orders.forEach(order => {
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
    if (order.status === 'Sent') {
      const audio = new Audio();
      audio.src = '../../../assets/sounds/light.mp3';
      audio.load();
      audio.play();
    }
  }
}
