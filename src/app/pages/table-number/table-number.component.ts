import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/core/services/order.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { TranslatorService } from 'src/app/core/services/translator.service';
import { ValidateService } from 'src/app/core/services/validate.service';

@Component({
  selector: 'app-table-number',
  templateUrl: './table-number.component.html',
  styleUrls: ['./table-number.component.css']
})
export class TableNumberComponent implements OnInit {

  tableForm: FormGroup;

  constructor(
    private orderService: OrderService,
    private validateService: ValidateService,
    private router: Router,
    private translator: TranslatorService,
    private snackbar: MatSnackBar) {}

  ngOnInit() {
    this.initForm();
  }

  setTableNumber(tableFormValue) {
    let tableNr: number = parseInt(tableFormValue.tableNumber);
    if (!isNaN(tableFormValue.tableNumber)) { // Is the tableNumber actually a number?
      this.validateService.validate(tableFormValue.password).subscribe(valid => { // Validate password with database
        if (valid) {
          this.orderService.setTableNumber(tableNr); // Set tableNumber for new orders
          this.router.navigateByUrl("/swipemenu"); // Go to swipe menu if validated
        } else this.showIncorrectSnackbar();
      });
    } else this.showIncorrectSnackbar();
  }

  showIncorrectSnackbar() {    
    this.snackbar.open(this.translator.translate("snackbar.login_failed"), "", {
      duration: 1000,
    });
  }

  initForm() {
    this.tableForm = new FormGroup({
      tableNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      password: new FormControl('', Validators.required),
    });
  }

  hasError(controlName: string, errorName: string) {
    return this.tableForm.controls[controlName].hasError(errorName);
  }
}
