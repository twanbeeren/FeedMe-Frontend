import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { I18nComponent } from './components/i18n/i18n.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomMaterialModule } from './core/material.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { SwipePageComponent } from './pages/swipe-menu/swipe-page/swipe-page.component';
import { SwipeMenuModule } from './pages/swipe-menu/swipe-menu.module';
import { RegularMenuComponent } from './pages/regular-menu/regular-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    I18nComponent,
    HomeComponent,
    RegularMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    SwipeMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
