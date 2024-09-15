import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BudgetComponent } from './components/budget/budget.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'budget', component: DashboardComponent },
  { path: 'dashboard', component: BudgetComponent },
  // { path: 'budget/:id', component: BudgetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
