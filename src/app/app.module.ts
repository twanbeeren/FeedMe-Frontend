import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { CustomMaterialModule } from './core/material.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { I18nComponent } from './components/i18n/i18n.component';
import { HomeComponent } from './pages/home/home.component';
import { SwipePageComponent } from './pages/swipe-menu/swipe-page/swipe-page.component';
import { RegularMenuComponent } from './pages/regular-menu/regular-menu.component';
import { SwipeMenuModule } from './pages/swipe-menu/swipe-menu.module';
import { NavTopComponent } from './components/nav-top/nav-top.component';
import { NavBottomComponent } from './components/nav-bottom/nav-bottom.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { FilterByCoursePipe } from 'src/app/core/pipes/filter-by-course.pipe';

@NgModule({
  declarations: [
    AppComponent,
    I18nComponent,
    HomeComponent,
    RegularMenuComponent,
    FilterByCoursePipe,
    NavTopComponent,
    NavBottomComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
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
