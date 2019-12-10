import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatButtonToggleModule, MatBadgeModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatInputModule, MatTableModule, MatListModule, MatChipsModule, MatDatepickerModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatRadioModule, MatFormFieldModule, MatExpansionModule, MatSnackBarModule, MatNativeDateModule, MatGridListModule, MatSlideToggleModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatRadioModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatListModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatGridListModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatListModule,
    MatChipsModule,
    MatDatepickerModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatGridListModule
  ],
  declarations: [],
  providers: [
    MatDatepickerModule,
  ]
})
export class CustomMaterialModule { }
