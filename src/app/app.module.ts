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
import { NavKitchenComponent } from './components/nav-bottom/nav-kitchen/nav-kitchen.component';
import { NavBottomComponent } from './components/nav-bottom/nav-bottom.component';
import { DrinksMenuComponent } from './pages/drinks-menu/drinks-menu.component';
import { TableNumberComponent } from './pages/table-number/table-number.component';
import { OrderComponent } from './pages/order/order.component';
import { DishInfoDialogComponent } from './components/dialogs/dish-info-dialog/dish-info-dialog.component';
import { KitchenComponent } from './pages/kitchen/kitchen.component';
import { LoginComponent } from './pages/login/login.component';
import { PaymentComponent } from './pages/payment/payment.component';

import { FilterByCoursePipe } from 'src/app/core/pipes/filter-by-course.pipe';
import { FilterByTagsPipe } from './core/pipes/filter-by-tags.pipe';
import { SortCoursesPipe } from './core/pipes/sort-courses.pipe';

import { SwipeMenuModule } from './pages/swipe-menu/swipe-menu.module';
import { FilterTagsModule } from './components/filter-tags/filter-tags.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    I18nComponent,
    RegularMenuComponent,
    FilterByCoursePipe,
    FilterByTagsPipe,
    SortCoursesPipe,
    DishInfoDialogComponent,
    NavTopComponent,
    NavBottomComponent,
    NavKitchenComponent,
    DrinksMenuComponent,
    TableNumberComponent,
    OrderComponent,
    LoginComponent,
    KitchenComponent,
    PaymentComponent,
  ],
  entryComponents: [DishInfoDialogComponent],
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
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
