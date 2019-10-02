import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { MenuItem } from 'src/app/core/classes/menu-item';
import { Course } from 'src/app/core/classes/course';
import { COURSES, MENU } from 'src/app/core/services/mock-menu'; //temp
import { MatDialog } from '@angular/material/dialog';
import { DishcardComponent } from '../swipe-menu/swipe-page/dishcard/dishcard.component';

@Component({
  selector: 'app-regular-menu',
  templateUrl: './regular-menu.component.html',
  styleUrls: ['./regular-menu.component.css']
})
export class RegularMenuComponent implements OnInit {

  menu_items : MenuItem[] = MENU;
  courses: Course[] = COURSES;

  constructor(
    private menu_service: MenuService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.menu_service.getMenu().subscribe(data => {
      this.menu_items = data;
      console.log(this.menu_items)
    });
  }

  addToOrder(item: MenuItem) {
    //TODO: add item to order with orderService
    console.log("Add to menu: " + item.name);
  }

  openDishInfoDialog(item: MenuItem): void {
    // https://material.angular.io/components/dialog/overview
    //TODO: make dialog pop up with info about selected product
    console.log("Show dialog: " + item.name);
  }
}
