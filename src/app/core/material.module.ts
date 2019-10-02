import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule, MatListModule, MatChipsModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatRadioModule, MatFormFieldModule, MatExpansionModule
} from '@angular/material';

@NgModule({
  imports: [
  CommonModule,
  MatToolbarModule,
  MatRadioModule,
  MatButtonModule,
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
  ],
  exports: [
  CommonModule,
   MatToolbarModule,
   MatButtonModule,
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
   ],
})
export class CustomMaterialModule { }
