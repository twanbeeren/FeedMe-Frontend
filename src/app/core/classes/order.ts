import { MenuItem } from './menu-item';
import { Guid } from "guid-typescript";

export class Order {
    id: string;
    tableNr: number;
    time: Date;
    items: MenuItem[];

    constructor(table: number){
        this.tableNr = table;
        this.time = new Date();
        this.id = Guid.create.toString();
    }

    addItem(item: MenuItem){
        this.items.push(item);
    }
    
    removeItem(id: number){
        this.items.forEach(item => {
            if(item.id === id){
                let index = this.items.indexOf(item);
                this.items.splice(index);
                return;
            }
        });
    }
}
