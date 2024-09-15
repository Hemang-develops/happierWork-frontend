import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BudgetComponent } from './components/budget/budget.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  // {
  //   path: 'dashboard',
  //   loadChildren: () =>
  //     import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
  // },
  // {
  //   path: 'budget',
  //   loadChildren: () =>
  //     import('./components/budget/budget.module').then(m => m.BudgetModule)
  // },
  { path: 'budget', component: DashboardComponent },
  { path: 'dashboard', component: BudgetComponent },
  // { path: 'budget/:id', component: BudgetComponent },
  { path: '**', redirectTo: '' }, // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
