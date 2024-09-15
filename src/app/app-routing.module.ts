import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'budget',
    loadComponent: () => import('./components/budget/budget.component').then(m => m.BudgetComponent)
  },
  // If you need a parameterized route for the budget:
  {
    path: 'budget/:id',
    loadComponent: () => import('./components/budget/budget.component').then(m => m.BudgetComponent)
  },
  { path: '**', redirectTo: '' } // Wildcard route for a 404 or redirect
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
