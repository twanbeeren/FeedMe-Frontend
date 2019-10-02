import { MenuItem } from './menu-item';

export class Order {
    id: number;
    tableNr: number;
    time: Date;
    items: MenuItem[];

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
