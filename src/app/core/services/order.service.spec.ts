import { TestBed } from '@angular/core/testing';

import { OrderService } from './order.service';
import { MenuItem } from '../classes/menu-item';
import { AngularFirestore } from '@angular/fire/firestore';
import { TicketService } from './ticket.service';

describe('OrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ AngularFirestore, TicketService ]
  }));

  it('should be created', () => {
    const service: OrderService = TestBed.get(OrderService);
    expect(service).toBeTruthy();
  });

  it('should create order and add/remove', () => {
    const service: OrderService = TestBed.get(OrderService);
    service.newOrder();
    expect(service.order).toBeTruthy();
    expect(service.order.orderItems).toBeTruthy();

    const item = new MenuItem();
    service.addItem(item);
    expect(service.order.orderItems.length).toBe(1);

    service.removeItem(item);
    expect(service.order.orderItems.length).toBe(0);
  });
});
