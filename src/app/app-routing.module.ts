import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { SwipePageComponent } from './pages/swipe-menu/swipe-page/swipe-page.component';
import { HomeComponent } from './pages/home/home.component';
import { RegularMenuComponent } from './pages/regular-menu/regular-menu.component';
import { DrinksMenuComponent } from './pages/drinks-menu/drinks-menu.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'preferences', component: PreferencesComponent},
  { path: 'home', component: HomeComponent},
  { path: 'swipemenu', component: SwipePageComponent},
  { path: 'regularmenu', component: RegularMenuComponent},
  {path: 'drinksmenu', component:DrinksMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
