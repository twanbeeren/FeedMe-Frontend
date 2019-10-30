import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CustomMaterialModule } from './core/material.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { I18nComponent } from './components/i18n/i18n.component';
import { HomeComponent } from './pages/home/home.component';
import { RegularMenuComponent } from './pages/regular-menu/regular-menu.component';
import { SwipeMenuModule } from './pages/swipe-menu/swipe-menu.module';
import { NavTopComponent } from './components/nav-top/nav-top.component';
import { NavBottomComponent } from './components/nav-bottom/nav-bottom.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SwipePageComponent } from './pages/swipe-menu/swipe-page/swipe-page.component';

import { FilterByCoursePipe } from 'src/app/core/pipes/filter-by-course.pipe';
import { DishInfoDialogComponent } from './components/dialogs/dish-info-dialog/dish-info-dialog.component';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SortCoursesPipe } from './core/pipes/sort-courses.pipe';
import { DrinksMenuComponent } from './pages/drinks-menu/drinks-menu.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { FilterByTagsPipe } from './core/pipes/filter-by-tags.pipe';

@NgModule({
  declarations: [
    AppComponent,
    I18nComponent,
    HomeComponent,
    RegularMenuComponent,
    FilterByCoursePipe,
    FilterByTagsPipe,
    SortCoursesPipe,
    DishInfoDialogComponent,
    NavTopComponent,
    NavBottomComponent,
    DrinksMenuComponent,
    PreferencesComponent,
  ],
  entryComponents: [DishInfoDialogComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

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
    SwipeMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
