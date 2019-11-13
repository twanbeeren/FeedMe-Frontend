import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatButtonToggleModule, MatBadgeModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule, MatListModule, MatChipsModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatRadioModule, MatFormFieldModule, MatExpansionModule, MatSnackBarModule
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
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatSnackBarModule,
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
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatSnackBarModule,
  ],
  declarations: [],
})
export class CustomMaterialModule { }
