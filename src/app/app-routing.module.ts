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
import { TableNumberComponent } from './pages/table-number/table-number.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { KitchenGuard } from './core/guards/kitchen.guard';
import { TableGuard } from './core/guards/table.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'tablenumber', component: TableNumberComponent, canActivate: [AuthGuard] },
  { path: 'regularmenu', component: RegularMenuComponent, canActivate: [AuthGuard, TableGuard] },
  { path: 'drinksmenu', component: DrinksMenuComponent, canActivate: [AuthGuard, TableGuard] },
  { path: 'swipemenu', component: SwipePageComponent, canActivate: [AuthGuard, TableGuard] },
  { path: 'order', component: OrderComponent, canActivate: [AuthGuard, TableGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard, TableGuard] },
  { path: 'kitchen', component: KitchenComponent, canActivate: [AuthGuard, KitchenGuard], canDeactivate: [KitchenGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
