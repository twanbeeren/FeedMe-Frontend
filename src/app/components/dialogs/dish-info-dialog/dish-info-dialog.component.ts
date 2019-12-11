import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MenuItem } from 'src/app/core/classes/menu-item';

export interface DishInfoData {
  dish: MenuItem;
}

@Component({
  selector: 'app-dish-info-dialog',
  templateUrl: './dish-info-dialog.component.html',
  styleUrls: ['./dish-info-dialog.component.css']
})
export class DishInfoDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DishInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DishInfoData) { }

  onCloseClick() {
    this.dialogRef.close();
  }

  isVegetarian(item: MenuItem): boolean {
    return item.tags.indexOf('Vegetarian') !== -1;
  }
}
