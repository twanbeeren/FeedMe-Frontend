import { Order } from './order'
import { Guid } from 'guid-typescript';
export class Ticket {
    id: string;
    tableNr: number;
    orders: Order[];
    orderRefs: string[];
    time: Date;
    finished: boolean;

    constructor(tableNumber?: number, ticket?: Ticket) {
        if (ticket) {
            Object.keys(ticket).forEach(key => {
                this[key] = ticket[key];
            })
        } else {
            this.id = Guid.raw();
            this.tableNr = tableNumber;
            this.time = new Date();
            this.finished = false;
            this.orders = [];
            this.orderRefs = [];
        }
    }

    addOrder(order: Order) {
        this.orders.push(order);
    }

    finish() {
        this.finished = true;
    }

    setOrderRefs() {
        if (this.orderRefs.length > 0) {
            this.orders.forEach(order => {
                this.orderRefs.push(order.id);
            });
        }

    }
}

