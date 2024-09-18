import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetComponent } from './budget.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PositionModalComponent } from '../position-modal/position-modal.component';
import { MatTableModule } from '@angular/material/table';
import { PaginatorComponent } from '../paginator/paginator.component';
import { DonutChartComponent } from '../donut-chart/donut-chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BudgetRoutingModule } from './budget-routing.module';

const routes: Routes = [
  { path: '', component: BudgetComponent } // Default route for the Dashboard
];

@NgModule({
  declarations: [
    BudgetComponent,
    PositionModalComponent,
    PaginatorComponent,
    DonutChartComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BudgetRoutingModule
  ]
})
export class BudgetModule { }
