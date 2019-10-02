import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { MenuItem } from 'src/app/core/classes/menu-item';

@Component({
  selector: 'app-regular-menu',
  templateUrl: './regular-menu.component.html',
  styleUrls: ['./regular-menu.component.css']
})
export class RegularMenuComponent implements OnInit {

  menu_items : MenuItem[];

  constructor(private menu_service: MenuService) { }

  ngOnInit() {
    this.menu_service.getMenu().subscribe(data => {
      this.menu_items = data;
      console.log(this.menu_items)
    });
  }

}
