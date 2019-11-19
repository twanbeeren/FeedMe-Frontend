import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwipePageComponent } from './pages/swipe-menu/swipe-page/swipe-page.component';
import { HomeComponent } from './pages/home/home.component';
import { RegularMenuComponent } from './pages/regular-menu/regular-menu.component';
import { DrinksMenuComponent } from './pages/drinks-menu/drinks-menu.component';
import { OrderComponent } from './pages/order/order.component';
import { KitchenComponent } from './pages/kitchen/kitchen.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'swipemenu', component: SwipePageComponent },
  { path: 'regularmenu', component: RegularMenuComponent },
  { path: 'order', component: OrderComponent },
  { path: 'drinksmenu', component: DrinksMenuComponent },
  { path: 'kitchen', component: KitchenComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'swipemenu', component: SwipePageComponent, canActivate: [AuthGuard] },
  { path: 'regularmenu', component: RegularMenuComponent, canActivate: [AuthGuard] },
  { path: 'order', component: OrderComponent, canActivate: [AuthGuard] },
  { path: 'drinksmenu', component: DrinksMenuComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
