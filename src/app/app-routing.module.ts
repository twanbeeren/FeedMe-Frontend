import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { I18nComponent } from './components/i18n/i18n.component';
import { SwipePageComponent } from './pages/swipe-menu/swipe-page/swipe-page.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'i18n', component: I18nComponent},
  { path: 'swipemenu', component: SwipePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
