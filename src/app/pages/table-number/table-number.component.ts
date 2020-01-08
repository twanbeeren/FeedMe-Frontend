import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/core/services/ticket.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { TranslatorService } from 'src/app/core/services/translator.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-table-number',
  templateUrl: './table-number.component.html',
  styleUrls: ['./table-number.component.css']
})
export class TableNumberComponent implements OnInit {

  tableForm: FormGroup;

  constructor(
    private ticketService: TicketService,
    private authService: AuthService,
    private router: Router,
    private translator: TranslatorService,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.initForm();
  }

  setTableNumber(tableFormValue) {
    const tableNr: number = tableFormValue.tableNumber;
    if (!isNaN(tableFormValue.tableNumber)) { // Is the tableNumber actually a number?
      this.ticketService.setTableNumber(tableNr); // Set tableNumber for new orders
      this.router.navigateByUrl('/swipemenu'); // Go to swipe menu if validated
    } else {
      this.showIncorrectSnackbar();
    }
  }

  goToKitchen() {
    this.authService.isInKitchen = true;
    this.router.navigateByUrl('/kitchen-orders');
  }

  showIncorrectSnackbar() {
    this.snackbar.open(this.translator.translate('snackbar.login_failed'), '', {
      duration: 1000,
    });
  }

  initForm() {
    this.tableForm = new FormGroup({
      tableNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    });
  }

  hasError(controlName: string, errorName: string) {
    return this.tableForm.controls[controlName].hasError(errorName);
  }
}
