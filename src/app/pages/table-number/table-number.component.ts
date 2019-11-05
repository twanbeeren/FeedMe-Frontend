import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/core/services/order.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-table-number',
  templateUrl: './table-number.component.html',
  styleUrls: ['./table-number.component.css']
})
export class TableNumberComponent implements OnInit {

  tableForm: FormGroup;

  constructor(
    private orderService: OrderService,
    private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  setTableNumber(tableFormValue) {
    let tableNr: number = parseInt(tableFormValue.tableNumber);
    console.log(tableFormValue.tableNumber);
    console.log(tableFormValue.password);
    if (!isNaN(tableFormValue.tableNumber) && tableFormValue.password === 'admin') { // TEMP PASSWORD
      this.orderService.newOrder(tableNr);
      console.log("new order has been made");
      this.router.navigateByUrl("/swipemenu");      
    }
  }

  initForm() {
    this.tableForm = new FormGroup({
      tableNumber: new FormControl('', [Validators.required, Validators.pattern('[1-9]*')]),
      password: new FormControl('', Validators.required),
    });
  }

  hasError(controlName: string, errorName: string) {
    return this.tableForm.controls[controlName].hasError(errorName);
  }
}
