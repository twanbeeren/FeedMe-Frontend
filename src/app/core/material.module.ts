import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatButtonToggleModule, MatBadgeModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule, MatListModule, MatChipsModule, MatDatepickerModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatRadioModule, MatFormFieldModule, MatExpansionModule, MatSnackBarModule, MatNativeDateModule, MatGridListModule
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
    MatGridListModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatCardModule,
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
    MatGridListModule
  ],
  declarations: [],
  providers: [
    MatDatepickerModule,
  ]
})
export class CustomMaterialModule { }
