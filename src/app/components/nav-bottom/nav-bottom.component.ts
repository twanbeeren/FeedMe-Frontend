import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/core/services/order.service';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-nav-bottom',
  templateUrl: './nav-bottom.component.html',
  styleUrls: ['./nav-bottom.component.css']
})
export class NavBottomComponent implements OnInit {

  constructor(
    private orderService: OrderService,
    private menuService: MenuService) { }

  ngOnInit() {
  }

  itemsInOrder(): number {
    return this.orderService.getItemCount();
  }

  filterTags(): string {
    return this.menuService.filterTags.length.toString();
  }
}
