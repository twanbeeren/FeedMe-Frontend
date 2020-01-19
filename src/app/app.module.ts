import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CustomMaterialModule } from './core/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { I18nComponent } from './components/i18n/i18n.component';
import { RegularMenuComponent } from './pages/regular-menu/regular-menu.component';
import { NavTopComponent } from './components/nav-top/nav-top.component';
import { NavTableComponent } from './components/nav-bottom/nav-table/nav-table.component';
import { NavKitchenComponent } from './components/nav-bottom/nav-kitchen/nav-kitchen.component';
import { DrinksMenuComponent } from './pages/drinks-menu/drinks-menu.component';
import { TableNumberComponent } from './pages/table-number/table-number.component';
import { OrderComponent } from './pages/order/order.component';
import { DishInfoDialogComponent } from './components/dialogs/dish-info-dialog/dish-info-dialog.component';
import { KitchenComponent } from './pages/kitchen/kitchen.component';
import { LoginComponent } from './pages/login/login.component';
import { PaymentComponent } from './pages/payment/payment.component';

import { FilterByCoursePipe } from 'src/app/core/pipes/filter-by-course.pipe';
import { SortCoursesPipe } from './core/pipes/sort-courses.pipe';

import { SwipeMenuModule } from './pages/swipe-menu/swipe-menu.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PaymentFinishedComponent } from './pages/payment/payment-finished/payment-finished.component';
import { TicketHistoryComponent } from './pages/ticket-history/ticket-history.component';
import { TicketOverviewComponent } from './pages/ticket-overview/ticket-overview.component';
import { OrdersDialogComponent } from './components/dialogs/orders-dialog/orders-dialog.component';
import { PipesModule } from './pages/pipes/pipes.module';
import { FilterTagsModule } from './components/filter-tags/filter-tags.module';
import {SwipeCardLibModule} from 'ng-swipe-card';

@NgModule({
  declarations: [
    AppComponent,
    I18nComponent,
    RegularMenuComponent,
    FilterByCoursePipe,
    SortCoursesPipe,
    DishInfoDialogComponent,
    NavTopComponent,
    NavTableComponent,
    NavKitchenComponent,
    DrinksMenuComponent,
    TableNumberComponent,
    OrderComponent,
    LoginComponent,
    KitchenComponent,
    PaymentComponent,
    TicketHistoryComponent,
    TicketOverviewComponent,
    OrdersDialogComponent,
    PaymentFinishedComponent,
  ],
  entryComponents: [DishInfoDialogComponent, OrdersDialogComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SwipeMenuModule,
    FilterTagsModule,
    PipesModule,
    SwipeCardLibModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
