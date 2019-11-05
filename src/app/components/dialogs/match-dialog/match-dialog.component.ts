import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DishInfoDialogComponent, DishInfoData } from '../dish-info-dialog/dish-info-dialog.component';

@Component({
  selector: 'app-match-dialog',
  templateUrl: './match-dialog.component.html',
  styleUrls: ['./match-dialog.component.css']
})
export class MatchDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DishInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DishInfoData
  ) { }

  ngOnInit() {
  }

  onCloseClick() {
    this.dialogRef.close();
  }

}
