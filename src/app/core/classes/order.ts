import { MenuItem } from './menu-item';
import { Guid } from "guid-typescript";

export class Order {
    id: string;
    tableNr: number;
    time: Date;
    items: MenuItem[];

    constructor(table: number) {
        this.tableNr = table;
        this.time = new Date();
        this.id = Guid.raw();
    }

    addItem(item: MenuItem) {
        this.items.push(item);
    }

    removeItem(id: string) {
        this.items.forEach(item => {
            if (item.id === id) {
                const index = this.items.indexOf(item);
                this.items.splice(index);
                return;
            }
        });
    }
}
