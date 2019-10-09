import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { OrderService } from 'src/app/core/services/order.service';
import { MenuItem } from 'src/app/core/classes/menu-item';
import { Course } from 'src/app/core/classes/course';
import { COURSES, MENU } from 'src/app/core/services/mock-menu'; //temp
import { DishInfoDialogComponent } from 'src/app/components/dialogs/dish-info-dialog/dish-info-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-regular-menu',
  templateUrl: './regular-menu.component.html',
  styleUrls: ['./regular-menu.component.css']
})
export class RegularMenuComponent implements OnInit {

  courses: Course[] = [];
  menuItems : MenuItem[] = [];

  constructor(
    private orderService: OrderService,
    private menuService: MenuService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.menuService.getCourses().subscribe(data => {
      this.courses = data;
    });
    this.menuService.getMenu().subscribe(data => {
      this.menuItems = data;
    });
  }

  addToOrder(item: MenuItem) {
    this.orderService.addItem(item);
    this.showAddedToOrderSnackbar(item);
  }

  showAddedToOrderSnackbar(item: MenuItem) {
    let snackbarRef = this.snackbar.open("Added " + item.name, "Undo", {
      duration: 3000,
    });

    snackbarRef.onAction().subscribe(() => {
      this.orderService.removeItem(item);
      this.snackbar.open("Removed " + item.name, "", {
        duration: 1000,
      });
    })
  }

  openDishInfoDialog(item: MenuItem): void {
    let dialogRef = this.dialog.open(DishInfoDialogComponent, {data: {dish: item}});

    dialogRef.afterClosed().subscribe(result => {
      if (result != null){
        this.addToOrder(result);
      }
    });
  }
}
