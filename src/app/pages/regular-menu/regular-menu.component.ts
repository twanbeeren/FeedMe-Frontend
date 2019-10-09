import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { MenuItem } from 'src/app/core/classes/menu-item';
import { Course } from 'src/app/core/classes/course';
import { COURSES, MENU } from 'src/app/core/services/mock-menu'; //temp
import { MatDialog } from '@angular/material/dialog';
import { DishInfoDialogComponent } from 'src/app/components/dialogs/dish-info-dialog/dish-info-dialog.component';
import { MatSnackBar } from '@angular/material';
import { TranslatorService } from 'src/app/core/services/translator.service';

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
    private dialog: MatDialog,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.menu_service.getMenu().subscribe(data => {
      this.menu_items = data;
      console.log(this.menu_items)
    });
  }

  addToOrder(item: MenuItem) {
    //TODO: orderService.addItem(item);
    console.log("TODO: orderService.addItem(" + item.name + ");");
    this.showAddedToOrderSnackbar(item);
  }

  showAddedToOrderSnackbar(item: MenuItem) {
    let snackbarRef = this.snackbar.open("Added " + item.name, "Undo", {
      duration: 3000,
    });

    snackbarRef.onAction().subscribe(() => {
      //TODO: orderService.removeItem(item);
      console.log("TODO: orderService.removeItem(" + item.name + ");");
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
