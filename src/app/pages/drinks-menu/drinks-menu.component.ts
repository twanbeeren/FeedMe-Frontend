import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/classes/course';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/core/classes/menu-item';
import { TranslatorService } from 'src/app/core/services/translator.service';
import { OrderService } from 'src/app/core/services/order.service';
import { MenuService } from 'src/app/core/services/menu.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DishInfoDialogComponent } from 'src/app/components/dialogs/dish-info-dialog/dish-info-dialog.component';

@Component({
  selector: 'app-drinks-menu',
  templateUrl: './drinks-menu.component.html',
  styleUrls: ['./drinks-menu.component.css']
})
export class DrinksMenuComponent implements OnInit {

  drinks: Observable<MenuItem[]>;

  constructor(
    private translator: TranslatorService,
    private orderService: OrderService,
    private menuService: MenuService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.drinks = this.menuService.getDrinks();
  }

  addToOrder(item: MenuItem) {
    if (this.orderService.order == null)
      this.orderService.newOrder();

    if (this.orderService.addItem(item)) {
      this.showAddedToOrderSnackbar(item);
    } else this.snackbar.open(this.translator.translate("snackbar.failed", { name: item.name }));
  }

  showAddedToOrderSnackbar(item: MenuItem) {
    let snackbarRef = this.snackbar.open(
      this.translator.translate("snackbar.added", { name: item.name }),
      this.translator.translate("snackbar.undo"), {
      duration: 3000,
    });

    snackbarRef.onAction().subscribe(() => {
      this.orderService.removeItem(item);
      this.snackbar.open(this.translator.translate("snackbar.removed", { name: item.name }), "", {
        duration: 1000,
      });
    })
  }

  showInfo(item: MenuItem): void {
    let dialogRef = this.dialog.open(DishInfoDialogComponent, {data: {dish: item}});

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.addToOrder(result);
      }
    });
  }
}
