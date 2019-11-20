import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../classes/order';
import { throwToolbarMixedModesError } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {

  constructor(private db: AngularFirestore) { }

  getOrders(): Observable<Order[]> {
    return this.db.collection<Order>('Orders').valueChanges().pipe(
      map(orders => {
        orders.forEach(order => {
          order.orderItems.forEach(async item => {

            const ref = this.db.collection('MenuItems').doc(item.item);
            await ref.get().toPromise().then(receivedItem => {
              item.item = receivedItem.data();
            });
          });
        });

        orders = orders.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
        return orders;
      })
    );
  }

  setStatus(id: string, newStatus: string) {
    this.db.collection('Orders').doc(id).update({ status: newStatus });
  }
}
