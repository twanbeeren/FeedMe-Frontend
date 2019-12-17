import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwipePageComponent } from './pages/swipe-menu/swipe-page/swipe-page.component';
import { RegularMenuComponent } from './pages/regular-menu/regular-menu.component';
import { DrinksMenuComponent } from './pages/drinks-menu/drinks-menu.component';
import { OrderComponent } from './pages/order/order.component';
import { KitchenComponent } from './pages/kitchen/kitchen.component';
import { TicketHistoryComponent } from './pages/ticket-history/ticket-history.component';
import { TicketOverviewComponent } from './pages/ticket-overview/ticket-overview.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { TableNumberComponent } from './pages/table-number/table-number.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { KitchenGuard } from './core/guards/kitchen.guard';
import { TableGuard } from './core/guards/table.guard';
import { PaymentFinishedComponent } from './pages/payment/payment-finished/payment-finished.component';

const routes: Routes = [
  { path: '', component: TableNumberComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'tablenumber', component: TableNumberComponent, canActivate: [AuthGuard] },
  { path: 'regularmenu', component: RegularMenuComponent, canActivate: [AuthGuard, TableGuard] },
  { path: 'drinksmenu', component: DrinksMenuComponent, canActivate: [AuthGuard, TableGuard] },
  { path: 'swipemenu', component: SwipePageComponent, canActivate: [AuthGuard, TableGuard] },
  { path: 'order', component: OrderComponent, canActivate: [AuthGuard, TableGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard, TableGuard] },
  { path: 'payment-finished', component: PaymentFinishedComponent, canActivate: [AuthGuard, TableGuard] },
  { path: 'kitchen-orders', component: KitchenComponent, canActivate: [AuthGuard, KitchenGuard], canDeactivate: [KitchenGuard] },
  { path: 'kitchen-tickets', component: TicketOverviewComponent, canActivate: [AuthGuard, KitchenGuard], canDeactivate: [KitchenGuard] },
  { path: 'kitchen-history', component: TicketHistoryComponent, canActivate: [AuthGuard, KitchenGuard], canDeactivate: [KitchenGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
