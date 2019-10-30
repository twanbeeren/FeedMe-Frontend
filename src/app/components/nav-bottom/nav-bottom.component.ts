import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-nav-bottom',
  templateUrl: './nav-bottom.component.html',
  styleUrls: ['./nav-bottom.component.css']
})
export class NavBottomComponent implements OnInit {

  

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  itemsInOrder(): string {
    return this.orderService.getItemCount().toString();
  }
}
