import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { I18nComponent } from './components/i18n/i18n.component';


const routes: Routes = [
  { path: '', component: I18nComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
